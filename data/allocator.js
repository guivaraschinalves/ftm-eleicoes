// ============================================================================
// DISTÂNCIA DO ESTADO ALOCADOR — comparador visual de 6 eixos, no mesmo
// espírito do Perfil Político (data/profile.js): AO CONTRÁRIO das citações em
// data/candidates/*.js, isto NÃO É CITAÇÃO DIRETA — é uma nota de 0 a 3 por
// eixo, atribuída por nós a partir da leitura de propostas específicas dos 5
// planos (cada uma referenciada no `rationale`, com página), medindo uma
// pergunta concreta e contável, não uma impressão geral. Nome deliberado:
// "distância do Estado alocador", não "índice austríaco" — o candidato mais
// bem pontuado ainda está longe da escola austríaca; o rótulo evita que uma
// comparação relativa entre 5 planos vire afirmação absoluta.
//
// A moeda foi deixada de fora de propósito: é o eixo mais associado à escola
// austríaca (padrão-ouro, fim do curso forçado), mas nenhum dos 5 planos se
// aproxima dessa posição — incluir o eixo custaria trabalho sem separar
// nenhum candidato de outro.
//
// Os 6 eixos medem uma coisa só: quanto o Estado deixa de ser o alocador de
// recursos (quem é dono do que produz, quem decide o crédito, regra igual ou
// por setor, barreira de entrada, Brasília ou o município, remover ou
// construir). Cada eixo é 0–3; a soma dos 6 vai de 0 a 18.
// ============================================================================

window.ALLOCATOR_AXES = [
  { id: "estatais", label: "Dono da Produção", low: "Estado dono: criar/ampliar estatais", high: "Privatizar como regra" },
  { id: "credito", label: "Direção do Crédito", low: "Crédito dirigido pelo governo", high: "Sem direcionamento político do crédito" },
  { id: "regra", label: "Regra Geral x Setorial", low: "Regimes e política industrial por setor", high: "Regra geral e horizontal" },
  { id: "licenca", label: "Barreira de Entrada", low: "Exige licença prévia", high: "Entrada livre, dispensa ampla" },
  { id: "federalismo", label: "Poder Federativo", low: "Decisão centralizada em Brasília", high: "Autonomia legislativa e de receita local" },
  { id: "remocao", label: "Remover x Construir", low: "Predomina construir novas estruturas", high: "Predomina remover regras/estruturas existentes" }
];

// Rubrica de pontuação (0–3) por eixo — como cada nota foi contada, sem a
// justificativa de "por que o eixo importa" (essa fica só no código/commit).
window.ALLOCATOR_RUBRIC = {
  estatais: "0 = criar ou ampliar estatais · 1 = manter e profissionalizar · 2 = privatizar caso a caso · 3 = privatizar como regra.",
  credito: "0 = ampliar bancos públicos e crédito dirigido · 1 = manter com melhor governança · 2 = reduzir · 3 = eliminar.",
  regra: "Razão entre propostas horizontais e propostas que nomeiam setores. 0 = predominam setoriais · 3 = predominam horizontais.",
  licenca: "Conta de propostas de remoção de exigência prévia (alvará, licença, prazo, registro). 0 = nova regulação · 3 = dispensa ampla.",
  federalismo: "0 = centralizar · 1 = descentralizar execução · 2 = descentralizar orçamento · 3 = descentralizar competência legislativa e receita.",
  remocao: "Cada proposta conta como remoção (tirar regra, imposto, monopólio) ou construção (criar programa/estrutura), na razão entre as duas. 0 = predominam construções · 3 = predominam remoções."
};

window.ALLOCATOR_SCORES = {
  caiado: {
    estatais: 1, credito: 2, regra: 0, licenca: 1, federalismo: 1, remocao: 1,
    rationale: {
      estatais: "Não propõe privatizar estatais existentes; foca em blindar sua governança da política e ampliar concessões/PPPs para atrair capital privado em infraestrutura: 'governança técnica protegida de indicações políticas' (p.47).",
      credito: "Reduz o papel do BNDES como financiador direto — 'atuando prioritariamente como estruturador de projetos e catalisador de capital privado' (p.47) — sem propor sua eliminação.",
      regra: "Adota política industrial explícita e permanente: 'o governo coordenará crédito, inovação, formação, energia, compras públicas e comércio exterior' (p.42), incluindo regime tributário próprio para data centers (p.26).",
      licenca: "Reduz burocracia em contextos pontuais — licenciamento ambiental por prazo (p.50), acesso a fundos de segurança pública (p.18) — sem uma agenda geral de liberdade econômica para abrir ou manter empresas.",
      federalismo: "Propõe 'respeitar a Federação e descentralizar a execução', mas preserva a 'capacidade nacional de coordenação' (p.9) — descentraliza como a política é executada, não quem decide o quê.",
      remocao: "Mistura remoção pontual ('remover as barreiras que impedem esse capital de fluir', p.47; revisão de subsídios, p.12) com a criação de várias estruturas novas de coordenação: Plano Nacional de Infraestrutura, Ministério da Segurança Pública, Conselho Estratégico Nacional."
    }
  },
  "flavio-bolsonaro": {
    estatais: 2, credito: 2, regra: 2, licenca: 3, federalismo: 2, remocao: 3,
    rationale: {
      estatais: "Retoma o Programa Nacional de Desestatização 'avaliando caso a caso onde a presença do Estado deixou de fazer sentido' (p.70) — privatização seletiva, não uma regra geral.",
      credito: "Propõe 'limitar o crédito subsidiado com recursos do Tesouro' (p.71), mas mantém a CAIXA como banco público central de crédito a pequenos negócios, rebatizada 'Banco da Prosperidade' (p.46).",
      regra: "Nenhuma proposta de política industrial ou regime tributário por setor nas citações levantadas; os contratos de trabalho por faixa etária (18–24, 50+) são horizontais por critério demográfico, não setorial.",
      licenca: "Eixo central do plano: retomar e ampliar a Lei de Liberdade Econômica, que 'dispensou alvarás e licenças para atividades de baixo risco' (p.27), com um 'revogaço regulatório' amplo.",
      federalismo: "'Mais Brasil, menos Brasília': o município 'passou a ser tratado como parceiro, com mais autonomia e mais protagonismo para o prefeito', com repasses federais diretos ao poder local (p.68) — mas sem propor transferir competência legislativa.",
      remocao: "O 'Tesouraço' (corte de ao menos 10 ministérios, p.68–69), o 'revogaço regulatório' e o fim da sobreposição entre Ibama, Funai e ICMBio (p.59) dominam o plano; a criação de novos programas (TREVA, Empréstimo Contingente à Renda) é secundária."
    }
  },
  lula: {
    estatais: 0, credito: 0, regra: 0, licenca: 1, federalismo: 1, remocao: 0,
    rationale: {
      estatais: "Amplia o papel das estatais como instrumento de política pública: 'ampliando investimentos em exploração' na Petrobras (p.67) e tarifa social via Luz do Povo e Gás do Povo (p.65–66).",
      credito: "Usa financiamento direcionado explicitamente como instrumento de política industrial: 'financiamento direcionado, com [...] benefícios condicionados a conteúdo local, valor agregado nacional' (p.51).",
      regra: "A política de comércio exterior 'deve continuar alinhada aos objetivos das políticas industrial, tecnológica e de inovação' (p.52); a Nova Indústria Brasil organiza investimento por setor estratégico.",
      licenca: "Menções a reduzir burocracia aparecem só em contextos pontuais — regularização fundiária rural (p.59), crédito rural (p.61) — sem uma agenda geral de desregulamentação para abrir ou manter empresas.",
      federalismo: "O apoio a municípios via programas federais (Novo PAC, saúde, educação) segue o padrão cooperativo tradicional: a execução é local, mas decisão e financiamento permanecem federais, sem proposta de repasse de competência ou receita.",
      remocao: "Quase todo o plano é organizado em torno de programas e estruturas novas ou ampliadas — Novo PAC, Nova Indústria Brasil (p.50), Fundo Nacional de Desenvolvimento Regional (p.56), Ministério da Segurança Pública (p.30) — não em remoção de regras existentes."
    }
  },
  "renan-santos": {
    estatais: 1, credito: 1, regra: 0, licenca: 2, federalismo: 0, remocao: 0,
    rationale: {
      estatais: "O próprio plano rejeita a 'versão vulgarizada' do liberalismo que 'falava vagamente em desburocratização e privatizações, por considerá-la aquém dos problemas brasileiros' (p.5); não há proposta concreta de privatizar nem de ampliar estatais.",
      credito: "Usa crédito dirigido do BNDES para minerais críticos e terras raras — consórcio 'liderado pelo BNDES' (p.39) e linhas 'condicionadas a metas de exportação' (p.42) — pontual e ligado a resultado, não uma agenda geral de bancos públicos.",
      regra: "O eixo central do plano é a criação de Zonas Econômicas Especiais com 'regime específico de IBS/CBS' (p.35) e polos industriais setoriais dedicados (hidrogênio, aço, semicondutores) — o oposto de regra horizontal.",
      licenca: "Propõe 'redução radical da burocracia mediante agências administrativas ágeis (one-stop shops) com aprovação de licenças em até 15 dias' (p.35), mas restrito às Zonas Econômicas Especiais, não à economia em geral.",
      federalismo: "O eixo federativo do plano é centralizador: cria um 'Comissariado Federal de Gestão Pública' que pode assumir a gestão de municípios em 'Tutela Gerencial' (p.18) e propõe fundir municípios pela 'Grande Consolidação Municipal' (p.15) — decisão migra para Brasília, não o contrário.",
      remocao: "É o plano que mais cria instituições novas dos cinco — Comissariado Federal (p.18), Frentes Cidadãs (p.21), várias Zonas Econômicas Especiais, Projeto Abaporu (p.42), Missão Rondon (p.24) — a remoção (desindexação via PEC de Transição, p.10) é secundária."
    }
  },
  zema: {
    estatais: 3, credito: 2, regra: 3, licenca: 3, federalismo: 3, remocao: 3,
    rationale: {
      estatais: "'Privatizar todas as empresas estatais para que o governo possa se concentrar naquilo que de fato lhe cabe' (p.15) — a formulação mais ampla e categórica do conjunto.",
      credito: "'Reduzir gradualmente os programas de crédito direcionado, incluindo linhas subsidiadas do BNDES, para setores escolhidos politicamente' (p.18) — redução explícita, não eliminação total.",
      regra: "Propõe explicitamente 'evitar que a regulamentação da Reforma Tributária replique a complexidade do sistema atual por meio de [...] regimes especiais, exceções e tratamentos favorecidos' (p.19).",
      licenca: "'Desregulamentar profissões que não envolvam risco à saúde ou segurança da população, eliminando exigências corporativistas que existem apenas para proteger grupos estabelecidos' (p.25) — dispensa ampla, não setorial.",
      federalismo: "'Reequilibrar a federação brasileira, ampliando a autonomia dos estados sobre receitas, competências administrativas e capacidade legislativa' (p.75) — o único dos cinco planos a propor os três eixos da autonomia federativa ao mesmo tempo.",
      remocao: "Reforma Administrativa para 'enxugar' (p.15), zerar encargos (p.24), fim do monopólio sindical (p.24) e de reservas de mercado corporativistas (p.25) dominam o plano — mas o programa 'Sócios do Brasil', que deposita R$1.000 por brasileiro ao nascer em fundos de ações (p.18), é uma estrutura nova que pesa no sentido contrário."
    }
  }
};
