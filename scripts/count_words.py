#!/usr/bin/env python3
"""
count_words.py — conta ocorrências de um conjunto fixo de palavras/expressões
em cada um dos 5 planos de governo, a partir do texto bruto já extraído em
PLANOS-DE-GOVERNO.md (gerado por export_plans_md.py), e escreve
data/wordcounts.js.

Contagem MECÂNICA, não editorial: cada termo soma singular + plural (regras
definidas à mão por terminação, porque português não pluraliza só com "+s":
fiscal->fiscais, privatização->privatizações, estado->estados), case
insensitive, sem desambiguar sentido ("Estado" conta tanto "o Estado" quanto
"estado de Minas Gerais"). Ver a seção "Contagem de Palavras" no README.

Rodar de novo sempre que PLANOS-DE-GOVERNO.md mudar; nunca editar
data/wordcounts.js à mão.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "PLANOS-DE-GOVERNO.md"
OUT = ROOT / "data" / "wordcounts.js"

# Mapeia o id da âncora em PLANOS-DE-GOVERNO.md para a chave usada em
# CANDIDATES_DATA/CANDIDATE_ORDER (data/taxonomy.js).
ANCHOR_TO_ID = {
    "lula": "lula",
    "flaviobolsonaro": "flavio-bolsonaro",
    "caiado": "caiado",
    "renansantos": "renan-santos",
    "zema": "zema",
}

# (id, label, [variantes singular/plural em regex, sem \b — aplicado depois]).
# Termos se sobrepõem de propósito (ex.: "fiscal" também conta dentro de
# "déficit fiscal"/"ajuste fiscal") — cada um é independente, não é partição.
TERMS = [
    ("liberdade", "Liberdade", [r"liberdades?"]),
    ("igualdade", "Igualdade", [r"igualdades?"]),
    ("desigualdade", "Desigualdade", [r"desigualdades?"]),
    # Radical, não só a forma -ção/-ções: "privatização" e "privatizar" (e
    # demais conjugações/derivações) são o mesmo conceito na prática — ex.:
    # o plano do Zema usa "Privatizar todas as empresas estatais" (verbo),
    # não o substantivo, e um match só do substantivo perderia essa citação
    # por completo (contagem batida a zero, quando é claramente >0).
    ("privatizacao", "Privatizar/Privatização", [r"privatiz\w*"]),
    ("desestatizacao", "Desestatização", [r"desestatiz\w*"]),
    ("liberalizacao", "Liberalização", [r"liberaliz\w*"]),
    ("abertura", "Abertura", [r"aberturas?"]),
    ("abertura-comercial", "Abertura comercial", [r"aberturas?\s+comercia(?:l|is)"]),
    ("estado", "Estado", [r"estados?"]),
    ("divida", "Dívida", [r"dívidas?"]),
    ("fiscal", "Fiscal", [r"fisca(?:l|is)"]),
    ("deficit-fiscal", "Déficit fiscal", [r"déficits?\s+fisca(?:l|is)"]),
    ("ajuste-fiscal", "Ajuste fiscal", [r"ajustes?\s+fisca(?:l|is)"]),
    # Radical também aqui, pelo mesmo motivo do privatização/desestatização
    # acima: "reforma" (substantivo) e "reformar" (verbo) são usados quase
    # que alternadamente nos 5 planos — um match só do substantivo perde de
    # 15% a quase 50% das ocorrências reais, dependendo do candidato.
    # Exclui "reformul-" (reformular/reformulação) por negative lookahead —
    # é palavra diferente (reformular = reorganizar), não uma conjugação de
    # "reforma".
    ("reforma", "Reforma", [r"reform(?!ul)\w*"]),
    ("carga-tributaria", "Carga tributária", [r"cargas?\s+tributárias?"]),
    ("juros", "Juros", [r"juros?"]),  # inclui "taxa de juros" (substring) e demais usos
    ("inflacao", "Inflação", [r"infla(?:ção|ções)"]),
    ("custo-de-vida", "Custo de vida", [r"custos?\s+de\s+vidas?"]),
]


def clean_block(text):
    # Remove marcadores de página ("### Página N") — não é conteúdo do plano.
    lines = [l for l in text.split("\n") if not l.strip().startswith("### Página")]
    text = "\n".join(lines)
    # Desfaz hifenização de quebra de linha da extração do PDF: "pala-\nvra"
    # -> "palavra". Sem isso o regex perderia palavras longas quebradas no
    # fim da linha.
    text = re.sub(r"(\w)-\s*\n\s*(\w)", r"\1\2", text, flags=re.UNICODE)
    # Colapsa qualquer sequência de espaços/quebras de linha em um espaço só
    # — necessário para os termos de duas palavras, que podem estar
    # quebrados entre linhas no texto extraído.
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def split_blocks(full_text):
    anchor_re = re.compile(r'<a id="(\w+)"></a>')
    matches = list(anchor_re.finditer(full_text))
    if not matches:
        raise SystemExit("count_words: nenhuma âncora <a id=\"...\"> encontrada em PLANOS-DE-GOVERNO.md")
    blocks = {}
    for i, m in enumerate(matches):
        anchor_id = m.group(1)
        if anchor_id not in ANCHOR_TO_ID:
            continue
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(full_text)
        blocks[ANCHOR_TO_ID[anchor_id]] = full_text[start:end]
    missing = set(ANCHOR_TO_ID.values()) - set(blocks)
    if missing:
        raise SystemExit(f"count_words: candidato(s) sem bloco de texto: {sorted(missing)}")
    return blocks


def count_term(cleaned_text, variants):
    pattern = r"\b(?:" + "|".join(variants) + r")\b"
    return len(re.findall(pattern, cleaned_text, flags=re.IGNORECASE | re.UNICODE))


def main():
    full_text = SRC.read_text(encoding="utf-8")
    blocks = split_blocks(full_text)

    counts_by_candidate = {}
    for cand_id, raw in blocks.items():
        cleaned = clean_block(raw)
        total_words = len(cleaned.split())
        counts = {tid: count_term(cleaned, variants) for tid, _label, variants in TERMS}
        counts_by_candidate[cand_id] = {"totalWords": total_words, "counts": counts}

    terms_js = json.dumps(
        [{"id": tid, "label": label} for tid, label, _ in TERMS],
        ensure_ascii=False, indent=2
    )
    # Ordem de candidatos no objeto de saída segue ANCHOR_TO_ID.values() só
    # por legibilidade do arquivo gerado — a ordem de exibição real no site
    # vem de CANDIDATE_ORDER (data/taxonomy.js), não daqui.
    counts_js = json.dumps(counts_by_candidate, ensure_ascii=False, indent=2)

    out = f"""// ============================================================================
// CONTAGEM DE PALAVRAS — gerado por scripts/count_words.py a partir do texto
// bruto extraído dos 5 PDFs em PLANOS-DE-GOVERNO.md. NÃO É LEITURA EDITORIAL
// (diferente de profile.js/allocator.js): é contagem mecânica de ocorrências
// (singular + plural somados por termo, case insensitive, sem desambiguar
// sentido). Nunca editar à mão — rode `python3 scripts/count_words.py` de
// novo sempre que PLANOS-DE-GOVERNO.md mudar.
// ============================================================================
window.WORD_COUNT_TERMS = {terms_js};

window.WORD_COUNTS = {counts_js};
"""
    OUT.write_text(out, encoding="utf-8")
    print(f"OK: {OUT} ({len(TERMS)} termos x {len(counts_by_candidate)} candidatos)")
    for cand_id, data in counts_by_candidate.items():
        print(f"  {cand_id}: totalWords={data['totalWords']}")


if __name__ == "__main__":
    main()
