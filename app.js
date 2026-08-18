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

  /* ============================== Visão Geral ============================== */
  function buildCandidateCard(id) {
    var c = window.CANDIDATES_DATA[id];
    var b = c.basics;
    var card = el("div", "candidate-card");

    var head = el("div", "candidate-card-head");
    var avatar = el("div", "candidate-avatar");
    avatar.textContent = b.initials || initials(b.name);
    var nameWrap = document.createElement("div");
    var h3 = el("h3", "candidate-name");
    h3.textContent = b.ballotName || b.name;
    var party = el("div", "candidate-party");
    party.textContent = b.party + " · nº " + b.number;
    nameWrap.appendChild(h3);
    nameWrap.appendChild(party);
    head.appendChild(avatar);
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
    metaRow("Vice", b.vp);
    metaRow("Coligação", b.coalition);
    card.appendChild(meta);

    if (c.positioningSummary) {
      var summary = el("p", "candidate-summary");
      summary.textContent = c.positioningSummary;
      card.appendChild(summary);
    }

    return card;
  }

  function buildCandidateGrid() {
    var host = document.getElementById("candidate-grid");
    if (!host) return;
    orderedCandidateIds().forEach(function (id) {
      host.appendChild(buildCandidateCard(id));
    });
  }

  /* ============================== Tabs (Economia / Outros Temas) ============================== */
  function citeLinks(sourceRefs, candidateId) {
    var wrap = el("div", "cite-links");
    var src = (window.SOURCES_DATA || {})[candidateId];
    (sourceRefs || []).forEach(function (ref) {
      var a = document.createElement("a");
      a.className = "cite-link";
      a.textContent = "p. " + ref.page;
      a.href = src ? src.officialPdfUrl : "#";
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    return wrap;
  }

  function listBlock(label, items) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = label;
    block.appendChild(lbl);
    if (items && items.length) {
      var ul = document.createElement("ul");
      items.forEach(function (text) {
        var li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
      block.appendChild(ul);
    } else {
      var empty = el("p", "compare-empty");
      empty.textContent = "Não abordado explicitamente no plano de governo.";
      block.appendChild(empty);
    }
    return block;
  }

  // Economia: cada card tem bloco "Diagnóstico" + "Medidas propostas".
  function buildEconomyCard(id, subthemeId) {
    var c = window.CANDIDATES_DATA[id];
    var entry = (c.economy || {})[subthemeId] || { diagnosis: [], measures: [], sourceRefs: [] };
    var card = el("div", "compare-card");

    var head = el("div", "compare-card-head");
    var avatar = el("div", "candidate-avatar");
    avatar.textContent = c.basics.initials || initials(c.basics.name);
    var nameWrap = document.createElement("div");
    var h4 = document.createElement("h4");
    h4.textContent = c.basics.ballotName || c.basics.name;
    var party = el("div", "candidate-party");
    party.textContent = c.basics.party;
    nameWrap.appendChild(h4);
    nameWrap.appendChild(party);
    head.appendChild(avatar);
    head.appendChild(nameWrap);
    card.appendChild(head);

    card.appendChild(listBlock("Diagnóstico", entry.diagnosis));
    card.appendChild(listBlock("Medidas propostas", entry.measures));
    if (entry.sourceRefs && entry.sourceRefs.length) {
      card.appendChild(citeLinks(entry.sourceRefs, id));
    }
    return card;
  }

  // Outros temas: cada card só tem "Propostas-chave".
  function buildOtherThemeCard(id, themeId) {
    var c = window.CANDIDATES_DATA[id];
    var entry = (c.otherThemes || {})[themeId] || { keyProposals: [], sourceRefs: [] };
    var card = el("div", "compare-card");

    var head = el("div", "compare-card-head");
    var avatar = el("div", "candidate-avatar");
    avatar.textContent = c.basics.initials || initials(c.basics.name);
    var nameWrap = document.createElement("div");
    var h4 = document.createElement("h4");
    h4.textContent = c.basics.ballotName || c.basics.name;
    var party = el("div", "candidate-party");
    party.textContent = c.basics.party;
    nameWrap.appendChild(h4);
    nameWrap.appendChild(party);
    head.appendChild(avatar);
    head.appendChild(nameWrap);
    card.appendChild(head);

    card.appendChild(listBlock("Propostas-chave", entry.keyProposals));
    if (entry.sourceRefs && entry.sourceRefs.length) {
      card.appendChild(citeLinks(entry.sourceRefs, id));
    }
    return card;
  }

  // Constrói um bloco de abas (tabs) genérico: `topics` é [{id, label}], `buildCard`
  // recebe (candidateId, topicId) e devolve o card daquele candidato para aquele tópico.
  function buildTabbedCompare(tabsHost, panelsHost, topics, buildCard) {
    var ids = orderedCandidateIds();
    tabsHost.setAttribute("role", "tablist");
    topics.forEach(function (topic, ti) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = "tab-" + topic.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", "panel-" + topic.id);
      btn.setAttribute("aria-selected", ti === 0 ? "true" : "false");
      btn.textContent = topic.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = "panel-" + topic.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", "tab-" + topic.id);
      if (ti !== 0) panel.hidden = true;

      var heading = el("h3", "panel-heading");
      heading.textContent = topic.label;
      panel.appendChild(heading);

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
    buildTabbedCompare(
      document.getElementById("economy-tabs"),
      document.getElementById("economy-panels"),
      window.ECONOMY_SUBTHEMES || [],
      buildEconomyCard
    );
    buildTabbedCompare(
      document.getElementById("other-tabs"),
      document.getElementById("other-panels"),
      window.OTHER_THEMES || [],
      buildOtherThemeCard
    );
    buildSourcesList();
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
