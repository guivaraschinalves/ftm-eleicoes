// ============================================================================
// RONALDO CAIADO (PSD) — dados extraídos do "Plano de Governo 2027 a 2030",
// proposta de governo registrada no TSE (ver data/sources.json). O documento
// já traz, para cada um de seus 26 temas, seções de "Diagnóstico" e
// "Propostas" — a estrutura abaixo resume essas seções originais; sourceRefs
// indicam a página do PDF onde o trecho pode ser conferido.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["caiado"] = {
  basics: {
    name: "Ronaldo Ramos Caiado",
    ballotName: "Ronaldo Caiado",
    party: "PSD",
    number: 55,
    coalition: "Candidatura de partido isolado (PSD)",
    vp: "Gilberto Kassab (PSD)",
    initials: "RC"
  },
  positioningSummary: "Defende um 'Estado que planeja, dá segurança e mobiliza capital': ajuste fiscal plurianual sem aumento de impostos, elevar o investimento total de ~17% para ~25% do PIB via concessões e capital privado, e devolver ao Banco Central estabilidade macroeconômica para reduzir juros — plano organizado tema a tema, com diagnóstico e metas de acompanhamento explícitos.",
  economy: {
    fiscal: {
      diagnosis: [
        "Diz que o país 'enfrenta uma crise fiscal estrutural': despesas obrigatórias, benefícios tributários e subsídios cresceram e comprimiram o investimento público, elevando a dívida/PIB e mantendo os juros reais 'entre os mais altos do mundo'.",
        "Argumenta que a carga tributária já é elevada e que a resposta não pode ser 'criação contínua de receitas para acompanhar despesas que crescem automaticamente' — o ajuste deve vir do gasto, não de novos impostos."
      ],
      measures: [
        "Publicar um 'Orçamento da Verdade' com diagnóstico completo de despesas obrigatórias, passivos e riscos fiscais nos primeiros meses de governo, e adotar estratégia fiscal plurianual com metas anuais rumo a superávits primários.",
        "Fazer despesas obrigatórias crescerem abaixo do PIB, rever subsídios e benefícios tributários sem resultado comprovado, e aplicar efetivamente o teto constitucional contra supersalários."
      ],
      sourceRefs: [{ page: 12 }, { page: 13 }]
    },
    tributacao: {
      diagnosis: [
        "Trata a tributação como parte do diagnóstico fiscal geral: carga tributária elevada e sistema complexo, com benefícios tributários que precisam de 'prazo, objetivo, beneficiário, estimativa de custo, contrapartida e avaliação independente'."
      ],
      measures: [
        "Revisar subsídios, subvenções e benefícios tributários sem resultado — reduzindo ou encerrando os que forem incompatíveis com as prioridades nacionais — em vez de criar novos tributos.",
        "Não detalha uma reforma tributária própria; trata correção da carga tributária como consequência do ajuste fiscal e da revisão de exceções, não como capítulo autônomo."
      ],
      sourceRefs: [{ page: 12 }, { page: 13 }]
    },
    "cambio-comercio": {
      diagnosis: [
        "Diagnostica um 'déficit de inserção' internacional: grande economia pouco integrada ao comércio mundial, rede limitada de acordos comerciais, empresas pouco internacionalizadas e pauta exportadora de baixa complexidade tecnológica; nota que o Mercosul 'já não conta com uma visão comum entre seus membros'."
      ],
      measures: [
        "Consolidar o acordo Mercosul–União Europeia e ampliar a rede de acordos comerciais, priorizando Ásia, África e Indo-Pacífico.",
        "Buscar 'exportar melhor': elevar a complexidade tecnológica e o valor agregado da pauta exportadora, com metas de exportação e investimento atribuídas a embaixadas."
      ],
      sourceRefs: [{ page: 72 }, { page: 73 }]
    },
    "trabalho-renda": {
      diagnosis: [
        "Situa o mercado de trabalho dentro do diagnóstico de produtividade: entre 1981 e 2024 a produtividade por hora trabalhada cresceu apenas ~0,5% ao ano, e a desaceleração demográfica torna a produção por trabalhador 'o principal determinante da renda futura'."
      ],
      measures: [
        "Modernizar o mercado de trabalho com formação contínua, intermediação digital, apoio à transição profissional e inclusão de jovens e mulheres.",
        "Reduzir 'os custos que empurram pessoas e empresas à informalidade', sem detalhar no documento uma reforma específica da CLT."
      ],
      sourceRefs: [{ page: 14 }, { page: 15 }]
    },
    "inflacao-monetaria": {
      diagnosis: [
        "Atribui os juros reais elevados à incerteza fiscal: 'a incerteza sobre a sustentabilidade das contas públicas aumenta o custo de financiamento do governo, das empresas e das famílias'."
      ],
      measures: [
        "Coordenar as políticas fiscal e monetária 'com respeito à autonomia do Banco Central', reduzindo pressões fiscais sobre preços para que 'inflação controlada, juros menores e desenvolvimento coexistam de forma sustentável' — sem propor mudança no regime de metas."
      ],
      sourceRefs: [{ page: 13 }]
    },
    "estado-privatizacoes": {
      diagnosis: [
        "Registra que o setor privado 'já é o principal investidor em infraestrutura no Brasil', respondendo por mais de 70% dos aportes anuais via concessões, PPPs e mercado de capitais — e credita isso a marcos legais recentes como o do saneamento."
      ],
      measures: [
        "Ampliar concessões e PPPs com calendário permanente de leilões (dando continuidade ao Programa de Parcerias em Investimentos), usando outorgas para financiar nova infraestrutura.",
        "Fortalecer agências reguladoras com autonomia técnica e comando de estatais protegido de indicação política — sem listar estatais específicas a privatizar no documento."
      ],
      sourceRefs: [{ page: 46 }, { page: 48 }]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        "Aponta investimento total em infraestrutura (público + privado) em torno de 2% do PIB ao ano, quando o 'consenso técnico' indicaria necessidade de ~4% — resultado de descontinuidade entre ciclos de governo, não de falta de projetos ou capital."
      ],
      measures: [
        "Instituir Plano Nacional de Infraestrutura com horizonte de 30 anos e instância técnica independente para avaliar grandes projetos.",
        "Elevar a taxa de investimento total da economia de ~17% para ~25% do PIB, com bancos públicos atuando como estruturadores (não financiadores diretos) e redução do risco cambial para capital estrangeiro de longo prazo."
      ],
      sourceRefs: [{ page: 14 }, { page: 46 }]
    }
  },
  otherThemes: {
    educacao: {
      keyProposals: [
        "Pacto Nacional pela Alfabetização e Matemática na Idade Certa (até o fim do 2º ano).",
        "Recomposição nacional das aprendizagens com diagnóstico por estudante e prioridade a português, matemática e ciências.",
        "Elevar o padrão das licenciaturas e criar carreira docente mais atrativa, com bolsas para bons estudantes que escolham a docência."
      ],
      sourceRefs: [{ page: 32 }, { page: 33 }]
    },
    saude: {
      keyProposals: [
        "Reorganizar o SUS por regiões, com atenção primária resolutiva e acesso regulado por risco clínico.",
        "Criar redes nacionais por linha de cuidado (infarto, AVC, câncer, saúde da mulher, saúde mental, saúde indígena).",
        "Usar IA, prontuário eletrônico integrado e telessaúde para reduzir filas evitáveis e antecipar riscos."
      ],
      sourceRefs: [{ page: 75 }]
    },
    seguranca: {
      keyProposals: [
        "Criar o Ministério da Segurança Pública e o Sistema Integrado de Proteção à Soberania Nacional.",
        "Propor Lei do Terrorismo Doméstico enquadrando facções e milícias como organizações terroristas, com penas mínimas de 35–45 anos para lideranças e financiadores.",
        "Criar o Sistema Nacional de Inteligência Criminal, integrando bases de dados de União, estados, MP e Judiciário."
      ],
      sourceRefs: [{ page: 16 }, { page: 17 } , { page: 18 }]
    },
    "meio-ambiente": {
      keyProposals: [
        "Grande Pacto Nacional pelo Desenvolvimento Sustentável, unindo União, estados, municípios e setor produtivo.",
        "Licenciamento ambiental 'por risco, prazo e objetividade', com procedimentos simplificados para baixo risco.",
        "Operacionalizar mercado de carbono de alta integridade e ampliar Pagamento por Serviços Ambientais em escala."
      ],
      sourceRefs: [{ page: 50 }, { page: 51 }]
    },
    tecnologia: {
      keyProposals: [
        "Tratar conectividade e data centers como infraestrutura estratégica, aproveitando energia limpa e escala continental.",
        "Colocar a diplomacia a serviço do acesso a IA, computação avançada e biotecnologia (tema tratado dentro de Relações Exteriores).",
        "Dar estabilidade ao FNDCT e modernizar a Lei do Bem para conectar ciência, inovação e empresas."
      ],
      sourceRefs: [{ page: 15 }, { page: 46 }, { page: 73 }]
    },
    "politica-externa": {
      keyProposals: [
        "Tratar política externa como 'política de Estado', com estratégia de inserção internacional que atravesse ciclos eleitorais.",
        "Relações simultâneas com EUA, União Europeia, América Latina, África, Ásia e Oriente Médio, 'sem alinhamento automático'.",
        "Retomar, com pragmatismo, a aproximação com a OCDE e consolidar o acordo Mercosul–União Europeia."
      ],
      sourceRefs: [{ page: 72 }, { page: 73 }, { page: 74 }]
    }
  }
};
