// ============================================================================
// ROMEU ZEMA (NOVO) — dados extraídos do "Plano Implacável", proposta de
// governo registrada no TSE (ver data/sources.json). O documento organiza
// cada tema em diagnóstico numérico + "eixos" de propostas — a estrutura
// abaixo resume essas seções originais; sourceRefs indicam a página do PDF
// onde o trecho pode ser conferido.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["zema"] = {
  basics: {
    name: "Romeu Zema Neto",
    ballotName: "Zema",
    party: "NOVO",
    number: 30,
    coalition: "Candidatura de partido isolado (Novo)",
    vp: "Eduardo Girão (Novo)",
    initials: "RZ"
  },
  positioningSummary: "Programa liberal explícito: propõe privatizar todas as estatais federais, cortar a máquina pública, reduzir impostos e juros por meio de choque fiscal, e abrir a economia ao comércio e investimento estrangeiro — réplica declarada da experiência do candidato como governador de Minas Gerais.",
  economy: {
    fiscal: {
      diagnosis: [
        "Aponta carga tributária recorde (~32,4% do PIB), déficit público, dívida acima de R$ 10 trilhões (~80% do PIB, ante 71% em 2023) e Selic próxima de 15%, consumindo cerca de R$ 1 trilhão/ano só em juros."
      ],
      measures: [
        "Reformar a Previdência de forma definitiva (incluindo estados, municípios, previdência rural e militar), com reajuste automático da idade mínima pela expectativa de vida.",
        "Fazer reforma administrativa reduzindo ministérios e cargos comissionados, e fixar metas progressivas de redução da carga tributária que 'forcem o corte efetivo de gastos' — invertendo a lógica de que o gasto define o imposto."
      ],
      sourceRefs: [{ page: 14 }, { page: 15 }, { page: 16 }]
    },
    tributacao: {
      diagnosis: [
        "Cita o 'Custo Brasil' (R$ 1,7 trilhão/ano) como resultado combinado de juros altos, 'impostos incompreensíveis', infraestrutura ruim e economia fechada."
      ],
      measures: [
        "Reduzir gradualmente o Imposto de Renda das empresas ao nível dos países desenvolvidos, e reformar o IRPJ para que a Receita calcule o imposto automaticamente a partir da nota fiscal eletrônica, eliminando obrigações acessórias.",
        "Garantir que a regulamentação da reforma tributária não replique a complexidade atual via regimes especiais e exceções, com compromisso verificável de neutralidade da carga tributária."
      ],
      sourceRefs: [{ page: 17 }, { page: 19 }]
    },
    "cambio-comercio": {
      diagnosis: [
        "Situa o Brasil na 22ª posição mundial em exportações apesar de ser a 9ª maior economia, com a 5ª menor proporção importações/PIB entre 203 países (15,7%) — descreve o país como 'uma das economias mais fechadas do planeta' e fora da OCDE."
      ],
      measures: [
        "Sair do BRICS (de forma diplomática, preservando relações comerciais) e retomar o processo de adesão à OCDE.",
        "Transformar o Mercosul de união aduaneira em zona de livre comércio para permitir acordos bilaterais diretos, e alinhar gradualmente as tarifas de importação à média de países em desenvolvimento."
      ],
      sourceRefs: [{ page: 36 }, { page: 37 }, { page: 38 }, { page: 21 }]
    },
    "trabalho-renda": {
      diagnosis: [
        "Registra 38,5 milhões de trabalhadores informais (37,5% da população ocupada) e 1,7 milhão em plataformas digitais, com 83% dos brasileiros priorizando flexibilidade de horário — diagnostica que 'as regras trabalhistas continuam no século passado'."
      ],
      measures: [
        "Criar regime alternativo à CLT, com prevalência do negociado sobre o legislado (remuneração variável, jornada até 44h semanais flexível, férias fracionadas por acordo).",
        "Zerar encargos sobre um salário mínimo na contratação formal de quem está há mais de um ano na informalidade, e encerrar o monopólio sindical (fim da contribuição obrigatória) e reservas de mercado corporativistas."
      ],
      sourceRefs: [{ page: 23 }, { page: 24 }, { page: 25 }]
    },
    "inflacao-monetaria": {
      diagnosis: [
        "Atribui a Selic próxima de 15% e 'um dos juros mais altos do mundo' à trajetória da dívida pública e à incerteza fiscal, não a um problema isolado de política monetária."
      ],
      measures: [
        "Buscar queda da curva de juros via choque fiscal (estabilizar dívida/PIB, superávits primários) e redução do IOF sobre operações financeiras.",
        "Ampliar concorrência bancária reduzindo crédito direcionado (inclusive linhas subsidiadas do BNDES) e criar o programa 'Sócios do Brasil' — R$ 1.000 investidos em fundo de ações para cada criança nascida, sacável aos 18 anos."
      ],
      sourceRefs: [{ page: 14 }, { page: 18 }]
    },
    "estado-privatizacoes": {
      diagnosis: [
        "Não desenvolve um diagnóstico numérico específico além do capítulo fiscal; a posição é declarada diretamente como proposta (ver medidas)."
      ],
      measures: [
        "'Privatizar todas as empresas estatais' para que o governo federal se concentre em segurança pública e educação — é o candidato entre os 5 que assume essa posição de forma mais explícita e ampla no documento.",
        "Ampliar parcerias público-privadas em todos os serviços públicos, inclusive saúde e educação, e vender imóveis e ativos públicos sem uso, com metas anuais de arrecadação."
      ],
      sourceRefs: [{ page: 15 }]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        "Aponta investimento total em infraestrutura de 2,22% do PIB (metade da média de países de renda média) e custo logístico de 15,5% do PIB — 'o pior patamar entre as 20 maiores economias do mundo'; mais de 90 milhões sem coleta de esgoto."
      ],
      measures: [
        "Conceder à iniciativa privada os ativos economicamente viáveis e usar PPPs onde o mercado não chega sozinho; revisar marcos regulatórios de transporte e energia para atrair investimento privado.",
        "Atrair investimento internacional em data centers e novas tecnologias, aproveitando energia renovável abundante (88% da matriz) e evitando 'regulação precoce e ampla' da inteligência artificial."
      ],
      sourceRefs: [{ page: 19 }, { page: 20 }, { page: 21 }, { page: 26 }]
    }
  },
  otherThemes: {
    educacao: {
      keyProposals: [
        "Apenas 13,3% dos alunos concluem o fundamental com proficiência adequada em português e matemática (4,5% no médio) — diagnóstico usado para justificar o pacote de propostas.",
        "Ampliar creches e pré-escolas priorizando parcerias com o setor privado, e transformar o Pacto Nacional pela Recomposição das Aprendizagens em estratégia permanente.",
        "Modernizar a BNCC com foco em alfabetização, raciocínio lógico e competências digitais."
      ],
      sourceRefs: [{ page: 50 }, { page: 51 }]
    },
    saude: {
      keyProposals: [
        "Criar registro nacional de saúde unificado (prontuário eletrônico interoperável entre público e privado), sob controle do cidadão.",
        "Expandir telemedicina para reduzir filas e vazios assistenciais em regiões remotas.",
        "Usar capacidade ociosa do setor privado para desafogar o SUS e reduzir a burocracia/judicialização que encarece a saúde suplementar."
      ],
      sourceRefs: [{ page: 57 }, { page: 58 }]
    },
    seguranca: {
      keyProposals: [
        "Classificar facções como organizações terroristas, permitindo uso das Forças Armadas e órgãos de controle no combate ao crime organizado.",
        "Construir presídios de segurança máxima para isolar lideranças faccionadas.",
        "Cooperação internacional (com EUA e países sul-americanos) contra PCC, CV e demais facções."
      ],
      sourceRefs: [{ page: 5 }, { page: 6 }, { page: 38 }]
    },
    "meio-ambiente": {
      keyProposals: [
        "Licenciamento ambiental com critérios técnicos e prazos previsíveis, sem 'penalizar quem produz e investe dentro da lei'.",
        "Explorar o mercado de créditos de carbono (Brasil poderia suprir até 20% da demanda mundial) e a bioeconomia (fitoterápicos, açaí, castanhas).",
        "Combater grilagem e desmatamento ilegal com monitoramento por satélite e integração entre forças de segurança e órgãos ambientais."
      ],
      sourceRefs: [{ page: 47 }, { page: 48 }]
    },
    tecnologia: {
      keyProposals: [
        "Atrair investimento em data centers e infraestrutura de IA aproveitando energia limpa abundante — sem 'regulação precoce e ampla' do setor.",
        "Modernizar marco regulatório de biotecnologia agrícola (edição gênica de sementes, aprovação de bioinsumos).",
        "Aprimorar o mercado de capitais (venture capital, vesting, equity) para financiar setores estratégicos."
      ],
      sourceRefs: [{ page: 21 }, { page: 22 }]
    },
    "politica-externa": {
      keyProposals: [
        "Sair do BRICS 'de forma diplomática' e retomar o processo de adesão à OCDE.",
        "Recuperar protagonismo regional na América do Sul, restabelecendo parcerias com Argentina e vizinhos.",
        "Adotar política de vistos mais aberta (isenção para países seguros) e retomar participação na Aliança Internacional para a Memória do Holocausto (IHRA)."
      ],
      sourceRefs: [{ page: 36 }, { page: 37 }]
    }
  }
};
