// ============================================================================
// FLÁVIO BOLSONARO (PL) — dados extraídos de "Para o Brasil Vencer o Atraso",
// proposta de governo registrada no TSE (ver data/sources.json). Textos
// parafraseados/resumidos a partir do PDF oficial; sourceRefs indicam a
// página do PDF onde o trecho original pode ser conferido.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["flavio-bolsonaro"] = {
  basics: {
    name: "Flávio Nantes Bolsonaro",
    ballotName: "Flávio Bolsonaro",
    party: "PL",
    number: 22,
    coalition: "Candidatura de partido isolado (PL)",
    vp: "Alfredo Gaspar (PL)",
    initials: "FB"
  },
  positioningSummary: "Defende ajuste fiscal via corte de gastos ('Tesouraço', mínimo de 10 ministérios), revisão da reforma tributária aprovada pelo governo Lula, redução do custo do trabalho formal e Estado como regulador — não empresário — da economia, com foco em segurança jurídica para atrair investimento privado.",
  economy: {
    fiscal: {
      diagnosis: [
        "Afirma que a gestão Lula elevou a dívida bruta/PIB em 13 pontos percentuais em quatro anos sem enfrentar uma pandemia, resultando em inflação fora da meta, a maior taxa de juros em 19 anos e 30 novos impostos ou aumentos de alíquota.",
        "Contrasta com o próprio governo anterior (2019–2022), no qual diz ter reduzido a relação dívida/PIB em 4 pontos percentuais mesmo durante a pandemia."
      ],
      measures: [
        "Promover um 'Tesouraço': corte de no mínimo 10 ministérios, redução de cargos comissionados e despesas administrativas, combate a supersalários, revisão normativa tributária/previdenciária/trabalhista.",
        "Reformular as regras fiscais visando superávits primários e estabilização/queda da dívida/PIB, com regra de controle de gastos discricionários nos três Poderes."
      ],
      sourceRefs: [{ page: 29 }, { page: 68 }, { page: 69 }, { page: 71 }]
    },
    tributacao: {
      diagnosis: [
        "Critica a reforma tributária do consumo aprovada pelo governo Lula como 'entregue ao sabor dos lobbies': cerca de R$ 1 trilhão sem fonte orçamentária definida nos fundos criados e mais de R$ 500 bilhões em exceções permanentes, projetando um IVA em torno de 30% (ante média de 19% na OCDE)."
      ],
      measures: [
        "Revisar e redimensionar a reforma tributária em curso, reduzindo o IVA, garantindo não cumulatividade e desonerando exportações e investimentos.",
        "Reduzir tributos sobre energia elétrica e combustíveis, e simplificar a conta de luz reduzindo a CDE e subsídios cruzados, mantida a tarifa social."
      ],
      sourceRefs: [{ page: 30 }, { page: 31 }, { page: 71 }]
    },
    "cambio-comercio": {
      diagnosis: [
        "Aponta que o alinhamento ideológico do governo Lula (recepção a Maduro, atracação de navios de guerra iranianos) não trouxe 'nem comércio, nem investimento, nem respeito', e cita sanções dos EUA, China e Europa a produtos brasileiros como resultado do desgaste diplomático."
      ],
      measures: [
        "Retomar o cronograma de adesão à OCDE, incluindo o fim gradual do IOF sobre câmbio.",
        "Executar plano de integração a cadeias globais de valor (agroindústria, minerais críticos, saúde, economia digital), abrir comércio a bens de capital e insumos importados e buscar solução diplomática às sanções comerciais dos EUA, China e Europa ao agro."
      ],
      sourceRefs: [{ page: 62 }, { page: 63 }, { page: 54 }]
    },
    "trabalho-renda": {
      diagnosis: [
        "Diz que o custo de um trabalhador formal chega a cerca de duas vezes o salário que ele recebe, o que empurra empresas para a informalidade ou para não contratar."
      ],
      measures: [
        "Reduzir gradualmente o custo do trabalho sem retirar direitos; criar contratos de menor custo para jovens de 18 a 24 anos e para desempregados com 50 anos ou mais.",
        "Defender o 'negociado sobre o legislado' entre trabalhador e empresa, dentro da lei, e modernizar a intermediação de mão de obra (banco nacional de vagas).",
        "Criar o Minha Primeira Empresa (desburocratização para novos negócios) e transformar a CAIXA em 'Banco da Prosperidade', com crédito e orientação financeira integrados."
      ],
      sourceRefs: [{ page: 43 }, { page: 44 }, { page: 45 }, { page: 46 }]
    },
    "inflacao-monetaria": {
      diagnosis: [
        "Afirma que o Brasil tem hoje a maior taxa de juro real do mundo e a maior Selic em 19 anos, argumentando que 'os juros altos são consequência da dívida crescente' — não um fenômeno isolado da política monetária."
      ],
      measures: [
        "Estabilizar e reduzir a dívida pública como caminho para levar os juros à média internacional e a inflação ao centro da meta (sem propor mudança no regime de metas do Banco Central).",
        "Proibir o uso de recursos de programas sociais em apostas online e ampliar orientação financeira via CAIXA para reduzir o endividamento das famílias."
      ],
      sourceRefs: [{ page: 29 }, { page: 32 }, { page: 71 }]
    },
    "estado-privatizacoes": {
      diagnosis: [
        "Associa o PT ao 'loteamento' político de estatais, fundos de pensão e diretorias como raiz do esquema investigado na Lava Jato."
      ],
      measures: [
        "Fortalecer a Lei das Estatais (2016), preenchendo comando de estatais e fundos de pensão por recrutamento técnico de mercado, blindado de indicação política.",
        "Retomar o Programa Nacional de Desestatização 'com critério, avaliando caso a caso onde a presença do Estado deixou de fazer sentido' — sem listar empresas específicas a privatizar no documento."
      ],
      sourceRefs: [{ page: 69 }, { page: 70 }]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        "Aponta custo logístico de 15,5% do PIB (quase o dobro dos 8,8% dos EUA) e crescimento médio de apenas 2% ao ano do país nas últimas duas décadas como diagnóstico central do capítulo econômico."
      ],
      measures: [
        "Investir R$ 900 bilhões em quatro anos em rodovias, hidrovias, portos, aeroportos e ferrovias, com fundo lastreado em securitização de ativos da União, PPPs e concessões — meta de crescimento de 4% ao ano na próxima década.",
        "Criar estabilidade regulatória de até 20 anos para grandes projetos de infraestrutura e agilizar o licenciamento ambiental com prazos definidos (aprovação tácita em caso de omissão do órgão público)."
      ],
      sourceRefs: [{ page: 49 }, { page: 50 }, { page: 51 }]
    }
  },
  otherThemes: {
    educacao: {
      keyProposals: [
        "Priorizar o método fônico de alfabetização e criar o Programa Acolher (aluno com bom desempenho remunerado para dar reforço a colegas).",
        "Vincular financiamento a metas de aprendizagem ('orçamento por resultados') e ampliar Escolas Cívico-Militares.",
        "Onde faltar vaga na rede pública, oferecer voucher educacional para matrícula em outra escola; substituir o FIES por Empréstimo Contingente à Renda."
      ],
      sourceRefs: [{ page: 35 }, { page: 36 }, { page: 37 }]
    },
    saude: {
      keyProposals: [
        "Corrigir a tabela SUS para cobrir o custo real do atendimento de hospitais, santas casas e clínicas.",
        "Ampliar a Estratégia Saúde da Família e criar um Programa de Atendimento aos Idosos.",
        "Ampliar acesso a exames preventivos."
      ],
      sourceRefs: [{ page: 37 }]
    },
    seguranca: {
      keyProposals: [
        "Classificar PCC, CV, milícias e outras facções como organizações narcoterroristas, com asfixia financeira e bloqueio de ativos.",
        "Reduzir a maioridade penal de 18 para 16 anos e punir maiores de 14 anos em crimes graves.",
        "Criar 5 novos presídios de segurança máxima (modelo El Salvador) e o Sistema Nacional de Fronteira; dobrar os investimentos federais em segurança pública."
      ],
      sourceRefs: [{ page: 13 }, { page: 14 }, { page: 15 }]
    },
    "meio-ambiente": {
      keyProposals: [
        "Consolidar um mercado regulado de carbono e tratar o meio ambiente como 'ativo estratégico', ampliando pagamento por serviços ambientais.",
        "Eliminar superposições entre Ibama, Funai e ICMBio e exigir transparência de financiadores estrangeiros de ONGs que atuam sobre o território brasileiro.",
        "Levar adiante a universalização do saneamento pelo Marco Legal do Saneamento."
      ],
      sourceRefs: [{ page: 58 }, { page: 59 }]
    },
    tecnologia: {
      keyProposals: [
        "Lançar Estratégia Nacional de Inteligência Artificial voltada a micro, pequenas e médias empresas (indústria, agro, saúde, logística).",
        "Fortalecer parques tecnológicos, incubadoras e startups, aproximando universidades e empresas.",
        "Fortalecer a defesa cibernética do país e legislar para proteger dados do cidadão no uso de IA."
      ],
      sourceRefs: [{ page: 56 }, { page: 57 }]
    },
    "politica-externa": {
      keyProposals: [
        "Substituir alinhamento ideológico por diplomacia 'profissional e pragmática', reatando relações com Argentina, Estados Unidos e Israel.",
        "Retomar o processo de adesão à OCDE como eixo da inserção internacional.",
        "Recusar tratar como adversários parceiros comerciais tradicionais, negociando 'da China à União Europeia' pelo interesse do produtor brasileiro."
      ],
      sourceRefs: [{ page: 61 }, { page: 62 }, { page: 63 }]
    }
  }
};
