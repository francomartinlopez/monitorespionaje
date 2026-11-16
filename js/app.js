/* Monitor de Espionaje — interfaz. Sin dependencias salvo d3-geo y topojson para los mapas.
   Rutas: #inicio · #p-<id> (ficha de país) · #metodologia */
window.ME = window.ME || { ROUTES: {}, EXPLORE: [] };
(function () {
  "use strict";
  const META = window.MONITOR_META, PAISES = window.PAISES, FICHAS = window.FICHAS || {};
  const byId = Object.fromEntries(PAISES.map(p => [p.id, p]));
  const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const RUBROS = window.RUBROS, EV = window.EV_TYPES, EVI = window.EVIDENCE, RT = window.REL_TYPES;

  // ---------- utilidades ----------
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const parseD = s => { const [y, m = 1, d = 1] = String(s).split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const fmt = s => { const p = String(s).split("-"); if (p.length === 1) return p[0]; const d = parseD(s); return (p.length === 3 ? d.getUTCDate() + " " : "") + MONTHS[d.getUTCMonth()] + " " + d.getUTCFullYear(); };
  const sampleTag = on => on ? ` <span class="sample-tag">de prueba</span>` : "";
  const powerSum = f => RUBROS.reduce((s, r) => s + (f.power[r.k] || 0), 0);

  // ---------- tooltip ----------
  const tip = document.getElementById("tip");
  function showTip(e, html) { tip.innerHTML = html; tip.hidden = false; moveTip(e); }
  function moveTip(e) { const w = tip.offsetWidth, h = tip.offsetHeight; let x = e.clientX + 14, y = e.clientY + 14; if (x + w > innerWidth - 8) x = e.clientX - w - 14; if (y + h > innerHeight - 8) y = e.clientY - h - 14; tip.style.left = x + "px"; tip.style.top = y + "px"; }
  function hideTip() { tip.hidden = true; }

  // ---------- cartografía (Natural Earth 1, igual que Monitor de Conflictos) ----------
  const W = 1200, H = 600;
  const FEATURES = topojson.feature(WORLD, WORLD.objects.countries).features.filter(f => f.properties.name !== "Antarctica");
  const FEAT = Object.fromEntries(FEATURES.map(f => [f.properties.name, f]));
  const proj = d3.geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H + 70]], { type: "Sphere" });
  const path = d3.geoPath(proj);
  const BASE = (() => {
    const land = topojson.merge(WORLD, WORLD.objects.countries.geometries.filter(g => g.properties.name !== "Antarctica"));
    const sphere = path({ type: "Sphere" });
    return `<path class="m-sphere" d="${sphere}"/>
      <path class="m-grat" d="${path(d3.geoGraticule().step([15, 15])())}"/>
      <path class="m-land" d="${path(land)}"/>
      <g class="map-glow"><path class="m-borders" d="${path(topojson.mesh(WORLD, WORLD.objects.countries, (a, b) => a !== b))}"/>
      <path class="m-coast" d="${path(land)}"/></g>
      <path class="m-edge" d="${sphere}"/>`;
  })();
  const pt = ll => proj(ll).map(v => +v.toFixed(1));
  function arc(a, b, bend = .18) {
    const [x1, y1] = a, [x2, y2] = b, mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1;
    const cx = mx + dy * bend, cy = my - Math.abs(dx) * bend - Math.abs(dy) * .05;
    return `M${x1} ${y1} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2} ${y2}`;
  }
  // etiquetas: hacia dónde va el nombre de cada país en el mapa
  const LBL = { us: "l", uk: "l", fr: [-9, 13, "end"], va: "b", de: "t", il: "l", sa: "l", cn: "l", kr: "b", cu: "l", in: "r", ae: "b", tr: "b", ua: "r", ru: "t" };
  // dos anillos alrededor del punto central de cada país, para que se vea mejor
  const rings = (x, y, k = 1) => `<circle class="ring r1" cx="${x}" cy="${y}" r="${8 * k}"/><circle class="ring r2" cx="${x}" cy="${y}" r="${12.5 * k}"/>`;
  function nodeLabel(id, x, y, txt) {
    const o = LBL[id] || "r";
    const a = Array.isArray(o) ? o : { r: [9, 4, "start"], l: [-9, 4, "end"], t: [0, -10, "middle"], b: [0, 17, "middle"] }[o];
    return `<text x="${x + a[0]}" y="${y + a[1]}" text-anchor="${a[2]}">${esc(txt)}</text>`;
  }

  // ---------- barra superior, menú de países ----------
  document.getElementById("stamp").innerHTML = `<div><span class="live"></span>Actualizado <b>${esc(META.updatedLabel)}</b></div><div>Próxima actualización: ${esc(META.next)}</div>`;
  document.getElementById("footEdition").textContent = `Monitor de Espionaje · ${META.edition}`;
  document.getElementById("skeletonBand").hidden = !META.skeleton;
  const menu = document.getElementById("navMenu"), navBtn = document.getElementById("navBtn");
  const menu2 = document.getElementById("navMenu2"), navBtn2 = document.getElementById("navBtn2");
  menu.innerHTML = [1, 2, 3].map(t => `<h4>${esc(window.TIERS[t].n)}</h4>` + PAISES.filter(p => p.tier === t).map(p => `<a href="#p-${p.id}">${esc(p.name)}<span>${esc(p.agencies.filter(a => a.g !== "j" && a.g !== "k").slice(0, 2).map(a => a.code).join(" · "))}</span></a>`).join("")).join("");
  [[navBtn, menu], [navBtn2, menu2]].forEach(([b, m]) => {
    b.addEventListener("click", e => { e.stopPropagation(); const open = m.hidden; document.querySelectorAll(".navdrop-menu").forEach(x => x.hidden = true); m.hidden = !open; b.setAttribute("aria-expanded", String(open)); });
    document.addEventListener("click", e => { if (!m.hidden && !m.contains(e.target)) { m.hidden = true; b.setAttribute("aria-expanded", "false"); } });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !m.hidden) { m.hidden = true; b.focus(); } });
  });

  // ---------- alertas ----------
  function renderAlerts() {
    const box = document.getElementById("alerts");
    const al = [...window.ALERTS].sort((a, b) => b.level - a.level || b.date.localeCompare(a.date));
    box.innerHTML = `<div class="wrap alerts-in">
      <div class="sec-head"><h2><span class="live"></span>Alertas activas · ${al.length}</h2><span>Operaciones, capturas, expulsiones y filtraciones de los últimos días</span></div>
      <div class="alert-grid">${al.map(a => `<a class="alert" href="#p-${a.target}" style="--lv:${window.LV[a.level]}">
        <div class="meta"><span class="pill">Nivel ${a.level}</span><span>${esc(a.tag)}</span><span>· ${fmt(a.date)}</span>${a.st ? `<span>· ${esc(a.st)}</span>` : ""}${sampleTag(a.sample)}</div>
        <div class="where">${esc(a.countries.join(" · "))}</div>
        <h3>${esc(a.title)}</h3><p>${esc(a.text)}</p><span class="go">Ver la ficha →</span></a>`).join("")}</div></div>`;
  }

  // ---------- router ----------
  const app = document.getElementById("app");
  let cleanup = null, homeScroll = 0, current = null;
  function route() {
    const h = (location.hash || "#inicio").slice(1);
    if (current === "home") homeScroll = scrollY;
    hideTip(); if (cleanup) { cleanup(); cleanup = null; }
    menu.hidden = true;
    const first = current === null;
    document.querySelectorAll(".mainnav > a").forEach(a => a.classList.toggle("on", a.dataset.nav === (h.startsWith("p-") ? "" : h)));
    document.querySelectorAll(".navdrop-menu").forEach(m => m.hidden = true);
    const ext = window.ME.ROUTES[h.split("/")[0]];
    if (h.startsWith("p-") && byId[h.slice(2)]) { renderCountry(byId[h.slice(2)]); current = "country"; }
    else if (h === "metodologia") { renderMethod(); current = "method"; }
    else if (ext) { const r = ext.render(h.split("/").slice(1)); if (typeof r === "function") cleanup = r; current = "ext"; document.title = ext.title + " · Monitor de Espionaje"; }
    else { renderHome(); current = "home"; }
    document.getElementById("alerts").hidden = current !== "home";
    if (current === "home") { scrollTo(0, first ? 0 : homeScroll); return; }
    scrollTo(0, 0);
    if (current !== "ext") document.title = current === "country" ? `${byId[h.slice(2)].name} · Monitor de Espionaje` : "Metodología · Monitor de Espionaje";
  }
  addEventListener("hashchange", route);

  // ================= PORTADA =================
  function renderHome() {
    document.title = "Monitor de Espionaje";
    const rels = window.RELACIONES;
    app.innerHTML = `
      <div class="section-title"><h2>Mapa de relaciones</h2><span>Cómo se vinculan los servicios de los ${PAISES.length} países: cooperación, enfrentamiento o relación ambigua</span></div>
      <div class="chips" id="relChips">
        <button type="button" class="chip on" data-mode="rel" style="--c:var(--ph)">Relaciones</button>
        <button type="button" class="chip" data-mode="focos" style="--c:var(--ph)">Focos de operaciones</button>
        <span class="chip-sep" aria-hidden="true"></span>
        ${Object.entries(RT).map(([k, t]) => `<button type="button" class="chip on" data-rel="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n} · ${rels.filter(r => r.t === k).length}</button>`).join("")}
      </div>
      <div class="mapbox">
        <div class="map-stage" id="homeMap"></div>
        <div class="legend" id="homeLegend"></div>
      </div>

      <div class="section-title"><h2>Explorar</h2><span>Mapas temáticos, personas, comparaciones y archivo</span></div>
      <div class="explore">${window.ME.EXPLORE.map(e => `<a class="xtile" href="#${e.id}"><span class="k">${esc(e.k)}</span><b>${esc(e.n)}</b><span>${esc(e.x)}</span></a>`).join("")}</div>

      <div class="section-title"><h2>Países monitoreados</h2><span>${PAISES.length} países, de las potencias de inteligencia a los especialistas regionales</span></div>
      ${[1, 2, 3].map(t => `<div class="tier-head"><h3>${esc(window.TIERS[t].n)}</h3><span>${esc(window.TIERS[t].x)}</span></div>
        <div class="cards">${PAISES.filter(p => p.tier === t).map(card).join("")}</div>`).join("")}

      <div class="section-title"><h2>Poder por rubro</h2><span>Comparación de capacidades, de 1 a 5 · tocá una columna para ordenar${sampleTag(PAISES.some(p => FICHAS[p.id]?.sample))}</span></div>
      <div class="cmp-wrap"><table class="cmp" id="cmp"></table></div>`;
    drawHomeMap();
    drawCmp("tot");
  }

  function card(p) {
    const f = FICHAS[p.id];
    const ag = p.agencies.filter(a => a.g !== "j" && a.g !== "k").map(a => a.code);
    return `<a class="card" href="#p-${p.id}">
      <div class="top"><span>${esc(window.TIERS[p.tier].n)}</span><span>${p.agencies.filter(a => a.g !== "j").length} organismos</span></div>
      <h3>${esc(p.name)}</h3>
      <div class="ag">${esc(ag.slice(0, 6).join(" · "))}${ag.length > 6 ? ` +${ag.length - 6}` : ""}</div>
      ${p.skill ? `<div class="skill">Especialidad: ${esc(p.skill)}</div>` : ""}
      ${f ? `<div class="mini-power" aria-label="Poder por rubro">${RUBROS.map(r => `<div title="${esc(r.n)}: ${f.power[r.k]}/5"><i style="--w:${f.power[r.k] * 20}%"></i>${r.s}</div>`).join("")}</div>` : ""}
      <span class="go">Abrir ficha →</span></a>`;
  }

  function drawHomeMap() {
    const host = document.getElementById("homeMap"), legend = document.getElementById("homeLegend");
    const P = Object.fromEntries(PAISES.map(p => [p.id, pt(p.center)]));
    const members = PAISES.map(p => FEAT[p.map]).filter(Boolean).map(f => `<path class="m-member" d="${path(f)}"/>`).join("");
    const relSvg = window.RELACIONES.map((r, i) => P[r.a] && P[r.b] ? `<path class="rel ${r.t}" data-i="${i}" d="${arc(P[r.a], P[r.b])}" stroke="${RT[r.t].c}"/>` : "").join("");
    const allEv = PAISES.flatMap(p => (FICHAS[p.id]?.events || []).map(e => ({ ...e, p }))).filter(e => !e.nomap);
    const focos = allEv.map(e => { const [x, y] = pt([e.lon, e.lat]); return `<circle class="ev-dot" cx="${x}" cy="${y}" r="3.2" fill="${EV[e.t].c}" fill-opacity=".85" data-k="${allEv.indexOf(e)}"/>`; }).join("");
    const nodes = PAISES.map(p => { const [x, y] = P[p.id]; return `<g class="node" data-id="${p.id}" tabindex="0" role="link" aria-label="${esc(p.name)}">${rings(x, y)}<rect x="${x - 3.5}" y="${y - 3.5}" width="7" height="7"/>${nodeLabel(p.id, x, y, p.short.toUpperCase())}</g>`; }).join("");
    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa de relaciones entre servicios de inteligencia">${BASE}${members}
      <g id="relLayer">${relSvg}</g><g id="focLayer" style="display:none">${focos}</g><g>${nodes}</g></svg>
      <div class="scan" aria-hidden="true"></div>
      <div class="map-corner"><b>${fmt(META.updated)}</b>Situación actual</div>
      <div class="map-foot">PROY. NATURAL EARTH · RETÍCULA 15°</div>`;
    const relLeg = `${Object.values(RT).map(t => `<span><i class="sw${t === RT.amb ? " dash" : ""}" style="--c:${t.c}"></i>${t.n}</span>`).join("")}<span><i class="sq"></i>País del monitor</span><span class="hint">☞ Pasá por un país para aislar sus vínculos · clic para abrir la ficha</span>`;
    const focLeg = `${Object.values(EV).map(t => `<span><i class="dot" style="--c:${t.c}"></i>${t.n}</span>`).join("")}`;
    legend.innerHTML = relLeg;

    const svg = host.querySelector("svg"), relLayer = svg.querySelector("#relLayer"), focLayer = svg.querySelector("#focLayer");
    const on = new Set(Object.keys(RT));
    const applyRel = () => relLayer.querySelectorAll(".rel").forEach(el => { el.style.display = on.has(window.RELACIONES[el.dataset.i].t) ? "" : "none"; });
    document.querySelectorAll("#relChips [data-rel]").forEach(b => b.addEventListener("click", () => {
      const k = b.dataset.rel; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); applyRel();
    }));
    document.querySelectorAll("#relChips [data-mode]").forEach(b => b.addEventListener("click", () => {
      const foc = b.dataset.mode === "focos";
      document.querySelectorAll("#relChips [data-mode]").forEach(x => x.classList.toggle("on", x === b));
      document.querySelectorAll("#relChips [data-rel]").forEach(x => x.disabled = foc);
      relLayer.style.display = foc ? "none" : ""; focLayer.style.display = foc ? "" : "none";
      legend.innerHTML = foc ? focLeg : relLeg;
    }));
    svg.querySelectorAll(".node").forEach(g => {
      const id = g.dataset.id, p = byId[id];
      const linked = new Set([id]);
      window.RELACIONES.forEach(r => { if (r.a === id) linked.add(r.b); if (r.b === id) linked.add(r.a); });
      const enter = e => {
        relLayer.querySelectorAll(".rel").forEach(el => { const r = window.RELACIONES[el.dataset.i]; el.classList.toggle("dim", r.a !== id && r.b !== id); });
        svg.querySelectorAll(".node").forEach(n => n.classList.toggle("dim", !linked.has(n.dataset.id)));
        const cnt = k => window.RELACIONES.filter(r => (r.a === id || r.b === id) && r.t === k).length;
        if (e) showTip(e, `<b>${esc(p.name)}</b><span class="d">${cnt("coop")} cooperación · ${cnt("amb")} ambiguas · ${cnt("enf")} enfrentamiento</span><span class="go">Clic para abrir la ficha →</span>`);
      };
      const leave = () => { relLayer.querySelectorAll(".rel").forEach(el => el.classList.remove("dim")); svg.querySelectorAll(".node").forEach(n => n.classList.remove("dim")); hideTip(); };
      g.addEventListener("mouseenter", enter); g.addEventListener("mousemove", moveTip); g.addEventListener("mouseleave", leave);
      g.addEventListener("focus", () => enter()); g.addEventListener("blur", leave);
      g.addEventListener("click", () => location.hash = "p-" + id);
      g.addEventListener("keydown", e => { if (e.key === "Enter") location.hash = "p-" + id; });
    });
    focLayer.querySelectorAll(".ev-dot").forEach(c => {
      const e = allEv[c.dataset.k];
      c.addEventListener("mousemove", ev => showTip(ev, `<b>${esc(e.h)}</b><span class="d">${esc(e.p.name)} · ${fmt(e.d)} · ${esc(EV[e.t].n)}</span>`));
      c.addEventListener("mouseleave", hideTip);
      c.addEventListener("click", () => location.hash = "p-" + e.p.id);
    });
  }

  function drawCmp(sortKey) {
    const t = document.getElementById("cmp"); if (!t) return;
    const rows = PAISES.filter(p => FICHAS[p.id]).map(p => ({ p, f: FICHAS[p.id] }));
    rows.sort((a, b) => sortKey === "tot" ? powerSum(b.f) - powerSum(a.f) : sortKey === "name" ? a.p.name.localeCompare(b.p.name) : (b.f.power[sortKey] - a.f.power[sortKey]) || powerSum(b.f) - powerSum(a.f));
    const cell = v => `<td class="v" style="background:rgba(106,245,154,${(.1 + v * .17).toFixed(2)});color:${v >= 3 ? "var(--bg)" : "var(--text)"}">${v}</td>`;
    t.innerHTML = `<thead><tr><th data-k="name" class="${sortKey === "name" ? "on" : ""}" scope="col">País</th>${RUBROS.map(r => `<th data-k="${r.k}" class="${sortKey === r.k ? "on" : ""}" scope="col" title="${esc(r.n)}">${r.s}</th>`).join("")}<th data-k="tot" class="${sortKey === "tot" ? "on" : ""}" scope="col">Total</th></tr></thead>
      <tbody>${rows.map(({ p, f }) => `<tr><td><a href="#p-${p.id}">${esc(p.name)}</a></td>${RUBROS.map(r => cell(f.power[r.k])).join("")}<td class="tot">${powerSum(f)}</td></tr>`).join("")}</tbody>`;
    t.querySelectorAll("th").forEach(th => { th.tabIndex = 0; const go = () => drawCmp(th.dataset.k); th.addEventListener("click", go); th.addEventListener("keydown", e => { if (e.key === "Enter") go(); }); });
  }

  // ================= FICHA DE PAÍS =================
  const SECS = [["resumen", "Resumen"], ["organigrama", "Organigrama"], ["legal", "Marco legal"], ["mapa", "Mapa"], ["cronologia", "Cronología"], ["casos", "Casos"], ["fallas", "Fallas, omisiones y falsas banderas"], ["practicas", "Qué hacen y a quién espían"], ["gente", "Denunciantes, topos y desertores"], ["filtraciones", "Filtraciones, ocultamientos y desinformación"], ["dinero", "Dinero y coberturas"], ["proxies", "Organizaciones proxy"], ["relaciones", "Relaciones"], ["poder", "Luchas de poder"], ["fuentes", "Fuentes"]];

  function renderCountry(p) {
    const f = FICHAS[p.id];
    if (!f) { app.innerHTML = `<p class="muted" style="padding:40px 0">Ficha en preparación.</p>`; return; }
    const S = f.sample;
    const codes = p.agencies.filter(a => a.g !== "j" && a.g !== "k").map(a => a.code).join(" · ");
    app.innerHTML = `
      <div class="p-head"><div>
        <div class="crumbs"><a class="back" href="#inicio">← Volver al panorama</a><span class="t">${esc(window.TIERS[p.tier].n)}</span>${sampleTag(S)}</div>
        <h1>${esc(p.name)}</h1>
        <div class="sub">${p.note ? esc(p.note) : `Comunidad de inteligencia de ${esc(p.name)}: organismos, leyes, operaciones, casos y luchas de poder.`}${p.alliance ? ` · Alianza: ${esc(p.alliance)}` : ""}</div>
      </div>
      <div class="p-badges"><span class="codes">${esc(codes)}</span><span>Poder total ${powerSum(f)}/30 · ficha al ${fmt(f.updated)}</span>${p.skill ? `<span style="color:var(--amber)">Especialidad: ${esc(p.skill)}</span>` : ""}</div></div>

      <nav class="subnav" aria-label="Secciones de la ficha"><span class="lbl">IR A</span>${SECS.map(([k, n]) => `<a href="#p-${p.id}" data-sec="${k}">${n}</a>`).join("")}</nav>

      <section class="block" id="sec-resumen">
        <h2>Resumen <small>Situación al ${fmt(f.updated)}</small></h2>
        <div class="res-grid"><div class="prose">${f.summary.map(t => `<p>${esc(t)}</p>`).join("")}</div>
          <div class="facts">${f.keyFacts.map(k => `<div class="fact"><div class="l">${esc(k.l)}</div><div class="v">${esc(k.v)}</div><div class="n">${esc(k.n)}</div></div>`).join("")}</div></div>
        <h3 class="sub">Cómo operan</h3>
        ${f.modus ? `<div class="prio modus">${window.MODUS.filter(m => f.modus[m.k]).map(m => `<div><span>${esc(m.n)}</span><p>${esc(f.modus[m.k])}</p></div>`).join("")}</div>` : `<p class="muted">Sin datos cargados todavía.</p>`}
        <h3 class="sub">Alcance y poder por rubro</h3>
        <div class="power">${RUBROS.map(r => `<div class="pw"><div class="n">${esc(r.n)}<small>${r.s}</small></div><div class="bars" title="${esc((f.powerWhy || {})[r.k] || r.x)}">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= f.power[r.k] ? "on" : ""}"></i>`).join("")}</div><div class="v">${f.power[r.k]}</div></div>`).join("")}</div>
        ${f.powerWhy ? `<details class="why"><summary>Por qué estos valores</summary><dl>${RUBROS.map(r => `<dt>${esc(r.n)} · ${f.power[r.k]}</dt><dd>${esc(f.powerWhy[r.k] || "")}</dd>`).join("")}</dl></details>` : ""}
        <h3 class="sub">Intereses y prioridades de seguridad nacional</h3>
        <div class="prio">${f.priorities.map((x, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><b style="display:inline">${esc(x.h)}</b><p>${esc(x.x)}</p></div>`).join("")}</div>
        <h3 class="sub">Dónde operan · principales focos</h3>
        <div class="tags">${f.focos.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      </section>

      <section class="block" id="sec-organigrama">
        <h2>Organigrama <small>Los organismos que forman la comunidad de inteligencia y su relación con lo militar, lo policial, la justicia y el gobierno · tocá uno para abrir su ficha</small></h2>
        ${orgChart(p)}
        <h3 class="sub">Relación con el gobierno civil</h3>
        <div class="law-grid"><div class="law"><ul>${f.civil.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>
      </section>

      <section class="block" id="sec-legal">
        <h2>Marco legal <small>Qué pueden hacer con ciudadanos propios y extranjeros, y quién los controla</small></h2>
        <div class="law-grid">
          <div class="law"><h4>Ciudadanos propios</h4><ul>${f.law.domestic.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="law"><h4>Extranjeros</h4><ul>${f.law.foreign.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="law"><h4>Controles</h4><ul>${f.law.oversight.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
        <h3 class="sub">Avance sobre los derechos civiles</h3>
        ${rightsChart(f)}
      </section>

      <section class="block" id="sec-mapa">
        <h2>Mapa de operaciones <small>Mové la línea de tiempo para ver dónde operó cada organismo</small></h2>
        <div class="chips" id="evChips">${Object.entries(EV).map(([k, t]) => `<button type="button" class="chip on" data-t="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n}</button>`).join("")}</div>
        <div class="mapbox" id="opMap"></div>
      </section>

      <section class="block" id="sec-cronologia">
        <h2>Cronología histórica <small>Cambios de estructura, doctrina y operaciones hasta hoy</small></h2>
        <div class="tl">${f.timeline.map(t => `<div class="era">${esc(t.era)}</div><div class="it${t.now ? " now" : ""}"><span class="d">${esc(t.d)}</span><span><b>${esc(t.h)}</b><p>${esc(t.x)}</p></span></div>`).join("")}</div>
      </section>

      <section class="block" id="sec-casos">
        <h2>Casos controvertidos e ilegales <small>Clasificados según la evidencia disponible</small></h2>
        <div class="ev-scale">${Object.values(EVI).map(e => `<div style="--c:${e.c}"><b>${e.n}</b>${esc(e.x)}</div>`).join("")}</div>
        <div class="chips" id="caseChips"></div>
        <div class="cases" id="caseList"></div>
      </section>

      <section class="block" id="sec-fallas">
        <h2>Fallas, omisiones y falsas banderas <small>Fallas de inteligencia; omisiones, cuando el servicio tenía avisos o debía saber y no actuó, o encubrió; y operaciones de falsa bandera. Confirmadas o en duda, con cuánta evidencia hay</small></h2>
        <div class="chips" id="flChips"></div>
        <div class="fl-list" id="flList"></div>
      </section>

      <section class="block" id="sec-practicas">
        <h2>Qué hacen y a quién espían <small>A quién espían; si hay casos de extorsión, asesinatos, sabotajes, tortura y secuestros; cómo influyen en otras sociedades con propaganda, conflictos, ideas y dinero; a quién usan como agentes (emigrantes, empresarios, religiosos); y qué dan a otros países</small></h2>
        ${pracBlock(f)}
      </section>

      <section class="block" id="sec-gente">
        <h2>Denunciantes, topos y desertores <small>Quienes revelaron secretos, quienes espiaron para otro país y quienes se pasaron de bando</small></h2>
        <div class="chips" id="pxChips"></div>
        <div class="fl-list" id="pxList"></div>
      </section>

      <section class="block" id="sec-filtraciones">
        <h2>Filtraciones, ocultamientos, robos y desinformación <small>Información que salió a propósito o por error, la que se escondió al público y a las autoridades civiles, la que robaron y la que se fabricó</small></h2>
        <div class="chips" id="lkChips"></div>
        <div class="fl-list" id="lkList"></div>
      </section>

      <section class="block" id="sec-dinero">
        <h2>Dinero y coberturas <small>Cuánto les da el Estado y cuánto se sabe, en qué lo gastan, otros ingresos, empresas de fachada, bancos, crimen organizado y organizaciones de cobertura</small></h2>
        ${f.dinero ? `<div class="prio modus">${window.DINERO.filter(m => f.dinero[m.k]).map(m => `<div><span>${esc(m.n)}</span><p>${esc(f.dinero[m.k])}</p></div>`).join("")}</div>` : `<p class="muted">Sin datos cargados todavía.</p>`}
        <h3 class="sub">Casos documentados</h3>
        <div class="chips" id="fdChips"></div>
        <div class="fl-list" id="fdList"></div>
      </section>

      <section class="block" id="sec-proxies">
        <h2>Organizaciones proxy <small>Grupos armados, organizaciones terroristas, carteles y mafias, empresas, ONG, medios, instituciones y centros académicos que el servicio creó, financió o usó, hoy o en el pasado. A veces cambiaron de bando o jugaron a dos puntas</small></h2>
        ${proxyList(f)}
      </section>
      <section class="block" id="sec-relaciones">
        <h2>Relaciones <small>Con otros servicios y con empresas nacionales y extranjeras</small></h2>
        ${relCols(p)}
        <h3 class="sub">Empresas</h3>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">Empresa</th><th scope="col">Origen</th><th scope="col">Rubro</th><th scope="col">Relación</th><th scope="col">Detalle</th></tr></thead>
          <tbody>${f.companies.map(c => `<tr><td>${esc(c.n)}</td><td>${esc(c.c)}</td><td>${esc(c.rubro)}</td><td>${esc(c.rel)}</td><td>${esc(c.x)}</td></tr>`).join("")}</tbody></table></div>
      </section>

      <section class="block" id="sec-poder">
        <h2>Luchas de poder <small>Entre secciones, entre agencias y con militares, partidos, justicia y grupos económicos</small></h2>
        <div class="fights">${f.struggles.map(s => `<div class="fight"><span class="k">${esc(s.k)}</span><div class="vs"><b>${esc(s.a)}</b><i>⟷</i><b>${esc(s.b)}</b></div>
          <dl><dt>En juego</dt><dd>${esc(s.stake)}</dd><dt>Estado</dt><dd>${esc(s.state)}</dd></dl><p style="margin:0;font-size:13.5px;color:var(--soft)">${esc(s.x)}</p></div>`).join("")}</div>
      </section>

      <section class="block" id="sec-fuentes">
        <h2>Fuentes</h2>
        <ol class="sources">${f.sources.map(s => `<li><a href="${esc(s.u)}" ${s.u.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(s.t)}</a></li>`).join("")}</ol>
      </section>`;

    // subnavegación
    const links = [...app.querySelectorAll(".subnav a")];
    links.forEach(a => a.addEventListener("click", e => { e.preventDefault(); document.getElementById("sec-" + a.dataset.sec).scrollIntoView({ behavior: "smooth" }); }));
    const io = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", "sec-" + a.dataset.sec === en.target.id)); }), { rootMargin: "-140px 0px -60% 0px" });
    app.querySelectorAll("section.block").forEach(s => io.observe(s));

    // organigrama → panel lateral
    app.querySelectorAll(".onode[data-code]").forEach(b => b.addEventListener("click", () => openBody(p, f, b.dataset.code)));
    // derechos civiles
    app.querySelectorAll(".rmark").forEach(b => b.addEventListener("click", () => {
      const r = f.rights[b.dataset.i];
      app.querySelectorAll(".rmark").forEach(x => x.classList.toggle("on", x === b));
      app.querySelector("#rightsDetail").innerHTML = `<span class="mono" style="color:${r.dir === "amplia" ? "var(--orange)" : "var(--ph)"}">${esc(r.d)} · ${r.dir === "amplia" ? "Amplió la vigilancia" : "Agregó controles"} · ${esc(r.area)}</span><br><b>${esc(r.h)}</b> — ${esc(r.x)}`;
    }));
    // casos
    drawCases(f);
    drawFailures(f);
    drawKinds(f.insiders, "px", PX_KIND, PX_DIR, x => `${x.cargo ? `<dt>Dónde estaba</dt><dd>${esc(x.cargo)}</dd>` : ""}${x.hacia ? `<dt>A quién</dt><dd>${esc(x.hacia)}</dd>` : ""}${x.fin ? `<dt>Qué pasó</dt><dd>${esc(x.fin)}</dd>` : ""}`);
    drawKinds(f.leaks, "lk", LK_KIND, LK_ROL, x => `${x.aquien ? `<dt>A quién se ocultó</dt><dd>${esc(x.aquien)}</dd>` : ""}${x.como ? `<dt>Cómo salió a la luz</dt><dd>${esc(x.como)}</dd>` : ""}${x.obj ? `<dt>Objetivo o efecto</dt><dd>${esc(x.obj)}</dd>` : ""}`);
    drawKinds(f.fondos, "fd", FD_KIND, LK_ROL, x => `${x.monto ? `<dt>Monto</dt><dd>${esc(x.monto)}</dd>` : ""}${x.obj ? `<dt>Para qué</dt><dd>${esc(x.obj)}</dd>` : ""}`);
    // mapa con línea de tiempo
    const m = OpMap(document.getElementById("opMap"), p, f);
    cleanup = () => { io.disconnect(); m.destroy(); };
  }

  function orgChart(p) {
    const ag = p.agencies, G = window.ORG_GROUPS;
    const node = a => `<button type="button" class="onode${a.g === "k" ? " coord" : ""}" data-code="${esc(a.code)}"><b>${esc(a.code)}</b><span>${esc(a.name)}</span></button>`;
    const groups = ["c", "m", "p", "j"].map(g => ({ g, list: ag.filter(a => a.g === g) })).filter(x => x.list.length);
    return `<div class="org">
      <div class="org-row"><div class="onode top" aria-label="Conducción política"><b>Conducción política</b><span>Jefatura de Estado o de Gobierno</span></div></div>
      <div class="org-link"></div>
      <div class="org-row">${ag.filter(a => a.g === "k").map(node).join("")}</div>
      <div class="org-link"></div>
      <div class="org-groups">${groups.map(({ g, list }) => `<div class="org-group ${g}"><h5><span>${esc(G[g])}</span><span>${list.length}</span></h5>${list.map(node).join("")}</div>`).join("")}</div>
      <p class="org-note">Las líneas de dependencia, presupuesto y control entre organismos se detallan en la ficha de cada uno.</p></div>`;
  }

  function openBody(p, f, code) {
    const a = p.agencies.find(x => x.code === code), b = f.bodies[code] || {};
    const dlg = document.getElementById("drawer");
    dlg.innerHTML = `<div class="drawer-in">
      <button type="button" class="btn x" id="drawerClose">Cerrar ✕</button>
      <span class="mono muted" style="font-size:11px;letter-spacing:.1em;text-transform:uppercase">${esc(p.name)} · ${esc(window.ORG_GROUPS[a.g])}${sampleTag(f.sample)}</span>
      <div class="code">${esc(a.code)}</div><h2 id="drawerTitle">${esc(a.name)}</h2>
      <dl>
        <div><dt>Cómo trabaja</dt><dd>${esc(b.how)}</dd></div>
        <div><dt>Desde</dt><dd>${esc(b.since)}</dd></div>
        <div><dt>Personal</dt><dd>${esc(b.staff)}</dd></div>
        <div><dt>Presupuesto</dt><dd>${esc(b.budget)}</dd></div>
        <div><dt>Tecnología</dt><dd><div class="tags">${(b.tech || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div></dd></div>
        <div><dt>Dónde opera</dt><dd><div class="tags">${(b.where || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div></dd></div>
      </dl></div>`;
    dlg.showModal();
    dlg.querySelector("#drawerClose").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }, { once: true });
  }

  function rightsChart(f) {
    const R = f.rights, yf = r => +String(r.d).slice(0, 4) + ((+String(r.d).slice(5, 7) || 1) - 1) / 12;
    const ys = R.map(yf), y0 = Math.min(...ys) - 3, y1 = Math.max(...ys, 2026) + 1;
    const cnt = { amplia: 0, recorta: 0 }, lvl = R.map(r => cnt[r.dir]++ % 4);
    const x = y => 3 + (y - y0) / (y1 - y0) * 94;
    const up = R.filter(r => r.dir === "amplia").length;
    return `<div class="rights">
      <div class="rights-sum"><span style="color:var(--orange)">▲ ${up} hitos amplían la vigilancia</span><span style="color:var(--ph)">▼ ${R.length - up} agregan controles</span>${sampleTag(f.sample)}</div>
      <div class="rights-axis"><div class="line"></div><span class="lab up">Más poder de vigilancia</span><span class="lab dn">Más controles y derechos</span>
      ${R.map((r, i) => { const h = 22 + lvl[i] * 20, upd = r.dir === "amplia", c = upd ? "var(--orange)" : "var(--ph)";
        return `<button type="button" class="rmark" data-i="${i}" aria-label="${esc(r.d)}: ${esc(r.h)}" style="--c:${c};left:${x(yf(r))}%;${upd ? `bottom:50%;flex-direction:column` : `top:50%;flex-direction:column-reverse`}">
          <span class="yr">${esc(String(r.d).slice(0, 4))}</span><span class="cap"></span><span class="stem" style="height:${h}px"></span></button>`; }).join("")}
      </div>
      <div class="rights-detail" id="rightsDetail">Tocá un hito para ver qué ley, fallo, programa o reforma fue y qué derecho tocó.</div></div>`;
  }

  function drawCases(f) {
    const chips = document.getElementById("caseChips"), list = document.getElementById("caseList");
    let filt = "all", onlyIl = false;
    const n = k => f.cases.filter(c => c.ev === +k).length;
    chips.innerHTML = `<button type="button" class="chip on" data-k="all">Todos · ${f.cases.length}</button>${Object.entries(EVI).map(([k, e]) => `<button type="button" class="chip" data-k="${k}" style="--c:${e.c}"><i></i>${e.n} · ${n(k)}</button>`).join("")}<span class="chip-sep" aria-hidden="true"></span><button type="button" class="chip" data-il="1" aria-pressed="false" style="--c:var(--red)">Sólo ilegales</button>`;
    const draw = () => {
      const cs = f.cases.filter(c => (filt === "all" || c.ev === +filt) && (!onlyIl || c.ilegal));
      list.innerHTML = cs.map(c => { const e = EVI[c.ev];
        return `<article class="case${c.ev === 4 ? " consp" : ""}" style="--c:${e.c}">
          <div class="meta"><span class="ev">${e.n}</span><span>${esc(c.d)}</span>${c.ilegal ? `<span class="ilegal">Ilegal</span>` : ""}${c.ev === 4 ? `<span class="stamp-nv">No verificado</span>` : ""}</div>
          <h4>${esc(c.h)}</h4><p>${esc(c.x)}</p>
          <dl><dt>Lo afirma</dt><dd>${esc(c.who)}</dd>${c.missing ? `<dt>Qué falta</dt><dd>${esc(c.missing)}</dd>` : ""}${c.debunk ? `<dt>Qué la desmiente</dt><dd>${esc(c.debunk)}</dd>` : ""}</dl></article>`; }).join("") || `<p class="muted">No hay casos con ese filtro.</p>`;
    };
    chips.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => { filt = b.dataset.k; chips.querySelectorAll("[data-k]").forEach(x => x.classList.toggle("on", x === b)); draw(); }));
    chips.querySelector("[data-il]").addEventListener("click", e => { onlyIl = !onlyIl; e.currentTarget.classList.toggle("on", onlyIl); e.currentTarget.setAttribute("aria-pressed", String(onlyIl)); draw(); });
    draw();
  }

  const PX_K = window.PROXY_TIPOS, PX_ROL = window.PROXY_ROLES;
  function proxyList(f) {
    const L = (f.proxies || []).slice().sort((a, b) => (b.hoy - a.hoy) || String(a.d).localeCompare(String(b.d)));
    if (!L.length) return `<p class="muted">Esta ficha no encontró organizaciones proxy documentadas.</p>`;
    return `<div class="fl-list">${L.map(x => { const K = PX_K[x.k], R = PX_ROL[x.rol], E = EVI[x.ev];
      return `<article class="fl" style="--k:${K.c};--c:${E.c}"><div class="fl-d">${esc(x.d)}</div><div class="fl-b">
        <div class="meta"><span class="kind">${esc(K.n)}</span><span class="evtag" style="--c:${R.c}">${esc(R.n)}</span><span class="evtag" style="--c:${E.c}">${E.n}</span>${x.hoy ? `<span class="evtag" style="--c:var(--red)">Activo</span>` : ""}</div>
        <h4>${esc(x.n)}</h4><p>${esc(x.x)}</p>
        <dl><dt>Lo afirma</dt><dd>${esc(x.who)}</dd><dt>Fuente</dt><dd><a href="${esc(x.u)}" target="_blank" rel="noopener">${esc(x.st)}</a></dd></dl></div></article>`; }).join("")}</div>`;
  }
  const FL_KIND = { falla: { n: "Falla de inteligencia", c: "var(--cyan)" }, omision: { n: "Omisión o encubrimiento", c: "var(--amber)" }, falsa: { n: "Falsa bandera", c: "var(--violet)" } };
  const FL_WEIGHT = { 3: "Abundante", 2: "Parcial", 1: "Escasa" };
  function drawFailures(f) {
    const chips = document.getElementById("flChips"), list = document.getElementById("flList"), F = f.failures || [];
    if (!F.length) { chips.innerHTML = ""; list.innerHTML = `<p class="muted">Sin datos cargados todavía.</p>`; return; }
    let kind = "all", ev = "all";
    const n = k => F.filter(x => x.k === k).length;
    chips.innerHTML = `<button type="button" class="chip on" data-k="all">Todas · ${F.length}</button>${Object.entries(FL_KIND).map(([k, t]) => `<button type="button" class="chip" data-k="${k}" style="--c:${t.c}"><i></i>${t.n} · ${n(k)}</button>`).join("")}
      <span class="chip-sep" aria-hidden="true"></span>${[1, 2, 3, 4].map(e => `<button type="button" class="chip" data-e="${e}" aria-pressed="false" style="--c:${EVI[e].c}"><i></i>${EVI[e].n}</button>`).join("")}`;
    const draw = () => {
      const L = F.filter(x => (kind === "all" || x.k === kind) && (ev === "all" || x.ev === +ev)).sort((a, b) => String(a.d).localeCompare(String(b.d)));
      list.innerHTML = L.map(x => { const K = FL_KIND[x.k], E = EVI[x.ev];
        return `<article class="fl" style="--k:${K.c};--c:${E.c}">
          <div class="fl-d">${esc(x.d)}</div>
          <div class="fl-b${x.ev === 4 ? " consp" : ""}">
            <div class="meta"><span class="kind">${K.n}</span><span class="evtag" style="--c:${E.c}">${E.n}</span>${x.ev === 4 ? `<span class="stamp-nv">No verificado</span>` : ""}</div>
            <h4>${esc(x.h)}</h4><p>${esc(x.x)}</p>
            <dl><dt>¿En duda?</dt><dd>${esc(x.why)}</dd>
              <dt>Evidencia</dt><dd><span class="wbar" aria-label="${FL_WEIGHT[x.w]}">${[1, 2, 3].map(i => `<i class="${i <= x.w ? "on" : ""}"></i>`).join("")}</span> ${FL_WEIGHT[x.w]}${x.wx ? ` · ${esc(x.wx)}` : ""}</dd>
              <dt>Lo afirma</dt><dd>${esc(x.who)}</dd>
              ${x.u ? `<dt>Fuente</dt><dd><a href="${esc(x.u)}" ${String(x.u).startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(x.st || "Fuente")}</a></dd>` : ""}</dl>
          </div></article>`; }).join("") || `<p class="muted">No hay hechos con ese filtro.</p>`;
    };
    chips.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => { kind = b.dataset.k; chips.querySelectorAll("[data-k]").forEach(x => x.classList.toggle("on", x === b)); draw(); }));
    chips.querySelectorAll("[data-e]").forEach(b => b.addEventListener("click", () => { ev = ev === b.dataset.e ? "all" : b.dataset.e; chips.querySelectorAll("[data-e]").forEach(x => { x.classList.toggle("on", x.dataset.e === ev); x.setAttribute("aria-pressed", String(x.dataset.e === ev)); }); draw(); }));
    draw();
  }

  const PX_KIND = { denunciante: { n: "Denunciante", c: "var(--cyan)" }, topo: { n: "Topo o doble agente", c: "var(--violet)" }, desertor: { n: "Desertor", c: "var(--blue)" } };
  const PX_DIR = { sale: "Desde adentro", entra: "Desde afuera" };
  const LK_KIND = { filtracion: { n: "Filtración intencional", c: "var(--cyan)" }, accidental: { n: "Filtración no intencional", c: "var(--blue)" }, robo: { n: "Robo de información", c: "var(--violet)" }, ocultamiento: { n: "Ocultamiento", c: "var(--amber-lo)" }, desinfo: { n: "Desinformación", c: "var(--magenta)" } };
  const LK_ROL = { autor: "Lo hizo", blanco: "Lo sufrió" };
  const FD_KIND = { presupuesto: { n: "Presupuesto", c: "var(--cyan)" }, fachada: { n: "Empresa de fachada", c: "var(--violet)" }, banco: { n: "Bancos y finanzas", c: "var(--blue)" }, crimen: { n: "Crimen organizado", c: "var(--magenta)" }, cobertura: { n: "ONG y cobertura", c: "var(--amber-lo)" }, desvio: { n: "Desvío o uso indebido", c: "var(--red)" } };
  // lista cronológica con filtros por tipo y por dirección (sirve para personas y para filtraciones)
  function drawKinds(items, pre, KIND, DIR, extra) {
    const chips = document.getElementById(pre + "Chips"), list = document.getElementById(pre + "List"), F = items || [];
    if (!F.length) { chips.innerHTML = ""; list.innerHTML = `<p class="muted">Sin datos cargados todavía.</p>`; return; }
    let kind = "all", dir = "all";
    const n = k => F.filter(x => x.k === k).length, dk = pre === "px" ? "dir" : "rol";
    chips.innerHTML = `<button type="button" class="chip on" data-k="all">Todos · ${F.length}</button>${Object.entries(KIND).map(([k, t]) => `<button type="button" class="chip" data-k="${k}" style="--c:${t.c}"><i></i>${t.n} · ${n(k)}</button>`).join("")}
      <span class="chip-sep" aria-hidden="true"></span>${Object.entries(DIR).map(([k, t]) => `<button type="button" class="chip" data-r="${k}" aria-pressed="false">${t} · ${F.filter(x => x[dk] === k).length}</button>`).join("")}`;
    const draw = () => {
      const L = F.filter(x => (kind === "all" || x.k === kind) && (dir === "all" || x[dk] === dir)).sort((a, b) => String(a.d).localeCompare(String(b.d)));
      list.innerHTML = L.map(x => { const K = KIND[x.k] || { n: x.k, c: "var(--muted)" }, E = EVI[x.ev] || EVI[1];
        return `<article class="fl" style="--k:${K.c};--c:${E.c}">
          <div class="fl-d">${esc(x.d)}</div>
          <div class="fl-b${x.ev === 4 ? " consp" : ""}">
            <div class="meta"><span class="kind">${K.n}</span><span class="dirtag">${esc(DIR[x[dk]] || "")}</span><span class="evtag" style="--c:${E.c}">${E.n}</span>${x.ev === 4 ? `<span class="stamp-nv">No verificado</span>` : ""}</div>
            <h4>${x.n ? `${esc(x.n)} <small>· ${esc(x.h)}</small>` : esc(x.h)}</h4><p>${esc(x.x)}</p>
            <dl>${extra(x)}<dt>Lo afirma</dt><dd>${esc(x.who)}</dd>
              ${x.u ? `<dt>Fuente</dt><dd><a href="${esc(x.u)}" ${String(x.u).startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(x.st || "Fuente")}</a></dd>` : ""}</dl>
          </div></article>`; }).join("") || `<p class="muted">No hay casos con ese filtro.</p>`;
    };
    chips.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => { kind = b.dataset.k; chips.querySelectorAll("[data-k]").forEach(x => x.classList.toggle("on", x === b)); draw(); }));
    chips.querySelectorAll("[data-r]").forEach(b => b.addEventListener("click", () => { dir = dir === b.dataset.r ? "all" : b.dataset.r; chips.querySelectorAll("[data-r]").forEach(x => { x.classList.toggle("on", x.dataset.r === dir); x.setAttribute("aria-pressed", String(x.dataset.r === dir)); }); draw(); }));
    draw();
  }

  function pracBlock(f) {
    if (!f.practicas) return `<p class="muted">Sin datos cargados todavía.</p>`;
    const groups = [...new Set(window.PRACTICAS.map(x => x.g))];
    return groups.map(g => `<h3 class="sub">${esc(g)}</h3><div class="pr-grid">${window.PRACTICAS.filter(x => x.g === g).map(m => {
      const v = f.practicas[m.k] || { ev: 0, x: "" }, E = v.ev ? EVI[v.ev] : window.PRAC_NONE;
      return `<div class="pr${v.ev ? "" : " none"}" style="--c:${E.c}"><div class="pr-h"><b>${esc(m.n)}</b><span class="evtag" style="--c:${E.c}">${esc(E.n)}</span></div>
        <p>${esc(v.x || "")}</p>${v.u ? `<a href="${esc(v.u)}" target="_blank" rel="noopener">${esc(v.st || "Fuente")}</a>` : ""}</div>`; }).join("")}</div>`).join("")
      + `<p class="muted" style="font-size:13px;margin:10px 0 0">El color indica el nivel de evidencia del caso más firme. "Sin casos documentados" significa que esta ficha no encontró casos públicos, no que se pueda descartar.</p>`;
  }

  function relCols(p) {
    const mine = window.RELACIONES.filter(r => r.a === p.id || r.b === p.id).map(r => ({ o: byId[r.a === p.id ? r.b : r.a], t: r.t, x: r.x, u: r.u, st: r.st }));
    return `<div class="rel-cols">${Object.entries(RT).map(([k, t]) => { const l = mine.filter(m => m.t === k);
      return `<div class="rel-col" style="--c:${t.c}"><h4><span>${t.n}</span><span>${l.length}</span></h4>${l.map(m => `<div class="rel-it"><a href="#p-${m.o.id}">${esc(m.o.name)}</a><p>${esc(m.x)} <a class="src" href="${esc(m.u)}" target="_blank" rel="noopener">Fuente ↗</a></p></div>`).join("") || `<span class="none">Ninguno entre los países del monitor</span>`}</div>`; }).join("")}</div>
      <p class="muted" style="font-size:13px;margin:8px 0 0">Clasificación editorial del Monitor sobre la relación entre los servicios, con la razón y la fuente de cada vínculo.</p>`;
  }

  // ---------- mapa de operaciones con línea de tiempo ----------
  function OpMap(box, p, f) {
    const evs = f.events.filter(e => !e.nomap).map((e, i) => ({ ...e, i, t0: parseD(e.d).getTime(), xy: pt([e.lon, e.lat]) }));
    const home = pt(p.center), feat = FEAT[p.map];
    // país donde cae cada hecho (para la capa de intensidad)
    evs.forEach(e => { if (e.c && FEATURES.some(F => F.properties.name === e.c)) { e.cn = e.c; return; } const hit = FEATURES.find(F => d3.geoContains(F, [e.lon, e.lat])); e.cn = hit ? hit.properties.name : null; });
    const LVC = { 1: "#ffd23f", 2: "#ff9433", 3: "#ff4d3d" };
    const LAYERS = { none: "Ninguna", interes: "Interés estratégico", intensidad: "Intensidad de operaciones" };
    let layer = "intensidad";
    const start = Math.min(...evs.map(e => e.t0)) - 365 * 864e5, end = parseD(META.updated).getTime();
    const on = new Set(Object.keys(EV));
    let cur = end, timer = null;
    const y0 = new Date(start).getUTCFullYear(), y1 = new Date(end).getUTCFullYear();
    const span = y1 - y0, step = [1, 2, 5, 10, 20, 25, 50].find(k => span / k <= 8) || 100;
    const ticks = []; for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) ticks.push(y);
    const pos = t => ((t - start) / (end - start) * 100).toFixed(2);

    box.innerHTML = `<div class="layer-bar" role="group" aria-label="Colorear países"><span class="lbl">Colorear países</span>${Object.entries(LAYERS).map(([k, n]) => `<button type="button" class="chip${k === layer ? " on" : ""}" data-layer="${k}" aria-pressed="${k === layer}">${n}</button>`).join("")}<span class="layer-note" id="opLayerNote"></span></div>
      <div class="map-split"><div>
        <div class="map-stage"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Operaciones de ${esc(p.name)} en el mundo">${BASE}<g id="opFill"></g>${feat ? `<path class="m-hl" d="${path(feat)}"/>` : ""}
          <g id="opArcs"></g><g id="opDots"></g>
          <g class="node big">${rings(home[0], home[1], 1.35)}<rect x="${home[0] - 5}" y="${home[1] - 5}" width="10" height="10"/>${nodeLabel(p.id, home[0], home[1], p.short.toUpperCase())}</g></svg>
          <div class="scan" aria-hidden="true"></div>
          <div class="map-corner" id="opDate"></div></div>
        <div class="tl-bar">
          <button type="button" class="btn primary" id="opPlay">▶ Reproducir</button>
          <div class="tl-track">
            <div class="tl-marks">${evs.map(e => `<i style="left:${pos(e.t0)}%;--c:${EV[e.t].c}"></i>`).join("")}</div>
            <input type="range" id="opRange" min="${start}" max="${end}" step="${864e5}" value="${end}" aria-label="Fecha del mapa">
            <div class="tl-ticks">${ticks.map(y => `<span style="left:${pos(Date.UTC(y, 0, 1))}%">${y}</span>`).join("")}</div>
          </div>
          <div class="tl-btns"><button type="button" class="btn" id="opPrev">◀ Hecho</button><button type="button" class="btn" id="opNext">Hecho ▶</button><button type="button" class="btn" id="opNow">Hoy</button></div>
        </div></div>
      <aside class="map-side"><h4 id="opCount"></h4><div class="ev-list" id="opList"></div></aside></div>
      <div class="legend" id="opLegend"></div>`;

    const $ = s => box.querySelector(s), range = $("#opRange");
    const evLegend = Object.values(EV).map(t => `<span><i class="dot" style="--c:${t.c}"></i>${t.n}</span>`).join("");
    function drawLayer(shown) {
      let lv = {};
      if (layer === "interes") lv = f.interest || {};
      else if (layer === "intensidad") {
        const n = {}; shown.forEach(e => { if (e.cn) n[e.cn] = (n[e.cn] || 0) + 1; });
        const max = Math.max(0, ...Object.values(n));
        Object.entries(n).forEach(([c, k]) => lv[c] = Math.max(1, Math.ceil(k / max * 3)));
      }
      $("#opFill").innerHTML = Object.entries(lv).filter(([c]) => FEAT[c]).map(([c, l]) => `<path class="lv-fill" data-c="${esc(c)}" data-l="${l}" d="${path(FEAT[c])}" style="--c:${LVC[l]}"/>`).join("");
      $("#opFill").querySelectorAll(".lv-fill").forEach(el => {
        const lab = layer === "interes" ? ["", "Interés bajo", "Interés medio", "Interés alto"] : ["", "Intensidad baja", "Intensidad media", "Intensidad alta"];
        el.addEventListener("mousemove", ev => showTip(ev, `<b>${esc(window.esName(el.dataset.c))}</b><span class="d">${lab[el.dataset.l]}</span>`)); el.addEventListener("mouseleave", hideTip);
      });
      const names = layer === "interes" ? ["Bajo", "Medio", "Alto"] : ["Baja", "Media", "Alta"];
      $("#opLegend").innerHTML = (layer === "none" ? "" : `<span class="lg-t">${LAYERS[layer]}:</span>${[1, 2, 3].map(l => `<span><i class="sq" style="background:${LVC[l]}"></i>${names[l - 1]}</span>`).join("")}<span class="lg-sep"></span>`) + evLegend;
      $("#opLayerNote").innerHTML = layer === "interes" ? `Hacia dónde mira este servicio, según su doctrina y prioridades${f.sample ? ` <span class="sample-tag">de prueba</span>` : ""}` : layer === "intensidad" ? "Cantidad de hechos por país hasta la fecha del mapa, relativa al país con más hechos" : "";
    }
    function draw() {
      const shown = evs.filter(e => e.t0 <= cur && on.has(e.t));
      drawLayer(shown);
      const last = shown[shown.length - 1];
      const ageOf = e => (cur - e.t0) / (365 * 864e5);
      $("#opArcs").innerHTML = shown.map(e => `<path d="${arc(home, e.xy, .12)}" fill="none" stroke="${EV[e.t].c}" stroke-width="1.1" opacity="${Math.max(.12, .7 - ageOf(e) * .04).toFixed(2)}"/>`).join("");
      $("#opDots").innerHTML = shown.map(e => `${e === last ? `<circle class="ping" cx="${e.xy[0]}" cy="${e.xy[1]}" r="4" fill="none" stroke="${EV[e.t].c}" stroke-width="1.5"/>` : ""}<circle class="ev-dot" data-i="${e.i}" cx="${e.xy[0]}" cy="${e.xy[1]}" r="${e === last ? 4.5 : 3.5}" fill="${EV[e.t].c}" fill-opacity="${Math.max(.35, 1 - ageOf(e) * .05).toFixed(2)}"/>`).join("");
      const isNow = cur >= end - 864e5;
      $("#opDate").innerHTML = `<b>${fmt(new Date(cur).toISOString().slice(0, 10))}</b>${isNow ? "Hoy · situación actual" : "Hechos hasta esta fecha"}`;
      $("#opCount").textContent = `Hechos hasta la fecha · ${shown.length}`;
      $("#opList").innerHTML = [...shown].reverse().map((e, k) => `<div class="ev-item${k === 0 ? " fresh" : ""}" style="--c:${EV[e.t].c}"><i></i><div><span class="d">${fmt(e.d)} · ${esc(EV[e.t].n)}</span><b>${esc(e.h)}</b><p>${esc(e.x)}</p></div></div>`).join("") || `<p class="muted" style="font-size:13px">Sin hechos hasta esta fecha.</p>`;
      $("#opDots").querySelectorAll(".ev-dot").forEach(c => { const e = evs[c.dataset.i];
        c.addEventListener("mousemove", ev => showTip(ev, `<b>${esc(e.h)}</b><span class="d">${fmt(e.d)} · ${esc(EV[e.t].n)}</span>`)); c.addEventListener("mouseleave", hideTip); });
    }
    const set = v => { cur = Math.max(start, Math.min(end, v)); range.value = cur; draw(); };
    const stop = () => { clearInterval(timer); timer = null; $("#opPlay").textContent = "▶ Reproducir"; };
    range.addEventListener("input", () => { stop(); set(+range.value); });
    $("#opPlay").addEventListener("click", () => {
      if (timer) return stop();
      if (cur >= end) set(start);
      $("#opPlay").textContent = "❚❚ Pausa";
      const inc = (end - start) / 240;
      timer = setInterval(() => { if (cur >= end) return stop(); set(cur + inc); }, 50);
    });
    $("#opPrev").addEventListener("click", () => { stop(); const e = [...evs].reverse().find(e => e.t0 < cur - 864e5); set(e ? e.t0 : start); });
    $("#opNext").addEventListener("click", () => { stop(); const e = evs.find(e => e.t0 > cur); set(e ? e.t0 : end); });
    $("#opNow").addEventListener("click", () => { stop(); set(end); });
    box.querySelectorAll("[data-layer]").forEach(b => b.addEventListener("click", () => {
      layer = b.dataset.layer; box.querySelectorAll("[data-layer]").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", String(x === b)); }); draw();
    }));
    document.querySelectorAll("#evChips [data-t]").forEach(b => b.addEventListener("click", () => {
      const k = b.dataset.t; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); draw();
    }));
    draw();
    return { destroy: stop };
  }

  // ================= METODOLOGÍA =================
  function renderMethod() {
    app.innerHTML = `<div class="method">
      <h1>Metodología</h1>
      <div class="prose">
        <p>El monitor sigue a 60 países: doce del núcleo, dieciséis muy relevantes y treinta y dos relevantes en su región o por una habilidad puntual. Nueva Zelanda entra como parte de la alianza Cinco Ojos, dentro de las fichas de EE.UU. y el Reino Unido.</p>
        <p>Responsable editorial: Franco Martín López. Todo el contenido está redactado con palabras propias a partir de las fuentes citadas en cada ficha.</p>
        <p>La actualización es semanal. Las alertas cubren operaciones, capturas, expulsiones y filtraciones de los últimos días; se retiran cuando pasan dos semanas sin novedades.</p>
      </div>
      <div class="section-title"><h2>Escala de evidencia</h2><span>Cómo se clasifica cada caso controvertido</span></div>
      <div class="ev-scale">${Object.values(EVI).map(e => `<div style="--c:${e.c}"><b>${e.n}</b>${esc(e.x)}</div>`).join("")}</div>
      <div class="prose"><p>Cada caso dice quién lo afirma (un tribunal, un gobierno, un medio, un ex agente) y qué falta para subir de categoría. Si aparece evidencia nueva, el caso cambia de etiqueta y queda registrado. Las teorías conspirativas se incluyen con borde punteado y el sello "no verificado", junto con su origen y lo que las desmiente.</p></div>
      <div class="section-title"><h2>Poder por rubro</h2><span>Seis rubros, de 1 a 5</span></div>
      <div class="law-grid">${RUBROS.map(r => `<div class="law"><h4>${esc(r.n)} · ${r.s}</h4><p style="margin:0;color:var(--soft);font-size:14px">${esc(r.x)}</p></div>`).join("")}</div>
      <div class="section-title"><h2>Escala de poder</h2><span>El mismo criterio para los seis rubros; cada valor de una ficha lleva su justificación</span></div>
      <div class="ev-scale">${[5, 4, 3, 2, 1].map(l => `<div style="--c:rgba(106,245,154,${(.25 + l * .15).toFixed(2)})"><b style="color:var(--ph)">${l}</b>${esc(window.POWER_SCALE[l])}</div>`).join("")}</div>
      <div class="section-title"><h2>Interés estratégico</h2><span>Capa del mapa de operaciones de cada ficha</span></div>
      <div class="ev-scale">${[3, 2, 1].map(l => `<div style="--c:${["", "#ffd23f", "#ff9433", "#ff4d3d"][l]}"><b>${["", "Bajo", "Medio", "Alto"][l]}</b>${esc(window.INTEREST_SCALE[l])}</div>`).join("")}</div>
      <div class="prose"><p>La intensidad de operaciones, en cambio, no es editorial: se calcula contando los hechos cargados en cada país hasta la fecha que muestra el mapa.</p></div>
      <div class="section-title"><h2>Niveles de alerta</h2></div>
      <div class="ev-scale">${[5, 4, 3, 2, 1].map(l => `<div style="--c:${window.LV[l]}"><b>Nivel ${l} · ${window.LV_LABEL[l]}</b></div>`).join("")}</div>
      <div class="section-title"><h2>Derechos civiles</h2></div>
      <div class="prose"><p>Cada país tiene una línea de tiempo con las leyes, fallos, programas revelados y reformas que tocaron la privacidad, las comunicaciones, el debido proceso y la libertad de expresión. Los hitos que ampliaron los poderes de vigilancia van hacia arriba, en naranja; los que agregaron controles van hacia abajo, en verde.</p></div>
    </div>`;
  }

  Object.assign(window.ME, { esc, fmt, parseD, sampleTag, showTip, moveTip, hideTip, W, H, BASE, path, pt, arc, FEAT, rings, nodeLabel, byId, app, powerSum });
  renderAlerts();
  addEventListener("DOMContentLoaded", route);
})();
