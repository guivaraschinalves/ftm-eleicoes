# FTM Eleições

Site estático (HTML/CSS/JS puro, sem build, sem dependências) que compara as
propostas dos 5 candidatos com mais intenção de voto na eleição presidencial
de 2026 (pesquisa BTG/Nexus, 17/ago/2026): Lula (PT), Flávio Bolsonaro (PL),
Ronaldo Caiado (PSD), Renan Santos (Missão) e Romeu Zema (Novo).

Foco principal em **Economia** — dividida em 7 subtemas, cada um separando o
**diagnóstico** que o candidato faz do cenário atual das **medidas
propostas** para o futuro — e cobertura mais enxuta de 6 outros temas
(educação, saúde, segurança, meio ambiente, tecnologia, política externa).
Todo o conteúdo é extraído e parafraseado dos **planos de governo oficiais
registrados no TSE**, com a página do PDF citada em cada trecho.

## Por que esse formato

O visual (sidebar, tipografia serifada+mono, tema claro/escuro) é herdado do
[ftm-chartbook](https://github.com/guivaraschinalves/ftm-chartbook), outro
projeto do mesmo autor — mas **não** o mecanismo. O chart-book lê a lista de
gráficos direto da API do GitHub em tempo real; aqui os dados são texto
estruturado (propostas por candidato/tema), não imagens, e o site também
precisa funcionar como Claude Artifact — que bloqueia qualquer `fetch()`
externo. Por isso os dados vivem em arquivos `data/*.js` (`window.X = {...}`),
carregados como `<script>` normal, sem nenhuma chamada de rede em runtime.

## Estrutura

```
index.html          → casca da página (sidebar, seções) — script tags na ordem certa
styles.css           → visual (tokens de cor/tipografia, cards, tabs)
app.js               → lê os dados e monta as 4 seções (DOM puro, sem framework)
data/
  taxonomy.js         → lista de subtemas de Economia, outros temas, e ordem dos candidatos
  sources.js           → URL oficial de cada plano no TSE + caminho do PDF local
  candidates/*.js       → um arquivo por candidato: dados básicos + posições por tema
sources/             → cópia de cada PDF oficial (baixados do TSE, linkados pelo site)
scripts/
  build_artifact.py    → gera dist/ftm-eleicoes-artifact.html (versão self-contained p/ Artifact)
```

## Como atualizar um candidato

Edite o arquivo dele em `data/candidates/<id>.js`. Cada tema de Economia tem
`diagnosis` (o que o candidato diz sobre o cenário atual), `measures` (o que
propõe fazer) e `sourceRefs` (`[{page: N}]`, a página do PDF onde conferir).
Se o plano não aborda um subtema, deixe os arrays vazios — o site mostra
"Não abordado explicitamente no plano de governo" em vez de um card em
branco (evita parecer erro de coleta). Outros temas só têm `keyProposals` +
`sourceRefs`, sem a divisão diagnóstico/medida.

Para trocar/adicionar um candidato, crie `data/candidates/<id>.js` seguindo o
mesmo formato, adicione `<script src="data/candidates/<id>.js">` em
`index.html` (e na lista `SCRIPT_FILES` de `scripts/build_artifact.py`),
inclua `<id>` em `CANDIDATE_ORDER` (`data/taxonomy.js`), adicione a entrada
em `data/sources.js` e coloque o PDF oficial em `sources/<id>.pdf`.

## De onde vieram os dados

Os 5 PDFs foram baixados do **Portal de Dados Abertos do TSE**
(`dadosabertos.tse.jus.br/dataset/candidatos-2026`, recurso "BR — Proposta de
Governo", pacote `proposta_governo_2026_BR.zip`) e identificados cruzando o
`SQ_CANDIDATO` de cada um no arquivo de metadados
(`consulta_cand_2026_BR.csv`, recurso "Candidatos") com o nome do arquivo PDF
dentro do pacote (`2026BR<SQ_CANDIDATO>_01.pdf`). Fallback individual, quando
necessário: `divulgacandcontas.tse.jus.br/divulga/rest/arquivo/doc/<ID>`. Os
trechos de `diagnosis`/`measures`/`keyProposals` são parafraseados a partir
do texto do PDF — em caso de dúvida ou divergência, o PDF oficial (linkado em
cada card e na seção Fontes) prevalece.

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

Gera `dist/ftm-eleicoes-artifact.html`: HTML único, com CSS e todos os dados
inline, sem nenhum `<link>`/`<script src>` externo — pronto pra colar na
ferramenta de Artifact. Rode de novo sempre que mudar dado, estilo ou
`app.js`; nunca edite o arquivo gerado à mão.

## Publicar no GitHub Pages

```
cd ftm-eleicoes
git add .
git commit -m "Atualiza propostas"
git push
```

(Requer configurar o repositório remoto e o GitHub Pages primeiro — isso
ainda não foi feito neste projeto.)
