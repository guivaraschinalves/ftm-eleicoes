#!/usr/bin/env python3
"""Gera data/plan-texts.js (window.PLAN_TEXTS) a partir do cache em
.sources-cache/texts/<id>.txt — o texto integral de cada plano de governo,
sem os marcadores "===== PAGE N =====" (ruído de extração, não conteúdo).
É o único arquivo de dados do site com texto bruto/mecânico em vez de
citação curada; alimenta só a seção Contagem de Palavras.

Ao contrário de scripts/export_plans_md.py (documentação de apoio, tolera
texto ausente com um aviso), este script falha alto se faltar o cache de
algum candidato — data/plan-texts.js alimenta uma funcionalidade real do
site, então uma lacuna silenciosa faria a Contagem de Palavras subcontar
um candidato sem nenhum sinal visível disso.

Rode scripts/extract_plan_texts.py antes, se o cache ainda não existir.

Uso:
    cd ftm-eleicoes
    python3 scripts/build_plan_texts.py
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS_DIR = ROOT / ".sources-cache" / "texts"

PAGE_MARKER_RE = re.compile(r"===== PAGE \d+ =====\n?")


def load_taxonomy_and_sources():
    script = (
        'global.window = {};'
        'eval(require("fs").readFileSync("data/taxonomy.js", "utf8"));'
        'eval(require("fs").readFileSync("data/sources.js", "utf8"));'
        "process.stdout.write(JSON.stringify({order: window.CANDIDATE_ORDER, sources: window.SOURCES_DATA}));"
    )
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    data = json.loads(out.stdout)
    return data["order"], data["sources"]


def main():
    candidates, sources = load_taxonomy_and_sources()

    plan_texts = {}
    missing = []
    for cid in candidates:
        src = sources.get(cid, {})
        if src.get("planFiled") is False:
            continue  # sem chave: "sem plano" é diferente de "plano com 0 ocorrências"

        text_path = TEXTS_DIR / f"{cid}.txt"
        if not text_path.exists():
            missing.append(cid)
            continue

        text = text_path.read_text(encoding="utf-8")
        text = PAGE_MARKER_RE.sub("", text)
        plan_texts[cid] = text.strip()

    if missing:
        sys.exit(
            "build_plan_texts: faltou o cache de texto de "
            f"{missing} em .sources-cache/texts/ — rode "
            f"`python3 scripts/extract_plan_texts.py {' '.join(missing)}` antes."
        )

    js = "window.PLAN_TEXTS = " + json.dumps(plan_texts, ensure_ascii=False, indent=2) + ";\n"
    out_path = ROOT / "data" / "plan-texts.js"
    out_path.write_text(js, encoding="utf-8")
    total_chars = sum(len(t) for t in plan_texts.values())
    print(f"OK: {out_path} ({len(plan_texts)} candidatos, {total_chars/1024/1024:.1f} MB de texto)")


if __name__ == "__main__":
    main()
