// ============================================================================
// ROMEU ZEMA (NOVO) — citações do "Plano Implacável", proposta de governo
// registrada no TSE (ver data/sources.js). Todo texto em `quote` é
// TRANSCRIÇÃO LITERAL do PDF oficial; `title` é redigido por nós só para
// nomear o card.
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
    initials: "RZ",
    photo: "sources/zema.jpg"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O Brasil entrou em 2026 com a maior carga tributária da sua história, em torno de 32,4% do PIB, déficit nas contas públicas e uma dívida que já ultrapassa os R$10 trilhões, próximo de 80% do PIB.", page: 14 },
        { quote: "Em virtude desse cenário, a SELIC está próxima a 15% e, com isso, o pagamento de juros consome cerca de R$1 trilhão por ano, drenando recursos que deveriam estar financiando investimentos, infraestrutura e serviços essenciais.", page: 14 }
      ],
      proposals: [
        { title: "Reformar a Previdência de forma definitiva", quotes: [{ quote: "Fazer uma Reforma da Previdência envolvendo estados e municípios, bem como a previdência rural e militar, criando também um mecanismo de reajuste automático da idade mínima para aposentadoria com base na expectativa de vida da população.", page: 14 }] },
        { title: "Reforma Administrativa para enxugar o governo", quotes: [{ quote: "Fazer uma Reforma Administrativa para enxugar a estrutura do Governo Federal e deixá-la mais eficiente, reduzindo os ministérios, cortando cargos comissionados e revisando as autarquias e fundações do governo.", page: 15 }] },
        { title: "Metas de redução de impostos que forcem corte de gastos", quotes: [{ quote: "Fixar metas progressivas de redução da carga tributária que imponham os cortes de gastos necessários para atingi-las, invertendo a lógica atual em que o gasto define o imposto.", page: 16 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "Esse sistema tem nome: Custo Brasil. É o peso invisível que encarece tudo no país e custa R$1,7 trilhão por ano [...] Antes de vender o primeiro produto ou contratar o primeiro funcionário, o empreendedor brasileiro já esbarra em um dos juros mais altos do mundo, impostos incompreensíveis, infraestrutura ruim, insegurança jurídica.", page: 17 }
      ],
      proposals: [
        { title: "Reduzir o IR das empresas ao nível dos países desenvolvidos", quotes: [{ quote: "Reduzir gradualmente o imposto de renda das empresas para aproximar o Brasil das economias desenvolvidas e permitir que mais recursos fiquem na atividade produtiva impulsionando investimento, expansão e geração de empregos.", page: 19 }] },
        { title: "Reforma do IRPJ: Receita calcula, não o contribuinte", quotes: [{ quote: "Reformar a tributação das empresas, em especial os impostos diretos como o IRPJ, partindo do princípio de que é o Estado, e não o contribuinte, que deve calcular o imposto, com a Receita apurando o valor automaticamente a partir da nota fiscal eletrônica.", page: 19 }] },
        { title: "Neutralidade na regulamentação da reforma tributária", quotes: [{ quote: "Evitar que a regulamentação da Reforma Tributária replique a complexidade do sistema atual por meio de burocracias desnecessárias, regimes especiais, exceções e tratamentos favorecidos, garantindo monitoramento técnico, transparência sobre impactos setoriais e compromisso verificável de neutralidade da carga tributária.", page: 19 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "O Brasil tem uma das economias mais fechadas do planeta: apesar de ser a nona maior economia do mundo, o país ocupa apenas a 22a posição em exportações. Dentre 203 países, o Brasil tem a quinta menor proporção entre importações e seu PIB (15,7%).", page: 36 }
      ],
      proposals: [
        { title: "Sair do BRICS e ingressar na OCDE", quotes: [
          { quote: "Retirar o Brasil do BRICS de forma diplomática, preservando pragmaticamente as relações comerciais com todos os países do bloco.", page: 37 },
          { quote: "Retomar o processo de adesão do Brasil à OCDE, promovendo as reformas institucionais e econômicas necessárias para aderir ao bloco.", page: 37 }
        ] },
        { title: "Mercosul como zona de livre comércio", quotes: [{ quote: "Flexibilizar a estrutura atual do Mercosul, hoje uma união aduaneira que impede os países membros de negociarem sozinhos, transformando-o em zona de livre comércio, para que o Brasil assine acordos comerciais e de investimentos com países e blocos que ampliem seu acesso a novos mercados.", page: 38 }] },
        { title: "Alinhar tarifas de importação a países em desenvolvimento", quotes: [{ quote: "Alinhar gradualmente as tarifas de importação brasileiras à média dos países em desenvolvimento à medida que o Custo Brasil for reduzido, acabando com a dupla tributação e reduzindo as barreiras não tarifárias.", page: 21 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "No trimestre encerrado em janeiro de 2026, o país tinha 38,5 milhões de trabalhadores informais, o equivalente a 37,5% da população ocupada fora da CLT.", page: 23 },
        { quote: "83% consideram a flexibilidade de horário uma prioridade ao escolher um emprego.", page: 23 }
      ],
      proposals: [
        { title: "Regime alternativo à CLT com negociado sobre legislado", quotes: [{ quote: "Permitir que trabalhador e empregador ajustem o modelo de contratação às suas preferências e à realidade de cada atividade, com prevalência do negociado sobre o legislado.", page: 23 }] },
        { title: "Zerar encargos na contratação de informais", quotes: [{ quote: "Zerar os encargos sobre o equivalente a um salário mínimo na contratação de quem está há mais de um ano na informalidade, em empresas de todos os setores.", page: 24 }] },
        { title: "Fim do monopólio sindical", quotes: [{ quote: "Encerrar o monopólio sindical, assegurando ao profissional o direito de não se filiar ou contribuir para sindicatos, e limitar o poder regulatório e disciplinar dos conselhos profissionais.", page: 24 }] },
        { title: "Acabar com reservas de mercado corporativistas", quotes: [{ quote: "Desregulamentar profissões que não envolvam risco à saúde ou segurança da população, eliminando exigências corporativistas que existem apenas para proteger grupos estabelecidos.", page: 25 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "a SELIC está próxima a 15% e, com isso, o pagamento de juros consome cerca de R$1 trilhão por ano.", page: 14 }
      ],
      proposals: [
        { title: "Choque fiscal para derrubar a curva de juros", quotes: [{ quote: "Garantir a queda da curva de juros por meio de um choque fiscal para estabilizar a relação dívida/PIB, promovendo reformas e mantendo superávits primários que permitam o pagamento da dívida.", page: 18 }] },
        { title: "Reduzir o IOF sobre operações financeiras", quotes: [{ quote: "Reduzir os custos diretos das operações financeiras começando pela redução do IOF, alinhando o Brasil às práticas dos países desenvolvidos.", page: 18 }] },
        { title: "Reduzir crédito direcionado (linhas subsidiadas do BNDES)", quotes: [{ quote: "Reduzir gradualmente os programas de crédito direcionado, incluindo linhas subsidiadas do BNDES, para setores escolhidos politicamente, visando ampliar a concorrência entre bancos e baratear o crédito no Brasil.", page: 18 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [],
      proposals: [
        { title: "Privatizar todas as empresas estatais", quotes: [{ quote: "Privatizar todas as empresas estatais para que o governo possa se concentrar naquilo que de fato lhe cabe, como segurança pública e educação, reduzindo o espaço para escândalos de corrupção e garantindo maior eficiência no uso dos recursos públicos e mais competição na economia brasileira.", page: 15 }] },
        { title: "Ampliar PPPs em todos os serviços públicos", quotes: [{ quote: "Aumentar o investimento privado no país por meio da ampliação das parcerias público-privadas em todos os setores da administração pública, inclusive em projetos que geram impacto direto na qualidade dos serviços e na vida da população, como saúde e educação.", page: 15 }] },
        { title: "Vender imóveis e ativos públicos sem uso", quotes: [{ quote: "Mapear o patrimônio imobiliário federal e vender, por venda direta ao ocupante ou leilão, os imóveis desocupados, subutilizados ou sem função pública, com metas anuais de arrecadação.", page: 15 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "O investimento total, público e privado, em infraestrutura no país representa 2,22% do PIB, cerca da metade de outros países de renda média, que investem entre 3,5% e 5,5%. Os custos logísticos consomem 15,5% do PIB, o pior patamar entre as 20 maiores economias do mundo.", page: 26 }
      ],
      proposals: [
        { title: "Conceder ativos viáveis, PPP onde o mercado não chega", quotes: [{ quote: "Conceder à iniciativa privada a construção, operação e manutenção dos ativos com viabilidade econômica e, onde o mercado não chega sozinho, garantir a presença do Estado via PPPs.", page: 19 }] },
        { title: "Atrair investimento em data centers sem regulação precoce de IA", quotes: [{ quote: "Atrair investimentos internacionais em inovação e tecnologia, principalmente em data centers, aproveitando a energia barata em excesso [...] Garantir que o Brasil não irá restringir o mercado de IA por meio de regulações excessivas e inadequadas.", page: 21 }] }
      ]
    }
  },
  otherThemes: {
    educacao: {
      proposals: [
        { title: "Só 13,3% concluem o fundamental com proficiência adequada", quotes: [{ quote: "apenas 13,3% dos alunos saem do ensino fundamental sabendo Português e Matemática de forma adequada. No ensino médio, a situação é ainda mais trágica: somente 4,5% dos estudantes se formam com conhecimento adequado.", page: 50 }] },
        { title: "Creches e pré-escolas com parceria privada", quotes: [{ quote: "Aumentar o acesso à educação infantil, especialmente para famílias mais vulneráveis, por meio do fortalecimento das redes públicas e de parcerias com entidades privadas e comunitárias, com e sem fins lucrativos, priorizando a expansão com qualidade.", page: 50 }] },
        { title: "Modernizar a BNCC", quotes: [{ quote: "Revisar e aprimorar a BNCC para torná-la mais clara, objetiva e focada nas aprendizagens essenciais de cada etapa da educação básica, alinhando o currículo às competências necessárias para o século XXI.", page: 51 }] }
      ]
    },
    saude: {
      proposals: [
        { title: "Registro nacional de saúde sob controle do cidadão", quotes: [{ quote: "Construir um registro nacional de saúde unificado e sob controle do cidadão por meio do prontuário eletrônico, centralizando o histórico clínico do paciente, garantindo a continuidade do cuidado em qualquer unidade de atendimento.", page: 58 }] },
        { title: "Expandir telemedicina", quotes: [{ quote: "Expandir o acesso a consultas médicas e ao monitoramento de doenças por meio da telemedicina, reduzindo a escassez de especialistas em regiões remotas, as longas filas de espera nos grandes centros urbanos e os vazios assistenciais.", page: 57 }] }
      ]
    },
    seguranca: {
      proposals: [
        { title: "Classificar facções como organizações terroristas", quotes: [{ quote: "Classificar, nacional e internacionalmente, as facções criminosas como organizações terroristas: enquadrar como terroristas os criminosos que usam táticas e armamentos de guerra para dominar territórios.", page: 5 }] },
        { title: "Presídios de segurança máxima", quotes: [{ quote: "Construir presídios de segurança máxima para confinamento de faccionados.", page: 6 }] }
      ]
    },
    "meio-ambiente": {
      proposals: [
        { title: "Licenciamento com critérios técnicos e prazos previsíveis", quotes: [{ quote: "Garantir critérios técnicos, previsibilidade e segurança jurídica no licenciamento ambiental, assegurando o cumprimento do Código Florestal e a análise do CAR, sem penalizar quem produz e investe dentro da lei.", page: 47 }] },
        { title: "Mercado de créditos de carbono", quotes: [{ quote: "Estabelecer um ambiente de negócios seguro e desburocratizado para a comercialização voluntária de créditos de carbono com o mercado internacional [...] O Brasil poderia suprir até 20% da demanda mundial por créditos de carbono e mal participa desse mercado.", page: 47 }] }
      ]
    },
    tecnologia: {
      proposals: [
        { title: "Atrair data centers com energia limpa abundante", quotes: [{ quote: "Atrair investimentos internacionais em inovação e tecnologia, principalmente em data centers, aproveitando a energia barata em excesso, a disponibilidade de recursos hídricos e a posição geopolítica favorável.", page: 21 }] },
        { title: "Modernizar marco regulatório de biotecnologia agrícola", quotes: [{ quote: "Eliminar barreiras ao avanço da biotecnologia agrícola brasileira por meio da modernização do marco regulatório para edição gênica de sementes, da aceleração dos processos de aprovação de bioinsumos.", page: 22 }] }
      ]
    },
    "politica-externa": {
      proposals: [
        { title: "Sair do BRICS, retomar adesão à OCDE", quotes: [{ quote: "Retirar o Brasil do BRICS de forma diplomática [...] Retomar o processo de adesão do Brasil à OCDE, promovendo as reformas institucionais e econômicas necessárias para aderir ao bloco.", page: 37 }] },
        { title: "Recuperar protagonismo na América do Sul", quotes: [{ quote: "Restabelecer parcerias estratégicas com os países do Mercosul, em especial a Argentina, e aproximar-se dos países da bacia do Pacífico e da Amazônia, devolvendo ao Brasil a influência que perdeu na região.", page: 36 }] }
      ]
    }
  }
};
