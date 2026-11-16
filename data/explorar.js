// Datos de las secciones de "Explorar": alianzas, infraestructura, software espía, expulsiones,
// personas, archivo y la página "Cómo funciona".
// Todo es real. Cada dato lleva su fuente en u y st cuando el formato lo permite.

// ---------- alianzas de inteligencia (miembros por nombre de país en data/world.js) ----------
(function () {
  const five = ["United States of America", "United Kingdom", "Canada", "Australia", "New Zealand"];
  const nine = five.concat(["Denmark", "France", "Netherlands", "Norway"]);
  const fourteen = nine.concat(["Germany", "Belgium", "Italy", "Spain", "Sweden"]);
  const eu = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"];
  const nato = ["Albania", "Belgium", "Bulgaria", "Canada", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Turkey", "United Kingdom", "United States of America"];
  const sco = ["China", "Russia", "India", "Pakistan", "Iran", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan", "Belarus"];
  window.ALIANZAS = [
    { id: "cinco", n: "Cinco Ojos", c: "#6af59a", members: five, since: "1946", kind: "Señales",
      x: "Acuerdo de intercambio de inteligencia de señales nacido del pacto UKUSA entre EE.UU. y el Reino Unido, ampliado a Canadá, Australia y Nueva Zelanda. Es la alianza de inteligencia más profunda del mundo." },
    { id: "nueve", n: "Nueve Ojos", c: "#4fd1e8", members: nine, since: "s/d", kind: "Señales",
      x: "Los Cinco Ojos más Dinamarca, Francia, Países Bajos y Noruega, según documentos filtrados por Snowden. Comparten menos que el núcleo." },
    { id: "catorce", n: "Catorce Ojos", c: "#c9a7ff", members: fourteen, since: "s/d", kind: "Señales",
      x: "También llamado SIGINT Seniors Europe: los Nueve Ojos más Alemania, Bélgica, Italia, España y Suecia." },
    { id: "berna", n: "Club de Berna", c: "#ffd23f", members: eu.concat(["Norway", "Switzerland", "United Kingdom"]), since: "1971", kind: "Seguridad interior",
      x: "Foro informal de los servicios de seguridad interior europeos. Su composición exacta no es pública: el mapa muestra la aproximación habitual (Unión Europea, Noruega, Suiza y Reino Unido)." },
    { id: "otan", n: "OTAN", c: "#ff9433", members: nato, since: "1949", kind: "Militar",
      x: "Alianza militar con estructuras propias de inteligencia, que reúnen y comparten la información que aportan los países miembros." },
    { id: "ocs", n: "Organización de Cooperación de Shanghái", c: "#ff4d3d", members: sco, since: "2001", kind: "Seguridad regional",
      x: "Bloque euroasiático liderado por China y Rusia. Su Estructura Regional Antiterrorista, con sede en Taskent, coordina información sobre lo que sus miembros llaman terrorismo, separatismo y extremismo." }
  ];
})();

// ---------- infraestructura de vigilancia ----------
window.INFRA_TYPES = {
  escucha: { n: "Estación de escucha", c: "#4fd1e8" },
  satelital: { n: "Estación satelital", c: "#c9a7ff" },
  base: { n: "Base en el exterior", c: "#ff9433" },
  cable: { n: "Cables submarinos", c: "#ffd23f" }
};
window.INFRA = [
  { n: "Pine Gap", t: "satelital", ll: [133.74, -23.8], who: "EE.UU. y Australia", ev: 1, x: "Instalación conjunta en el centro de Australia que controla satélites de señales y aporta datos a operaciones militares." },
  { n: "Menwith Hill", t: "satelital", dy: -6, ll: [-1.69, 54.01], who: "EE.UU. (NSA) y Reino Unido", ev: 1, x: "La mayor estación de la NSA fuera de EE.UU., en el norte de Inglaterra, bajo bandera de la RAF." },
  { n: "Ayios Nikolaos", t: "escucha", ll: [33.88, 35.09], who: "Reino Unido", ev: 1, x: "Estación de señales británica en la Base Soberana de Dhekelia, en Chipre, con vista a Medio Oriente." },
  { n: "Waihopai", t: "satelital", ll: [173.74, -41.58], who: "Nueva Zelanda (GCSB)", ev: 1, x: "Estación de interceptación satelital de Nueva Zelanda, parte de la red de los Cinco Ojos." },
  { n: "Misawa", t: "escucha", ll: [141.37, 40.7], who: "EE.UU.", ev: 1, x: "Base aérea en el norte de Japón con una gran estación de señales estadounidense." },
  { n: "Bad Aibling", t: "satelital", ll: [12.01, 47.86], who: "Alemania (BND), antes EE.UU.", ev: 1, x: "Ex estación de la NSA en Baviera, traspasada al BND; quedó en el centro del escándalo de espionaje a socios europeos." },
  { n: "Lourdes", t: "escucha", lab: "l", dy: -6, ll: [-82.47, 22.98], who: "URSS y Rusia (cerrada en 2002)", ev: 1, x: "La mayor estación de escucha soviética fuera de la URSS, a unos 250 km de la costa de Florida." },
  { n: "Bejucal", t: "escucha", dy: 6, ll: [-82.39, 22.93], who: "China (señalada por medios de EE.UU.)", ev: 2, x: "Instalación en Cuba que la prensa estadounidense, citando a funcionarios, vinculó con la inteligencia china en 2023. Cuba y China lo niegan." },
  { n: "Yibuti", t: "base", ll: [43.1, 11.57], who: "EE.UU. y China, entre otros", ev: 1, x: "Junto al estrecho de Bab el-Mandeb conviven la base estadounidense Camp Lemonnier y la primera base militar china en el exterior." },
  { n: "Bude", t: "cable", lab: "l", ll: [-4.55, 50.83], who: "Reino Unido (GCHQ)", ev: 1, x: "Estación del GCHQ en Cornualles, cerca del aterrizaje de cables transatlánticos; los documentos de Snowden la vincularon con la interceptación masiva de cables." },
  { n: "Marsella", t: "cable", ll: [5.37, 43.3], who: "Nodo comercial (Francia)", ev: 1, u: "https://en.wikipedia.org/wiki/2Africa", st: "Wikipedia: 2Africa", x: "Uno de los grandes puntos de aterrizaje de cables del Mediterráneo. Allí llega 2Africa, el cable que rodea el continente africano." },
  { n: "Fortaleza", t: "cable", ll: [-38.54, -3.72], who: "Nodo comercial (Brasil)", ev: 1, u: "https://en.wikipedia.org/wiki/EllaLink", st: "Wikipedia: EllaLink", x: "Punto de llegada de EllaLink, el cable directo entre Portugal y Brasil. Uno de sus objetivos fue evitar el paso por EE.UU. y la recolección de la NSA." },
  { n: "Singapur", t: "cable", ll: [103.8, 1.35], who: "Nodo comercial (Singapur)", ev: 1, u: "https://en.wikipedia.org/wiki/SEA-ME-WE_3", st: "Wikipedia: SEA-ME-WE 3", x: "En Tuas aterrizan cables entre Europa, Medio Oriente y Asia, como SEA-ME-WE 3. Es un nodo clave entre el Índico y el Pacífico." }
];

// ---------- mercado del software espía ----------
window.SPYWARE = {
  providers: [
    { id: "nso", n: "NSO Group", tool: "Pegasus", ll: [34.84, 32.16], country: "Israel", x: "El programa espía más conocido: infecta teléfonos sin que el usuario toque nada. Incluido en la lista negra comercial de EE.UU. en 2021." },
    { id: "candiru", n: "Candiru", tool: "DevilsTongue", ll: [34.78, 32.08], country: "Israel", x: "Proveedor de software espía para Windows y teléfonos, también en la lista negra de EE.UU. desde 2021." },
    { id: "paragon", n: "Paragon Solutions", tool: "Graphite", ll: [34.8, 32.1], country: "Israel (hoy de capital estadounidense)", x: "Fundada por ex oficiales israelíes y comprada por un fondo de EE.UU. en 2024." },
    { id: "intellexa", n: "Intellexa / Cytrox", tool: "Predator", ll: [23.73, 37.98], country: "Consorcio con base en Grecia y otros países", x: "Alianza de empresas sancionada por el Tesoro de EE.UU. en 2024; en el centro del escándalo de escuchas en Grecia." },
    { id: "ht", n: "Hacking Team", tool: "RCS", ll: [9.19, 45.46], country: "Italia", x: "Empresa de Milán cuyos correos y clientes quedaron expuestos tras un hackeo en 2015." },
    { id: "finfisher", n: "FinFisher", tool: "FinSpy", ll: [11.58, 48.14], country: "Alemania", x: "Proveedor alemán que cerró por insolvencia en 2022, en medio de una investigación por exportaciones ilegales." }
  ],
  // ventas documentadas: p = proveedor, c = país cliente (data/world.js), ev = nivel de evidencia
  flows: [
    { p: "nso", c: "Mexico", ll: [-99.1, 19.4], ev: 1, x: "El gobierno de México compró Pegasus; se usó contra periodistas, activistas y opositores.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Saudi Arabia", ll: [46.7, 24.7], ev: 2, x: "Pegasus se usó contra el entorno de Jamal Khashoggi, según Citizen Lab y Amnistía.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "United Arab Emirates", ll: [54.4, 24.5], ev: 2, x: "El activista Ahmed Mansoor recibió un ataque con Pegasus en 2016, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "India", ll: [77.2, 28.6], ev: 2, x: "El Proyecto Pegasus halló periodistas y opositores indios entre los blancos.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Hungary", ll: [19.04, 47.5], ev: 1, x: "El gobierno húngaro admitió en 2021 haber comprado Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Poland", ll: [21.0, 52.23], ev: 1, x: "El gobierno polaco confirmó en 2024 su uso contra cientos de personas entre 2017 y 2022.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Spain", ll: [-3.7, 40.42], ev: 1, x: "El CNI admitió haber espiado con orden judicial a 18 independentistas catalanes (Catalangate).", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Morocco", ll: [-6.84, 34.02], ev: 2, x: "El Proyecto Pegasus atribuyó a Marruecos ataques contra periodistas y políticos, incluso en Francia.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Rwanda", ll: [30.06, -1.95], ev: 2, x: "Familiares de Paul Rusesabagina fueron blanco de Pegasus, según el Proyecto Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "El Salvador", ll: [-89.2, 13.7], ev: 2, x: "Citizen Lab halló decenas de periodistas salvadoreños infectados en 2020 y 2021.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Jordan", ll: [35.93, 31.95], ev: 2, x: "Activistas y periodistas jordanos fueron infectados, según Access Now y Citizen Lab.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "nso", c: "Bahrain", ll: [50.58, 26.22], ev: 2, x: "Activistas bareiníes fueron infectados, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia: Pegasus (spyware)" },
    { p: "candiru", c: "Spain", ll: [-3.7, 40.42], ev: 2, x: "Citizen Lab halló Candiru en dispositivos de independentistas catalanes en 2022.", u: "https://en.wikipedia.org/wiki/Candiru_(spyware_company)", st: "Wikipedia: Candiru (spyware company)" },
    { p: "candiru", c: "Saudi Arabia", ll: [46.7, 24.7], ev: 3, x: "Cliente probable según Citizen Lab, que no lo pudo confirmar.", u: "https://en.wikipedia.org/wiki/Candiru_(spyware_company)", st: "Wikipedia: Candiru (spyware company)" },
    { p: "candiru", c: "United Arab Emirates", ll: [54.4, 24.5], ev: 3, x: "Cliente probable según Citizen Lab.", u: "https://en.wikipedia.org/wiki/Candiru_(spyware_company)", st: "Wikipedia: Candiru (spyware company)" },
    { p: "candiru", c: "Uzbekistan", ll: [69.24, 41.3], ev: 3, x: "Cliente probable según investigaciones de Citizen Lab y Microsoft.", u: "https://en.wikipedia.org/wiki/Candiru_(spyware_company)", st: "Wikipedia: Candiru (spyware company)" },
    { p: "paragon", c: "Italy", ll: [12.5, 41.9], ev: 1, x: "Un comité parlamentario confirmó en 2025 que el gobierno usó Graphite contra activistas; Paragon cortó el contrato.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "Canada", ll: [-79.38, 43.65], ev: 3, x: "Citizen Lab señaló posibles vínculos con la Policía Provincial de Ontario.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "Australia", ll: [149.13, -35.28], ev: 3, x: "Despliegue sospechado por Citizen Lab en 2025.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "Denmark", ll: [12.57, 55.68], ev: 3, x: "Despliegue sospechado por Citizen Lab en 2025.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "Cyprus", ll: [33.37, 35.17], ev: 3, x: "Despliegue sospechado por Citizen Lab en 2025.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "Singapore", ll: [103.82, 1.35], ev: 3, x: "Despliegue sospechado por Citizen Lab en 2025.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "paragon", c: "United States of America", ll: [-77.04, 38.9], ev: 1, x: "El Servicio de Inmigración y Control de Aduanas (ICE) firmó un contrato con Paragon.", u: "https://en.wikipedia.org/wiki/Paragon_Solutions", st: "Wikipedia: Paragon Solutions" },
    { p: "intellexa", c: "Greece", ll: [23.73, 37.98], ev: 2, x: "Predator se usó contra el opositor Nikos Androulakis y periodistas; el gobierno niega haberlo comprado.", u: "https://en.wikipedia.org/wiki/Cytrox", st: "Wikipedia: Cytrox" },
    { p: "intellexa", c: "Egypt", ll: [31.24, 30.04], ev: 2, x: "Predator infectó al político Ayman Nour en 2021, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/Cytrox", st: "Wikipedia: Cytrox" },
    { p: "intellexa", c: "Vietnam", ll: [105.85, 21.03], ev: 2, x: "Los Predator Files de 2023 vincularon a Vietnam con ataques contra funcionarios de la UE y EE.UU.", u: "https://en.wikipedia.org/wiki/Cytrox", st: "Wikipedia: Cytrox" },
    { p: "intellexa", c: "Sudan", ll: [32.53, 15.6], ev: 2, x: "Las Fuerzas de Apoyo Rápido recibieron tecnología de Intellexa, según los Predator Files.", u: "https://en.wikipedia.org/wiki/Cytrox", st: "Wikipedia: Cytrox" },
    { p: "intellexa", c: "Angola", ll: [13.23, -8.84], ev: 3, x: "Cliente señalado por investigaciones de 2023.", u: "https://en.wikipedia.org/wiki/Cytrox", st: "Wikipedia: Cytrox" },
    { p: "ht", c: "Mexico", ll: [-99.1, 19.4], ev: 1, x: "El mayor cliente de Hacking Team, según los correos filtrados en 2015.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Italy", ll: [12.5, 41.9], ev: 1, x: "Servicios y policías italianos figuran entre los clientes filtrados.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Morocco", ll: [-6.84, 34.02], ev: 1, x: "Cliente en los documentos filtrados en 2015.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Sudan", ll: [32.53, 15.6], ev: 1, x: "Ventas a Sudán pese al embargo, según los documentos filtrados.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Ethiopia", ll: [38.75, 9.03], ev: 1, x: "Usado contra periodistas etíopes en el exterior, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Kazakhstan", ll: [71.45, 51.17], ev: 1, x: "Cliente en los documentos filtrados en 2015.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Russia", ll: [37.62, 55.75], ev: 1, x: "Venta a través de una empresa intermediaria rusa, según los documentos filtrados.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "South Korea", ll: [126.98, 37.57], ev: 1, x: "El Servicio Nacional de Inteligencia figura como cliente; el caso llevó a una investigación en 2015.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Colombia", ll: [-74.1, 4.7], ev: 1, x: "Cliente en los documentos filtrados en 2015.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "ht", c: "Ecuador", ll: [-78.5, -0.2], ev: 1, x: "La agencia de inteligencia ecuatoriana figura como cliente.", u: "https://en.wikipedia.org/wiki/HackingTeam", st: "Wikipedia: HackingTeam" },
    { p: "finfisher", c: "Bahrain", ll: [50.58, 26.22], ev: 2, x: "FinSpy se usó contra activistas bareiníes, según Citizen Lab en 2012.", u: "https://en.wikipedia.org/wiki/FinFisher", st: "Wikipedia: FinFisher" },
    { p: "finfisher", c: "Ethiopia", ll: [38.75, 9.03], ev: 2, x: "Usado contra opositores etíopes, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/FinFisher", st: "Wikipedia: FinFisher" },
    { p: "finfisher", c: "Turkey", ll: [32.85, 39.93], ev: 1, x: "Venta ilegal en 2015 para espiar a la oposición; ex directivos fueron acusados en Múnich en 2023.", u: "https://en.wikipedia.org/wiki/FinFisher", st: "Wikipedia: FinFisher" },
    { p: "finfisher", c: "Egypt", ll: [31.24, 30.04], ev: 1, x: "Documentos hallados en la seguridad del Estado tras la caída de Mubarak en 2011 mostraron una oferta.", u: "https://en.wikipedia.org/wiki/FinFisher", st: "Wikipedia: FinFisher" }
  ]
};

// ---------- expulsiones y canjes ----------
// a expulsa a diplomáticos de b; en canjes, a y b son las partes y n la cantidad de personas canjeadas.
// Sólo pares entre países del monitor. Las cifras de 2022 suman la ola de febrero a mayo.
window.EXPULSIONES = [
  { y: 2014, a: "us", b: "cu", n: 4, k: "canje", d: "2014-12", x: "Cuba liberó a un agente de inteligencia que trabajaba para EE.UU.; EE.UU. liberó a tres de los Cinco Cubanos.", u: "https://en.wikipedia.org/wiki/Cuban_Five", st: "Wikipedia: Cinco Cubanos" },
  { y: 2016, a: "us", b: "ru", n: 35, k: "expulsion", d: "2016-12", x: "Respuesta a la injerencia rusa en las elecciones presidenciales.", u: "https://en.wikipedia.org/wiki/Russian_interference_in_the_2016_United_States_elections", st: "Wikipedia: injerencia rusa en 2016" },
  { y: 2018, a: "uk", b: "ru", n: 23, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "uk", n: 23, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "us", b: "ru", n: 60, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "us", n: 60, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "de", b: "ru", n: 4, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "de", n: 4, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "fr", b: "ru", n: 4, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "fr", n: 4, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "pl", b: "ru", n: 4, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "pl", n: 4, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ca", b: "ru", n: 4, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "ca", n: 4, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "it", b: "ru", n: 2, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "it", n: 2, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "es", b: "ru", n: 2, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "es", n: 2, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "nl", b: "ru", n: 2, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "nl", n: 2, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "dk", b: "ru", n: 2, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "dk", n: 2, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "au", b: "ru", n: 2, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "au", n: 2, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ua", b: "ru", n: 13, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "ua", n: 13, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "se", b: "ru", n: 1, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "se", n: 1, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ro", b: "ru", n: 1, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "ro", n: 1, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "md", b: "ru", n: 3, k: "expulsion", d: "2018-03", x: "Por el envenenamiento de Serguéi Skripal en Salisbury.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ru", b: "md", n: 3, k: "expulsion", d: "2018-03", x: "Respuesta de Moscú por el caso Skripal.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "hu", b: "ru", n: 1, k: "expulsion", d: "2018-03", x: "Por el caso Skripal; Rusia no respondió con expulsiones.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "ge", b: "ru", n: 1, k: "expulsion", d: "2018-03", x: "Por el caso Skripal; Rusia no respondió con expulsiones.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2018, a: "be", b: "ru", n: 1, k: "expulsion", d: "2018-03", x: "Por el caso Skripal; Rusia no respondió con expulsiones.", u: "https://www.aljazeera.com/news/2018/3/31/which-countries-are-expelling-russian-diplomats", st: "Al Jazeera, 31 de marzo de 2018" },
  { y: 2019, a: "de", b: "ru", n: 2, k: "expulsion", d: "2019-12", x: "Por el asesinato de Zelimkhan Khangoshvili en Berlín.", u: "https://en.wikipedia.org/wiki/Assassination_of_Zelimkhan_Khangoshvili", st: "Wikipedia: asesinato de Khangoshvili" },
  { y: 2019, a: "ru", b: "de", n: 2, k: "expulsion", d: "2019-12", x: "Respuesta de Moscú.", u: "https://en.wikipedia.org/wiki/Assassination_of_Zelimkhan_Khangoshvili", st: "Wikipedia: asesinato de Khangoshvili" },
  { y: 2021, a: "us", b: "ru", n: 10, k: "expulsion", d: "2021-04", x: "Por el hackeo de SolarWinds y la injerencia electoral, según la Casa Blanca.", u: "https://en.wikipedia.org/wiki/Russia%E2%80%93United_States_relations", st: "Wikipedia: relaciones Rusia–EE.UU." },
  { y: 2021, a: "ru", b: "us", n: 10, k: "expulsion", d: "2021-04", x: "Respuesta de Moscú.", u: "https://en.wikipedia.org/wiki/Russia%E2%80%93United_States_relations", st: "Wikipedia: relaciones Rusia–EE.UU." },
  { y: 2022, a: "pl", b: "ru", n: 45, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "pl", n: 45, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "de", b: "ru", n: 40, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "de", n: 40, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "fr", b: "ru", n: 41, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "fr", n: 34, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "it", b: "ru", n: 30, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "it", n: 24, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "es", b: "ru", n: 25, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "es", n: 27, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "be", b: "ru", n: 21, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "nl", b: "ru", n: 17, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "nl", n: 15, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "dk", b: "ru", n: 15, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "dk", n: 4, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "se", b: "ru", n: 3, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "se", n: 3, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ro", b: "ru", n: 10, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "gr", b: "ru", n: 12, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "gr", n: 8, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "jp", b: "ru", n: 8, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "jp", n: 8, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "at", b: "ru", n: 4, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "ru", b: "at", n: 4, k: "expulsion", d: "2022", x: "Respuesta de Moscú a las expulsiones europeas.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "us", b: "ru", n: 12, k: "expulsion", d: "2022", x: "Ola de expulsiones tras la invasión de Ucrania.", u: "https://en.wikipedia.org/wiki/Diplomatic_expulsions_during_the_Russo-Ukrainian_war", st: "Wikipedia: expulsiones durante la guerra ruso-ucraniana" },
  { y: 2022, a: "us", b: "ru", n: 2, k: "canje", d: "2022-04", x: "Trevor Reed por el piloto ruso Konstantin Yaroshenko.", u: "https://en.wikipedia.org/wiki/Trevor_Reed", st: "Wikipedia: Trevor Reed" },
  { y: 2022, a: "us", b: "ru", n: 2, k: "canje", d: "2022-12", x: "Brittney Griner por el traficante de armas Viktor Bout.", u: "https://en.wikipedia.org/wiki/Viktor_Bout", st: "Wikipedia: Viktor Bout" },
  { y: 2023, a: "md", b: "ru", n: 45, k: "expulsion", d: "2023-07", x: "Tras revelarse 28 antenas en la embajada rusa en Chisináu.", u: "https://kyivindependent.com/moldova-expels-45-russian-diplomats-embassy-staff", st: "Kyiv Independent" },
  { y: 2023, a: "ca", b: "in", n: 1, k: "expulsion", d: "2023-09", x: "Por el asesinato del activista sij Hardeep Singh Nijjar en Canadá.", u: "https://en.wikipedia.org/wiki/Killing_of_Hardeep_Singh_Nijjar", st: "Wikipedia: asesinato de Nijjar" },
  { y: 2023, a: "in", b: "ca", n: 1, k: "expulsion", d: "2023-09", x: "Respuesta de India.", u: "https://en.wikipedia.org/wiki/Killing_of_Hardeep_Singh_Nijjar", st: "Wikipedia: asesinato de Nijjar" },
  { y: 2024, a: "ca", b: "in", n: 6, k: "expulsion", d: "2024-10", x: "Incluye al alto comisionado indio, por una campaña de violencia contra sijs, según Canadá.", u: "https://www.ynetnews.com/article/rkgh4ssyjx", st: "Ynet" },
  { y: 2024, a: "in", b: "ca", n: 6, k: "expulsion", d: "2024-10", x: "Respuesta de India.", u: "https://www.ynetnews.com/article/rkgh4ssyjx", st: "Ynet" },
  { y: 2024, a: "uk", b: "ru", n: 1, k: "expulsion", d: "2024-05", x: "El agregado de defensa ruso, acusado de ser oficial de inteligencia.", u: "https://www.newsonair.gov.in/russia-expels-two-british-diplomats-on-charges-of-espionage", st: "All India Radio" },
  { y: 2024, a: "ru", b: "uk", n: 7, k: "expulsion", d: "2024", x: "El FSB acusó de espionaje a siete diplomáticos británicos; Londres lo rechazó.", u: "https://www.newsonair.gov.in/russia-expels-two-british-diplomats-on-charges-of-espionage", st: "All India Radio" },
  { y: 2024, a: "us", b: "ru", n: 7, k: "canje", d: "2024-08", x: "Canje de Ankara: Gershkovich, Whelan y otros por espías y presos rusos.", u: "https://en.wikipedia.org/wiki/2024_Ankara_prisoner_exchange", st: "Wikipedia: canje de Ankara" },
  { y: 2024, a: "de", b: "ru", n: 13, k: "canje", d: "2024-08", x: "Alemania liberó al asesino Vadim Krasikov; Rusia liberó a doce presos hacia Alemania.", u: "https://en.wikipedia.org/wiki/2024_Ankara_prisoner_exchange", st: "Wikipedia: canje de Ankara" },
  { y: 2024, a: "pl", b: "ru", n: 1, k: "canje", d: "2024-08", x: "Polonia liberó al espía ruso Pável Rubtsov.", u: "https://en.wikipedia.org/wiki/2024_Ankara_prisoner_exchange", st: "Wikipedia: canje de Ankara" },
  { y: 2025, a: "ru", b: "uk", n: 2, k: "expulsion", d: "2025-03", x: "El FSB acusó a dos diplomáticos británicos de espionaje.", u: "https://www.newsonair.gov.in/russia-expels-two-british-diplomats-on-charges-of-espionage", st: "All India Radio" },
  { y: 2025, a: "us", b: "ru", n: 2, k: "canje", d: "2025-02", x: "Marc Fogel por el ciberdelincuente Alexander Vinnik.", u: "https://en.wikipedia.org/wiki/Alexander_Vinnik", st: "Wikipedia: Alexander Vinnik" },
  { y: 2025, a: "us", b: "ru", n: 2, k: "canje", d: "2025-04", x: "Ksenia Karelina por Arthur Petrov, acusado de contrabando tecnológico.", u: "https://en.wikipedia.org/wiki/Ksenia_Karelina", st: "Wikipedia: Ksenia Karelina" },
  { y: 2026, a: "ru", b: "uk", n: 2, k: "expulsion", d: "2026-03", x: "Dos diplomáticos británicos expulsados por espionaje, en enero y en marzo.", u: "https://www.newsonair.gov.in/russia-expels-british-diplomat-on-allegations-of-espionage-ordering-him-to-leave-country-within-two-weeks", st: "All India Radio" },
  { y: 2026, a: "ro", b: "ru", n: 40, k: "expulsion", d: "2026-03", x: "Rumania redujo la embajada rusa en 40 diplomáticos y empleados.", u: "https://www.themoscowtimes.com/2026/03/12/40-russian-diplomats-and-embassy-staff-to-leave-romania", st: "The Moscow Times" },
  { y: 2026, a: "at", b: "ru", n: 4, k: "expulsion", d: "2026-10", x: "Tres diplomáticos de la embajada y uno de la misión ante la OSCE, sospechados de espionaje.", u: "https://meduza.io/en/news/2026/10/23/austria-orders-expulsion-of-four-russian-diplomats-suspected-of-spying", st: "Meduza" }
];

// ---------- personas ----------
window.ORGS_RED = [
  { id: "mi6", n: "MI6", side: "o" }, { id: "cia", n: "CIA", side: "o" }, { id: "fbi", n: "FBI", side: "o" }, { id: "nsa", n: "NSA", side: "o" },
  { id: "dia", n: "DIA", side: "o" }, { id: "state", n: "Depto. de Estado", side: "o" }, { id: "navy", n: "Inteligencia naval EE.UU.", side: "o" },
  { id: "kgb", n: "KGB", side: "e" }, { id: "gru", n: "GRU", side: "e" }, { id: "hva", n: "HVA (RDA)", side: "e" }, { id: "dicu", n: "DI (Cuba)", side: "e" },
  { id: "lakam", n: "Lakam (Israel)", side: "e" }, { id: "prensa", n: "Prensa", side: "e" }
];
window.PERSONAS = [
  { n: "Kim Philby", y: "1912–1988", tag: "Agente doble", x: "Oficial del MI6 que espiaba para la URSS como parte de los Cinco de Cambridge; huyó a Moscú en 1963.", w: ["mi6"], s: ["kgb"] },
  { n: "Oleg Gordievsky", y: "1938–2025", tag: "Agente doble", x: "Coronel del KGB que trabajó en secreto para el MI6; fue sacado de la URSS en 1985.", w: ["kgb"], s: ["mi6"] },
  { n: "Vasili Mitrokhin", y: "1922–2004", tag: "Desertor", x: "Archivista del KGB que copió a mano miles de documentos y desertó al Reino Unido en 1992.", w: ["kgb"], s: ["mi6"] },
  { n: "Aldrich Ames", y: "1941", tag: "Topo", x: "Oficial de contrainteligencia de la CIA que espió para la URSS y Rusia; sus datos llevaron a la muerte de agentes. Detenido en 1994.", w: ["cia"], s: ["kgb"] },
  { n: "Robert Hanssen", y: "1944–2023", tag: "Topo", x: "Agente del FBI que espió para Moscú durante más de veinte años. Detenido en 2001.", w: ["fbi"], s: ["kgb"] },
  { n: "Ana Montes", y: "1957", tag: "Topo", x: "Analista sobre Cuba en la DIA que espió para La Habana durante unos diecisiete años. Detenida en 2001, liberada en 2023.", w: ["dia"], s: ["dicu"] },
  { n: "Manuel Rocha", y: "1950", tag: "Topo", x: "Ex embajador de EE.UU. en Bolivia que admitió haber sido agente de Cuba durante décadas. Condenado en 2024.", w: ["state"], s: ["dicu"] },
  { n: "Jonathan Pollard", y: "1954", tag: "Espía", x: "Analista de inteligencia naval de EE.UU. que pasó documentos a Israel. Detenido en 1985.", w: ["navy"], s: ["lakam"] },
  { n: "Edward Snowden", y: "1983", tag: "Filtrador", x: "Ex empleado de la CIA y contratista de la NSA que entregó a periodistas documentos sobre la vigilancia masiva en 2013. Vive en Rusia.", w: ["cia", "nsa"], s: ["prensa"] },
  { n: "Richard Sorge", y: "1895–1944", tag: "Espía", x: "Espía soviético en Japón que anticipó la invasión alemana a la URSS. Ejecutado en Tokio en 1944.", w: ["gru"], s: [] },
  { n: "Markus Wolf", y: "1923–2006", tag: "Director", x: "Jefe de la inteligencia exterior de Alemania Oriental durante más de treinta años.", w: ["hva"], s: [] }
];

// ---------- archivo desclasificado ----------
window.ARCHIVO = {
  fondos: [
    { n: "Sala de lectura de la CIA (CREST)", c: "EE.UU.", u: "https://www.cia.gov/readingroom/", x: "Millones de páginas desclasificadas por la CIA." },
    { n: "National Security Archive", c: "EE.UU.", u: "https://nsarchive.gwu.edu/", x: "Archivo independiente de la Universidad George Washington, basado en pedidos de acceso a la información." },
    { n: "Archivos Nacionales del Reino Unido", c: "Reino Unido", u: "https://www.nationalarchives.gov.uk/", x: "Incluye expedientes liberados del MI5." },
    { n: "Archivo de la Stasi", c: "Alemania", u: "https://www.stasi-unterlagen-archiv.de/", x: "Los expedientes de la policía secreta de Alemania Oriental, hoy en el Archivo Federal." },
    { n: "Archivo Digital del Wilson Center", c: "Internacional", u: "https://digitalarchive.wilsoncenter.org/", x: "Documentos de la Guerra Fría de archivos de muchos países, traducidos." },
    { n: "Archivo de la DIPPBA", c: "Argentina", u: "https://www.comisionporlamemoria.org/", x: "El archivo de la ex Dirección de Inteligencia de la Policía de la Provincia de Buenos Aires, a cargo de la Comisión Provincial por la Memoria." }
  ],
  docs: [
    { d: "1946-02", t: "El telegrama largo", c: "EE.UU.", k: "Cable", x: "El diplomático George Kennan describió desde Moscú la lógica del poder soviético. Fue la base de la política de contención.", u: "https://en.wikipedia.org/wiki/Long_Telegram" },
    { d: "1943–1980", t: "Desciframientos Venona", c: "EE.UU.", k: "Desciframientos", x: "Mensajes soviéticos descifrados por el ejército de EE.UU. y la NSA, desclasificados en 1995. Confirmaron redes como la de los Rosenberg.", u: "https://en.wikipedia.org/wiki/Venona_project" },
    { d: "1971", t: "Los papeles del Pentágono", c: "EE.UU.", k: "Informe", x: "Historia secreta de la guerra de Vietnam filtrada por Daniel Ellsberg. Se publicó completa en 2011.", u: "https://en.wikipedia.org/wiki/Pentagon_Papers" },
    { d: "1973", t: "Las \"joyas de la familia\" de la CIA", c: "EE.UU.", k: "Memorando", x: "Recopilación interna de operaciones ilegales de la CIA: espionaje a periodistas, complots de asesinato y experimentos. Se liberó en 2007.", u: "https://en.wikipedia.org/wiki/Family_Jewels_(Central_Intelligence_Agency)" },
    { d: "1975", t: "Informe de la Comisión Rockefeller", c: "EE.UU.", k: "Informe", x: "Investigación oficial sobre actividades internas de la CIA, como la apertura de correo.", u: "https://en.wikipedia.org/wiki/Rockefeller_Commission" },
    { d: "1976", t: "Informes finales del Comité Church", c: "EE.UU.", k: "Informe", x: "El Senado documentó abusos de la CIA, el FBI y la NSA. Dio origen al control parlamentario permanente.", u: "https://en.wikipedia.org/wiki/Church_Committee" },
    { d: "1976", t: "Informe del Comité Pike", c: "EE.UU.", k: "Informe", x: "Investigación de la Cámara de Representantes sobre fallas y costos de la inteligencia; se filtró a la prensa.", u: "https://en.wikipedia.org/wiki/Pike_Committee" },
    { d: "1992", t: "Archivos del Terror", c: "Paraguay", k: "Expediente", x: "Archivo de la policía de Stroessner hallado en Asunción. Documenta la Operación Cóndor entre dictaduras del Cono Sur.", u: "https://en.wikipedia.org/wiki/Archives_of_Terror" },
    { d: "1992", t: "Archivo Mitrokhin", c: "Reino Unido", k: "Expediente", x: "Notas copiadas a mano por un archivista del KGB y llevadas al Reino Unido. Revelaron agentes soviéticos en todo el mundo.", u: "https://en.wikipedia.org/wiki/Mitrokhin_Archive" },
    { d: "1992", t: "Expedientes de la Stasi", c: "Alemania", k: "Expediente", x: "Los archivos de la policía secreta de Alemania Oriental, abiertos a víctimas e investigadores desde 1992.", u: "https://en.wikipedia.org/wiki/Stasi_Records_Agency" },
    { d: "2004", t: "Informe del Senado sobre la inteligencia previa a la guerra de Irak", c: "EE.UU.", k: "Informe", x: "Concluyó que las afirmaciones sobre armas de destrucción masiva no tenían sustento en la inteligencia disponible.", u: "https://en.wikipedia.org/wiki/Senate_Report_on_Pre-war_Intelligence_on_Iraq" },
    { d: "2014", t: "Informe del Senado sobre torturas de la CIA", c: "EE.UU.", k: "Informe", x: "Resumen de 525 páginas sobre el programa de detención e interrogatorio de la CIA después del 11-S.", u: "https://en.wikipedia.org/wiki/Senate_Intelligence_Committee_report_on_CIA_torture" },
    { d: "2016", t: "Informe Chilcot", c: "Reino Unido", k: "Informe", x: "Investigación británica sobre la guerra de Irak. Criticó cómo se presentó la inteligencia sobre armas.", u: "https://en.wikipedia.org/wiki/Iraq_Inquiry" },
    { d: "2017–2025", t: "Archivos del asesinato de Kennedy", c: "EE.UU.", k: "Expediente", x: "Documentos liberados por ley desde 2017 sobre el asesinato del presidente John F. Kennedy.", u: "https://en.wikipedia.org/wiki/JFK_Files" },
    { d: "1973–1983", t: "Operación Cóndor", c: "Argentina", k: "Cable", x: "Cables de EE.UU. y archivos del Cono Sur sobre la coordinación represiva entre dictaduras, incluida la argentina.", u: "https://en.wikipedia.org/wiki/Operation_Condor" }
  ]
};

// ---------- cómo funciona ----------
window.CICLO = [
  { n: "Planificación y dirección", x: "El gobierno define qué necesita saber y el servicio lo traduce en prioridades y pedidos concretos." },
  { n: "Recolección", x: "Se obtiene la información en bruto: agentes, interceptaciones, satélites, fuentes abiertas." },
  { n: "Procesamiento", x: "Se traduce, descifra, ordena y filtra lo recolectado para que pueda analizarse." },
  { n: "Análisis", x: "Se cruza con otras fuentes, se evalúa su confiabilidad y se saca una conclusión." },
  { n: "Difusión", x: "El producto llega a quien decide: un informe, una alerta, un briefing diario." },
  { n: "Evaluación", x: "Quien recibe dice si le sirvió y qué falta; eso vuelve a la planificación." }
];
window.INTS = [
  { s: "HUMINT", n: "Inteligencia humana", x: "Información obtenida de personas: agentes reclutados, informantes, desertores, diplomáticos." },
  { s: "SIGINT", n: "Inteligencia de señales", x: "Interceptación de comunicaciones (COMINT) y de señales electrónicas como radares (ELINT)." },
  { s: "GEOINT", n: "Inteligencia geoespacial", x: "Imágenes satelitales y aéreas, y su análisis sobre el terreno (incluye la antigua IMINT)." },
  { s: "MASINT", n: "Medición y firmas", x: "Rastros físicos: radiación, sonido, composición química, firmas de motores o explosiones." },
  { s: "OSINT", n: "Fuentes abiertas", x: "Lo público: prensa, redes sociales, registros, imágenes comerciales. Hoy es una de las fuentes principales." },
  { s: "CYBER", n: "Ciberinteligencia", x: "Acceso a redes y sistemas para obtener datos o preparar sabotajes." },
  { s: "FININT", n: "Inteligencia financiera", x: "Seguimiento del dinero: transferencias, sociedades pantalla, sanciones." }
];
window.GLOSARIO = [
  ["Agente", "Persona reclutada que pasa información a un servicio sin ser empleada de él."],
  ["Oficial de caso", "Empleado del servicio que recluta, entrena y maneja a los agentes."],
  ["Cobertura oficial", "Oficial que trabaja bajo identidad diplomática; si lo descubren, lo expulsan pero no lo pueden juzgar."],
  ["Ilegal", "Oficial que vive en otro país con identidad falsa y sin protección diplomática, a veces durante décadas."],
  ["Agente doble", "Quien aparenta trabajar para un servicio mientras trabaja para el rival."],
  ["Topo", "Infiltrado dentro de un servicio o de un gobierno, al servicio de otro."],
  ["Desertor", "Miembro de un servicio que se pasa al otro bando, en general llevándose información."],
  ["Exfiltración", "Sacar en secreto a una persona de un país hostil."],
  ["Buzón muerto", "Lugar escondido para dejar y retirar mensajes sin que las dos partes se encuentren."],
  ["Empresa pantalla", "Sociedad que sirve de fachada para financiar o cubrir operaciones."],
  ["Kompromat", "Material comprometedor reunido para presionar o chantajear a alguien."],
  ["Medidas activas", "Término soviético para operaciones de influencia: desinformación, falsificaciones, apoyo encubierto a grupos."],
  ["Compartimentación", "Regla de que cada uno sepa sólo lo que necesita saber, para limitar el daño de una filtración."],
  ["Negación plausible", "Diseñar una operación para que el gobierno pueda negar su participación de forma creíble."],
  ["Atribución", "Determinar quién está detrás de una operación, en especial de un ciberataque. Siempre conviene preguntar quién atribuye y con qué evidencia."]
];

// ---------- Bloques de inteligencia (mapa general) ----------
// Clasificación editorial del Monitor, revisada el 2026-11-16. Grado: n = núcleo, c = cercano, p = pendular.
// Los nombres de país son los de data/world.js. Los territorios sin servicio propio no se clasifican.
window.BLOQUES = {
  defs: [
    { id: "occ", n: "Bloque occidental", c: "#4fa3ff", x: "EE.UU. y sus aliados: Cinco Ojos, OTAN, Unión Europea, Japón, Corea del Sur y Taiwán. Comparten inteligencia de manera estable, en tratados y en enlaces permanentes." },
    { id: "eur", n: "Bloque euroasiático", c: "#ff5a5f", x: "Rusia, China, Irán y sus socios cercanos. Cooperan contra el bloque occidental, aunque sin una alianza formal tan profunda." },
    { id: "aut", n: "Potencias autónomas", c: "#f5b83d", x: "Países con servicios de gran capacidad que operan en el exterior según su propia agenda. Cooperan con uno u otro bloque según el tema." },
    { id: "neu", n: "Neutrales y pendulares", c: "#9a8cff", x: "Países con servicios de capacidad media o menor, sin alineamiento fijo. Su prioridad suele ser interna o regional." },
    { id: "abi", n: "Zonas abiertas", c: "#8a8f98", x: "Territorios donde el Estado no controla su espacio, por guerra, colapso o decisión. Allí operan a la vez servicios de varios países." }
  ],
  grados: { n: "Núcleo", c: "Cercano", p: "Pendular" },
  paises: [
    // Bloque occidental
    ["United States of America", "occ", "n"], ["United Kingdom", "occ", "n"], ["Canada", "occ", "n"], ["Australia", "occ", "n"], ["New Zealand", "occ", "n"],
    ["France", "occ", "n"], ["Germany", "occ", "n"], ["Netherlands", "occ", "n"], ["Denmark", "occ", "n"], ["Norway", "occ", "n"], ["Poland", "occ", "n"],
    ["Italy", "occ", "n"], ["Spain", "occ", "n"], ["Sweden", "occ", "n"], ["Finland", "occ", "n"], ["Japan", "occ", "n"], ["South Korea", "occ", "n"],
    ["Belgium", "occ", "n"], ["Estonia", "occ", "n"], ["Latvia", "occ", "n"], ["Lithuania", "occ", "n"], ["Czechia", "occ", "n"], ["Romania", "occ", "n"],
    ["Portugal", "occ", "c"], ["Luxembourg", "occ", "c"], ["Iceland", "occ", "c"], ["Greenland", "occ", "c"], ["Bulgaria", "occ", "c"], ["Croatia", "occ", "c"], ["Slovenia", "occ", "c"],
    ["Greece", "occ", "c"], ["Cyprus", "occ", "c", "Miembro de la UE fuera de la OTAN; cerca de Israel y de EE.UU. desde 2020."], ["Albania", "occ", "c"], ["Macedonia", "occ", "c"], ["Montenegro", "occ", "c"], ["Kosovo", "occ", "c"],
    ["Hungary", "occ", "c", "Con Orbán fue pendular hacia Moscú; el gobierno de Magyar, desde 2026, volvió a acercarse a la UE."],
    ["Slovakia", "occ", "p", "Miembro de la OTAN con un gobierno que mantiene canales con Moscú."],
    ["Ukraine", "occ", "c", "No es miembro de la OTAN, pero su inteligencia trabaja integrada con la occidental desde 2014."],
    ["Moldova", "occ", "c"], ["Taiwan", "occ", "c"], ["Philippines", "occ", "c"], ["Jordan", "occ", "c", "La Dirección General de Inteligencia (GID) es uno de los socios más estrechos de la CIA en Oriente Medio."],
    ["Kuwait", "occ", "c"], ["Bahrain", "occ", "c"], ["Kenya", "occ", "c"], ["Colombia", "occ", "c", "Décadas de cooperación con la CIA y la DEA; el gobierno de Petro tensó esa relación."],
    ["Ecuador", "occ", "c"], ["Paraguay", "occ", "c"], ["Panama", "occ", "c"], ["Guatemala", "occ", "c"], ["Honduras", "occ", "c"], ["El Salvador", "occ", "c"], ["Costa Rica", "occ", "c"],
    ["Dominican Rep.", "occ", "c"], ["Jamaica", "occ", "c"], ["Puerto Rico", "occ", "n"], ["Guam", "occ", "n"],
    // Bloque euroasiático
    ["Russia", "eur", "n"], ["China", "eur", "n"], ["Iran", "eur", "n"], ["Belarus", "eur", "n"], ["North Korea", "eur", "c"], ["Cuba", "eur", "c"],
    ["Nicaragua", "eur", "c"], ["Tajikistan", "eur", "c"], ["Kyrgyzstan", "eur", "c"], ["Laos", "eur", "c"], ["Cambodia", "eur", "c"], ["Eritrea", "eur", "p"],
    ["Hong Kong", "eur", "n"], ["Macao", "eur", "n"],
    // Potencias autónomas
    ["Israel", "aut", "n"], ["Turkey", "aut", "n", "Miembro de la OTAN, pero su servicio (MIT) actúa con agenda propia y coopera también con Rusia e Irán."],
    ["India", "aut", "n"], ["Pakistan", "aut", "n"], ["Saudi Arabia", "aut", "n"], ["United Arab Emirates", "aut", "n"], ["Qatar", "aut", "c"], ["Egypt", "aut", "c"],
    ["Morocco", "aut", "c", "Servicios con alcance en Europa y África; socio de EE.UU., Francia e Israel."],
    ["Rwanda", "aut", "c", "Servicio pequeño con operaciones en el exterior y en el este del Congo."],
    // Neutrales y pendulares
    ["Switzerland", "neu", "n"], ["Austria", "neu", "n"], ["Ireland", "neu", "n"], ["Malta", "neu", "n"], ["Liechtenstein", "neu", "n"],
    ["Vatican", "neu", "n", "Diplomacia con red mundial y sin un servicio de inteligencia formal."],
    ["Brazil", "neu", "n"], ["Mexico", "neu", "n"], ["South Africa", "neu", "n"], ["Indonesia", "neu", "n"], ["Malaysia", "neu", "n"], ["Thailand", "neu", "n"],
    ["Vietnam", "neu", "n", "Partido comunista cercano a China en lo político y abierto a EE.UU. en lo militar."], ["Singapore", "neu", "c", "Coopera con Occidente, pero mantiene equilibrio con China."],
    ["Argentina", "neu", "p", "Tradición de neutralidad; con Milei, desde 2023, se alineó con EE.UU. e Israel."],
    ["Kazakhstan", "neu", "p", "Miembro de la OTSC con Rusia, con una política exterior multivectorial."],
    ["Serbia", "neu", "p", "Candidata a la UE con servicios que cooperan con Rusia."],
    ["Georgia", "neu", "p", "El gobierno de Sueño Georgiano se alejó de Occidente desde 2023."],
    ["Armenia", "neu", "p", "Miembro de la OTSC que congeló su participación y se acerca a Occidente."],
    ["Azerbaijan", "neu", "p", "Cerca de Turquía e Israel y en equilibrio con Rusia."],
    ["Venezuela", "neu", "p", "Salió del bloque euroasiático tras la captura de Maduro en enero de 2026; el aparato de inteligencia sigue en pie."],
    ["Algeria", "neu", "c"], ["Tunisia", "neu", "c"], ["Oman", "neu", "n"], ["Uzbekistan", "neu", "c"], ["Turkmenistan", "neu", "n"], ["Mongolia", "neu", "c"],
    ["Bosnia and Herz.", "neu", "p"], ["Bangladesh", "neu", "c"], ["Sri Lanka", "neu", "c"], ["Nepal", "neu", "c"], ["Bhutan", "neu", "c"], ["Maldives", "neu", "c"],
    ["Brunei", "neu", "c"], ["Timor-Leste", "neu", "c"], ["Papua New Guinea", "neu", "c"], ["Fiji", "neu", "c"], ["Solomon Is.", "neu", "p"],
    ["Chile", "neu", "c"], ["Peru", "neu", "c"], ["Bolivia", "neu", "c"], ["Uruguay", "neu", "c"], ["Guyana", "neu", "c"], ["Suriname", "neu", "c"], ["Belize", "neu", "c"],
    ["Trinidad and Tobago", "neu", "c"], ["Bahamas", "neu", "c"], ["Barbados", "neu", "c"],
    ["Nigeria", "neu", "c"], ["Ghana", "neu", "c"], ["Senegal", "neu", "c"], ["Côte d'Ivoire", "neu", "c"], ["Ethiopia", "neu", "c"], ["Tanzania", "neu", "c"], ["Uganda", "neu", "c"],
    ["Angola", "neu", "c"], ["Zambia", "neu", "c"], ["Zimbabwe", "neu", "c"], ["Namibia", "neu", "c"], ["Botswana", "neu", "c"], ["Mozambique", "neu", "c"], ["Madagascar", "neu", "c"],
    ["Malawi", "neu", "c"], ["Lesotho", "neu", "c"], ["eSwatini", "neu", "c"], ["Cameroon", "neu", "c"], ["Gabon", "neu", "c"], ["Congo", "neu", "c"], ["Eq. Guinea", "neu", "c"],
    ["Benin", "neu", "c"], ["Togo", "neu", "c"], ["Guinea", "neu", "c"], ["Guinea-Bissau", "neu", "c"], ["Sierra Leone", "neu", "c"], ["Liberia", "neu", "c"], ["Gambia", "neu", "c"],
    ["Mauritania", "neu", "c"], ["Djibouti", "neu", "c", "Bases de EE.UU., Francia, China, Japón e Italia en un solo país."], ["Burundi", "neu", "c"], ["Chad", "neu", "p"],
    // Zonas abiertas
    ["Libya", "abi", "n"], ["Sudan", "abi", "n"], ["S. Sudan", "abi", "n"], ["Somalia", "abi", "n"], ["Somaliland", "abi", "c"], ["Yemen", "abi", "n"],
    ["Dem. Rep. Congo", "abi", "c", "El Estado controla Kinshasa y el oeste; el este es zona de grupos armados y servicios vecinos."],
    ["Central African Rep.", "abi", "n"], ["Haiti", "abi", "n"], ["Lebanon", "abi", "c"], ["Palestine", "abi", "n"],
    ["Syria", "abi", "c", "Tras la caída de Assad en 2024 salió del bloque euroasiático; el nuevo gobierno no controla todo el territorio."],
    ["Iraq", "abi", "p", "Gobierno con servicios propios, pero campo de disputa entre Irán y EE.UU."],
    ["Afghanistan", "abi", "p", "Los talibanes controlan el territorio por decisión propia, con servicios débiles; operan allí Pakistán, Irán, Rusia y China."],
    ["Myanmar", "abi", "c", "La junta, apoyada por China y Rusia, perdió buena parte del territorio en la guerra civil."],
    ["Mali", "abi", "c", "Junta militar apoyada por Rusia; el norte y el centro están en manos de grupos armados."],
    ["Burkina Faso", "abi", "c", "Junta militar apoyada por Rusia; gran parte del territorio fuera de control del Estado."],
    ["Niger", "abi", "c", "Junta militar desde 2023, acercada a Rusia."]
  ]
};

// ---------- Quién manda: jerarquía de poder entre servicios ----------
// Clasificación editorial del Monitor, revisada el 2026-11-16.
// Nivel = autonomía real: si el servicio decide solo o si, en lo estratégico, sigue a otro.
// dep = de qué servicios depende (inteligencia, tecnología, protección o dinero). El tamaño del punto sale del puntaje de capacidad de cada ficha.
window.PODER = {
  niveles: [
    { n: 1, h: "Polos", x: "Deciden solos a escala mundial y otros servicios dependen de ellos." },
    { n: 2, h: "Autónomos", x: "Deciden solos y actúan lejos de sus fronteras. Cooperan con un polo, pero no le responden." },
    { n: 3, h: "Socios integrados", x: "Tienen margen en lo propio, pero en lo estratégico siguen a un polo y dependen de su inteligencia." },
    { n: 4, h: "Regionales y neutrales", x: "Su poder se concentra dentro del país o en su región; no forman parte estable de ninguna cadena." }
  ],
  paises: {
    us: { n: 1, x: "Mayor presupuesto y red de señales del mundo; los Cinco Ojos y la OTAN dependen de su inteligencia." },
    cn: { n: 1, x: "Aparato de inteligencia propio a escala mundial, sin depender de nadie; sostiene a Corea del Norte y a Pakistán." },
    ru: { n: 1, x: "Servicios con alcance mundial y capacidad de sabotaje; Bielorrusia y Cuba trabajan bajo su órbita." },
    il: { n: 2, x: "Coopera estrechamente con EE.UU., pero ejecuta sus propias operaciones aunque Washington no las apruebe." },
    ir: { n: 2, x: "Socio de Rusia y China sin subordinarse; opera en todo Medio Oriente a través de la Fuerza Quds y sus aliados." },
    tr: { n: 2, x: "Miembro de la OTAN con agenda propia en Siria, Libia y el Cáucaso." },
    in: { n: 2, x: "Coopera con EE.UU. y con Rusia sin alinearse; opera contra Pakistán y en el exterior." },
    pk: { n: 2, x: "El ISI actúa con autonomía en Afganistán y Cachemira; depende de China en tecnología y dinero.", dep: ["cn"] },
    sa: { n: 2, x: "Socio de la CIA que actúa por su cuenta, como en el asesinato de Khashoggi.", dep: ["us"] },
    ae: { n: 2, x: "Servicios chicos con alcance en Yemen, Sudán, Libia y el Cuerno de África.", dep: ["us"] },
    kp: { n: 2, x: "Opera solo en ciberrobos y espionaje; China lo sostiene pero no lo controla.", dep: ["cn"] },
    uk: { n: 3, x: "Segundo de los Cinco Ojos: decide en inteligencia humana, pero su red de señales está fundida con la de la NSA.", dep: ["us"] },
    fr: { n: 3, x: "El más autónomo de Europa, con operaciones propias en África; depende de EE.UU. en señales y satélites.", dep: ["us"] },
    de: { n: 3, x: "Depende de la NSA para alertas de terrorismo y para buena parte de la inteligencia técnica.", dep: ["us"] },
    it: { n: 3, x: "Socio de la OTAN con operaciones propias en Libia y el Mediterráneo.", dep: ["us"] },
    es: { n: 3, dep: ["us"], x: "Socio de la OTAN con foco en el Magreb y el Sahel." },
    pl: { n: 3, dep: ["us"], x: "Frontera de la OTAN con Rusia y Bielorrusia; trabaja integrado con EE.UU." },
    nl: { n: 3, dep: ["us"], x: "Servicios técnicos fuertes que comparten con la NSA y el GCHQ." },
    be: { n: 3, dep: ["us"], x: "Sede de la OTAN y de la UE, blanco de todos los servicios." },
    dk: { n: 3, dep: ["us"], x: "Dejó a la NSA usar sus cables para espiar a aliados." },
    se: { n: 3, dep: ["us"], x: "Socio técnico de la NSA desde la Guerra Fría; en la OTAN desde 2024." },
    ro: { n: 3, dep: ["us"], x: "Alojó cárceles secretas de la CIA." },
    gr: { n: 3, dep: ["us"], x: "Socio de la OTAN con foco en Turquía." },
    cy: { n: 3, dep: ["us"], x: "Aloja bases británicas de escucha y coopera con Israel." },
    hu: { n: 3, dep: ["us"], x: "Socio de la OTAN que con Orbán mantuvo canales con Moscú." },
    jp: { n: 3, dep: ["us"], x: "Depende de EE.UU. en casi toda la inteligencia exterior; creó un consejo nacional en 2026." },
    kr: { n: 3, dep: ["us"], x: "Alianza militar con intercambio permanente sobre Corea del Norte." },
    au: { n: 3, dep: ["us"], x: "Miembro de los Cinco Ojos; aloja la base de Pine Gap." },
    ca: { n: 3, dep: ["us"], x: "Miembro de los Cinco Ojos con poca capacidad exterior propia." },
    tw: { n: 3, dep: ["us"], x: "Depende de EE.UU. frente a China." },
    ua: { n: 3, dep: ["us", "uk"], x: "Ejecuta operaciones audaces propias, pero depende de la inteligencia de EE.UU. y el Reino Unido." },
    jo: { n: 3, dep: ["us"], x: "Uno de los socios más estrechos de la CIA en la región." },
    eg: { n: 3, dep: ["us", "sa"], x: "Depende de la ayuda militar de EE.UU. y del dinero del Golfo." },
    co: { n: 3, dep: ["us"], x: "Décadas de cooperación con la CIA y la DEA." },
    md: { n: 3, dep: ["us"], x: "Se apoya en la UE y EE.UU. frente a Rusia." },
    by: { n: 3, dep: ["ru"], x: "La KGB bielorrusa trabaja integrada con los servicios rusos." },
    cu: { n: 3, dep: ["ru"], x: "Comparte inteligencia con Rusia desde la era soviética; con fuerte capacidad propia frente a EE.UU." },
    qa: { n: 4, x: "Mediador con todos: Hamás, los talibanes, EE.UU. e Irán." },
    ch: { n: 4, x: "Neutral; servicio pequeño concentrado en contraespionaje." },
    at: { n: 4, x: "Neutral y plaza de espionaje ruso en Viena." },
    br: { n: 4, x: "Servicio con foco interno y regional." },
    mx: { n: 4, x: "Foco en el crimen organizado; depende de EE.UU. en esa materia." },
    za: { n: 4, x: "Servicio en reforma, con peso regional." },
    ar: { n: 4, x: "Foco interno; se acercó a EE.UU. e Israel desde 2023." },
    kz: { n: 4, x: "Política multivectorial entre Rusia, China y Occidente." },
    vn: { n: 4, x: "Foco en el control interno y en la diáspora." },
    sg: { n: 4, x: "Alta capacidad técnica, en equilibrio entre EE.UU. y China." },
    rs: { n: 4, x: "Equilibra entre Rusia y la UE." },
    ge: { n: 4, x: "Se alejó de Occidente desde 2023." },
    az: { n: 4, x: "Cerca de Turquía e Israel, en equilibrio con Rusia." },
    dz: { n: 4, x: "Foco en el Sahel y en Marruecos." },
    rw: { n: 4, x: "Servicio chico que opera en el exterior y en el este del Congo." },
    bd: { n: 4, x: "Foco interno; en reforma tras 2024." },
    ve: { n: 4, x: "En transición tras la captura de Maduro." },
    sy: { n: 4, x: "Aparato en reconstrucción tras la caída de Assad." },
    af: { n: 4, x: "Los talibanes controlan el país con servicios débiles." },
    va: { n: 4, x: "Sin servicio formal; red diplomática mundial." }
  },
  // quién manda dentro de cada potencia (de arriba hacia abajo)
  internos: {
    us: [
      { h: "Presidente y Consejo de Seguridad Nacional", x: "Fijan prioridades y firman las órdenes de acción encubierta." },
      { h: "CIA y NSA", x: "El poder real: la CIA es la única con acción encubierta; la NSA, la mayor red de señales, sostiene a los Cinco Ojos." },
      { h: "Agencias del Pentágono (DIA, NRO, NGA)", x: "Manejan satélites y buena parte del presupuesto; responden al secretario de Defensa." },
      { h: "ODNI", x: "Coordina a 18 organismos y arma el presupuesto, pero no dirige operaciones." },
      { h: "FBI", x: "Contrainteligencia dentro del país." }
    ],
    cn: [
      { h: "Xi Jinping y la Comisión Central de Seguridad Nacional", x: "Todo el aparato responde al Partido." },
      { h: "MSS", x: "Espionaje exterior y contraespionaje; el servicio civil más poderoso." },
      { h: "Inteligencia del EPL", x: "Inteligencia militar y ciberataques, bajo la Comisión Militar Central." },
      { h: "MPS y Frente Unido", x: "Control interno, presión sobre la diáspora e influencia en el exterior." }
    ],
    ru: [
      { h: "Vladímir Putin", x: "Los servicios responden directamente a él." },
      { h: "FSB", x: "El más poderoso: seguridad interior, contraespionaje y operaciones en el \"extranjero cercano\"." },
      { h: "GRU", x: "Inteligencia militar, sabotajes y asesinatos en el exterior." },
      { h: "SVR", x: "Espionaje exterior clásico y operaciones de influencia." }
    ],
    il: [
      { h: "Primer ministro", x: "El Mossad responde directamente a él." },
      { h: "Mossad", x: "Operaciones en el exterior, incluidos asesinatos y sabotajes." },
      { h: "Aman", x: "El más grande; incluye a la Unidad 8200 de señales." },
      { h: "Shin Bet", x: "Seguridad interior y territorios palestinos." }
    ],
    uk: [
      { h: "Primer ministro y Comité Conjunto de Inteligencia", x: "Fijan prioridades y evalúan." },
      { h: "GCHQ", x: "La mayor de las tres, fundida con la NSA." },
      { h: "MI6 y MI5", x: "Espionaje exterior y seguridad interior." }
    ],
    fr: [
      { h: "Presidente y Consejo de Defensa", x: "Deciden las operaciones sensibles." },
      { h: "DGSE", x: "Espionaje exterior, señales y acción clandestina." },
      { h: "DGSI y DRM", x: "Seguridad interior e inteligencia militar." }
    ]
  }
};
