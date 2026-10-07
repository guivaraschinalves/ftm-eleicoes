# FtM Eleições

Site estático (HTML/CSS/JS puro, sem build, sem dependências) do **Follow
the Money** que compara as propostas dos **dois candidatos do segundo turno**
da eleição presidencial de 2026: Flávio Bolsonaro (PL) e Lula (PT).

Além dos temas, há o **Balanço dos Governos**: o que cada plano diz sobre o
governo Jair Bolsonaro (2019–2022) e sobre os governos do PT (2003–2016 e
2023–2026) — inclusive sobre o próprio campo.

Cobertura em **7 temas** — Economia, Educação, Segurança Pública, Saúde,
Política Externa, Combate à Corrupção e Direitos e Bem-Estar — cada um com
aba de **Diagnóstico** e aba de **Propostas**. Economia é o único tema
dividido em 7 subtemas (cada um com o mesmo par Diagnóstico/Propostas); os
outros 6 vão direto ao par. Todo trecho de posicionamento é **citação
literal** dos **planos de governo oficiais registrados no TSE** (nunca
resumo nosso), com a página do PDF referenciada.

Os dois candidatos aparecem **sempre**, lado a lado, em todas as seções:
não há diálogo de seleção, filtro nem seção de comparação à parte — com
dois candidatos, cada aba de tema já é a comparação.

Página única, sem navegação por âncora — trocar de seção nunca muda a URL
(atualizar a página ou compartilhar o link sempre cai no cardzinho
inicial). Por padrão só o cardzinho inicial aparece. O menu no topo (Visão
Geral, Temas, Governos, Contagem de Palavras, Fontes) mostra uma seção por vez em tela
cheia, escondendo o cardzinho e as demais — é sempre uma coisa de cada vez.
Clicar no logo do Follow the Money no canto esquerdo do topbar volta pro
cardzinho inicial (é a única forma de voltar — não tem item "Início" na
navegação). Dentro de Temas, os 7 temas ficam em abas (clique para trocar),
e Economia tem um segundo nível de abas para os subtemas.

Em telas de até 900px (celular e tablet), o menu do topo vira um **menu
retrátil**: a barra fica só com o logo, o botão de tema (só o ícone) e um
hambúrguer "☰ Menu", que abre um painel com as 5 seções. O painel fecha
sozinho ao escolher uma seção, ao tocar fora dele ou com Esc. Acima de
900px nada muda em relação ao desktop.

O conteúdo (citações, temas, scripts de apoio) veio do
[liberta-eleicoes](https://github.com/guivaraschinalves/liberta-eleicoes),
do mesmo autor, que por sua vez nasceu deste repositório — aqui ele volta
com a identidade visual do Follow the Money e reduzido aos dois candidatos
do segundo turno. As seções **Perfil Político** e **Papel do Estado** que
este repositório tinha antes (leitura editorial em gráfico, não citação)
saíram; continuam no histórico do git.

## Identidade visual

A mesma dos outros sites de dados do **Follow the Money** (`ftm-dados`,
`ftm-analises`): **escuro por padrão**, fundo `#0b0b0b`, superfícies
`#151515`, texto gelo `#f2f2f2` e **um único acento**, o ciano `#4BACC6`,
que marca ação e destaque (aba ativa, botão, régua das citações, marcador
das listas). O tema claro é a variação, não o padrão. Tipografia:
**Calibri** (com **Carlito**, a métrica equivalente livre, como fallback),
igual à dos gráficos da marca.

O tema é sempre explícito no atributo `data-theme` do `<html>`, pintado
antes do CSS por um script inline no topo do `index.html` — sem flash de
branco ao carregar. Não existe modo "seguir o sistema": sem escolha salva em
`localStorage` (chave `ftm_eleicoes_tema`), o site abre escuro. O botão de
sol/lua no topbar alterna e persiste.

O logotipo é o wordmark do FtM em **SVG inline** no `index.html`, desenhado
em `currentColor` — assume `var(--logo)` e acompanha o tema (cinza claro no
escuro, cinza escuro no claro). O arquivo de origem é
`lps-ftm/public/lp/ftm/logo-ftm-branco.svg`.

Os tokens de cor e tipografia ficam todos no topo de `styles.css`.
`index.html` referencia `styles.css?v=N` e `app.js?v=N` — **suba o N a cada
mudança nesses dois arquivos**, senão o GitHub Pages serve a versão antiga
do cache.

O mecanismo de dados (`window.X = {...}` em `data/*.js`, sem nenhuma
chamada de rede em runtime) é herdado do
[ftm-chartbook](https://github.com/guivaraschinalves/ftm-chartbook), outro
projeto do mesmo autor — o site também precisa funcionar como Claude
Artifact, que bloqueia qualquer `fetch()` externo.

## Estrutura

```
index.html          → casca da página (topbar com o logo, menu, seções) — script tags na ordem certa
styles.css           → visual (tokens de cor/tipografia, cards, tabs, menu retrátil)
app.js               → lê os dados e monta todas as seções (DOM puro, sem framework)
assets/favicon.svg   → ícone da aba, na mesma família dos outros sites do FtM
data/
  taxonomy.js         → os 7 temas (window.THEMES), subtemas de Economia, os governos do Balanço (window.GOVERNMENTS), ordem dos candidatos
  sources.js           → URL oficial de cada plano no TSE + caminho do PDF local (+ planFiled)
  plan-texts.js         → texto INTEGRAL de cada plano (window.PLAN_TEXTS) — gerado, não editar à mão; só a Contagem de Palavras usa
  candidates/*.js       → um arquivo por candidato: dados básicos (com data de nascimento) + citações por tema
sources/             → foto oficial (TSE) + cópia de cada PDF por candidato
scripts/
  build_artifact.py    → gera dist/ftm-eleicoes-artifact.html (versão self-contained p/ Artifact)
  export_content_md.py  → gera CONTEUDO-DO-SITE.md (dump de data/*.js em markdown)
  export_plans_md.py     → gera PLANOS-DE-GOVERNO.md (texto bruto dos PDFs, um arquivo só)
  extract_plan_texts.py  → extrai .sources-cache/texts/<id>.txt de sources/<id>.pdf (PyMuPDF)
  build_plan_texts.py    → gera data/plan-texts.js a partir de .sources-cache/texts/
  audit_coverage.py      → gera AUDITORIA-COBERTURA.md (páginas com possível conteúdo ainda não citado)
  check_governments.py   → confere o bloco `governments`: citação literal na página certa, sem repetir o que já está em Economia/Temas
CONTEUDO-DO-SITE.md      → leitura de apoio: tudo que está em data/*.js, formatado (não é lido pelo site)
PLANOS-DE-GOVERNO.md     → leitura de apoio: os planos de governo completos, um atrás do outro
AUDITORIA-COBERTURA.md   → leitura de apoio: páginas sinalizadas por audit_coverage.py, pra revisar
```

## Como atualizar um candidato

Edite o arquivo dele em `data/candidates/<id>.js`. Cada tema (`economy.<subtema>`
para Economia, `themes.<tema>` para os outros 6) tem:
- `diagnosis`: array de `{ quote, page }` — trecho **literal** do plano sobre
  o cenário atual, sem título nosso.
- `proposals`: array de `{ title, quotes: [{ quote, page }] }` — `title` é
  redigido por nós só para identificar o card; `quotes` é sempre transcrição
  literal do plano (pode ter mais de uma citação quando a proposta precisa de
  dois trechos para fazer sentido).

Se o plano não aborda um tema/subtema, deixe os arrays vazios — o site mostra
"Não abordado explicitamente no plano de governo" em vez de um card em
branco (evita parecer erro de coleta).

`basics.birthDate` (formato `"AAAA-MM-DD"`) alimenta a Idade mostrada em
Visão Geral — calculada em `app.js` (`calcAge`) a partir da data de hoje,
não gravada como número fixo, então continua correta em qualquer visita.

Para trocar/adicionar um candidato: crie `data/candidates/<id>.js` seguindo
o formato acima, adicione `<script src="data/candidates/<id>.js">` em
`index.html` (e nas listas `SCRIPT_FILES` de `scripts/build_artifact.py` e
`DATA_FILES` de `scripts/export_content_md.py` — `scripts/export_plans_md.py`
não precisa, ele lê `CANDIDATE_ORDER` direto), inclua `<id>` em
`CANDIDATE_ORDER` (`data/taxonomy.js`, ordenado por `ballotName`), adicione a
entrada em `data/sources.js`, e coloque a foto oficial em
`sources/<id>.jpg` e o PDF em `sources/<id>.pdf`.

Depois de colocar o PDF, rode `python3 scripts/extract_plan_texts.py <id>`
(extrai o texto pra `.sources-cache/texts/<id>.txt` via PyMuPDF) e em
seguida `python3 scripts/build_plan_texts.py` (regenera `data/plan-texts.js`
a partir do cache) — sem isso o candidato aparece em Visão Geral/Temas mas
fica de fora da Contagem de Palavras.

Depois de escrever as citações (ou sempre que atualizar as de um candidato
já existente), rode `python3 scripts/audit_coverage.py <id>` — ver
"## Auditoria de cobertura" abaixo — pra conferir que nenhum trecho
relevante ficou de fora antes de publicar.

Se o candidato registrou candidatura **sem** entregar Proposta de Governo ao
TSE, marque `planFiled: false` na entrada dele em `data/sources.js` (com
`officialPdfUrl`/`localPdfPath`/`pageCount` como `null` **literal**, não
string vazia nem chave omitida — os validadores de `build_artifact.py`
dependem disso). O site então mostra, em todo card de Temas e na linha de
Fontes desse candidato, uma mensagem clara de que não há plano registrado —
bem diferente de "não abordado", que pressupõe um plano real que só não fala
daquele tema.

Para adicionar/renomear um tema: edite `window.THEMES` em `data/taxonomy.js`
(só o tema `economia` leva `subthemes`) e replique a chave em
`themes.<id>` de cada `data/candidates/*.js`.

## Auditoria de cobertura

A seleção de citações é leitura manual, tema por tema — não é uma busca
automática/exaustiva, então não garante sozinha que nada relevante ficou de
fora (o risco cresce com o tamanho do plano). `scripts/audit_coverage.py`
existe pra reduzir esse risco: varre o texto integral de cada plano
(`.sources-cache/texts/<id>.txt`) por palavras-chave de cada um dos 12
temas/subtemas e sinaliza **páginas que mencionam o assunto mas ainda não
têm nenhuma citação lá** (mesma granularidade de página que `quote.page` já
usa, sem depender de detectar quebra de parágrafo — a extração de PDF não
garante isso). Roda assim:

```
python3 scripts/audit_coverage.py              # todos os candidatos com plano
python3 scripts/audit_coverage.py caiado zema  # só os ids passados
```

Gera/atualiza `AUDITORIA-COBERTURA.md` (leitura de apoio, como
`CONTEUDO-DO-SITE.md`/`PLANOS-DE-GOVERNO.md` — não é lido pelo site). A
ferramenta **não decide sozinha** o que falta: cada página sinalizada
precisa ser lida (no `.txt` ou no PDF, pra ter o contexto completo) e
julgada — já coberta em espírito por uma citação existente, tangencial/menção
de passagem, ou genuinamente um ponto novo, caso em que vira uma citação
literal nova em `data/candidates/<id>.js` (nunca alterando as que já
existem). Rodar de novo depois: a página some da lista assim que ganha uma
citação naquele tema, então o relatório sempre mostra só o que ainda não
foi decidido.

As listas de palavras-chave (`KEYWORDS` no script) são um ponto de partida
editorial, não uma lista fechada — ajustar é esperado conforme aparecerem
falsos negativos (tema relevante que nenhuma palavra-chave pegou) ou falsos
positivos (muito ruído numa categoria específica). O filtro já exige pelo
menos 3 palavras-chave distintas na mesma página e ignora páginas de
sumário/índice — sem isso, um plano de governo holístico (que menciona
saúde/educação/segurança de passagem o tempo todo, só conectando políticas)
sinaliza quase toda página do documento.

## Por que não há seletor de candidatos

A versão de 13 candidatos deste site (o `liberta-eleicoes`) abre com um
diálogo pedindo quem deve aparecer, e tem uma seção "Comparar 1×1" pra ver
dois lado a lado. Aqui os dois candidatos são o conteúdo inteiro, então as
duas coisas saíram: o site abre direto no cardzinho inicial e cada aba de
tema já mostra Flávio Bolsonaro e Lula lado a lado, na ordem alfabética de
`CANDIDATE_ORDER`. `visibleIds`, em `app.js`, continua existindo como a
lista única que todas as seções leem — só que agora é preenchida uma vez em
`init()` com todo mundo, em vez de depender de uma seleção.

## Balanço dos Governos

Os dois planos gastam boa parte do texto comentando os mesmos dois governos.
A seção **Governos** põe essas leituras lado a lado: uma aba por governo
(`window.GOVERNMENTS` em `data/taxonomy.js`) e, dentro dela, um card por
candidato com as citações literais de `governments.<id>` do arquivo dele.

O recorte é de **quem** o trecho comenta, não de quem escreveu: a aba
"Governo Jair Bolsonaro" junta o balanço que o plano do Flávio faz do próprio
governo e o que o plano do Lula diz do mesmo período — e vice-versa na aba
"Governos do PT". É esse contraste que a seção existe para mostrar; o site
não arbitra nenhuma das duas versões.

Valem as mesmas regras do resto: citação literal, com página, nada de resumo
nosso. Duas diferenças em relação aos temas:

- não há par Diagnóstico/Propostas — é uma lista de trechos só;
- um trecho que já está citado em Economia ou em Temas **não** se repete
  aqui. `python3 scripts/check_governments.py` verifica as duas coisas (e que
  cada citação está mesmo na página indicada), e sai com código 1 se achar
  problema — rode depois de mexer em `governments`.

## Contador de palavras

Digite uma palavra em Contagem de Palavras para ver um gráfico de barras de
quantas vezes ela aparece no **texto completo** do plano de governo de cada
candidato. Busca por
**palavra inteira** (não substring — "imposto" não casa com "impostos"),
sem diferenciar maiúscula/minúscula nem acento (`normalizeForMatch`/
`countWordOccurrences` em `app.js`). Candidato com `planFiled: false` em
`data/sources.js` fica de fora do gráfico com um aviso, nunca vira uma barra
de "0" — "0 ocorrências reais" e "não há plano pra contar" são fatos
diferentes.

Diferente do resto do site, isto é **contagem mecânica bruta**, não
citação: o texto vem de `data/plan-texts.js` (`window.PLAN_TEXTS`), gerado
por `scripts/build_plan_texts.py` a partir do cache em
`.sources-cache/texts/*.txt`, que por sua vez vem de
`scripts/extract_plan_texts.py` (PyMuPDF sobre `sources/*.pdf`). Rode os
dois sempre que adicionar ou trocar um PDF — ver "Como atualizar um
candidato" acima.

Passar o mouse (ou navegar com Tab) em cima de uma barra mostra um tooltip
com a **taxa de ocorrência a cada 10 mil palavras do plano** — não a
contagem absoluta, que já fica visível no número ao lado da barra. Planos
com menos de 10 mil palavras não mostram taxa (extrapolaria demais pra ser
representativa): o tooltip mostra só o tamanho do plano nesse caso, ex.
"Fulano possui 1.945 palavras no plano." O tamanho de cada plano é
calculado a partir do próprio `window.PLAN_TEXTS`, não é um número gravado
em lugar nenhum.

## De onde vieram os dados

Os PDFs e fotos oficiais vêm do **Portal de Dados Abertos do TSE**
(`dadosabertos.tse.jus.br/dataset/candidatos-2026`, recurso "BR — Proposta de
Governo", pacote `proposta_governo_2026_BR.zip`, e recurso "BR — Fotos de
Candidatos"), identificados cruzando o `SQ_CANDIDATO` de cada candidato no
arquivo de metadados (`consulta_cand_2026_BR.csv`, recurso "Candidatos") com
o nome do arquivo dentro dos pacotes (`2026BR<SQ_CANDIDATO>_01.pdf` para o
plano, `FBR<SQ_CANDIDATO>_div.jpg` para a foto). Quando o domínio
`dadosabertos.tse.jus.br` não está acessível diretamente, os mesmos arquivos
— confirmados byte a byte idênticos ao original do TSE — podem ser obtidos
via `static.ndmais.com.br/eleicoes/2026/...`, que replica essa mesma
estrutura de nomes. Fallback individual de PDF, quando necessário:
`divulgacandcontas.tse.jus.br/divulga/rest/arquivo/doc/<ID>`. Em caso de
dúvida ou divergência, o PDF oficial (linkado em cada card e na seção
Fontes) prevalece sobre qualquer citação aqui reproduzida.

As datas de nascimento (`basics.birthDate`) vêm de fontes públicas — perfis
oficiais no Senado/governos estaduais e cobertura jornalística da candidatura
de cada um — reunidas na pesquisa que originou este repositório; nenhuma
delas consta do plano de governo em si.

## Testar localmente

```
cd ftm-eleicoes
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Não depende de nenhuma API externa — funciona
igual local e publicado.

## Gerar e publicar o Artifact

```
cd ftm-eleicoes
python3 scripts/build_artifact.py
```

Gera `dist/ftm-eleicoes-artifact.html`: HTML único, com CSS, todos os
dados e as fotos (`sources/*.jpg`) embutidos como data URI — sem nenhum
`<link>`/`<script src>` externo — pronto pra colar na ferramenta de
Artifact. Os PDFs (`sources/*.pdf`) **não** são embutidos: o build zera
`localPdfPath` nessa versão e o site usa só o link "Ver no TSE"
(`officialPdfUrl`), que aponta pra fonte oficial de qualquer forma. Rode de
novo sempre que mudar dado, estilo ou `app.js`; nunca edite o arquivo gerado
à mão.

## Arquivos de leitura de apoio (não lidos pelo site)

Dois arquivos em markdown, gerados a partir dos mesmos dados/fontes que o
site usa, para quem quer ler tudo de uma vez fora do navegador:

```
python3 scripts/export_content_md.py   # gera CONTEUDO-DO-SITE.md
python3 scripts/export_plans_md.py     # gera PLANOS-DE-GOVERNO.md
```

`CONTEUDO-DO-SITE.md` é o conteúdo já curado (o que está em `data/*.js`,
formatado — diagnóstico e propostas com citação e página, por tema).
`PLANOS-DE-GOVERNO.md` é a matéria-prima: o texto bruto extraído dos PDFs
oficiais, um atrás do outro (candidato sem plano registrado entra só com um
aviso, sem texto). Regenere os dois sempre que os dados mudarem; nenhum dos
dois é referenciado por `index.html`/`app.js`.

## Publicar no GitHub Pages

```
cd ftm-eleicoes
git add .
git commit -m "Atualiza propostas"
git push
```
