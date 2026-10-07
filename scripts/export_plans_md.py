#!/usr/bin/env python3
"""Gera PLANOS-DE-GOVERNO.md: o texto completo dos planos de governo oficiais
(extraídos dos PDFs baixados do TSE, cache em .sources-cache/texts/), um
atrás do outro, cada um com cabeçalho e link para o PDF oficial. É a
matéria-prima usada para escrever as citações em data/candidates/*.js — não é
lido pelo site.

Uso:
    cd ftm-eleicoes
    python3 scripts/export_plans_md.py
"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS_DIR = ROOT / ".sources-cache" / "texts"


def load_taxonomy_and_sources():
    # Lê CANDIDATE_ORDER de taxonomy.js e SOURCES_DATA de sources.js pelo
    # mesmo truque Node — assim esta lista nunca mais diverge da real (antes
    # era uma lista `CANDIDATES` hardcoded aqui, independente de
    # data/taxonomy.js, que ninguém lembrava de atualizar ao trocar/adicionar
    # um candidato).
    script = (
        'global.window = {};'
        'eval(require("fs").readFileSync("data/taxonomy.js", "utf8"));'
        'eval(require("fs").readFileSync("data/sources.js", "utf8"));'
        "process.stdout.write(JSON.stringify({order: window.CANDIDATE_ORDER, sources: window.SOURCES_DATA}));"
    )
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    data = json.loads(out.stdout)
    return data["order"], data["sources"]


def render_plan(cid, sources):
    src = sources.get(cid, {})
    if src.get("planFiled") is False:
        lines = [
            f"## {src.get('candidateName', cid)} — Sem Proposta de Governo registrada",
            "",
            "> Esta candidatura não registrou Proposta de Governo no TSE — não há texto para extrair.",
            "",
        ]
        return "\n".join(lines)

    text_path = TEXTS_DIR / f"{cid}.txt"
    if not text_path.exists():
        lines = [
            f"## {src.get('candidateName', cid)} — {src.get('planTitle', '')}",
            "",
            "> Texto ainda não extraído para `.sources-cache/texts/` — pendência editorial, não ausência de plano. "
            "Extraia o texto do PDF (ver README.md) antes de citar este candidato.",
            "",
        ]
        return "\n".join(lines)

    text = text_path.read_text(encoding="utf-8")
    # "===== PAGE 12 =====" -> "### Página 12" (cabeçalho markdown, mantém navegável)
    text = re.sub(r"===== PAGE (\d+) =====", r"### Página \1", text)

    lines = []
    lines.append(f"## {src.get('candidateName', cid)} — {src.get('planTitle', '')}")
    lines.append("")
    lines.append(f"- **Fonte oficial (TSE):** {src.get('officialPdfUrl', '')}")
    lines.append(f"- **Páginas:** {src.get('pageCount', '?')}")
    lines.append(f"- **Coletado em:** {src.get('retrievedAt', '')}")
    lines.append("")
    lines.append(
        "> Texto extraído automaticamente do PDF oficial (PyMuPDF). Pode conter "
        "pequenas falhas de quebra de linha/hifenização típicas de extração de PDF; "
        "em caso de dúvida, o PDF original prevalece."
    )
    lines.append("")
    lines.append(text.strip())
    lines.append("")
    return "\n".join(lines)


def main():
    candidates, sources = load_taxonomy_and_sources()
    parts = [
        "# Planos de governo — Presidenciáveis 2026",
        "",
        (
            "Texto completo dos planos de governo oficiais registrados no TSE "
            "(Portal de Dados Abertos, dataset \"Candidatos 2026\", recurso \"BR — "
            "Proposta de Governo\"), na ordem em que aparecem no site (alfabética "
            "por nome de urna, `CANDIDATE_ORDER` em `data/taxonomy.js`). Cada seção "
            "abaixo é a extração bruta de um PDF — é a matéria-prima usada para "
            "escrever as citações em `data/candidates/*.js`, não o conteúdo já "
            "curado do site (esse está em `CONTEUDO-DO-SITE.md`)."
        ),
        "",
        "## Índice",
        "",
    ]
    for cid in candidates:
        src = sources.get(cid, {})
        parts.append(f"- [{src.get('candidateName', cid)} — {src.get('planTitle', '')}](#{cid.replace('-', '')})")
    parts.append("")
    parts.append("---")
    parts.append("")

    for cid in candidates:
        parts.append(f'<a id="{cid.replace("-", "")}"></a>')
        parts.append("")
        parts.append(render_plan(cid, sources))
        parts.append("---")
        parts.append("")

    md = "\n".join(parts)
    out_path = ROOT / "PLANOS-DE-GOVERNO.md"
    out_path.write_text(md, encoding="utf-8")
    print(f"OK: {out_path} ({len(md.splitlines())} linhas, {len(md)/1024/1024:.1f} MB)")


if __name__ == "__main__":
    main()
