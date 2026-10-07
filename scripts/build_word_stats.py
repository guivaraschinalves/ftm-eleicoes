#!/usr/bin/env python3
"""Gera data/word-stats.js: o que cada plano mais menciona, no plano inteiro e
tema a tema. Alimenta o bloco "O que cada plano mais menciona" da seção
Contagem de Palavras.

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

O QUE É CONTADO: MENÇÕES, NÃO PALAVRAS
--------------------------------------
A unidade da contagem é a COISA MENCIONADA, tenha ela uma palavra ou quatro.
"China", "Estados Unidos" e "taxa de juros" são uma menção cada — contar
"estados", "unidos", "taxa", "juros" em separado desmancharia justamente o
que interessa. Por isso o ranking é um só, sem separar palavra de termo: cada
ocorrência do texto é atribuída a exatamente UMA unidade, e a disputa por
lugar no topo é entre unidades comparáveis.

Três detectores alimentam a lista de unidades compostas:

1. NOMES PRÓPRIOS PELA MAIÚSCULA. Sequências de 2 a 4 palavras com inicial
   maiúscula, aceitando conectores minúsculos no meio: "Estados Unidos",
   "União Europeia", "Novo PAC", "Bolsa Família", "Casa da Mulher Brasileira".
   Artigo da frente é descartado ("O Brasil" → "Brasil"). A busca é feita no
   texto cru, não na lista de tokens, porque é a pontuação que impede
   "Argentina, Estados Unidos e Israel" de virar um nome só — e "e" fica
   fora dos conectores pela mesma razão. Um nome vale como unidade mesmo
   citado uma única vez: ele é uma menção, não uma repetição.
2. NOMES DE UMA PALAVRA SÓ, por proporção de maiúsculas: um token conta como
   nome quando aparece com inicial maiúscula em pelo menos 80% das vezes no
   plano. "China", "Petrobras", "Itamaraty" e "SUS" passam; "estado" e "fila"
   não, porque aparecem minúsculos o tempo todo. A regra é necessária porque o
   PDF capitaliza início de frase e títulos: sem ela, "Vamos" viraria um nome.
3. COLOCAÇÕES MINÚSCULAS, de 2 a 4 palavras com só conectores no meio e pelo
   menos 3 ocorrências: "taxa de juros", "crime organizado", "poder de compra".

As ocorrências são substituídas por um token único ANTES da contagem, das
unidades mais frequentes para as menos — assim o termo não é recontado nas
palavras que o formam, e quando dois se sobrepõem no texto fica o mais
repetido ("crime organizado", 13x, não é partido por "enfrentamento ao
crime", 5x).

E MAIS
------
4. Stopwords em duas camadas: as gramaticais (de, que, para) e as retóricas e
   burocráticas que todo plano repete sem dizer nada ("vamos", "programa",
   "ação", "fortalecer"). Sem a segunda camada o ranking vira uma lista de
   verbos de campanha. Nome próprio detectado nunca é descartado por elas.
5. Plural fundido no singular SÓ quando o singular aparece no mesmo plano
   ("políticas"→"política"), com o vocabulário do plano inteiro como
   referência. Lematização pobre de propósito: sem dicionário externo e sem
   fusão inventada ("mais" não vira "mai"). Nome próprio não é mexido.
6. Sem TF-IDF: com tão poucos documentos o idf é degenerado (um termo está em
   um ou em dois planos, e nada mais), e o resultado seria só "aparece em um
   só". No lugar disso, o site mostra ao lado de cada unidade a contagem do
   OUTRO plano comparado, no mesmo recorte — o contraste que interessa, sem
   estatística de enfeite. Como o par comparado é escolhido pelo visitante, o
   arquivo não traz o contraste pronto: traz, por recorte, o `top` de cada
   plano mais um `counts` com a contagem de TODO termo que aparece no top de
   qualquer plano. O navegador cruza os dois na hora.

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
QUANTOS = 20

PAGE_RE = re.compile(r"===== PAGE (\d+) =====\n?")
TOKEN_RE = re.compile(r"[0-9a-zà-öø-ÿ]+", re.I)

GRAMATICAIS = """a à às ao aos o os as um uma uns umas de do da dos das em no na nos nas num numa
por pelo pela pelos pelas para com sem sob sobre entre até após e ou mas que se como quando onde quem
qual quais cujo cuja cujos cujas é são foi eram era ser sendo sido seja sejam ter tem têm tenha tinha
haver há havia estar está estão estava seu sua seus suas nosso nossa nossos nossas este esta estes estas
esse essa esses essas aquele aquela aquilo isso isto mesmo mesma mesmos mesmas não nem já também mais
menos muito muita muitos muitas todo toda todos todas outro outra outros outras cada qualquer ainda
assim então porque pois lhe lhes ele ela eles elas nós você vocês eu me te si nada tudo algo algum alguma
alguns algumas sim ainda apenas somente inclusive contra junto disso nisso daí perante"""

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
consolidar consolidaremos recebemos governamos passou passa voltou voltamos vem vêm trazer traz
foram fosse sido importante importantes bem mal muito pouco apenas cada vez dentre entre outros
exemplo exemplos citase destacase tratase trata mencionar vale fim início meio geral especial
acordo seguinte seguintes anterior anteriores próximo próxima próximos próximas"""

CONECTORES = set("de do da dos das e em no na a à ao aos para com".split())
ARTIGOS = set("o a os as um uma este esta esse essa nosso nossa seu sua".split())
STOP = set(GRAMATICAIS.split()) | set(RETORICA.split())
MIN_COLOCACAO = 3   # colocação minúscula só vale a partir de 3 ocorrências
MIN_NOME = 1        # nome próprio composto é unidade mesmo citado uma vez
PROPORCAO_MAIUSCULA = 0.8


def tokeniza(texto):
    return [w.lower() for w in TOKEN_RE.findall(texto)]


def tokeniza_com_caixa(texto):
    return [w for w in TOKEN_RE.findall(texto) if len(w) >= 2]


def nomes_de_uma_palavra(toks_caixa):
    """Token que aparece com inicial maiúscula em >=80% das vezes é nome
    próprio ('China', 'Petrobras', 'SUS'); 'estado' e 'fila', que aparecem
    minúsculos o tempo todo, não são."""
    total, maiusculo = Counter(), Counter()
    for t in toks_caixa:
        total[t.lower()] += 1
        if t[:1].isupper():
            maiusculo[t.lower()] += 1
    return {w for w, n in total.items()
            if n >= 2 and maiusculo[w] / n >= PROPORCAO_MAIUSCULA and w not in STOP}


# Nome próprio composto: 2 a 4 palavras com inicial maiúscula, conectores
# minúsculos permitidos no meio. Roda sobre o texto CRU, não sobre a lista de
# tokens, porque a pontuação é o que impede "Argentina, Estados Unidos e
# Israel" de virar um nome só — e "e" fica de fora dos conectores pelo mesmo
# motivo ("Argentina e Israel" são dois, "Bolsa Família" é um).
MAIUSCULA = r"[A-ZÀ-ÖØ-Þ][0-9A-Za-zÀ-ÖØ-öø-ÿ]+"   # 2+ caracteres: letra solta é cabeçalho espaçado, não nome
LIGACAO_NOME = r"(?:de|da|do|das|dos|em|no|na)"
NOME_RE = re.compile(
    rf"{MAIUSCULA}(?:[ ](?:{LIGACAO_NOME}[ ])?{MAIUSCULA}){{1,3}}"
)


def nomes_compostos(texto):
    cont = Counter()
    for m in NOME_RE.finditer(texto):
        seq = [w.lower() for w in m.group(0).split()]
        while seq and seq[0] in ARTIGOS:          # "O Brasil" -> "Brasil"
            seq = seq[1:]
        if len(seq) < 2 or len(seq) > 4:
            continue
        if seq[0] in STOP or seq[-1] in STOP:
            continue
        if any(w in STOP and w not in CONECTORES for w in seq):
            continue
        cont[" ".join(seq)] += 1
    return {t for t, c in cont.items() if c >= MIN_NOME}


NOTA_RE = re.compile(r"\bFonte:?\s*\S+|https?://\S+|www\.\S+")


def le_paginas(cid):
    partes = PAGE_RE.split((TEXTS / f"{cid}.txt").read_text(encoding="utf-8"))
    paginas = {}
    for i in range(1, len(partes), 2):
        corpo = re.sub(r"-\s*\n\s*", "", partes[i + 1])   # hifenização de fim de linha
        corpo = NOTA_RE.sub(" ", corpo)   # nota de rodapé com URL não é conteúdo
        paginas[int(partes[i])] = " ".join(corpo.split())
    return paginas


def colocacoes(toks):
    """Sequências de 2 a 4 tokens minúsculos que começam e terminam em palavra
    plena e só têm conectores no meio ('taxa de juros')."""
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
    return {t for t, c in cont.items() if c >= MIN_COLOCACAO}


def unidades_compostas(texto):
    """Lista de unidades de 2+ palavras, em ordem de prioridade para a troca:
    as mais frequentes primeiro (ver `conta`)."""
    toks = tokeniza(texto)
    candidatas = colocacoes(toks) | nomes_compostos(texto)
    fluxo = " " + " ".join(toks) + " "
    freq = {t: fluxo.count(" " + t + " ") for t in candidatas}
    return [t for t, c in sorted(freq.items(), key=lambda kv: (-kv[1], -len(kv[0]))) if c > 0]


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


def conta(texto, termos, vocab, proprios):
    """Devolve (contagem de palavras soltas, contagem de termos, nº de palavras).

    `vocab` é o vocabulário do plano inteiro, usado só para decidir se um
    plural pode ser fundido no singular."""
    toks = tokeniza(texto)
    fluxo = " " + " ".join(toks) + " "
    for t in termos:   # já vem na ordem de prioridade (ver acha_termos)
        fluxo = fluxo.replace(" " + t + " ", " " + t.replace(" ", "_") + " ")
    marcados = fluxo.split()

    # Uma lista só: cada ocorrência do texto já foi atribuída a exatamente
    # uma unidade, então nome próprio, termo composto e palavra solta disputam
    # o mesmo ranking em pé de igualdade.
    mencoes = Counter()
    for w in marcados:
        if "_" in w:
            mencoes[w.replace("_", " ")] += 1
        elif w in proprios:                       # nome próprio escapa da
            mencoes[w] += 1                       # stoplist e do plural
        elif w not in STOP and len(w) > 2 and not w.isdigit():
            mencoes[singulariza(w, vocab)] += 1
    return mencoes, len(toks)


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


def ordena(mencoes):
    """Mais citado primeiro; no empate, o nome/termo composto vem antes da
    palavra solta — "Estados Unidos" diz mais que "produz" com a mesma
    contagem. Ocorrência única é ruído, não ênfase, e fica de fora: a lista
    encurta em vez de se encher de barulho."""
    itens = [(t, n) for t, n in mencoes.items() if n >= 2]
    return sorted(itens, key=lambda kv: (-kv[1], 0 if " " in kv[0] else 1, kv[0]))


def main():
    meta = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT,
                                     capture_output=True, text=True, check=True).stdout)
    ids = sorted(meta["paginas"])
    recortes = ["geral"] + [t["id"] for t in meta["temas"]]

    corpora = {}      # (cid, recorte) -> texto
    for cid in ids:
        paginas = le_paginas(cid)
        corpora[(cid, "geral")] = " ".join(paginas[p] for p in sorted(paginas))
        for tema, pags in meta["paginas"][cid].items():
            corpora[(cid, tema)] = " ".join(paginas[p] for p in pags if p in paginas)

    # As unidades compostas e os nomes próprios são descobertos no plano
    # INTEIRO (num recorte pequeno faltaria repetição para detectá-los) e
    # depois aplicados a cada recorte.
    inteiro = {cid: corpora[(cid, "geral")] for cid in ids}
    compostas = {cid: unidades_compostas(inteiro[cid]) for cid in ids}
    proprios = {cid: nomes_de_uma_palavra(tokeniza_com_caixa(inteiro[cid])) for cid in ids}
    vocabs = {cid: Counter(tokeniza(inteiro[cid])) for cid in ids}

    contagens = {(cid, r): conta(texto, compostas[cid], vocabs[cid], proprios[cid])
                 for (cid, r), texto in corpora.items()}

    saida = {"recortes": [{"id": "geral", "label": "Plano inteiro"}] + meta["temas"],
             "candidatos": {}}
    # Termos que aparecem no top de QUALQUER plano, por recorte: é o conjunto
    # que o navegador precisa saber contar em todos os planos para montar o
    # contraste do par escolhido na hora.
    do_topo = {r: set() for r in recortes}
    for cid in ids:
        for recorte in recortes:
            for t, _ in ordena(contagens[(cid, recorte)][0])[:QUANTOS]:
                do_topo[recorte].add(t)

    for cid in ids:
        saida["candidatos"][cid] = {}
        for recorte in recortes:
            mencoes, total = contagens[(cid, recorte)]
            saida["candidatos"][cid][recorte] = {
                "palavras": total,
                "paginas": len(meta["paginas"][cid].get(recorte, [])) if recorte != "geral" else None,
                # Ocorrência única num recorte pequeno é ruído, não ênfase: a
                # lista fica curta em vez de ser preenchida com barulho.
                "top": [{"t": t, "n": n} for t, n in ordena(mencoes)[:QUANTOS]],
                "counts": {t: mencoes.get(t, 0) for t in sorted(do_topo[recorte])},
            }

    destino = ROOT / "data" / "word-stats.js"
    destino.write_text(
        "// GERADO por scripts/build_word_stats.py — não editar à mão.\n"
        "// O que cada plano mais menciona, no plano inteiro e por tema. A unidade\n"
        "// contada é a coisa mencionada, de uma ou mais palavras (China, Estados\n"
        "// Unidos, taxa de juros valem uma menção cada).\n"
        "// Método completo: cabeçalho do script e seção do README.\n"
        "window.WORD_STATS = " + json.dumps(saida, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8")
    print(f"OK: {destino} ({len(ids)} candidato(s), {len(recortes)} recortes)")


if __name__ == "__main__":
    main()
