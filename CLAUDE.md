# Monitor de Espionaje (monitorespionaje)

Sitio estático publicado con GitHub Pages desde `main` (raíz). Todo en español rioplatense neutro, con fechas ISO en los datos.
Responsable editorial: Franco Martín López. Proyecto hermano de Monitor de Conflictos (`conflictoglobal`), con la misma base técnica.

## Estado
Esqueleto: estructura completa y contenido de prueba. `MONITOR_META.skeleton = true` muestra la banda amarilla de aviso; se apaga cuando haya contenido real.
Las fichas de prueba llevan `"sample": true`. Al cargar contenido real de un país, reemplazá su archivo entero y quitá `sample`.

## Países (20)
- Núcleo: us, ru, cn, uk, il, fr, de, ir, kp, ar, va
- Muy relevantes: ua, tr, pk, in, sa
- Relevantes en su región o por una habilidad: cu, ae, br, kr
- Canadá, Australia y Nueva Zelanda entran como Cinco Ojos dentro de las fichas de us y uk.

## Formato de una ficha (`data/paises/<id>.js`)
`(window.FICHAS = window.FICHAS || {})["<id>"] = { ... }` con:
- `updated`, `summary` (párrafos), `keyFacts` [{l, v, n}], `power` {humana, senales, ciber, imagenes, encubierta, contra} de 1 a 5, `priorities` [{h, x}], `focos` [texto].
- `bodies` {código: {how, since, staff, budget, tech[], where[]}}: un objeto por organismo de `data/paises.js`, con el mismo código.
- `civil` [texto]: relación con el gobierno civil.
- `law` {domestic[], foreign[], oversight[]}.
- `rights` [{d, dir: "amplia"|"recorta", area, h, x}]: avance sobre los derechos civiles. `amplia` = más poder de vigilancia; `recorta` = más controles.
- `events` [{d, lat, lon, t, h, x, nomap?}]: mapa de operaciones. `t` ∈ encubierta, sabotaje, ciber, senales, humana, contra. Agregar siempre al final.
- `timeline` [{era, d, h, x, now?}]: cronología histórica.
- `cases` [{ev, h, d, ilegal, x, who, missing, debunk}]. `ev`: 1 demostrado · 2 con sustento sólido · 3 denuncia sin pruebas firmes · 4 teoría conspirativa. `who` = quién lo afirma; `missing` = qué falta para subir de categoría; `debunk` (sólo ev 4) = de dónde salió y qué la desmiente.
- `companies` [{n, c: "nacional"|"extranjera", rubro, rel, x}].
- `struggles` [{a, b, k, stake, state, x}]: luchas de poder (internas, entre agencias, con otros poderes, con la política y la economía).
- `sources` [{t, u}].

## Reglas editoriales
- No copiar frases de las fuentes: redactar con palabras propias.
- Cada caso dice quién lo afirma. No atribuir una operación a un Estado sin una fuente que lo haga.
- Si un caso cambia de categoría de evidencia, actualizar `ev` y anotarlo en `CHANGELOG.md`.
- Cifras (presupuesto, personal) siempre con fuente y fecha; si son estimaciones, decirlo.

## Actualización semanal
Se define cuando el contenido real esté cargado (alertas, eventos, casos y relaciones). Hasta entonces, no hay tarea programada.
