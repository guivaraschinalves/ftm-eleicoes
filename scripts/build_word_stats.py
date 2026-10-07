#!/usr/bin/env python3
"""Gera data/word-stats.js: as palavras e os termos mais usados em cada plano,
no plano inteiro e tema a tema. Alimenta o bloco "Palavras e termos mais
usados" da seção Contagem de Palavras.

COMO O CORPUS DE CADA TEMA É DEFINIDO
-------------------------------------
Os planos não são organizados pelos temas deste site, então "as palavras do
tema X" precisa de uma definição. A adotada é exata e verificável, sem
classificador nenhum: o corpus de um tema é o TEXTO INTEGRAL DAS PÁGINAS DE
ONDE SAÍRAM AS CITAÇÕES daquele tema. Quem classificou foi a curadoria das
citações, que o site já mostra — dá para conferir página por página.

Na prática isso cai em cima do bloco certo do plano: a Segurança Pública do
Flávio Bolsonaro vira as páginas 13-15, que são exatamente o capítulo "Brasil
sem Medo"; a Educação do Lula vira as páginas 31-33, o capítulo 4.

O "plano inteiro" é o texto completo, sem recorte.

COMO AS PALAVRAS SÃO CONTADAS
-----------------------------
1. Stopwords em duas camadas: as gramaticais (de, que, para) e as retóricas e
   burocráticas que todo plano de governo repete sem dizer nada ("vamos",
   "programa", "ação", "fortalecer"). Sem a segunda camada o ranking vira uma
   lista de verbos de campanha.
2. Plural fundido no singular SÓ quando o singular aparece no mesmo plano
   ("políticas"→"política"). É uma lematização pobre de propósito: não depende
   de dicionário externo e não inventa fusão ("mais" não vira "mai"). O
   vocabulário de referência é sempre o PLANO INTEIRO, nunca o recorte, pra
   a mesma palavra não aparecer fundida num tema e solta em outro.
3. Termos compostos de 2 a 4 palavras, aceitando só conectores no meio
   ("taxa de juros", "pessoas com deficiência", "inteligência artificial").
   Cada ocorrência vira um token único ANTES da contagem, então o termo não
   é contado de novo nas palavras soltas que o formam. Quando dois termos
   disputam o mesmo pedaço de texto, fica o mais frequente.
4. Sem TF-IDF: com dois documentos o idf é degenerado (um termo está em 1 ou
   em 2 planos, e nada mais), e o resultado seria só "aparece em um só".
   No lugar disso, cada termo leva a contagem do OUTRO plano no mesmo recorte
   (`vs`), que é o contraste que interessa, sem estatística de enfeite.

Uso:
    cd ftm-eleicoes
    python3 scripts/build_word_stats.py
"""
import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS = ROOT / ".sources-cache" / "texts"
QUANTOS = 10

PAGE_RE = re.compile(r"===== PAGE (\d+) =====\n?")
TOKEN_RE = re.compile(r"[0-9a-zà-öø-ÿ]+", re.I)

GRAMATICAIS = """a à às ao aos o os as um uma uns umas de do da dos das em no na nos nas num numa
por pelo pela pelos pelas para com sem sob sobre entre até após e ou mas que se como quando onde quem
qual quais cujo cuja cujos cujas é são foi eram era ser sendo sido seja sejam ter tem têm tenha tinha
haver há havia estar está estão estava seu sua seus suas nosso nossa nossos nossas este esta estes estas
esse essa esses essas aquele aquela aquilo isso isto mesmo mesma mesmos mesmas não nem já também mais
menos muito muita muitos muitas todo toda todos todas outro outra outros outras cada qualquer ainda
assim então porque pois lhe lhes ele ela eles elas nós você vocês eu me te si nada tudo algo algum alguma
alguns algumas sim ainda apenas somente inclusive"""

# Retórica de campanha e burocracia de plano de governo: altíssima frequência,
# baixíssimo conteúdo. Tirar isso é o que faz o ranking dizer alguma coisa.
RETORICA = """vamos vai irá iremos queremos devemos precisa precisam preciso deve devem possa possam
pode podem poder fazer faz feito feita torna tornar continuar continuaremos continuará seguir seguiremos
manter manteremos ampliar ampliaremos ampliando criar criaremos criando garantir garantiremos garantindo
promover promoveremos promovendo fortalecer fortaleceremos fortalecendo assegurar asseguraremos assegurando
implementar implementação propor proposta propostas plano planos programa programas projeto projetos
medida medidas ação ações diretriz diretrizes eixo eixos capítulo objetivo objetivos meta metas
hoje agora novo nova novos novas grande grandes maior maiores melhor melhores melhoria forma formas modo
meio além dentro cerca partir toda todo ano anos mil milhões bilhões atual atuais próprio própria próprias
vez vezes caso casos parte partes nível níveis ainda sempre nunca cada onde quem pessoas pessoa
avançar avançaremos buscar buscaremos buscando apoiar apoio reduzir redução aumentar aumento
realizar realização ter sido ser feito dar daremos
será serão seria seriam serem terá terão haverá houver aqui lá daqui demais tanto quanto
começamos retomamos criamos lançamos aprovamos fizemos construímos sancionamos implantamos recriamos
batemos chegamos demos tivemos estamos seguimos continuamos pretendemos persistiremos reforçaremos
consolidar consolidaremos recebemos governamos passou passa voltou voltamos vem vêm trazer traz"""

CONECTORES = set("de do da dos das e em no na a à ao aos para com".split())
STOP = set(GRAMATICAIS.split()) | set(RETORICA.split())
MIN_TERMO = 3   # um termo composto só conta a partir de 3 ocorrências no plano


def tokeniza(texto):
    return [w.lower() for w in TOKEN_RE.findall(texto)]


def le_paginas(cid):
    partes = PAGE_RE.split((TEXTS / f"{cid}.txt").read_text(encoding="utf-8"))
    paginas = {}
    for i in range(1, len(partes), 2):
        corpo = re.sub(r"-\s*\n\s*", "", partes[i + 1])   # hifenização de fim de linha
        paginas[int(partes[i])] = " ".join(corpo.split())
    return paginas


def acha_termos(toks):
    """Sequências de 2 a 4 tokens que começam e terminam em palavra plena e só
    têm conectores no meio."""
    cont = Counter()
    n = len(toks)
    for i, w in enumerate(toks):
        if w in STOP or len(w) < 3 or w.isdigit():
            continue
        for tam in (2, 3, 4):
            if i + tam > n:
                break
            seq = toks[i:i + tam]
            if seq[-1] in STOP or len(seq[-1]) < 3 or seq[-1].isdigit():
                continue
            if any(m not in CONECTORES for m in seq[1:-1]):
                continue
            cont[" ".join(seq)] += 1
    # Ordenado por frequência (e só então por tamanho): quando dois termos se
    # sobrepõem no texto, o mais repetido é que deve sobreviver — sem isso,
    # "enfrentamento ao crime" (5x) parte o "crime organizado" (13x) ao meio
    # só por ser uma string mais comprida.
    bons = {t: c for t, c in cont.items() if c >= MIN_TERMO}
    return [t for t, _ in sorted(bons.items(), key=lambda kv: (-kv[1], -len(kv[0])))]


def singulariza(w, vocab):
    if not w.endswith("s") or len(w) < 5:
        return w
    for fim, troca in (("ões", "ão"), ("ães", "ão"), ("ais", "al"), ("éis", "el"),
                       ("ois", "ol"), ("uis", "ul"), ("is", "il"), ("ns", "m"),
                       ("es", ""), ("s", "")):
        if w.endswith(fim):
            base = w[: -len(fim)] + troca
            if len(base) >= 3 and vocab.get(base, 0) > 0:
                return base
    return w


def conta(texto, termos, vocab):
    """Devolve (contagem de palavras soltas, contagem de termos, nº de palavras).

    `vocab` é o vocabulário do plano inteiro, usado só para decidir se um
    plural pode ser fundido no singular."""
    toks = tokeniza(texto)
    fluxo = " " + " ".join(toks) + " "
    for t in termos:   # já vem na ordem de prioridade (ver acha_termos)
        fluxo = fluxo.replace(" " + t + " ", " " + t.replace(" ", "_") + " ")
    marcados = fluxo.split()

    palavras, compostos = Counter(), Counter()
    for w in marcados:
        if "_" in w:
            compostos[w.replace("_", " ")] += 1
        elif w not in STOP and len(w) > 2 and not w.isdigit():
            palavras[singulariza(w, vocab)] += 1
    return palavras, compostos, len(toks)


NODE = """
global.window = {};
const fs = require("fs");
eval(fs.readFileSync("data/taxonomy.js", "utf8"));
fs.readdirSync("data/candidates").forEach(f => eval(fs.readFileSync("data/candidates/" + f, "utf8")));
const out = { temas: window.THEMES.map(t => ({ id: t.id, label: t.label })), paginas: {} };
Object.entries(window.CANDIDATES_DATA).forEach(([id, c]) => {
  const porTema = {};
  window.THEMES.forEach(th => {
    const blocos = th.subthemes ? th.subthemes.map(s => (c[th.store] || {})[s.id]) : [c.themes[th.id]];
    const paginas = new Set();
    blocos.filter(Boolean).forEach(e => {
      (e.diagnosis || []).forEach(q => paginas.add(q.page));
      (e.proposals || []).forEach(p => (p.quotes || []).forEach(q => paginas.add(q.page)));
    });
    porTema[th.id] = [...paginas].sort((a, b) => a - b);
  });
  out.paginas[id] = porTema;
});
process.stdout.write(JSON.stringify(out));
"""


def main():
    meta = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT,
                                     capture_output=True, text=True, check=True).stdout)
    ids = sorted(meta["paginas"])

    corpora = {}      # (cid, recorte) -> texto
    for cid in ids:
        paginas = le_paginas(cid)
        corpora[(cid, "geral")] = " ".join(paginas[p] for p in sorted(paginas))
        for tema, pags in meta["paginas"][cid].items():
            corpora[(cid, tema)] = " ".join(paginas[p] for p in pags if p in paginas)

    # Os termos compostos são descobertos no plano INTEIRO (um recorte pequeno
    # não teria ocorrências suficientes) e depois aplicados em cada recorte.
    termos = {cid: acha_termos(tokeniza(corpora[(cid, "geral")])) for cid in ids}
    vocabs = {cid: Counter(tokeniza(corpora[(cid, "geral")])) for cid in ids}

    contagens = {}
    for (cid, recorte), texto in corpora.items():
        contagens[(cid, recorte)] = conta(texto, termos[cid], vocabs[cid])

    saida = {"recortes": [{"id": "geral", "label": "Plano inteiro"}] + meta["temas"], "candidatos": {}}
    for cid in ids:
        outro = [x for x in ids if x != cid]
        saida["candidatos"][cid] = {}
        for recorte in ["geral"] + [t["id"] for t in meta["temas"]]:
            palavras, compostos, total = contagens[(cid, recorte)]
            p_outro, c_outro, _ = contagens.get((outro[0], recorte), (Counter(), Counter(), 0)) if outro else (Counter(), Counter(), 0)

            def topo(cont, cont_outro):
                # Ocorrência única num recorte pequeno é ruído, não ênfase:
                # a lista fica curta em vez de ser preenchida com barulho.
                return [{"t": t, "n": n, "vs": cont_outro.get(t, 0)}
                        for t, n in cont.most_common(QUANTOS) if n >= 2]

            saida["candidatos"][cid][recorte] = {
                "palavras": total,
                "paginas": len(meta["paginas"][cid].get(recorte, [])) if recorte != "geral" else None,
                "topPalavras": topo(palavras, p_outro),
                "topTermos": topo(compostos, c_outro),
            }

    destino = ROOT / "data" / "word-stats.js"
    destino.write_text(
        "// GERADO por scripts/build_word_stats.py — não editar à mão.\n"
        "// Palavras e termos mais usados em cada plano, no plano inteiro e por tema.\n"
        "// Método (corpus de cada tema, stopwords, plural, termos compostos):\n"
        "// ver o cabeçalho do script e a seção do README.\n"
        "window.WORD_STATS = " + json.dumps(saida, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8")
    print(f"OK: {destino} ({len(ids)} candidato(s), {len(saida['recortes'])} recortes)")


if __name__ == "__main__":
    main()
