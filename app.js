(function () {
  "use strict";

  function el(tag, className) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    return e;
  }

  function svgEl(tag, attrs) {
    var e = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
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
    metaRow("Vice", b.vp);
    metaRow("Coligação", b.coalition);
    card.appendChild(meta);

    return card;
  }

  function buildCandidateGrid() {
    var host = document.getElementById("candidate-grid");
    if (!host) return;
    orderedCandidateIds().forEach(function (id) {
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
      a.href = src ? src.officialPdfUrl : "#";
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

  function compareCardHead(basics) {
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

  // Economia: card de Diagnóstico (só citações) OU card de Propostas
  // (título nosso + citações), dependendo de `kind`.
  function buildEconomyCard(id, subthemeId, kind) {
    var c = window.CANDIDATES_DATA[id];
    var entry = (c.economy || {})[subthemeId] || { diagnosis: [], proposals: [] };
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(compareCardHead(c.basics));
    if (kind === "diagnosis") {
      var block = quoteListBlock("Diagnóstico", entry.diagnosis, id);
      card.appendChild(block);
    } else {
      card.appendChild(proposalListBlock(entry.proposals, id));
    }
    return card;
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

  // Outros temas: só "Propostas" (título nosso + citações), sem Diagnóstico.
  function buildOtherThemeCard(id, themeId) {
    var c = window.CANDIDATES_DATA[id];
    var entry = (c.otherThemes || {})[themeId] || { proposals: [] };
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(compareCardHead(c.basics));
    card.appendChild(proposalListBlock(entry.proposals, id));
    return card;
  }

  // Abas genéricas de 1 nível (usadas em Outros Temas, e dentro de cada
  // subtema de Economia para Diagnóstico/Propostas). `ids` é opcional —
  // por padrão mostra os 5 candidatos, mas a aba Comparar 1×1 chama isto
  // de novo passando só os 2 candidatos escolhidos.
  function buildTabs(tabsHost, panelsHost, topics, buildCard, idPrefix, ids) {
    ids = ids || orderedCandidateIds();
    tabsHost.setAttribute("role", "tablist");
    topics.forEach(function (topic, ti) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = idPrefix + "-tab-" + topic.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", idPrefix + "-panel-" + topic.id);
      btn.setAttribute("aria-selected", ti === 0 ? "true" : "false");
      btn.textContent = topic.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = idPrefix + "-panel-" + topic.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", idPrefix + "-tab-" + topic.id);
      if (ti !== 0) panel.hidden = true;

      var grid = el("div", "compare-grid");
      ids.forEach(function (id) { grid.appendChild(buildCard(id, topic.id)); });
      panel.appendChild(grid);
      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        // Só os filhos diretos de panelsHost, não querySelectorAll(".tab-panel")
        // — esse painel de tema não tem abas aninhadas dentro dele, mas o de
        // Economia (buildEconomySection, logo abaixo) tem, e um
        // querySelectorAll pegaria também os painéis internos de
        // Diagnóstico/Propostas do painel que está prestes a aparecer.
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  // Economia: abas de subtema (nível 1) e, dentro de cada painel de subtema,
  // um segundo par de abas Diagnóstico/Propostas (nível 2). `ids` e
  // `idPrefix` são parametrizados porque a aba Comparar 1×1 reusa esta
  // mesma função para só 2 candidatos, num host e prefixo de id diferentes
  // (evita ids de DOM duplicados entre a seção Economia e a Comparação).
  function buildEconomySection(tabsHost, panelsHost, ids, idPrefix) {
    if (!tabsHost || !panelsHost) return;
    var subthemes = window.ECONOMY_SUBTHEMES || [];

    tabsHost.setAttribute("role", "tablist");
    subthemes.forEach(function (sub, si) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = idPrefix + "-tab-" + sub.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", idPrefix + "-panel-" + sub.id);
      btn.setAttribute("aria-selected", si === 0 ? "true" : "false");
      btn.textContent = sub.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = idPrefix + "-panel-" + sub.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", idPrefix + "-tab-" + sub.id);
      if (si !== 0) panel.hidden = true;

      var heading = el("h3", "panel-heading");
      heading.textContent = sub.label;
      panel.appendChild(heading);

      var innerTabs = el("div", "tabs tabs-inner");
      innerTabs.setAttribute("role", "tablist");
      var innerPanels = document.createElement("div");
      var kinds = [{ id: "diagnostico", label: "Diagnóstico", kind: "diagnosis" }, { id: "propostas", label: "Propostas", kind: "proposals" }];
      kinds.forEach(function (k, ki) {
        var innerBtn = el("button", "tab-btn tab-btn-inner");
        innerBtn.type = "button";
        innerBtn.setAttribute("role", "tab");
        innerBtn.setAttribute("aria-selected", ki === 0 ? "true" : "false");
        innerBtn.textContent = k.label;
        innerTabs.appendChild(innerBtn);

        var innerPanel = el("div", "tab-panel");
        innerPanel.setAttribute("role", "tabpanel");
        if (ki !== 0) innerPanel.hidden = true;
        var grid = el("div", "compare-grid");
        ids.forEach(function (id) { grid.appendChild(buildEconomyCard(id, sub.id, k.kind)); });
        innerPanel.appendChild(grid);
        innerPanels.appendChild(innerPanel);

        innerBtn.addEventListener("click", function () {
          innerTabs.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
          Array.prototype.forEach.call(innerPanels.children, function (p) { p.hidden = true; });
          innerBtn.setAttribute("aria-selected", "true");
          innerPanel.hidden = false;
        });
      });
      panel.appendChild(innerTabs);
      panel.appendChild(innerPanels);
      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        // O bug estava aqui: querySelectorAll(".tab-panel") pegava também os
        // painéis internos de Diagnóstico/Propostas (mesma classe, aninhados
        // dentro de cada painel de subtema) e escondia os dois — o painel
        // recém-selecionado ficava sem nenhum dos dois visível até o usuário
        // clicar manualmente numa aba interna. Só os filhos diretos de
        // panelsHost (os painéis de subtema) devem ser escondidos aqui.
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  /* ============================== Filtro de candidatos ============================== */
  // Estado compartilhado entre os dois filtros (Economia e Outros Temas):
  // esconder um candidato num afeta o outro também, pra não confundir "por
  // que ele sumiu daqui mas não dali". Só mexe em cards dentro de Economia
  // e Outros Temas — os cards da aba Comparar 1×1 usam os mesmos
  // componentes, mas não devem ser afetados por este filtro.
  var hiddenCandidates = {};
  var filterChipsByCandidate = {};

  function setCandidateHidden(id, hide) {
    hiddenCandidates[id] = hide;
    document.querySelectorAll(
      '#economia .compare-card[data-candidate="' + id + '"], #outros-temas .compare-card[data-candidate="' + id + '"]'
    ).forEach(function (card) { card.hidden = hide; });
    (filterChipsByCandidate[id] || []).forEach(function (chip) {
      chip.setAttribute("aria-pressed", hide ? "false" : "true");
    });
  }

  function buildCandidateFilter(host) {
    if (!host) return;
    var row = el("div", "candidate-filter");
    orderedCandidateIds().forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var chip = el("button", "legend-chip");
      chip.type = "button";
      chip.setAttribute("aria-pressed", hiddenCandidates[id] ? "false" : "true");
      var swatch = el("span", "legend-swatch");
      swatch.style.background = "var(--cand-" + id + ")";
      chip.appendChild(swatch);
      chip.appendChild(document.createTextNode(c.basics.ballotName || c.basics.name));
      chip.addEventListener("click", function () {
        setCandidateHidden(id, chip.getAttribute("aria-pressed") === "true");
      });
      filterChipsByCandidate[id] = filterChipsByCandidate[id] || [];
      filterChipsByCandidate[id].push(chip);
      row.appendChild(chip);
    });
    host.appendChild(row);
  }

  /* ============================== Comparar 1×1 ============================== */
  function buildComparisonSection() {
    var selectA = document.getElementById("compare-select-a");
    var selectB = document.getElementById("compare-select-b");
    var headHost = document.getElementById("compare-head-to-head");
    var econTabsHost = document.getElementById("compare-economy-tabs");
    var econPanelsHost = document.getElementById("compare-economy-panels");
    var otherTabsHost = document.getElementById("compare-other-tabs");
    var otherPanelsHost = document.getElementById("compare-other-panels");
    if (!selectA || !selectB) return;

    var ids = orderedCandidateIds();
    ids.forEach(function (id) {
      var label = (window.CANDIDATES_DATA[id].basics.ballotName || window.CANDIDATES_DATA[id].basics.name);
      [selectA, selectB].forEach(function (sel) {
        var opt = document.createElement("option");
        opt.value = id;
        opt.textContent = label;
        sel.appendChild(opt);
      });
    });
    selectA.value = ids[0];
    selectB.value = ids[1] || ids[0];

    function render() {
      var a = selectA.value, b = selectB.value;

      headHost.innerHTML = "";
      headHost.appendChild(buildCandidateCard(a));
      headHost.appendChild(buildCandidateCard(b));

      econTabsHost.innerHTML = "";
      econPanelsHost.innerHTML = "";
      buildEconomySection(econTabsHost, econPanelsHost, [a, b], "cmp-econ");

      otherTabsHost.innerHTML = "";
      otherPanelsHost.innerHTML = "";
      buildTabs(otherTabsHost, otherPanelsHost, window.OTHER_THEMES || [], buildOtherThemeCard, "cmp-other", [a, b]);
    }

    // Não deixa escolher o mesmo candidato nos dois lados — troca o outro
    // seletor automaticamente para o próximo disponível.
    selectA.addEventListener("change", function () {
      if (selectA.value === selectB.value) {
        var alt = ids.filter(function (id) { return id !== selectA.value; })[0];
        if (alt) selectB.value = alt;
      }
      render();
    });
    selectB.addEventListener("change", function () {
      if (selectB.value === selectA.value) {
        var alt = ids.filter(function (id) { return id !== selectB.value; })[0];
        if (alt) selectA.value = alt;
      }
      render();
    });

    render();
  }

  /* ============================== Perfil Político (spider) ============================== */
  function polarPoint(cx, cy, r, angleDeg) {
    var rad = (angleDeg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  }

  function labelAnchor(x, cx) {
    if (x > cx + 6) return "start";
    if (x < cx - 6) return "end";
    return "middle";
  }

  // Radar genérico de N eixos, reusado pelo Perfil Político (0–100) e pela
  // Distância do Estado Alocador (0–3) — `axes`/`scores`/`maxScore` chegam
  // por parâmetro em vez de ler window.PROFILE_* direto, para que os dois
  // gráficos não compartilhem estado nem se pisem.
  function buildRadarChart(ids, axes, scores, maxScore, ariaLabel) {
    var n = axes.length;
    if (!n) return null;
    // viewBox inicial é só um chute generoso — os rótulos diagonais (ex.:
    // "Ritmo do Ajuste Fiscal") têm largura variável conforme a fonte, então
    // o valor final vem de fitSpiderViewBox() medindo o conteúdo já
    // desenhado (evita cortar lateral em qualquer combinação de fonte/tela).
    var size = 520, cx = size / 2, cy = size / 2, R = 175;
    var svg = svgEl("svg", {
      viewBox: "0 0 " + size + " " + size, class: "spider-svg",
      role: "img", "aria-label": ariaLabel
    });

    [0.25, 0.5, 0.75, 1].forEach(function (frac) {
      var pts = axes.map(function (_, i) { return polarPoint(cx, cy, R * frac, i * 360 / n).join(","); }).join(" ");
      svg.appendChild(svgEl("polygon", { points: pts, class: "spider-ring" }));
    });

    axes.forEach(function (axis, i) {
      var angle = i * 360 / n;
      var p = polarPoint(cx, cy, R, angle);
      svg.appendChild(svgEl("line", { x1: cx, y1: cy, x2: p[0], y2: p[1], class: "spider-axis-line" }));

      var lp = polarPoint(cx, cy, R + 30, angle);
      var label = svgEl("text", { x: lp[0], y: lp[1], class: "spider-axis-label", "text-anchor": labelAnchor(lp[0], cx) });
      label.textContent = axis.label;
      svg.appendChild(label);
    });

    ids.forEach(function (id) {
      var s = scores[id];
      var c = window.CANDIDATES_DATA[id];
      if (!s || !c) return;
      var g = svgEl("g", { class: "spider-series", "data-candidate": id, style: "--cand-color:var(--cand-" + id + ")" });
      var pts = axes.map(function (axis, i) {
        var v = Math.max(0, Math.min(maxScore, s[axis.id] || 0));
        return polarPoint(cx, cy, R * v / maxScore, i * 360 / n);
      });
      g.appendChild(svgEl("polygon", { points: pts.map(function (p) { return p.join(","); }).join(" "), class: "spider-shape" }));
      pts.forEach(function (p, i) {
        var axis = axes[i];
        var v = Math.max(0, Math.min(maxScore, s[axis.id] || 0));
        var dot = svgEl("circle", { cx: p[0], cy: p[1], r: 4, class: "spider-dot" });
        var title = svgEl("title", {});
        var rationale = s.rationale && s.rationale[axis.id] ? s.rationale[axis.id] : "";
        title.textContent = (c.basics.ballotName || c.basics.name) + " — " + axis.label + ": " + v + "/" + maxScore + ". " + rationale;
        dot.appendChild(title);
        g.appendChild(dot);
      });
      svg.appendChild(g);
    });

    return svg;
  }

  // Recalcula o viewBox a partir da caixa real do conteúdo (só dá pra medir
  // depois de anexado ao DOM) — os rótulos diagonais variam de largura
  // conforme a fonte disponível, então um viewBox fixo cortava lateral em
  // telas/fontes diferentes. Com margem, garante que nada fica de fora.
  function fitSpiderViewBox(svg) {
    try {
      var box = svg.getBBox();
      var pad = 10;
      svg.setAttribute("viewBox", (box.x - pad) + " " + (box.y - pad) + " " + (box.width + pad * 2) + " " + (box.height + pad * 2));
    } catch (e) { /* getBBox indisponível: mantém o viewBox padrão */ }
  }

  // Lista compacta dos N eixos com seus dois polos — o gráfico em si só
  // rotula o nome do eixo, então isso é o que explica o sentido de cada um
  // (em vez de espremer os dois polos perto do centro do SVG, ilegível com
  // vários eixos sobrepostos). Reusada pelo Perfil Político e pela Distância
  // do Estado Alocador — `axes` chega por parâmetro.
  function buildRadarAxisKey(host, axes) {
    var ul = el("ul", "axis-key");
    axes.forEach(function (axis) {
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = axis.label + ": ";
      li.appendChild(strong);
      li.appendChild(document.createTextNode(axis.low + " ↔ " + axis.high));
      ul.appendChild(li);
    });
    host.appendChild(ul);
  }

  // Legenda genérica de um gráfico radar: chave de eixos + chips pra
  // esconder/mostrar candidato + detalhe retrátil por candidato com nota e
  // justificativa de cada eixo. `svgScope` restringe a busca por
  // `.spider-series` ao SVG deste gráfico específico — importante porque,
  // com dois radares na mesma página (Perfil Político + Estado Alocador),
  // ambos têm `.spider-series[data-candidate="lula"]`, e um
  // document.querySelector global pegaria sempre o primeiro do DOM,
  // escondendo a série errada quando o chip clicado fosse o do segundo
  // gráfico. `extraDetailLines(id, s)` é opcional: função que devolve uma
  // lista de { label, text } extra pra anexar no detalhe de cada candidato
  // (usada pela Distância do Estado Alocador para mostrar soma e faixa).
  function buildRadarLegend(legendHostId, ids, axes, scores, maxScore, svgScope, showAxisKey, extraDetailLines) {
    var host = document.getElementById(legendHostId);
    if (!host) return;
    if (showAxisKey) buildRadarAxisKey(host, axes);
    var chips = el("div", "legend-chips");
    ids.forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var btn = el("button", "legend-chip");
      btn.type = "button";
      btn.setAttribute("aria-pressed", "true");
      var swatch = el("span", "legend-swatch");
      swatch.style.background = "var(--cand-" + id + ")";
      btn.appendChild(swatch);
      var label = document.createTextNode(c.basics.ballotName || c.basics.name);
      btn.appendChild(label);
      btn.addEventListener("click", function () {
        var pressed = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", pressed ? "false" : "true");
        var series = svgScope && svgScope.querySelector ? svgScope.querySelector('.spider-series[data-candidate="' + id + '"]') : null;
        if (series) series.classList.toggle("spider-series-hidden", pressed);
      });
      chips.appendChild(btn);
    });
    host.appendChild(chips);

    var details = el("div", "radar-details");
    ids.forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var s = scores[id];
      if (!s) return;
      var d = document.createElement("details");
      d.className = "radar-detail";
      var summary = document.createElement("summary");
      var swatch = el("span", "legend-swatch");
      swatch.style.background = "var(--cand-" + id + ")";
      summary.appendChild(swatch);
      summary.appendChild(document.createTextNode(c.basics.ballotName || c.basics.name));
      d.appendChild(summary);
      var ul = document.createElement("ul");
      ul.className = "radar-axis-list";
      axes.forEach(function (axis) {
        var li = document.createElement("li");
        var strong = document.createElement("strong");
        strong.textContent = axis.label + " (" + (s[axis.id] != null ? s[axis.id] : "—") + "/" + maxScore + "): ";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(s.rationale && s.rationale[axis.id] ? s.rationale[axis.id] : ""));
        ul.appendChild(li);
      });
      if (extraDetailLines) {
        extraDetailLines(id, s).forEach(function (extra) {
          var li = document.createElement("li");
          li.className = "radar-axis-list-extra";
          var strong = document.createElement("strong");
          strong.textContent = extra.label + ": ";
          li.appendChild(strong);
          li.appendChild(document.createTextNode(extra.text));
          ul.appendChild(li);
        });
      }
      d.appendChild(ul);
      details.appendChild(d);
    });
    host.appendChild(details);
  }

  function buildProfileSection() {
    var host = document.getElementById("spider-chart-host");
    if (!host) return;
    var ids = orderedCandidateIds();
    var axes = window.PROFILE_AXES || [];
    var scores = window.PROFILE_SCORES || {};
    var svg = buildRadarChart(ids, axes, scores, 100, "Gráfico comparando o perfil político dos candidatos em 6 eixos");
    if (svg) {
      host.appendChild(svg);
      fitSpiderViewBox(svg);
    }
    buildRadarLegend("profile-legend", ids, axes, scores, 100, svg || host, true);
  }

  /* ============================== Papel do Estado ============================== */
  // Escala 0–3 por eixo (6 eixos), com um detalhe extra por candidato: soma
  // D1–D5, D6 à parte e o total 0–18 classificado em faixa — para não
  // escamotear numa média só a divergência entre "quanto o Estado deixa de
  // alocar recursos" (D1–D5) e "o plano remove ou constrói estruturas
  // novas" (D6), que podem apontar em direções opostas. O gráfico principal
  // é uma reta única 0–18 (buildAllocatorLine) com a foto de cada candidato
  // na posição do seu total; o detalhe por eixo (buildRadarLegend, mesma
  // função do Perfil Político) continua abaixo, retrátil por candidato.
  var ALLOCATOR_MAX = 18;

  function allocatorTotal(s) {
    var axes = window.ALLOCATOR_AXES || [];
    return axes.reduce(function (sum, a) { return sum + (s[a.id] || 0); }, 0);
  }

  function allocatorBand(total) {
    if (total <= 5) return "Estado alocador";
    if (total <= 11) return "liberalismo de mercado";
    return "afinidade austríaca parcial";
  }

  function buildAllocatorDetailLines(id, s) {
    var axes = window.ALLOCATOR_AXES || [];
    var d1to5Ids = axes.slice(0, 5).map(function (a) { return a.id; });
    var d6Id = axes[5] ? axes[5].id : "remocao";
    var subtotal = d1to5Ids.reduce(function (sum, aid) { return sum + (s[aid] || 0); }, 0);
    var d6 = s[d6Id] || 0;
    var total = subtotal + d6;
    var lines = [
      { label: "Soma D1–D5 (0–15)", text: String(subtotal) },
      { label: "D6 — Remover x Construir (0–3)", text: String(d6) },
      { label: "Distância do Estado alocador (0–18)", text: total + " — " + allocatorBand(total) }
    ];
    var avg1to5 = subtotal / 5;
    if (Math.abs(avg1to5 - d6) >= 1.5) {
      lines.push({
        label: "Diverge",
        text: "D1–D5 e D6 apontam em direções bem diferentes — não resuma isso só no total; veja os dois blocos acima separadamente."
      });
    }
    return lines;
  }

  // Reta única 0–18 com a foto de cada candidato na posição do seu total.
  // Cada ponto usa a classe "spider-series" (mesma do radar do Perfil
  // Político) só para reaproveitar sem alterar nada o toggle de
  // esconder/mostrar candidato já implementado em buildRadarLegend — ele
  // procura ".spider-series[data-candidate=...]" dentro do escopo que
  // recebe, e não liga se esse escopo é um <svg> ou uma <div>.
  function buildAllocatorLine(ids, scores) {
    var wrap = el("div", "allocator-line");
    var track = el("div", "allocator-line-track");
    wrap.appendChild(track);

    [0, 5, 11, ALLOCATOR_MAX].forEach(function (v) {
      var pct = v / ALLOCATOR_MAX * 100;
      var tick = el("div", "allocator-line-tick");
      tick.style.left = pct + "%";
      wrap.appendChild(tick);
      var tickLabel = el("span", "allocator-line-tick-label");
      tickLabel.style.left = pct + "%";
      tickLabel.textContent = v;
      wrap.appendChild(tickLabel);
    });

    // Ordena por pontuação antes de anexar — só pra quem tem totais bem
    // próximos (e portanto fotos quase coladas) empilhar na ordem certa: a
    // de maior nota por cima, já que cada foto entra depois da anterior no
    // DOM (mesma stacking order de irmãos position:absolute).
    var sorted = ids.slice().sort(function (a, b) {
      var sa = scores[a] ? allocatorTotal(scores[a]) : 0;
      var sb = scores[b] ? allocatorTotal(scores[b]) : 0;
      return sa - sb;
    });

    sorted.forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var s = scores[id];
      if (!c || !s) return;
      var total = allocatorTotal(s);
      var pct = Math.max(0, Math.min(100, total / ALLOCATOR_MAX * 100));

      var point = el("div", "spider-series allocator-line-point");
      point.dataset.candidate = id;
      point.style.left = pct + "%";

      var avatarWrap = el("div", "allocator-line-avatar-wrap");
      avatarWrap.title = (c.basics.ballotName || c.basics.name) + " — " + total + "/" + ALLOCATOR_MAX + " (" + allocatorBand(total) + ")";
      avatarWrap.appendChild(buildAvatar(c.basics, "allocator-line-avatar"));
      var badge = el("span", "allocator-line-badge");
      badge.textContent = total;
      avatarWrap.appendChild(badge);
      point.appendChild(avatarWrap);

      wrap.appendChild(point);
    });

    return wrap;
  }

  function buildAllocatorSection() {
    var host = document.getElementById("allocator-chart-host");
    if (!host) return;
    var ids = orderedCandidateIds();
    var axes = window.ALLOCATOR_AXES || [];
    var scores = window.ALLOCATOR_SCORES || {};
    var line = buildAllocatorLine(ids, scores);
    host.appendChild(line);
    buildRadarLegend("allocator-legend", ids, axes, scores, 3, line, false, buildAllocatorDetailLines);
  }

  /* ============================== Contagem de Palavras ============================== */
  // Contagem mecânica (data/wordcounts.js, gerada por scripts/count_words.py
  // a partir do texto bruto dos 5 PDFs) — não é leitura editorial como o
  // Perfil Político/Papel do Estado, é busca de texto. Uma fileira por
  // termo, com uma barra por candidato; a barra é proporcional ao maior
  // valor ENTRE OS 5 CANDIDATOS DAQUELE TERMO (escala por linha, não
  // global) — senão termos raros (ex.: "desestatização") ficariam achatados
  // ao lado de termos comuns (ex.: "estado").
  function buildWordCountSection() {
    var host = document.getElementById("wordcount-grid");
    if (!host) return;
    var ids = orderedCandidateIds();
    var terms = window.WORD_COUNT_TERMS || [];
    var data = window.WORD_COUNTS || {};

    terms.forEach(function (term) {
      var card = el("div", "wordcount-term");
      var heading = el("p", "wordcount-term-label");
      heading.textContent = term.label;
      card.appendChild(heading);

      var maxCount = 0;
      ids.forEach(function (id) {
        var d = data[id];
        if (d) maxCount = Math.max(maxCount, d.counts[term.id] || 0);
      });

      ids.forEach(function (id) {
        var c = window.CANDIDATES_DATA[id];
        var d = data[id];
        var count = d ? (d.counts[term.id] || 0) : 0;
        var rate = d && d.totalWords ? (count / d.totalWords * 10000) : 0;
        var pct = maxCount ? (count / maxCount * 100) : 0;

        var row = el("div", "wordcount-row");
        var name = el("span", "wordcount-name");
        name.textContent = c.basics.ballotName || c.basics.name;
        row.appendChild(name);

        var track = el("div", "wordcount-track");
        var bar = el("div", "wordcount-bar");
        bar.style.width = pct + "%";
        bar.style.background = "var(--cand-" + id + ")";
        track.appendChild(bar);
        row.appendChild(track);

        var value = el("span", "wordcount-value");
        value.textContent = count + " (" + rate.toFixed(1).replace(".", ",") + "/10k)";
        row.appendChild(value);

        card.appendChild(row);
      });

      host.appendChild(card);
    });
  }

  /* ============================== Fontes ============================== */
  function buildSourcesList() {
    var host = document.getElementById("sources-list");
    if (!host) return;
    orderedCandidateIds().forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var src = (window.SOURCES_DATA || {})[id];
      if (!src) return;

      var row = el("div", "source-row");
      var who = document.createElement("div");
      var whoName = el("span", "who");
      whoName.textContent = (c.basics.ballotName || c.basics.name) + " ";
      var planTitle = el("span", "plan-title");
      planTitle.textContent = "— " + src.planTitle + (src.pageCount ? " (" + src.pageCount + " páginas)" : "");
      who.appendChild(whoName);
      who.appendChild(planTitle);

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

      row.appendChild(who);
      row.appendChild(links);
      host.appendChild(row);
    });
  }

  /* ============================== Sidebar nav ativo ============================== */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (l) { return document.querySelector(l.getAttribute("href")); })
      .filter(Boolean);
    if (!sections.length) return;

    function onScroll() {
      var pos = window.scrollY + 120;
      var current = sections[0];
      sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
      links.forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + current.id);
      });
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function init() {
    buildCandidateGrid();
    buildProfileSection();
    buildAllocatorSection();
    buildWordCountSection();
    buildEconomySection(
      document.getElementById("economy-tabs"),
      document.getElementById("economy-panels"),
      orderedCandidateIds(),
      "econ"
    );
    buildCandidateFilter(document.getElementById("economy-candidate-filter"));
    buildTabs(
      document.getElementById("other-tabs"),
      document.getElementById("other-panels"),
      window.OTHER_THEMES || [],
      buildOtherThemeCard,
      "other"
    );
    buildCandidateFilter(document.getElementById("other-candidate-filter"));
    buildComparisonSection();
    buildSourcesList();
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
