# FTM Eleições

Site estático (HTML/CSS/JS puro, sem build, sem dependências) que compara as
propostas dos 5 candidatos com mais intenção de voto na eleição presidencial
de 2026 (pesquisa BTG/Nexus, 17/ago/2026): Lula (PT), Flávio Bolsonaro (PL),
Ronaldo Caiado (PSD), Renan Santos (Missão) e Romeu Zema (Novo).

Foco principal em **Economia** — dividida em 7 subtemas, cada um com aba de
**Diagnóstico** e aba de **Propostas** — e cobertura mais enxuta de 6 outros
temas (educação, saúde, segurança, meio ambiente, tecnologia, política
externa). Em Economia e Outros Temas, todo trecho de posicionamento é
**citação literal** dos **planos de governo oficiais registrados no TSE**
(nunca resumo nosso), com a página do PDF referenciada. **Perfil Político**
e **Escola Austríaca** são as duas exceções declaradas: dois gráficos tipo
radar (6 eixos cada) com leitura editorial nossa, não citação — o site
deixa isso explícito em cada seção.

Página única, navegação por âncora. As 7 seções principais (Visão Geral,
Perfil Político, Escola Austríaca, Economia, Outros Temas, Comparar 1×1,
Fontes) são `<details>` retráteis, todas fechadas por padrão ao abrir o
site — clique no título de cada uma para abrir, independentes umas das
outras. Dentro de Economia e Outros Temas, os subtemas continuam em abas
(clique para trocar), não em accordion.

## Por que esse formato

O visual (sidebar, tipografia serifada+mono, tema claro/escuro) é herdado do
[ftm-chartbook](https://github.com/guivaraschinalves/ftm-chartbook), outro
projeto do mesmo autor — mas **não** o mecanismo. O chart-book lê a lista de
gráficos direto da API do GitHub em tempo real; aqui os dados são texto
estruturado (citações por candidato/tema), não imagens, e o site também
precisa funcionar como Claude Artifact — que bloqueia qualquer `fetch()`
externo. Por isso os dados vivem em arquivos `data/*.js` (`window.X = {...}`),
carregados como `<script>` normal, sem nenhuma chamada de rede em runtime.

## Estrutura

```
index.html          → casca da página (sidebar, seções) — script tags na ordem certa
styles.css           → visual (tokens de cor/tipografia/candidato, cards, tabs, radar)
app.js               → lê os dados e monta as seções (DOM puro, sem framework)
data/
  taxonomy.js         → subtemas de Economia, outros temas, ordem dos candidatos
  sources.js           → URL oficial de cada plano no TSE + caminho do PDF local
  profile.js            → eixos e notas do Perfil Político (síntese editorial, não citação)
  allocator.js           → eixos e notas da Escola Austríaca (idem, não citação)
  candidates/*.js       → um arquivo por candidato: dados básicos + citações por tema
sources/             → foto oficial (TSE) + cópia de cada PDF por candidato
scripts/
  build_artifact.py    → gera dist/ftm-eleicoes-artifact.html (versão self-contained p/ Artifact)
  export_content_md.py  → gera CONTEUDO-DO-SITE.md (dump de data/*.js em markdown)
  export_plans_md.py     → gera PLANOS-DE-GOVERNO.md (texto bruto dos 5 PDFs, um arquivo só)
CONTEUDO-DO-SITE.md  → leitura de apoio: tudo que está em data/*.js, formatado (não é lido pelo site)
PLANOS-DE-GOVERNO.md → leitura de apoio: os 5 planos de governo completos, um atrás do outro
```

## Como atualizar um candidato

Edite o arquivo dele em `data/candidates/<id>.js`. Cada subtema de Economia
tem:
- `diagnosis`: array de `{ quote, page }` — trecho **literal** do plano sobre
  o cenário atual, sem título nosso.
- `proposals`: array de `{ title, quotes: [{ quote, page }] }` — `title` é
  redigido por nós só para identificar o card; `quotes` é sempre transcrição
  literal do plano (pode ter mais de uma citação quando a proposta precisa de
  dois trechos para fazer sentido).

Se o plano não aborda um subtema, deixe os arrays vazios — o site mostra
"Não abordado explicitamente no plano de governo" em vez de um card em
branco (evita parecer erro de coleta). `otherThemes.<tema>` só tem
`proposals` no mesmo formato, sem `diagnosis`.

Para trocar/adicionar um candidato: crie `data/candidates/<id>.js` seguindo
o formato acima, adicione `<script src="data/candidates/<id>.js">` em
`index.html` (e na lista `SCRIPT_FILES` de `scripts/build_artifact.py`),
inclua `<id>` em `CANDIDATE_ORDER` (`data/taxonomy.js`), adicione a entrada
em `data/sources.js`, coloque a foto oficial em `sources/<id>.jpg` e o PDF em
`sources/<id>.pdf`, e adicione as notas de `data/profile.js` e
`data/allocator.js` (ver seção abaixo).

## Perfil Político e Escola Austríaca — as exceções declaradas

`data/profile.js` e `data/allocator.js` não seguem o padrão "citação
literal" do resto do site — os dois alimentam um gráfico tipo radar
(`buildRadarChart`/`buildRadarLegend` em `app.js`, compartilhado pelas duas
seções) com notas atribuídas por nós, a partir da leitura das citações já
coletadas em Economia/Outros Temas. Cada eixo tem um `rationale` por
candidato — editar a nota exige também editar (ou apontar para) o
`rationale` correspondente, para manter a leitura auditável.

- **`profile.js`** (`PROFILE_AXES`/`PROFILE_SCORES`): 6 eixos de 0 a 100,
  inspirados no Smartspider do [smartvote](https://www.smartvote.ch/) —
  uma síntese ampla de onde cada candidato se posiciona.
- **`allocator.js`** (`ALLOCATOR_AXES`/`ALLOCATOR_SCORES`/`ALLOCATOR_RUBRIC`),
  seção "Escola Austríaca" no site: 6 eixos de 0 a 3, cada um respondível
  contando propostas (rubrica em `ALLOCATOR_RUBRIC` e reproduzida no
  `<details>` "Como cada eixo foi pontuado" da própria seção), medindo uma
  coisa só: quanto o Estado deixa de ser o alocador de recursos. Somados dão
  um índice de 0 a 18, classificado em faixa por `allocatorBand()` em
  `app.js`. A moeda foi deixada de fora de propósito — nenhum dos 5 planos
  se aproxima da posição de padrão-ouro/fim do curso forçado, então o eixo
  não separaria ninguém. O total é chamado de "distância do Estado alocador"
  na legenda de cada candidato — mesmo o plano mais bem pontuado ainda está
  longe da escola, e o rótulo evita que uma comparação relativa entre 5
  planos vire afirmação absoluta. Quando a soma de D1–D5 diverge muito do
  eixo D6 (remover vs. construir), `buildAllocatorDetailLines()` sinaliza
  isso no detalhe do candidato em vez de escondê-lo numa média só.

## De onde vieram os dados

Os 5 PDFs foram baixados do **Portal de Dados Abertos do TSE**
(`dadosabertos.tse.jus.br/dataset/candidatos-2026`, recurso "BR — Proposta de
Governo", pacote `proposta_governo_2026_BR.zip`) e identificados cruzando o
`SQ_CANDIDATO` de cada um no arquivo de metadados
(`consulta_cand_2026_BR.csv`, recurso "Candidatos") com o nome do arquivo PDF
dentro do pacote (`2026BR<SQ_CANDIDATO>_01.pdf`). As fotos oficiais vieram do
recurso "BR — Fotos de Candidatos" do mesmo dataset, pareadas pelo mesmo
`SQ_CANDIDATO`. Fallback individual de PDF, quando necessário:
`divulgacandcontas.tse.jus.br/divulga/rest/arquivo/doc/<ID>`. Em caso de
dúvida ou divergência, o PDF oficial (linkado em cada card e na seção
Fontes) prevalece sobre qualquer citação aqui reproduzida.

## Testar localmente

```
cd ftm-eleicoes
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Ao contrário do ftm-chartbook, não depende de
nenhuma API externa — funciona igual local e publicado.

## Gerar e publicar o Artifact

```
cd ftm-eleicoes
python3 scripts/build_artifact.py
```

Gera `dist/ftm-eleicoes-artifact.html`: HTML único, com CSS, todos os dados e
as fotos (`sources/*.jpg`) embutidos como data URI — sem nenhum
`<link>`/`<script src>` externo — pronto pra colar na ferramenta de
Artifact. Os PDFs (`sources/*.pdf`, ~6,5 MB somados) **não** são embutidos: o
build zera `localPdfPath` nessa versão e o site usa só o link "Ver no TSE"
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
formatado — diagnóstico, propostas com citação e página, Perfil Político).
`PLANOS-DE-GOVERNO.md` é a matéria-prima: o texto bruto extraído dos 5 PDFs
oficiais, um atrás do outro (~14 mil linhas, ~0,9 MB — é grande de propósito,
é o material completo). Regenere os dois sempre que os dados mudarem; nenhum
dos dois é referenciado por `index.html`/`app.js`.

## Publicar no GitHub Pages

```
cd ftm-eleicoes
git add .
git commit -m "Atualiza propostas"
git push
```

O GitHub Pages já está configurado neste repositório (branch `main`, raiz) —
publica em `https://guivaraschinalves.github.io/ftm-eleicoes/` alguns
minutos depois do push.
