#!/usr/bin/env python3
"""Gera CONTEUDO-DO-SITE.md: um dump em markdown de tudo que está em
data/*.js — candidatos e citações de cada um dos 6 Temas (Diagnóstico +
Propostas), organizado por candidato. É uma leitura de apoio/curadoria, não é
lido pelo site (index.html/app.js continuam sendo a fonte real).

Extrai os dados executando o Node com os arquivos data/*.js carregados (mesmo
truque usado nos scripts de checagem: `window.X = ...` populando um objeto
global) e formatando o JSON resultante como Markdown em Python.

Uso:
    cd ftm-eleicoes
    python3 scripts/export_content_md.py
"""
import datetime
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

DATA_FILES = [
    "data/taxonomy.js",
    "data/sources.js",
    "data/candidates/flavio-bolsonaro.js",
    "data/candidates/lula.js",
]

NODE_SCRIPT = """
global.window = {};
%s
process.stdout.write(JSON.stringify({
  taxonomy: { economySubthemes: window.ECONOMY_SUBTHEMES, themes: window.THEMES, order: window.CANDIDATE_ORDER },
  sources: window.SOURCES_DATA,
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


def calc_age(birth_date_str, today):
    """Mesma regra de app.js (calcAge): anos completos até `today`."""
    if not birth_date_str:
        return None
    year, month, day = (int(x) for x in birth_date_str.split("-"))
    age = today.year - year
    if (today.month, today.day) < (month, day):
        age -= 1
    return age


def render(data):
    today = datetime.date.today()
    lines = []
    lines.append("# Conteúdo do site — Liberta Eleições")
    lines.append("")
    lines.append(
        "Dump em Markdown de tudo que está em `data/*.js`: dados básicos e citações "
        "de Diagnóstico + Propostas dos 6 Temas (Economia, dividida em 7 subtemas, e "
        "Educação, Segurança Pública, Saúde, Política Externa, Combate à Corrupção). "
        "Gerado por `scripts/export_content_md.py` — reflete o estado atual dos "
        "dados, não é lido pelo site (a fonte real continua sendo `data/*.js` + "
        "`app.js`). Toda citação (`quote`) é transcrição literal do plano de governo "
        f"oficial; só o título de cada proposta é redigido por nós. Idade calculada em {today.isoformat()}."
    )
    lines.append("")

    order = data["taxonomy"]["order"]
    econ_subthemes = data["taxonomy"]["economySubthemes"]
    themes = data["taxonomy"]["themes"]
    other_themes = [t for t in themes if t["id"] != "economia"]

    lines.append("## Sumário de candidatos")
    lines.append("")
    lines.append("| Candidato | Partido | Nº | Idade | Vice | Coligação |")
    lines.append("|---|---|---|---|---|---|")
    for cid in order:
        b = data["candidates"][cid]["basics"]
        age = calc_age(b.get("birthDate"), today)
        lines.append(f"| {b['ballotName']} | {b['party']} | {b['number']} | {age if age is not None else '—'} | {b['vp']} | {b['coalition']} |")
    lines.append("")

    for cid in order:
        c = data["candidates"][cid]
        b = c["basics"]
        src = data["sources"].get(cid, {})
        age = calc_age(b.get("birthDate"), today)
        lines.append(f"## {b['ballotName']} ({b['party']})")
        lines.append("")
        lines.append(f"- **Nome completo:** {b['name']}")
        lines.append(f"- **Idade:** {age if age is not None else '—'} anos")
        lines.append(f"- **Número:** {b['number']}")
        lines.append(f"- **Vice:** {b['vp']}")
        lines.append(f"- **Coligação:** {b['coalition']}")
        if src and src.get("planFiled") is False:
            lines.append("- **Plano de governo:** não registrado no TSE.")
        elif src:
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

        for th in other_themes:
            entry = c["themes"].get(th["id"], {"diagnosis": [], "proposals": []})
            lines.append(f"### {th['label']}")
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

        lines.append("---")
        lines.append("")

    return "\n".join(lines)


if __name__ == "__main__":
    data = load_data()
    md = render(data)
    out_path = ROOT / "CONTEUDO-DO-SITE.md"
    out_path.write_text(md, encoding="utf-8")
    print(f"OK: {out_path} ({len(md.splitlines())} linhas)")
