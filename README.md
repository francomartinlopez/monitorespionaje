# Monitor de Espionaje

Los servicios de inteligencia del mundo: agencias y sus estructuras, marco legal y derechos civiles, operaciones históricas y actuales, casos controvertidos clasificados por evidencia, relaciones entre servicios y con empresas, y luchas de poder.

Sitio estático (HTML, CSS y JavaScript sin dependencias externas salvo d3-geo y topojson para los mapas). Se publica con GitHub Pages desde la rama `main`.

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
- `vendor/`: d3-geo, d3-array y topojson-client. Cartografía: Natural Earth (`data/world.js`).
