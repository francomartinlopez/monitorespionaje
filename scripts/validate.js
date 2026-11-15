// Validador del Monitor de Espionaje.
// Uso: node scripts/validate.js            → controla los datos
//      node scripts/validate.js --browser  → además abre todas las páginas en Chromium (requiere playwright de Python)
// Sale con código 1 si hay errores. Los avisos no bloquean.
const fs = require("fs"), path = require("path"), vm = require("vm"), { execFileSync } = require("child_process");
const root = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
["vendor/d3-array.min.js", "vendor/d3-geo.min.js", "vendor/topojson-client.min.js", "data/world.js", "data/meta.js", "data/nombres.js", "data/paises.js", "data/relaciones.js", "data/explorar.js"].forEach(load);
fs.readdirSync(path.join(root, "data/paises")).filter(f => f.endsWith(".js")).forEach(f => load("data/paises/" + f));

const errors = [], warns = [];
const err = (w, m) => errors.push(`✗ ${w}: ${m}`), warn = (w, m) => warns.push(`! ${w}: ${m}`);
const { PAISES, FICHAS, EV_TYPES, RUBROS, WORLD, d3, topojson } = ctx;
const feats = topojson.feature(WORLD, WORLD.objects.countries).features;
const names = new Set(feats.map(f => f.properties.name));
const byName = Object.fromEntries(feats.map(f => [f.properties.name, f]));
const ids = new Set(PAISES.map(p => p.id));
const isDate = s => /^\d{4}(-\d{2}(-\d{2})?)?$/.test(String(s));
const isUrl = s => /^https?:\/\//.test(String(s));

// países
PAISES.forEach(p => {
  if (!names.has(p.map)) err(p.id, `nombre de mapa desconocido "${p.map}"`);
  const codes = p.agencies.map(a => a.code);
  if (new Set(codes).size !== codes.length) err(p.id, "códigos de organismo repetidos");
  if (!p.agencies.some(a => a.g === "k")) warn(p.id, "sin organismo de coordinación");
  if (!FICHAS[p.id]) err(p.id, "falta data/paises/" + p.id + ".js");
});

// fichas
const needed = ["updated", "summary", "keyFacts", "power", "priorities", "focos", "bodies", "civil", "law", "rights", "events", "timeline", "cases", "companies", "struggles", "sources"];
let real = 0;
Object.entries(FICHAS).forEach(([id, f]) => {
  const p = PAISES.find(x => x.id === id), w = "ficha " + id;
  if (!p) return err(w, "no está en data/paises.js");
  needed.forEach(k => { if (f[k] == null) err(w, "falta " + k); });
  if (!f.sample) real++;
  if (!isDate(f.updated)) err(w, "updated inválido");
  RUBROS.forEach(r => { const v = f.power?.[r.k]; if (!(v >= 1 && v <= 5)) err(w, `power.${r.k} fuera de 1–5`); });
  if (!f.sample && !f.powerWhy) err(w, "ficha real sin powerWhy");
  p.agencies.forEach(a => { if (!f.bodies?.[a.code]) err(w, `falta bodies["${a.code}"]`); });
  Object.keys(f.bodies || {}).forEach(k => { if (!p.agencies.some(a => a.code === k)) warn(w, `bodies["${k}"] no corresponde a ningún organismo`); });
  (f.rights || []).forEach((r, i) => { if (!["amplia", "recorta"].includes(r.dir)) err(w, `rights[${i}].dir inválido`); if (!r.h) err(w, `rights[${i}] sin título`); });
  (f.events || []).forEach((e, i) => {
    if (!isDate(e.d)) err(w, `events[${i}] fecha inválida "${e.d}"`);
    if (!EV_TYPES[e.t]) err(w, `events[${i}] tipo inválido "${e.t}"`);
    if (!e.nomap && !(Math.abs(e.lat) <= 90 && Math.abs(e.lon) <= 180)) err(w, `events[${i}] coordenadas inválidas`);
    if (!f.sample && !isUrl(e.u)) err(w, `events[${i}] sin fuente (u)`);
    if (!f.sample && e.c && byName[e.c] && !e.nomap && !e.disputed && !d3.geoContains(byName[e.c], [e.lon, e.lat])) warn(w, `events[${i}] "${e.h}": las coordenadas no caen en ${e.c}`);
  });
  for (let i = 1; i < (f.events || []).length; i++) if (f.events[i].d < f.events[i - 1].d) warn(w, `events no están en orden de fecha (${f.events[i].d})`);
  (f.cases || []).forEach((c, i) => {
    if (![1, 2, 3, 4].includes(c.ev)) err(w, `cases[${i}].ev inválido`);
    if (!c.who) err(w, `cases[${i}] sin "who" (quién lo afirma)`);
    if (c.ev > 1 && !c.missing && c.ev < 4) warn(w, `cases[${i}] sin "missing"`);
    if (c.ev === 4 && !c.debunk) err(w, `cases[${i}] conspirativo sin "debunk"`);
    if (!f.sample && !isUrl(c.u)) err(w, `cases[${i}] sin fuente (u)`);
  });
  if (!f.sample && !(f.failures || []).length) warn(w, "ficha real sin fallas ni falsas banderas");
  if (!f.sample) (ctx.MODUS || []).forEach(m => { if (!f.modus?.[m.k]) warn(w, `modus.${m.k} vacío (cómo operan)`); });
  if (!f.sample && !(f.insiders || []).length) warn(w, "ficha real sin denunciantes, topos ni desertores");
  (f.insiders || []).forEach((x, i) => {
    if (!["denunciante", "topo", "desertor"].includes(x.k)) err(w, `insiders[${i}].k inválido`);
    if (!["sale", "entra"].includes(x.dir)) err(w, `insiders[${i}].dir inválido (sale|entra)`);
    if (![1, 2, 3, 4].includes(x.ev)) err(w, `insiders[${i}].ev inválido`);
    if (!x.d || !x.h || !x.x || !x.who) err(w, `insiders[${i}] incompleto (d, h, x, who)`);
    if (!f.sample && !isUrl(x.u)) err(w, `insiders[${i}] sin fuente (u)`);
  });
  if (!f.sample && !f.practicas) warn(w, "ficha real sin \"practicas\" (qué hacen y a quién espían)");
  if (f.practicas) (ctx.PRACTICAS || []).forEach(m => { const v = f.practicas[m.k];
    if (!v) { warn(w, `practicas.${m.k} vacío`); return; }
    if (![0, 1, 2, 3, 4].includes(v.ev)) err(w, `practicas.${m.k}.ev inválido (0 a 4)`);
    if (!v.x) err(w, `practicas.${m.k} sin texto (x)`);
    if (!f.sample && v.ev > 0 && !isUrl(v.u)) err(w, `practicas.${m.k} sin fuente (u)`);
  });
  if (!f.sample) (ctx.DINERO || []).forEach(m => { if (!f.dinero?.[m.k]) warn(w, `dinero.${m.k} vacío (dinero y coberturas)`); });
  if (!f.sample && !(f.fondos || []).length) warn(w, "ficha real sin casos de dinero y coberturas");
  (f.fondos || []).forEach((x, i) => {
    if (!["presupuesto", "fachada", "banco", "crimen", "cobertura", "desvio"].includes(x.k)) err(w, `fondos[${i}].k inválido`);
    if (!["autor", "blanco"].includes(x.rol)) err(w, `fondos[${i}].rol inválido (autor|blanco)`);
    if (![1, 2, 3, 4].includes(x.ev)) err(w, `fondos[${i}].ev inválido`);
    if (!x.d || !x.h || !x.x || !x.who) err(w, `fondos[${i}] incompleto (d, h, x, who)`);
    if (!f.sample && !isUrl(x.u)) err(w, `fondos[${i}] sin fuente (u)`);
  });
  if (!f.sample && !(f.leaks || []).length) warn(w, "ficha real sin filtraciones ni desinformación");
  (f.leaks || []).forEach((x, i) => {
    if (!["filtracion", "accidental", "robo", "ocultamiento", "desinfo"].includes(x.k)) err(w, `leaks[${i}].k inválido`);
    if (!["autor", "blanco"].includes(x.rol)) err(w, `leaks[${i}].rol inválido (autor|blanco)`);
    if (![1, 2, 3, 4].includes(x.ev)) err(w, `leaks[${i}].ev inválido`);
    if (!x.d || !x.h || !x.x || !x.who) err(w, `leaks[${i}] incompleto (d, h, x, who)`);
    if (x.k === "ocultamiento" && !x.aquien) err(w, `leaks[${i}] ocultamiento sin "aquien"`);
    if (!f.sample && !isUrl(x.u)) err(w, `leaks[${i}] sin fuente (u)`);
  });
  (f.failures || []).forEach((x, i) => {
    if (!["falla", "falsa"].includes(x.k)) err(w, `failures[${i}].k inválido`);
    if (![1, 2, 3, 4].includes(x.ev)) err(w, `failures[${i}].ev inválido`);
    if (![1, 2, 3].includes(x.w)) err(w, `failures[${i}].w inválido (1–3)`);
    if (!x.why) err(w, `failures[${i}] sin "why" (por qué está o no en duda)`);
    if (!x.who) err(w, `failures[${i}] sin "who"`);
    if (!f.sample && !isUrl(x.u)) err(w, `failures[${i}] sin fuente (u)`);
  });
  Object.entries(f.interest || {}).forEach(([n, l]) => { if (!names.has(n)) err(w, `interest: país desconocido "${n}"`); if (![1, 2, 3].includes(l)) err(w, `interest["${n}"] fuera de 1–3`); });
  if (!f.sample) {
    const txt = JSON.stringify(f);
    if (/Texto de prueba|de prueba|\[DATO\]|\[LEY\]/.test(txt)) err(w, "ficha real con restos de contenido de prueba");
    (f.sources || []).forEach((s, i) => { if (!isUrl(s.u)) err(w, `sources[${i}] sin URL`); });
  }
});

// relaciones y explorar
ctx.RELACIONES.forEach((r, i) => { if (!ids.has(r.a) || !ids.has(r.b)) err("relaciones", `[${i}] id desconocido ${r.a}/${r.b}`); if (!ctx.REL_TYPES[r.t]) err("relaciones", `[${i}] tipo ${r.t}`); });
const seen = new Set(); ctx.RELACIONES.forEach(r => { const k = [r.a, r.b].sort().join("-"); if (seen.has(k)) warn("relaciones", "par repetido " + k); seen.add(k); });
ctx.ALIANZAS.forEach(a => a.members.forEach(n => { if (!names.has(n)) err("alianzas " + a.id, `país desconocido "${n}"`); }));
ctx.INFRA.forEach(x => { if (!ctx.INFRA_TYPES[x.t]) err("infra " + x.n, "tipo inválido"); });
ctx.EXPULSIONES.forEach((e, i) => { if (!ids.has(e.a) || !ids.has(e.b)) err("expulsiones", `[${i}] id desconocido`); });
const orgIds = new Set(ctx.ORGS_RED.map(o => o.id));
ctx.PERSONAS.forEach(p => [...p.w, ...p.s].forEach(o => { if (!orgIds.has(o)) err("personas " + p.n, `organismo desconocido "${o}"`); }));
ctx.ALERTS.forEach((a, i) => { if (!ids.has(a.target)) err("alertas", `[${i}] target desconocido`); if (!isDate(a.date)) err("alertas", `[${i}] fecha inválida`); });

// navegador
if (process.argv.includes("--browser")) {
  try {
    const out = execFileSync("python3", ["-I", path.join(__dirname, "browser_check.py"), root, ...PAISES.map(p => "p-" + p.id)], { encoding: "utf8" });
    out.trim().split("\n").filter(Boolean).forEach(l => l.startsWith("ERROR") ? errors.push("✗ navegador: " + l.slice(6)) : null);
  } catch (e) { errors.push("✗ navegador: no se pudo correr la prueba (" + e.message.split("\n")[0] + ")"); }
}

warns.forEach(m => console.log(m));
errors.forEach(m => console.log(m));
console.log(`\n${Object.keys(FICHAS).length} fichas (${real} reales) · ${errors.length} errores · ${warns.length} avisos`);
process.exit(errors.length ? 1 : 0);
