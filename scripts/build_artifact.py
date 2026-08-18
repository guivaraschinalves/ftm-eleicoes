#!/usr/bin/env python3
"""Gera dist/ftm-eleicoes-artifact.html: um único HTML autocontido (CSS e JS
inline, sem nenhum <link>/<script src> externo ou local), pronto para
publicar como Claude Artifact — que bloqueia qualquer fetch/recurso externo
em runtime.

Lê sempre os arquivos-fonte (index.html, styles.css, data/*.js, app.js) —
nunca edite dist/ftm-eleicoes-artifact.html à mão, ele é sempre regenerado
daqui. Uso:

    cd ftm-eleicoes
    python3 scripts/build_artifact.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"

# Mesma ordem de carregamento do index.html: taxonomia -> fontes -> um
# arquivo por candidato -> app.js. A ordem entre candidatos não importa (cada
# um só grava a própria chave em window.CANDIDATES_DATA).
SCRIPT_FILES = [
    "data/taxonomy.js",
    "data/sources.js",
    "data/candidates/caiado.js",
    "data/candidates/flavio-bolsonaro.js",
    "data/candidates/lula.js",
    "data/candidates/renan-santos.js",
    "data/candidates/zema.js",
    "app.js",
]


def build():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    js = "\n".join((ROOT / f).read_text(encoding="utf-8") for f in SCRIPT_FILES)

    # <link rel="stylesheet" href="styles.css"> -> <style>...</style>
    html, n = re.subn(
        r'<link rel="stylesheet" href="styles\.css">',
        "<style>\n" + css + "\n</style>",
        html,
    )
    if n != 1:
        sys.exit("build_artifact: não encontrei (ou encontrei mais de uma vez) o <link> do styles.css em index.html")

    # Remove cada <script src="...">, concatena tudo num único <script> inline
    # logo antes de </body>.
    html, n = re.subn(r'\n?<script src="[^"]+"></script>', "", html)
    if n != len(SCRIPT_FILES):
        sys.exit(f"build_artifact: esperava remover {len(SCRIPT_FILES)} <script src>, removi {n} — index.html mudou?")
    html = html.replace("</body>", "<script>\n" + js + "\n</script>\n</body>")

    # Checklist de validação: não pode sobrar nenhuma referência a arquivo
    # local (src=/href= sem ser http(s):// ou data:) — garante que o Artifact
    # não vai tentar buscar nada fora dele mesmo.
    leftover = re.findall(r'(?:src|href)="(?!https?:|data:|#)([^"]+)"', html)
    if leftover:
        sys.exit(f"build_artifact: sobrou referência a arquivo local no HTML gerado: {leftover}")

    DIST.mkdir(exist_ok=True)
    out_path = DIST / "ftm-eleicoes-artifact.html"
    out_path.write_text(html, encoding="utf-8")
    size_kb = out_path.stat().st_size / 1024
    print(f"OK: {out_path} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    build()
