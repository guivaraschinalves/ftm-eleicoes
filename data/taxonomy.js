// ============================================================================
// TAXONOMIA — temas e ordem de exibição
// Editar aqui para adicionar/renomear temas. Cada candidato (data/candidates/*.js)
// deve preencher uma entrada para cada id abaixo.
//
// window.THEMES é a lista dos 8 temas mostrados na seção "Temas". Dois deles
// têm `subthemes` (um segundo nível de abas antes do par
// Diagnóstico/Propostas): Economia, com os 7 subtemas de sempre, e Direitos,
// Assistência e Bem-Estar, separado entre Mulheres, Envelhecimento e as
// demais pautas.
//
// Onde cada tema guarda o conteúdo:
//   - tema COM `subthemes` → `c[tema.store][subthemeId]`
//     (Economia em `c.economy`, Direitos/Assistência/Bem-Estar em `c.direitosBemEstar`)
//   - tema sem subtema      → `c.themes[themeId]`
// Em todos os casos o formato é o mesmo: { diagnosis: [], proposals: [] }.
// Ver buildTemasSection/buildSubthemeCard em app.js.
// ============================================================================

window.ECONOMY_SUBTHEMES = [
  { id: "fiscal", label: "Fiscal e Contas Públicas" },
  { id: "tributacao", label: "Tributação" },
  { id: "cambio-comercio", label: "Câmbio e Comércio Exterior" },
  { id: "trabalho-renda", label: "Mercado de Trabalho e Renda" },
  { id: "inflacao-monetaria", label: "Inflação e Política Monetária" },
  { id: "estado-privatizacoes", label: "Papel do Estado e Privatizações" },
  { id: "infraestrutura-investimento", label: "Infraestrutura e Investimento" }
];

window.DIREITOS_SUBTEMAS = [
  { id: "mulheres", label: "Mulheres" },
  { id: "envelhecimento", label: "Envelhecimento" },
  { id: "outros", label: "Outros direitos e bem-estar" }
];

window.THEMES = [
  { id: "economia", label: "Economia", store: "economy", subthemes: window.ECONOMY_SUBTHEMES },
  { id: "educacao", label: "Educação" },
  { id: "seguranca", label: "Segurança Pública" },
  { id: "saude", label: "Saúde" },
  { id: "politica-externa", label: "Política Externa" },
  { id: "corrupcao", label: "Combate à Corrupção" },
  { id: "direitos-bem-estar", label: "Direitos, Assistência e Bem-Estar", store: "direitosBemEstar", subthemes: window.DIREITOS_SUBTEMAS },
  { id: "tecnologia", label: "Tecnologia" }
];

// Ordem de exibição dos candidatos: alfabética pelo nome de urna — não pela
// posição em pesquisas eleitorais — para não sugerir ranking ou endosso.
// Esta versão do site cobre só os dois candidatos que foram ao segundo
// turno; todos aparecem sempre, em todas as seções, sem filtro.
window.CANDIDATE_ORDER = [
  "flavio-bolsonaro",
  "lula"
];

// Governos comentados na seção "Balanço dos Governos". Não é um juízo nosso
// sobre nenhum deles: é só o recorte de QUAL governo o trecho citado comenta.
// Cada candidato tem uma lista de citações literais por governo em
// `governments.<id>` (data/candidates/*.js) — inclusive sobre o próprio
// campo, que é justamente o que torna a comparação interessante.
window.GOVERNMENTS = [
  { id: "jair-bolsonaro", label: "Governo Jair Bolsonaro", period: "2019–2022" },
  { id: "pt", label: "Governos do PT", period: "2003–2016 e 2023–2026" }
];
