// ============================================================================
// LULA (PT) — citações do plano "Diretrizes para o Programa de Transformação
// do Brasil", proposta de governo registrada no TSE (ver data/sources.js).
// Todo texto em `quote` é TRANSCRIÇÃO LITERAL do PDF oficial (mesma pontuação
// e grafia) — não paráfrase. `title` em cada proposta é redigido por nós só
// para nomear o card; o conteúdo citado é sempre do próprio plano.
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
    initials: "LS",
    photo: "sources/lula.jpg",
    // Data de registro civil (6/out/1945) — Lula sempre comemorou o
    // aniversário em 27/out, data real de nascimento na zona rural de
    // Caetés (PE), mas só registrada meses depois com outro dia.
    birthDate: "1945-10-06"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O governo Lula III começou com a tentativa golpista de 8 de janeiro de 2023, mobilizações violentas contra a democracia e um Estado profundamente desmontado e fiscalmente desequilibrado.", page: 8 },
        { quote: "Entre 2017 e 2022, a economia brasileira enfrentou baixo crescimento, com uma taxa média de 1,5% ao ano.", page: 8 },
        { quote: "O governo Bolsonaro deixou, ainda, um legado de passivos expressivos, muito longe de uma herança de responsabilidade fiscal. Recebemos um orçamento fictício, deixando de fora políticas essenciais.", page: 8 },
        { quote: "Entre 2023 e 2026, fizemos um enorme esforço fiscal, de aproximadamente 2% do PIB, R$ 240 bilhões. As projeções indicam que o déficit primário encerrará 2026 próximo de 0,4% do PIB, bastante próximo do equilíbrio fiscal.", page: 11 }
      ],
      proposals: [
        { title: "Manter o novo arcabouço fiscal", quotes: [{ quote: "Para isso, manteremos o novo arcabouço fiscal, que controlou o crescimento das despesas sem prejudicar as políticas sociais e permitiu uma redução significativa do déficit primário.", page: 49 }] },
        { title: "Resultado fiscal via crescimento, não corte social", quotes: [{ quote: "O resultado fiscal virá, como fizemos até aqui, da retomada do crescimento econômico, do controle do aumento do gasto primário, investindo na melhoria da eficiência e da qualidade do gasto público, da promoção de justiça tributária e do combate aos privilégios e às distorções.", page: 49 }] },
        { title: "Elevar a taxa de investimento da economia", quotes: [{ quote: "Para isso, vamos elevar a taxa de investimento da economia. Ampliar os investimentos em infraestrutura logística, para dar mais competitividade à produção nacional, e em infraestrutura social, para aprimorar os serviços e os cuidados básicos prestados à população.", page: 48 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "Sob a diretriz de \"colocar o pobre no orçamento e o rico no Imposto de Renda\", a gestão realizou uma profunda reorganização fiscal que elevou a proteção social sem renunciar ao reequilíbrio das contas públicas.", page: 10 },
        { quote: "Nossa estrutura tributária mudou para melhor. Tributamos a renda dos super ricos e fechamos diversas brechas que só geravam distorções na economia, como a tributação de offshores e fundos exclusivos.", page: 11 },
        { quote: "Aprovamos a histórica reforma tributária do consumo. O número de impostos cairá de cinco (PIS, Cofins, IPI, ICMS e ISS) para dois (CBS federal e IBS subnacional).", page: 11 },
        { quote: "Aprovamos a reforma tributária do consumo e isentamos de imposto de renda todos os que ganham até R$ 5.000, compromisso assumido na campanha de 2022, marcos do início do processo de redução da regressividade do sistema tributário brasileiro.", page: 19 }
      ],
      proposals: [
        { title: "Imposto Seletivo na regulamentação da reforma", quotes: [{ quote: "Ao regulamentar a reforma tributária, vamos, por meio do Imposto Seletivo, desestimular produtos nocivos à saúde.", page: 59 }] },
        { title: "Tratamento tributário justo para pequenas empresas", quotes: [{ quote: "No próximo período, vamos simplificar ainda mais o ambiente de negócios, ampliar o acesso das pequenas empresas às compras governamentais, assegurar tratamento tributário justo na implementação da reforma tributária e estimular uma cultura de inovação tecnológica e inserção exportadora.", page: 57 }] },
        { title: "Fundo Nacional de Desenvolvimento Regional", quotes: [{ quote: "No âmbito da reforma tributária foi criado o Fundo Nacional de Desenvolvimento Regional que será regulamentado no próximo período. Seus recursos permitirão apoiar investimentos e políticas redutoras das desigualdades sociais e regionais, em substituição da predatória guerra tributária do ICMS.", page: 56 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "fomos alvos também de pelo menos três ondas de tarifaços pelo Governo Trump. Esse cenário exigiu um conjunto robusto de medidas, como o Plano Brasil Soberano, que vem dando fôlego às empresas brasileiras, preservando o emprego e a renda do povo brasileiro.", page: 12 },
        { quote: "Retomamos o crescimento da nossa indústria, entre 2023 e 2025, foi a 6ª que mais cresceu no mundo entre as economias do G20, com 3,2% acumulados.", page: 10 },
        { quote: "Nossa diplomacia comercial permitiu abrir 656 novos mercados para os produtos brasileiros e a conclusão de acordos do Mercosul com a União Europeia, EFTA e Singapura.", page: 79 }
      ],
      proposals: [
        { title: "Exportações de maior valor agregado", quotes: [{ quote: "vamos estimular as exportações industriais, ampliar a presença em novos mercados e tornar a pauta exportadora mais concentrada em produtos com maior valor agregado, e aprimorando continuamente os instrumentos de defesa comercial.", page: 52 }] },
        { title: "Comércio exterior alinhado à política industrial", quotes: [{ quote: "A política de comércio exterior deve continuar alinhada aos objetivos das políticas industrial, tecnológica e de inovação. Melhorar a inserção externa da economia brasileira será decisivo para garantir escala e competitividade global.", page: 52 }] },
        { title: "Novos acordos comerciais e abertura de mercados", quotes: [{ quote: "Investiremos em novos acordos comerciais e na abertura de novos mercados para nossos bens e serviços, de modo a continuar enfrentando agressões comerciais e a defender os interesses do país com base nas normas internacionais e no multilateralismo.", page: 80 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "O Brasil chegou às mais baixas taxas de desemprego da história e gerou 8,0 milhões de empregos entre 2023 e junho de 2026.", page: 73 },
        { quote: "Com a retomada da política de valorização do salário-mínimo, asseguramos aumento real para o piso de remuneração todos os anos, permitindo a recuperação de seu poder de compra e impulsionando os rendimentos do trabalho, que chegaram aos maiores patamares reais da história.", page: 73 },
        { quote: "No mercado de trabalho e na previdência, observamos a precarização das relações laborais, a expansão da informalidade e o desamparo de trabalhadores de plataforma, reduzindo o rendimento médio real das famílias.", page: 9 }
      ],
      proposals: [
        { title: "Fim da escala 6x1 e jornada de 40h", quotes: [{ quote: "Manteremos nossa ação junto ao Senado Federal para assegurar o fim da escala 6x1 e a redução da jornada de trabalho para 40 horas, sem redução salarial, nos termos aprovados na Câmara dos Deputados.", page: 75 }] },
        { title: "Combate à pejotização", quotes: [{ quote: "Vamos continuar combatendo a pejotização espúria, com fiscalização, regras que inibam migrações fraudulentas, equiparando responsabilidades administrativas e previdenciárias e fortalecendo a inspeção do trabalho.", page: 74 }] },
        { title: "Regulação do trabalho de plataforma", quotes: [{ quote: "Queremos consolidar um sistema de proteção aos trabalhadores na economia digital e de plataformas, que normatize de forma adequada a atividade empresarial e estabeleça as regras para definir a relação de trabalho, a remuneração, condições de trabalho, proteções e direitos laborais e previdenciários, transparência algorítmica.", page: 75 }] },
        { title: "Equidade salarial de gênero e raça", quotes: [{ quote: "A execução dos Planos de Ação nas empresas com desigualdades identificadas será tornada obrigatória, com metas progressivas de redução das disparidades salariais e ampliação da presença de mulheres, especialmente negras e pessoas com deficiência.", page: 75 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "A inflação registrou o menor índice acumulado de um mandato presidencial na história do país, alcançando uma média anual de 4,6%.", page: 10 },
        { quote: "Herdamos uma taxa Selic elevada e uma política econômica equivocada do governo que levaram ao endividamento elevado das famílias.", page: 12 }
      ],
      proposals: [
        { title: "Redução sustentada dos juros", quotes: [{ quote: "A taxa de juros é hoje o que a inflação foi no passado no Brasil: promove concentração de renda e desorganiza a nossa economia. Para impulsionar ainda mais os investimentos produtivos e o crescimento econômico de longo prazo, vamos criar as condições para uma redução sustentada das taxas de juros, com inflação controlada e assegurando uma política fiscal responsável.", page: 49 }] },
        { title: "Monitorar endividamento das famílias", quotes: [{ quote: "seguiremos monitorando a evolução do endividamento das famílias e das empresas, assegurando a continuidade dos fundos garantidores, mantendo os mecanismos de controle de gastos excessivos em apostas on-line e aprimorando as regras de oferta e responsabilidade na concessão de crédito.", page: 49 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "A retomada do crescimento industrial nesse mandato é resultado do enfrentamento do processo de desindustrialização por meio dos investimentos coordenados por uma nova, legítima e indispensável política industrial, a Nova Indústria Brasil (NIB).", page: 50 },
        { quote: "O setor de biocombustíveis avançou para uma nova fase no Brasil, com financiamento de mais de R$ 13 bilhões entre 2023 e 2025, o que representa mais de 200% comparado ao governo anterior.", page: 67 },
        { quote: "O governo avançou na modernização do setor elétrico, conciliando expansão da infraestrutura, segurança energética, competitividade e modicidade tarifária. Houve forte expansão das fontes solar e eólica na geração elétrica.", page: 63 }
      ],
      proposals: [
        { title: "Ampliar investimento da Petrobras", quotes: [{ quote: "Entendemos que a Petrobras continuará ampliando investimentos em exploração onshore e offshore, para recuperar participação no controle de reservas nacionais", page: 67 }] },
        { title: "Luz do Povo e Gás do Povo (tarifa social via estatais)", quotes: [
          { quote: "O combate à pobreza energética se deu por meio do Luz do Povo, que reviu a política de Tarifa Social de energia, e ampliou a gratuidade da conta de luz para famílias do Cadastro Único com consumo até 80 kWh/mês, com alcance de mais de 60 milhões de pessoas.", page: 65 },
          { quote: "Com o Gás do Povo, o governo substituiu e ampliou o antigo Auxílio Gás, oferecendo recarga gratuita do botijão de GLP de 13 kg para famílias de baixa renda.", page: 66 }
        ] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "O Novo PAC alcançou o objetivo de retomar os investimentos públicos e privados em infraestrutura no País. No ano de 2025, alcançamos o recorde de investimento em infraestrutura, R$ 280 bilhões e devemos fechar 2026 com nova marca ainda maior, R$ 300 bilhões.", page: 53 },
        { quote: "Ao organizar a carteira de investimentos estratégicos, o Novo PAC orientou as expectativas dos agentes públicos e privados e desencadeou um ciclo virtuoso de investimento. Os dados de execução apontam a realização de R$1,3 trilhão, com empreendimentos que chegaram a 99% dos municípios.", page: 53 },
        { quote: "Com uma carteira de projetos de R$ 118 bilhões no Novo PAC, a infraestrutura urbana voltou a receber atenção para assegurar um desenvolvimento urbano inclusivo, com base em cidades mais inteligentes, sustentáveis e resilientes.", page: 44 }
      ],
      proposals: [
        { title: "Nova edição do Novo PAC", quotes: [{ quote: "A nova edição do Novo PAC manterá a articulação dos investimentos públicos e privados em infraestrutura logística, dando sequência a obras públicas e concessões. Manteremos o ritmo nas concessões rodoviárias e intensificaremos as de ferrovias em duas frentes: leilão de novos projetos e repactuação dos contratos existentes.", page: 53 }] },
        { title: "Reduzir déficit de fibra óptica e ampliar 5G", quotes: [{ quote: "Vamos reduzir o déficit de fibra óptica que ainda atinge 11% dos municípios e ampliar o 5G no campo, com prioridade para Norte, Nordeste e periferias.", page: 55 }] },
        { title: "Universalizar saneamento e ampliar transporte de alta capacidade", quotes: [
          { quote: "O governo Lula investiu de forma consistente em saneamento. A partir de 2023, foram R$ 23,3 bilhões para novas obras de abastecimento de água, esgotamento sanitário e gestão de resíduos sólidos [...] Continuaremos, no próximo mandato, a perseguir o objetivo de apoiar estados e municípios a universalizar acesso à água tratada e ao esgotamento sanitário.", page: 46 },
          { quote: "A atual carteira, entre retomada de obras e novos investimentos, resultará em mais 233 km de metrôs, trens e VLTs e outros 296 km de corredores exclusivos de ônibus no padrão BRT.", page: 46 }
        ] },
        { title: "Novos arrendamentos portuários", quotes: [{ quote: "Além disso, daremos prosseguimento à política de novos arrendamentos nos portos organizados, bem como aos processos de concessão da manutenção dos canais de acesso e outros serviços portuários.", page: 54 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [
        { quote: "O Compromisso Nacional Criança Alfabetizada instituiu uma estratégia nacional de cooperação federativa, cujos resultados – 66% das crianças alfabetizadas na idade certa em 2025 - superaram a meta prevista de 64%.", page: 31 },
          { quote: "Na educação, a ausência de uma coordenação federativa integrada, a redução dos recursos e a paralisia de milhares de obras de creches e escolas que abandonaram os municípios à própria sorte, deprimindo a qualidade pedagógica e estimulando o aumento da evasão escolar.", page: 9 }
      ],
      proposals: [
        { title: "Meta de 80% de alfabetização na idade certa", quotes: [{ quote: "Seguiremos com as ações e políticas já pactuadas com os estados e municípios brasileiros para chegarmos à meta de 80% das nossas crianças alfabetizadas na idade certa.", page: 31 }] },
        { title: "Financiamento do ensino integral pelo Fundeb", quotes: [{ quote: "A partir de 2026, com a inclusão, no Fundeb, do financiamento à educação em tempo integral, a expectativa é que a ampliação dessa modalidade se acelere, garantindo melhores condições de aprendizado para os estudantes.", page: 31 }] },
        { title: "Continuidade do Pé-de-Meia", quotes: [{ quote: "Vamos dar continuidade e fortalecer o Pé-de-Meia. Nenhum jovem em situação de pobreza ou vulnerabilidade social no Brasil deve deixar a escola por falta de renda.", page: 32 }] },
        { title: "Expansão dos institutos federais", quotes: [{ quote: "No novo mandato, continuaremos a expansão da nossa rede de institutos federais, priorizando a interiorização, os vazios educacionais, as periferias urbanas e os municípios com baixa oferta de cursos técnicos.", page: 33 }] }
      ]
    },
    seguranca: {
      diagnosis: [
        { quote: "É nesse contexto que deve avançar a construção de um Sistema Nacional de Segurança Pública mais articulado, capaz de combinar medidas imediatas com as reformas constitucionais e legais necessárias para superar o atual modelo fragmentado.", page: 27 },
          { quote: "A segurança pública, sob o pretexto da desregulamentação, facilitou a proliferação descontrolada de armas de fogo, o que fortaleceu estruturas de milícias e facções criminosas nos territórios vulneráveis e ampliou a letalidade das violências domésticas, em especial contra mulheres, crianças e adolescentes.", page: 9 }
      ],
      proposals: [
        { title: "Criação do Ministério da Segurança Pública", quotes: [{ quote: "Uma vez aprovada a PEC da Segurança Pública proposta pelo Executivo, criaremos o Ministério da Segurança Pública para coordenar, em articulação com estados e municípios, a execução das políticas nacionais de segurança pública no âmbito do Sistema Único de Segurança Pública (SUSP).", page: 30 }] },
        { title: "Programa Brasil Contra o Crime Organizado", quotes: [{ quote: "Fortaleceremos o Programa Brasil Contra o Crime Organizado, lançado em maio de 2026 [...] O programa prevê R$ 10 bilhões do Fundo Nacional de Investimento em Infraestrutura Social (FIIS) para estados e municípios realizarem investimentos em equipamentos e infraestrutura.", page: 27 }] },
        { title: "Plano Pena Justa", quotes: [{ quote: "Cumpriremos as metas do Plano Pena Justa e instituiremos o Pacto Nacional de Execução Penal para o Enfrentamento ao Crime Organizado, fortalecendo a governança do sistema prisional e a cooperação entre União, estados e sistema de justiça.", page: 28 }] },
        { title: "Programa Celular Seguro", quotes: [{ quote: "Continuaremos expandindo e aprimorando o Programa Celular Seguro, que já conta com mais de 4 milhões de usuários cadastrados. Com a criação da Base Nacional de Celulares com Restrição, o programa passou a oferecer ao cidadão possibilidade de verificar, antes da compra, se o aparelho possui restrição.", page: 29 }] },
        { title: "Prevenção à violência e proteção da juventude negra", quotes: [{ quote: "Fortaleceremos as políticas de prevenção à violência com foco na proteção da juventude negra e da expansão de programas de mediação comunitária e justiça restaurativa em parceria com estados e municípios.", page: 29 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "Avançamos muito, mas o SUS é um sistema que requer contínua evolução para assegurar, de fato, o direito universal à saúde.", page: 34 },
        { quote: "Começamos a enfrentar, no atual mandato, com o Agora tem Especialistas, um dos maiores desafios da saúde pública brasileira – garantir o acesso à atenção especializada, com qualidade e agilidade.", page: 37 },
        { quote: "O Novo PAC apoiou a estruturação de 336 novos Centros de Atenção Psicossocial - CAPS.", page: 39 }
      ],
      proposals: [
        { title: "Prontuário único do cidadão", quotes: [{ quote: "Vamos acelerar os esforços na consolidação do prontuário único do cidadão, que já avança por meio da Rede Nacional de Dados em Saúde (RNDS).", page: 35 }] },
        { title: "IA para triagem e diagnóstico", quotes: [{ quote: "Vamos acelerar a utilização de inteligência artificial para a triagem, a priorização de casos graves, a regulação por risco clínico e o diagnóstico em áreas com escassez de especialistas.", page: 35 }] },
        { title: "Farmácia Popular 100% gratuito", quotes: [{ quote: "Retomamos o Farmácia Popular, ampliando para 41 o número de medicamentos gratuitos distribuídos. Chegamos, em 2025, a 27,3 milhões de pessoas atendidas [...] O programa será mantido, 100% gratuito.", page: 36 }] },
        { title: "Ampliar Rede de Atenção Psicossocial e CAPS", quotes: [{ quote: "Na saúde mental, ampliaremos os investimentos na Rede de Atenção Psicossocial e nos CAPS, ampliando a atenção a crianças, adolescentes e jovens.", page: 39 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "O mundo contemporâneo vivencia o ressurgimento do unilateralismo, do protecionismo e de conflitos sem precedentes desde a Segunda Guerra Mundial. Em um cenário de tensões geopolíticas crescentes e quebras das regras de convivência internacional, o Brasil deve reafirmar sua soberania e preservar sua capacidade de fazer escolhas políticas e econômicas de forma independente.", page: 77 },
        { quote: "O Brasil voltou a ser ouvido e respeitado no mundo.", page: 79 }
      ],
      proposals: [
        { title: "Autonomia estratégica na defesa", quotes: [{ quote: "Defendemos uma política de defesa baseada na autonomia estratégica, na inovação tecnológica, na integração entre defesa e desenvolvimento e na combinação entre persuasão diplomática e capacidade de dissuasão.", page: 78 }] },
        { title: "Fortalecer a Base Industrial de Defesa", quotes: [{ quote: "fortaleceremos a Base Industrial e Tecnológica de Defesa, de modo a assegurar maior autonomia nacional nesse campo e estimular inovações com impactos positivos sobre o conjunto da economia.", page: 78 }] }
      ]
    },
    corrupcao: {
      diagnosis: [
        { quote: "Propomos ainda enfrentar uma grave distorção na elaboração e gestão do orçamento federal – o atual sistema de emendas parlamentares. No orçamento de 2026, as emendas somaram R$ 50 bilhões, consumindo aproximadamente um quinto dos recursos discricionários do Poder Executivo.", page: 15 },
        { quote: "As emendas impositivas e o orçamento secreto são práticas que mudaram as relações entre o Executivo e o Legislativo, sequestram o orçamento público, dispersam os recursos e reduzem a eficiência alocativa.", page: 16 }
      ],
      proposals: [
        { title: "Aprofundar o Plano de Integridade e Combate à Corrupção", quotes: [{ quote: "Vamos dar sequência às medidas de controle e integridade da administração pública e ao combate à corrupção. O Plano de Integridade e Combate à Corrupção 2025–2027 representa um avanço institucional que será aprofundado, fortalecendo a prevenção, a investigação e a responsabilização de corruptos e corruptores, inclusive os do andar de cima, com pleno respeito à independência das instituições.", page: 18 }] },
        { title: "Modernizar o Portal da Transparência com IA", quotes: [{ quote: "Persistiremos, como no atual mandato, aprimorando as políticas e medidas de transparência. O Portal da Transparência receberá investimentos para evoluir para uma plataforma inteligente baseada em dados abertos e inteligência artificial.", page: 18 }] },
        { title: "Fortalecer a Ouvidoria-Geral da União e a participação social", quotes: [{ quote: "Fortaleceremos ainda mais organismos como a Ouvidoria-Geral da União e as consultas públicas, em laboratórios de inovação cívica, consultas digitais, uso de inteligência artificial, observatórios temáticos, fortalecendo uma nova cultura democrática baseada na participação da sociedade no combate à corrupção.", page: 18 }] },
        { title: "Debater o sistema de emendas parlamentares com a sociedade", quotes: [{ quote: "É preciso que o tema das emendas parlamentares seja debatido com a sociedade.", page: 16 }] }
      ]
    },
    tecnologia: {
      diagnosis: [
        { quote: "Para que o Brasil ocupe posição de liderança em áreas estratégicas como inteligência artificial, transformação digital, biotecnologia, fármacos avançados e transição energética, precisamos avançar nos elos da cadeia de valor da transformação digital.", page: 54 }
      ],
      proposals: [
        { title: "Soberania digital sobre tecnologias e infraestruturas críticas", quotes: [{ quote: "Garantiremos a soberania digital para que o Brasil e os brasileiros tenham capacidade de desenvolver, operar, regular e governar tecnologias estratégicas e as infraestruturas críticas das quais dependem a economia, os serviços públicos, a ciência, a defesa e a democracia.", page: 54 }] },
        { title: "Ecossistema nacional de tecnologia digital, dos data centers à nuvem", quotes: [{ quote: "vamos fomentar o desenvolvimento do ecossistema nacional de tecnologia digital, desde a cadeia de datacenters até os serviços de nuvem, com destaque para o fortalecimento da inteligência artificial desenvolvida por empresas brasileiras.", page: 54 }] },
        { title: "Infraestrutura computacional soberana, com supercomputadores nacionais", quotes: [{ quote: "Vamos avançar numa infraestrutura computacional soberana, com supercomputadores desenvolvidos e operados por instituições nacionais.", page: 54 }] },
        { title: "Contrapartidas para data centers instalados no país", quotes: [{ quote: "a instalação dos datacenters em solo brasileiro deve prever contrapartidas de conteúdo local e capacidade computacional para o mercado interno.", page: 55 }] },
        { title: "Modelos de linguagem em português, treinados em dados nacionais", quotes: [{ quote: "Vamos desenvolver e sustentar modelos de linguagem em português e outras línguas, voltados aos problemas do País, apoiados numa plataforma nacional de dados para treinamento e avaliação.", page: 55 }] },
        { title: "Difusão da IA no setor produtivo", quotes: [{ quote: "Vamos acelerar a difusão da inteligência artificial no setor produtivo, com foco em agro, saúde e serviços financeiros.", page: 55 }] },
        { title: "Transparência algorítmica e rastreabilidade de conteúdo sintético", quotes: [{ quote: "Vamos consolidar a transparência algorítmica e a rastreabilidade de conteúdo sintético, ancoradas no Centro Nacional de Transparência Algorítmica – porque democracia não convive com decisão automatizada que ninguém pode examinar.", page: 55 }] },
        { title: "Fibra óptica e 5G no campo e nas periferias", quotes: [{ quote: "Vamos reduzir o déficit de fibra óptica que ainda atinge 11% dos municípios e ampliar o 5G no campo, com prioridade para Norte, Nordeste e periferias.", page: 55 }] },
        { title: "Direito autoral e regulamentação da IA para remunerar quem cria", quotes: [{ quote: "Trabalharemos pela aprovação de lei do direito autoral em ambiente digital e a regulamentação da inteligência artificial, para que músicos, autores e artistas sejam pagos quando as plataformas usarem conteúdo brasileiro.", page: 42 }] },
        { title: "Portal da Transparência movido a dados abertos e IA", quotes: [{ quote: "O Portal da Transparência receberá investimentos para evoluir para uma plataforma inteligente baseada em dados abertos e inteligência artificial.", page: 18 }] }
      ]
    }

  },
  direitosBemEstar: {
      mulheres: {
        diagnosis: [
          { quote: "Enquanto as mulheres continuarem sendo discriminadas e vítimas de violência, o Brasil não será o país que queremos.", page: 21 }
        ],
        proposals: [
          { title: "Ampliar proteção, autonomia econômica e direitos reprodutivos", quotes: [{ quote: "É preciso ampliar as políticas de proteção às mulheres, combater o machismo, o sexismo e o feminicídio, promover a autonomia econômica, assegurar igualdade de oportunidades e garantir os direitos sexuais e reprodutivos.", page: 21 }] },
          { title: "Pacto de Enfrentamento ao Feminicídio como guia central", quotes: [{ quote: "O Pacto de Enfrentamento ao Feminicídio permanecerá como guia central de nossa estratégia de enfrentamento à violência contra mulheres.", page: 21 }, { quote: "Vamos dar sequência ao Pacto, ampliando a rede de proteção às mulheres – concluiremos as 30 Casas da Mulher Brasileira e os 15 Centros de Referência da Mulher Brasileira.", page: 21 }] },
          { title: "Salas Lilás e kits de monitoramento de agressores", quotes: [{ quote: "Ampliaremos as Salas Lilás e vamos adquirir e distribuir aos Estados kits para aprimorar o monitoramento de agressores. Seguiremos fomentando a capacitação das forças de segurança para qualificar o atendimento às mulheres vítimas de violência e a punição aos que infligirem a violência.", page: 21 }] },
          { title: "Lei da Igualdade Salarial com planos de ação obrigatórios", quotes: [{ quote: "A Lei da Igualdade Salarial, que aprovamos em 2023, continuará orientando nossas ações para promoção do trabalho das mulheres.", page: 21 }, { quote: "A execução dos Planos de Ação nas empresas com desigualdades identificadas será tornada obrigatória, com metas progressivas de redução das disparidades salariais e ampliação da presença de mulheres, especialmente negras e pessoas com deficiência.", page: 75 }] },
          { title: "Crédito e qualificação: Pronaf para agricultoras e Mulheres Mil", quotes: [{ quote: "Persistiremos buscando assegurar políticas que apoiem as mulheres em sua inserção no mundo do trabalho, com linhas de crédito mais favorecidas para agricultoras e extrativistas no âmbito do Pronaf; com programas de qualificação específicos, como o Mulheres Mil, que foi retomado no atual mandato", page: 21 }] }
        ]
      },
      outros: {
        diagnosis: [
          { quote: "Um país em que todas as pessoas, independentemente de origem, raça, etnia, gênero, orientação sexual, idade, crença ou condição social, possam desenvolver plenamente seu potencial e viver com dignidade. Um Brasil comprometido com a dignidade humana, democrático e inclusivo, que combata todas as formas de discriminação e assegure os direitos das mulheres, da população negra, dos povos indígenas e quilombolas, da população LGBTQIAP+, das pessoas com deficiência, dos povos do campo, das águas e das florestas, com amplo respeito às liberdades e aos direitos humanos.", page: 26 },
          { quote: "Voltamos a assegurar aos povos e comunidades tradicionais – indígenas, quilombolas e ribeirinhos – seus direitos, inclusive em relação a seus territórios.", page: 19 },
          { quote: "A criação do inédito Ministério dos Povos Indígenas retomou o compromisso do Estado com os povos indígenas. Homologamos 20 novas terras indígenas, somando cerca de 3,2 milhões de hectares de terras protegidas em 11 estados.", page: 20 },
          { quote: "Construímos o portfólio mais robusto de políticas de proteção animal da história recente do Brasil. Criamos, em 2023, o inédito Departamento de Proteção, Defesa e Direitos Animais, hoje vinculado à Secretaria Nacional de Biodiversidade, Florestas e Direitos Animais.", page: 69 }
        ],
        proposals: [
          { title: "Combate ao racismo e Estatuto da Igualdade Racial", quotes: [
            { quote: "Manteremos o combate ao racismo no centro de nossa estratégia de desenvolvimento, pois não é possível compreender nem superar as desigualdades brasileiras sem enfrentar a questão racial como dimensão estruturante da sociedade.", page: 19 },
            { quote: "Vamos continuar engajados na implementação das deliberações da 5ª Conferência Nacional de Promoção da Igualdade Racial (V CONAPIR), realizada em 2025, após um intervalo de sete anos. Avançaremos ainda mais na regulamentação do Estatuto da Igualdade Racial para a consolidação da equidade como política de Estado.", page: 19 }
          ] },
          { title: "Proteção territorial de povos indígenas e quilombolas", quotes: [
            { quote: "Reafirmamos igualmente o compromisso com a proteção dos povos indígenas, de seus territórios, culturas e modos de vida. Persistiremos, garantindo proteção a seus territórios, com ações para demarcação e desintrusão de terras sempre que necessárias.", page: 20 },
            { quote: "Temos orgulho da retomada do processo de titulação de territórios quilombolas, que permitiu, desde 2023, a expedição de 65 titulações e assinatura de 72 decretos de desapropriação por interesse social, recorde histórico. Vamos dar continuidade a este processo de reconhecimento do direito ao território, buscando acelerar os procedimentos e garantir que sejam acompanhados de políticas de desenvolvimento territorial.", page: 20 }
          ] },
          { title: "Inclusão e acessibilidade para pessoas com deficiência", quotes: [{ quote: "Continuaremos promovendo ambientes inclusivos, com a aplicação rigorosa da legislação de acessibilidade. A fiscalização do cumprimento das cotas de contratação de pessoas com deficiência no mercado de trabalho será fortalecida, ampliando a política de inclusão econômica.", page: 23 }] },
          { title: "Políticas de Estado para diversidade de gênero e população LGBTQIAP+", quotes: [{ quote: "Continuaremos a planejar e construir políticas e ações levando em conta as dimensões de gênero, identidade, orientação sexual, étnico-raciais e classe social assim como as demais desigualdades sociais, de modo a garantir capacidade de o Estado atender, de forma adequada, justa e inclusiva, às pessoas LGBTQIAP+ e todas as suas especificidades.", page: 23 }] },
          { title: "Proteção da infância e combate à pobreza infantil", quotes: [{ quote: "Continuaremos buscando ampliar e fortalecer as políticas para nossas crianças, por meio do enfrentamento da pobreza infantil, da garantia de acesso às políticas públicas e do direito ao brincar.", page: 24 }] },
          { title: "Ampliação da proteção e do bem-estar animal", quotes: [
            { quote: "A proteção ambiental continuará caminhando ao lado da defesa dos direitos animais. Vamos ampliar o ProPatinhas, fortalecendo as caravanas de castração, e dar continuidade ao SinPatinhas, cadastro nacional de cães e gatos.", page: 71 },
            { quote: "Seguiremos fortalecendo o combate aos maus-tratos, com penas que assegurem que essas práticas não se repitam, avançando nesta agenda com prioridade e participação social.", page: 72 }
          ] }
        ]
      }
  },
  // Trechos em que o plano comenta o governo Jair Bolsonaro (2019–2022) e os
  // governos do PT. Mesma regra do resto do arquivo: citação literal do PDF,
  // com a página. Alimenta a seção "Balanço dos Governos".
  governments: {
    "jair-bolsonaro": [
      { quote: "Essa destruição começou com o golpe contra a presidenta Dilma Rousseff e se aprofundou com os governos Temer e Bolsonaro. O resultado foi uma verdadeira herança maldita, marcada por uma economia combalida, políticas públicas destruídas, revogação de direitos, aumento das desigualdades, precarização do trabalho, fortes expressões de violência social e política e aviltamento da soberania nacional.", page: 8 },
      { quote: "Na tentativa de se reeleger, Bolsonaro dilapidou os cofres públicos, deu calote em precatórios e armou uma bomba fiscal para estados e municípios com a desoneração artificial de combustíveis. Além disso, delegou parte expressiva do orçamento discricionário da União ao chamado orçamento secreto.", page: 8 },
      { quote: "De forma ainda mais irresponsável, a gestão anterior promoveu uma flexibilização eleitoreira das políticas sociais, com prejuízos ao desenho e à efetividade dos programas. O retrocesso mais visível expressou-se na volta do Brasil ao Mapa da Fome da ONU e na fila do osso.", page: 8 },
      { quote: "Manteremos nossos esforços para a elevação da qualidade de vida e da preservação dos direitos de todos os povos, com atenção especial aos yanomamis, submetidos na gestão anterior a um verdadeiro genocídio", page: 20 },
      { quote: "Retomamos obras do MCMV que estavam paralisadas, algumas desde 2014, por falta de apoio do governo anterior.", page: 45 },
      { quote: "Com o Periferia Viva, voltamos a investir em urbanização de favelas e em regularização fundiária, abandonados no governo anterior.", page: 45 },
      { quote: "O golpe contra a Presidenta Dilma e a reforma previdenciária do governo Bolsonaro promoveram uma desorganização que ainda estamos enfrentando.", page: 77 }
    ],
    "pt": [
      { quote: "O governo Lula III consolidou um legado de combate estruturante às desigualdades, aliando responsabilidade social, fiscal e ambiental. Fizemos uma política econômica assentada em cinco pilares: (i) a retomada do crescimento econômico e do emprego; (ii) o combate às desigualdades e a promoção da justiça social; (iii) inflação controlada e responsabilidade fiscal; (iv) a modernização produtiva, com a neoindustrialização e a transformação ecológica como eixos estruturantes; e (v) a reabertura do Brasil ao mundo, assegurando a soberania nacional.", page: 47 },
      { quote: "o atual mandato do Presidente Lula recriou os conselhos de políticas públicas, retomou as conferências nacionais – foram realizadas 28 conferências desde 2023 – e instituiu o Sistema de Participação Social.", page: 15 },
      { quote: "O governo do presidente Lula adotou, desde 2023, políticas e medidas para promover uma gestão pública eficiente e inovadora, orientada para a geração de valor público e redução das desigualdades.", page: 16 },
      { quote: "Uma marca de todos os mandatos do Presidente Lula é o financiamento ao ensino superior, fundamental para a formação e produção de conhecimento e condição para a soberania nacional e para a democracia. O orçamento das universidades, para custeio e para investimento, foi restaurado.", page: 33 },
      { quote: "Com Lula, o SUS voltou a estar ao lado do povo brasileiro. A atenção básica, como eixo estruturante do sistema, foi apoiada na expansão de serviços e na modernização e ampliação da infraestrutura.", page: 34 },
      { quote: "O governo Lula reposicionou a cultura, restabelecendo o diálogo com a sociedade e fortalecendo a cooperação federativa. A recriação do Ministério da Cultura foi um dos passos fundamentais para reafirmar a cultura como um direito fundamental e vetor do desenvolvimento econômico e social.", page: 40 },
      { quote: "O atual governo Lula reconstruiu o papel do Estado nas políticas de esporte. Além da recriação do Ministério, com capacidade para formular e implementar políticas públicas eficazes, retomou políticas e reorganizou a legislação do setor, com a aprovação da Nova Lei de Incentivo ao Esporte e a Lei Geral do Esporte.", page: 43 },
      { quote: "Batemos o recorde de concessões, quadruplicando o número de leilões de rodovias em relação ao governo anterior e alcançando 46% de todas as concessões rodoviárias já realizadas no país.", page: 53 }
    ]
  }
};
