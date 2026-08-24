// ============================================================================
// CONTAGEM DE PALAVRAS — gerado por scripts/count_words.py a partir do texto
// bruto extraído dos 5 PDFs em PLANOS-DE-GOVERNO.md. NÃO É LEITURA EDITORIAL
// (diferente de profile.js/allocator.js): é contagem mecânica de ocorrências
// (singular + plural somados por termo, case insensitive, sem desambiguar
// sentido). Nunca editar à mão — rode `python3 scripts/count_words.py` de
// novo sempre que PLANOS-DE-GOVERNO.md mudar.
// ============================================================================
window.WORD_COUNT_TERMS = [
  {
    "id": "liberdade",
    "label": "Liberdade"
  },
  {
    "id": "igualdade",
    "label": "Igualdade"
  },
  {
    "id": "privatizacao",
    "label": "Privatização"
  },
  {
    "id": "desestatizacao",
    "label": "Desestatização"
  },
  {
    "id": "liberalizacao",
    "label": "Liberalização"
  },
  {
    "id": "abertura",
    "label": "Abertura"
  },
  {
    "id": "abertura-comercial",
    "label": "Abertura comercial"
  },
  {
    "id": "estado",
    "label": "Estado"
  },
  {
    "id": "divida",
    "label": "Dívida"
  },
  {
    "id": "fiscal",
    "label": "Fiscal"
  },
  {
    "id": "deficit-fiscal",
    "label": "Déficit fiscal"
  },
  {
    "id": "ajuste-fiscal",
    "label": "Ajuste fiscal"
  },
  {
    "id": "reforma",
    "label": "Reforma"
  },
  {
    "id": "carga-tributaria",
    "label": "Carga tributária"
  },
  {
    "id": "juros",
    "label": "Juros"
  },
  {
    "id": "inflacao",
    "label": "Inflação"
  },
  {
    "id": "custo-de-vida",
    "label": "Custo de vida"
  }
];

window.WORD_COUNTS = {
  "lula": {
    "totalWords": 24780,
    "counts": {
      "liberdade": 5,
      "igualdade": 9,
      "privatizacao": 0,
      "desestatizacao": 0,
      "liberalizacao": 0,
      "abertura": 1,
      "abertura-comercial": 0,
      "estado": 66,
      "divida": 4,
      "fiscal": 19,
      "deficit-fiscal": 0,
      "ajuste-fiscal": 0,
      "reforma": 19,
      "carga-tributaria": 0,
      "juros": 8,
      "inflacao": 8,
      "custo-de-vida": 1
    }
  },
  "flavio-bolsonaro": {
    "totalWords": 23346,
    "counts": {
      "liberdade": 21,
      "igualdade": 0,
      "privatizacao": 0,
      "desestatizacao": 2,
      "liberalizacao": 0,
      "abertura": 6,
      "abertura-comercial": 3,
      "estado": 83,
      "divida": 19,
      "fiscal": 8,
      "deficit-fiscal": 0,
      "ajuste-fiscal": 0,
      "reforma": 28,
      "carga-tributaria": 0,
      "juros": 22,
      "inflacao": 7,
      "custo-de-vida": 0
    }
  },
  "caiado": {
    "totalWords": 42636,
    "counts": {
      "liberdade": 19,
      "igualdade": 12,
      "privatizacao": 0,
      "desestatizacao": 0,
      "liberalizacao": 0,
      "abertura": 10,
      "abertura-comercial": 1,
      "estado": 110,
      "divida": 7,
      "fiscal": 34,
      "deficit-fiscal": 0,
      "ajuste-fiscal": 0,
      "reforma": 13,
      "carga-tributaria": 4,
      "juros": 8,
      "inflacao": 3,
      "custo-de-vida": 1
    }
  },
  "renan-santos": {
    "totalWords": 21257,
    "counts": {
      "liberdade": 6,
      "igualdade": 1,
      "privatizacao": 2,
      "desestatizacao": 0,
      "liberalizacao": 0,
      "abertura": 2,
      "abertura-comercial": 0,
      "estado": 55,
      "divida": 3,
      "fiscal": 40,
      "deficit-fiscal": 0,
      "ajuste-fiscal": 10,
      "reforma": 36,
      "carga-tributaria": 1,
      "juros": 3,
      "inflacao": 2,
      "custo-de-vida": 0
    }
  },
  "zema": {
    "totalWords": 22905,
    "counts": {
      "liberdade": 16,
      "igualdade": 1,
      "privatizacao": 2,
      "desestatizacao": 0,
      "liberalizacao": 0,
      "abertura": 5,
      "abertura-comercial": 0,
      "estado": 61,
      "divida": 7,
      "fiscal": 6,
      "deficit-fiscal": 0,
      "ajuste-fiscal": 1,
      "reforma": 23,
      "carga-tributaria": 3,
      "juros": 12,
      "inflacao": 1,
      "custo-de-vida": 0
    }
  }
};
