// ============================================================================
// LULA (PT) — dados extraídos de "Diretrizes para o Programa de Transformação
// do Brasil", proposta de governo registrada no TSE (ver data/sources.json).
// Textos parafraseados/resumidos a partir do PDF oficial; sourceRefs indicam
// a página do PDF onde o trecho original pode ser conferido.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["lula"] = {
  basics: {
    name: "Luiz Inácio Lula da Silva",
    ballotName: "Lula",
    party: "PT",
    number: 13,
    coalition: "Brasil Pronto Pra Mais (PSB, PDT, Federação Brasil da Esperança — PT/PCdoB/PV, Federação PSOL Rede)",
    vp: "Geraldo Alckmin (PSB)",
    initials: "LS"
  },
  positioningSummary: "Candidato à reeleição: defende continuidade do arcabouço fiscal, da reforma tributária já aprovada e de um Estado indutor do investimento (Novo PAC, Petrobras, bancos públicos), com valorização do salário mínimo e do emprego formal.",
  economy: {
    fiscal: {
      diagnosis: [
        "Descreve ter recebido em 2023 uma 'herança maldita': Estado fiscalmente desequilibrado, orçamento fictício, calote em precatórios e desoneração artificial de combustíveis no fim do governo anterior, num período (2017–2022) de crescimento médio de apenas 1,5% ao ano.",
        "Afirma ter feito 'a gestão fiscal mais republicana da história', com esforço fiscal de cerca de 2% do PIB (R$ 240 bilhões) entre 2023 e 2026 via o novo arcabouço fiscal, projetando déficit primário de 2026 próximo a 0,4% do PIB."
      ],
      measures: [
        "Manter o novo arcabouço fiscal, controlando o crescimento das despesas sem cortar políticas sociais.",
        "Buscar o resultado fiscal pela retomada do crescimento econômico, controle do gasto primário, melhoria da eficiência e qualidade do gasto público, e combate a privilégios e distorções tributárias — não por corte de gastos sociais."
      ],
      sourceRefs: [{ page: 8 }, { page: 11 }, { page: 49 }]
    },
    tributacao: {
      diagnosis: [
        "Aponta a aprovação da reforma tributária do consumo como conquista central: reduz cinco tributos (PIS, Cofins, IPI, ICMS, ISS) a dois (CBS federal e IBS subnacional), com cesta básica isenta e cashback para os mais pobres.",
        "Diz ter tributado mais a renda dos super-ricos (offshores, fundos exclusivos — cerca de 140 mil contribuintes do topo) para financiar isenção de Imposto de Renda a mais de 15 milhões de brasileiros de baixa renda."
      ],
      measures: [
        "Regulamentar a reforma tributária, incluindo o Imposto Seletivo para desestimular produtos nocivos à saúde.",
        "Assegurar tratamento tributário justo às micro e pequenas empresas na implementação da reforma, e usar o novo Fundo Nacional de Desenvolvimento Regional (criado pela reforma) para reduzir desigualdades regionais."
      ],
      sourceRefs: [{ page: 10 }, { page: 11 }, { page: 56 }, { page: 59 }]
    },
    "cambio-comercio": {
      diagnosis: [
        "Cita ter enfrentado 'pelo menos três ondas de tarifaços' do governo Trump e um cenário internacional de guerras e protecionismo, respondendo com o Plano Brasil Soberano para proteger empresas, emprego e renda."
      ],
      measures: [
        "Manter a política de comércio exterior alinhada às políticas industrial, tecnológica e de inovação, estimulando exportações industriais, diversificando mercados e concentrando a pauta exportadora em produtos de maior valor agregado.",
        "Aprimorar continuamente os instrumentos de defesa comercial do país."
      ],
      sourceRefs: [{ page: 12 }, { page: 52 }]
    },
    "trabalho-renda": {
      diagnosis: [
        "Reivindica geração de 8 milhões de empregos entre 2023 e junho de 2026, a menor taxa de desemprego da série histórica e a maior renda real do trabalho, puxadas pela valorização real do salário mínimo."
      ],
      measures: [
        "Apoiar no Senado o fim da escala 6x1 e a redução da jornada para 40 horas semanais sem redução salarial (já aprovado na Câmara).",
        "Combater a 'pejotização' espúria e regulamentar o trabalho de plataformas digitais (remuneração, direitos e previdência); reformar a legislação trabalhista contra fraudes em terceirizações.",
        "Fortalecer a negociação coletiva e o sistema sindical, e tornar obrigatórios planos de ação contra desigualdade salarial de gênero e raça nas empresas."
      ],
      sourceRefs: [{ page: 73 }, { page: 74 }, { page: 75 }, { page: 76 }]
    },
    "inflacao-monetaria": {
      diagnosis: [
        "Registra inflação média de 4,6% ao ano no mandato — diz ser o menor índice acumulado da história para um mandato presidencial — após herdar uma Selic elevada e famílias endividadas.",
        "Argumenta que 'a taxa de juros é hoje o que a inflação foi no passado no Brasil': fator de concentração de renda e desorganização econômica."
      ],
      measures: [
        "Criar condições para redução sustentada dos juros, mantendo inflação controlada e política fiscal responsável, sem detalhar meta numérica ou alteração no regime de metas do Banco Central.",
        "Fortalecer a regulação do sistema financeiro, aprofundar o mercado de capitais doméstico e monitorar o endividamento de famílias e empresas (dando sequência ao Desenrola Brasil)."
      ],
      sourceRefs: [{ page: 10 }, { page: 12 }, { page: 49 }]
    },
    "estado-privatizacoes": {
      diagnosis: [
        "Não defende privatizações; ao contrário, credita à Petrobras (estatal) recordes de produção de petróleo e à retomada de investimento público (Novo PAC) a recuperação da economia — o Estado é tratado como indutor de investimento e produtividade."
      ],
      measures: [
        "Ampliar investimentos da Petrobras em exploração onshore e offshore para recuperar participação em reservas nacionais.",
        "Manter programas de tarifa social via estatais/bancos públicos — Luz do Povo (conta de luz gratuita para baixa renda) e Gás do Povo (recarga gratuita de botijão) — e fundos garantidores de bancos públicos para crédito a pequenas empresas."
      ],
      sourceRefs: [{ page: 66 }, { page: 82 }, { page: 58 }]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        "Aponta o Novo PAC como o eixo do investimento público: R$ 1,3 trilhão mobilizados até o fim de 2026, com recorde de R$ 280 bilhões investidos em infraestrutura em 2025 (R$ 300 bi previstos para 2026) e alcance a 99% dos municípios."
      ],
      measures: [
        "Lançar nova edição do Novo PAC, mantendo ritmo de concessões rodoviárias e intensificando leilões e repactuações ferroviárias, além de investimentos em portos e aeroportos regionais.",
        "Expandir a economia digital: infraestrutura computacional soberana, redução do déficit de fibra óptica (ainda em 11% dos municípios) e ampliação do 5G no campo."
      ],
      sourceRefs: [{ page: 52 }, { page: 53 }, { page: 54 }]
    }
  },
  otherThemes: {
    educacao: {
      keyProposals: [
        "Cumprir as metas do Plano Nacional de Educação 2026–2036, incluindo 80% das crianças alfabetizadas na idade certa (partindo de 66% em 2025).",
        "Continuar a expansão do ensino em tempo integral (financiado pelo Fundeb) e do Pé-de-Meia contra a evasão no ensino médio.",
        "Expandir a rede de institutos federais técnicos (mais 111 IFs) e manter o financiamento ao ensino superior (ProUni, FIES, novos campi)."
      ],
      sourceRefs: [{ page: 30 }, { page: 31 }, { page: 33 }]
    },
    saude: {
      keyProposals: [
        "Integrar Atenção Primária, Especializada e Vigilância em Saúde num prontuário único nacional (RNDS), acelerando o uso de telessaúde e IA para triagem.",
        "Manter e ampliar o Farmácia Popular (medicamentos gratuitos) e o Programa Mais Médicos.",
        "Universalizar a saúde bucal (Brasil Sorridente) e ampliar hospitais universitários."
      ],
      sourceRefs: [{ page: 34 }, { page: 35 }, { page: 36 }]
    },
    seguranca: {
      keyProposals: [
        "Criar o Ministério da Segurança Pública (após aprovação da PEC da Segurança Pública) para coordenar o Sistema Único de Segurança Pública.",
        "Aplicar a Lei Antifacção e o Programa Brasil Contra o Crime Organizado (R$ 10 bi do Fundo Nacional de Investimento em Infraestrutura Social para estados/municípios).",
        "Manter o controle de armas e munições e cumprir as metas do Plano Pena Justa no sistema prisional."
      ],
      sourceRefs: [{ page: 27 }, { page: 28 }, { page: 30 }]
    },
    "meio-ambiente": {
      keyProposals: [
        "Ampliar o Pagamento por Serviços Ambientais (PSA) e criar mecanismos permanentes de financiamento climático para o Semiárido.",
        "Expandir o monitoramento satelital e o uso de inteligência artificial no combate a crimes ambientais.",
        "Institucionalizar a adaptação climática no planejamento público, com foco em segurança hídrica e resposta a eventos extremos."
      ],
      sourceRefs: [{ page: 72 }, { page: 73 }]
    },
    tecnologia: {
      keyProposals: [
        "Buscar soberania digital: infraestrutura computacional nacional (supercomputadores) e modelos de linguagem em português.",
        "Acelerar a difusão de IA no setor produtivo (agro, saúde, serviços financeiros) e criar um Centro Nacional de Transparência Algorítmica.",
        "Universalizar conectividade — reduzir déficit de fibra óptica e expandir 5G no campo."
      ],
      sourceRefs: [{ page: 54 }, { page: 55 }]
    },
    "politica-externa": {
      keyProposals: [
        "Defender autonomia estratégica e não alinhamento automático a nenhuma potência, respondendo a tarifas comerciais externas via Plano Brasil Soberano.",
        "Fortalecer a Base Industrial e Tecnológica de Defesa, ligando defesa nacional a geração de empregos qualificados e exportações de maior valor agregado.",
        "Retomar protagonismo multilateral do Brasil, revertendo o isolamento geopolítico do período anterior."
      ],
      sourceRefs: [{ page: 12 }, { page: 77 }, { page: 78 }]
    }
  }
};
