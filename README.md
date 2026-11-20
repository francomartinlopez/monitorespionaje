# Monitor de Espionaje

Los servicios de inteligencia del mundo: agencias y sus estructuras, marco legal y derechos civiles, operaciones históricas y actuales, casos controvertidos clasificados por evidencia, relaciones entre servicios y con empresas, y luchas de poder.

Sitio estático (HTML, CSS y JavaScript sin dependencias externas salvo d3-geo y topojson para los mapas, incluidos en `vendor/`). No carga nada de otros servidores: las fuentes están en `fonts/`. Se publica con GitHub Pages desde la rama `main`.

Sitio: https://francomartinlopez.github.io/monitorespionaje/

**Estado:** desde el 16 de noviembre de 2026 todo el contenido es real y lleva fuente: 60 fichas de países, alertas, relaciones, mapa de bloques y las secciones de Explorar.

## Estructura
- `index.html`, `css/`, `js/`: interfaz.
- `data/meta.js`: fecha de corte, alertas, rubros, tipos de operación, escala de evidencia, tipos de relación.
- `data/paises.js`: los 60 países y sus organismos reales, agrupados para el organigrama.
- `data/relaciones.js`: vínculos entre servicios (cooperación, ambigua, enfrentamiento), con explicación y fuente.
- `data/explorar.js`: bloques, alianzas, infraestructura, software espía, expulsiones, red de personas, archivo y "Cómo funciona".
- `data/paises/<id>.js`: la ficha de cada país.
- `scripts/validate.js`: controla el formato y las fuentes de todos los datos; con `--browser` abre todas las rutas.
- `scripts/muestra.js`: genera fichas de prueba para desarrollo (no pisa las fichas reales).
- `scripts/paginas.js`: genera `p/<id>.html` (una página estática por país, con título, resumen y vista previa para redes y buscadores, que pasa a la ficha interactiva), `sitemap.xml` y `robots.txt`. Correrlo después de cambiar una ficha; el validador avisa si quedaron desactualizadas.
- `SEGUIMIENTO.md`: causas en curso que revisa la actualización semanal. `CHANGELOG.md`: registro de cambios.
- `.github/workflows/`: `validar.yml` corre el validador en cada subida; `enlaces.yml` revisa una vez por semana que las fuentes sigan en línea.
- `fonts/`: Barlow Condensed, IBM Plex Sans, IBM Plex Mono y Source Serif 4 (SIL OFL).
- `vendor/`: d3-geo, d3-array y topojson-client. Cartografía: Natural Earth (`data/world.js`).


## Secciones
Panorama (alertas, mapa de relaciones, países y "Cómo funciona el espionaje"), una ficha por país con enlaces directos a cada caso (`#p-ar/casos/2`), buscador (`#buscar`) y Explorar, agrupado en: el mapa del poder (Quién manda, bloques, alianzas, comparar), operaciones (prácticas, asesinatos y secuestros, infraestructura, software espía, expulsiones), personas y secretos (filtraciones, espías que llegaron al poder, red de personas, mitos) y herramientas y archivo (poder y control, cronología, archivo). La metodología está en `#metodologia`.

## Uso local
Abrir `index.html` en el navegador; no hace falta servidor. Antes de subir:

```
node scripts/paginas.js
node scripts/validate.js --browser
```

## Licencia
Textos y datos: CC BY 4.0. Código: MIT. Detalle en `LICENSE`.
