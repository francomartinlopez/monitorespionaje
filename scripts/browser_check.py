"""Abre el sitio en Chromium y recorre todas las rutas buscando errores de JavaScript.
Lo llama scripts/validate.js --browser. Uso directo: python3 scripts/browser_check.py <raíz> [rutas extra...]"""
import asyncio, sys
from playwright.async_api import async_playwright

ROUTES = ["inicio", "metodologia", "poder", "bloques", "alianzas", "infraestructura", "software-espia", "expulsiones",
          "personas", "comparar/us/cn", "cronologia", "archivo", "como-funciona"]

async def main(root, extra):
    async with async_playwright() as p:
        kw = {}
        import shutil
        chrome = shutil.which("google-chrome") or shutil.which("chromium")
        if chrome: kw["executable_path"] = chrome
        b = await p.chromium.launch(**kw)
        pg = await b.new_page(viewport={"width": 1280, "height": 900})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        for r in ROUTES + extra:
            before = len(errs)
            await pg.goto(f"file://{root}/index.html#{r}")
            await pg.wait_for_timeout(500)
            empty = await pg.evaluate("document.getElementById('app').children.length === 0")
            if empty: errs.append(f"#{r}: la página quedó vacía")
            for e in errs[before:]: print(f"ERROR #{r}: {e}")
        await b.close()
        print(f"OK {len(ROUTES) + len(extra)} rutas")

asyncio.run(main(sys.argv[1], sys.argv[2:]))
