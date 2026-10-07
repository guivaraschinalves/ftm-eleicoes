// ============================================================================
// FONTES — URL oficial de cada plano de governo no TSE + cópia local do PDF.
// Fonte única usada tanto pelo site quanto pelo build do Artifact
// (scripts/build_artifact.py) — nunca duplicar essas URLs em outro arquivo.
//
// officialPdfUrl aponta para o dataset oficial no Portal de Dados Abertos do
// TSE (candidatos a Presidente concorrem em nível nacional "BR", todos os
// registrados estão no mesmo pacote). localPdfPath é a cópia exata do PDF de cada candidato,
// extraída desse pacote e versionada em sources/ neste repositório, para
// link direto a partir do site. Ambas as URLs foram verificadas cruzando
// SQ_CANDIDATO do arquivo de metadados (consulta_cand_2026_BR.csv) com o
// nome do PDF dentro do pacote de propostas (proposta_governo_2026_BR.zip)
// — ver README.md.
//
// `planFiled` (opcional, default true quando ausente): quando um candidato
// registra a candidatura sem entregar Proposta de Governo ao TSE, essa
// entrada leva `planFiled: false` e `officialPdfUrl`/`localPdfPath`/
// `pageCount` como `null` literal (não string vazia, não chave omitida — os
// validadores de scripts/build_artifact.py dependem disso). Nenhum dos 13
// dois está nesse caso; o campo existe para o dia em que algum estiver.
// ============================================================================
window.SOURCES_DATA = {
  "lula": {
    candidateName: "Luiz Inácio Lula da Silva",
    planTitle: "Diretrizes para o Programa de Transformação do Brasil",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/lula.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 84,
    // Como o plano está dividido, lido do sumário (p.3) e conferido nos
    // títulos de capítulo do corpo. Os nomes seguem a grafia do próprio
    // plano no corpo do texto (o sumário repete tudo em caixa alta), mesma
    // convenção já usada em `planTitle`.
    planStructure: {
      summary: "13 capítulos numerados, depois da abertura \"Compromisso com o Projeto de Nação\"",
      parts: [
        { label: "Compromisso com o Projeto de Nação", page: 6 },
        { label: "1. Fortalecer a Democracia, a Participação Social e Modernizar o Estado", page: 15 },
        { label: "2. Combater as Desigualdades", page: 18 },
        { label: "3. Proteger a vida com uma segurança pública mais eficiente e integrada", page: 26 },
        { label: "4. Garantir o Direito à Educação para Transformar Vidas e o País", page: 30 },
        { label: "5. Fortalecer a saúde com equidade, inovação e soberania", page: 34 },
        { label: "6. Ampliar o acesso à cultura e ao esporte como Vetores de Transformação Social", page: 40 },
        { label: "7. Fortalecer o direito à cidade", page: 44 },
        { label: "8. Promover uma Economia Mais Sustentável, Produtiva e Digital, Para Todas e Todos", page: 47 },
        { label: "9. Segurança Alimentar e Produção Agrícola", page: 58 },
        { label: "10. Ampliar a Segurança Energética e Liderar a Transição para uma Economia de Baixo Carbono", page: 63 },
        { label: "11. Promover a Sustentabilidade Ambiental e Climática", page: 69 },
        { label: "12. Valorizar o Trabalho em suas Múltiplas Formas", page: 73 },
        { label: "13. Defender a Soberania Nacional e o Protagonismo Internacional do Brasil", page: 77 }
      ]
    }
  },
  "flavio-bolsonaro": {
    candidateName: "Flávio Nantes Bolsonaro",
    planTitle: "Para o Brasil Vencer o Atraso",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026/resource/433ac1f4-07dc-44a2-bcbe-c87a2073721a",
    localPdfPath: "sources/flavio-bolsonaro.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2026, BR, Presidente)",
    retrievedAt: "2026-08-18",
    pageCount: 76,
    // Como o plano está dividido: os nove blocos "Brasil ..." que o próprio
    // plano apresenta em "Como este Plano está organizado" (p.11-12), com a
    // página de abertura de cada um segundo o sumário (p.3-4).
    planStructure: {
      summary: "9 blocos temáticos, depois da apresentação e dos índices",
      parts: [
        { label: "Brasil sem Medo", page: 13 },
        { label: "Brasil por Elas", page: 17 },
        { label: "Brasil sem Fila", page: 23 },
        { label: "Brasil Mais Barato", page: 29 },
        { label: "Brasil que Prepara", page: 34 },
        { label: "Brasil que Prospera", page: 42 },
        { label: "Brasil que Cresce", page: 49 },
        { label: "Brasil que Cumpre a Constituição", page: 65 },
        { label: "Brasil que Não Volta Atrás", page: 68 }
      ]
    }
  },
  "jair-bolsonaro-2022": {
    candidateName: "Jair Messias Bolsonaro",
    planTitle: "Pelo Bem do Brasil — Plano de Governo 2023-2026",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2022",
    localPdfPath: "sources/jair-bolsonaro-2022.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2022, BR, Presidente)",
    retrievedAt: "2026-10-07",
    pageCount: 48,
    // Eixos do sumário (p.2), com a página de abertura de cada um.
    planStructure: {
      summary: "6 eixos temáticos, depois da introdução e dos princípios",
      parts: [
        { label: "Economia, Tecnologia e Inovação", page: 14 },
        { label: "Saúde, Educação e Social", page: 21 },
        { label: "Segurança e Defesa", page: 31 },
        { label: "Infraestrutura Logística", page: 34 },
        { label: "Sustentabilidade Ambiental", page: 37 },
        { label: "Governança e Geopolítica", page: 42 }
      ]
    }
  },
  "lula-2022": {
    candidateName: "Luiz Inácio Lula da Silva",
    planTitle: "Diretrizes para o Programa de Reconstrução e Transformação do Brasil",
    officialPdfUrl: "https://dadosabertos.tse.jus.br/dataset/candidatos-2022",
    localPdfPath: "sources/lula-2022.pdf",
    sourceLabel: "Proposta de Governo registrada no TSE — Portal de Dados Abertos (Candidatos 2022, BR, Presidente)",
    retrievedAt: "2026-10-07",
    pageCount: 21,
    // O documento é uma lista corrida de 121 diretrizes numeradas, agrupadas
    // em três blocos com título, mais a abertura.
    planStructure: {
      summary: "121 diretrizes numeradas, em 3 blocos",
      parts: [
        { label: "Vamos juntos pelo Brasil — compromissos para a reconstrução e transformação do país", page: 2 },
        { label: "Desenvolvimento social e garantia de direitos", page: 4 },
        { label: "Desenvolvimento econômico e sustentabilidade socioambiental e climática", page: 10 },
        { label: "Defesa da democracia e reconstrução do Estado e da soberania", page: 17 }
      ]
    }
  }
};
