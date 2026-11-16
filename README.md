# Monitor de Espionaje

Los servicios de inteligencia del mundo: agencias y sus estructuras, marco legal y derechos civiles, operaciones históricas y actuales, casos controvertidos clasificados por evidencia, relaciones entre servicios y con empresas, y luchas de poder.

Sitio estático (HTML, CSS y JavaScript sin dependencias externas salvo d3-geo y topojson para los mapas). Se publica con GitHub Pages desde la rama `main`.

**Estado: esqueleto.** La estructura está completa; el contenido marcado "de prueba" es ficticio y se reemplaza país por país.

## Estructura
- `index.html`, `css/`, `js/`: interfaz.
- `data/meta.js`: fecha de corte, alertas, rubros, tipos de operación, escala de evidencia, tipos de relación.
- `data/paises.js`: los 35 países y sus organismos reales, agrupados para el organigrama.
- `data/relaciones.js`: vínculos entre servicios (cooperación, ambigua, enfrentamiento).
- `data/paises/<id>.js`: la ficha de cada país.
- `scripts/muestra.js`: genera fichas de prueba (no pisa las fichas reales).
- `vendor/`: d3-geo, d3-array y topojson-client. Cartografía: Natural Earth (`data/world.js`).
