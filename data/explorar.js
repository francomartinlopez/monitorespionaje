// Datos de las secciones de "Explorar": alianzas, infraestructura, software espía, expulsiones,
// personas, archivo y la página "Cómo funciona".
// Lo marcado sample: true es de prueba. Lo demás es real pero todavía sin fuente cargada en el sitio.

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
  { n: "Marsella", t: "cable", ll: [5.37, 43.3], who: "Nodo de cables", ev: 1, sample: true, x: "Texto de prueba. Uno de los grandes nodos de cables submarinos del Mediterráneo." },
  { n: "Fortaleza", t: "cable", ll: [-38.54, -3.72], who: "Nodo de cables", ev: 1, sample: true, x: "Texto de prueba. Principal punto de aterrizaje de cables de Sudamérica." },
  { n: "Singapur", t: "cable", ll: [103.8, 1.35], who: "Nodo de cables", ev: 1, sample: true, x: "Texto de prueba. Nodo de cables entre el Índico y el Pacífico." }
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
  // flujos proveedor → cliente: DE PRUEBA, no representan clientes reales
  flows: [["nso", [-99.1, 19.4]], ["nso", [44.2, 15.4]], ["nso", [31.2, 30.0]], ["candiru", [46.7, 24.7]], ["paragon", [12.5, 41.9]], ["intellexa", [31.2, 30.0]], ["intellexa", [-74.1, 4.7]], ["ht", [-58.4, -34.6]], ["ht", [105.8, 21.0]], ["finfisher", [32.6, 0.35]], ["nso", [77.2, 28.6]], ["intellexa", [21.4, 42.0]]]
    .map(([p, ll]) => ({ p, ll, sample: true }))
};

// ---------- expulsiones y canjes (DE PRUEBA) ----------
window.EXPULSIONES = (function () {
  const pairs = [["uk", "ru"], ["us", "ru"], ["de", "ru"], ["fr", "ru"], ["ru", "us"], ["us", "cn"], ["cn", "us"], ["ar", "ir"], ["il", "ir"], ["in", "pk"], ["pk", "in"], ["ua", "ru"], ["kr", "kp"], ["ru", "de"]];
  const out = [];
  let s = 7; const r = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (let y = 2014; y <= 2026; y++) pairs.forEach(([a, b]) => { if (r() < .32) out.push({ y, a, b, n: 1 + Math.floor(r() * (y === 2018 || y === 2022 ? 40 : 9)), k: r() < .1 ? "canje" : "expulsion", sample: true }); });
  return out;
})();

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
  docs: Array.from({ length: 8 }, (_, i) => ({ sample: true, d: String(1955 + i * 8), t: `Documento de prueba ${i + 1}`, c: ["EE.UU.", "Reino Unido", "Rusia", "Argentina"][i % 4], k: ["Memorando", "Informe", "Cable", "Expediente"][i % 4], x: "Texto de prueba. Qué dice el documento y para qué caso sirve.", u: "#" }))
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
