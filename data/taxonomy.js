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

// Ordem de exibição dos candidatos: alfabética pelo nome de urna dentro de
// cada eleição, da mais recente para a mais antiga — não por posição em
// pesquisa nem por resultado, para não sugerir ranking ou endosso.
//
// O site cobre duas eleições: o 2º turno de 2026 e o de 2022. Cada
// candidatura é uma entrada própria, com os dados (idade, foto, partido,
// coligação) como estavam NAQUELA eleição — Lula em 2022 e Lula em 2026 são
// duas candidaturas distintas, com planos distintos. `basics.election` diz
// de qual eleição é cada uma.
//
// O visitante escolhe DOIS para comparar, no diálogo que abre ao carregar
// (ver "Seleção de candidatos" no README): dá para pôr lado a lado os dois
// de 2026, os dois de 2022, ou o mesmo candidato em eleições diferentes.
window.CANDIDATE_ORDER = [
  "flavio-bolsonaro",
  "lula",
  "jair-bolsonaro-2022",
  "lula-2022"
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
