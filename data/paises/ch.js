// Ficha de Suiza · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["ch"] = {
  id: "ch",
  updated: "2026-11-15",
  summary: [
    "Suiza es neutral, pero Ginebra y Berna concentran organismos internacionales, bancos y diplomáticos, lo que las convierte en un centro del espionaje mundial. El Servicio de Inteligencia de la Confederación (SRC, NDB en alemán) es el servicio civil, dirigido desde noviembre de 2025 por Serge Bavaud. El Servicio de Inteligencia Militar (MND) cubre lo militar y la Oficina Federal de Policía (fedpol) persigue los delitos.",
    "En su informe de 2026 el SRC señaló por primera vez a Rusia como la principal amenaza para el país. Según el servicio, Moscú usa a Suiza como base en el centro de Europa y mantiene decenas de presuntos oficiales de inteligencia con cobertura diplomática. El propio SRC atraviesa una crisis interna por una reestructuración y por una investigación de la fiscalía sobre una posible fuga de datos secretos hacia Rusia.",
    "La historia del espionaje suizo tiene dos escándalos centrales. En 1989 se supo que la policía federal había reunido fichas sobre unas 900.000 personas. En 2020 se reveló que Crypto AG, una empresa de Zug que vendía máquinas de cifrado a más de 100 países, pertenecía en secreto a la CIA y al servicio alemán BND."
  ],
  keyFacts: [
    { l: "Director del SRC", v: "Serge Bavaud", n: "desde noviembre de 2025" },
    { l: "Principal amenaza", v: "Rusia", n: "informe Seguridad Suiza 2026" },
    { l: "Fichas de la policía federal", v: "Unas 900.000", n: "escándalo de 1989" },
    { l: "Crypto AG", v: "CIA y BND", n: "dueños secretos durante décadas, revelado en 2020" }
  ],
  power: { humana: 2, senales: 3, ciber: 2, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Servicio chico, con prioridad en la protección del país y de los organismos internacionales.",
    senales: "El sistema Onyx intercepta comunicaciones satelitales; la ley permite rastrear cables bajo control judicial.",
    ciber: "Capacidad limitada; un ataque a un proveedor expuso datos de la administración en 2023.",
    imagenes: "Sin satélites propios; depende de socios.",
    encubierta: "La neutralidad limita la acción encubierta; no hay operaciones documentadas.",
    contra: "Decenas de espías rusos operan con cobertura diplomática, según el propio servicio."
  },
  priorities: [
    { h: "Rusia", x: "Espionaje con cobertura diplomática y operaciones híbridas." },
    { h: "Ginebra internacional", x: "Proteger organismos, negociaciones y diplomáticos." },
    { h: "China", x: "Presión económica y vigilancia de la diáspora tibetana y uigur." },
    { h: "Terrorismo", x: "Radicalización en línea de jóvenes." },
    { h: "Proliferación", x: "Tecnología de doble uso y sanciones." }
  ],
  focos: ["Rusia", "China", "Irán", "Ginebra", "Proliferación"],
  bodies: {
    "Consejo": { since: 2010, how: "Delegación del Consejo Federal para la Seguridad, formada por tres ministros, que fija prioridades de inteligencia.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Berna"] },
    "SRC": { since: 2010, how: "Servicio de Inteligencia de la Confederación: inteligencia exterior e interior en un solo servicio civil. Atraviesa una reestructuración que su director quiere terminar a fines de 2026.", staff: "Unas 450 personas, según estimaciones públicas.", budget: "Público en el presupuesto federal.", tech: ["Interceptación satelital Onyx", "Rastreo de cables con autorización"], where: ["Berna"] },
    "MND": { since: 1937, how: "Servicio de Inteligencia Militar del Ejército: análisis militar y apoyo a las fuerzas armadas.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Berna"] },
    "fedpol": { since: 2000, how: "Oficina Federal de Policía: investiga delitos contra el Estado junto con la Fiscalía Federal.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Berna"] },
    "AS-SRC": { since: 2017, how: "Autoridad de Supervisión Independiente de la Inteligencia: controla la legalidad del SRC y del MND.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Berna"] },
    "DelGes": { since: 1992, how: "Delegación de las Comisiones de Gestión del Parlamento, con acceso a información secreta.", staff: "Seis parlamentarios.", budget: "No aplica.", tech: [], where: ["Berna"] }
  },
  civil: [
    "El SRC depende del Departamento de Defensa, hoy a cargo de Martin Pfister.",
    "Las medidas intrusivas necesitan autorización del Tribunal Administrativo Federal y del ministro.",
    "Los votantes aprobaron en 2016 la ley de inteligencia en un referéndum."
  ],
  law: {
    domestic: [
      "La ley de inteligencia de 2015, aprobada por referéndum en 2016, permite escuchas y entrada a sistemas con autorización judicial.",
      "En 2026 el gobierno envió al Parlamento una revisión de esa ley.",
      "El código penal castiga el espionaje político, económico y militar contra Suiza."
    ],
    foreign: [
      "El SRC puede operar en el exterior; la ley prohíbe actividades que dañen la neutralidad."
    ],
    oversight: [
      "Autoridad de Supervisión Independiente (AS-SRC).",
      "Delegación de las Comisiones de Gestión del Parlamento.",
      "Tribunal Administrativo Federal, que autoriza medidas intrusivas."
    ]
  },
  rights: [
    { d: "1989-11", dir: "recorta", area: "Privacidad", h: "Escándalo de las fichas", x: "Se revela que la policía federal fichó a unas 900.000 personas; los afectados pudieron pedir sus archivos." },
    { d: "2016-09", dir: "amplia", area: "Privacidad", h: "Ley de inteligencia", x: "Los votantes aprueban escuchas, entrada a computadoras y rastreo de cables." },
    { d: "2026-06", dir: "amplia", area: "Privacidad", h: "Revisión de la ley", x: "El gobierno propone ampliar facultades del servicio." }
  ],
  events: [
    { d: "1989-11-24", lat: 46.95, lon: 7.45, c: "Switzerland", t: "contra", ev: 1, h: "Escándalo de las fichas", x: "Una comisión parlamentaria revela que la policía federal vigiló a cientos de miles de personas durante la Guerra Fría.", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2020-02-11", lat: 47.17, lon: 8.52, c: "Switzerland", t: "senales", ev: 1, h: "Revelación de Crypto AG", x: "Medios revelan que la empresa de cifrado de Zug pertenecía a la CIA y al BND, que leían las comunicaciones de sus clientes.", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2026-09", lat: 46.94, lon: 7.44, c: "Switzerland", t: "contra", ev: 3, h: "Sospecha de fuga hacia Rusia", x: "La Fiscalía Federal investiga si datos secretos del SRC llegaron a Rusia; un informe presentado por el ministro de Defensa dejó preguntas abiertas.", u: "https://www.srf.ch/news/schweiz/spionageverdacht-im-ndb-bericht-zur-russlandaffaere-entscheidende-fragen-bleiben-offen", st: "SRF" }
  ],
  interest: {
    "Russia": 3, "China": 2, "Iran": 2, "Germany": 1, "France": 1, "Italy": 1, "United States of America": 1, "Ukraine": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1950–1989", h: "Fichas de la policía federal", x: "Vigilancia masiva de supuestos subversivos.", ctx: "Guerra Fría y anticomunismo." },
    { era: "", d: "1970–2018", h: "Crypto AG", x: "La CIA y el BND controlan en secreto una empresa suiza de cifrado.", ctx: "Neutralidad suiza como cobertura comercial." },
    { era: "Siglo XXI", d: "2010", h: "Nace el SRC", x: "Se fusionan la inteligencia exterior e interior.", ctx: "Fusión de los servicios interior y exterior." },
    { era: "", d: "2016", h: "Referéndum", x: "Los votantes aprueban la ley de inteligencia.", ctx: "Ola de atentados en Europa." },
    { era: "Actual", d: "2025–2026", h: "Crisis y Rusia", x: "Nuevo director, reestructuración y sospecha de fuga de datos.", now: true, ctx: "Guerra en Ucrania y debate sobre la neutralidad." }
  ],
  cases: [
    { ev: 1, ilegal: false, d: "1970–2018", h: "Crypto AG", x: "Investigaciones de prensa de 2020 mostraron que la CIA y el BND compraron en secreto la empresa suiza y manipularon sus máquinas para leer las comunicaciones de más de 100 gobiernos. Una investigación parlamentaria suiza concluyó que el servicio suizo sabía de la operación desde 1993 y la aprovechó.", who: "Delegación de las Comisiones de Gestión del Parlamento suizo", missing: "", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1950–1989", h: "El escándalo de las fichas", x: "La policía federal reunió fichas sobre unas 900.000 personas y organizaciones, en su mayoría sin sospecha de delito. El escándalo llevó a reformas y a que los afectados pudieran ver sus archivos.", who: "Comisión parlamentaria de investigación", missing: "", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 3, ilegal: true, d: "2026", h: "La fuga hacia Rusia", x: "Una investigación sobre la división de ciberseguridad del SRC detectó \"incertidumbres\" sobre si datos secretos llegaron a Rusia. La Fiscalía Federal investiga; no hay acusados públicos.", who: "Gobierno suizo y Fiscalía Federal", missing: "El resultado de la investigación penal.", u: "https://www.srf.ch/news/schweiz/spionageverdacht-im-ndb-bericht-zur-russlandaffaere-entscheidende-fragen-bleiben-offen", st: "SRF" }
  ],
  failures: [
    { k: "falla", d: "2016–2026", ev: 2, w: 2, h: "La crisis interna del SRC", x: "Una reestructuración prolongada provocó salidas de personal y paralizó parte del trabajo del servicio, según la prensa suiza.", why: "La crisis la reconoció el nuevo director; su impacto operativo se discute.", wx: "Declaraciones oficiales y prensa.", who: "Director del SRC y prensa suiza", u: "https://www.srf.ch/news/schweiz/umbruch-an-der-spitze-warum-baut-der-neue-chef-schon-wieder-um-beim-nachrichtendienst", st: "SRF" }
  ],
  modus: {
    embajadas: "El SRC tiene pocos oficiales en el exterior; Rusia, en cambio, usa sus misiones en Ginebra y Berna como cobertura, según el servicio suizo.",
    campo: "Fuentes humanas en el país y cooperación con servicios extranjeros.",
    oficina: "El SRC produce el informe anual Seguridad Suiza y evaluaciones para el gobierno.",
    reclutamiento: "Concursos públicos; personal policial y militar en comisión.",
    tecnica: "Interceptación satelital Onyx, rastreo de cables con autorización judicial y entrada a sistemas.",
    enlaces: "Cooperación con servicios europeos y de EE.UU., pese a la neutralidad."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "1962–1975", n: "Jean-Louis Jeanmaire", h: "El brigadier que trabajó para Moscú", x: "Pasó información militar a agregados soviéticos durante más de una década.", cargo: "Brigadier, jefe de la defensa aérea civil", hacia: "Inteligencia militar soviética (GRU)", fin: "Condenado a 18 años en 1977; liberado en 1988.", who: "Tribunal militar suizo", u: "https://en.wikipedia.org/wiki/Jean-Louis_Jeanmaire", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1993–2020", h: "Lo que sabía el servicio suizo de Crypto AG", x: "El servicio suizo conocía la operación de la CIA y el BND y no informó al gobierno.", obj: "Obtener información de la operación.", aquien: "El Consejo Federal", como: "Investigaciones de medios en 2020 y la investigación parlamentaria.", who: "Delegación de las Comisiones de Gestión del Parlamento", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" },
    { k: "robo", rol: "blanco", ev: 3, d: "2026", h: "Datos del SRC", x: "La Fiscalía investiga si datos secretos del servicio llegaron a Rusia.", obj: "No determinado.", who: "Fiscalía Federal", u: "https://buttondown.com/frontpageseu/archive/switzerland-intelligence-agency-data-leak-probe/", st: "FrontPages.eu (síntesis de prensa suiza)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La policía federal fichó a funcionarios y ciudadanos durante la Guerra Fría.", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Partidos de izquierda y sus militantes figuraban en las fichas reveladas en 1989.", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Periodistas figuraban entre los fichados por la policía federal.", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Pacifistas y antinucleares fueron fichados durante la Guerra Fría.", u: "https://en.wikipedia.org/wiki/Secret_files_scandal", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "El servicio suizo aprovechó la información de Crypto AG sobre gobiernos de todo el mundo, según el Parlamento.", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 1, x: "Crypto AG operó desde Suiza; una investigación parlamentaria de 2020 concluyó que el servicio de inteligencia suizo conocía la operación de la CIA y el BND.", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia: Crypto AG" },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 1, x: "Crypto AG, una empresa suiza, fue el vehículo de una operación de espionaje mundial.", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Coopera con servicios europeos y de EE.UU.; el nuevo director quiere ampliar esas alianzas.", u: "https://www.blick.ch/themen/nachrichtendienst-des-bundes", st: "Blick" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del SRC es público dentro del de Defensa. Esta ficha no encontró la cifra de 2026 verificada; el director pidió más recursos.",
    uso: "Personal, interceptación y reestructuración del servicio.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Crypto AG fue una empresa de fachada de servicios extranjeros en territorio suizo.",
    bancos: "Los bancos suizos son blanco frecuente de servicios extranjeros que buscan rastrear fondos.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura del servicio suizo."
  },
  fondos: [
    { k: "fachada", rol: "blanco", ev: 1, d: "1970–2018", h: "Crypto AG", x: "La CIA y el BND compraron la empresa por medio de una fundación de Liechtenstein y la usaron como fachada.", monto: "Unos 5,75 millones de dólares en la compra de 1970, según la prensa", obj: "Espiar comunicaciones de gobiernos de todo el mundo.", who: "Washington Post, ZDF y SRF", u: "https://en.wikipedia.org/wiki/Crypto_AG", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Crypto AG", c: "nacional", rubro: "Cifrado", rel: "Fachada extranjera", x: "Propiedad secreta de la CIA y el BND; disuelta en 2018." }
  ],
  struggles: [
    { a: "Dirección del SRC", b: "Personal del servicio", k: "Interna", stake: "La reestructuración", state: "Abierta", x: "Años de reformas generaron salidas y malestar; el nuevo director busca cerrarlas en 2026." }
  ],
  proxies: [
  ],
  cuentas: {"n": 2, "x": "Comisiones parlamentarias por el escándalo de las fichas y por Crypto AG."},
  doctrina: [{"h": "Neutralidad armada", "x": "Servicio pequeño concentrado en el contraespionaje dentro del país."}],
  sources: [
    { t: "Swissinfo: la situación de seguridad empeora (2026)", u: "https://swissinfo.ch/eng/foreign-affairs/switzerlands-security-situation-has-deteriorated-further-according-to-the-src/91650054" },
    { t: "SRF: el informe sobre la sospecha de espionaje en el SRC", u: "https://www.srf.ch/news/schweiz/spionageverdacht-im-ndb-bericht-zur-russlandaffaere-entscheidende-fragen-bleiben-offen" },
    { t: "Admin.ch: nombramiento de Serge Bavaud", u: "https://www.admin.ch/de/newnsb/f9t8-q8vlWDfMgsQF5IHm" },
    { t: "Wikipedia: Crypto AG", u: "https://en.wikipedia.org/wiki/Crypto_AG" }
  ]
};
