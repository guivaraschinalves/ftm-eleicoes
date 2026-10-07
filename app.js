(function () {
  "use strict";

  function el(tag, className) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    return e;
  }

  function initials(name) {
    var parts = String(name || "").trim().split(/\s+/);
    if (!parts.length) return "?";
    var first = parts[0][0] || "";
    var last = parts.length > 1 ? parts[parts.length - 1][0] || "" : "";
    return (first + last).toUpperCase();
  }

  function orderedCandidateIds() {
    var order = window.CANDIDATE_ORDER || [];
    var data = window.CANDIDATES_DATA || {};
    var ids = order.filter(function (id) { return data[id]; });
    Object.keys(data).forEach(function (id) {
      if (ids.indexOf(id) === -1) ids.push(id);
    });
    return ids;
  }

  // Esta versão do site cobre só os dois candidatos do segundo turno, e os
  // dois aparecem sempre, em todas as seções — não há diálogo de seleção nem
  // filtro. `visibleIds` continua existindo como a lista única usada por
  // todas as seções (na ordem alfabética de CANDIDATE_ORDER), preenchida uma
  // vez em init().
  var visibleIds = [];

  // Última palavra buscada em Contagem de Palavras (null até a 1ª busca).
  var lastSearchedWord = null;

  // Idade calculada a partir de `basics.birthDate` ("AAAA-MM-DD"), sempre em
  // relação à data de hoje — não é um número fixo gravado nos dados, então
  // continua correto em qualquer visita, não só na data de publicação.
  function calcAge(birthDateStr) {
    if (!birthDateStr) return null;
    var parts = birthDateStr.split("-").map(Number);
    var birth = new Date(parts[0], parts[1] - 1, parts[2]);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var hadBirthdayThisYear = (today.getMonth() > birth.getMonth()) ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
    if (!hadBirthdayThisYear) age--;
    return age;
  }

  // Avatar: foto oficial (TSE) quando existe, com fallback para iniciais se a
  // imagem falhar ao carregar — nunca deixa um círculo vazio sem explicação.
  function buildAvatar(basics, sizeClass) {
    var avatar = el("div", "candidate-avatar" + (sizeClass ? " " + sizeClass : ""));
    if (basics.photo) {
      var img = document.createElement("img");
      img.src = basics.photo;
      img.alt = basics.ballotName || basics.name;
      img.loading = "lazy";
      img.addEventListener("error", function () {
        avatar.innerHTML = "";
        avatar.textContent = basics.initials || initials(basics.name);
      }, { once: true });
      avatar.appendChild(img);
    } else {
      avatar.textContent = basics.initials || initials(basics.name);
    }
    return avatar;
  }

  /* ============================== Visão Geral ============================== */
  function buildCandidateCard(id) {
    var c = window.CANDIDATES_DATA[id];
    var b = c.basics;
    var card = el("div", "candidate-card");

    var head = el("div", "candidate-card-head");
    head.appendChild(buildAvatar(b, "candidate-avatar-lg"));
    var nameWrap = document.createElement("div");
    var h3 = el("h3", "candidate-name");
    h3.textContent = b.ballotName || b.name;
    var party = el("div", "candidate-party");
    party.textContent = b.party + " · nº " + b.number;
    nameWrap.appendChild(h3);
    nameWrap.appendChild(party);
    head.appendChild(nameWrap);
    card.appendChild(head);

    var meta = el("dl", "candidate-meta");
    function metaRow(label, value) {
      if (!value) return;
      var dt = document.createElement("dt");
      dt.textContent = label + ": ";
      var dd = document.createElement("dd");
      dd.textContent = value;
      meta.appendChild(dt);
      meta.appendChild(dd);
    }
    metaRow("Nome completo", b.name);
    var age = calcAge(b.birthDate);
    metaRow("Idade", age != null ? age + " anos" : null);
    metaRow("Vice", b.vp);
    metaRow("Coligação", b.coalition);
    card.appendChild(meta);

    return card;
  }

  function buildCandidateGrid() {
    var host = document.getElementById("candidate-grid");
    if (!host) return;
    host.innerHTML = "";
    visibleIds.forEach(function (id) {
      host.appendChild(buildCandidateCard(id));
    });
  }

  /* ============================== Citações ============================== */
  function citeLinks(quotes, candidateId) {
    var wrap = el("div", "cite-links");
    var src = (window.SOURCES_DATA || {})[candidateId];
    (quotes || []).forEach(function (q) {
      var a = document.createElement("a");
      a.className = "cite-link";
      a.textContent = "p. " + q.page;
      // Prioriza o PDF local com âncora de página (#page=N, suportado pelo
      // visualizador de PDF nativo do navegador) — leva direto ao trecho
      // citado, igual ao link "PDF (cópia local)" de Fontes. Sem cópia local
      // (build do Artifact, que zera `localPdfPath`), cai para a página do
      // dataset no TSE, sem âncora de página (não é um PDF direto).
      if (src && src.localPdfPath) {
        a.href = src.localPdfPath + "#page=" + q.page;
      } else {
        a.href = src ? src.officialPdfUrl : "#";
      }
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    return wrap;
  }

  // Bloco de propostas: título nosso (redigido para identificar o card) +
  // uma ou mais citações literais do plano, cada uma com a página.
  function proposalListBlock(entries, candidateId) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = "Propostas";
    block.appendChild(lbl);
    if (entries && entries.length) {
      entries.forEach(function (entry) {
        var item = el("div", "proposal-item");
        var title = el("p", "proposal-title");
        title.textContent = entry.title;
        item.appendChild(title);
        (entry.quotes || []).forEach(function (q) {
          var bq = el("blockquote", "plan-quote");
          bq.textContent = q.quote;
          item.appendChild(bq);
        });
        item.appendChild(citeLinks(entry.quotes, candidateId));
        block.appendChild(item);
      });
    } else {
      var empty = el("p", "compare-empty");
      empty.textContent = "Não abordado explicitamente no plano de governo.";
      block.appendChild(empty);
    }
    return block;
  }

  function candidateCardHead(basics) {
    var head = el("div", "compare-card-head");
    head.appendChild(buildAvatar(basics, "candidate-avatar-sm"));
    var nameWrap = document.createElement("div");
    var h4 = document.createElement("h4");
    h4.textContent = basics.ballotName || basics.name;
    var party = el("div", "candidate-party");
    party.textContent = basics.party;
    nameWrap.appendChild(h4);
    nameWrap.appendChild(party);
    head.appendChild(nameWrap);
    return head;
  }

  // Um bloco de citações "cruas" (usado no Diagnóstico: sem título nosso,
  // só o trecho do plano + a página de onde foi tirado).
  function quoteListBlock(label, entries, candidateId) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = label;
    block.appendChild(lbl);
    if (entries && entries.length) {
      entries.forEach(function (entry) {
        var bq = el("blockquote", "plan-quote");
        bq.textContent = entry.quote;
        block.appendChild(bq);
        block.appendChild(citeLinks([entry], candidateId));
      });
    } else {
      var empty = el("p", "compare-empty");
      empty.textContent = "Não abordado explicitamente no plano de governo.";
      block.appendChild(empty);
    }
    return block;
  }

  // Bloco usado no lugar de Diagnóstico/Propostas para um candidato que
  // registrou candidatura sem entregar Proposta de Governo ao TSE
  // (`SOURCES_DATA[id].planFiled === false`) — mensagem bem diferente de
  // "Não abordado explicitamente...", que pressupõe um plano real que
  // simplesmente não fala daquele tema.
  function noPlanBlock(kind) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = kind === "diagnosis" ? "Diagnóstico" : "Propostas";
    block.appendChild(lbl);
    var empty = el("p", "compare-empty compare-empty-noplan");
    empty.textContent = "Esta candidatura não registrou Proposta de Governo no TSE — não há trecho para citar.";
    block.appendChild(empty);
    return block;
  }

  // Card de Economia: lê de `c.economy[subthemeId]`.
  function buildEconomyCard(id, subthemeId, kind) {
    var c = window.CANDIDATES_DATA[id];
    var src = (window.SOURCES_DATA || {})[id];
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(candidateCardHead(c.basics));
    if (src && src.planFiled === false) {
      card.appendChild(noPlanBlock(kind));
    } else {
      var entry = (c.economy || {})[subthemeId] || { diagnosis: [], proposals: [] };
      if (kind === "diagnosis") {
        card.appendChild(quoteListBlock("Diagnóstico", entry.diagnosis, id));
      } else {
        card.appendChild(proposalListBlock(entry.proposals, id));
      }
    }
    return card;
  }

  // Card dos outros 6 temas (Educação, Segurança, Saúde, Política Externa,
  // Combate à Corrupção, Direitos e Bem-Estar): lê de `c.themes[themeId]` —
  // mesmo formato de Economia (Diagnóstico + Propostas), só que sem nível
  // de subtema.
  function buildThemeCard(id, themeId, kind) {
    var c = window.CANDIDATES_DATA[id];
    var src = (window.SOURCES_DATA || {})[id];
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(candidateCardHead(c.basics));
    if (src && src.planFiled === false) {
      card.appendChild(noPlanBlock(kind));
    } else {
      var entry = (c.themes || {})[themeId] || { diagnosis: [], proposals: [] };
      if (kind === "diagnosis") {
        card.appendChild(quoteListBlock("Diagnóstico", entry.diagnosis, id));
      } else {
        card.appendChild(proposalListBlock(entry.proposals, id));
      }
    }
    return card;
  }

  /* ============================== Abas ============================== */
  // Par de abas Diagnóstico/Propostas — nível mais interno, reusado por todo
  // tema (com ou sem subtema). `cardBuilder(id, kind)` devolve o card de um
  // candidato para aquele kind ("diagnosis" ou "proposals").
  function buildKindTabs(tabsHost, panelsHost, ids, cardBuilder) {
    var kinds = [{ label: "Diagnóstico", kind: "diagnosis" }, { label: "Propostas", kind: "proposals" }];
    tabsHost.setAttribute("role", "tablist");
    kinds.forEach(function (k, ki) {
      var btn = el("button", "tab-btn tab-btn-inner");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", ki === 0 ? "true" : "false");
      btn.textContent = k.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.setAttribute("role", "tabpanel");
      if (ki !== 0) panel.hidden = true;
      var grid = el("div", "compare-grid");
      ids.forEach(function (id) { grid.appendChild(cardBuilder(id, k.kind)); });
      panel.appendChild(grid);
      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  // Seção "Temas": abas de nível 1 para cada tema de window.THEMES. Economia
  // é o único com `subthemes` — ganha um segundo nível de abas (um por
  // subtema) antes do par Diagnóstico/Propostas; os outros 6 temas vão direto
  // para o par Diagnóstico/Propostas. `ids` e `idPrefix` continuam
  // parametrizados (em vez de lerem o estado global direto) para a seção ser
  // montável em qualquer host, sem ids de DOM colidirem.
  function buildTemasSection(tabsHost, panelsHost, ids, idPrefix) {
    if (!tabsHost || !panelsHost) return;
    var themes = window.THEMES || [];

    tabsHost.setAttribute("role", "tablist");
    themes.forEach(function (theme, ti) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = idPrefix + "-tab-" + theme.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", idPrefix + "-panel-" + theme.id);
      btn.setAttribute("aria-selected", ti === 0 ? "true" : "false");
      btn.textContent = theme.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = idPrefix + "-panel-" + theme.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", idPrefix + "-tab-" + theme.id);
      if (ti !== 0) panel.hidden = true;

      if (theme.subthemes) {
        // Economia: um nível a mais de abas, uma por subtema.
        var subTabs = el("div", "tabs");
        var subPanels = document.createElement("div");
        subTabs.setAttribute("role", "tablist");
        theme.subthemes.forEach(function (sub, si) {
          var subBtn = el("button", "tab-btn");
          subBtn.type = "button";
          subBtn.setAttribute("role", "tab");
          subBtn.setAttribute("aria-selected", si === 0 ? "true" : "false");
          subBtn.textContent = sub.label;
          subTabs.appendChild(subBtn);

          var subPanel = el("div", "tab-panel");
          subPanel.setAttribute("role", "tabpanel");
          if (si !== 0) subPanel.hidden = true;
          var subHeading = el("h3", "panel-heading");
          subHeading.textContent = sub.label;
          subPanel.appendChild(subHeading);

          var kindTabs = el("div", "tabs tabs-inner");
          var kindPanels = document.createElement("div");
          buildKindTabs(kindTabs, kindPanels, ids, function (id, kind) {
            return buildEconomyCard(id, sub.id, kind);
          });
          subPanel.appendChild(kindTabs);
          subPanel.appendChild(kindPanels);
          subPanels.appendChild(subPanel);

          subBtn.addEventListener("click", function () {
            subTabs.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
            Array.prototype.forEach.call(subPanels.children, function (p) { p.hidden = true; });
            subBtn.setAttribute("aria-selected", "true");
            subPanel.hidden = false;
          });
        });
        panel.appendChild(subTabs);
        panel.appendChild(subPanels);
      } else {
        var heading = el("h3", "panel-heading");
        heading.textContent = theme.label;
        panel.appendChild(heading);
        var kindTabs = el("div", "tabs tabs-inner");
        var kindPanels = document.createElement("div");
        buildKindTabs(kindTabs, kindPanels, ids, function (id, kind) {
          return buildThemeCard(id, theme.id, kind);
        });
        panel.appendChild(kindTabs);
        panel.appendChild(kindPanels);
      }

      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        // Só os filhos diretos de panelsHost (os painéis de tema), não
        // querySelectorAll(".tab-panel") — isso pegaria também os painéis
        // internos de subtema/Diagnóstico/Propostas aninhados dentro do
        // painel que está prestes a aparecer, e o deixaria sem nenhuma aba
        // interna visível até o usuário clicar manualmente numa delas.
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  /* ============================== Contagem de Palavras ============================== */
  // Contagem MECÂNICA (não citação): conta ocorrências da palavra digitada
  // no texto INTEGRAL de cada plano (window.PLAN_TEXTS, gerado por
  // scripts/build_plan_texts.py a partir do PDF via PyMuPDF) — diferente do
  // resto do site, que só mostra trechos curados com página.

  // O \b do regex em JS só reconhece [A-Za-z0-9_] como caractere de palavra
  // — uma palavra acentuada ("política") sem normalizar antes pode não
  // casar a fronteira nenhuma. Normalizar (remover diacríticos + minúsculas)
  // dos dois lados não é só pra ignorar maiúscula/acento: é o que faz o \b
  // funcionar direito em português.
  function normalizeForMatch(str) {
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function countWordOccurrences(word, text) {
    var needle = normalizeForMatch(word).trim();
    if (!needle) return 0;
    var escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("\\b" + escaped + "\\b", "g");
    var matches = normalizeForMatch(text).match(re);
    return matches ? matches.length : 0;
  }

  // Conta contra visibleIds; separa quem não tem plano registrado
  // (planFiled: false) — fica de fora do gráfico com aviso, nunca vira uma
  // barra de "0" (0 ocorrências reais e "sem plano pra contar" são fatos
  // diferentes).
  function computeWordCounts(word) {
    var rows = [];
    var excludedNoPlan = [];
    visibleIds.forEach(function (id) {
      var src = (window.SOURCES_DATA || {})[id];
      var c = window.CANDIDATES_DATA[id];
      var label = c.basics.ballotName || c.basics.name;
      if (src && src.planFiled === false) {
        excludedNoPlan.push({ id: id, label: label });
        return;
      }
      var text = (window.PLAN_TEXTS || {})[id] || "";
      rows.push({ id: id, label: label, count: countWordOccurrences(word, text) });
    });
    // Array#sort é estável: candidatos empatados mantêm a ordem alfabética
    // original de visibleIds.
    rows.sort(function (a, b) { return a.count - b.count; });
    return { rows: rows, excludedNoPlan: excludedNoPlan };
  }

  // Uma linha do gráfico: rótulo, trilho+barra (largura proporcional ao
  // maior valor do conjunto atual) e o número exato ao final — diferente de
  // um gráfico de tendência com muitos pontos, aqui o valor exato de cada
  // candidato É o dado que a pessoa veio buscar, então toda barra é
  // rotulada (não só a extrema), com o número numa coluna fixa à direita em
  // vez de "na ponta da barra" — assim ele não pula de posição a cada linha
  // conforme a barra cresce/encolhe.
  // Tamanho total (em palavras) do plano de cada candidato — só pra
  // calcular a taxa do tooltip de hover, não tem relação com a contagem da
  // palavra buscada. Calculado uma vez por candidato e guardado em cache
  // (window.PLAN_TEXTS não muda em runtime, e alguns planos passam de 40 mil
  // palavras — não vale recalcular isso a cada hover).
  var planWordCountCache = {};
  function getPlanWordCount(id) {
    if (planWordCountCache[id] == null) {
      var text = (window.PLAN_TEXTS || {})[id] || "";
      planWordCountCache[id] = text.split(/\s+/).filter(Boolean).length;
    }
    return planWordCountCache[id];
  }

  // Texto do tooltip de hover na barra: taxa de ocorrência a cada 10 mil
  // palavras do plano — mas só quando o plano tem pelo menos 10 mil
  // palavras, senão a taxa extrapolaria demais pra ser representativa (ex.:
  // 1 ocorrência num plano de 2 mil palavras "viraria" 5 a cada 10 mil, um
  // número que soa preciso mas não é). Abaixo de 10 mil, mostra só o
  // tamanho do plano, sem taxa nenhuma.
  function wordCountTooltip(row) {
    var totalWords = getPlanWordCount(row.id);
    if (totalWords >= 10000) {
      var rate = (row.count / totalWords) * 10000;
      return rate.toFixed(1).replace(".", ",") + " ocorrências a cada 10 mil palavras";
    }
    return row.label + " possui " + totalWords.toLocaleString("pt-BR") + " palavras no plano.";
  }

  function wordCountRow(row, maxCount) {
    var wrap = el("div", "word-count-row");
    var label = el("span", "word-count-label");
    label.textContent = row.label;
    var track = el("div", "word-count-track");
    var tooltip = wordCountTooltip(row);
    track.dataset.tooltip = tooltip;
    track.setAttribute("aria-label", tooltip);
    track.tabIndex = 0;
    var fill = el("div", "word-count-fill");
    fill.style.width = (maxCount > 0 ? (row.count / maxCount) * 100 : 0) + "%";
    track.appendChild(fill);
    var value = el("span", "word-count-value");
    value.textContent = String(row.count);
    wrap.appendChild(label);
    wrap.appendChild(track);
    wrap.appendChild(value);
    return wrap;
  }

  // Limpa e reconstrói #word-count-chart inteiro a cada busca — mesmo padrão
  // de buildCandidateGrid/buildSourcesList (conteúdo barato de recriar).
  function renderWordCountChart(word) {
    var host = document.getElementById("word-count-chart");
    if (!host) return;
    host.innerHTML = "";

    var result = computeWordCounts(word);

    if (result.excludedNoPlan.length) {
      var note = el("p", "compare-empty compare-empty-noplan");
      var names = result.excludedNoPlan.map(function (r) { return r.label; }).join(", ");
      var plural = result.excludedNoPlan.length > 1;
      note.textContent = names + (plural ? " não registraram" : " não registrou") +
        " Proposta de Governo no TSE — exclu" + (plural ? "ídos" : "ído") + " da contagem.";
      host.appendChild(note);
    }

    if (!result.rows.length) return; // só sobraram excluídos

    var maxCount = result.rows.reduce(function (m, r) { return Math.max(m, r.count); }, 0);
    var list = el("div", "word-count-list");
    result.rows.forEach(function (row) {
      list.appendChild(wordCountRow(row, maxCount));
    });
    host.appendChild(list);
  }

  // Vincula o submit do formulário uma única vez (chamado só a partir de
  // init()) — usar <form> dá Enter-pra-buscar de graça, sem precisar de
  // listener de keydown separado.
  function buildWordCountSection() {
    var form = document.getElementById("word-count-form");
    var input = document.getElementById("word-count-input");
    if (!form || !input) return;
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var word = input.value.trim();
      if (!word) return; // busca vazia: não mexe no gráfico anterior
      lastSearchedWord = word;
      renderWordCountChart(lastSearchedWord);
    });
  }

  /* ============================== Fontes ============================== */
  // Lista os candidatos de orderedCandidateIds() — Fontes é a referência de
  // transparência do site: cada plano com o link do PDF oficial no TSE.
  function buildSourcesList() {
    var host = document.getElementById("sources-list");
    if (!host) return;
    host.innerHTML = "";
    orderedCandidateIds().forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var src = (window.SOURCES_DATA || {})[id];
      if (!src) return;

      var row = el("div", "source-row");
      var who = document.createElement("div");
      var whoName = el("span", "who");
      whoName.textContent = (c.basics.ballotName || c.basics.name) + " ";
      var planTitle = el("span", "plan-title");
      who.appendChild(whoName);
      who.appendChild(planTitle);
      row.appendChild(who);

      if (src.planFiled === false) {
        row.classList.add("source-row-noplan");
        planTitle.textContent = "— Não registrou Proposta de Governo no TSE";
      } else {
        planTitle.textContent = "— " + src.planTitle + (src.pageCount ? " (" + src.pageCount + " páginas)" : "");
        var links = el("div", "links");
        var pdfLink = document.createElement("a");
        pdfLink.href = src.officialPdfUrl;
        pdfLink.target = "_blank";
        pdfLink.rel = "noopener";
        pdfLink.textContent = "Ver no TSE";
        links.appendChild(pdfLink);
        if (src.localPdfPath) {
          var localLink = document.createElement("a");
          localLink.href = src.localPdfPath;
          localLink.target = "_blank";
          localLink.rel = "noopener";
          localLink.textContent = "PDF (cópia local)";
          links.appendChild(localLink);
        }
        row.appendChild(links);
      }

      host.appendChild(row);
    });
  }

  /* ============================== Troca de tela (hero <-> seções) ============================== */
  // Só uma "tela" fica visível por vez: o cardzinho inicial (.hero) ou uma
  // das 5 seções — nunca os dois juntos, e nunca mais de uma seção. Troca
  // de tela nunca mexe na URL (sem hash, sem history.pushState) — recarregar
  // a página ou compartilhar o link sempre cai no cardzinho inicial, de
  // propósito. viewId "hero" volta pro cardzinho; qualquer outro precisa
  // bater com o id de uma .page-section.
  function showView(viewId) {
    var hero = document.querySelector(".hero");
    if (hero) hero.hidden = viewId !== "hero";

    var sections = Array.prototype.slice.call(document.querySelectorAll(".page-section"));
    sections.forEach(function (s) { s.hidden = s.id !== viewId; });

    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    links.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + viewId);
    });

    // Troca de tela é contexto novo, não navegação incremental — sem isso a
    // pessoa cairia no meio de uma seção nova na posição de scroll da
    // anterior. Sem animação de propósito: é uma troca de tela, não um
    // scroll até um trecho da mesma página.
    window.scrollTo(0, 0);
  }

  // Liga o clique dos links do menu e do logo uma única vez (chamado só a
  // partir de init()) — cada um sempre com preventDefault(), já que nenhuma
  // troca de tela deve tocar na URL.
  function initViewSwitcher() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    links.forEach(function (l) {
      l.addEventListener("click", function (ev) {
        ev.preventDefault();
        // Trocar de tela é o objetivo do menu no celular — fecha sozinho,
        // senão o painel continuaria cobrindo o topo da seção recém-aberta.
        closeNavMenu();
        showView(l.getAttribute("href").slice(1));
      });
    });

    var brand = document.getElementById("brand-home");
    if (brand) {
      brand.addEventListener("click", function (ev) {
        ev.preventDefault();
        closeNavMenu();
        showView("hero");
      });
    }
  }

  /* ============================== Menu retrátil (celular) ============================== */
  // Acima de 900px o hambúrguer está com display: none e o menu é sempre
  // visível na barra — a classe .nav-open não tem efeito nenhum lá, mas é
  // limpa mesmo assim (ver o listener de resize) pra o estado não ficar
  // "preso" ao girar o celular ou redimensionar a janela. Espelha o
  // @media (max-width: 900px) do styles.css.
  var NAV_MENU_BREAKPOINT = 900;

  function setNavMenu(open) {
    var topbar = document.querySelector(".topbar");
    var btn = document.getElementById("nav-toggle");
    if (!topbar || !btn) return;
    topbar.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Fechar menu de seções" : "Abrir menu de seções");
  }

  function closeNavMenu() {
    setNavMenu(false);
  }

  function initNavToggle() {
    var topbar = document.querySelector(".topbar");
    var btn = document.getElementById("nav-toggle");
    if (!topbar || !btn) return;

    btn.addEventListener("click", function () {
      setNavMenu(!topbar.classList.contains("nav-open"));
    });

    // Toque fora da barra fecha o menu (comportamento esperado de menu
    // sobreposto). Fica no document, mas só faz algo se estiver aberto.
    document.addEventListener("click", function (ev) {
      if (!topbar.classList.contains("nav-open")) return;
      if (!topbar.contains(ev.target)) closeNavMenu();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeNavMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > NAV_MENU_BREAKPOINT) closeNavMenu();
    });
  }

  /* ============================== Tema claro/escuro ============================== */
  // Escuro é o padrão da identidade do Follow the Money (mesmo comportamento
  // de ftm-dados e ftm-analises): o `data-theme` do <html> é sempre explícito
  // — pintado antes do CSS pelo script inline do index.html, pra não piscar —
  // e este botão só alterna e persiste. Não há modo "seguir o sistema": sem
  // escolha salva, o site abre escuro.
  var THEME_STORAGE_KEY = "ftm_eleicoes_tema";

  // localStorage pode lançar exceção em contexto restrito (modo privado
  // antigo, iframe sandboxed, extensão bloqueando) — nunca deixar isso
  // quebrar o restante de init().
  function readSavedTheme() {
    try {
      var v = localStorage.getItem(THEME_STORAGE_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function writeSavedTheme(value) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch (e) {
      // Sem persistência entre visitas nesse caso — o toggle ainda funciona
      // pra sessão atual.
    }
  }

  function effectiveTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  // Os dois ícones (sol/lua) estão no HTML e quem troca qual aparece é o CSS,
  // a partir do data-theme — aqui só o rótulo acessível muda, já que o botão
  // não tem texto visível.
  function paintThemeToggle(btn) {
    var proximo = effectiveTheme() === "dark" ? "claro" : "escuro";
    btn.setAttribute("aria-label", "Mudar para o modo " + proximo);
    btn.setAttribute("title", "Mudar para o modo " + proximo);
  }

  function initThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    var saved = readSavedTheme();
    document.documentElement.setAttribute("data-theme", saved || effectiveTheme());
    paintThemeToggle(btn);

    btn.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      writeSavedTheme(next);
      paintThemeToggle(btn);
    });
  }

  function init() {
    visibleIds = orderedCandidateIds();

    buildCandidateGrid();
    buildTemasSection(
      document.getElementById("temas-tabs"),
      document.getElementById("temas-panels"),
      visibleIds,
      "temas"
    );
    buildWordCountSection();
    buildSourcesList();
    initThemeToggle();
    initViewSwitcher();
    initNavToggle();
    // O cardzinho inicial já começa visível e as 4 seções já começam com
    // `hidden` declarado no HTML — não precisa de um showView("hero") aqui.
  }

  document.addEventListener("DOMContentLoaded", init);
})();
