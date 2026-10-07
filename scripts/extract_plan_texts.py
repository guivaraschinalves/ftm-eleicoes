#!/usr/bin/env python3
"""Extrai o texto de sources/<id>.pdf para .sources-cache/texts/<id>.txt
(um arquivo por candidato, com marcadores "===== PAGE N =====" entre
páginas) — é o cache bruto usado tanto por scripts/export_plans_md.py
(matéria-prima pra escrever citações) quanto por scripts/build_plan_texts.py
(gera data/plan-texts.js, que alimenta a Contagem de Palavras do site).

Precisa de PyMuPDF instalado (`pip install pymupdf`) — não vem com o Python
padrão. O ambiente costuma ser "externally-managed" (PEP 668); nesse caso
crie um venv antes: `python3 -m venv .venv && .venv/bin/pip install pymupdf`.

Candidato com `planFiled: false` em data/sources.js não tem PDF — é pulado.

Uso:
    cd ftm-eleicoes
    python3 scripts/extract_plan_texts.py              # todos os candidatos com plano
    python3 scripts/extract_plan_texts.py lula zema     # só os ids passados
"""
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES_DIR = ROOT / "sources"
TEXTS_DIR = ROOT / ".sources-cache" / "texts"


def load_taxonomy_and_sources():
    # Mesmo truque Node de export_plans_md.py — nenhum script deste projeto
    # mantém sua própria lista de candidatos hardcoded, todos leem
    # data/taxonomy.js/data/sources.js direto.
    script = (
        'global.window = {};'
        'eval(require("fs").readFileSync("data/taxonomy.js", "utf8"));'
        'eval(require("fs").readFileSync("data/sources.js", "utf8"));'
        "process.stdout.write(JSON.stringify({order: window.CANDIDATE_ORDER, sources: window.SOURCES_DATA}));"
    )
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    data = json.loads(out.stdout)
    return data["order"], data["sources"]


def extract_one(cid, fitz):
    pdf_path = SOURCES_DIR / f"{cid}.pdf"
    if not pdf_path.exists():
        print(f"AVISO: {pdf_path} não existe — pulando {cid}")
        return False

    doc = fitz.open(pdf_path)
    parts = []
    for i, page in enumerate(doc, start=1):
        parts.append(f"===== PAGE {i} =====\n")
        parts.append(page.get_text())
        parts.append("\n")
    doc.close()

    TEXTS_DIR.mkdir(parents=True, exist_ok=True)
    out_path = TEXTS_DIR / f"{cid}.txt"
    out_path.write_text("".join(parts), encoding="utf-8")
    print(f"OK: {out_path} ({len(parts) // 2} páginas)")
    return True


def main():
    try:
        import fitz  # PyMuPDF
    except ImportError:
        sys.exit(
            "extract_plan_texts: PyMuPDF não está instalado. Rode "
            "`pip install pymupdf` (ou crie um venv se o ambiente for "
            "externally-managed) antes de rodar este script."
        )

    candidates, sources = load_taxonomy_and_sources()
    requested = sys.argv[1:]
    targets = requested if requested else candidates

    unknown = [cid for cid in targets if cid not in candidates]
    if unknown:
        sys.exit(f"extract_plan_texts: id(s) desconhecido(s) (não estão em CANDIDATE_ORDER): {unknown}")

    done = 0
    for cid in targets:
        src = sources.get(cid, {})
        if src.get("planFiled") is False:
            print(f"SKIP: {cid} — planFiled: false, sem PDF a extrair")
            continue
        if extract_one(cid, fitz):
            done += 1

    print(f"Concluído: {done}/{len(targets)} candidato(s) extraído(s).")


if __name__ == "__main__":
    main()
