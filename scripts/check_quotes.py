#!/usr/bin/env python3
"""Confere que TODA citação de data/candidates/*.js está literal na página que
ela indica. Percorre os quatro lugares onde há `quote`/`page`:

    economy.<subtema>            themes.<tema>
    direitosBemEstar.<subtema>   governments.<governo>

A comparação normaliza o que a extração do PDF distorce, e só isso: acento,
caixa, espaço repetido, aspas (reta vs. curva) e a hifenização de fim de linha
("inteli-\\ngência" vira "inteligência"). Qualquer outra diferença é erro de
transcrição e aparece aqui.

Duas convenções das citações são respeitadas:

- `[...]` marca corte dentro da citação: cada pedaço é procurado em ordem, não
  a string inteira de uma vez;
- uma citação pode atravessar a quebra de página (o PDF corta frase no meio),
  então basta que o trecho PASSE pela página indicada: vale citar a página
  onde ele começa ou onde ele continua, que é o que o link `#page=N` abre.

Sai com código 1 se achar problema — serve para hook/CI.

Uso:
    cd ftm-eleicoes
    python3 scripts/check_quotes.py
"""
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS = ROOT / ".sources-cache" / "texts"

NODE = """
global.window = {};
const fs = require("fs");
fs.readdirSync("data/candidates").forEach(f => eval(fs.readFileSync("data/candidates/" + f, "utf8")));
const out = {};
Object.entries(window.CANDIDATES_DATA).forEach(([id, c]) => {
  const linhas = [];
  const push = (onde, q) => linhas.push({ onde, quote: q.quote, page: q.page });
  const secao = (nome, obj) => Object.entries(obj || {}).forEach(([k, e]) => {
    (e.diagnosis || []).forEach(q => push(nome + "." + k + ".diagnosis", q));
    (e.proposals || []).forEach(p => (p.quotes || []).forEach(q => push(nome + "." + k + " / " + p.title, q)));
  });
  secao("economy", c.economy);
  secao("themes", c.themes);
  secao("direitosBemEstar", c.direitosBemEstar);
  Object.entries(c.governments || {}).forEach(([g, l]) =>
    l.forEach(q => push("governments." + g, q)));
  out[id] = linhas;
});
process.stdout.write(JSON.stringify(out));
"""


def normalize(s):
    """Reduz o texto ao fluxo de letras e números, sem acento nem caixa.

    Pontuação, espaço e hífen somem de propósito: a extração do PDF quebra
    palavra no fim da linha ("público-\\nprivadas") e não dá para saber se o
    hífen é da palavra ou da quebra. Comparando só as letras, os dois lados
    ficam iguais nos dois casos, e nenhuma diferença real de transcrição
    (palavra trocada, número diferente, trecho a mais) passa batido."""
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^0-9a-z]+", "", s.lower())


PAGE_RE = re.compile(r"===== PAGE (\d+) =====\n?")


def tira_cabecalho(numero, texto, header):
    """Tira do começo da página o número impresso e o cabeçalho corrido.

    Sem isso, uma frase que vira a página fica com o número (e, no plano do
    Lula, o "PROGRAMA DE GOVERNO" de cada página) cravado no meio dela — e a
    citação, que é contínua, não casaria com o texto."""
    t = texto
    for prefixo in (str(numero), header, str(numero)):
        if prefixo and t.startswith(prefixo):
            t = t[len(prefixo):]
    return t


def detecta_header(paginas):
    """Acha o cabeçalho que se repete no alto das páginas, se houver."""
    inicios = {}
    for n, t in paginas.items():
        corpo = t[len(str(n)):] if t.startswith(str(n)) else t
        if len(corpo) >= 17:
            inicios[corpo[:17]] = inicios.get(corpo[:17], 0) + 1
    if not inicios:
        return ""
    candidato, vezes = max(inicios.items(), key=lambda kv: kv[1])
    return candidato if vezes >= len(paginas) * 0.4 else ""


def encontra_em_ordem(trechos, texto, inicio=0):
    """Cada pedaço da citação aparece no texto, na ordem em que foi citado."""
    pos = inicio
    for t in trechos:
        achou = texto.find(t, pos)
        if achou == -1:
            return -1
        pos = achou + len(t)
    return pos


def main():
    saida = subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, check=True)
    dados = json.loads(saida.stdout)

    total = problemas = 0
    for cid, linhas in sorted(dados.items()):
        caminho = TEXTS / f"{cid}.txt"
        if not caminho.exists():
            sys.exit(f"check_quotes: falta {caminho} — rode scripts/extract_plan_texts.py")
        partes = PAGE_RE.split(caminho.read_text(encoding="utf-8"))
        paginas = {int(partes[i]): normalize(partes[i + 1]) for i in range(1, len(partes), 2)}
        # Documento inteiro em sequência, guardando onde cada página começa:
        # uma citação pode começar na página citada e seguir pelas próximas
        # (frase cortada pela paginação, ou elisão "[...]" que pula adiante).
        header = detecta_header(paginas)
        paginas = {n: tira_cabecalho(n, t, header) for n, t in paginas.items()}
        doc = ""
        inicio_da_pagina = {}
        for n in sorted(paginas):
            inicio_da_pagina[n] = len(doc)
            doc += paginas[n]

        ruins = 0
        for linha in linhas:
            total += 1
            pagina = linha["page"]
            trechos = [normalize(t) for t in re.split(r"\[\.\.\.\]", linha["quote"]) if normalize(t)]
            comeco = inicio_da_pagina.get(pagina)
            ok = False
            if trechos and comeco is not None:
                fim_da_pagina = comeco + len(paginas.get(pagina, ""))
                # Procura a citação inteira no documento e aceita se o trecho
                # ocupar qualquer pedaço da página citada — começando nela,
                # terminando nela ou atravessando-a.
                busca = 0
                while True:
                    inicio = doc.find(trechos[0], busca)
                    if inicio == -1:
                        break
                    fim = encontra_em_ordem(trechos[1:], doc, inicio + len(trechos[0]))
                    if fim == -1:
                        break
                    if inicio < fim_da_pagina and fim > comeco:
                        ok = True
                        break
                    busca = inicio + 1
            if ok:
                continue
            ruins += 1
            problemas += 1
            onde_esta = [p for p, t in paginas.items() if trechos and trechos[0] in t]
            dica = f" — o trecho está na p.{onde_esta[0]}" if onde_esta else " — não achei este texto no plano"
            print(f"⚠ {cid} · {linha['onde']} · p.{pagina}{dica}")
            print(f"   « {linha['quote'][:110]}… »")
        print(f"{cid}: {len(linhas)} citações, {ruins} fora do lugar")

    print(f"\n{total} citações verificadas, {problemas} problema(s)")
    sys.exit(1 if problemas else 0)


if __name__ == "__main__":
    main()
