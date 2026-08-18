// ============================================================================
// FONTES — URL oficial de cada plano de governo no TSE + cópia local do PDF.
// Fonte única usada tanto pelo site quanto pelo build do Artifact
// (scripts/build_artifact.py) — nunca duplicar essas URLs em outro arquivo.
//
// officialPdfUrl aponta para o dataset oficial no Portal de Dados Abertos do
// TSE (candidatos a Presidente concorrem em nível nacional "BR", os 5 estão
// no mesmo pacote). localPdfPath é a cópia exata do PDF de cada candidato,
// extraída desse pacote e versionada em sources/ neste repositório, para
// link direto a partir do site. Ambas as URLs foram verificadas cruzando
// SQ_CANDIDATO do arquivo de metadados (consulta_cand_2026_BR.csv) com o
// nome do PDF dentro do pacote de propostas (proposta_governo_2026_BR.zip)
// — ver README.md.
// ============================================================================
window.SOURCES_DATA = {
  "lula": {
    candidateName: "Luiz Inácio Lula da Silva",
    planTitle: "Diretrizes para o Programa de Transformação do Brasil",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/lula.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 84
  },
  "flavio-bolsonaro": {
    candidateName: "Flávio Nantes Bolsonaro",
    planTitle: "Para o Brasil Vencer o Atraso",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/flavio-bolsonaro.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 76
  },
  "caiado": {
    candidateName: "Ronaldo Ramos Caiado",
    planTitle: "Plano de Governo 2027 a 2030 — Muito pra Mostrar, Nada pra Esconder",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/caiado.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 100
  },
  "renan-santos": {
    candidateName: "Renan Antonio Ferreira dos Santos",
    planTitle: "Livro Amarelo — Missão 2026 (resumo executivo)",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/renan-santos.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 51
  },
  "zema": {
    candidateName: "Romeu Zema Neto",
    planTitle: "Plano Implacável",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/zema.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 81
  }
};
