#!/usr/bin/env python3
"""Audita a cobertura das citações em data/candidates/*.js: varre o texto
INTEGRAL de cada plano (.sources-cache/texts/<id>.txt) por palavras-chave de
cada tema/subtema e sinaliza páginas que mencionam o assunto mas ainda não
têm nenhum `quote` citado naquele tema — candidatas a conteúdo relevante que
passou batido na leitura manual.

Isso NÃO decide sozinho o que falta: é um filtro pra reduzir o trabalho de
revisão de "reler o plano inteiro de novo" pra "olhar só as páginas
sinalizadas". Cada página sinalizada precisa ser lida e julgada por uma
pessoa (ou pelo Claude) antes de virar uma citação nova em
data/candidates/<id>.js — segue as mesmas regras de sempre (citação
literal, com página).

A granularidade é por PÁGINA, não por parágrafo/frase: é a mesma unidade que
`quote.page` já usa em data/candidates/*.js, então "página X já tem citação
pra esse tema" é uma comparação direta, sem heurística de recorte de
parágrafo (a extração de PDF não garante quebras de parágrafo limpas).

As listas de palavras-chave em KEYWORDS são um ponto de partida editorial,
não uma lista fechada — normal (e esperado) ampliar/ajustar conforme novos
falsos negativos ou falsos positivos aparecerem no uso.

Uso:
    cd ftm-eleicoes
    python3 scripts/audit_coverage.py                    # todos os 13 candidatos
    python3 scripts/audit_coverage.py caiado augusto-cury # só os ids passados
"""
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS_DIR = ROOT / ".sources-cache" / "texts"

# (kind, id, label) — kind é onde o candidato guarda aquele bloco:
# "economy" (c.economy.<id>), "themes" (c.themes.<id>) ou
# "direitosBemEstar" (c.direitosBemEstar.<id>), espelhando data/taxonomy.js.
CATEGORIES = [
    ("economy", "fiscal", "Fiscal e Contas Públicas"),
    ("economy", "tributacao", "Tributação"),
    ("economy", "cambio-comercio", "Câmbio e Comércio Exterior"),
    ("economy", "trabalho-renda", "Mercado de Trabalho e Renda"),
    ("economy", "inflacao-monetaria", "Inflação e Política Monetária"),
    ("economy", "estado-privatizacoes", "Papel do Estado e Privatizações"),
    ("economy", "infraestrutura-investimento", "Infraestrutura e Investimento"),
    ("themes", "educacao", "Educação"),
    ("themes", "seguranca", "Segurança Pública"),
    ("themes", "saude", "Saúde"),
    ("themes", "politica-externa", "Política Externa"),
    ("themes", "corrupcao", "Combate à Corrupção"),
    ("direitosBemEstar", "mulheres", "Direitos e Bem-Estar · Mulheres"),
    ("direitosBemEstar", "outros", "Direitos e Bem-Estar · Outros"),
    ("themes", "tecnologia", "Tecnologia"),
]

KEYWORDS = {
    "fiscal": [
        "arcabouco fiscal", "meta fiscal", "resultado primario", "deficit",
        "divida publica", "teto de gastos", "responsabilidade fiscal",
        "ajuste fiscal", "superavit", "regra fiscal", "gasto publico",
        "espaco fiscal",
    ],
    "tributacao": [
        "reforma tributaria", "imposto", "tributo", "cbs", "ibs",
        "imposto de renda", "carga tributaria", "isencao fiscal",
        "tributacao", "aliquota", "desoneracao",
    ],
    "cambio-comercio": [
        "cambio", "taxa de cambio", "exportacao", "importacao",
        "comercio exterior", "balanca comercial", "acordo comercial",
        "mercosul", "tarifa de importacao", "dolar", "livre comercio",
    ],
    "trabalho-renda": [
        "emprego", "desemprego", "carteira de trabalho", "clt",
        "salario minimo", "mercado de trabalho", "informalidade",
        "geracao de emprego", "trabalhador", "empregabilidade",
        "qualificacao profissional",
    ],
    "inflacao-monetaria": [
        "inflacao", "juros", "selic", "banco central", "politica monetaria",
        "meta de inflacao", "poder de compra",
    ],
    "estado-privatizacoes": [
        "privatizacao", "estatal", "empresa publica", "desestatizacao",
        "concessao", "estado minimo", "intervencao do estado", "bndes",
        "papel do estado",
    ],
    "infraestrutura-investimento": [
        "infraestrutura", "investimento", "rodovia", "ferrovia", "porto",
        "energia eletrica", "saneamento", "obras publicas", "ppp",
        "aeroporto", "logistica",
    ],
    "educacao": [
        "educacao", "escola", "ensino", "professor", "universidade",
        "creche", "alfabetizacao", "enem", "fundeb", "educacao infantil",
        "ensino superior", "educacao basica", "educacao tecnica",
    ],
    "seguranca": [
        "seguranca publica", "policia", "crime", "violencia", "homicidio",
        "presidio", "sistema prisional", "faccao", "crime organizado",
        "armas", "susp", "policial",
    ],
    "saude": [
        "saude", "sus", "hospital", "ubs", "medico", "atencao primaria",
        "vacina", "plano de saude", "mortalidade infantil",
        "leito hospitalar", "saude publica", "saude mental",
    ],
    "politica-externa": [
        "politica externa", "diplomacia", "itamaraty",
        "relacoes internacionais", "soberania", "brics", "onu",
        "politica internacional", "cooperacao internacional",
    ],
    "corrupcao": [
        "corrupcao", "transparencia", "fiscalizacao", "controle",
        "lavagem de dinheiro", "improbidade", "acesso a informacao",
        "compliance", "integridade publica", "anticorrupcao",
    ],
    "mulheres": [
        "mulher", "feminicidio", "violencia domestica", "violencia contra a mulher",
        "igualdade salarial", "maternidade", "creche", "empreendedora",
        "autonomia economica", "machismo", "assedio",
    ],
    "tecnologia": [
        "inteligencia artificial", "tecnologia", "inovacao", "digital",
        "dados", "algoritmo", "conectividade", "5g", "internet", "software",
        "startup", "semicondutor", "data center", "pesquisa e desenvolvimento",
        "governo digital", "ciberseguranca",
    ],
    "outros": [
        "mulher", "feminicidio", "violencia domestica", "racismo",
        "igualdade racial", "lgbt", "lgbtqia", "pessoa com deficiencia",
        "pcd", "povos indigenas", "comunidades tradicionais",
        "direitos humanos", "infancia", "juventude", "bem-estar animal",
        "protecao animal", "maus-tratos", "fauna",
    ],
}


def normalize(s):
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return s.lower()


NORM_KEYWORDS = {cid: [normalize(k) for k in kws] for cid, kws in KEYWORDS.items()}


def load_data():
    candidate_files = sorted((ROOT / "data" / "candidates").glob("*.js"))
    reads = "".join(
        f'eval(require("fs").readFileSync("data/candidates/{f.name}", "utf8"));'
        for f in candidate_files
    )
    script = (
        'global.window = {};'
        'eval(require("fs").readFileSync("data/taxonomy.js", "utf8"));'
        'eval(require("fs").readFileSync("data/sources.js", "utf8"));'
        + reads +
        "process.stdout.write(JSON.stringify({"
        "order: window.CANDIDATE_ORDER, sources: window.SOURCES_DATA, "
        "candidates: window.CANDIDATES_DATA}));"
    )
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    data = json.loads(out.stdout)
    return data["order"], data["sources"], data["candidates"]


PAGE_RE = re.compile(r"===== PAGE (\d+) =====\n?")


def parse_pages(text):
    parts = PAGE_RE.split(text)
    # parts = [preamble, "1", texto_pag_1, "2", texto_pag_2, ...]
    pages = []
    for i in range(1, len(parts), 2):
        pages.append((int(parts[i]), parts[i + 1]))
    return pages


def cited_pages(candidate, kind, cat_id):
    entry = (candidate.get(kind) or {}).get(cat_id) or {}
    pages = set()
    for d in entry.get("diagnosis") or []:
        pages.add(d["page"])
    for p in entry.get("proposals") or []:
        for q in p.get("quotes") or []:
            pages.add(q["page"])
    return pages


# Menos de 2 palavras-chave distintas na mesma página é ruído demais pra um
# plano "holístico" de governo, que menciona saúde/educação/segurança de
# passagem em quase toda página só por conectar políticas — só sinaliza
# quando a página parece de fato tratar do tema, não só tangenciá-lo.
MIN_DISTINCT_KEYWORDS = 3

# Página de sumário/índice repete muitos "........." (dot leaders) — não tem
# conteúdo de posição nenhum pra citar, só títulos e números de página.
TOC_DOTS_RE = re.compile(r"\.{5,}")


def looks_like_toc(page_text):
    return len(TOC_DOTS_RE.findall(page_text)) >= 3


def snippet_around(page_text, norm_page_text, keyword):
    idx = norm_page_text.find(keyword)
    if idx == -1:
        return ""
    start = max(0, idx - 60)
    end = min(len(page_text), idx + len(keyword) + 160)
    raw = page_text[start:end]
    return " ".join(raw.split())  # colapsa quebras de linha/espaços múltiplos


def audit_candidate(cid, candidate, pages):
    lines = []
    any_hit = False
    for kind, cat_id, label in CATEGORIES:
        kws = NORM_KEYWORDS[cat_id]
        already = cited_pages(candidate, kind, cat_id)
        hits = []  # (n_keywords_distintas, page_num, snippet, keywords)
        for page_num, page_text in pages:
            if page_num in already or looks_like_toc(page_text):
                continue
            norm_page = normalize(page_text)
            matched = [k for k in kws if k in norm_page]
            if len(matched) >= MIN_DISTINCT_KEYWORDS:
                snippet = snippet_around(page_text, norm_page, matched[0])
                hits.append((len(matched), page_num, snippet, matched))
        if not hits:
            continue
        any_hit = True
        hits.sort(key=lambda h: h[1])  # ordem de página — facilita ler em sequência
        lines.append(f"### {label} — {len(hits)} página(s) não citada(s) com possível conteúdo")
        for n, page_num, snippet, matched in hits:
            lines.append(
                f"- **p.{page_num}** (palavras-chave: {', '.join(matched)}) — \"…{snippet}…\""
            )
        lines.append("")
    return any_hit, lines


def main():
    order, sources, candidates = load_data()
    requested = sys.argv[1:]
    targets = requested if requested else order

    unknown = [cid for cid in targets if cid not in order]
    if unknown:
        sys.exit(f"audit_coverage: id(s) desconhecido(s): {unknown}")

    report = [
        "# Auditoria de cobertura — Diagnóstico/Propostas",
        "",
        "Gerado por `scripts/audit_coverage.py`. Cada item abaixo é uma página do "
        "plano oficial que menciona palavras-chave de um tema/subtema mas ainda não "
        "tem nenhuma citação lá — não é prova de que falta conteúdo relevante, é uma "
        "lista de páginas para reler antes de decidir. Depois de revisar, adicione a "
        "citação em `data/candidates/<id>.js` (se for o caso) e rode o script de novo "
        "para conferir que a página some da lista.",
        "",
    ]
    skipped_no_plan = []
    skipped_no_text = []
    clean = []

    for cid in targets:
        src = sources.get(cid, {})
        if src.get("planFiled") is False:
            skipped_no_plan.append(cid)
            continue
        text_path = TEXTS_DIR / f"{cid}.txt"
        if not text_path.exists():
            skipped_no_text.append(cid)
            continue
        pages = parse_pages(text_path.read_text(encoding="utf-8"))
        any_hit, lines = audit_candidate(cid, candidates.get(cid, {}), pages)
        if not any_hit:
            clean.append(cid)
            continue
        report.append(f"## {src.get('candidateName', cid)} ({cid})")
        report.append("")
        report.extend(lines)
        report.append("---")
        report.append("")

    if clean:
        report.append(f"## Sem páginas sinalizadas: {', '.join(clean)}")
        report.append("")
    if skipped_no_plan:
        report.append(f"## Pulados (sem plano registrado): {', '.join(skipped_no_plan)}")
        report.append("")
    if skipped_no_text:
        report.append(
            f"## Pulados (sem cache de texto — rode scripts/extract_plan_texts.py): "
            f"{', '.join(skipped_no_text)}"
        )
        report.append("")

    out_path = ROOT / "AUDITORIA-COBERTURA.md"
    out_path.write_text("\n".join(report), encoding="utf-8")
    print(f"OK: {out_path} ({len(targets)} candidato(s) auditado(s), {len(clean)} sem sinalização)")


if __name__ == "__main__":
    main()
