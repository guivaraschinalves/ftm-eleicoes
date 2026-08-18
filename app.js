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

  // Seta usada nos <summary> das seções retráteis — gira 90° via CSS quando
  // o <details> pai está aberto ([open] > summary .disclosure-chevron).
  function chevronIcon() {
    var svg = svgEl("svg", { viewBox: "0 0 16 16", width: "13", height: "13", "aria-hidden": "true", class: "disclosure-chevron" });
    svg.appendChild(svgEl("path", {
      d: "M5 3l5 5-5 5", fill: "none", stroke: "currentColor",
      "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    return svg;
  }

  function disclosureSummary(text) {
    var summary = document.createElement("summary");
    var label = document.createElement("span");
    label.textContent = text;
    summary.appendChild(label);
    summary.appendChild(chevronIcon());
    return summary;
  }

  // Cada subtema/tema é uma seção retrátil (<details>) independente das
  // outras — abrir uma não fecha as demais, e não existe mais handler de
  // "esconder tudo, mostrar só esta" (a classe de bug do painel em branco
  // ao trocar de aba não existe mais aqui: o navegador cuida do
  // abrir/fechar nativamente). `ids` é opcional — por padrão mostra os 5
  // candidatos, mas a aba Comparar 1×1 chama isto de novo passando só os 2
  // candidatos escolhidos.
  function buildTopicAccordion(host, topics, buildCard, ids) {
    if (!host) return;
    ids = ids || orderedCandidateIds();
    topics.forEach(function (topic, ti) {
      var details = el("details", "topic-disclosure");
      if (ti === 0) details.open = true;
      details.appendChild(disclosureSummary(topic.label));

      var grid = el("div", "compare-grid");
      ids.forEach(function (id) { grid.appendChild(buildCard(id, topic.id)); });
      details.appendChild(grid);
      host.appendChild(details);
    });
  }

  // Economia: cada subtema é uma seção retrátil de nível 1 (a primeira já
  // vem aberta); dentro dela, Diagnóstico e Propostas são duas seções
  // retráteis de nível 2, ambas já abertas por padrão — não precisa mais
  // clicar em nada pra ver as duas, mas dá pra fechar qualquer uma se quiser
  // menos texto na tela. `ids` é parametrizado porque a aba Comparar 1×1
  // reusa esta mesma função para só 2 candidatos.
  function buildEconomySection(host, ids) {
    if (!host) return;
    var subthemes = window.ECONOMY_SUBTHEMES || [];
    var kinds = [{ label: "Diagnóstico", kind: "diagnosis" }, { label: "Propostas", kind: "proposals" }];

    subthemes.forEach(function (sub, si) {
      var details = el("details", "topic-disclosure");
      if (si === 0) details.open = true;
      details.appendChild(disclosureSummary(sub.label));

      var body = el("div", "topic-disclosure-body");
      kinds.forEach(function (k) {
        var kindDetails = el("details", "kind-disclosure");
        kindDetails.open = true;
        kindDetails.appendChild(disclosureSummary(k.label));

        var grid = el("div", "compare-grid");
        ids.forEach(function (id) { grid.appendChild(buildEconomyCard(id, sub.id, k.kind)); });
        kindDetails.appendChild(grid);
        body.appendChild(kindDetails);
      });
      details.appendChild(body);
      host.appendChild(details);
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
    var econPanelsHost = document.getElementById("compare-economy-panels");
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

      econPanelsHost.innerHTML = "";
      buildEconomySection(econPanelsHost, [a, b]);

      otherPanelsHost.innerHTML = "";
      buildTopicAccordion(otherPanelsHost, window.OTHER_THEMES || [], buildOtherThemeCard, [a, b]);
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

  function buildSpiderChart(ids) {
    var axes = window.PROFILE_AXES || [];
    var n = axes.length;
    if (!n) return null;
    // viewBox inicial é só um chute generoso — os rótulos diagonais (ex.:
    // "Ritmo do Ajuste Fiscal") têm largura variável conforme a fonte, então
    // o valor final vem de fitSpiderViewBox() medindo o conteúdo já
    // desenhado (evita cortar lateral em qualquer combinação de fonte/tela).
    var size = 520, cx = size / 2, cy = size / 2, R = 175;
    var svg = svgEl("svg", {
      viewBox: "0 0 " + size + " " + size, class: "spider-svg",
      role: "img", "aria-label": "Gráfico comparando o perfil político dos candidatos em 6 eixos"
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
      var scores = (window.PROFILE_SCORES || {})[id];
      var c = window.CANDIDATES_DATA[id];
      if (!scores || !c) return;
      var g = svgEl("g", { class: "spider-series", "data-candidate": id, style: "--cand-color:var(--cand-" + id + ")" });
      var pts = axes.map(function (axis, i) {
        var v = Math.max(0, Math.min(100, scores[axis.id] || 0));
        return polarPoint(cx, cy, R * v / 100, i * 360 / n);
      });
      g.appendChild(svgEl("polygon", { points: pts.map(function (p) { return p.join(","); }).join(" "), class: "spider-shape" }));
      pts.forEach(function (p, i) {
        var axis = axes[i];
        var v = Math.max(0, Math.min(100, scores[axis.id] || 0));
        var dot = svgEl("circle", { cx: p[0], cy: p[1], r: 4, class: "spider-dot" });
        var title = svgEl("title", {});
        var rationale = scores.rationale && scores.rationale[axis.id] ? scores.rationale[axis.id] : "";
        title.textContent = (c.basics.ballotName || c.basics.name) + " — " + axis.label + ": " + v + "/100. " + rationale;
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

  // Lista compacta dos 6 eixos com seus dois polos — o gráfico em si só
  // rotula o nome do eixo, então isso é o que explica o sentido de cada um
  // (em vez de espremer os dois polos perto do centro do SVG, ilegível com
  // 6 eixos sobrepostos).
  function buildAxisKey(host) {
    var ul = el("ul", "axis-key");
    (window.PROFILE_AXES || []).forEach(function (axis) {
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = axis.label + ": ";
      li.appendChild(strong);
      li.appendChild(document.createTextNode(axis.low + " ↔ " + axis.high));
      ul.appendChild(li);
    });
    host.appendChild(ul);
  }

  function buildProfileLegend(ids) {
    var host = document.getElementById("profile-legend");
    if (!host) return;
    buildAxisKey(host);
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
        var series = document.querySelector('.spider-series[data-candidate="' + id + '"]');
        if (series) series.classList.toggle("spider-series-hidden", pressed);
      });
      chips.appendChild(btn);
    });
    host.appendChild(chips);

    var details = el("div", "profile-details");
    ids.forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var scores = (window.PROFILE_SCORES || {})[id];
      if (!scores) return;
      var d = document.createElement("details");
      d.className = "profile-detail";
      var summary = document.createElement("summary");
      var swatch = el("span", "legend-swatch");
      swatch.style.background = "var(--cand-" + id + ")";
      summary.appendChild(swatch);
      summary.appendChild(document.createTextNode(c.basics.ballotName || c.basics.name));
      d.appendChild(summary);
      var ul = document.createElement("ul");
      ul.className = "profile-axis-list";
      (window.PROFILE_AXES || []).forEach(function (axis) {
        var li = document.createElement("li");
        var strong = document.createElement("strong");
        strong.textContent = axis.label + " (" + (scores[axis.id] != null ? scores[axis.id] : "—") + "/100): ";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(scores.rationale && scores.rationale[axis.id] ? scores.rationale[axis.id] : ""));
        ul.appendChild(li);
      });
      d.appendChild(ul);
      details.appendChild(d);
    });
    host.appendChild(details);
  }

  function buildProfileSection() {
    var host = document.getElementById("spider-chart-host");
    if (!host) return;
    var ids = orderedCandidateIds();
    var svg = buildSpiderChart(ids);
    if (svg) {
      host.appendChild(svg);
      fitSpiderViewBox(svg);
    }
    buildProfileLegend(ids);
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
    buildEconomySection(document.getElementById("economy-panels"), orderedCandidateIds());
    buildCandidateFilter(document.getElementById("economy-candidate-filter"));
    buildTopicAccordion(
      document.getElementById("other-panels"),
      window.OTHER_THEMES || [],
      buildOtherThemeCard,
      orderedCandidateIds()
    );
    buildCandidateFilter(document.getElementById("other-candidate-filter"));
    buildComparisonSection();
    buildSourcesList();
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
