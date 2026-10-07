#!/usr/bin/env python3
"""Gera dist/ftm-eleicoes-artifact.html: um único HTML autocontido (CSS,
JS e as fotos/PDFs de sources/ inline como data URI, sem nenhum <link>/<script
src> ou referência a arquivo local), pronto para publicar como Claude
Artifact — que bloqueia qualquer fetch/recurso externo em runtime.

Lê sempre os arquivos-fonte (index.html, styles.css, data/*.js, sources/*,
app.js) — nunca edite dist/ftm-eleicoes-artifact.html à mão, ele é sempre
regenerado daqui. `data/plan-texts.js` (texto integral dos planos, usado pela
Contagem de Palavras) sozinho já soma ~1,7 MB — bem menor que os ~17 MB de
PDFs que este script opta por não embutir (ver drop_local_pdf_links), mas é
o maior arquivo de dados individual do projeto; não é surpresa o tamanho do
Artifact ter saltado quando esse arquivo foi adicionado. Uso:

    cd ftm-eleicoes
    python3 scripts/build_artifact.py
"""
import base64
import mimetypes
import re
import sys
from urllib.parse import quote
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
SOURCES_DIR = ROOT / "sources"

# Mesma ordem de carregamento do index.html: taxonomia -> fontes -> textos
# dos planos -> um arquivo por candidato -> app.js. A ordem entre candidatos
# não importa (cada um só grava a própria chave em window.CANDIDATES_DATA).
SCRIPT_FILES = [
    "data/taxonomy.js",
    "data/sources.js",
    "data/plan-texts.js",
    "data/word-stats.js",
    "data/candidates/flavio-bolsonaro.js",
    "data/candidates/lula.js",
    "data/candidates/jair-bolsonaro-2022.js",
    "data/candidates/lula-2022.js",
    "app.js",
]


def embed_photos_as_data_uris(js: str) -> str:
    """Troca toda referência literal 'sources/<foto>.jpg' (campo `photo` em
    data/candidates/*.js) pelo próprio arquivo em base64 — o Artifact não
    tem como buscar sources/* à parte, então a foto precisa estar dentro do
    HTML. Fotos são pequenas (~6 KB cada); os PDFs não são embutidos aqui
    (ver drop_local_pdf_links) porque somam ~6,5 MB e a citação oficial via
    TSE já cobre a mesma fonte sem inflar o Artifact."""
    for path in sorted(SOURCES_DIR.glob("*.jpg")):
        needle = f"sources/{path.name}"
        if needle not in js:
            continue
        mime = mimetypes.guess_type(path.name)[0] or "image/jpeg"
        data_uri = f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode("ascii")
        js = js.replace(needle, data_uri)
    return js


def drop_local_pdf_links(js: str) -> str:
    """No Artifact não há como servir sources/*.pdf junto (ver docstring do
    módulo) — em vez de embutir ~6,5 MB de PDFs só para um link de
    conveniência, zera `localPdfPath` para essa build. app.js já trata esse
    campo como opcional e simplesmente não mostra o link "PDF (cópia
    local)"; o link "Ver no TSE" (officialPdfUrl) continua funcionando
    igual. O site normal (fora do Artifact) mantém o link local."""
    return re.sub(r'localPdfPath:\s*"sources/[^"]+\.pdf"', "localPdfPath: null", js)


def inline_favicon(html: str) -> str:
    """Troca <link rel="icon" href="assets/favicon.svg"> pelo mesmo SVG em
    data: URI. O site normal serve o arquivo (padrão dos outros sites do
    FtM); o Artifact precisa ser autocontido, sem nenhum arquivo ao lado."""
    svg = (ROOT / "assets" / "favicon.svg").read_text(encoding="utf-8").strip()
    data_uri = "data:image/svg+xml," + quote(svg, safe="")
    return re.sub(
        r'href="assets/favicon\.svg"',
        lambda _m: 'href="' + data_uri + '"',
        html,
    )


def build():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    js = "\n".join((ROOT / f).read_text(encoding="utf-8") for f in SCRIPT_FILES)
    html = inline_favicon(html)
    js = embed_photos_as_data_uris(js)
    js = drop_local_pdf_links(js)

    # Só conta como pendência uma string JS de fato ("sources/arquivo.ext"),
    # não a palavra aparecendo em comentário/prosa (ex.: este próprio módulo).
    leftover_sources = re.findall(r'["\']sources/[^"\']+["\']', js)
    if leftover_sources:
        sys.exit(f"build_artifact: sobrou referência a sources/ não tratada: {leftover_sources}")

    # <link rel="stylesheet" href="styles.css"> -> <style>...</style>
    # str.replace(), não re.sub(): o replacement é texto real de CSS, que
    # tem barras invertidas (ex.: escapes \0022 de content). re.sub()/subn()
    # tratam "\" no argumento de substituição como referência de grupo
    # regex (\1, \2...) e corrompem qualquer escape CSS silenciosamente —
    # foi por isso que as aspas decorativas viravam caractere de controle
    # no Artifact. str.replace() nunca interpreta a string de troca.
    # O href carrega o "?v=N" de cache-busting que o index.html usa (padrão
    # dos outros sites do FtM), então a tag é localizada por regex e trocada
    # por str.replace() do texto exato encontrado.
    link_match = re.findall(r'<link rel="stylesheet" href="styles\.css[^"]*">', html)
    if len(link_match) != 1:
        sys.exit("build_artifact: não encontrei (ou encontrei mais de uma vez) o <link> do styles.css em index.html")
    html = html.replace(link_match[0], "<style>\n" + css + "\n</style>")

    # Remove cada <script src="...">, concatena tudo num único <script> inline
    # logo antes de </body>.
    html, n = re.subn(r'\n?<script src="[^"]+"></script>', "", html)
    if n != len(SCRIPT_FILES):
        sys.exit(f"build_artifact: esperava remover {len(SCRIPT_FILES)} <script src>, removi {n} — index.html mudou?")
    html = html.replace("</body>", "<script>\n" + js + "\n</script>\n</body>")

    # Checklist de validação: não pode sobrar nenhuma referência a arquivo
    # local (src=/href= sem ser http(s):// ou data:) no HTML estático —
    # garante que o Artifact não vai tentar buscar nada fora dele mesmo.
    leftover = re.findall(r'(?:src|href)="(?!https?:|data:|#)([^"]+)"', html)
    if leftover:
        sys.exit(f"build_artifact: sobrou referência a arquivo local no HTML gerado: {leftover}")

    DIST.mkdir(exist_ok=True)
    out_path = DIST / "ftm-eleicoes-artifact.html"
    out_path.write_text(html, encoding="utf-8")
    size_mb = out_path.stat().st_size / (1024 * 1024)
    print(f"OK: {out_path} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    build()
