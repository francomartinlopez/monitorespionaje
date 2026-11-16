// Genera fichas de PRUEBA en data/paises/<id>.js para ver el esqueleto del sitio.
// Uso: node scripts/muestra.js            (no pisa las fichas que ya no son de prueba)
// Cada ficha real reemplaza a su archivo de prueba; el formato es el mismo.
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/paises.js"), "utf8"), ctx);

function rng(seed) { let s = 0; for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const pad = n => String(n).padStart(2, "0");
const P = "Texto de prueba.";
// Poder de prueba (humana, señales, ciber, imágenes, encubierta, contra): estimación gruesa provisoria, a revisar con fuentes.
const POWER = { us: [5,5,5,5,5,4], ru: [5,4,5,4,5,4], cn: [4,5,5,4,3,5], uk: [5,5,4,3,4,4], il: [5,5,5,3,5,4], fr: [4,4,4,4,4,4], de: [3,4,3,2,2,3], ir: [4,2,4,1,4,4], kp: [3,1,5,1,3,5], ar: [2,2,2,1,1,2], va: [3,1,1,1,1,2], ua: [4,3,4,2,4,3], tr: [4,3,3,2,4,4], pk: [4,2,2,1,4,4], in: [4,4,3,4,3,3], sa: [3,4,3,2,3,3], cu: [4,2,2,1,3,5], ae: [3,5,4,2,3,3], br: [2,2,2,2,1,2], kr: [3,4,4,3,2,3], tw: [3,4,3,3,2,3], jp: [2,4,3,4,1,3], eg: [3,2,2,2,3,4], mx: [2,2,2,2,1,2], vn: [3,2,4,1,2,4], ch: [2,3,2,1,1,3], za: [2,2,1,1,2,2], sg: [3,4,3,2,1,4] };

for (const p of ctx.PAISES) {
  const file = path.join(root, "data/paises", p.id + ".js");
  if (fs.existsSync(file) && !/"sample": true/.test(fs.readFileSync(file, "utf8").slice(0, 400))) { console.log("salteo (ficha real):", p.id); continue; }
  const r = rng(p.id);
  const pick = a => a[Math.floor(r() * a.length)];
  const lvl = () => 1 + Math.floor(r() * 5);
  const [lon, lat] = p.center;
  const types = ["encubierta", "sabotaje", "ciber", "senales", "humana", "contra"];

  const events = Array.from({ length: 14 }, (_, i) => {
    const y = 1960 + Math.floor((i / 14) * 64 + r() * 4);
    const far = r() < .6;
    return {
      d: `${y}-${pad(1 + Math.floor(r() * 12))}-${pad(1 + Math.floor(r() * 27))}`,
      lat: +(far ? -40 + r() * 100 : lat + (r() - .5) * 8).toFixed(2),
      lon: +(far ? -150 + r() * 300 : lon + (r() - .5) * 12).toFixed(2),
      t: pick(types), h: `Operación de prueba ${i + 1}`,
      x: `${P} Qué se hizo, dónde, qué organismo y quién lo atribuye.`, ev: 1 + Math.floor(r() * 3)
    };
  }).sort((a, b) => a.d.localeCompare(b.d));

  const bodies = {};
  p.agencies.forEach(a => {
    bodies[a.code] = {
      since: 1900 + Math.floor(r() * 120), staff: `${P} Dotación estimada y cómo se compone.`, budget: `${P} Presupuesto público o estimado, con fuente.`,
      how: `${P} Cómo trabaja ${a.name}: misión, a quién responde y qué puede hacer.`,
      tech: ["Tecnología de prueba A", "Tecnología de prueba B"], where: ["Región de prueba 1", "Región de prueba 2"]
    };
  });

  const data = {
    sample: true, id: p.id, updated: "2026-11-15",
    summary: [`${P} Panorama de la comunidad de inteligencia de ${p.name}: su peso en el mundo, su lógica y sus prioridades.`, `${P} Segundo párrafo con el momento actual: cambios recientes, conducción y tensiones.`],
    keyFacts: [
      { l: "Organismos", v: String(p.agencies.filter(a => a.g !== "j").length), n: "en el organigrama" },
      { l: "Presupuesto", v: "[DATO]", n: "dato de prueba" },
      { l: "Personal", v: "[DATO]", n: "dato de prueba" },
      { l: "Ley marco", v: "[LEY]", n: "dato de prueba" }
    ],
    power: Object.fromEntries(["humana", "senales", "ciber", "imagenes", "encubierta", "contra"].map((k, i) => [k, POWER[p.id][i]])),
    priorities: ["Prioridad de prueba 1", "Prioridad de prueba 2", "Prioridad de prueba 3", "Prioridad de prueba 4"].map(h => ({ h, x: P })),
    focos: ["Foco de prueba A", "Foco de prueba B", "Foco de prueba C"],
    bodies,
    law: {
      domestic: [`${P} Qué puede hacer con sus propios ciudadanos y con qué autorización.`, `${P} Límites a la interceptación dentro del país.`],
      foreign: [`${P} Qué puede hacer con extranjeros, dentro y fuera del país.`, `${P} Cooperación e intercambio de datos con otros servicios.`],
      oversight: [`${P} Control parlamentario.`, `${P} Control judicial.`, `${P} Inspectores y auditorías.`]
    },
    rights: Array.from({ length: 9 }, (_, i) => ({
      d: String(1950 + Math.floor(i * 8.3 + r() * 5)), dir: r() < .58 ? "amplia" : "recorta",
      h: `Hito de prueba ${i + 1}`, x: `${P} Ley, fallo, programa revelado o reforma, y qué derecho tocó.`,
      area: pick(["Privacidad", "Comunicaciones", "Debido proceso", "Expresión", "Datos personales"])
    })),
    events,
    // interés estratégico por país (nombre del mapa → 1 bajo, 2 medio, 3 alto): DE PRUEBA
    interest: (() => { const ri = rng(p.id + "-interes"), pool = ["United States of America", "Russia", "China", "United Kingdom", "France", "Germany", "Iran", "Israel", "Ukraine", "Turkey", "India", "Pakistan", "Saudi Arabia", "Syria", "Iraq", "Afghanistan", "Venezuela", "Cuba", "Mexico", "Brazil", "Argentina", "Japan", "South Korea", "North Korea", "Taiwan", "Egypt", "Libya", "Sudan", "Mali", "Nigeria", "Kazakhstan", "Belarus", "Poland", "Serbia", "Indonesia", "Philippines", "Vietnam", "Colombia", "Ethiopia", "Somalia"].filter(n => n !== p.map);
      const out = {}; pool.forEach(n => { const x = ri(); if (x < .45) out[n] = x < .1 ? 3 : x < .25 ? 2 : 1; }); return out; })(),
    timeline: [
      { era: "Orígenes", d: "19XX", h: "Hito de prueba", x: P },
      { era: "", d: "19XX", h: "Hito de prueba", x: P },
      { era: "Guerra Fría", d: "19XX", h: "Hito de prueba", x: P },
      { era: "", d: "19XX", h: "Hito de prueba", x: P },
      { era: "", d: "19XX", h: "Hito de prueba", x: P },
      { era: "Posguerra Fría", d: "19XX", h: "Hito de prueba", x: P },
      { era: "", d: "20XX", h: "Hito de prueba", x: P },
      { era: "Era digital", d: "20XX", h: "Hito de prueba", x: P },
      { era: "", d: "20XX", h: "Hito de prueba", x: P, now: true }
    ],
    cases: [1, 1, 2, 2, 3, 4].map((ev, i) => ({
      ev, h: `Caso de prueba ${i + 1}`, d: String(1960 + Math.floor(r() * 64)), ilegal: r() < .5,
      x: `${P} Qué se sabe del caso y qué hizo el organismo.`,
      who: pick(["Un tribunal", "Una comisión parlamentaria", "Un gobierno extranjero", "Una investigación periodística", "Un ex agente", "Redes sociales"]),
      missing: ev === 1 ? "" : `${P} Qué falta para subir de categoría.`,
      debunk: ev === 4 ? `${P} De dónde salió, por qué prendió y qué la desmiente.` : ""
    })),
    failures: [
      { k: "falla", ev: 1, w: 3, d: "19XX", h: "Falla de prueba 1", x: P, why: P + " Por qué no está en duda.", wx: "", who: "Una comisión investigadora" },
      { k: "falla", ev: 2, w: 2, d: "20XX", h: "Falla de prueba 2", x: P, why: P + " Qué se discute.", wx: "", who: "Prensa especializada" },
      { k: "falsa", ev: 3, w: 1, d: "19XX", h: "Falsa bandera de prueba", x: P, why: P + " Por qué está en duda.", wx: "", who: "Un ex agente" },
      { k: "falsa", ev: 4, w: 1, d: "20XX", h: "Teoría de prueba", x: P, why: P + " Qué la desmiente.", wx: "", who: "Redes sociales" }
    ],
    modus: { embajadas: P, campo: P, oficina: P, reclutamiento: P, tecnica: P, enlaces: P },
    practicas: Object.fromEntries(["propios", "politicos", "periodistas", "activistas", "aliados", "rivales", "extorsion", "asesinato", "sabotaje", "tortura", "secuestro", "propaganda", "conflictos", "cultural", "golpes", "elecciones", "partidos", "diaspora", "empresarios", "religiosos", "armas", "inteligencia", "tecnologia", "entrenamiento"].map(k => [k, { ev: pick([0, 0, 1, 2, 3]), x: P }])),
    dinero: { presupuesto: P, uso: P, ingresos: P, empresas: P, bancos: P, crimen: P, cobertura: P },
    fondos: [
      { k: "presupuesto", rol: "autor", ev: 1, d: "20XX", h: "Presupuesto de prueba", x: P, monto: "Monto de prueba", who: "Ley de presupuesto" },
      { k: "fachada", rol: "autor", ev: 2, d: "19XX", h: "Empresa de fachada de prueba", x: P, obj: P, who: "Una investigación periodística" },
      { k: "crimen", rol: "autor", ev: 3, d: "20XX", h: "Vínculo criminal de prueba", x: P, obj: P, who: "Un ex agente" },
      { k: "cobertura", rol: "blanco", ev: 2, d: "20XX", h: "ONG de cobertura de prueba", x: P, obj: P, who: "Un gobierno extranjero" }
    ],
    insiders: [
      { k: "denunciante", dir: "sale", ev: 1, d: "20XX", n: "Persona de prueba", h: "Denuncia de prueba", x: P, cargo: "Organismo de prueba", hacia: "Un medio", fin: P, who: "Un tribunal" },
      { k: "topo", dir: "sale", ev: 1, d: "19XX", n: "Persona de prueba", h: "Topo de prueba", x: P, cargo: "Organismo de prueba", hacia: "Un servicio extranjero", fin: P, who: "Un tribunal" },
      { k: "topo", dir: "entra", ev: 2, d: "20XX", n: "Persona de prueba", h: "Fuente reclutada de prueba", x: P, cargo: "Servicio extranjero", hacia: "Este país", fin: P, who: "Prensa especializada" },
      { k: "desertor", dir: "sale", ev: 1, d: "19XX", n: "Persona de prueba", h: "Deserción de prueba", x: P, cargo: "Organismo de prueba", hacia: "Otro país", fin: P, who: "Un gobierno extranjero" }
    ],
    leaks: [
      { k: "filtracion", rol: "blanco", ev: 1, d: "20XX", h: "Filtración de prueba", x: P, obj: P, who: "Una investigación periodística" },
      { k: "accidental", rol: "blanco", ev: 2, d: "20XX", h: "Filtración no intencional de prueba", x: P, obj: P, who: "Prensa especializada" },
      { k: "robo", rol: "autor", ev: 2, d: "20XX", h: "Robo de prueba", x: P, obj: P, who: "Un gobierno extranjero" },
      { k: "ocultamiento", rol: "autor", ev: 1, d: "19XX", h: "Ocultamiento de prueba", x: P, aquien: "Al Congreso", como: P, who: "Una comisión parlamentaria" },
      { k: "desinfo", rol: "autor", ev: 3, d: "20XX", h: "Desinformación de prueba", x: P, obj: P, who: "Un ex agente" }
    ],
    companies: [
      { n: "Empresa nacional de prueba", c: "nacional", rubro: "Defensa", rel: "Contratista", x: P },
      { n: "Empresa nacional de prueba", c: "nacional", rubro: "Telecomunicaciones", rel: "Cooperación legal", x: P },
      { n: "Empresa extranjera de prueba", c: "extranjera", rubro: "Tecnología", rel: "Proveedor", x: P },
      { n: "Empresa extranjera de prueba", c: "extranjera", rubro: "Software espía", rel: "Objetivo de vigilancia", x: P }
    ],
    civil: [`${P} Relación con la Presidencia o el Gobierno.`, `${P} Relación con la cancillería y otros ministerios.`],
    struggles: [
      { a: "Organismo A", b: "Organismo B", k: "Entre agencias", stake: "Presupuesto y control", state: "Abierta", x: P },
      { a: "Sección interna X", b: "Sección interna Y", k: "Interna", stake: "Conducción", state: "Latente", x: P },
      { a: "Servicios", b: "Justicia", k: "Con otros poderes", stake: "Causas judiciales", state: "Abierta", x: P },
      { a: "Servicios", b: "Partido o empresa", k: "Con la política y la economía", stake: "Influencia", state: "Latente", x: P }
    ],
    sources: [{ t: "Fuente de prueba", u: "#" }]
  };
  fs.writeFileSync(file, `// FICHA DE PRUEBA generada por scripts/muestra.js: reemplazar por contenido real.\n(window.FICHAS = window.FICHAS || {})["${p.id}"] = ${JSON.stringify(data, null, 1)};\n`);
  console.log("escrita:", p.id);
}
