# Monitor de Espionaje (monitorespionaje)

Sitio estático publicado con GitHub Pages desde `main` (raíz). Todo en español rioplatense neutro, con fechas ISO en los datos.
Responsable editorial: Franco Martín López. Proyecto hermano de Monitor de Conflictos (`conflictoglobal`), con la misma base técnica.

## Estado
Desde el 2026-11-16 todo el contenido es real: 57 fichas, alertas, relaciones y Explorar. `MONITOR_META.skeleton` está en false. El validador rechaza cualquier dato con `sample` fuera de las fichas y exige fuente (`u`) en relaciones, alertas, software espía, expulsiones y archivo.
Las fichas de prueba llevan `"sample": true`. Al cargar contenido real de un país, reemplazá su archivo entero y quitá `sample`.

## Países (57)
- Núcleo: us, ru, cn, uk, il, fr, de, ir, kp, ar, va
- Muy relevantes: ua, tr, pk, in, sa
- Muy relevantes (suma de noviembre de 2026): tw, jp, eg, mx, pl, it, es, au, ca
- Relevantes en su región o por una habilidad: cu, ae, br, kr, vn, ch, za, sg, hu, nl, by, ve, rw, se, gr, cy, be, ro, ge, md, az, qa, co, af, kz, sy, jo, dz, at, dk, rs, bd
- Nueva Zelanda entra como Cinco Ojos dentro de las fichas de us y uk.

## Formato de una ficha (`data/paises/<id>.js`)
`(window.FICHAS = window.FICHAS || {})["<id>"] = { ... }` con:
- `updated`, `summary` (párrafos), `keyFacts` [{l, v, n}], `power` {humana, senales, ciber, imagenes, encubierta, contra} de 1 a 5 (escala en `POWER_SCALE` de `data/meta.js`), `powerWhy` {mismo rubro: una frase que justifica el valor; obligatorio en fichas reales}, `priorities` [{h, x}], `focos` [texto].
- `bodies` {código: {how, since, staff, budget, tech[], where[]}}: un objeto por organismo de `data/paises.js`, con el mismo código.
- `civil` [texto]: relación con el gobierno civil.
- `law` {domestic[], foreign[], oversight[]}.
- `rights` [{d, dir: "amplia"|"recorta", area, h, x}]: avance sobre los derechos civiles. `amplia` = más poder de vigilancia; `recorta` = más controles.
- `events` [{d, lat, lon, c?, t, h, x, u, st, ev?, nomap?}]: mapa de operaciones. `c` = país donde ocurrió (nombre de `data/world.js`, el validador controla que las coordenadas caigan ahí); `u` y `st` = URL y nombre de la fuente (obligatorios en fichas reales); `ev` = nivel de evidencia de la atribución. `t` ∈ encubierta, sabotaje, ciber, senales, humana, contra. Agregar siempre al final.
- `interest` {nombre de país en data/world.js: 1 bajo · 2 medio · 3 alto}: interés estratégico del servicio por país, para la capa "Interés estratégico" del mapa de operaciones. La capa "Intensidad de operaciones" se calcula sola a partir de `events`.
- `timeline` [{era, d, h, x, now?}]: cronología histórica.
- `cases` [{ev, h, d, ilegal, x, who, missing, debunk, u, st}]. `u`/`st` = fuente principal (obligatoria en fichas reales). `ev`: 1 demostrado · 2 con sustento sólido · 3 denuncia sin pruebas firmes · 4 teoría conspirativa. `who` = quién lo afirma; `missing` = qué falta para subir de categoría; `debunk` (sólo ev 4) = de dónde salió y qué la desmiente.
- `failures` [{k: "falla"|"falsa", d, h, x, ev, why, w, wx?, who, u, st}]: fallas de inteligencia y operaciones de falsa bandera. `ev` = misma escala de evidencia que los casos; `why` = por qué está o no en duda; `w` = cuánta evidencia hay sobre esa duda (1 escasa · 2 parcial · 3 abundante) y `wx` una línea que lo explica.
- `modus` {embajadas, campo, oficina, reclutamiento, tecnica, enlaces}: cómo operan en general (cobertura en embajadas, gente en sede y en campo, reclutamiento, medios técnicos, aliados). Un párrafo de 2 o 3 frases por aspecto; los nombres están en `MODUS` de `data/meta.js`.
- `insiders` [{k: "denunciante"|"topo"|"desertor", dir: "sale"|"entra", d, n, h, x, cargo, hacia, fin, ev, who, u, st}]: denunciantes, topos o dobles agentes y desertores. `sale` = alguien de este país que reveló secretos o trabajó para otro; `entra` = alguien de otro país que trabajó para este servicio. `n` = nombre; `cargo` = dónde estaba; `hacia` = a quién pasó la información; `fin` = qué pasó después.
- `leaks` [{k: "filtracion"|"accidental"|"robo"|"ocultamiento"|"desinfo", rol: "autor"|"blanco", d, h, x, obj, aquien?, como?, ev, who, u, st}]: filtraciones intencionales y no intencionales, robo de información, ocultamiento al público y a las autoridades civiles, y desinformación. `rol` = si el país lo hizo o lo sufrió; `obj` = objetivo o efecto; en ocultamientos, `aquien` (a quién se ocultó, obligatorio) y `como` (cómo salió a la luz).
- `practicas` {clave: {ev, x, u?, st?}} para las claves de `PRACTICAS` en `data/meta.js`: a quién espían (propios, politicos, periodistas, activistas, aliados, rivales), qué métodos usan (extorsion, asesinato, sabotaje, tortura, secuestro), cómo influyen en otras sociedades (propaganda, conflictos, cultural —cultural, religiosa, ideológica—, golpes, elecciones, partidos), a quién usan como agentes (diaspora, empresarios, religiosos) y qué dan a otros (armas, inteligencia, tecnologia, entrenamiento). `ev` 0 = sin casos documentados encontrados; 1 a 4 = escala de evidencia del caso más firme; con `ev` > 0 la fuente `u` es obligatoria. Alimenta la tabla #practicas de Explorar (las fichas de prueba no se pintan).
- `dinero` {presupuesto, uso, ingresos, empresas, bancos, crimen, cobertura}: cómo manejan el dinero (cuánto da el Estado y cuánto se sabe, en qué se gasta, otros ingresos, empresas propias y de fachada, bancos, crimen organizado, ONG y organizaciones de cobertura). Un párrafo por aspecto; nombres en `DINERO` de `data/meta.js`.
- `fondos` [{k: "presupuesto"|"fachada"|"banco"|"crimen"|"cobertura"|"desvio", rol: "autor"|"blanco", d, h, x, monto?, obj?, ev, who, u, st}]: casos documentados de dinero y coberturas. `rol` = si el servicio de este país lo hizo o lo sufrió.
- `events[].disputed` = true en territorios disputados (por ejemplo Crimea), para que el validador no compare con el mapa y la capa de intensidad use `c`.
- `companies` [{n, c: "nacional"|"extranjera", rubro, rel, x}].
- `struggles` [{a, b, k, stake, state, x}]: luchas de poder (internas, entre agencias, con otros poderes, con la política y la economía).
- `sources` [{t, u}].

## Alertas y relaciones
- `ALERTS` en `data/meta.js`: {level, tag, date, countries, target, title, text, u, st}. Hechos de los últimos días con fuente.
- `RELACIONES` en `data/relaciones.js`: [a, b, t, x, u, st]; `x` explica la clasificación.

## Secciones de Explorar (`data/explorar.js`, interfaz en `js/explorar.js`)
- `BLOQUES`: mapa general en cinco bloques (occidental, euroasiático, autónomos, neutrales, zonas abiertas). `paises` = [nombre de `data/world.js`, bloque, grado n|c|p, nota?]. Clasificación editorial; la nota explica los casos discutibles. Todo país del monitor debe tener bloque.
- `ALIANZAS`: miembros por nombre de país de `data/world.js`. Reales.
- `INFRA`: instalaciones de vigilancia con tipo, coordenadas `ll` [lon, lat], quién la opera y nivel de evidencia `ev`. `lab: "l"` y `dy` acomodan la etiqueta.
- `SPYWARE`: proveedores y `flows` {p, c (país de data/world.js), ll, ev, x, u, st}: ventas o usos documentados.
- `EXPULSIONES`: `{y, a, b, n, k: "expulsion"|"canje", d, x, u, st}` con ids de país; `a` expulsa a diplomáticos de `b`. Sólo pares entre países del monitor.
- `ORGS_RED` y `PERSONAS`: red de personas; `w` = para quién trabajaba, `s` = hacia quién pasó información.
- `ARCHIVO`: `fondos` y `docs` {d, t, c, k, x, u}.
- `CICLO`, `INTS`, `GLOSARIO`: página "Cómo funciona".
- Rutas: #bloques[/<id>], #practicas, #alianzas, #infraestructura, #software-espia, #expulsiones, #personas, #comparar/<a>/<b>, #cronologia, #archivo, #como-funciona.

## Validador
`node scripts/validate.js` controla el formato de todas las fichas y de los datos de Explorar; `--browser` además abre todas las rutas en Chromium. Nunca subir con el validador en rojo.

## Guía de estilo
- Español rioplatense neutro, frases cortas (menos de 25 palabras), voz activa. Nada de adjetivos de juicio ("siniestro", "heroico").
- Organismos: primera mención con nombre completo en castellano y sigla (`Agencia Central de Inteligencia (CIA)`), después la sigla. Siglas en su idioma original.
- Personas: nombre y apellido la primera vez; cargo y fecha si importa.
- Fechas en los datos en ISO (`AAAA-MM-DD`, `AAAA-MM` o `AAAA`); en el texto, "en 2013", "en marzo de 2018".
- Cifras: siempre con fecha y fuente; si es estimación, decir de quién ("según estimaciones de prensa").
- Largos: `summary` 2 a 4 párrafos; `x` de un hecho 1 o 2 frases; `x` de un caso 2 a 4 frases; `bodies.how` 2 o 3 frases.
- Atribuciones: decir siempre quién atribuye (un gobierno, un tribunal, una empresa privada, un medio) y nunca afirmar una autoría sin fuente.

## Reglas editoriales
- No copiar frases de las fuentes: redactar con palabras propias.
- Cada caso dice quién lo afirma. No atribuir una operación a un Estado sin una fuente que lo haga.
- Si un caso cambia de categoría de evidencia, actualizar `ev` y anotarlo en `CHANGELOG.md`.
- Cifras (presupuesto, personal) siempre con fuente y fecha; si son estimaciones, decirlo.

## Actualización semanal
Se define cuando el contenido real esté cargado (alertas, eventos, casos y relaciones). Hasta entonces, no hay tarea programada.
