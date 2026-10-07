// ============================================================================
// TAXONOMIA — temas e ordem de exibição
// Editar aqui para adicionar/renomear temas. Cada candidato (data/candidates/*.js)
// deve preencher uma entrada para cada id abaixo.
//
// window.THEMES é a lista dos 7 temas mostrados na seção "Temas". Economia é o
// único com `subthemes` (mantém os 7 subtemas herdados do ftm-eleicoes, cada
// um com Diagnóstico/Propostas); os outros 6 são "chatos" (flat): uma aba de
// Diagnóstico e uma de Propostas direto, sem nível de subtema. Candidatos leem
// esses dados de `c.economy.<subthemeId>` (Economia) ou `c.themes.<themeId>`
// (os outros 6) — ver app.js (buildTemasSection).
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

window.THEMES = [
  { id: "economia", label: "Economia", subthemes: window.ECONOMY_SUBTHEMES },
  { id: "educacao", label: "Educação" },
  { id: "seguranca", label: "Segurança Pública" },
  { id: "saude", label: "Saúde" },
  { id: "politica-externa", label: "Política Externa" },
  { id: "corrupcao", label: "Combate à Corrupção" },
  { id: "direitos-bem-estar", label: "Direitos e Bem-Estar" }
];

// Ordem de exibição dos candidatos: alfabética pelo nome de urna — não pela
// posição em pesquisas eleitorais — para não sugerir ranking ou endosso.
// Esta versão do site cobre só os dois candidatos que foram ao segundo
// turno; todos aparecem sempre, em todas as seções, sem filtro.
window.CANDIDATE_ORDER = [
  "flavio-bolsonaro",
  "lula"
];
