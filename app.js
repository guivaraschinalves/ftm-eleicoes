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
    card.appendChild(compareCardHead(c.basics));
    card.appendChild(proposalListBlock(entry.proposals, id));
    return card;
  }

  // Abas genéricas de 1 nível (usadas em Outros Temas, e dentro de cada
  // subtema de Economia para Diagnóstico/Propostas).
  function buildTabs(tabsHost, panelsHost, topics, buildCard, idPrefix) {
    var ids = orderedCandidateIds();
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
        panelsHost.querySelectorAll(".tab-panel").forEach(function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  // Economia: abas de subtema (nível 1) e, dentro de cada painel de subtema,
  // um segundo par de abas Diagnóstico/Propostas (nível 2).
  function buildEconomySection() {
    var tabsHost = document.getElementById("economy-tabs");
    var panelsHost = document.getElementById("economy-panels");
    if (!tabsHost || !panelsHost) return;
    var ids = orderedCandidateIds();
    var subthemes = window.ECONOMY_SUBTHEMES || [];

    tabsHost.setAttribute("role", "tablist");
    subthemes.forEach(function (sub, si) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = "econ-tab-" + sub.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", "econ-panel-" + sub.id);
      btn.setAttribute("aria-selected", si === 0 ? "true" : "false");
      btn.textContent = sub.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = "econ-panel-" + sub.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", "econ-tab-" + sub.id);
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
          innerPanels.querySelectorAll(".tab-panel").forEach(function (p) { p.hidden = true; });
          innerBtn.setAttribute("aria-selected", "true");
          innerPanel.hidden = false;
        });
      });
      panel.appendChild(innerTabs);
      panel.appendChild(innerPanels);
      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        panelsHost.querySelectorAll(".tab-panel").forEach(function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
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
      var p = polarPoint(cx, cy, R, i * 360 / n);
      svg.appendChild(svgEl("line", { x1: cx, y1: cy, x2: p[0], y2: p[1], class: "spider-axis-line" }));
      var lp = polarPoint(cx, cy, R + 46, i * 360 / n);
      var label = svgEl("text", { x: lp[0], y: lp[1], class: "spider-axis-label", "text-anchor": labelAnchor(lp[0], cx) });
      label.textContent = axis.label;
      svg.appendChild(label);
      var lowP = polarPoint(cx, cy, R + 14, i * 360 / n);
      var lowLabel = svgEl("text", { x: lowP[0], y: lowP[1], class: "spider-pole-label", "text-anchor": labelAnchor(lowP[0], cx) });
      lowLabel.textContent = "0–100";
      svg.appendChild(lowLabel);
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

  function buildProfileLegend(ids) {
    var host = document.getElementById("profile-legend");
    if (!host) return;
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
    if (svg) host.appendChild(svg);
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
    buildEconomySection();
    buildTabs(
      document.getElementById("other-tabs"),
      document.getElementById("other-panels"),
      window.OTHER_THEMES || [],
      buildOtherThemeCard,
      "other"
    );
    buildSourcesList();
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
