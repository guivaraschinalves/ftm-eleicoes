// ============================================================================
// FLÁVIO BOLSONARO (PL) — citações do plano "Para o Brasil Vencer o Atraso",
// proposta de governo registrada no TSE (ver data/sources.js). Todo texto em
// `quote` é TRANSCRIÇÃO LITERAL do PDF oficial — não paráfrase. `title` em
// cada proposta é redigido por nós só para nomear o card; o conteúdo citado
// é sempre do próprio plano.
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
    initials: "FB",
    photo: "sources/flavio-bolsonaro.jpg",
    birthDate: "1981-04-30"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "Foram 30 aumentos de tributos, a inflação de alimentos fora de controle e a maior taxa de juros em 19 anos. O Brasil tem hoje a maior taxa de juro real do mundo!", page: 29 },
        { quote: "Em quatro anos, a dívida pública cresceu 13 pontos percentuais em relação ao PIB.", page: 29 },
        { quote: "Mesmo enfrentando a maior pandemia em cem anos, reduzimos em 4 pontos percentuais a relação entre a dívida e o PIB.", page: 29 }
      ],
      proposals: [
        { title: "'Tesouraço': corte de no mínimo 10 ministérios", quotes: [
          { quote: "Nossa bandeira é um grande TESOURAÇO: um corte profundo e por todos os lados, que enxuga a máquina, coloca as contas em ordem e reduz os impostos que pesam sobre quem produz.", page: 68 },
          { quote: "Isso inclui o corte de no mínimo 10 ministérios, a redução de cargos comissionados e de despesas administrativas e o combate aos penduricalhos e supersalários que corroem o orçamento.", page: 69 }
        ] },
        { title: "Superávits primários e controle de gastos discricionários", quotes: [{ quote: "Vamos construir o equilíbrio fiscal duradouro, entregando superávits primários e limitando o crédito subsidiado com recursos do Tesouro, mitigando pressões inflacionárias. E haverá uma regra clara de controle de gastos discricionários dos três Poderes da União.", page: 71 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "com a atual reforma tributária, o Brasil caminha para ter um dos maiores impostos sobre valor agregado (IVA) do mundo, projetado em torno de 30%, contra uma média de 19% nos países da OCDE, e menos ainda em vários vizinhos.", page: 30 },
        { quote: "a reforma tributária aprovada pela atual gestão foi entregue ao sabor dos lobbies [...] deixou para a população um custo que se aproxima de R$ 1 trilhão, sem fonte orçamentária definida nos dois fundos criados pela reforma, além de mais de R$ 500 bilhões em exceções decorrentes dos lobbies, que passaram a ser permanentes.", page: 30 }
      ],
      proposals: [
        { title: "Reduzir o IVA e corrigir distorções da reforma", quotes: [{ quote: "Vamos promover a revisão e o redimensionamento da reforma tributária em curso e da majoração de impostos efetuada pelo atual governo, com o objetivo de reduzir efetivamente a carga sobre a produção e o consumo. Vamos corrigir suas distorções, reduzir o IVA, hoje projetado num dos patamares mais altos do mundo, e assegurar a não cumulatividade.", page: 30 }] },
        { title: "Simplificar a conta de luz e reduzir tributos sobre energia", quotes: [{ quote: "Vamos simplificar a conta de luz, racionalizando encargos e subsídios cruzados, e promover a redução gradual da CDE e das fontes incentivadas, mantida a tarifa social para quem mais precisa dela. Vamos reduzir impostos sobre energia elétrica e combustíveis.", page: 31 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "O governo recebeu com honras o ditador venezuelano Nicolás Maduro, fraudador do processo eleitoral e preso por narcotráfico e narcoterrorismo. [...] Muito alinhamento ideológico, nenhum retorno para o Brasil: nem comércio, nem investimento, nem respeito.", page: 62 }
      ],
      proposals: [
        { title: "Retomar adesão à OCDE e fim do IOF sobre câmbio", quotes: [{ quote: "O passo mais urgente é retomar o cronograma interrompido de adesão à OCDE, incluindo o fim gradual do IOF sobre o câmbio, que é condição obrigatória do processo.", page: 63 }] },
        { title: "Plano de integração a cadeias globais de valor", quotes: [{ quote: "Vamos executar um plano nacional de integração às cadeias globais de valor, com apoio real para o setor produtivo ganhar produtividade, tendo como prioridade a agroindústria avançada, os minerais críticos, a saúde e a economia digital.", page: 63 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "Hoje, o custo de um trabalhador formal chega a cerca de duas vezes o salário que ele leva para casa. Essa diferença é o que faz muita empresa não contratar, ou contratar na informalidade.", page: 43 },
        { quote: "Numa está o jovem à procura do primeiro emprego, que ouve de toda empresa a mesma exigência de experiência, sem que ninguém lhe dê a primeira chance de tê-la. Na outra está quem passou dos cinquenta e perdeu o emprego, tem experiência de sobra e mesmo assim não é chamado para as entrevistas.", page: 43 }
      ],
      proposals: [
        { title: "Contrato jovem (18–24) e contrato 50+", quotes: [{ quote: "Para o jovem, vamos criar um contrato de trabalho para os 18 a 24 anos em busca do primeiro emprego, com menor custo na folha [...] Para quem tem mais idade, vamos criar um contrato mais atrativo para a contratação de pessoas com 50 anos ou mais desempregadas há pelo menos 12 meses.", page: 44 }] },
        { title: "Negociado sobre o legislado", quotes: [{ quote: "defendemos o negociado sobre o legislado, ou seja, permitir que trabalhador e empresa combinem diretamente as condições de trabalho que funcionam para os dois, dentro da lei, em vez de seguir uma regra única imposta a todos.", page: 44 }] },
        { title: "Minha Primeira Empresa", quotes: [{ quote: "Para quem está começando, vamos criar o Minha Primeira Empresa: menos burocracia para abrir e formalizar o negócio, capacitação e orientação pelo Sistema S.", page: 45 }] },
        { title: "CAIXA como 'Banco da Prosperidade'", quotes: [{ quote: "A CAIXA deixará de ser apenas a operadora de benefícios para se tornar o Banco da Prosperidade.", page: 46 }] },
        { title: "'Ganha-Ganha': histórico positivo para quem se formaliza", quotes: [{ quote: "De adesão voluntária, ele permite que atitudes como concluir um curso de qualificação, formalizar um negócio, conseguir um emprego ou manter as contas em dia formem um histórico positivo que trabalha a favor do cidadão: acesso a crédito, juros menores e cashback para quem hoje é invisível ao sistema financeiro.", page: 46 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "os juros altos são consequência da dívida crescente. Juros menores não se decretam: conquistam-se com contas em ordem, e não há conta em ordem quando o governo gasta mais do que arrecada.", page: 32 },
        { quote: "Dados do Boletim Focus de outubro de 2022, antes da eleição, previam taxa selic cerca de 7 pontos percentuais abaixo do que se praticou em 2025 e 2026.", page: 32 }
      ],
      proposals: [
        { title: "Estabilizar a dívida para trazer juros à média internacional", quotes: [{ quote: "Ao estabilizar e reduzir a dívida pública, nosso governo vai criar as condições para que os juros básicos fiquem em linha com a média internacional e para que a inflação volte ao centro da meta.", page: 33 }] },
        { title: "Proibir apostas online com recursos de programas sociais", quotes: [{ quote: "Vamos proibir o uso dos recursos dos programas sociais para apostas, porque dinheiro destinado a pôr comida na mesa não pode escoar para a casa de apostas.", page: 33 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "Para o PT, cada estatal, cada diretoria, cada fundo de pensão é espaço a ser loteado entre aliados, e foi assim que a Lava Jato encontrou, no aparelhamento das estatais, o coração do maior esquema de corrupção da história do país.", page: 70 },
        { quote: "Uma estatal profissionalizada, comandada por quem entende do negócio, dá resultado e devolve valor à sociedade, como se viu no governo Bolsonaro.", page: 70 }
      ],
      proposals: [
        { title: "Fortalecer a Lei das Estatais", quotes: [{ quote: "Nas empresas públicas, essa proteção tem nome: a Lei das Estatais, de 2016, criada depois da Lava Jato para blindar as estatais da indicação política [...] Tentaram enfraquecê-la; nós vamos fortalecê-la.", page: 70 }] },
        { title: "Retomar o Programa Nacional de Desestatização", quotes: [{ quote: "vamos retomar o Programa Nacional de Desestatização com critério, avaliando caso a caso onde a presença do Estado deixou de fazer sentido.", page: 70 }] },
        { title: "Blindar fundos de pensão de estatais da indicação política", quotes: [{ quote: "Vamos blindar os fundos de pensão das estatais da indicação política, porque a aposentadoria do trabalhador não pode virar cofre de projeto de poder.", page: 70 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "O custo logístico no Brasil é de 15,5% do PIB, quase o dobro dos 8,8% dos Estados Unidos.", page: 31 },
        { quote: "O país cresceu, em média, 2% ao ano nas últimas duas décadas, menos do que o mundo. Nossa meta é dobrar esse ritmo e alcançar um crescimento sustentado de 4% ao ano ao longo da próxima década.", page: 49 },
          { quote: "o Brasil produz cada vez mais gás no pré-sal, mas desperdiça parte dele por falta de escoamento, enquanto importa gás caro do exterior.", page: 53 }
      ],
      proposals: [
        { title: "R$ 900 bi em infraestrutura em 4 anos", quotes: [{ quote: "Vamos investir R$ 900 bilhões em quatro anos em rodovias, hidrovias, portos, aeroportos e ferrovias.", page: 51 }] },
        { title: "Estabilidade regulatória de até 20 anos", quotes: [{ quote: "Vamos também garantir que a regra combinada no início seja a regra do fim. Para os grandes projetos de longa maturação, criaremos mecanismos de estabilidade das regras de até 20 anos, para que o contrato não seja mudado depois que a obra já estiver de pé.", page: 50 }] },
        { title: "Acelerar concessões para universalizar água e esgoto", quotes: [{ quote: "nós vamos garantir sua plena aplicação e acelerar as concessões e parcerias para universalizar o acesso à água tratada e ao esgoto, com atenção especial ao saneamento rural.", page: 47 }] },
        { title: "Expandir a rede de escoamento e transporte de gás", quotes: [{ quote: "Vamos apoiar a expansão da rede de escoamento e transporte de gás conforme a demanda, com segurança jurídica e regras estáveis que atraiam o investimento privado, para integrar à malha os estados hoje desconectados e baratear a energia da indústria e da família.", page: 53 }] },
        { title: "Armazenamento de energia e polo global de data centers", quotes: [{ quote: "Vamos regular as diversas fontes buscando o menor preço ao consumidor final, implantar um programa de armazenamento de energia, com baterias de grande porte e outras tecnologias, e transformar o país em polo global de data centers sustentáveis, aproveitando a matriz elétrica renovável.", page: 53 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [
        { quote: "Há anos o Brasil empurra alunos de um ano para o outro sem que eles tenham aprendido. A criança que não é alfabetizada na idade certa vira o adolescente que passa de série sem entender a matéria e o jovem que termina a escola sem saber o suficiente para conseguir um bom emprego.", page: 34 },
        { quote: "não é por falta de dinheiro: o país mais do que triplicou o gasto por aluno e continua entre as últimas colocações do mundo. No PISA, principal avaliação internacional de educação, o Brasil aparece na 65ª posição entre 81 países em matemática.", page: 35 }
      ],
      proposals: [
        { title: "Método fônico de alfabetização", quotes: [{ quote: "Vamos priorizar o método fônico, que é o de melhor resultado comprovado pela ciência, ensinando a criança a ligar cada som à sua letra, em vez das abordagens que fracassaram por décadas.", page: 35 }] },
        { title: "Programa Acolher (reforço entre alunos)", quotes: [{ quote: "vamos criar o Programa Acolher: um aluno com bom desempenho é remunerado para dar reforço aos colegas que precisam, de forma remota ou presencial.", page: 35 }] },
        { title: "Voucher educacional onde faltar vaga", quotes: [{ quote: "onde faltar vaga na rede pública, a família receberá um voucher educacional para matricular o filho em outra escola, porque a prioridade é a criança aprender.", page: 36 }] },
        { title: "Empréstimo Contingente à Renda (substitui o FIES)", quotes: [{ quote: "vamos adotar o Empréstimo Contingente à Renda: o estudante só começa a pagar quando estiver empregado e ganhando, o valor da parcela é proporcional ao que ele recebe e o prazo é bem mais longo.", page: 37 }] },
        { title: "Programa Escola de Campeões", quotes: [{ quote: "Vamos criar o Programa Escola de Campeões, com parcerias público-privadas para levar o esporte competitivo às escolas, muito além da aula de educação física: times escolares, treinos no contraturno e competições municipais e estaduais. O programa é também uma arma contra a evasão escolar e a repetência: o aluno que treina, que joga pelo time da escola e que sonha com a próxima competição é o aluno que continua estudando.", page: 40 }] }
      ]
    },
    seguranca: {
      diagnosis: [
        { quote: "Nenhuma família vive, trabalha ou prospera sob o domínio do medo. Antes de qualquer outra coisa, o brasileiro precisa poder deixar o filho ir à escola, abrir a porta do comércio de manhã e voltar para casa à noite sem rezar para chegar inteiro.", page: 13 },
        { quote: "Hoje, temos 16 mil quilômetros de fronteiras abertas e um efetivo de 1 policial para cada 100 quilômetros.", page: 13 }
      ],
      proposals: [
        { title: "Facções classificadas como narcoterroristas", quotes: [{ quote: "Vamos declarar guerra ao crime organizado. PCC, CV, milícias e todas as outras facções serão declaradas como organizações narcoterroristas.", page: 13 }] },
        { title: "Redução da maioridade penal para 16 anos", quotes: [{ quote: "O novo governo do Brasil vai apoiar e sancionar a redução da maioridade penal de 18 para 16 anos.", page: 13 }] },
        { title: "5 presídios de segurança máxima (Complexo TREVA)", quotes: [{ quote: "O Brasil terá 5 novos presídios de segurança máxima no modelo adotado por El Salvador. [...] ele vai se chamar TREVA.", page: 14 }] },
        { title: "Dobrar investimentos federais em segurança pública", quotes: [{ quote: "O novo governo do Brasil vai dobrar os investimentos federais em segurança pública ao longo do mandato.", page: 15 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "A saúde é a base de tudo o que este capítulo promete: criança doente não aprende, adulto doente não trabalha, e uma família com um enfermo grave vê o orçamento e os planos ruírem juntos.", page: 37 },
        { quote: "A lei de reajuste já existe, mas, presa ao orçamento, não enfrentou a defasagem que asfixia hospitais, santas casas e clínicas, sobretudo no interior.", page: 37 },
        { quote: "O médico que atende hoje não sabe o que outro médico já descobriu.", page: 26 },
        { quote: "A saúde mental é outra face do cuidado, e hoje pesa sobre milhões de famílias, quase sempre em silêncio.", page: 39 }
      ],
      proposals: [
        { title: "Correção efetiva da tabela SUS", quotes: [{ quote: "Vamos garantir as condições para que seja possível a correção efetiva da tabela SUS. [...] Vamos assegurar uma remuneração que cubra o custo real do atendimento.", page: 37 }] },
        { title: "Programa de Atendimento aos Idosos", quotes: [{ quote: "criar o Programa de Atendimento aos Idosos, com atendimento facilitado e adequado a quem envelhece, para que o idoso não enfrente o mesmo percurso cansativo de sempre para se cuidar.", page: 37 }] },
        { title: "Prontuário eletrônico único e digitalização do SUS", quotes: [
          { quote: "Vamos implantar o prontuário eletrônico único, vinculado ao CPF e integrado ao Gov.br, interoperável entre as redes pública e privada, com histórico completo de consultas, exames, vacinas e prescrições, sempre observados o consentimento do paciente, a LGPD, o sigilo médico e os protocolos de segurança", page: 26 },
          { quote: "vamos completar a digitalização do SUS e usar inteligência artificial para agilizar o agendamento de consultas e exames, ajudando a encaixar o paciente na primeira vaga disponível, para que ninguém mais fique meses aguardando uma marcação que poderia ser resolvida em muito menos tempo.", page: 26 }
        ] },
        { title: "Telessaúde e entrega de remédio em domicílio", quotes: [{ quote: "Vamos também levar o atendimento até quem não consegue chegar até ele. Com a telessaúde e o teleatendimento por aplicativo, médicos de regiões com baixa demanda poderão atender pacientes onde as filas são longas, aproximando o cuidado de quem vive longe de um grande centro. E um sistema de entrega de remédio em domicílio vai garantir que o idoso, a pessoa com deficiência e o doente crônico não precisem escolher entre buscar o tratamento e pagar o transporte.", page: 38 }] },
        { title: "Inteligência artificial de apoio à prevenção", quotes: [{ quote: "A tecnologia também ajuda a cuidar antes de a doença se agravar. Com inteligência artificial de apoio à prevenção, o sistema poderá identificar quem corre maior risco de adoecer e chamar essa pessoa para se cuidar a tempo, em vez de esperar que ela chegue ao pronto-socorro quando já é grave.", page: 38 }] },
        { title: "Fortalecer a atenção à saúde mental", quotes: [{ quote: "Vamos fortalecer e ampliar a atenção à saúde mental, chegando às famílias que muitas vezes enfrentam tudo sozinhas: o diagnóstico precoce e o apoio às crianças com TDAH; a atenção à depressão e à ansiedade; e o cuidado com os idosos que enfrentam o Alzheimer e outras doenças neurológicas, e com quem cuida deles.", page: 39 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "Nos últimos anos, a política externa brasileira trocou o interesse nacional pela ideologia, protegendo regimes propensos ao terror e seus criminosos.", page: 61 },
        { quote: "O governo recebeu com honras o ditador venezuelano Nicolás Maduro, fraudador do processo eleitoral e preso por narcotráfico e narcoterrorismo.", page: 61 }
      ],
      proposals: [
        { title: "Diplomacia profissional, não ideológica", quotes: [{ quote: "Nossa proposta é o oposto: uma diplomacia guiada pelo profissionalismo e pelo pragmatismo, não pela ideologia. O Itamaraty voltará a ser conduzido pela competência técnica que sempre marcou seus quadros.", page: 62 }] },
        { title: "Reatar relações com Argentina, EUA e Israel", quotes: [{ quote: "Nos últimos anos, as relações com países como Argentina, Estados Unidos e Israel foram levadas ao limite do rompimento. Vamos reverter esse quadro com profissionalismo e foco no interesse do Brasil.", page: 62 }] }
      ]
    },
    corrupcao: {
      diagnosis: [
        { quote: "Para o PT, cada estatal, cada diretoria, cada fundo de pensão é espaço a ser loteado entre aliados, e foi assim que a Lava Jato encontrou, no aparelhamento das estatais, o coração do maior esquema de corrupção da história do país.", page: 70 },
        { quote: "O PT destruiu o teto de gastos tendo em mente, antes de tudo, um projeto de poder: retirou as sanções e as travas e projetou regras frágeis, que pudessem ser mudadas conforme a conveniência, sempre com foco na reeleição.", page: 70 }
      ],
      proposals: [
        { title: "Transparência, controle e rastreabilidade às emendas parlamentares", quotes: [{ quote: "No mesmo esforço de organizar melhor o orçamento, daremos mais transparência, controle e rastreabilidade às emendas parlamentares, priorizando sua alocação em políticas públicas prioritárias do Plano Plurianual, aprovado pelo parlamento.", page: 69 }] },
        { title: "Comando das estatais por recrutamento técnico, sem apadrinhamento", quotes: [{ quote: "sempre que possível, o comando das estatais e dos cargos de direção será preenchido por recrutamento com regras de mercado, com busca ativa de profissionais qualificados, como fazem as empresas privadas quando procuram seus executivos, escolhendo pela competência comprovada, e não pela conveniência política.", page: 70 }] },
        { title: "Combate aos penduricalhos e supersalários", quotes: [{ quote: "Isso inclui o corte de no mínimo 10 ministérios, a redução de cargos comissionados e de despesas administrativas e o combate aos penduricalhos e supersalários que corroem o orçamento.", page: 69 }] },
        { title: "Agenda permanente de transparência e avaliação de políticas públicas", quotes: [{ quote: "um choque de gestão vai colocar o patrimônio público a serviço da sociedade, com reforma do processo orçamentário e uma agenda permanente de transparência e avaliação de políticas públicas, identificando quem são os beneficiários de cada programa e medindo o impacto real de cada gasto.", page: 71 }] }
      ]
    },
    tecnologia: {
      diagnosis: [
        { quote: "A tecnologia terá, ao mesmo tempo, duas funções: modernizar o Estado e ser motor de produtividade da economia.", page: 56 },
        { quote: "A tecnologia não é assunto de elite: é o que multiplica o valor do trabalho de todos.", page: 56 },
        { quote: "Os data centers e a transição energética funcionam sobre minerais que poucos países têm, e o Brasil é um deles. Temos lítio, nióbio, grafite, cobre, níquel, urânio e terras-raras, insumos essenciais para semicondutores, baterias, turbinas eólicas, veículos elétricos, defesa e inteligência artificial.", page: 55 }
      ],
      proposals: [
        { title: "Estratégia Nacional de Inteligência Artificial difundida nas pequenas empresas", quotes: [{ quote: "A Estratégia Nacional de Inteligência Artificial vai difundir a IA para as micro, pequenas e médias empresas em larga escala, com prioridade para indústria, agronegócio, saúde e logística.", page: 56 }] },
        { title: "Produzir inteligência artificial, não só consumir", quotes: [{ quote: "Mais do que usar a inteligência artificial, o Brasil tem tudo para produzi-la.", page: 56 }, { quote: "Não seremos apenas consumidores de tecnologia: seremos também seus desenvolvedores e produtores.", page: 56 }] },
        { title: "Estado indutor por compras públicas, GovTech e patentes de IA", quotes: [{ quote: "Para isso, o Estado atuará como indutor, pelas compras públicas, pelo GovTech e pelo investimento em pesquisa, e vamos elevar a participação brasileira nas patentes de inteligência artificial.", page: 56 }] },
        { title: "Legislação voltada à liberdade de criar e inovar", quotes: [{ quote: "Proporemos uma legislação voltada à liberdade de criar e inovar, inspirada nas melhores práticas internacionais, para que a tecnologia seja desenvolvida aqui sem entraves", page: 56 }] },
        { title: "Parques tecnológicos, incubadoras e startups de base tecnológica", quotes: [{ quote: "fortalecer os parques tecnológicos, expandir as incubadoras, apoiar as startups de base tecnológica e aproximar universidades e empresas, com a gestão das universidades integrada à ciência e à tecnologia.", page: 57 }] },
        { title: "Proteção de dados, defesa cibernética e IA a serviço das pessoas", quotes: [{ quote: "Os dados do cidadão são dele, não do governo, e serão tratados com privacidade e segurança. Vamos fortalecer a defesa cibernética do país, protegendo serviços públicos, infraestrutura crítica e cidadãos contra ataques e fraudes, e garantir que a inteligência artificial seja usada a serviço das pessoas, não contra elas.", page: 57 }] },
        { title: "Assistentes automatizados indicando serviços a que o cidadão tem direito", quotes: [{ quote: "Assistentes automatizados vão indicar a cada brasileiro os serviços e benefícios a que ele tem direito e o caminho para obtê-los, sem que ele precise descobrir sozinho a qual órgão recorrer", page: 25 }] }
      ]
    }

  },
  direitosBemEstar: {
      mulheres: {
        diagnosis: [
          { quote: "Mais da metade das famílias brasileiras é chefiada por uma mulher. Quando ela é protegida, capacitada e tem renda própria, não é só a vida dela que muda: é a da família inteira.", page: 17 },
          { quote: "Muitas mulheres permanecem em relações abusivas porque não têm condições financeiras de recomeçar.", page: 19 },
          { quote: "O Brasil tem cerca de 10 milhões de mulheres empreendedoras, responsáveis pelo sustento de milhões de famílias, e mesmo sendo em média mais escolarizadas ainda enfrentam mais dificuldade para acessar crédito e pagam juros mais altos.", page: 19 }
        ],
        proposals: [
          { title: "Central da Mulher: um só lugar para proteção, saúde, trabalho e crédito", quotes: [{ quote: "A Central da Mulher será um espaço físico onde a mulher resolve a vida sem perder tempo nem percorrer a cidade inteira. Nela, encontrará acolhimento e proteção, orientação jurídica e apoio psicológico, saúde preventiva, qualificação e cadastramento, a possibilidade de se candidatar a vagas de emprego, orientação para abrir o próprio negócio, crédito, renegociação de dívidas, regularização da casa e acesso a benefícios.", page: 17 }] },
          { title: "Denúncia pelo chat e monitoramento dos agressores de maior risco", quotes: [{ quote: "Pelo chat da ClarIA será possível registrar ocorrência, pedir medida protetiva e receber orientação e acolhimento. Vamos implantar um sistema nacional de avaliação de risco, para que cada denúncia receba atendimento proporcional ao nível da ameaça, priorizando os casos mais graves. E vamos monitorar por tornozeleira eletrônica os agressores sob medida protetiva de maior risco, alertando de imediato as autoridades e a vítima em caso de descumprimento da ordem judicial ou de aproximação indevida.", page: 19 }] },
          { title: "Orientação financeira, do primeiro salário ao primeiro patrimônio", quotes: [{ quote: "Vamos oferecer orientação financeira, do primeiro salário ao primeiro patrimônio, com programas para organizar a vida financeira: cuidar do orçamento doméstico, sair do endividamento, criar poupança e se proteger do impacto das apostas online sobre a família.", page: 19 }] },
          { title: "Ganha, Ganha: pontuação que vira juro menor e acesso a crédito", quotes: [{ quote: "Com o Ganha, Ganha, atitudes como concluir cursos de capacitação, trabalhar de forma regular, poupar e pagar as contas em dia passarão a gerar pontuação positiva. Esses pontos poderão ser convertidos em benefícios concretos: juros menores, cashback, acesso facilitado ao crédito, descontos em serviços e incentivo à poupança.", page: 19 }] },
          { title: "Casa Segura: acolhimento e a escritura no nome da mulher", quotes: [{ quote: "Vamos ampliar os espaços de acolhimento para mulheres em situação de violência, porque nenhuma mulher deve continuar ao lado do agressor por não ter para onde ir. E vamos assessorar a mulher a obter a escritura da casa própria no seu nome, uma das formas mais sólidas de autonomia e de proteção contra a violência doméstica", page: 20 }] },
          { title: "Escola Brasil por Elas: capacitação gratuita, de IA a finanças", quotes: [{ quote: "A Escola Brasil por Elas será o maior programa gratuito de capacitação feminina da América Latina, integrado aos cursos do Sistema S e a parcerias público-privadas. Para quem quer empreender, trabalhar de casa ou conseguir um emprego melhor, ela oferecerá formação em inteligência artificial, programação, marketing digital, finanças, idiomas e muito mais.", page: 20 }] },
          { title: "Mais Trabalho para Elas: vagas, qualificação e intermediação", quotes: [{ quote: "Vamos criar um sistema que integre vagas de emprego, qualificação, abertura simplificada de empresa, apoio ao pequeno negócio e intermediação de mão de obra. E vamos montar um grande banco de dados conectado ao RH de empresas de todo o país, para impulsionar de forma mais segura a colocação de mais mulheres no mercado de trabalho.", page: 20 }] },
          { title: "Saúde para Elas: prevenção perto de casa e por telemedicina", quotes: [{ quote: "Vamos cuidar da saúde da mulher de forma preventiva, sem fila longa, com atendimento perto de casa e também pelo celular, por telemedicina ou em postos de saúde que vamos ampliar e construir.", page: 21 }] }
        ]
      },
      envelhecimento: {
        diagnosis: [
          { quote: "O Brasil envelhece depressa, e a família mudou: são lares menores, mais mulheres trabalhando fora, mais idosos vivendo sozinhos e mais doenças crônicas. Cuidar de quem envelhece virou um desafio que a casa nem sempre dá conta.", page: 39 },
          { quote: "Esse trabalho, que recai quase sempre sobre as mulheres da família, equivale a cerca de 8,5% do PIB brasileiro, uma economia inteira sustentada por quem abre mão do próprio trabalho para cuidar.", page: 38 }
        ],
        proposals: [
          { title: "Casa Segura para Envelhecer: subsídio à acessibilidade em casa", quotes: [{ quote: "para a população idosa, vamos oferecer o programa Casa Segura para Envelhecer, com subsídio à acessibilidade domiciliar para famílias de menor renda.", page: 39 }] },
          { title: "Aplicativo de companhia com alerta de perigo", quotes: [{ quote: "Desenvolveremos um aplicativo de companhia com alertas de perigo, para que o idoso tenha o amparo da tecnologia e o filho que mora longe tenha tranquilidade.", page: 39 }] },
          { title: "Ampliar as instituições de longa permanência", quotes: [{ quote: "E vamos ampliar as instituições de longa permanência para idosos, para que recebam proteção especial quando o cuidado familiar não for viável ou suficiente.", page: 39 }] },
          { title: "Rede Nacional de Cuidado, com centros-dia e atendimento domiciliar", quotes: [{ quote: "Também estruturaremos uma Rede Nacional de Cuidado, ampliando o apoio a idosos e pessoas com deficiência, com centros-dia e atendimento domiciliar em parcerias público privado com estados, municípios e organizações sociais.", page: 21 }] },
          { title: "Remédio entregue em casa para idoso e doente crônico", quotes: [{ quote: "um sistema de entrega de remédio em domicílio vai garantir que o idoso, a pessoa com deficiência e o doente crônico não precisem escolher entre buscar o tratamento e pagar o transporte.", page: 38 }] },
          { title: "Atenção ao Alzheimer e a quem cuida", quotes: [{ quote: "o cuidado com os idosos que enfrentam o Alzheimer e outras doenças neurológicas, e com quem cuida deles.", page: 39 }] }
        ]
      },
      outros: {
        diagnosis: [
          { quote: "O mesmo cuidado vale para as pessoas com deficiência e com doenças raras, que enfrentam barreiras todos os dias e muitas vezes contam apenas com a própria família para tudo.", page: 39 },
          { quote: "O esporte feminino foi criado justamente para dar às mulheres um espaço de competição justo. Vamos protegê-lo. Nos últimos anos, confederações internacionais reviram suas regras ao reconhecer que atletas que não nasceram do sexo feminino mantêm, mesmo após tratamento hormonal, vantagens de envergadura, densidade óssea e musculatura que a mulher não tem como equiparar. Permitir essa desigualdade é punir justamente a atleta que treina a vida inteira, abre mão da família e se dedica ao alto rendimento.", page: 40 }
        ],
        proposals: [
          { title: "Políticas transversais de garantia de direitos e inclusão para pessoas com deficiência", quotes: [{ quote: "Nossas políticas serão transversais, atravessando todas as áreas do governo, voltadas a ações concretas de garantia de direitos, inclusão e integração social, entre elas a implantação de Centros de Referência em Transtorno do Espectro Autista.", page: 39 }] },
          { title: "Inclusão de pessoas com deficiência pelo esporte", quotes: [{ quote: "Vamos fomentar a inclusão de pessoas com deficiência pelo esporte, com detecção de talentos paralímpicos desde a base e mais autonomia para as entidades paralímpicas, tratando o paradesporto como via de reabilitação, inserção profissional e superação.", page: 40 }] },
          { title: "Categoria esportiva feminina restrita a atletas do sexo feminino", quotes: [{ quote: "Vamos assegurar que a categoria feminina, da base ao alto rendimento, seja disputada por atletas do sexo feminino, protegendo a mulher e a lisura da competição de agendas ideológicas.", page: 41 }] },
          { title: "Autonomia de povos indígenas e quilombolas sobre atividades em suas terras", quotes: [
            { quote: "Essa mesma clareza de regras vale para quem vive nas terras tradicionais. Será conferida autonomia aos povos indígenas e quilombolas para decidir sobre atividades produtivas em suas terras, com respeito ao desenvolvimento sustentável e às regras ambientais, e com indenização de eventuais restrições ao usufruto e mecanismos de compensação, para que quem vive na terra possa dela tirar o próprio sustento.", page: 50 },
            { quote: "Esse desenvolvimento respeita quem vive na região: os povos indígenas e as comunidades quilombolas terão autonomia para decidir sobre as atividades produtivas em suas terras, e o morador da floresta, o ribeirinho e o extrativista serão tratados como parceiros do desenvolvimento, não como obstáculo.", page: 61 }
          ] }
        ]
      }
  },
  // Trechos em que o plano comenta o governo Jair Bolsonaro (2019–2022) e os
  // governos do PT. Mesma regra do resto do arquivo: citação literal do PDF,
  // com a página. Alimenta a seção "Balanço dos Governos".
  governments: {
    "jair-bolsonaro": [
      { quote: "Foi com esses princípios que o governo do Presidente Jair Bolsonaro enfrentou um dos períodos mais desafiadores da história recente, preservando a responsabilidade fiscal, fortalecendo a proteção às famílias mais vulneráveis, realizando reformas estruturantes e modernizando o Estado, mesmo diante da pandemia e dos impactos da guerra no cenário internacional.", page: 9 },
      { quote: "No governo Bolsonaro, a redução de tributos chegou ao dia a dia das famílias: caiu a conta de energia elétrica, caiu a conta de telefone, caiu o preço da gasolina e ficou mais barato comprar bens de consumo, de um fogão a uma geladeira. Também foi ali que nasceu o PIX, que tirou do brasileiro mais pobre o peso das tarifas bancárias.", page: 29 },
      { quote: "Foi também o governo Bolsonaro que realizou o leilão do 5G, um dos maiores do mundo, trazendo ao país a rede de nova geração sobre a qual todos esses serviços passam a funcionar.", page: 23 },
      { quote: "O governo do Presidente Jair Bolsonaro transformou o Brasil em uma referência mundial em governo digital: o Banco Mundial classificou o país como o sétimo do mundo em maturidade de governo digital, à frente de todas as nações das Américas, incluindo Estados Unidos e Canadá. A plataforma Gov.br chegou a 4,9 mil serviços do Governo Federal, com 75% deles totalmente digitalizados.", page: 23 },
      { quote: "Foi a Lei de Liberdade Econômica, aprovada em 2019 no governo Bolsonaro, que mudou esse quadro: dispensou alvarás e licenças para atividades de baixo risco, simplificou o registro e afirmou a presunção de boa-fé de quem produz.", page: 27 },
      { quote: "Foi o governo Bolsonaro que sancionou a Nova Lei do Gás, em 2021, quebrando o monopólio, abrindo o setor à concorrência e criando as condições para o preço do gás cair.", page: 52 },
      { quote: "O Eixo Norte da Transposição do Rio São Francisco, foi concluído no governo Bolsonaro, e as águas do Velho Chico finalmente chegaram ao Ceará, à Paraíba e ao Rio Grande do Norte, levando segurança hídrica a milhões de nordestinos.", page: 52 },
      { quote: "No governo Bolsonaro, foram emitidos mais de 450 mil documentos de titulação de imóveis rurais, mais do que nos dez anos anteriores somados.", page: 54 },
      { quote: "E quando a pandemia ameaçou quebrar estados e municípios, foi o governo Bolsonaro que garantiu o socorro federativo, entregue diretamente ao poder local para manter a saúde, o funcionalismo e os serviços de pé, no momento mais difícil.", page: 68 },
      { quote: "No governo Bolsonaro, voltamos a colocar a família no centro das políticas públicas e a defender uma escola que ensina, e não que doutrina, respeitando os valores que os pais passam em casa.", page: 34 }
    ],
    "pt": [
      { quote: "mesmo arrecadando como nunca, o governo atual gasta ainda mais, e a dívida pública, que havíamos reduzido entre 2019 e 2022, voltou a crescer de forma acelerada, um salto de cerca de 13 pontos do PIB em apenas quatro anos. Depois de quase duas décadas no poder, com um intervalo de apenas seis anos, a tragédia que aí está tem a assinatura do PT.", page: 8 },
      { quote: "O governo do PT tornou tudo mais caro, e não por acaso. Foram 30 aumentos de tributos, a inflação de alimentos fora de controle e a maior taxa de juros em 19 anos.", page: 29 },
      { quote: "A reforma tributária aprovada pela atual gestão foi entregue ao sabor dos lobbies.", page: 71 },
      { quote: "Ao contrário das vergonhosas declarações dos ministros da Fazenda da atual gestão, os juros altos são consequência da dívida crescente.", page: 32 },
      { quote: "Não plantamos coca nem produzimos cocaína. Mas, sob Lula e o PT, o Porto de Santos se tornou um dos maiores exportadores de cocaína do mundo.", page: 15 },
      { quote: "Não se combate o crime a quatro meses de uma eleição com discurso e PowerPoint, como faz Lula e o PT, depois de 18 anos no poder passando pano para bandido.", page: 15 },
      { quote: "A medida caiu como uma bomba entre sindicatos e partidos de esquerda, que se mobilizaram e conseguiram suprimir essa e outras barreiras antifraude. O resultado foi a Farra do INSS: a explosão de descontos indevidos que triplicou os valores roubados de idosos, pensionistas e beneficiários de programas sociais em 2023 e 2024.", page: 72 },
      { quote: "Sob o atual governo, porém, cresceu um aparato apelidado de “Ministério da Verdade”: estruturas criadas para tratar como desinformação aquilo que incomoda o poder, o que abre a porta para a censura de opositores, jornalistas e cidadãos comuns.", page: 66 },
      { quote: "A atual gestão trouxe o caos ao sistema previdenciário.", page: 26 },
      { quote: "Mesmo depois de deixarmos o governo, seguimos a luta pelo aposentado a partir do Congresso: foi a mobilização da oposição, após a CPMI do INSS e contra a resistência do governo Lula, que conseguimos aprovar o fim definitivo dos descontos associativos, em novembro de 2025.", page: 72 }
    ]
  }
};
