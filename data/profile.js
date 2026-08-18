// ============================================================================
// PERFIL POLÍTICO — comparador visual inspirado no Smartspider do smartvote
// (smartvote.ch). AO CONTRÁRIO dos dados em data/candidates/*.js, isto NÃO É
// CITAÇÃO: são 6 eixos de 0 a 100 atribuídos por nós, a partir da leitura do
// conjunto de propostas já citadas no site (Economia + Outros Temas), como
// síntese visual — não uma medição objetiva nem uma nota oficial. Cada eixo
// tem um `rationale` por candidato explicando a leitura, para auditoria.
// ============================================================================

window.PROFILE_AXES = [
  { id: "estado", label: "Estado x Mercado", low: "Estado indutor da economia", high: "Estado mínimo / privatizações" },
  { id: "fiscal", label: "Ritmo do Ajuste Fiscal", low: "Gradual, preserva gasto social", high: "Corte imediato e amplo" },
  { id: "comercio", label: "Abertura Comercial", low: "Protecionista / soberania produtiva", high: "Livre-comércio / integração global" },
  { id: "seguranca", label: "Segurança Pública", low: "Garantista", high: "Linha dura / punitivista" },
  { id: "ambiente", label: "Regulação Ambiental", low: "Comando e controle rígido", high: "Liberaliza / lógica de mercado" },
  { id: "externa", label: "Política Externa", low: "Multilateral / Sul Global", high: "Alinhamento ocidental" }
];

window.PROFILE_SCORES = {
  lula: {
    estado: 10, fiscal: 10, comercio: 25, seguranca: 40, ambiente: 25, externa: 15,
    rationale: {
      estado: "Defende ampliar investimento da Petrobras e usar estatais para tarifa social (Luz do Povo, Gás do Povo) — o Estado como indutor, não como algo a reduzir.",
      fiscal: "Mantém o arcabouço fiscal atual; busca resultado fiscal 'da retomada do crescimento', não de corte de gasto social.",
      comercio: "Resposta aos tarifaços dos EUA foi o 'Plano Brasil Soberano'; ênfase recorrente em soberania produtiva e neoindustrialização.",
      seguranca: "Cria Ministério da Segurança Pública e Lei Antifacção, mas enquadrada 'nos marcos da Constituição e do Estado Democrático de Direito'.",
      ambiente: "Foco em Pagamento por Serviços Ambientais, financiamento climático e fiscalização — política ambiental tradicional, sem agenda de desregulamentação.",
      externa: "Histórico de proximidade com BRICS e Sul Global; resposta a pressões comerciais é 'soberania', não realinhamento ao Ocidente."
    }
  },
  "flavio-bolsonaro": {
    estado: 55, fiscal: 80, comercio: 70, seguranca: 90, ambiente: 55, externa: 80,
    rationale: {
      estado: "Retoma o Programa Nacional de Desestatização 'com critério' e fortalece a Lei das Estatais — abre espaço ao privado sem defender venda ampla e imediata.",
      fiscal: "'Tesouraço': corte de no mínimo 10 ministérios e regra de superávit primário logo no início do mandato.",
      comercio: "Defende adesão à OCDE, fim do IOF sobre câmbio e abertura à importação de bens de capital e insumos.",
      seguranca: "Classifica facções como narcoterroristas, defende redução da maioridade penal e fala em confronto armado direto — o mais duro dos 5 planos em linguagem.",
      ambiente: "Trata meio ambiente como 'ativo estratégico, não obstáculo', com licenciamento mais ágil, mas mantém mercado de carbono regulado.",
      externa: "Prioriza reatar laços com EUA, Israel e Argentina, e criticar o alinhamento do governo atual a Venezuela e Irã."
    }
  },
  caiado: {
    estado: 60, fiscal: 35, comercio: 70, seguranca: 70, ambiente: 50, externa: 55,
    rationale: {
      estado: "Reconhece que o privado já é 'o principal investidor em infraestrutura' (+70% dos aportes) e quer ampliar concessões, mas não propõe privatizar estatais específicas.",
      fiscal: "Diagnóstico explícito de que o ajuste 'não será baseado em... cortes lineares'; estratégia plurianual e gradual, não um choque.",
      comercio: "Diagnostica 'déficit de inserção' comercial do Brasil e propõe Mercosul–UE e aproximação com a OCDE.",
      seguranca: "Lei do Terrorismo Doméstico com penas de até 45 anos, mas texto insiste em 'devido processo legal' e limites constitucionais.",
      ambiente: "Busca equilíbrio explícito: 'não é rebaixar a exigência ambiental... é trocar demora por regra clara'.",
      externa: "Defesa explícita de relações 'simultâneas com todos os polos, sem alinhamento automático' — ponto central do capítulo de política externa."
    }
  },
  zema: {
    estado: 95, fiscal: 85, comercio: 85, seguranca: 75, ambiente: 65, externa: 90,
    rationale: {
      estado: "Único dos 5 planos que propõe, em texto explícito, 'privatizar todas as empresas estatais'.",
      fiscal: "Choque fiscal, reforma da Previdência, corte de ministérios e metas de redução de impostos 'que forcem o corte efetivo de gastos'.",
      comercio: "Sair do BRICS, entrar na OCDE, transformar o Mercosul em zona de livre comércio e alinhar tarifas de importação à média internacional.",
      seguranca: "Classifica facções como organizações terroristas e propõe presídios de segurança máxima, com ênfase mais fiscal/institucional que penal.",
      ambiente: "Prioriza licenciamento rápido e mercado de carbono como oportunidade econômica, 'sem penalizar quem produz'.",
      externa: "Defende explicitamente sair do BRICS e se aproximar da OCDE — o texto mais alinhado ao Ocidente entre os 5."
    }
  },
  "renan-santos": {
    estado: 55, fiscal: 80, comercio: 45, seguranca: 95, ambiente: 50, externa: 35,
    rationale: {
      estado: "Não propõe privatizar estatais federais; aposta em Zonas Econômicas Especiais com regime de PPP, e reforma da gestão municipal.",
      fiscal: "PEC de Transição já nos primeiros meses, com desindexação de benefícios do salário mínimo — ajuste rápido e amplo.",
      comercio: "Combina abertura via Zonas Econômicas Especiais com um projeto de 'desdolarização' regional liderado pelo real — não é livre-comércio irrestrito.",
      seguranca: "Adota o 'Direito Penal do Inimigo' como doutrina explícita, com inversão do ônus da prova e banimento judicial de facções — o mais extremo dos 5 planos.",
      ambiente: "Único dos 5 planos sem capítulo dedicado ao tema — nota central, não uma posição no eixo.",
      externa: "Propõe o Brasil como 'árbitro do Sul Global' e desdolarização regional — busca autonomia frente a EUA e China, não alinhamento."
    }
  }
};
