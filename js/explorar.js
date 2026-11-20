/* Monitor de Espionaje — secciones de "Explorar" y "Cómo funciona".
   Usa las utilidades que expone js/app.js en window.ME. */
(function () {
  "use strict";
  const ME = window.ME, R = ME.ROUTES;
  const { esc, fmt, sampleTag, showTip, moveTip, hideTip, W, H, BASE, path, pt, arc, FEAT, rings, nodeLabel, byId, app } = ME;
  const PAISES = window.PAISES, FICHAS = window.FICHAS, EV = window.EV_TYPES, EVI = window.EVIDENCE, RT = window.REL_TYPES, RUBROS = window.RUBROS;

  const es = n => window.esName(n);

  ME.EXPLORE = [
    { id: "poder", g: "El mapa del poder", k: "Esquema", n: "Quién manda", x: "La jerarquía real entre servicios: quién decide solo, quién depende de quién y quién manda adentro." },
    { id: "bloques", g: "El mapa del poder", k: "Mapa", n: "Bloques de inteligencia", x: "El mundo dividido en cinco: occidental, euroasiático, autónomos, neutrales y zonas abiertas." },
    { id: "alianzas", g: "El mapa del poder", k: "Mapa", n: "Alianzas de inteligencia", x: "Cinco Ojos, Catorce Ojos, Club de Berna, OTAN y Shanghái." },
    { id: "infraestructura", g: "Operaciones", k: "Mapa", n: "Infraestructura de vigilancia", x: "Estaciones de escucha, satélites, bases y cables." },
    { id: "software-espia", g: "Operaciones", k: "Mapa", n: "Mercado del software espía", x: "Proveedores, herramientas y a quién le venden." },
    { id: "expulsiones", g: "Operaciones", k: "Mapa", n: "Expulsiones y canjes", x: "Diplomáticos expulsados y espías canjeados, año por año." },
    { id: "personas", g: "Personas y secretos", k: "Red", n: "Personas", x: "Topos, desertores, agentes dobles y directores." },
    { id: "practicas", g: "El mapa del poder", k: "Tabla", n: "Qué hace cada servicio", x: "A quién espían y si hay casos de extorsión, asesinatos, tortura, armas o asistencia." },
    { id: "asesinatos", g: "Operaciones", k: "Mapa", n: "Asesinatos y secuestros", x: "Operaciones con muertos o capturas atribuidas a cada servicio, con su nivel de evidencia." },
    { id: "filtraciones", g: "Personas y secretos", k: "Tabla", n: "Filtraciones y secretos", x: "Filtraciones, denunciantes, robos de información, ocultamientos y desinformación." },
    { id: "control", g: "El mapa del poder", k: "Gráfico", n: "Poder y control", x: "La capacidad de cada servicio frente a si sus abusos tuvieron consecuencias." },
    { id: "mitos", g: "Personas y secretos", k: "Lista", n: "Mitos y denuncias sin pruebas", x: "Teorías conspirativas, de dónde salieron y qué las desmiente; denuncias que esperan pruebas." },
    { id: "jefes", g: "Personas y secretos", k: "Línea de tiempo", n: "Espías que llegaron al poder", x: "Jefes de inteligencia que después gobernaron o mandaron desde las sombras." },
    { id: "comparar", g: "Herramientas y archivo", k: "Herramienta", n: "Comparar dos países", x: "Poder, leyes, casos y relación, cara a cara." },
    { id: "cronologia", g: "Herramientas y archivo", k: "Línea de tiempo", n: "Cronología global", x: "Un carril por país en la misma línea de tiempo." },
    { id: "archivo", g: "Herramientas y archivo", k: "Documentos", n: "Archivo desclasificado", x: "Fondos documentales y documentos de cada caso." }
  ];
  const menu2 = document.getElementById("navMenu2");
  const GORD = ["El mapa del poder", "Operaciones", "Personas y secretos", "Herramientas y archivo"];
  ME.EXPLORE.sort((a, b) => GORD.indexOf(a.g) - GORD.indexOf(b.g));
  if (menu2) menu2.innerHTML = GORD.map(g => `<h4>${esc(g)}</h4>` + ME.EXPLORE.filter(e => e.g === g).map(e => `<a href="#${e.id}">${esc(e.n)}<span>${esc(e.k)}</span></a>`).join("")).join("");

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

  // ================= BUSCADOR =================
  let IDX = null;
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function buildIndex() {
    const L = [], add = (o) => { o.t = norm([o.h, o.x, o.extra].join(" ")); L.push(o); };
    const SEC = { events: ["mapa", "Hecho"], cases: ["casos", "Caso"], failures: ["fallas", "Acierto o falla"], insiders: ["gente", "Persona"], leaks: ["filtraciones", "Filtración"], fondos: ["dinero", "Dinero"] };
    PAISES.forEach(p => { const f = FICHAS[p.id]; if (!f) return;
      add({ k: "País", href: `#p-${p.id}`, h: p.name, x: f.summary[0], d: "", extra: p.agencies.map(a => a.code + " " + a.name).join(" "), pid: p.id });
      p.agencies.forEach(a => add({ k: "Organismo", href: `#p-${p.id}/organigrama`, h: `${a.code} · ${a.name}`, x: (f.bodies[a.code] || {}).how || "", d: "", pid: p.id }));
      Object.entries(SEC).forEach(([key, [sec, k]]) => (f[key] || []).forEach((x, i) => add({ k, href: key === "events" ? `#p-${p.id}/mapa` : `#p-${p.id}/${sec}/${i}`, h: x.n ? `${x.n}: ${x.h}` : x.h, x: x.x, d: x.d, extra: x.who || "", pid: p.id })));
      (f.proxies || []).forEach(x => add({ k: "Organización proxy", href: `#p-${p.id}/proxies`, h: x.n, x: x.x, d: x.d, pid: p.id }));
      (f.timeline || []).forEach(x => add({ k: "Cronología", href: `#p-${p.id}/cronologia`, h: x.h, x: x.x, d: x.d, pid: p.id }));
    });
    (window.PERSONAS || []).forEach(x => add({ k: "Persona", href: "#personas", h: x.n, x: x.x || x.h || "", d: x.d || "" }));
    (window.JEFES || []).forEach(x => add({ k: "Espía que llegó al poder", href: "#jefes", h: x.n, x: x.x, d: x.d, pid: x.c }));
    (window.GLOSARIO || []).forEach(g => add({ k: "Glosario", href: "#como-funciona", h: g[0], x: g[1], d: "" }));
    (window.ALERTS || []).forEach(a => add({ k: "Alerta", href: `#p-${a.target}`, h: a.title, x: a.text, d: a.date, pid: a.target }));
    return L;
  }
  R.buscar = { title: "Buscar", render(args, root) { const app = root || ME.app;
    IDX = IDX || buildIndex();
    const q0 = decodeURIComponent(args.join("/") || "");
    app.innerHTML = head("Buscar", `Casos, hechos, personas, organismos y términos de las ${PAISES.length} fichas y de Explorar. Probá con un nombre, una sigla o un tema: Nisman, Pegasus, Mossad, Nord Stream.`) + `
      <form class="search-big" id="sForm" role="search"><label for="sQ" class="sr">Buscar en el monitor</label><input type="search" id="sQ" value="${esc(q0)}" placeholder="Buscar…" autocomplete="off"><button type="submit" class="btn primary">Buscar</button></form>
      <div class="chips" id="sKinds"></div><div id="sRes" class="s-res"></div>`;
    const inp = document.getElementById("sQ"); let kind = "all";
    const run = () => {
      const q = norm(inp.value.trim()), words = q.split(/\s+/).filter(w => w.length > 1);
      const box = document.getElementById("sRes"), kb = document.getElementById("sKinds");
      if (!words.length) { box.innerHTML = `<p class="muted">Escribí al menos dos letras.</p>`; kb.innerHTML = ""; return; }
      const hits = IDX.filter(o => words.every(w => o.t.includes(w))).map(o => ({ o, s: words.reduce((a, w) => a + (norm(o.h).includes(w) ? 3 : 1), 0) })).sort((a, b) => b.s - a.s || String(b.o.d).localeCompare(String(a.o.d)));
      const kinds = [...new Set(hits.map(h => h.o.k))];
      kb.innerHTML = `<button type="button" class="chip${kind === "all" ? " on" : ""}" data-k="all">Todo · ${hits.length}</button>` + kinds.map(k => `<button type="button" class="chip${kind === k ? " on" : ""}" data-k="${esc(k)}">${esc(k)} · ${hits.filter(h => h.o.k === k).length}</button>`).join("");
      kb.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { kind = b.dataset.k; run(); }));
      const V = hits.filter(h => kind === "all" || h.o.k === kind).slice(0, 120);
      const mark = t => { let r = esc(t); words.forEach(w => { r = r.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").split("").map(ch => ({ a: "[aáà]", e: "[eéè]", i: "[iíì]", o: "[oóò]", u: "[uúüù]", n: "[nñ]" }[ch] || ch)).join("") + ")", "gi"), "<mark>$1</mark>"); }); return r; };
      box.innerHTML = V.length ? V.map(({ o }) => `<a class="s-it" href="${o.href}"><span class="d">${esc(o.k)}${o.pid && byId[o.pid] ? " · " + esc(byId[o.pid].name) : ""}${o.d ? " · " + esc(fmt(o.d)) : ""}</span><b>${mark(o.h)}</b><p>${mark(String(o.x).slice(0, 260))}</p></a>`).join("") + (hits.length > 120 ? `<p class="muted">Se muestran 120 de ${hits.length}. Agregá otra palabra para afinar.</p>` : "")
        : `<p class="muted">Sin resultados para “${esc(inp.value)}”.</p>`;
    };
    document.getElementById("sForm").addEventListener("submit", e => { e.preventDefault(); history.replaceState(null, "", "#buscar/" + encodeURIComponent(inp.value.trim())); kind = "all"; run(); });
    let t; inp.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { kind = "all"; run(); }, 180); });
    run(); if (!root) inp.focus();
  } };

  // ================= QUIÉN MANDA =================
  R.poder = { title: "Quién manda", render(args, root) { const app = root || ME.app;
    const P = window.PODER, B = window.BLOQUES, BD = Object.fromEntries(B.defs.map(d => [d.id, d]));
    const bloc = id => { const m = B.paises.find(x => x[0] === byId[id].map); return m ? m[1] : "neu"; };
    const cap = id => { const p = FICHAS[id]?.power || {}; return Object.values(p).reduce((a, b) => a + b, 0); };
    const order = ["occ", "aut", "neu", "abi", "eur"], VW = 1000, rowY = { 1: 80, 2: 215, 3: 370, 4: 530 }, lblY = { 1: 22, 2: 158, 3: 300, 4: 462 }, VH = 600;
    const pos = {};
    [1, 2, 3, 4].forEach(n => {
      const ids = Object.keys(P.paises).filter(id => P.paises[id].n === n && byId[id])
        .sort((a, b) => order.indexOf(bloc(a)) - order.indexOf(bloc(b)) || cap(b) - cap(a));
      const rows = n >= 3 ? 2 : 1, per = Math.ceil(ids.length / rows);
      ids.forEach((id, i) => { const r = Math.floor(i / per), k = i % per, cnt = Math.min(per, ids.length - r * per);
        pos[id] = [130 + (cnt === 1 ? 420 : k * (840 / Math.max(cnt - 1, 1))), rowY[n] + (rows > 1 ? (r ? 30 : -30) : 0)]; });
    });
    const rad = id => 5 + cap(id) * 0.75;
    let cur = P.paises[args[0]] ? args[0] : null, showRel = true, pxMode = "hoy", curPx = null;
    const PX = {};
    Object.keys(P.paises).forEach(id => (FICHAS[id]?.proxies || []).filter(x => x.graf).forEach(x => {
      const o = PX[x.id] || (PX[x.id] = { id: x.id, s: x.s, k: x.k, hoy: false, sp: [] });
      o.hoy = o.hoy || !!x.hoy; o.sp.push({ c: id, rol: x.rol, x: x.x, d: x.d });
    }));
    const RC = { patrocina: "var(--red)", usa: "#4fa3ff", doble: "#c084fc" };
    app.innerHTML = head("Quién manda", "Una lectura editorial de la jerarquía real entre servicios de inteligencia. La fila indica la autonomía: si el servicio decide solo o si, en lo estratégico, sigue a otro. El tamaño del punto es su capacidad, según el puntaje de cada ficha. Las líneas grises marcan de quién depende cada uno.") + `
      <div class="chips" id="pwChips"><button type="button" class="chip on" data-r="1">Alianzas y enfrentamientos</button><button type="button" class="chip" data-r="0">Sólo dependencias</button><span class="chip-sep" aria-hidden="true"></span><button type="button" class="chip" data-p="hoy">Proxies activos</button><button type="button" class="chip" data-p="todos">Proxies activos e históricos</button><button type="button" class="chip" data-p="no">Sin proxies</button></div>
      <div class="pw-list" aria-label="Quién manda, en lista">${P.niveles.map(nv => `<div class="pw-lv"><h3>${nv.n} · ${esc(nv.h)}</h3><p class="muted">${esc(nv.x)}</p>${Object.entries(P.paises).filter(([, v]) => v.n === nv.n).sort((a, b) => cap(b[0]) - cap(a[0])).map(([id, v]) => `<a class="pw-it" href="#p-${id}"><b>${esc(byId[id].name)}</b><span class="cap">${cap(id)}/30</span>${v.dep ? `<span class="dep">depende de ${v.dep.map(d => esc(byId[d].name)).join(" y ")}</span>` : ""}<p>${esc(v.x)}</p></a>`).join("")}</div>`).join("")}
        <div class="pw-lv"><h3>5 · Proxies</h3><p class="muted">Organizaciones que un servicio creó, financió o usó. Sólo las más importantes.</p>${Object.values(PX).sort((a, b) => b.hoy - a.hoy).map(o => `<div class="pw-it"><b>${esc(o.s)}</b>${o.hoy ? `<span class="cap">activo</span>` : ""}<span class="dep">${o.sp.map(x => esc(byId[x.c].name) + " (" + esc(window.PROXY_ROLES[x.rol].n.toLowerCase()) + ")").join(", ")}</span></div>`).join("")}</div></div>
      <div class="mapbox pw-graph"><div class="map-split"><div class="pw-stage"><svg id="pwSvg" viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Esquema de jerarquía entre servicios"></svg></div><aside class="map-side" id="pwSide"></aside></div>
      <div class="legend">${B.defs.filter(d => d.id !== "abi").map(d => `<span><i class="dot" style="--c:${d.c}"></i>${esc(d.n)}</span>`).join("")}<span><i class="sw" style="--c:var(--muted)"></i>Depende de</span><span><i class="sw" style="--c:var(--ph)"></i>Cooperación</span><span><i class="sw dash" style="--c:var(--red)"></i>Enfrentamiento</span><span><i class="pw-sq"></i>Proxy (nivel 5): el color del rombo es el tipo; el de la línea, el papel (rojo lo financia o arma · azul lo usa · violeta doble juego). Rombo hueco = sólo histórico</span></div></div>`;
    const draw = () => {
      app.querySelectorAll("#pwChips .chip[data-r]").forEach(b => b.classList.toggle("on", +b.dataset.r === +showRel));
      app.querySelectorAll("#pwChips .chip[data-p]").forEach(b => b.classList.toggle("on", b.dataset.p === pxMode));
      const pxs = pxMode === "no" ? [] : Object.values(PX).filter(o => pxMode === "todos" || o.hoy)
        .sort((a, b) => (pos[a.sp[0].c]?.[0] || 0) - (pos[b.sp[0].c]?.[0] || 0));
      const perRow = 11, pxRows = Math.ceil(pxs.length / perRow), H5 = 640;
      const ppos = {}; pxs.forEach((o, i) => { const r = Math.floor(i / perRow), k = i % perRow, cnt = Math.min(perRow, pxs.length - r * perRow);
        ppos[o.id] = [90 + (cnt === 1 ? 430 : k * (820 / Math.max(cnt - 1, 1))) + (r % 2 ? 20 : 0), H5 + 40 + r * 62]; });
      const svgH = pxs.length ? H5 + 40 + pxRows * 62 + 10 : VH;
      document.getElementById("pwSvg").setAttribute("viewBox", `0 0 ${VW} ${svgH}`);
      const pxOn = o => !cur && !curPx || curPx === o.id || o.sp.some(x => x.c === cur);
      const near = id => curPx ? PX[curPx].sp.some(x => x.c === id) : !cur || id === cur || (P.paises[cur].dep || []).includes(id) || (P.paises[id].dep || []).includes(cur) || (window.RELACIONES || []).some(r => (r.a === cur && r.b === id) || (r.b === cur && r.a === id));
      const rows = P.niveles.map(l => `<g class="pw-row">${l.n > 1 ? `<line x1="20" x2="${VW - 20}" y1="${lblY[l.n] - 16}" y2="${lblY[l.n] - 16}"/>` : ""}<text x="20" y="${lblY[l.n]}" class="pw-lv">${l.n} · ${esc(l.h).toUpperCase()}</text></g>`).join("");
      const deps = Object.entries(P.paises).flatMap(([id, v]) => (v.dep || []).filter(d => pos[d] && pos[id]).map(d => { const [x1, y1] = pos[id], [x2, y2] = pos[d], on = !cur || cur === id || cur === d;
        return `<path class="pw-dep" d="M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}" opacity="${on ? .55 : .06}"/>`; })).join("");
      const rels = showRel ? (window.RELACIONES || []).filter(r => r.t !== "amb" && pos[r.a] && pos[r.b] && (P.paises[r.a].n <= 2 && P.paises[r.b].n <= 2 || cur && (r.a === cur || r.b === cur))).map(r => { const [x1, y1] = pos[r.a], [x2, y2] = pos[r.b], on = !cur || r.a === cur || r.b === cur, mx = (x1 + x2) / 2, my = Math.min(y1, y2) - 40 - Math.abs(x1 - x2) * .08;
        return `<path class="pw-rel ${r.t}" d="M${x1},${y1} Q${mx},${my} ${x2},${y2}" opacity="${on ? .8 : .05}"/>`; }).join("") : "";
      const nodes = Object.keys(pos).map(id => { const [x, y] = pos[id], c = BD[bloc(id)]?.c || "#999", r = rad(id), dim = !near(id);
        return `<g class="pw-n${cur === id ? " on" : ""}" data-id="${id}" tabindex="0" role="button" aria-label="${esc(byId[id].name)}" opacity="${dim ? .18 : 1}"><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".85" stroke="${c}"/><text x="${x}" y="${y + r + 12}" text-anchor="middle"${r < 12 ? ` class="sm"` : ""}>${esc(byId[id].name)}</text></g>`; }).join("");
      const pxRow = pxs.length ? `<g class="pw-row"><line x1="20" x2="${VW - 20}" y1="${H5 - 16}" y2="${H5 - 16}"/><text x="20" y="${H5}" class="pw-lv">5 · PROXIES Y REDES NO ESTATALES</text></g>` : "";
      const pxLines = pxs.flatMap(o => o.sp.filter(x => pos[x.c]).map(x => { const [x1, y1] = ppos[o.id], [x2, y2] = pos[x.c];
        return `<path class="pw-px" d="M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2 + 40} ${x2},${y2}" stroke="${RC[x.rol]}" opacity="${pxOn(o) ? (cur || curPx ? .85 : .35) : .04}"/>`; })).join("");
      const pxNodes = pxs.map((o, i) => { const [x, y] = ppos[o.id], c = window.PROXY_TIPOS[o.k].c, on = pxOn(o);
        return `<g class="pw-p${curPx === o.id ? " on" : ""}" data-px="${o.id}" tabindex="0" role="button" aria-label="${esc(o.s)}" opacity="${on ? 1 : .18}"><rect x="${x - 6}" y="${y - 6}" width="12" height="12" transform="rotate(45 ${x} ${y})" fill="${c}"${o.hoy ? "" : ` fill-opacity=".35" stroke="${c}"`}/><text x="${x}" y="${y + (i % 2 ? -12 : 20)}" text-anchor="middle">${esc(o.s)}</text></g>`; }).join("");
      document.getElementById("pwSvg").innerHTML = rows + pxRow + deps + rels + pxLines + nodes + pxNodes;
      const side = document.getElementById("pwSide");
      if (curPx) { const o = PX[curPx];
        side.innerHTML = `<h4>${esc(o.s)} · ${esc(window.PROXY_TIPOS[o.k].n)}</h4><div class="ev-list">${o.sp.map(x => `<p class="side-x"><b>${esc(byId[x.c].name)} · ${esc(window.PROXY_ROLES[x.rol].n)} · ${esc(x.d)}.</b> ${esc(x.x)} <a href="#p-${x.c}">Ficha →</a></p>`).join("")}<p class="side-x muted">${o.hoy ? "Sigue activo." : "Sólo histórico."}</p></div>`; }
      else if (!cur) side.innerHTML = `<h4>Cómo leerlo</h4><div class="ev-list">${P.niveles.map(l => `<p class="side-x"><b>${l.n} · ${esc(l.h)}.</b> ${esc(l.x)}</p>`).join("")}<p class="side-x"><b>5 · Proxies.</b> Grupos armados, carteles, empresas, ONG e instituciones que un servicio creó, financió o usó. Sólo están los más importantes; el resto figura en cada ficha.</p><p class="side-x">Dos servicios en la misma fila tienen la misma jerarquía aunque sean rivales: el Mossad no le responde a la CIA, aunque cooperen. Tocá un punto para ver de quién depende, con quién se alía y quién manda adentro.</p></div>`;
      else { const v = P.paises[cur], deps2 = (v.dep || []).map(d => byId[d].name), subs = Object.keys(P.paises).filter(k => (P.paises[k].dep || []).includes(cur)).map(k => byId[k].name), I = P.internos[cur];
        side.innerHTML = `<h4>${esc(byId[cur].name)} · nivel ${v.n}</h4><div class="ev-list"><p class="side-x">${esc(v.x)}</p>
          ${deps2.length ? `<p class="side-x"><b>Depende de:</b> ${esc(deps2.join(", "))}</p>` : ""}${subs.length ? `<p class="side-x"><b>Dependen de él:</b> ${esc(subs.join(", "))}</p>` : ""}
          ${I ? `<h5 class="bl-g">Quién manda adentro</h5><ol class="pw-int">${I.map(i => `<li><b>${esc(i.h)}</b><span>${esc(i.x)}</span></li>`).join("")}</ol>` : ""}
          <p class="side-x"><a href="#p-${cur}">Abrir la ficha →</a></p></div>`; }
      bindTips(app, ".pw-n", el => { const id = el.dataset.id, v = P.paises[id]; return `<b>${esc(byId[id].name)}</b><span class="d">Nivel ${v.n} · ${esc(P.niveles[v.n - 1].h)} · capacidad ${cap(id)}/30</span><span class="d">${esc(v.x)}</span>`; }, el => { curPx = null; cur = cur === el.dataset.id ? null : el.dataset.id; draw(); });
      bindTips(app, ".pw-p", el => { const o = PX[el.dataset.px]; return `<b>${esc(o.s)}</b><span class="d">${esc(window.PROXY_TIPOS[o.k].n)} · ${o.hoy ? "activo" : "histórico"}</span><span class="d">${esc(o.sp.map(x => byId[x.c].name + ": " + window.PROXY_ROLES[x.rol].n.toLowerCase()).join(" · "))}</span>`; }, el => { cur = null; curPx = curPx === el.dataset.px ? null : el.dataset.px; draw(); });
    };
    app.querySelectorAll("#pwChips .chip").forEach(b => b.addEventListener("click", () => { if (b.dataset.p) pxMode = b.dataset.p; else showRel = b.dataset.r === "1"; draw(); }));
    draw();
  } };

  // ================= BLOQUES =================
  R.bloques = { title: "Bloques de inteligencia", render(args, root) { const app = root || ME.app;
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
  R.alianzas = { title: "Alianzas de inteligencia", render(args, root) { const app = root || ME.app;
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
  R.infraestructura = { title: "Infraestructura de vigilancia", render(args, root) { const app = root || ME.app;
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
  R["software-espia"] = { title: "Mercado del software espía", render(args, root) { const app = root || ME.app;
    const S = window.SPYWARE, P = Object.fromEntries(S.providers.map(p => [p.id, p]));
    let sel = null;
    app.innerHTML = head("Mercado del software espía", "Las empresas que venden herramientas para intervenir teléfonos y computadoras, y los gobiernos que las compran. Cada línea es una venta o un uso documentado; el trazo indica el nivel de evidencia.") + `
      <div class="mapbox"><div class="map-split"><div id="swMap"></div><aside class="map-side"><h4>Proveedores · ${S.providers.length}</h4><div class="ev-list" id="swList"></div></aside></div>
      <div class="legend"><span><i class="dot" style="--c:var(--amber)"></i>Proveedor</span><span><i class="sw" style="--c:var(--red)"></i>Venta o uso confirmado (evidencia 1)</span><span><i class="sw dash" style="--c:var(--red)"></i>Atribución sólida o sospechada (2 y 3)</span><span class="hint">☞ Tocá un proveedor para aislar sus ventas</span></div></div>`;
    const draw = () => {
      const fl = S.flows.map(f => { const a = pt(P[f.p].ll), b = pt(f.ll), dim = sel && f.p !== sel;
        return `<path d="${arc(a, b, .2)}" fill="none" stroke="var(--red)" stroke-width="1.3" stroke-dasharray="${f.ev === 1 ? "" : "5 4"}" opacity="${dim ? .08 : .85}"/><circle class="swc" data-i="${S.flows.indexOf(f)}" tabindex="0" cx="${b[0]}" cy="${b[1]}" r="4" fill="var(--red)" opacity="${dim ? .15 : 1}"/>`; }).join("");
      const pv = S.providers.map((p, i) => { const [x, y] = pt(p.ll), dim = sel && p.id !== sel, dy = [-14, 22, 4, 0, 0, 0][i] || 0;
        return `<g class="prov" data-id="${p.id}" tabindex="0" opacity="${dim ? .3 : 1}"><path d="M${x} ${y - 7} L${x + 7} ${y} L${x} ${y + 7} L${x - 7} ${y} Z" fill="var(--amber)"/><circle cx="${x}" cy="${y}" r="12" fill="none" stroke="var(--amber)" stroke-opacity=".5"/>
          <text class="inf-l" x="${x - 14}" y="${y + 4 + dy}" text-anchor="end" fill="var(--amber)">${esc(p.tool.toUpperCase())}</text></g>`; }).join("");
      document.getElementById("swMap").innerHTML = stage(fl + pv, "Mapa del mercado del software espía", `<b>${sel ? esc(P[sel].n) : "Todos los proveedores"}</b>${sel ? esc(P[sel].tool) : "Proveedores y ventas"}`);
      document.getElementById("swList").innerHTML = S.providers.map(p => `<div role="button" tabindex="0" class="ev-item sw-item${sel === p.id ? " on" : ""}" data-id="${p.id}" style="--c:var(--amber)"><i></i><div><span class="d">${esc(p.country)} · herramienta: ${esc(p.tool)}</span><b>${esc(p.n)}</b><p>${esc(p.x)}</p>${sel === p.id ? `<ul class="sw-cl">${S.flows.filter(f => f.p === p.id).map(f => `<li><b>${esc(es(f.c))}</b> · ${evTag(f.ev)} ${esc(f.x)} <a href="${esc(f.u)}" target="_blank" rel="noopener">Fuente ↗</a></li>`).join("")}</ul>` : `<p class="muted">${S.flows.filter(f => f.p === p.id).length} clientes documentados · tocá para verlos</p>`}</div></div>`).join("");
      const pick = id => { sel = sel === id ? null : id; draw(); };
      bindTips(app, ".swc", el => { const f = S.flows[el.dataset.i]; return `<b>${esc(es(f.c))} · ${esc(P[f.p].tool)}</b><span class="d">${esc(f.x)}</span><span class="d">${esc(EVI[f.ev].n)}</span>`; });
      bindTips(app, ".prov", el => { const p = P[el.dataset.id]; return `<b>${esc(p.n)} · ${esc(p.tool)}</b><span class="d">${esc(p.country)}</span>`; }, el => pick(el.dataset.id));
      app.querySelectorAll(".sw-item").forEach(b => { b.addEventListener("click", () => pick(b.dataset.id)); b.addEventListener("keydown", e => { if (e.key === "Enter") pick(b.dataset.id); }); });
      app.querySelectorAll(".sw-item a").forEach(a => a.addEventListener("click", e => e.stopPropagation()));
    };
    draw();
  } };

  // ================= EXPULSIONES =================
  R.expulsiones = { title: "Expulsiones y canjes", render(args, root) { const app = root || ME.app;
    const E = window.EXPULSIONES, ys = E.map(e => e.y), years = [...new Set(ys)].sort((a, b) => a - b);
    let yr = "all";
    app.innerHTML = head("Expulsiones y canjes", "Diplomáticos expulsados por espionaje y espías canjeados entre países. El grosor de cada línea es la cantidad de personas. Sólo se cuentan los pares entre países del monitor, con fuente en cada caso.") + `
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
        return `<path class="exp" data-k="${r.a}|${r.b}|${r.n}|${r.t}" d="${arc(A, B, .22)}" fill="none" stroke="${r.t === "canje" ? "var(--amber)" : "var(--red)"}" stroke-width="${(1 + r.n / max * 7).toFixed(1)}" stroke-dasharray="${r.t === "canje" ? "6 4" : ""}" opacity=".75"/>`; }).join("") + monitorNodes(), "Mapa de expulsiones", `<b>${yr === "all" ? years[0] + "–" + years[years.length - 1] : yr}</b>${L.reduce((s, e) => s + e.n, 0)} personas`);
      document.getElementById("exTot").textContent = `Pares de países · ${rows.length}`;
      document.getElementById("exList").innerHTML = rows.map(r => `<div class="ev-item" style="--c:${r.t === "canje" ? "var(--amber)" : "var(--red)"}"><i></i><div><span class="d">${r.t === "canje" ? "Canje" : "Expulsión"}</span><b>${esc(byId[r.a].name)} → ${esc(byId[r.b].name)}</b><p>${r.n} personas</p>${L.filter(e => e.a === r.a && e.b === r.b && e.k === r.t).map(e => `<p class="muted">${esc(fmt(e.d))} · ${esc(e.x)} <a href="${esc(e.u)}" target="_blank" rel="noopener">${esc(e.st)} ↗</a></p>`).join("")}</div></div>`).join("");
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
  R.personas = { title: "Personas", render(args, root) { const app = root || ME.app;
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
  R.practicas = { title: "Qué hace cada servicio", render(args, root) { const app = root || ME.app;
    const PR = window.PRACTICAS, NONE = window.PRAC_NONE, groups = [...new Set(PR.map(x => x.g))];
    const anySample = PAISES.some(p => FICHAS[p.id]?.sample);
    const rows = PAISES.map(p => { const f = FICHAS[p.id] || {};
      return `<tr><td class="c"><a href="#p-${p.id}">${esc(p.name)}</a>${f.sample ? ` <span class="muted" style="font-size:11px">(sin cargar)</span>` : ""}</td>${PR.map(m => {
        const v = f.sample ? null : f.practicas?.[m.k]; if (!v) return `<td><span class="cell na" title="Sin cargar"></span></td>`;
        const E = v.ev ? EVI[v.ev] : NONE;
        return `<td><a class="cell${v.ev ? "" : " none"}" href="#p-${p.id}/practicas" style="--c:${E.c}" title="${esc(p.name)} · ${esc(m.n)}: ${esc(E.n)}. ${esc(v.x)}" aria-label="${esc(m.n)}: ${esc(E.n)}">${v.ev || ""}</a></td>`; }).join("")}</tr>`; }).join("");
    app.innerHTML = head("Qué hace cada servicio", "A quién espía cada país y si hay casos documentados de extorsión, asesinatos, tortura y secuestros, o de armas, inteligencia, tecnología y entrenamiento dados a otros. El color es el nivel de evidencia del caso más firme; el número repite el nivel. Pasá el cursor por una celda para leer el resumen, o tocala para ir a la ficha y ver la fuente.", false) + `
      <div class="pm-leg">${[1, 2, 3, 4].map(e => `<span style="--c:${EVI[e].c}"><i class="n">${e}</i>${EVI[e].n}</span>`).join("")}<span><i style="background:transparent;border:1px dashed #2b4033"></i>Sin casos documentados</span><span><i style="background:transparent;border:1px solid #1a2a20"></i>Sin cargar</span></div>
      <div class="pm-wrap"><table class="pm"><thead>
        <tr><th></th>${groups.map(g => `<th class="g" colspan="${PR.filter(x => x.g === g).length}">${esc(g)}</th>`).join("")}</tr>
        <tr><th></th>${PR.map(m => `<th title="${esc(m.x)}">${esc(m.n)}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody></table></div>
      <p class="muted" style="font-size:13px">"Sin casos documentados" significa que la ficha no encontró casos públicos, no que se pueda descartar la práctica.</p>`;
  } };

  // ================= ASESINATOS Y SECUESTROS =================
  const OPS = { asesinato: { n: "Asesinato", c: "#ff4d3d" }, intento: { n: "Intento de asesinato", c: "#ff9433" }, secuestro: { n: "Secuestro", c: "#c9a7ff" }, atentado: { n: "Atentado o voladura", c: "#ffd23f" } };
  ME.OPS = OPS;
  const allOps = () => { const L = []; Object.entries(FICHAS).forEach(([id, f]) => (f.events || []).forEach(e => { if (e.op && OPS[e.op]) L.push({ ...e, por: e.por || id, ficha: id }); })); return L.sort((a, b) => a.d.localeCompare(b.d)); };
  R.asesinatos = { title: "Asesinatos y secuestros", render(args, root) { const app = root || ME.app;
    const L = allOps(), on = new Set(Object.keys(OPS)); let who = byId[args[0]] ? args[0] : null;
    const authors = [...new Set(L.map(e => e.por))].map(id => ({ id, n: L.filter(e => e.por === id).length })).sort((a, b) => b.n - a.n || byId[a.id].name.localeCompare(byId[b.id].name));
    app.innerHTML = head("Asesinatos y secuestros", "Operaciones con muertos o personas capturadas que gobiernos, tribunales, investigaciones o la prensa atribuyen a un servicio. Cada punto marca dónde ocurrió; el color, qué tipo de operación fue. La atribución y su nivel de evidencia figuran en cada caso.") + `
      <div class="chips" id="opChips">${Object.entries(OPS).map(([k, t]) => `<button type="button" class="chip on" data-t="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n} · ${L.filter(e => e.op === k).length}</button>`).join("")}</div>
      <div class="mapbox"><div class="map-split"><div id="opMap"></div><aside class="map-side"><h4 id="opCount"></h4><div class="ev-list" id="opList"></div></aside></div>
      <div class="legend">${Object.values(OPS).map(t => `<span><i class="dot" style="--c:${t.c}"></i>${t.n}</span>`).join("")}<span class="hint">☞ Tocá un punto para ver el caso</span></div></div>
      <div class="section-title"><h2>Por servicio</h2><span>Operaciones atribuidas a cada país · tocá una barra para filtrar</span></div>
      <div class="bars-box"><div class="hbars" id="opBars"></div></div>`;
    const draw = () => {
      const V = L.filter(e => on.has(e.op) && (!who || e.por === who));
      document.getElementById("opMap").innerHTML = stage(V.map(e => { const [a, b] = pt([e.lon, e.lat]), c = OPS[e.op].c;
        return `<g class="opp" data-i="${L.indexOf(e)}" tabindex="0"><circle cx="${a}" cy="${b}" r="9" fill="none" stroke="${c}" stroke-opacity=".45"/><circle cx="${a}" cy="${b}" r="3.6" fill="${c}"/></g>`; }).join(""), "Mapa de asesinatos y secuestros", `<b>${who ? esc(byId[who].name) : "Todos los servicios"}</b>${V.length} operaciones`);
      document.getElementById("opCount").textContent = `Operaciones · ${V.length}`;
      document.getElementById("opList").innerHTML = V.slice().reverse().map(e => `<div class="ev-item" id="op-${L.indexOf(e)}" style="--c:${OPS[e.op].c}"><i></i><div><span class="d">${esc(fmt(e.d))} · ${esc(OPS[e.op].n)} · en ${esc(es(e.c) || e.c || "")}</span><b>${esc(e.h)}</b><p>Atribuido a: <a href="#p-${e.por}">${esc(byId[e.por].name)}</a></p><p>${esc(e.x)}</p><p>${e.ev ? evTag(e.ev) : ""} <a href="${esc(e.u)}" target="_blank" rel="noopener">${esc(e.st || "Fuente")} ↗</a></p></div></div>`).join("") || `<p class="muted">Nada con este filtro.</p>`;
      const mx = Math.max(...authors.map(a => a.n));
      document.getElementById("opBars").innerHTML = authors.map(a => `<button type="button" class="hbar${who === a.id ? " on" : ""}" data-id="${a.id}"><span class="l">${esc(byId[a.id].name)}</span><span class="t"><i style="width:${(a.n / mx * 100).toFixed(0)}%"></i></span><span class="n">${a.n}</span></button>`).join("");
      app.querySelectorAll(".hbar").forEach(b => b.addEventListener("click", () => { who = who === b.dataset.id ? null : b.dataset.id; draw(); }));
      bindTips(app, ".opp", el => { const e = L[el.dataset.i]; return `<b>${esc(e.h)}</b><span class="d">${esc(fmt(e.d))} · ${esc(byId[e.por].name)}</span>`; },
        el => { const it = document.getElementById("op-" + el.dataset.i); if (!it) return; it.scrollIntoView({ block: "nearest", behavior: "smooth" }); it.classList.add("flash"); setTimeout(() => it.classList.remove("flash"), 1200); });
    };
    app.querySelectorAll("#opChips .chip").forEach(b => b.addEventListener("click", () => { const k = b.dataset.t; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); draw(); }));
    draw();
  } };

  // ================= FILTRACIONES Y DENUNCIANTES =================
  const LK = { filtracion: "Filtración", denunciante: "Denunciante", robo: "Robo de información", accidental: "Pérdida accidental", ocultamiento: "Ocultamiento", desinfo: "Desinformación" };
  R.filtraciones = { title: "Filtraciones y secretos", render(args, root) { const app = root || ME.app;
    const L = [];
    Object.entries(FICHAS).forEach(([id, f]) => {
      (f.leaks || []).forEach(l => L.push({ k: l.k, id, rol: l.rol, d: l.d, h: l.h, x: l.x, ev: l.ev, who: l.who, u: l.u, st: l.st }));
      (f.insiders || []).filter(i => i.k === "denunciante").forEach(i => L.push({ k: "denunciante", id, rol: i.dir === "sale" ? "blanco" : "autor", d: i.d, h: (i.n ? i.n + ": " : "") + i.h, x: i.x + (i.fin ? " " + i.fin : ""), ev: i.ev, who: i.who, u: i.u, st: i.st }));
    });
    L.sort((a, b) => String(b.d).localeCompare(String(a.d)));
    let k = LK[args[0]] ? args[0] : "filtracion", q = "";
    app.innerHTML = head("Filtraciones y secretos", "Lo que salió a la luz y lo que se quiso tapar: filtraciones, denunciantes, robos de información, pérdidas accidentales, ocultamientos y campañas de desinformación, de todas las fichas. \"Lo hizo\" significa que el servicio de ese país fue el autor; \"lo sufrió\", que fue el blanco.") + `
      <div class="chips" id="lkChips">${Object.entries(LK).map(([c, n]) => `<button type="button" class="chip" data-k="${c}">${n} · ${L.filter(l => l.k === c).length}</button>`).join("")}<label class="search"><span>Buscar</span><input type="search" id="lkQ" placeholder="Snowden, Stasi, Vault 7…"></label></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">Fecha</th><th scope="col">País</th><th scope="col">Papel</th><th scope="col">Qué pasó</th><th scope="col">Evidencia</th></tr></thead><tbody id="lkBody"></tbody></table></div>`;
    const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    const draw = () => {
      app.querySelectorAll("#lkChips .chip").forEach(b => b.classList.toggle("on", b.dataset.k === k));
      const V = L.filter(l => (q ? true : l.k === k) && (!q || norm(l.h + " " + l.x + " " + byId[l.id].name).includes(norm(q))));
      document.getElementById("lkBody").innerHTML = V.map(l => `<tr><td class="mono">${esc(l.d)}</td><td><a href="#p-${l.id}">${esc(byId[l.id].name)}</a></td><td>${q ? esc(LK[l.k]) + " · " : ""}${l.rol === "autor" ? "Lo hizo" : "Lo sufrió"}</td><td><b>${esc(l.h)}</b><br>${esc(l.x)} ${l.u ? `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.st || "Fuente")} ↗</a>` : ""}</td><td>${l.ev ? evTag(l.ev) : ""}</td></tr>`).join("") || `<tr><td colspan="5" class="muted">Nada con este filtro.</td></tr>`;
    };
    app.querySelectorAll("#lkChips .chip").forEach(b => b.addEventListener("click", () => { k = b.dataset.k; q = ""; document.getElementById("lkQ").value = ""; draw(); }));
    document.getElementById("lkQ").addEventListener("input", e => { q = e.target.value.trim(); draw(); });
    draw();
  } };

  // ================= PODER Y CONTROL =================
  R.control = { title: "Poder y control", render(args, root) { const app = root || ME.app;
    const B = window.BLOQUES, BD = Object.fromEntries(B.defs.map(d => [d.id, d])), CU = window.CUENTAS;
    const bloc = id => { const m = B.paises.find(x => x[0] === byId[id].map); return m ? m[1] : "neu"; };
    const pts = PAISES.filter(p => FICHAS[p.id]?.cuentas && FICHAS[p.id]?.power).map(p => { const f = FICHAS[p.id]; return { id: p.id, n: p.name, cap: Object.values(f.power).reduce((a, b) => a + b, 0), cu: f.cuentas.n, x: f.cuentas.x, b: bloc(p.id) }; }).sort((a, b) => b.cap - a.cap);
    const COLS = [[6, 11, "Baja"], [12, 17, "Media"], [18, 23, "Alta"], [24, 30, "Muy alta"]];
    const cell = (n, c) => pts.filter(p => p.cu === n && p.cap >= c[0] && p.cap <= c[1]).map(p => `<a class="ctl-p" href="#p-${p.id}" data-id="${p.id}" style="--c:${BD[p.b].c}"><i></i>${esc(p.n)}<span>${p.cap}</span></a>`).join("");
    app.innerHTML = head("Poder y control", "Cada país según dos ejes: cuánta capacidad tienen sus servicios (columnas, de menor a mayor) y si sus abusos tuvieron consecuencias (filas). Arriba a la derecha, servicios fuertes con controles; abajo a la derecha, servicios fuertes sin controles. El color es el bloque y el número, la capacidad.") + `
      <div class="tbl-wrap"><table class="ctl"><thead><tr><th scope="col">Rendición de cuentas ↓ · Capacidad →</th>${COLS.map(c => `<th scope="col">${c[2]}<span>${c[0]} a ${c[1]}</span></th>`).join("")}</tr></thead>
      <tbody>${[3, 2, 1].map(n => `<tr style="--c:${CU[n].c}"><th scope="row">${esc(CU[n].n)}<span>${pts.filter(p => p.cu === n).length} países</span></th>${COLS.map(c => `<td>${cell(n, c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <div class="legend">${B.defs.map(d => `<span><i class="dot" style="--c:${d.c}"></i>${esc(d.n)}</span>`).join("")}</div>
      <p class="muted" style="font-size:13px">La capacidad es la suma de los seis rubros de cada ficha (de 6 a 30). La rendición de cuentas es una clasificación editorial del monitor, explicada en cada ficha en "Doctrina y poder"; pasá el cursor por un país para leerla.</p>`;
    bindTips(app, ".ctl-p", el => { const p = pts.find(x => x.id === el.dataset.id); return `<b>${esc(p.n)} · capacidad ${p.cap}</b><span class="d">${esc(CU[p.cu].n)}: ${esc(p.x)}</span>`; });
  } };

  // ================= MITOS Y DENUNCIAS =================
  R.mitos = { title: "Mitos y denuncias sin pruebas", render(args, root) { const app = root || ME.app;
    const L = []; Object.entries(FICHAS).forEach(([id, f]) => (f.cases || []).filter(c => c.ev >= 3).forEach(c => L.push({ ...c, id })));
    L.sort((a, b) => String(b.d).localeCompare(String(a.d)));
    let ev = args[0] === "denuncias" ? 3 : 4;
    app.innerHTML = head("Mitos y denuncias sin pruebas", "Lo que circula sobre los servicios de inteligencia y no está probado. Las teorías conspirativas no resisten el análisis o están contradichas por la evidencia: se explica de dónde salieron y qué las desmiente. Las denuncias sin pruebas firmes tienen lógica o indicios, pero falta lo que diría si son ciertas.") + `
      <div class="chips" id="miChips"><button type="button" class="chip" data-e="4" style="--c:${EVI[4].c}"><i></i>Teorías conspirativas · ${L.filter(c => c.ev === 4).length}</button><button type="button" class="chip" data-e="3" style="--c:${EVI[3].c}"><i></i>Denuncias sin pruebas firmes · ${L.filter(c => c.ev === 3).length}</button></div>
      <div class="cards" id="miCards"></div>`;
    const draw = () => {
      app.querySelectorAll("#miChips .chip").forEach(b => b.classList.toggle("on", +b.dataset.e === ev));
      document.getElementById("miCards").innerHTML = L.filter(c => c.ev === ev).map(c => `<div class="card mi-card"><div class="top"><span><a href="#p-${c.id}">${esc(byId[c.id].name)}</a> · ${esc(c.d)}</span>${evTag(c.ev)}</div><h3>${esc(c.h)}</h3>
        <p>${esc(c.x)}</p>${c.who ? `<p><span class="k">Quién lo afirma</span>${esc(c.who)}</p>` : ""}${c.debunk ? `<p><span class="k">Qué la desmiente</span>${esc(c.debunk)}</p>` : ""}${c.missing && c.ev === 3 ? `<p><span class="k">Qué falta</span>${esc(c.missing)}</p>` : ""}
        ${c.u ? `<p><a href="${esc(c.u)}" target="_blank" rel="noopener">${esc(c.st || "Fuente")} ↗</a></p>` : ""}</div>`).join("");
    };
    app.querySelectorAll("#miChips .chip").forEach(b => b.addEventListener("click", () => { ev = +b.dataset.e; draw(); }));
    draw();
  } };

  // ================= JEFES QUE LLEGARON AL PODER =================
  const JK = { gobierno: { n: "Gobernaron", c: "#7dffb0" }, cargo: { n: "Cargos altos", c: "#4fa3ff" }, sombra: { n: "Poder en las sombras", c: "#c9a7ff" } };
  R.jefes = { title: "Espías que llegaron al poder", render(args, root) { const app = root || ME.app;
    const J = window.JEFES, on = new Set(Object.keys(JK));
    app.innerHTML = head("Espías que llegaron al poder", "Jefes y oficiales de inteligencia que después gobernaron, ocuparon cargos altos o manejaron el poder sin un cargo de gobierno. Ordenados por el año en que llegaron a ese lugar.") + `
      <div class="chips" id="jfChips">${Object.entries(JK).map(([k, t]) => `<button type="button" class="chip on" data-k="${k}" aria-pressed="true" style="--c:${t.c}"><i></i>${t.n} · ${J.filter(j => j.k === k).length}</button>`).join("")}</div>
      <div class="jf-list" id="jfList"></div>`;
    const draw = () => { document.getElementById("jfList").innerHTML = J.filter(j => on.has(j.k)).map(j => `<div class="jf-it" style="--c:${JK[j.k].c}"><span class="jf-y">${esc(j.d)}</span><div><span class="d">${j.c && byId[j.c] ? `<a href="#p-${j.c}">${esc(byId[j.c].name)}</a>` : esc(j.pais)} · ${esc(JK[j.k].n)}</span><b>${esc(j.n)}</b>
      <p class="jf-path"><span>${esc(j.de)}</span><em>→</em><span>${esc(j.a)}</span></p><p>${esc(j.x)} <a href="${esc(j.u)}" target="_blank" rel="noopener">${esc(j.st)} ↗</a></p></div></div>`).join(""); };
    app.querySelectorAll("#jfChips .chip").forEach(b => b.addEventListener("click", () => { const k = b.dataset.k; on.has(k) ? on.delete(k) : on.add(k); b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", String(on.has(k))); draw(); }));
    draw();
  } };

  // ================= COMPARAR =================
  R.comparar = { title: "Comparar dos países", render(args, root) { const app = root || ME.app;
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
  R.cronologia = { title: "Cronología global", render(args, root) { const app = root || ME.app;
    const y0 = 1945, y1 = 2027, LW = 150, VW = 1200, lane = 26, top = 84;
    const x = y => LW + (y - y0) / (y1 - y0) * (VW - LW - 16);
    const eras = [[1947, 1991, "Guerra Fría"], [1991, 2001, "Posguerra Fría"], [2001, 2013, "11-S y después"], [2013, 2027, "Era digital"]];
    const hitos = [[1947, "Se crea la CIA"], [1962, "Crisis de los misiles"], [1989, "Cae el Muro de Berlín"], [2001, "11-S"], [2013, "Snowden"], [2022, "Invasión rusa a Ucrania"]];
    const VH = top + PAISES.length * lane + 30;
    const evs = PAISES.flatMap((p, i) => (FICHAS[p.id]?.events || []).map(e => ({ ...e, p, i })));
    app.innerHTML = head("Cronología global", "Un carril por país sobre la misma línea de tiempo, para ver qué hacía cada servicio en el mismo momento. Cada punto es un hecho de la ficha del país; tocalo para abrirla.", PAISES.some(p => FICHAS[p.id]?.sample)) + `
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
  R.archivo = { title: "Archivo desclasificado", render(args, root) { const app = root || ME.app;
    const A = window.ARCHIVO, cs = [...new Set(A.docs.map(d => d.c))];
    app.innerHTML = head("Archivo desclasificado", "Los documentos oficiales liberados que sostienen los casos marcados como demostrados. Primero, los grandes fondos donde buscar; después, los documentos citados en el sitio.") + `
      <div class="section-title"><h2>Fondos documentales</h2><span>${A.fondos.length} archivos</span></div>
      <div class="cards">${A.fondos.map(f => `<a class="card" href="${esc(f.u)}" target="_blank" rel="noopener"><div class="top"><span>${esc(f.c)}</span><span>Externo ↗</span></div><h3 style="font-size:24px">${esc(f.n)}</h3><div class="ag" style="font-family:var(--f-ui);font-size:13.5px">${esc(f.x)}</div></a>`).join("")}</div>
      <div class="section-title"><h2>Documentos citados</h2><span>${A.docs.length} documentos clave, con un enlace a su descripción</span></div>
      <div class="chips" id="arChips"><button type="button" class="chip on" data-c="all">Todos</button>${cs.map(c => `<button type="button" class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">Año</th><th scope="col">Documento</th><th scope="col">País</th><th scope="col">Tipo</th><th scope="col">Qué dice</th></tr></thead><tbody id="arBody"></tbody></table></div>`;
    const draw = c => { app.querySelector("#arBody").innerHTML = [...A.docs].sort((x, y) => x.d.localeCompare(y.d)).filter(d => c === "all" || d.c === c).map(d => `<tr><td class="mono">${esc(d.d)}</td><td><a href="${esc(d.u)}" target="_blank" rel="noopener">${esc(d.t)} ↗</a></td><td>${esc(d.c)}</td><td>${esc(d.k)}</td><td>${esc(d.x)}</td></tr>`).join("");
      app.querySelectorAll("#arChips .chip").forEach(b => b.classList.toggle("on", b.dataset.c === c)); };
    app.querySelectorAll("#arChips .chip").forEach(b => b.addEventListener("click", () => draw(b.dataset.c)));
    draw("all");
  } };

  // ================= CÓMO FUNCIONA =================
  R["como-funciona"] = { title: "Cómo funciona el espionaje", render(args, root) { const app = root || ME.app;
    const C = window.CICLO, n = C.length, cx = 250, cy = 250, rr = 170;
    const P = C.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]; });
    const arrow = i => { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .3, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .3;
      return `<path d="M${cx + rr * Math.cos(a0)} ${cy + rr * Math.sin(a0)} A${rr} ${rr} 0 0 1 ${cx + rr * Math.cos(a1)} ${cy + rr * Math.sin(a1)}" fill="none" stroke="var(--ph-lo)" stroke-width="2" marker-end="url(#ah)"/>`; };
    app.innerHTML = head("Cómo funciona el espionaje", "Una entrada al tema para quien no lo conoce: el ciclo de inteligencia, los tipos de inteligencia y el vocabulario básico.") + `
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
