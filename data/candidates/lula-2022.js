// ============================================================================
// LULA (PT) — ELEIÇÃO DE 2022. Citações do plano "Diretrizes para o Programa
// de Reconstrução e Transformação do Brasil", proposta de governo registrada
// no TSE em agosto de 2022 (ver data/sources.js). O documento é uma lista de
// 121 diretrizes numeradas; as citações preservam a numeração quando ela faz
// parte do trecho.
//
// Esta é a candidatura de 2022, não a de 2026: os dados de `basics` (idade,
// foto, coligação) são os daquela eleição. O Lula de 2026 está em
// data/candidates/lula.js, com outro plano.
//
// Todo texto em `quote` é TRANSCRIÇÃO LITERAL do PDF oficial — não paráfrase.
// `title` em cada proposta é redigido por nós só para nomear o card.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["lula-2022"] = {
  basics: {
    name: "Luiz Inácio Lula da Silva",
    ballotName: "Lula",
    election: "2022",
    party: "PT",
    number: 13,
    coalition: "Coligação Brasil da Esperança (Federação Brasil da Esperança — PT/PCdoB/PV, Federação PSOL Rede, PSB, Solidariedade, Avante, Agir, Pros)",
    vp: "Geraldo Alckmin (PSB)",
    initials: "LS",
    photo: "sources/lula-2022.jpg",
    birthDate: "1945-10-06"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "Vamos recolocar os pobres e os trabalhadores no orçamento. Para isso, é preciso revogar o teto de gastos e rever o atual regime fiscal brasileiro, atualmente disfuncional e sem credibilidade.", page: 10 }
      ],
      proposals: [
        { title: "Revogar o teto de gastos e construir um novo regime fiscal", quotes: [{ quote: "Construiremos um novo regime fiscal, que disponha de credibilidade, previsibilidade e sustentabilidade. Ainda, que possua flexibilidade e garanta a atuação anticíclica, que promova a transparência e o acompanhamento da relação custo-benefício das políticas públicas", page: 10 }] },
        { title: "Investimento social e infraestrutura dentro da regra fiscal", quotes: [{ quote: "que reconheça a importância do investimento social, dos investimentos em infraestrutura e que esteja vinculado à criação de uma estrutura tributária mais simples e progressiva. Vamos colocar os pobres outra vez no orçamento e os super-ricos pagando impostos.", page: 11 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "Queremos, também, corrigir um mecanismo que historicamente transfere renda das camadas mais pobres para as camadas de maior renda da sociedade: a sonegação de impostos.", page: 11 }
      ],
      proposals: [
        { title: "Reforma tributária com os pobres pagando menos e os ricos mais", quotes: [{ quote: "Proporemos uma reforma tributária solidária, justa e sustentável, que simplifique tributos e em que os pobres paguem menos e os ricos paguem mais.", page: 11 }] },
        { title: "Imposto de renda sobre os muito ricos", quotes: [{ quote: "Vamos fazer os muito ricos pagarem imposto de renda, utilizando os recursos arrecadados para investir de maneira inteligente em programas e projetos com alta capacidade de induzir o crescimento, promover a igualdade e gerar ganhos de produtividade.", page: 11 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "A orientação passiva para a política cambial dos últimos anos acentuou a volatilidade da moeda brasileira em relação ao dólar com consequências perversas para o índice de preços.", page: 11 }
      ],
      proposals: [
        { title: "Política cambial para reduzir a volatilidade do real", quotes: [{ quote: "Reduzir a volatilidade da moeda brasileira por meio da política cambial também é uma forma de amenizar os impactos inflacionários de mudanças no cenário externo.", page: 11 }] },
        { title: "Integração regional e novas diretrizes para o comércio exterior", quotes: [{ quote: "É fortalecer novamente o Mercosul, a Unasul, a Celac e os Brics. É estabelecer livremente as parcerias que forem as melhores para o país, sem submissão a quem quer que seja.", page: 18 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "O desemprego e a subutilização da força de trabalho seguem extremamente elevados, enquanto a precarização avança e a indústria definha.", page: 2 }
      ],
      proposals: [
        { title: "Nova legislação trabalhista, revogando os marcos regressivos", quotes: [{ quote: "O novo governo irá propor, a partir de um amplo debate e negociação, uma nova legislação trabalhista de extensa proteção social a todas as formas de ocupação, de emprego e de relação de trabalho, com especial atenção aos autônomos, aos que trabalham por conta própria, trabalhadores e trabalhadoras domésticas, teletrabalho e trabalhadores em home office, mediados por aplicativos e plataformas, revogando os marcos regressivos da atual legislação trabalhista", page: 4 }] },
        { title: "Retomar a política de valorização do salário mínimo", quotes: [{ quote: "Retomaremos a política de valorização do salário mínimo visando à recuperação do poder de compra de trabalhadores, trabalhadoras, e dos beneficiários e beneficiárias de políticas previdenciárias e assistenciais, essencial para dinamizar a economia, em especial dos pequenos municípios.", page: 4 }] },
        { title: "Bolsa Família renovado rumo a uma renda básica de cidadania", quotes: [{ quote: "Um programa Bolsa Família renovado e ampliado precisa ser implantado com urgência para garantir renda compatível com as atuais necessidades da população.", page: 5 }] },
        { title: "Reconstrução da seguridade e da previdência social", quotes: [{ quote: "Promoveremos a reconstrução da seguridade e da previdência social, para ampla inclusão dos trabalhadores e trabalhadoras, por meio da superação das medidas regressivas e do desmonte promovido pelo atual governo.", page: 4 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "O atual governo renunciou ao uso de instrumentos importantes no combate à inflação, a começar pela política de preços de combustíveis, além do abandono de políticas setoriais indutoras do aumento da produção de bens críticos. Em contrapartida, implementa uma política de juros altos, que freia a recuperação econômica e agrava o desemprego, mas com pouco impacto na inflação, gerada basicamente por um choque de custos.", page: 11 }
      ],
      proposals: [
        { title: "Combater a carestia de alimentos, combustíveis e energia", quotes: [{ quote: "É tarefa prioritária coordenar a política econômica para combater a inflação e enfrentar a carestia, em particular a dos alimentos e a dos combustíveis e eletricidade.", page: 11 }] },
        { title: "Abrasileirar o preço dos combustíveis", quotes: [{ quote: "Os ganhos do pré-sal não podem se esvair por uma política de preços internacionalizada e dolarizada: é preciso abrasileirar o preço dos combustíveis e ampliar a produção nacional de derivados, com expansão do parque de refino.", page: 11 }] },
        { title: "Renegociar as dívidas das famílias e das pequenas empresas", quotes: [{ quote: "Como a renda familiar dos brasileiros e brasileiras desabou e o endividamento das famílias explodiu, já são mais de 66 milhões de pessoas inadimplentes, vamos promover a renegociação das dívidas das famílias e das pequenas e médias empresas por meio dos bancos públicos", page: 12 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "Setores estratégicos do patrimônio público são privatizados e desnacionalizados, bancos públicos e empresas de fomento ao desenvolvimento são destruídos, num momento em que o quadro na infraestrutura é desolador.", page: 2 }
      ],
      proposals: [
        { title: "Oposição à privatização da Petrobras e da PPSA", quotes: [{ quote: "Opomo-nos fortemente à privatização, em curso, da Petrobras e da Pré-Sal Petróleo S.A. (PPSA). A Petrobras terá seu plano estratégico e de investimentos orientados para a segurança energética, a autossuficiência nacional em petróleo e derivados, a garantia do abastecimento de combustíveis no país.", page: 14 }] },
        { title: "Oposição à privatização da Eletrobras e dos Correios", quotes: [{ quote: "Opomo-nos à privatização da Eletrobras, maior empresa de geração de energia elétrica da América Latina, responsável por metade das linhas de transmissão do país.", page: 14 }, { quote: "Opomo-nos à privatização dos Correios, uma empresa com importante função social, logística e capilaridade em todo o território nacional.", page: 15 }] },
        { title: "Fortalecer os bancos públicos de fomento", quotes: [{ quote: "Fortaleceremos também os bancos públicos – como BB, CEF, BNDES, BNB, BASA e a FINEP – em sua missão de fomento ao desenvolvimento econômico, social e ambiental e na oferta de crédito a longo prazo e garantias em projetos estruturantes", page: 15 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "Retomaremos obras importantes que foram paralisadas pelo atual governo, que não faz, mas tenta se apropriar de obras que recebeu praticamente concluídas.", page: 14 }
      ],
      proposals: [
        { title: "Retomada imediata do investimento em infraestrutura", quotes: [{ quote: "É preciso garantir a modernização e a ampliação da infraestrutura de logística de transporte, social e urbana, com um vigoroso programa de investimentos públicos. Vamos assegurar a imediata retomada do investimento em infraestrutura, fundamental para a volta do crescimento e decisivo para reduzir os custos de produção.", page: 13 }] },
        { title: "Investimento privado por crédito, concessões e parcerias", quotes: [{ quote: "O investimento privado também será parte importante da reconstrução do Brasil e será estimulado por meio de créditos, concessões, parcerias e garantias.", page: 14 }] },
        { title: "Direito à água e universalização do saneamento", quotes: [{ quote: "É importante garantir o direito à água e ao saneamento, por meio do reconhecimento da responsabilidade das esferas administrativas federal, estaduais e municipais na universalização dos serviços de saneamento básico à população brasileira e garantir a atuação das entidades públicas e das empresas estatais na prestação dos serviços de saneamento básico.", page: 14 }] },
        { title: "Reforma urbana e direito à cidade", quotes: [{ quote: "Retomaremos as políticas de garantia do direito à cidade, combatendo desigualdades territoriais, em direção a uma ampla reforma urbana, reduzindo as desigualdades socioterritoriais e promovendo a transição ecológica das cidades por meio de investimentos integrados em infraestrutura de transporte público, habitação, saneamento básico e equipamentos sociais.", page: 7 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [
        { quote: "Educação, Ciência e Tecnologia sofrem ameaças, cortes de investimentos e mudanças regressivas, enquanto a Cultura é perseguida e até criminalizada.", page: 2 },
        { quote: "O nosso objetivo é resgatar e fortalecer os princípios do projeto democrático de educação, que foi desmontado e aviltado.", page: 5 }
      ],
      proposals: [
        { title: "Retomar as metas do Plano Nacional de Educação", quotes: [{ quote: "O país voltará a investir em educação de qualidade, no direito ao conhecimento e no fortalecimento da educação básica, da creche à pós-graduação, coordenando ações articuladas e sistêmicas entre a União, Estados, Distrito Federal e Municípios, retomando as metas do Plano Nacional de Educação e revertendo os desmontes do atual governo.", page: 5 }] },
        { title: "Programa de recuperação da aprendizagem perdida na pandemia", quotes: [{ quote: "afirmamos o compromisso do novo governo com um programa de recuperação educacional concomitante a educação regular, para que possam superar esse grave déficit de aprendizagem.", page: 5 }] },
        { title: "Educação pública universal, gratuita e laica, com valorização dos profissionais", quotes: [{ quote: "preciso fortalecer a educação pública universal, democrática, gratuita, de qualidade, socialmente referenciada, laica e inclusiva, com valorização e reconhecimento público de seus profissionais.", page: 6 }] }
      ]
    },
    seguranca: {
      diagnosis: [
        { quote: "O país precisa de uma nova política sobre drogas, intersetorial e focada na redução de riscos, na prevenção, tratamento e assistência ao usuário. O atual modelo bélico de combate ao tráfico será", page: 7 }
      ],
      proposals: [
        { title: "Prevenção e ação policial qualificada, com participação social", quotes: [{ quote: "A segurança pública é um direito fundamental e sua conservação e promoção se dará por meio da implementação de políticas públicas interfederativas e intersetoriais pautadas pela valorização da vida e da integridade física, pela articulação entre prevenção e uso qualificado da ação policial, pela transparência e pela participação social.", page: 7 }] },
        { title: "Prioridade a crimes contra mulheres, juventude negra e LGBTQIA+", quotes: [{ quote: "As políticas de segurança pública contemplarão ações de atenção às vítimas e priorizarão a prevenção, a investigação e o processamento de crimes e violências contra mulheres, juventude negra e população LGBTQIA+.", page: 7 }] },
        { title: "Implementar e aprimorar o Sistema Único de Segurança Pública", quotes: [{ quote: "O governo federal vai implementar e aprimorar o Sistema Único de Segurança Pública, modernizando estratégias, instrumentos e mecanismos de governança e gestão.", page: 7 }] },
        { title: "Trocar o modelo bélico por inteligência e investigação", quotes: [{ quote: "substituído por estratégias de enfrentamento e desarticulação das organizações criminosas, baseadas em conhecimento e informação, com o fortalecimento da investigação e da inteligência.", page: 8 }] },
        { title: "Valorização e qualificação do profissional de segurança", quotes: [{ quote: "A valorização do profissional de segurança pública será um princípio orientador de todas as políticas públicas da área.", page: 7 }, { quote: "A melhoria da qualificação técnica dos policiais será uma busca permanente a ser alcançada, dentre outras estratégias, pela reformulação dos processos de seleção, formação e capacitação continuada, pela atualização de doutrinas e pela padronização de procedimentos operacionais.", page: 8 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "A saúde, o direito à vida e o Sistema Único de Saúde (SUS) têm sido tratados com descaso pelo atual governo. Faltam investimentos, ações preventivas, profissionais de saúde, consultas, exames e medicamentos.", page: 6 }
      ],
      proposals: [
        { title: "Retomar o atendimento represado e o programa de vacinação", quotes: [{ quote: "É urgente dar condições ao SUS para retomar o atendimento às demandas que foram represadas durante a pandemia, atender as pessoas com sequelas da covid-19 e retomar o reconhecido programa nacional de vacinação.", page: 6 }] },
        { title: "Retomar o Mais Médicos e o Farmácia Popular", quotes: [{ quote: "Reafirmamos o nosso compromisso com o fortalecimento do SUS público e universal, o aprimoramento da sua gestão, a valorização e formação de profissionais de saúde, a retomada de políticas como o Mais Médicos e o Farmácia Popular, bem como a reconstrução e fomento ao Complexo Econômico e Industrial da Saúde.", page: 6 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "No entanto, nossa soberania e nossa democracia vêm sendo constantemente atacadas pela política irresponsável e criminosa do atual governo.", page: 17 }
      ],
      proposals: [
        { title: "Retomar a política externa ativa e altiva", quotes: [{ quote: "Defender nossa soberania exige recuperar a política externa ativa e altiva que nos alçou à condição de protagonista global. O Brasil era um país soberano, respeitado no mundo inteiro.", page: 17 }] },
        { title: "Cooperação Sul-Sul e integração da América do Sul", quotes: [{ quote: "Defender a nossa soberania é defender a integração da América do Sul, da América Latina e do Caribe, com vistas a manter a segurança regional e a promoção de um desenvolvimento integrado de nossa região", page: 18 }] },
        { title: "Direitos dos brasileiros que vivem no exterior", quotes: [{ quote: "Nosso governo vai defender os direitos de brasileiras e brasileiros também no exterior. São milhões de pessoas que trabalham, estudam e vivem fora do país e contribuem para a economia e desenvolvimento do Brasil.", page: 18 }] },
        { title: "Forças Armadas estritamente nos limites da Constituição", quotes: [{ quote: "As Forças Armadas atuarão na defesa do território nacional, do espaço aéreo e do mar territorial, cumprindo estritamente o que está definido pela Constituição.", page: 18 }] }
      ]
    },
    corrupcao: {
      diagnosis: [
        { quote: "Os nossos governos populares instituíram, de forma inédita no Brasil, uma política de Estado de prevenção e combate à corrupção e de promoção da transparência e da integridade pública.", page: 19 }
      ],
      proposals: [
        { title: "Restabelecer os instrumentos de combate à corrupção com devido processo legal", quotes: [{ quote: "O nosso governo vai assegurar, com base nos princípios do Estado Democrático de Direito, que os instrumentos de combate à corrupção sejam restabelecidos, respeitando o devido processo legal, de modo a impedir a violação dos direitos e garantias fundamentais e a manipulação política.", page: 19 }] },
        { title: "Reabrir o governo e cumprir a Lei de Acesso à Informação", quotes: [{ quote: "Vamos reabrir o governo, resgatar a transparência e garantir o cumprimento da Lei de Acesso à Informação.", page: 19 }] },
        { title: "Reforma do Estado com transparência nos processos decisórios", quotes: [{ quote: "É preciso uma reforma do Estado, que traga mais transparência aos processos decisórios, no trato da coisa pública de modo geral, direcionando a esfera pública e a ação governamental para as entregas públicas que realizem os direitos constitucionais.", page: 20 }] }
      ]
    },
    tecnologia: {
      diagnosis: [
        { quote: "A Ciência, Tecnologia e Inovação (CTI) tem um caráter estratégico e central para o Brasil se transformar em um país efetivamente desenvolvido e soberano, no caminho da sociedade do conhecimento.", page: 15 }
      ],
      proposals: [
        { title: "Recompor FNDCT, CNPq e Capes", quotes: [{ quote: "é necessário recompor o sistema nacional de fomento do desenvolvimento científico e tecnológico, via fundos e agências públicas como o FNDCT, o CNPq e a CAPES.", page: 15 }] },
        { title: "Inteligência artificial, biotecnologia e nanotecnologia na economia", quotes: [{ quote: "será necessário também uma estratégia econômica que contemple junto do fomento à ciência, à tecnologia e à inovação, os elementos da Economia Criativa e da economia da cultura e que acelere a transição digital, o uso da inteligência artificial, a biotecnologia e a nanotecnologia, em processos produtivos sofisticados com maior valor agregado.", page: 15 }] },
        { title: "Internet de qualidade em todo o território", quotes: [{ quote: "Iniciaremos um grande processo de transformação digital no país, assegurando internet de qualidade em todo território e para todos e todas. Garantiremos também o direito à inclusão no ambiente da conectividade.", page: 15 }] },
        { title: "Regulação das plataformas digitais e proteção de dados", quotes: [{ quote: "É preciso, ainda, fortalecer a legislação, dando mais instrumentos ao Sistema de Justiça para atuação junto às plataformas digitais no sentido de garantir a neutralidade da rede, a pluralidade, a proteção de dados e coibir a propagação de mentiras e mensagens antidemocráticas ou de ódio.", page: 20 }] }
      ]
    }
  },
  direitosBemEstar: {
    mulheres: {
      diagnosis: [
        { quote: "O Brasil não será o país que queremos enquanto mulheres continuarem a ser discriminadas e submetidas à violência pelo fato de serem mulheres.", page: 8 },
        { quote: "Devemos enfrentar a realidade que faz a pobreza ter o “rosto das mulheres”, principalmente “das negras”, lhes assegurando a autonomia.", page: 8 }
      ],
      proposals: [
        { title: "Equidade de direitos e salários iguais para trabalhos iguais", quotes: [{ quote: "Vamos construir um país que caminhe rumo à equidade de direitos, salários iguais para trabalhos iguais em todas as profissões e a promoção das mulheres na ciência, nas artes, na representação política, na gestão pública e no empreendedorismo.", page: 8 }] },
        { title: "Proteção às vítimas e fim da impunidade nos feminicídios", quotes: [{ quote: "Investiremos em programas para proteger vítimas, seus filhos e filhas, e assegurar que não haja a impunidade de agressões e feminicídios.", page: 8 }] },
        { title: "Saúde integral da mulher no SUS", quotes: [{ quote: "Com políticas de saúde integral, vamos fortalecer no SUS as condições para que todas as mulheres tenham acesso à prevenção de doenças e que sejam atendidas segundo as particularidades de cada fase de suas vidas.", page: 8 }] }
      ]
    },
    envelhecimento: {
      diagnosis: [],
      proposals: [
        { title: "Envelhecimento ativo com uma rede de cuidados", quotes: [{ quote: "Atuaremos para construir políticas que assegurem os direitos dos idosos com envelhecimento ativo, saudável e participativo, com a ampliação e fortalecimento dos serviços necessários por meio de uma rede de cuidados.", page: 10 }] }
      ]
    },
    outros: {
      diagnosis: [
        { quote: "Mulheres, negros e jovens padecem com o desmonte de políticas públicas, de modo a reforçar discriminações históricas. Populações indígenas, quilombolas, povos e comunidades tradicionais têm conquistas atacadas sem trégua.", page: 2 }
      ],
      proposals: [
        { title: "Igualdade racial e combate ao racismo estrutural", quotes: [{ quote: "É imprescindível a implementação de um amplo conjunto de políticas públicas de promoção da igualdade racial e de combate ao racismo estrutural, indissociáveis do enfrentamento da pobreza, da fome e das desigualdades, que garantam ações afirmativas para a população negra e o seu desenvolvimento integral nas mais diversas áreas.", page: 8 }] },
        { title: "Continuidade e ampliação das cotas sociais e raciais", quotes: [{ quote: "Asseguraremos a continuidade das políticas de cotas sociais e raciais na educação superior e nos concursos públicos federais, bem como sua ampliação para outras políticas públicas.", page: 8 }] },
        { title: "Proteção dos territórios de povos indígenas e quilombolas", quotes: [{ quote: "Estamos comprometidos com a proteção dos direitos e dos territórios dos povos indígenas, quilombolas e populações tradicionais. Temos o dever de assegurar a posse de suas terras, impedindo atividades predatórias, que prejudiquem seus direitos.", page: 8 }] },
        { title: "Direitos e cidadania da população LGBTQIA+", quotes: [{ quote: "Propomos políticas que garantam os direitos, o combate à discriminação e o respeito à cidadania LGBTQIA+ em suas diferentes formas de manifestação e expressão.", page: 9 }] },
        { title: "Acessibilidade e autonomia das pessoas com deficiência", quotes: [{ quote: "Um Brasil inclusivo e acessível, com a garantia de direitos e respeito a pessoas com deficiência é uma de nossas metas. Para tanto é preciso assegurar às pessoas com deficiência e suas famílias o acesso à saúde, à educação, à cultura e ao esporte, e a inserção no mundo do trabalho.", page: 9 }] },
        { title: "Prioridade absoluta aos direitos da criança e do adolescente", quotes: [{ quote: "Nosso governo dará prioridade absoluta à promoção, proteção e defesa dos direitos da criança e do adolescente, erradicando a fome, combatendo a miséria, garantindo perspectivas para as crianças e adolescentes, enfrentando a exploração do trabalho infantil, a violência, a exploração sexual e todas as formas de preconceitos e discriminações", page: 9 }] },
        { title: "Proteção e garantia dos direitos dos animais", quotes: [{ quote: "Nosso compromisso com a afirmação de direitos é amplo e inclui a proteção e a garantia dos direitos dos animais por meio de campanhas educativas e o apoio a iniciativas públicas e da sociedade que tenham eficácia no cuidado animal.", page: 10 }] }
      ]
    }
  },
  governments: {
    "jair-bolsonaro": [
      { quote: "Mais do que nunca, o Brasil precisa resgatar a esperança na reconstrução e na transformação de um país devastado por um processo de destruição que nos trouxe de volta a fome, o desemprego, a inflação, o endividamento e o desalento das famílias", page: 2 },
      { quote: "A sociedade brasileira precisa voltar a acreditar na sua capacidade de mudar os rumos da História, para superar uma profunda crise social, humanitária, política e econômica, agravada por um governo negacionista, que negligenciou os efeitos da pandemia, sendo o principal responsável por centenas de milhares de mortes.", page: 2 },
      { quote: "A política econômica vigente é a principal responsável pela decomposição das condições de vida da população, da instabilidade e dos retrocessos na produção e no consumo.", page: 2 },
      { quote: "As políticas sociais, conquistas civilizatórias de mais de uma geração, estão sendo mutiladas.", page: 2 },
      { quote: "Apesar das desastrosas políticas ambiental e externa do atual governo, não será difícil recuperar nossas credenciais internacionais", page: 3 },
      { quote: "É imperativo defender a Amazônia da política de devastação posta em prática pelo atual governo.", page: 16 },
      { quote: "Não fossem o SUS e os corajosos trabalhadores e trabalhadoras da saúde, a irresponsabilidade do atual governo na pandemia teria custado ainda mais vidas.", page: 6 },
      { quote: "Precisamos retomar o processo coletivo e participativo de construção de políticas públicas por meio da restauração de todas as instâncias de participação social extintas pelo atual governo", page: 19 }
    ],
    "pt": [
      { quote: "Colocar o povo no orçamento foi, durante os nossos governos populares, uma decisão e uma prática política inovadora e coerente com a transformação que aconteceu no Brasil.", page: 4 },
      { quote: "Nos governos Lula e Dilma, a saúde foi tratada como uma política pública central, como um direito de todos os brasileiros e brasileiras e como um investimento estratégico para um Brasil soberano.", page: 6 },
      { quote: "Nos nossos governos, reduzimos em quase 80% o desmatamento da Amazônia, a maior contribuição", page: 16 },
      { quote: "Criamos a Controladoria-Geral da União, a Estratégia Nacional de Combate à Corrupção e à Lavagem de Dinheiro (ENCCLA) e fortalecemos a Polícia Federal, o Coaf, a Receita Federal e diversos órgãos e carreiras de auditoria e fiscalização.", page: 19 }
    ]
  }
};
