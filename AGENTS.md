# Diretrizes de Operação (FtM Eleições)

## Auto Mode (Padrão - Estilo Claude Code)
- Execução 100% autônoma de ponta a ponta: ler, criar, editar arquivos, rodar comandos e testes sem parar para pedir aprovação intermediária.
- Ao receber qualquer instrução, resolver o problema completamente e entregar o resultado validado.
- Exceção: nunca dar `git push` (ou criar/configurar o repositório remoto) sem confirmação explícita — é publicação para fora do disco local.

## Plan Mode
- Ativado quando o usuário solicitar explicitamente planejamento ou usar `/plan`.
- Nessas ocasiões, estruturar o plano detalhado antes de iniciar grandes alterações.

## Ao editar dados de candidatos
- Manter neutralidade: mesmo tratamento visual para os dois candidatos (nenhuma cor de partido em lugar nenhum — o acento ciano da identidade do FtM é o mesmo nos dois cards), e ordem alfabética por nome de urna, nunca por pesquisa nem por resultado de primeiro turno.
- `economy.<subtema>.diagnosis`/`.proposals.*.quotes` e `themes.<tema>.diagnosis`/`.proposals.*.quotes` em `data/candidates/*.js` são **citação literal** do PDF — nunca parafrasear. Só o `title` de cada proposta é redigido por nós. Todo `quote` precisa de `page`.
- `planStructure` em `data/sources.js` (título, páginas e divisão do plano, mostrados na ficha de Visão Geral) é ficha do documento, não citação: os nomes das partes vêm do sumário/corpo do PDF, com as páginas conferidas. Trocou o PDF, confere de novo.
- `basics.birthDate` é a única informação de `basics` que não vem do plano de governo (vem de fonte pública externa) — mudar exige checar a fonte de novo, não estimar.
- Um candidato sem Proposta de Governo registrada no TSE leva `planFiled: false` em `data/sources.js`, com `officialPdfUrl`/`localPdfPath`/`pageCount` como `null` **literal** — nunca string vazia, nunca chave omitida (os validadores de `scripts/build_artifact.py` dependem disso, e `app.js` usa `=== false`, não uma checagem de truthiness).
- Ao adicionar/remover um candidato, manter sincronizadas as 4 listas que hoje ainda são hardcoded fora de `CANDIDATE_ORDER`: `SCRIPT_FILES` (`scripts/build_artifact.py`), `DATA_FILES` (`scripts/export_content_md.py`), os `<script src>` de `index.html` e `window.SOURCES_DATA` (`data/sources.js`). `scripts/export_plans_md.py` e `scripts/build_plan_texts.py` não têm lista própria — leem `CANDIDATE_ORDER` direto.
- Depois de editar qualquer `data/*.js`, rodar `python3 scripts/build_artifact.py` antes de publicar o Artifact — os dois nunca devem divergir.
- `data/plan-texts.js` é o único arquivo de dados com texto BRUTO/mecânico (alimenta só a Contagem de Palavras) — nunca editar à mão. É gerado por `scripts/build_plan_texts.py` a partir de `.sources-cache/texts/*.txt`, que por sua vez vem de `scripts/extract_plan_texts.py` (PyMuPDF) sobre `sources/*.pdf`. Depois de adicionar ou trocar um PDF em `sources/*.pdf`, rodar os dois scripts (extract → build) antes de publicar, senão `data/plan-texts.js` diverge do PDF real.
- `governments.<governo>` em `data/candidates/*.js` (seção "Balanço dos Governos") segue as mesmas regras de citação literal, com duas a mais: nada que já esteja citado em `economy`/`themes` se repete lá, e o recorte é por QUEM o trecho comenta, não por quem escreveu. Depois de mexer nesse bloco, rodar `python3 scripts/check_governments.py` (confere literalidade, página e duplicação; sai com código 1 se achar problema).
- Depois de mexer em QUALQUER citação, rodar `python3 scripts/check_quotes.py` — confere as 242 citações contra o texto dos PDFs e acusa transcrição que não bate com a página indicada.
- Tema com subtema guarda o conteúdo em `c[tema.store][subtema]` (Economia → `c.economy`, Direitos e Bem-Estar → `c.direitosBemEstar`); tema sem subtema, em `c.themes[tema]`. Quem decide é o `store`/`subthemes` do tema em `data/taxonomy.js` — `app.js` e `scripts/export_content_md.py` já leem isso de forma genérica, não hardcode.
- Depois de escrever/atualizar as citações de um candidato, rodar `python3 scripts/audit_coverage.py <id>` (ver "## Auditoria de cobertura" no README) e revisar as páginas sinaladas antes de publicar — a leitura manual tema por tema não garante sozinha que nada relevante ficou de fora, principalmente em planos longos (100+ páginas). A ferramenta só filtra candidatas a lacuna; a decisão de citar ou não continua sendo humana/editorial, nunca automática.

## Identidade visual (Follow the Money)
- A paleta e a tipografia vêm dos outros sites de dados do FtM (`ftm-dados`, `ftm-analises`): escuro por padrão (`#0b0b0b` / `#151515`), texto gelo, **um único acento** ciano `#4BACC6`, fonte Calibri/Carlito. O tema claro é a variação, não o padrão.
- O tema é sempre explícito no atributo `data-theme` do `<html>`, pintado antes do CSS pelo script inline no topo do `index.html` (evita o flash de branco). Não existe modo "seguir o sistema"; sem escolha salva em `localStorage` (`ftm_eleicoes_tema`), abre escuro.
- O logotipo é o wordmark do FtM em SVG inline no `index.html`, em `currentColor` — herda `var(--logo)` e acompanha o tema. O arquivo de origem é `lps-ftm/public/lp/ftm/logo-ftm-branco.svg`; se o logo mudar lá, trocar aqui também.
- `index.html` referencia `styles.css?v=N` e `app.js?v=N` — **subir o N a cada mudança nesses dois arquivos**, senão o GitHub Pages serve a versão antiga do cache.
