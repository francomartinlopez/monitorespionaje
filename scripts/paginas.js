// Genera una página estática por país (p/<id>.html) y sitemap.xml.
// Sirven para que buscadores y redes sociales vean título, resumen e imagen de cada ficha;
// quien las abre en un navegador pasa enseguida a la ficha interactiva (#p-<id>).
// Uso: node scripts/paginas.js          → escribe los archivos
//      node scripts/paginas.js --check  → sale con código 1 si alguna página está desactualizada
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, ".."), BASE = "https://francomartinlopez.github.io/monitorespionaje/";
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
["data/meta.js", "data/paises.js"].forEach(load);
fs.readdirSync(path.join(root, "data/paises")).filter(f => f.endsWith(".js")).sort().forEach(f => load("data/paises/" + f));
const { PAISES, FICHAS } = ctx;
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s).replace(/<[^>]+>/g, "");
const cut = (s, n) => { s = strip(s); if (s.length <= n) return s; const t = s.slice(0, n); return t.slice(0, t.lastIndexOf(" ")) + "…"; };

const out = {};
PAISES.forEach(p => {
  const f = FICHAS[p.id]; if (!f) return;
  const sum = (Array.isArray(f.summary) ? f.summary : [f.summary]).map(strip);
  const desc = cut(sum[0], 200), url = `${BASE}p/${p.id}.html`, title = `${p.name}: servicios de inteligencia · Monitor de Espionaje`;
  const ag = p.agencies.map(a => `<li>${esc(a.name)} (${esc(a.code)})</li>`).join("\n");
  out[`p/${p.id}.html`] = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Monitor de Espionaje">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE}img/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="../img/favicon.svg" type="image/svg+xml">
<script>location.replace("../#p-${p.id}");</script>
<style>body{background:#040605;color:#cfe0d6;font:16px/1.6 Georgia,serif;max-width:720px;margin:40px auto;padding:0 20px}a{color:#5fe08f}</style>
</head>
<body>
<p><a href="../#p-${p.id}">Abrir la ficha interactiva de ${esc(p.name)}</a></p>
<h1>${esc(p.name)}: servicios de inteligencia</h1>
<p>Ficha al ${esc(f.updated)}.</p>
${sum.map(x => `<p>${esc(x)}</p>`).join("\n")}
<h2>Organismos</h2>
<ul>
${ag}
</ul>
<p><a href="../">Monitor de Espionaje</a></p>
</body>
</html>
`;
});
out["sitemap.xml"] = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${BASE}</loc></url>
${PAISES.filter(p => FICHAS[p.id]).map(p => `<url><loc>${BASE}p/${p.id}.html</loc><lastmod>${FICHAS[p.id].updated}</lastmod></url>`).join("\n")}
</urlset>
`;
out["robots.txt"] = `User-agent: *\nAllow: /\nSitemap: ${BASE}sitemap.xml\n`;

const check = process.argv.includes("--check"); let stale = [];
fs.mkdirSync(path.join(root, "p"), { recursive: true });
Object.entries(out).forEach(([f, s]) => {
  const fp = path.join(root, f), old = fs.existsSync(fp) ? fs.readFileSync(fp, "utf8") : null;
  if (old === s) return;
  if (check) stale.push(f); else fs.writeFileSync(fp, s);
});
if (check) { if (stale.length) { console.log("Páginas desactualizadas (correr node scripts/paginas.js): " + stale.join(", ")); process.exit(1); } console.log("Páginas al día"); }
else console.log(Object.keys(out).length + " archivos al día");
