#!/usr/bin/env python3
"""Gera CONTEUDO-DO-SITE.md: um dump em markdown de tudo que está em
data/*.js — candidatos, citações de Economia/Outros Temas (com página) e o
Perfil Político — organizado por candidato. É uma leitura de apoio/curadoria,
não é lido pelo site (index.html/app.js continuam sendo a fonte real).

Extrai os dados executando o Node com os arquivos data/*.js carregados (mesmo
truque usado nos scripts de checagem: `window.X = ...` populando um objeto
global) e formatando o JSON resultante como Markdown em Python.

Uso:
    cd ftm-eleicoes
    python3 scripts/export_content_md.py
"""
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

DATA_FILES = [
    "data/taxonomy.js",
    "data/sources.js",
    "data/profile.js",
    "data/candidates/caiado.js",
    "data/candidates/flavio-bolsonaro.js",
    "data/candidates/lula.js",
    "data/candidates/renan-santos.js",
    "data/candidates/zema.js",
]

NODE_SCRIPT = """
global.window = {};
%s
process.stdout.write(JSON.stringify({
  taxonomy: { economySubthemes: window.ECONOMY_SUBTHEMES, otherThemes: window.OTHER_THEMES, order: window.CANDIDATE_ORDER },
  sources: window.SOURCES_DATA,
  profile: { axes: window.PROFILE_AXES, scores: window.PROFILE_SCORES },
  candidates: window.CANDIDATES_DATA
}));
"""


def load_data():
    loads = "\n".join(
        f'eval(require("fs").readFileSync("{f}", "utf8"));' for f in DATA_FILES
    )
    script = NODE_SCRIPT % loads
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def fmt_quotes(quotes):
    return "; ".join(f'"{q["quote"]}" (p. {q["page"]})' for q in quotes)


def render(data):
    lines = []
    lines.append("# Conteúdo do site — FTM Eleições")
    lines.append("")
    lines.append(
        "Dump em Markdown de tudo que está em `data/*.js`: dados básicos, citações de "
        "Economia (Diagnóstico + Propostas, por subtema) e Outros Temas, e o Perfil "
        "Político. Gerado por `scripts/export_content_md.py` — reflete o estado atual "
        "dos dados, não é lido pelo site (a fonte real continua sendo `data/*.js` + "
        "`app.js`). Toda citação (`quote`) é transcrição literal do plano de governo "
        "oficial; o resto (títulos de proposta, notas do Perfil Político) é redigido "
        "por nós."
    )
    lines.append("")

    order = data["taxonomy"]["order"]
    econ_subthemes = data["taxonomy"]["economySubthemes"]
    other_themes = data["taxonomy"]["otherThemes"]
    axes = data["profile"]["axes"]

    lines.append("## Sumário de candidatos")
    lines.append("")
    lines.append("| Candidato | Partido | Nº | Vice | Coligação |")
    lines.append("|---|---|---|---|---|")
    for cid in order:
        b = data["candidates"][cid]["basics"]
        lines.append(f"| {b['ballotName']} | {b['party']} | {b['number']} | {b['vp']} | {b['coalition']} |")
    lines.append("")

    for cid in order:
        c = data["candidates"][cid]
        b = c["basics"]
        src = data["sources"].get(cid, {})
        lines.append(f"## {b['ballotName']} ({b['party']})")
        lines.append("")
        lines.append(f"- **Nome completo:** {b['name']}")
        lines.append(f"- **Número:** {b['number']}")
        lines.append(f"- **Vice:** {b['vp']}")
        lines.append(f"- **Coligação:** {b['coalition']}")
        if src:
            lines.append(f"- **Plano de governo:** {src.get('planTitle', '')} ({src.get('pageCount', '?')} páginas) — {src.get('officialPdfUrl', '')}")
        lines.append("")

        lines.append("### Economia")
        lines.append("")
        for sub in econ_subthemes:
            entry = c["economy"].get(sub["id"], {"diagnosis": [], "proposals": []})
            lines.append(f"#### {sub['label']}")
            lines.append("")
            lines.append("**Diagnóstico:**")
            if entry["diagnosis"]:
                for d in entry["diagnosis"]:
                    lines.append(f'- "{d["quote"]}" (p. {d["page"]})')
            else:
                lines.append("- _Não abordado explicitamente no plano de governo._")
            lines.append("")
            lines.append("**Propostas:**")
            if entry["proposals"]:
                for p in entry["proposals"]:
                    lines.append(f"- **{p['title']}** — {fmt_quotes(p['quotes'])}")
            else:
                lines.append("- _Não abordado explicitamente no plano de governo._")
            lines.append("")

        lines.append("### Outros temas")
        lines.append("")
        for th in other_themes:
            entry = c["otherThemes"].get(th["id"], {"proposals": []})
            lines.append(f"**{th['label']}:**")
            if entry["proposals"]:
                for p in entry["proposals"]:
                    lines.append(f"- **{p['title']}** — {fmt_quotes(p['quotes'])}")
            else:
                lines.append("- _Não abordado explicitamente no plano de governo._")
            lines.append("")

        lines.append("### Perfil Político (leitura editorial — não é citação)")
        lines.append("")
        scores = data["profile"]["scores"].get(cid, {})
        if scores:
            for axis in axes:
                score = scores.get(axis["id"], "—")
                rationale = scores.get("rationale", {}).get(axis["id"], "")
                lines.append(f"- **{axis['label']}** ({axis['low']} ↔ {axis['high']}): **{score}/100** — {rationale}")
        lines.append("")
        lines.append("---")
        lines.append("")

    lines.append("## Metodologia do Perfil Político")
    lines.append("")
    lines.append(
        "Os 6 eixos abaixo são uma síntese editorial nossa (não citação, não nota "
        "oficial), atribuída a partir da leitura do conjunto de propostas acima, "
        "inspirada no formato do Smartspider do smartvote.ch:"
    )
    lines.append("")
    for axis in axes:
        lines.append(f"- **{axis['label']}**: {axis['low']} (0) ↔ {axis['high']} (100)")
    lines.append("")

    return "\n".join(lines)


if __name__ == "__main__":
    data = load_data()
    md = render(data)
    out_path = ROOT / "CONTEUDO-DO-SITE.md"
    out_path.write_text(md, encoding="utf-8")
    print(f"OK: {out_path} ({len(md.splitlines())} linhas)")
