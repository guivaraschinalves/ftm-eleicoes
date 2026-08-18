// ============================================================================
// TAXONOMIA — temas e ordem de exibição
// Editar aqui para adicionar/renomear temas. Cada candidato (data/candidates/*.js)
// deve preencher uma entrada para cada id abaixo.
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

window.OTHER_THEMES = [
  { id: "educacao", label: "Educação" },
  { id: "saude", label: "Saúde" },
  { id: "seguranca", label: "Segurança Pública" },
  { id: "meio-ambiente", label: "Meio Ambiente" },
  { id: "tecnologia", label: "Tecnologia e Inovação" },
  { id: "politica-externa", label: "Política Externa" }
];

// Ordem de exibição dos candidatos: alfabética pelo nome de urna — não pela
// posição em pesquisas eleitorais — para não sugerir ranking ou endosso.
window.CANDIDATE_ORDER = ["caiado", "flavio-bolsonaro", "lula", "renan-santos", "zema"];
