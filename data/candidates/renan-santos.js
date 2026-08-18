// ============================================================================
// RENAN SANTOS (MISSÃO) — citações do "Livro Amarelo — Missão 2026" (resumo
// executivo), proposta de governo registrada no TSE (ver data/sources.js).
// Cada capítulo do plano já traz "O Problema" e "Propostas e Soluções da
// Missão" — usamos o texto literal dessas seções. Todo texto em `quote` é
// TRANSCRIÇÃO LITERAL do PDF; `title` é redigido por nós só para nomear o
// card. É o único dos 5 planos sem capítulo dedicado a Meio Ambiente.
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
    initials: "RS",
    photo: "sources/renan-santos.jpg"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O déficit nominal do setor público consolidado atingiu R$ 1,062 trilhão, segundo informações do Banco Central. A dívida pública federal encerrou 2025 em R$ 8,635 trilhões, um crescimento de 18% em relação a 2024.", page: 9 },
        { quote: "A dívida bruta do governo geral atingiu 80,4% do PIB (R$ 10,44 trilhões); a IFI do Senado, em cenário sem reformas, projeta que pode atingir 100% do PIB em 2030.", page: 9 },
        { quote: "O ajuste fiscal necessário é da ordem de R$ 250 bilhões anuais, segundo Mansueto de Almeida.", page: 10 }
      ],
      proposals: [
        { title: "PEC de Transição baseada na 'PEC do Equilíbrio Fiscal'", quotes: [{ quote: "a PEC de Transição deverá utilizar como base um projeto já protocolado por nosso deputado Kim Kataguiri em 2024, a chamada \"PEC do Equilíbrio Fiscal\", que promove a desindexação de benefícios previdenciários e assistenciais do salário mínimo (corrigindo-os apenas pela inflação), a desvinculação dos pisos de saúde e educação da receita, a revisão do abono salarial e a redução de renúncias fiscais (gastos tributários), com economia projetada de R$ 1,1 trilhão até 2031.", page: 10 }] },
        { title: "Fim dos supersalários no funcionalismo", quotes: [{ quote: "selecionamos as propostas mais interessantes e as traduzimos à realidade política de hoje [...] a racionalização do superávit financeiro, a reforma do funcionalismo público com fim dos supersalários, mudanças nas emendas parlamentares, redução das isenções fiscais e uma nova lei complementar das finanças públicas.", page: 10 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "Essa ineficiência é agravada por problemas estruturais que travam o desenvolvimento: [...] complexidade tributária que desestimula o investimento produtivo; litigiosidade excessiva da justiça trabalhista; insegurança jurídica que desestabiliza planejamentos de longo prazo; e protecionismo crônico que blinda setores ineficientes, impedindo a realocação de recursos para outros mais produtivos.", page: 21 }
      ],
      proposals: [
        { title: "Regime tributário específico nas Zonas Econômicas Especiais", quotes: [{ quote: "estímulos fiscais por meio de suspensão de direitos aduaneiros e de regime específico de IBS/CBS para a zona (LC 214/2025)", page: 35 }] },
        { title: "Justiça tributária entre as reformas microeconômicas prioritárias", quotes: [{ quote: "esse capítulo é dedicado às reformas microeconômicas mais importantes, que destravam a competitividade em todos os setores [...] As reformas tangenciam quase todos os eixos estruturais da economia brasileira, passando por justiça tributária, legislação trabalhista, regulação financeira e governança pública.", page: 21 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "a dependência do dólar americano e a ausência de uma moeda regional que o Brasil pudesse liderar, refletindo falta de poder monetário para influenciar o Sul Global", page: 45 },
        { quote: "dependência de importações estratégicas e de duplo uso (estimadas pela CNI em cerca de R$70 bilhões por ano, abrangendo componentes e tecnologias sensíveis de uso civil e militar)", page: 34 }
      ],
      proposals: [
        { title: "Desdolarização da América do Sul liderada pelo real", quotes: [{ quote: "Proposta de desdolarização da América do Sul busca reduzir a dependência do dólar americano mediante a criação de uma cesta de moedas sul-americana liderada pelo real brasileiro, linhas de swap entre bancos centrais e cooperação monetária regional, convertendo o Brasil em âncora financeira do continente.", page: 46 }] },
        { title: "Zonas Econômicas Especiais com um-stop-shop de 15 dias", quotes: [{ quote: "redução radical da burocracia mediante agências administrativas ágeis (one-stop shops) com aprovação de licenças em até 15 dias; infraestrutura de classe mundial dedicada, incluindo energia, conectividade 5G/6G e logística portuária otimizada.", page: 35 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "Nos últimos 15 anos, o Estado transferiu aproximadamente 4 trilhões de reais em subsídios a grupos privilegiados [...] os gastos com assistencialismo (somando apenas o Bolsa Família e o BPC) aumentaram mais de 8 vezes no mesmo período, chegando em 2025 a cerca de R$ 285 bilhões.", page: 20 }
      ],
      proposals: [
        { title: "Frentes Cidadãs no lugar do Bolsa Família", quotes: [{ quote: "nossa proposta de reforma total do sistema de assistencialismo, substituindo o Bolsa Família por um modelo de frentes de trabalho, em que os beneficiários participam de projetos para o bem público, se consolidando como participantes ativos da comunidade.", page: 21 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [],
      proposals: [
        { title: "Comissariado Federal inspirado na independência do Banco Central", quotes: [{ quote: "Uma autarquia especial vinculada ao Ministério da Fazenda, com autonomia técnica e mandatos fixos, inspirada na independência do Banco Central.", page: 18 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "os partidos têm por objetivo principal maximizar o orçamento à sua disposição, sobretudo por meio dos fundos partidário e eleitoral e das emendas parlamentares [...] Essa captura do Estado por interesses privados, sem qualquer contraparte de responsabilidade compartilhada [...] é o grande problema do país.", page: 17 }
      ],
      proposals: [
        { title: "Lei de Responsabilidade Gerencial com Tutela Gerencial", quotes: [{ quote: "Municípios com desempenho crítico entrarão em Tutela Gerencial, exigindo dupla assinatura (Prefeito e Comissário) para gastos. Gestores que falharem reiteradamente nas metas de longo prazo estarão sujeitos à Inelegibilidade Superveniente e ao processo de Cassação por Improbidade Gerencial.", page: 18 }] },
        { title: "Cláusula Antimáfia", quotes: [{ quote: "Inspirada na legislação italiana, a lei permitirá ao STJ decretar a dissolução imediata de administrações capturadas pelo crime organizado ou milícias. Nesses casos, o mandato eletivo é extinto e o município passa a ser gerido por uma comissão extraordinária federal por até 24 meses.", page: 18 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "A participação do investimento em infraestrutura no PIB caiu de cerca de 4% nos anos 1980 para aproximadamente 2% atualmente [...] Segundo o Acompanhamento de Obras Paralisadas, o país soma mais de 11 mil empreendimentos com verbas federais interrompidas, de um total de 21 mil.", page: 23 }
      ],
      proposals: [
        { title: "Zona Econômica de Terras Raras (8 estágios da cadeia)", quotes: [{ quote: "A ZEE de Terras Raras busca verticalizar a cadeia produtiva nacional, aproveitando a segunda maior reserva mundial do Brasil (cerca de 23%, USGS 2026), integrando oito estágios: (1) extração, (2) separação química, (3) refino, (4) ligas, (5) ímãs, (6) motores, (7) componentes para baterias e (8) semicondutores/defesa.", page: 36 }] },
        { title: "Três polos industriais no Nordeste via ZEEs", quotes: [{ quote: "Polo Industrial de Suape (Pernambuco), focado em hidrogênio verde e petroquímica [...] Pecém (Ceará) e Araripe (Pernambuco), polo interestadual especializado em aço de baixo carbono [...] Aratu-Camaçari (Bahia) direcionado à mobilidade elétrica, baterias e semicondutores.", page: 35 }] }
      ]
    }
  },
  otherThemes: {
    educacao: {
      proposals: [
        { title: "73% dos alunos abaixo do nível básico em matemática", quotes: [{ quote: "cerca de 73% dos alunos brasileiros não atingiram os requisitos mínimos de conhecimento em matemática para o exercício pleno da cidadania.", page: 30 }] },
        { title: "Sistema fônico universal de alfabetização", quotes: [{ quote: "buscaremos a adoção universal do sistema fônico de alfabetização, que se encontra amparado pelas melhores evidências científicas disponíveis.", page: 31 }] }
      ]
    },
    saude: {
      proposals: [
        { title: "ENER — fila do SUS por risco clínico, não ordem cronológica", quotes: [{ quote: "criar a ENER, um sistema de fila viva, que não fique engessado na ordem cronológica, mas atenda critérios objetivos de prioridade relativos ao estado do paciente [...] fundada nos seguintes critérios: (i) gravidade clínica atual; (ii) risco de progressão em curto e médio prazo.", page: 25 }] },
        { title: "PRONTO — prontuário eletrônico nacional interoperável", quotes: [{ quote: "Criação do PRONTO (Prontuário Eletrônico Nacional Interoperável) que irá conectar a atenção primária, os serviços especializados, os hospitais públicos e privados, laboratórios e farmácias.", page: 26 }] }
      ]
    },
    seguranca: {
      proposals: [
        { title: "Direito Penal do Inimigo via Lei Antifacção", quotes: [{ quote: "o governo da Missão vai declarar no primeiro dia de mandato uma grande Guerra ao Crime, visando à adoção imediata do Direito Penal do Inimigo (DPI) como framework jurídico para o combate ao crime organizado no Brasil.", page: 12 }] },
        { title: "Superpresídios modelo CECOT (El Salvador)", quotes: [{ quote: "As lideranças condenadas serão deslocadas a superpresídios de segurança máxima em regiões remotas, no modelo do CECOT salvadorenho, equipados com blindagem eletromagnética e biometria contínua.", page: 13 }] }
      ]
    },
    "meio-ambiente": {
      proposals: []
    },
    tecnologia: {
      proposals: [
        { title: "Marco Brasileiro da Inteligência Artificial (MBIA)", quotes: [{ quote: "O MBIA é uma arquitetura de catorze medidas distribuídas também em cinco eixos. A tese é simples: nenhuma medida isolada resolve; o conjunto, sim, pode mudar o regime.", page: 41 }] },
        { title: "Projeto Abaporu e Zonas Econômicas de Alta Inteligência", quotes: [{ quote: "O Projeto Abaporu será um laboratório nacional de inteligência artificial com capital privado majoritário, governança independente [...] As Zonas Econômicas de Alta Inteligência (ZEAIs) serão a aplicação das ZEEs à inteligência artificial.", page: 42 }] }
      ]
    },
    "politica-externa": {
      proposals: [
        { title: "Brasil como 'árbitro do Sul Global'", quotes: [{ quote: "Posicionamento do Brasil como Árbitro do Sul Global por meio de uma diplomacia ativa nas três regiões estratégicas: África [...] Ásia [...] e América Latina.", page: 44 }] },
        { title: "Nuclearização brasileira", quotes: [{ quote: "Proposta de nuclearização brasileira busca alcançar autonomia completa do ciclo de combustível nuclear, incluindo capacidade de reprocessamento, convertendo-a em ativo estratégico de deterrência.", page: 46 }] }
      ]
    }
  }
};
