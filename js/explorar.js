/* Monitor de Espionaje — secciones de "Explorar" y "Cómo funciona".
   Usa las utilidades que expone js/app.js en window.ME. */
(function () {
  "use strict";
  const ME = window.ME, R = ME.ROUTES;
  const { esc, fmt, sampleTag, showTip, moveTip, hideTip, W, H, BASE, path, pt, arc, FEAT, rings, nodeLabel, byId, app } = ME;
  const PAISES = window.PAISES, FICHAS = window.FICHAS, EV = window.EV_TYPES, EVI = window.EVIDENCE, RT = window.REL_TYPES, RUBROS = window.RUBROS;

  const es = n => window.esName(n);

  ME.EXPLORE = [
    { id: "bloques", k: "Mapa", n: "Bloques de inteligencia", x: "El mundo dividido en cinco: occidental, euroasiático, autónomos, neutrales y zonas abiertas." },
    { id: "alianzas", k: "Mapa", n: "Alianzas de inteligencia", x: "Cinco Ojos, Catorce Ojos, Club de Berna, OTAN y Shanghái." },
    { id: "infraestructura", k: "Mapa", n: "Infraestructura de vigilancia", x: "Estaciones de escucha, satélites, bases y cables." },
    { id: "software-espia", k: "Mapa", n: "Mercado del software espía", x: "Proveedores, herramientas y a quién le venden." },
    { id: "expulsiones", k: "Mapa", n: "Expulsiones y canjes", x: "Diplomáticos expulsados y espías canjeados, año por año." },
    { id: "personas", k: "Red", n: "Personas", x: "Topos, desertores, agentes dobles y directores." },
    { id: "practicas", k: "Tabla", n: "Qué hace cada servicio", x: "A quién espían y si hay casos de extorsión, asesinatos, tortura, armas o asistencia." },
    { id: "comparar", k: "Herramienta", n: "Comparar dos países", x: "Poder, leyes, casos y relación, cara a cara." },
    { id: "cronologia", k: "Línea de tiempo", n: "Cronología global", x: "Un carril por país en la misma línea de tiempo." },
    { id: "archivo", k: "Documentos", n: "Archivo desclasificado", x: "Fondos documentales y documentos de cada caso." }
  ];
  const menu2 = document.getElementById("navMenu2");
  if (menu2) menu2.innerHTML = ME.EXPLORE.map(e => `<a href="#${e.id}">${esc(e.n)}<span>${esc(e.k)}</span></a>`).join("");

  // ---------- piezas comunes ----------
  const head = (t, sub, sample) => `<div class="x-head"><a class="back" href="#inicio">← Volver al panorama</a>
    <h1>${esc(t)}</h1><p>${sub}${sampleTag(sample)}</p></div>`;
  const stage = (inner, label, corner) => `<div class="map-stage"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${BASE}${inner}</svg>
    <div class="scan" aria-hidden="true"></div>${corner ? `<div class="map-corner">${corner}</div>` : ""}<div class="map-foot">PROY. NATURAL EARTH · RETÍCULA 15°</div></div>`;
  const evTag = e => `<span class="evtag" style="--c:${EVI[e].c}">${EVI[e].n}</span>`;
  const bindTips = (root, sel, fn, click) => root.querySelectorAll(sel).forEach(el => {
    el.addEventListener("mousemove", e => showTip(e, fn(el))); el.addEventListener("mouseleave", hideTip);
    if (click) { el.addEventListener("click", () => click(el)); el.addEventListener("keydown", e => { if (e.key === "Enter") click(el); }); }
  });
  const monitorNodes = (ids) => PAISES.filter(p => !ids || ids.includes(p.id)).map(p => { const [x, y] = pt(p.center); return `<g class="node" data-id="${p.id}" tabindex="0" role="link" aria-label="${esc(p.name)}">${rings(x, y, .8)}<rect x="${x - 3}" y="${y - 3}" width="6" height="6"/></g>`; }).join("");

  // ================= BLOQUES =================
  R.bloques = { title: "Bloques de inteligencia", render(args) {
    const B = window.BLOQUES, D = Object.fromEntries(B.defs.map(d => [d.id, d])), op = { n: .6, c: .36, p: .16 };
    let cur = D[args[0]] ? args[0] : null;
    const cnt = id => B.paises.filter(p => p[1] === id).length;
    app.innerHTML = head("Bloques de inteligencia", "Una lectura editorial del Monitor: con quién comparte inteligencia cada país y con cuánta autonomía opera. El color indica el bloque; la intensidad, el grado de pertenencia (núcleo, cercano o pendular).") + `
      <div class="chips" id="blChips"><button type="button" class="chip" data-id="">Todos · ${B.paises.length}</button>${B.defs.map(d => `<button type="button" class="chip" data-id="${d.id}" style="--c:${d.c}"><i></i>${esc(d.n)} · ${cnt(d.id)}</button>`).join("")}</div>
      <div class="mapbox"><div class="map-split"><div id="blMap"></div><aside class="map-side" id="blSide"></aside></div>
      <div class="legend">${B.defs.map(d => `<span><i class="dot" style="--c:${d.c}"></i>${esc(d.n)}</span>`).join("")}<span class="hint">Más intenso = núcleo · más tenue y punteado = pendular</span></div></div>`;
    const draw = () => {
      app.querySelectorAll("#blChips .chip").forEach(b => b.classList.toggle("on", b.dataset.id === (cur || "")));
      const fill = B.paises.map(([n, b, g]) => FEAT[n] ? `<path class="bl-fill${g === "p" ? " bl-p" : ""}" d="${path(FEAT[n])}" style="--c:${D[b].c};--o:${cur && cur !== b ? .05 : op[g]}" data-n="${esc(n)}"/>` : "").join("");
      const ids = PAISES.filter(p => B.paises.some(x => x[0] === p.map && (!cur || x[1] === cur))).map(p => p.id);
      document.getElementById("blMap").innerHTML = stage(`<g>${fill}</g>${monitorNodes(ids)}`, "Mapa de bloques de inteligencia", cur ? `<b>${esc(D[cur].n)}</b>${cnt(cur)} países` : `<b>Cinco bloques</b>${B.paises.length} países clasificados`);
      const list = id => ["n", "c", "p"].map(g => { const L = B.paises.filter(x => x[1] === id && x[2] === g).sort((a, b) => es(a[0]).localeCompare(es(b[0])));
        return L.length ? `<h5 class="bl-g">${B.grados[g]} · ${L.length}</h5><div class="mlist">${L.map(x => `<span${x[3] ? ` title="${esc(x[3])}"` : ""}>${esc(es(x[0]))}${x[3] ? " *" : ""}</span>`).join("")}</div>` : ""; }).join("");
      const notes = id => B.paises.filter(x => (!id || x[1] === id) && x[3]).map(x => `<p class="side-x"><b>${esc(es(x[0]))}.</b> ${esc(x[3])}</p>`).join("");
      document.getElementById("blSide").innerHTML = cur
        ? `<h4>${esc(D[cur].n)} · ${cnt(cur)} países</h4><div class="ev-list"><p class="side-x">${esc(D[cur].x)}</p>${list(cur)}${notes(cur) ? `<h5 class="bl-g">Casos discutibles</h5>${notes(cur)}` : ""}</div>`
        : `<h4>Cinco bloques</h4><div class="ev-list">${B.defs.map(d => `<p class="side-x"><b style="color:${d.c}">${esc(d.n)}.</b> ${esc(d.x)}</p>`).join("")}<p class="side-x">Elegí un bloque para ver sus países y los casos discutibles. La clasificación es del Monitor y se revisa con cada actualización.</p></div>`;
      bindTips(app, ".bl-fill", el => { const x = B.paises.find(p => p[0] === el.dataset.n); return `<b>${esc(es(x[0]))}</b><span class="d">${esc(D[x[1]].n)} · ${B.grados[x[2]]}</span>${x[3] ? `<span class="d">${esc(x[3])}</span>` : ""}`; });
      bindTips(app, "#blMap .node", el => `<b>${esc(byId[el.dataset.id].name)}</b><span class="go">Clic para abrir la ficha →</span>`, el => location.hash = "p-" + el.dataset.id);
    };
    app.querySelectorAll("#blChips .chip").forEach(b => b.addEventListener("click", () => { cur = b.dataset.id || null; draw(); }));
    draw();
  } };

  // ================= ALIANZAS =================
  R.alianzas = { title: "Alianzas de inteligencia", render(args) {
    const A = window.ALIANZAS; let cur = A.find(a => a.id === args[0]) || A[0];
    app.innerHTML = head("Alianzas de inteligencia", "Qué países comparten inteligencia de manera estable y en qué rubro. Elegí una alianza para verla en el mapa.") + `
      <div class="chips" id="alChips">${A.map(a => `<button type="button" class="chip" data-id="${a.id}" style="--c:${a.c}"><i></i>${esc(a.n)} · ${a.members.length}</button>`).join("")}</div>
      <div class="mapbox"><div class="map-split"><div id="alMap"></div><aside class="map-side" id="alSide"></aside></div></div>`;
    const draw = () => {
      app.querySelectorAll("#alChips .chip").forEach(b => b.classList.toggle("on", b.dataset.id === cur.id));
      const fill = cur.members.map(n => FEAT[n] ? `<path class="al-fill" d="${path(FEAT[n])}" style="--c:${cur.c}" data-n="${esc(n)}"/>` : "").join("");
      const inMon = PAISES.filter(p => cur.members.includes(p.map)).map(p => p.id);
      document.getElementById("alMap").innerHTML = stage(`<g>${fill}</g>${monitorNodes(inMon)}`, "Mapa de la alianza " + cur.n, `<b>${esc(cur.n)}</b>${esc(cur.kind)} · desde ${esc(cur.since)}`);
      document.getElementById("alSide").innerHTML = `<h4>${esc(cur.n)} · ${cur.members.length} países</h4><div class="ev-list">
        <p class="side-x">${esc(cur.x)}</p>
        <div class="mlist">${cur.members.map(es).sort((a, b) => a.localeCompare(b)).map(n => `<span>${esc(n)}</span>`).join("")}</div></div>`;
      bindTips(app, ".al-fill", el => `<b>${esc(es(el.dataset.n))}</b><span class="d">${esc(cur.n)}</span>`);
      bindTips(app, "#alMap .node", el => `<b>${esc(byId[el.dataset.id].name)}</b><span class="go">Clic para abrir la ficha →</span>`, el => location.hash = "p-" + el.dataset.id);
    };
    app.querySelectorAll("#alChips .chip").forEach(b => b.addEventListener("click", () => { cur = A.find(a => a.id === b.dataset.id); draw(); }));
    draw();
  } };

  // ================= INFRAESTRUCTURA =================
  R.infraestructura = { title: "Infraestructura de vigilancia", render() {
    const T = window.INFRA_TYPES, I = window.INFRA, on = new Set(Object.keys(T));
    app.innerHTML = head("Infraestructura de vigilancia", "Lo que sostiene el poder en señales: estaciones de escucha y satelitales, bases en el exterior y los nodos de cables submarinos por donde pasa internet.") + `
      <div class="chips" id="inChips">${Object.entries(T).map(([k, t]) => `<button type="button" class="chip on" data-t="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n} · ${I.filter(x => x.t === k).length}</button>`).join("")}</div>
      <div class="mapbox"><div class="map-split"><div id="inMap"></div><aside class="map-side"><h4 id="inCount"></h4><div class="ev-list" id="inList"></div></aside></div>
      <div class="legend">${Object.values(T).map(t => `<span><i class="dot" style="--c:${t.c}"></i>${t.n}</span>`).join("")}<span class="hint">☞ Tocá un punto para ver la instalación</span></div></div>`;
    const draw = () => {
      const L = I.filter(x => on.has(x.t));
      document.getElementById("inMap").innerHTML = stage(L.map(x => { const [a, b] = pt(x.ll), c = T[x.t].c;
        return `<g class="inf" data-i="${I.indexOf(x)}" tabindex="0"><circle cx="${a}" cy="${b}" r="11" fill="none" stroke="${c}" stroke-opacity=".5"/><circle cx="${a}" cy="${b}" r="6.5" fill="none" stroke="${c}"/><circle cx="${a}" cy="${b}" r="3" fill="${c}"/>
          <text x="${x.lab === "l" ? a - 13 : a + 13}" y="${b + 4 + (x.dy || 0)}" text-anchor="${x.lab === "l" ? "end" : "start"}" fill="${c}" class="inf-l">${esc(x.n.toUpperCase())}</text></g>`; }).join(""), "Mapa de infraestructura de vigilancia", `<b>${L.length} instalaciones</b>Infraestructura conocida`);
      document.getElementById("inCount").textContent = `Instalaciones · ${L.length}`;
      document.getElementById("inList").innerHTML = L.map(x => `<div class="ev-item" id="inf-${I.indexOf(x)}" style="--c:${T[x.t].c}"><i></i><div><span class="d">${esc(T[x.t].n)} · ${esc(x.who)}</span><b>${esc(x.n)}${sampleTag(x.sample)}</b><p>${esc(x.x)}</p><p>${evTag(x.ev)}</p></div></div>`).join("");
      bindTips(app, ".inf", el => { const x = I[el.dataset.i]; return `<b>${esc(x.n)}</b><span class="d">${esc(T[x.t].n)} · ${esc(x.who)}</span>`; },
        el => { const it = document.getElementById("inf-" + el.dataset.i); it.scrollIntoView({ block: "nearest", behavior: "smooth" }); it.classList.add("flash"); setTimeout(() => it.classList.remove("flash"), 1200); });
    };
    app.querySelectorAll("#inChips .chip").forEach(b => b.addEventListener("click", () => { const k = b.dataset.t; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); draw(); }));
    draw();
  } };

  // ================= SOFTWARE ESPÍA =================
  R["software-espia"] = { title: "Mercado del software espía", render() {
    const S = window.SPYWARE, P = Object.fromEntries(S.providers.map(p => [p.id, p]));
    let sel = null;
    app.innerHTML = head("Mercado del software espía", "Las empresas que venden herramientas para intervenir teléfonos y computadoras, y los gobiernos que las compran. Los proveedores son reales; los flujos hacia clientes todavía son de prueba.", true) + `
      <div class="mapbox"><div class="map-split"><div id="swMap"></div><aside class="map-side"><h4>Proveedores · ${S.providers.length}</h4><div class="ev-list" id="swList"></div></aside></div>
      <div class="legend"><span><i class="dot" style="--c:var(--amber)"></i>Proveedor</span><span><i class="sw dash" style="--c:var(--red)"></i>Venta a un gobierno (de prueba)</span><span class="hint">☞ Tocá un proveedor para aislar sus ventas</span></div></div>`;
    const draw = () => {
      const fl = S.flows.map(f => { const a = pt(P[f.p].ll), b = pt(f.ll), dim = sel && f.p !== sel;
        return `<path d="${arc(a, b, .2)}" fill="none" stroke="var(--red)" stroke-width="1.3" stroke-dasharray="5 4" opacity="${dim ? .08 : .85}"/><circle cx="${b[0]}" cy="${b[1]}" r="3.5" fill="var(--red)" opacity="${dim ? .15 : 1}"/>`; }).join("");
      const pv = S.providers.map((p, i) => { const [x, y] = pt(p.ll), dim = sel && p.id !== sel, dy = [-14, 22, 4, 0, 0, 0][i] || 0;
        return `<g class="prov" data-id="${p.id}" tabindex="0" opacity="${dim ? .3 : 1}"><path d="M${x} ${y - 7} L${x + 7} ${y} L${x} ${y + 7} L${x - 7} ${y} Z" fill="var(--amber)"/><circle cx="${x}" cy="${y}" r="12" fill="none" stroke="var(--amber)" stroke-opacity=".5"/>
          <text class="inf-l" x="${x - 14}" y="${y + 4 + dy}" text-anchor="end" fill="var(--amber)">${esc(p.tool.toUpperCase())}</text></g>`; }).join("");
      document.getElementById("swMap").innerHTML = stage(fl + pv, "Mapa del mercado del software espía", `<b>${sel ? esc(P[sel].n) : "Todos los proveedores"}</b>${sel ? esc(P[sel].tool) : "Proveedores y ventas"}`);
      document.getElementById("swList").innerHTML = S.providers.map(p => `<button type="button" class="ev-item sw-item${sel === p.id ? " on" : ""}" data-id="${p.id}" style="--c:var(--amber)"><i></i><div><span class="d">${esc(p.country)} · herramienta: ${esc(p.tool)}</span><b>${esc(p.n)}</b><p>${esc(p.x)}</p></div></button>`).join("");
      const pick = id => { sel = sel === id ? null : id; draw(); };
      bindTips(app, ".prov", el => { const p = P[el.dataset.id]; return `<b>${esc(p.n)} · ${esc(p.tool)}</b><span class="d">${esc(p.country)}</span>`; }, el => pick(el.dataset.id));
      app.querySelectorAll(".sw-item").forEach(b => b.addEventListener("click", () => pick(b.dataset.id)));
    };
    draw();
  } };

  // ================= EXPULSIONES =================
  R.expulsiones = { title: "Expulsiones y canjes", render() {
    const E = window.EXPULSIONES, ys = E.map(e => e.y), years = Array.from({ length: Math.max(...ys) - Math.min(...ys) + 1 }, (_, i) => Math.min(...ys) + i);
    let yr = "all";
    app.innerHTML = head("Expulsiones y canjes", "Diplomáticos expulsados por espionaje y espías canjeados entre países. El grosor de cada línea es la cantidad de personas. Termómetro de la tensión entre bloques.", true) + `
      <div class="chips" id="exChips"><button type="button" class="chip on" data-y="all">Todos los años</button>${years.map(y => `<button type="button" class="chip" data-y="${y}">${y}</button>`).join("")}</div>
      <div class="mapbox"><div class="map-split"><div id="exMap"></div><aside class="map-side"><h4 id="exTot"></h4><div class="ev-list" id="exList"></div></aside></div>
      <div class="legend"><span><i class="sw" style="--c:var(--red)"></i>Expulsión (de quien expulsa hacia el país del expulsado)</span><span><i class="sw dash" style="--c:var(--amber)"></i>Canje</span></div></div>
      <div class="section-title"><h2>Por año</h2><span>Personas expulsadas o canjeadas entre los países del monitor</span></div>
      <div class="bars-box" id="exBars"></div>`;
    const draw = () => {
      app.querySelectorAll("#exChips .chip").forEach(b => b.classList.toggle("on", b.dataset.y === String(yr)));
      const L = E.filter(e => yr === "all" || e.y === +yr);
      const agg = {}; L.forEach(e => { const k = e.a + ">" + e.b + ">" + e.k; agg[k] = (agg[k] || 0) + e.n; });
      const rows = Object.entries(agg).map(([k, n]) => { const [a, b, t] = k.split(">"); return { a, b, t, n }; }).sort((x, y) => y.n - x.n);
      const max = Math.max(1, ...rows.map(r => r.n));
      document.getElementById("exMap").innerHTML = stage(rows.map(r => { const A = pt(byId[r.a].center), B = pt(byId[r.b].center);
        return `<path class="exp" data-k="${r.a}|${r.b}|${r.n}|${r.t}" d="${arc(A, B, .22)}" fill="none" stroke="${r.t === "canje" ? "var(--amber)" : "var(--red)"}" stroke-width="${(1 + r.n / max * 7).toFixed(1)}" stroke-dasharray="${r.t === "canje" ? "6 4" : ""}" opacity=".75"/>`; }).join("") + monitorNodes(), "Mapa de expulsiones", `<b>${yr === "all" ? "2014–2026" : yr}</b>${L.reduce((s, e) => s + e.n, 0)} personas`);
      document.getElementById("exTot").textContent = `Pares de países · ${rows.length}`;
      document.getElementById("exList").innerHTML = rows.map(r => `<div class="ev-item" style="--c:${r.t === "canje" ? "var(--amber)" : "var(--red)"}"><i></i><div><span class="d">${r.t === "canje" ? "Canje" : "Expulsión"}</span><b>${esc(byId[r.a].name)} → ${esc(byId[r.b].name)}</b><p>${r.n} personas</p></div></div>`).join("");
      bindTips(app, ".exp", el => { const [a, b, n, t] = el.dataset.k.split("|"); return `<b>${esc(byId[a].name)} → ${esc(byId[b].name)}</b><span class="d">${n} personas · ${t === "canje" ? "canje" : "expulsión"}</span>`; });
      bindTips(app, "#exMap .node", el => `<b>${esc(byId[el.dataset.id].name)}</b>`, el => location.hash = "p-" + el.dataset.id);
      const by = years.map(y => ({ y, n: E.filter(e => e.y === y).reduce((s, e) => s + e.n, 0) })), bm = Math.max(...by.map(b => b.n));
      document.getElementById("exBars").innerHTML = `<div class="ybars">${by.map(b => `<button type="button" class="ybar${String(yr) === String(b.y) ? " on" : ""}" data-y="${b.y}" aria-label="${b.y}: ${b.n} personas"><span class="n">${b.n}</span><i style="height:${(b.n / bm * 150).toFixed(0)}px"></i><span class="y">${b.y}</span></button>`).join("")}</div>`;
      app.querySelectorAll(".ybar").forEach(b => b.addEventListener("click", () => { yr = String(yr) === b.dataset.y ? "all" : b.dataset.y; draw(); }));
    };
    app.querySelectorAll("#exChips .chip").forEach(b => b.addEventListener("click", () => { yr = b.dataset.y; draw(); }));
    draw();
  } };

  // ================= PERSONAS =================
  R.personas = { title: "Personas", render() {
    const O = window.ORGS_RED, Pp = window.PERSONAS, OI = Object.fromEntries(O.map(o => [o.id, o]));
    const west = O.filter(o => o.side === "o"), east = O.filter(o => o.side === "e");
    const VW = 1200, VH = Math.max(Pp.length * 54 + 60, 520);
    const yOf = (list, i) => 50 + i * ((VH - 100) / Math.max(1, list.length - 1));
    const pos = {}; west.forEach((o, i) => pos[o.id] = [215, yOf(west, i)]); east.forEach((o, i) => pos[o.id] = [1030, yOf(east, i)]);
    Pp.forEach((p, i) => pos["p" + i] = [600, 40 + i * ((VH - 80) / (Pp.length - 1))]);
    const edges = Pp.flatMap((p, i) => [...p.w.map(o => ({ o, i, k: "w" })), ...p.s.map(o => ({ o, i, k: "s" }))]);
    const curve = ([x1, y1], [x2, y2]) => { const mx = (x1 + x2) / 2; return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`; };
    app.innerHTML = head("Personas", "Topos, desertores, agentes dobles, filtradores y directores. A la izquierda los servicios occidentales, a la derecha los del bloque soviético y otros. Verde: para quién trabajaba; rojo: a quién le pasó información.") + `
      <div class="mapbox net"><svg viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Red de personas y servicios">
        <g id="netE">${edges.map(e => `<path class="ne" data-i="${e.i}" d="${curve(pos[e.o], [600, pos["p" + e.i][1]])}" fill="none" stroke="${e.k === "w" ? "var(--ph)" : "var(--red)"}" stroke-width="1.4" stroke-dasharray="${e.k === "s" ? "5 4" : ""}" opacity=".6"/>`).join("")}</g>
        ${O.map(o => { const [x, y] = pos[o.id], L = o.side === "o"; return `<g class="norg"><rect x="${L ? x - 205 : x}" y="${y - 15}" width="${L ? 205 : 150}" height="30" rx="2"/><text x="${L ? x - 10 : x + 10}" y="${y + 5}" text-anchor="${L ? "end" : "start"}">${esc(o.n.toUpperCase())}</text></g>`; }).join("")}
        ${Pp.map((p, i) => { const [x, y] = pos["p" + i]; return `<g class="nper" data-i="${i}" tabindex="0"><rect x="${x - 95}" y="${y - 16}" width="190" height="32" rx="2"/><text x="${x}" y="${y + 5}" text-anchor="middle">${esc(p.n)}</text></g>`; }).join("")}
      </svg><div class="legend"><span><i class="sw" style="--c:var(--ph)"></i>Trabajaba para</span><span><i class="sw dash" style="--c:var(--red)"></i>Espió, desertó o filtró hacia</span><span class="hint">☞ Pasá por una persona para aislar sus vínculos</span></div></div>
      <div class="section-title"><h2>Fichas</h2><span>${Pp.length} personas</span></div>
      <div class="cases">${Pp.map((p, i) => `<article class="case" id="per-${i}" style="--c:var(--ph)"><div class="meta"><span class="ev">${esc(p.tag)}</span><span>${esc(p.y)}</span></div><h4>${esc(p.n)}</h4><p>${esc(p.x)}</p>
        <dl><dt>Trabajaba</dt><dd>${p.w.map(o => esc(OI[o].n)).join(", ")}</dd>${p.s.length ? `<dt>Hacia</dt><dd>${p.s.map(o => esc(OI[o].n)).join(", ")}</dd>` : ""}</dl></article>`).join("")}</div>`;
    const ne = app.querySelectorAll(".ne");
    app.querySelectorAll(".nper").forEach(g => {
      const i = g.dataset.i;
      g.addEventListener("mouseenter", () => ne.forEach(e => e.style.opacity = e.dataset.i === i ? 1 : .06));
      g.addEventListener("mouseleave", () => ne.forEach(e => e.style.opacity = ""));
      const go = () => document.getElementById("per-" + i).scrollIntoView({ behavior: "smooth", block: "center" });
      g.addEventListener("click", go); g.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
    });
  } };

  // ================= PRÁCTICAS POR PAÍS =================
  R.practicas = { title: "Qué hace cada servicio", render() {
    const PR = window.PRACTICAS, NONE = window.PRAC_NONE, groups = [...new Set(PR.map(x => x.g))];
    const anySample = PAISES.some(p => FICHAS[p.id]?.sample);
    const rows = PAISES.map(p => { const f = FICHAS[p.id] || {};
      return `<tr><td class="c"><a href="#p-${p.id}">${esc(p.name)}</a>${f.sample ? ` <span class="muted" style="font-size:11px">(sin cargar)</span>` : ""}</td>${PR.map(m => {
        const v = f.sample ? null : f.practicas?.[m.k]; if (!v) return `<td><span class="cell na" title="Sin cargar"></span></td>`;
        const E = v.ev ? EVI[v.ev] : NONE;
        return `<td><span class="cell${v.ev ? "" : " none"}" style="--c:${E.c}" title="${esc(p.name)} · ${esc(m.n)}: ${esc(E.n)}. ${esc(v.x)}"></span></td>`; }).join("")}</tr>`; }).join("");
    app.innerHTML = head("Qué hace cada servicio", "A quién espía cada país y si hay casos documentados de extorsión, asesinatos, tortura y secuestros, o de armas, inteligencia, tecnología y entrenamiento dados a otros. El color es el nivel de evidencia del caso más firme; pasá el cursor por una celda para leer el resumen y entrá a la ficha para ver la fuente.", false) + `
      <div class="pm-leg">${[1, 2, 3, 4].map(e => `<span style="--c:${EVI[e].c}"><i></i>${EVI[e].n}</span>`).join("")}<span><i style="background:transparent;border:1px dashed #2b4033"></i>Sin casos documentados</span><span><i style="background:transparent;border:1px solid #1a2a20"></i>Sin cargar</span></div>
      <div class="pm-wrap"><table class="pm"><thead>
        <tr><th></th>${groups.map(g => `<th class="g" colspan="${PR.filter(x => x.g === g).length}">${esc(g)}</th>`).join("")}</tr>
        <tr><th></th>${PR.map(m => `<th title="${esc(m.x)}">${esc(m.n)}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody></table></div>
      <p class="muted" style="font-size:13px">"Sin casos documentados" significa que la ficha no encontró casos públicos, no que se pueda descartar la práctica.</p>`;
  } };

  // ================= COMPARAR =================
  R.comparar = { title: "Comparar dos países", render(args) {
    const a = byId[args[0]] ? args[0] : "us", b = byId[args[1]] && args[1] !== a ? args[1] : (a === "cn" ? "us" : "cn");
    const A = byId[a], B = byId[b], FA = FICHAS[a], FB = FICHAS[b];
    const opt = sel => PAISES.map(p => `<option value="${p.id}"${p.id === sel ? " selected" : ""}>${esc(p.name)}</option>`).join("");
    const rel = window.RELACIONES.find(r => (r.a === a && r.b === b) || (r.a === b && r.b === a));
    const allis = window.ALIANZAS.filter(x => x.members.includes(A.map) && x.members.includes(B.map));
    const cnt = (f, ev) => f.cases.filter(c => c.ev === ev).length;
    const ups = f => f.rights.filter(r => r.dir === "amplia").length;
    const row = (l, va, vb) => `<div class="cmp-row"><span class="va">${va}</span><span class="l">${l}</span><span class="vb">${vb}</span></div>`;
    app.innerHTML = head("Comparar dos países", "Elegí dos países y se ponen cara a cara: poder por rubro, organismos, derechos civiles, casos y la relación entre ambos.", FA.sample || FB.sample) + `
      <div class="cmp-pick"><label>País A<select id="cA">${opt(a)}</select></label><button type="button" class="btn" id="cSwap" aria-label="Intercambiar">⇄</button><label>País B<select id="cB">${opt(b)}</select></label></div>
      <div class="vs-head"><a href="#p-${a}">${esc(A.name)}</a><span>vs</span><a href="#p-${b}">${esc(B.name)}</a></div>
      <div class="vs-rel">${rel ? `Relación entre sus servicios: <b style="color:${RT[rel.t].c}">${RT[rel.t].n}</b>` : "Sin relación clasificada entre ambos"}${allis.length ? ` · Comparten: ${allis.map(x => esc(x.n)).join(", ")}` : ""}</div>
      <h3 class="sub">Poder por rubro</h3>
      <div class="mirror">${RUBROS.map(r => { const va = FA.power[r.k], vb = FB.power[r.k];
        return `<div class="mr"><div class="mbar l"><i style="width:${va * 20}%" class="${va > vb ? "win" : ""}"></i><span>${va}</span></div><div class="ml">${esc(r.n)}<small>${r.s}</small></div><div class="mbar r"><i style="width:${vb * 20}%" class="${vb > va ? "win" : ""}"></i><span>${vb}</span></div></div>`; }).join("")}</div>
      <h3 class="sub">Datos</h3>
      <div class="cmp-rows">
        ${row("Poder total", ME.powerSum(FA) + "/30", ME.powerSum(FB) + "/30")}
        ${row("Organismos", A.agencies.filter(x => x.g !== "j").length, B.agencies.filter(x => x.g !== "j").length)}
        ${row("Órganos de control", A.agencies.filter(x => x.g === "j").length, B.agencies.filter(x => x.g === "j").length)}
        ${row("Hitos que ampliaron la vigilancia", ups(FA), ups(FB))}
        ${row("Hitos que agregaron controles", FA.rights.length - ups(FA), FB.rights.length - ups(FB))}
        ${[1, 2, 3, 4].map(ev => row(`Casos: ${EVI[ev].n.toLowerCase()}`, cnt(FA, ev), cnt(FB, ev))).join("")}
        ${row("Alianzas", window.ALIANZAS.filter(x => x.members.includes(A.map)).map(x => x.n).join(", ") || "—", window.ALIANZAS.filter(x => x.members.includes(B.map)).map(x => x.n).join(", ") || "—")}
      </div>`;
    const go = () => location.hash = `comparar/${app.querySelector("#cA").value}/${app.querySelector("#cB").value}`;
    app.querySelector("#cA").addEventListener("change", go); app.querySelector("#cB").addEventListener("change", go);
    app.querySelector("#cSwap").addEventListener("click", () => location.hash = `comparar/${b}/${a}`);
  } };

  // ================= CRONOLOGÍA GLOBAL =================
  R.cronologia = { title: "Cronología global", render() {
    const y0 = 1945, y1 = 2027, LW = 150, VW = 1200, lane = 26, top = 84;
    const x = y => LW + (y - y0) / (y1 - y0) * (VW - LW - 16);
    const eras = [[1947, 1991, "Guerra Fría"], [1991, 2001, "Posguerra Fría"], [2001, 2013, "11-S y después"], [2013, 2027, "Era digital"]];
    const hitos = [[1947, "Se crea la CIA"], [1962, "Crisis de los misiles"], [1989, "Cae el Muro de Berlín"], [2001, "11-S"], [2013, "Snowden"], [2022, "Invasión rusa a Ucrania"]];
    const VH = top + PAISES.length * lane + 30;
    const evs = PAISES.flatMap((p, i) => (FICHAS[p.id]?.events || []).map(e => ({ ...e, p, i })));
    app.innerHTML = head("Cronología global", "Un carril por país sobre la misma línea de tiempo, para ver qué hacía cada servicio en el mismo momento. Los hitos de arriba son reales; los puntos de cada país todavía son de prueba.", true) + `
      <div class="chips" id="crChips">${Object.entries(EV).map(([k, t]) => `<button type="button" class="chip on" data-t="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n}</button>`).join("")}</div>
      <div class="mapbox lanes-box"><svg viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Cronología por país" style="min-width:900px">
        ${eras.map(([a, b, n], k) => `<rect x="${x(a)}" y="0" width="${x(b) - x(a)}" height="${VH}" fill="${k % 2 ? "rgba(106,245,154,.025)" : "rgba(106,245,154,.055)"}"/><text class="era-l" x="${x(a) + 6}" y="16">${esc(n.toUpperCase())}</text>`).join("")}
        ${hitos.map(([y, n], k) => { const last = k === hitos.length - 1; return `<line x1="${x(y)}" x2="${x(y)}" y1="24" y2="${VH - 20}" stroke="var(--orange)" stroke-opacity=".45" stroke-dasharray="2 3"/><text class="hito-l" x="${x(y) + (last ? -4 : 4)}" y="${38 + (k % 3) * 14}" text-anchor="${last ? "end" : "start"}">${y} · ${esc(n)}</text>`; }).join("")}
        ${PAISES.map((p, i) => `<line x1="${LW}" x2="${VW - 16}" y1="${top + i * lane + lane / 2}" y2="${top + i * lane + lane / 2}" stroke="var(--line)"/><a href="#p-${p.id}"><text class="lane-l" x="${LW - 10}" y="${top + i * lane + lane / 2 + 4}" text-anchor="end">${esc(p.short)}</text></a>`).join("")}
        ${[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].map(y => `<text class="tick-l" x="${x(y)}" y="${VH - 6}" text-anchor="middle">${y}</text>`).join("")}
        <g id="crDots"></g></svg></div>`;
    const on = new Set(Object.keys(EV));
    const draw = () => {
      app.querySelector("#crDots").innerHTML = evs.filter(e => on.has(e.t)).map((e, k) => { const yy = +e.d.slice(0, 4) + (+e.d.slice(5, 7) - 1) / 12;
        return `<circle class="crd" data-k="${evs.indexOf(e)}" cx="${x(yy).toFixed(1)}" cy="${top + e.i * lane + lane / 2}" r="4.2" fill="${EV[e.t].c}"/>`; }).join("");
      bindTips(app, ".crd", el => { const e = evs[el.dataset.k]; return `<b>${esc(e.h)}</b><span class="d">${esc(e.p.name)} · ${fmt(e.d)} · ${esc(EV[e.t].n)}</span>`; }, el => location.hash = "p-" + evs[el.dataset.k].p.id);
    };
    app.querySelectorAll("#crChips .chip").forEach(b => b.addEventListener("click", () => { const k = b.dataset.t; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); draw(); }));
    draw();
  } };

  // ================= ARCHIVO =================
  R.archivo = { title: "Archivo desclasificado", render() {
    const A = window.ARCHIVO, cs = [...new Set(A.docs.map(d => d.c))];
    app.innerHTML = head("Archivo desclasificado", "Los documentos oficiales liberados que sostienen los casos marcados como demostrados. Primero, los grandes fondos donde buscar; después, los documentos citados en el sitio.") + `
      <div class="section-title"><h2>Fondos documentales</h2><span>${A.fondos.length} archivos</span></div>
      <div class="cards">${A.fondos.map(f => `<a class="card" href="${esc(f.u)}" target="_blank" rel="noopener"><div class="top"><span>${esc(f.c)}</span><span>Externo ↗</span></div><h3 style="font-size:24px">${esc(f.n)}</h3><div class="ag" style="font-family:var(--f-ui);font-size:13.5px">${esc(f.x)}</div></a>`).join("")}</div>
      <div class="section-title"><h2>Documentos citados</h2><span>${A.docs.length} documentos${sampleTag(true)}</span></div>
      <div class="chips" id="arChips"><button type="button" class="chip on" data-c="all">Todos</button>${cs.map(c => `<button type="button" class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">Año</th><th scope="col">Documento</th><th scope="col">País</th><th scope="col">Tipo</th><th scope="col">Qué dice</th></tr></thead><tbody id="arBody"></tbody></table></div>`;
    const draw = c => { app.querySelector("#arBody").innerHTML = A.docs.filter(d => c === "all" || d.c === c).map(d => `<tr><td class="mono">${esc(d.d)}</td><td><a href="${esc(d.u)}">${esc(d.t)}</a></td><td>${esc(d.c)}</td><td>${esc(d.k)}</td><td>${esc(d.x)}</td></tr>`).join("");
      app.querySelectorAll("#arChips .chip").forEach(b => b.classList.toggle("on", b.dataset.c === c)); };
    app.querySelectorAll("#arChips .chip").forEach(b => b.addEventListener("click", () => draw(b.dataset.c)));
    draw("all");
  } };

  // ================= CÓMO FUNCIONA =================
  R["como-funciona"] = { title: "Cómo funciona", render() {
    const C = window.CICLO, n = C.length, cx = 250, cy = 250, rr = 170;
    const P = C.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]; });
    const arrow = i => { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .3, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .3;
      return `<path d="M${cx + rr * Math.cos(a0)} ${cy + rr * Math.sin(a0)} A${rr} ${rr} 0 0 1 ${cx + rr * Math.cos(a1)} ${cy + rr * Math.sin(a1)}" fill="none" stroke="var(--ph-lo)" stroke-width="2" marker-end="url(#ah)"/>`; };
    app.innerHTML = head("Cómo funciona", "Una entrada al tema para quien no lo conoce: el ciclo de inteligencia, los tipos de inteligencia y el vocabulario básico.") + `
      <div class="section-title"><h2>El ciclo de inteligencia</h2><span>Cómo una pregunta del gobierno se convierte en un informe</span></div>
      <div class="cycle"><svg viewBox="0 0 500 500" role="img" aria-label="Ciclo de inteligencia en seis pasos">
        <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ph-lo)"/></marker></defs>
        <circle cx="${cx}" cy="${cy}" r="${rr}" fill="none" stroke="var(--line)" stroke-dasharray="2 4"/>
        ${C.map((_, i) => arrow(i)).join("")}
        <g class="brand-mark" transform="translate(${cx - 40} ${cy - 40}) scale(2.35)"><circle cx="17" cy="17" r="13"/><path d="M17 0v6M17 28v6M0 17h6M28 17h6"/><path d="M6.5 17 Q17 8 27.5 17 Q17 26 6.5 17 Z"/><circle cx="17" cy="17" r="3.6"/><circle class="pupil" cx="17" cy="17" r="1.4"/></g>
        ${C.map((c, i) => `<g class="cyc" data-i="${i}" tabindex="0"><circle cx="${P[i][0]}" cy="${P[i][1]}" r="30"/><text x="${P[i][0]}" y="${P[i][1] + 8}" text-anchor="middle">${i + 1}</text></g>`).join("")}
      </svg><ol class="cyc-list">${C.map((c, i) => `<li id="cyc-${i}"><b>${esc(c.n)}</b><span>${esc(c.x)}</span></li>`).join("")}</ol></div>
      <div class="section-title"><h2>Tipos de inteligencia</h2><span>Según de dónde sale la información</span></div>
      <div class="prio">${window.INTS.map(t => `<div><span>${t.s}</span><b style="display:inline">${esc(t.n)}</b><p>${esc(t.x)}</p></div>`).join("")}</div>
      <div class="section-title"><h2>Glosario</h2><span>${window.GLOSARIO.length} términos</span></div>
      <label class="search"><span>Buscar</span><input type="search" id="glQ" placeholder="Agente, topo, kompromat…"></label>
      <dl class="glos" id="glList"></dl>`;
    const hl = i => app.querySelectorAll(".cyc-list li").forEach((li, k) => li.classList.toggle("on", k === +i));
    app.querySelectorAll(".cyc").forEach(g => { g.addEventListener("mouseenter", () => hl(g.dataset.i)); g.addEventListener("focus", () => hl(g.dataset.i)); g.addEventListener("click", () => hl(g.dataset.i)); });
    const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    const draw = q => { app.querySelector("#glList").innerHTML = window.GLOSARIO.filter(([t, d]) => !q || norm(t + " " + d).includes(norm(q))).map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("") || `<p class="muted">Sin resultados.</p>`; };
    app.querySelector("#glQ").addEventListener("input", e => draw(e.target.value));
    draw("");
  } };
})();
