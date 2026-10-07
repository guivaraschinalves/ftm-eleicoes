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
        { quote: "O maior avanço do país nessa área tem nome e sobrenome: foi o Marco Legal do Saneamento, sancionado pelo governo Bolsonaro em 2020, que abriu o setor ao investimento privado e fixou a meta de levar água e esgoto a praticamente toda a população até 2033.", page: 47 },
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
    "direitos-bem-estar": {
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
  }
};
