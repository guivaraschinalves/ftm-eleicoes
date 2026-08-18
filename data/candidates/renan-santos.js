// ============================================================================
// RENAN SANTOS (MISSÃO) — dados extraídos do "Livro Amarelo — Missão 2026"
// (resumo executivo), proposta de governo registrada no TSE (ver
// data/sources.json). Cada capítulo do documento já traz "O Problema" e
// "Propostas e Soluções da Missão" — a estrutura abaixo resume essas seções
// originais; sourceRefs indicam a página do PDF onde o trecho pode ser
// conferido. É o plano mais extenso em diagnóstico numérico e o único dos 5
// sem um capítulo dedicado a Meio Ambiente.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["renan-santos"] = {
  basics: {
    name: "Renan Antonio Ferreira dos Santos",
    ballotName: "Renan Santos",
    party: "Missão",
    number: 14,
    coalition: "Candidatura de partido isolado (Missão)",
    vp: "Coronel Medina (Missão)",
    initials: "RS"
  },
  positioningSummary: "Plano de ruptura institucional: PEC de Transição para desindexar despesas obrigatórias, 'Grande Consolidação Municipal' (fundir até 70% dos municípios), Lei de Responsabilidade Gerencial para tutelar prefeituras mal geridas, e Zonas Econômicas Especiais para atrair indústria — com forte ênfase em geopolítica (desdolarização regional liderada pelo real) e combate ao crime organizado via 'Direito Penal do Inimigo'.",
  economy: {
    fiscal: {
      diagnosis: [
        "Aponta déficit nominal do setor público de R$ 1,062 tri, dívida bruta em 80,4% do PIB (projetada a 100% até 2030 sem reformas) e despesas obrigatórias crescendo acima do limite de 2,5% real do arcabouço fiscal — estimando ajuste necessário de R$ 250 bi/ano (citando Mansueto de Almeida)."
      ],
      measures: [
        "Aprovar, antes mesmo da posse, uma PEC de Transição baseada na 'PEC do Equilíbrio Fiscal' (Kim Kataguiri): desindexar benefícios previdenciários/assistenciais do salário mínimo (corrigir só pela inflação), desvincular pisos de saúde/educação da receita e reduzir renúncias fiscais — economia projetada de R$ 1,1 tri até 2031.",
        "Incorporar propostas do caderno do CDPP: racionalização do superávit financeiro, fim de supersalários no funcionalismo e nova lei complementar de finanças públicas."
      ],
      sourceRefs: [{ page: 9 }, { page: 10 }]
    },
    tributacao: {
      diagnosis: [
        "Cita 'complexidade tributária que desestimula o investimento produtivo' como um dos gargalos estruturais de produtividade, ao lado de litigiosidade trabalhista e insegurança jurídica."
      ],
      measures: [
        "Criar regimes tributários especiais dentro das Zonas Econômicas Especiais (suspensão de direitos aduaneiros e regime específico de IBS/CBS, sob a LC 214/2025) para atrair indústria de alto valor.",
        "Não propõe uma reforma tributária federal ampla e própria no documento — o tratamento de tributos aparece principalmente como incentivo setorial/regional (ZEEs, IA), não como capítulo de tributação geral."
      ],
      sourceRefs: [{ page: 21 }, { page: 34 }]
    },
    "cambio-comercio": {
      diagnosis: [
        "Diagnostica 'déficits críticos em soberania monetária': dependência do dólar americano sem uma moeda regional que o Brasil pudesse liderar, e dependência de importações estratégicas de duplo uso (~R$ 70 bi/ano segundo a CNI)."
      ],
      measures: [
        "Propor 'desdolarização da América do Sul': cesta de moedas sul-americana liderada pelo real, linhas de swap entre bancos centrais e cooperação monetária regional, posicionando o real como reserva de valor regional.",
        "Criar Zonas Econômicas Especiais de exportação (polos em Suape, Pecém/Araripe, Aratu-Camaçari) com um-stop-shops e licenciamento em até 15 dias, inspiradas em Shannon (Irlanda) e Shenzhen (China)."
      ],
      sourceRefs: [{ page: 45 }, { page: 46 }, { page: 35 }]
    },
    "trabalho-renda": {
      diagnosis: [
        "Aponta produtividade estagnada desde os anos 1990, R$ 4 tri em subsídios a grupos privilegiados nos últimos 15 anos, e gastos com Bolsa Família + BPC multiplicados por 8 no mesmo período (~R$ 285 bi em 2025)."
      ],
      measures: [
        "Substituir o Bolsa Família por 'Frentes Cidadãs': frentes de trabalho em que beneficiários participam de projetos de interesse público, buscando inserção no mercado formal em vez de transferência direta permanente.",
        "Pacote de reformas microeconômicas (justiça tributária, legislação trabalhista, regulação financeira) inspirado no caderno do CDPP, sem detalhar mudanças específicas na CLT no resumo."
      ],
      sourceRefs: [{ page: 20 }, { page: 21 } , { page: 22 }]
    },
    "inflacao-monetaria": {
      diagnosis: [
        "Trata majoritariamente a dimensão monetária pelo ângulo geopolítico (dependência do dólar), não pela política de juros doméstica — não apresenta diagnóstico específico sobre a Selic ou a meta de inflação do Banco Central."
      ],
      measures: [
        "Concentra as propostas monetárias na criação de uma cesta de moedas sul-americana e cooperação entre bancos centrais da região (ver Câmbio e Comércio Exterior) — não detalha medidas para a política monetária interna além da menção ao Comissariado Federal de Gestão Pública 'inspirado na independência do Banco Central' como modelo institucional."
      ],
      sourceRefs: [{ page: 18 }, { page: 46 }]
    },
    "estado-privatizacoes": {
      diagnosis: [
        "Diagnostica o 'patrimonialismo' como característica estrutural do Estado brasileiro: prefeitos e administradores tratando o público como extensão do privado, sustentados por fundo partidário/eleitoral e emendas parlamentares."
      ],
      measures: [
        "Criar a Lei de Responsabilidade Gerencial e o Comissariado Federal de Gestão Pública (autarquia técnica com mandatos fixos) para fiscalizar municípios em tempo real, com 'Tutela Gerencial' e possível dissolução de administrações capturadas pelo crime.",
        "Não propõe privatização de estatais federais no resumo — o foco da reforma do Estado está na gestão municipal e na meritocracia administrativa, não na venda de ativos federais."
      ],
      sourceRefs: [{ page: 17 }, { page: 18 } ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        "Aponta investimento em infraestrutura caindo de ~4% do PIB (anos 1980) para ~2% hoje, mais de 11 mil obras paralisadas (de 21 mil) e apenas 30 mil km de ferrovias (ante 250 mil nos EUA e 160 mil na China)."
      ],
      measures: [
        "Lançar o programa 'Missão Rondon' de recuperação e modernização da infraestrutura, priorizando corredores de escoamento do agronegócio e obras paralisadas.",
        "Usar Zonas Econômicas Especiais (incluindo a ZEE de Terras Raras, verticalizando 8 estágios da cadeia) e parcerias com EUA, UE e Japão para atrair capital e tecnologia a minerais críticos."
      ],
      sourceRefs: [{ page: 23 }, { page: 36 }, { page: 38 }]
    }
  },
  otherThemes: {
    educacao: {
      keyProposals: [
        "No Pisa 2022, 73% dos alunos brasileiros não atingem o nível básico em matemática — diagnóstico central do capítulo.",
        "Adotar o modelo do Ceará e o sistema fônico universal de alfabetização.",
        "Tratar a violência escolar como problema central, ao lado da qualidade do aprendizado."
      ],
      sourceRefs: [{ page: 30 }, { page: 31 }]
    },
    saude: {
      keyProposals: [
        "Criar a ENER (Escala Nacional de Estratificação de Risco): fila do SUS por gravidade clínica, não por ordem cronológica.",
        "Criar o PRONTO (Prontuário Eletrônico Nacional Interoperável), conectando atenção primária, hospitais, laboratórios e farmácias.",
        "Sistema digital de saúde inspirado no DoctorSV (El Salvador), com telemedicina e IA diagnóstica; integrar o Genomas Brasil ao prontuário do SUS."
      ],
      sourceRefs: [{ page: 25 }, { page: 26 }]
    },
    seguranca: {
      keyProposals: [
        "Adotar o 'Direito Penal do Inimigo' via Lei Antifacção: banimento judicial de organizações criminosas, inversão do ônus da prova no confisco de bens, tribunais especializados.",
        "Declarar Estado de Defesa em áreas dominadas por facções, com uso das Forças Armadas via GLO.",
        "Construir superpresídios de segurança máxima no modelo do CECOT salvadorenho."
      ],
      sourceRefs: [{ page: 11 }, { page: 12 }, { page: 13 }]
    },
    "meio-ambiente": {
      keyProposals: [],
      sourceRefs: []
    },
    tecnologia: {
      keyProposals: [
        "Lançar o Marco Brasileiro da Inteligência Artificial (MBIA): 14 medidas para reduzir tributos sobre empresas de tecnologia, reter/formar/repatriar talentos e atrair data centers.",
        "Criar o Projeto Abaporu, laboratório nacional de IA com capital privado majoritário, e as Zonas Econômicas de Alta Inteligência (ZEAIs).",
        "Diagnostica que a OpenAI escolheu a Argentina (não o Brasil) para sediar seu maior campus de datacenters latino-americano, como sintoma do atraso regulatório."
      ],
      sourceRefs: [{ page: 41 }, { page: 42 } , { page: 43 }]
    },
    "politica-externa": {
      keyProposals: [
        "Posicionar o Brasil como 'árbitro do Sul Global', com diplomacia ativa em África, Ásia (via Timor-Leste) e América Latina.",
        "Propor 'sub-hegemonia brasileira' na América do Sul e estratégia pragmática dentro do BRICS+ (sem subordinação à China).",
        "Buscar autonomia nuclear completa (incluindo reprocessamento) como ativo estratégico de dissuasão."
      ],
      sourceRefs: [{ page: 44 }, { page: 45 }, { page: 46 }]
    }
  }
};
