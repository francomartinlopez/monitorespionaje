// Ficha de Serbia · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["rs"] = {
  id: "rs",
  updated: "2026-11-16",
  summary: [
    "La Agencia de Información de Seguridad (BIA) es el servicio civil de Serbia, y la Agencia de Inteligencia Militar (VOA) y la Agencia de Seguridad Militar (VBA) cubren lo militar. Serbia equilibra su candidatura a la Unión Europea con lazos estrechos con Rusia y China, y sus servicios cooperan con los rusos.",
    "En diciembre de 2024 Amnistía Internacional reveló que la policía y la BIA usaron herramientas forenses de la empresa Cellebrite y un programa espía propio, NoviSpy, para infectar teléfonos de periodistas y activistas. Desde noviembre de 2024 el país vive protestas masivas tras la caída de un techo en la estación de Novi Sad, que mató a 16 personas.",
    "El ex jefe de la BIA Aleksandar Vulin fue sancionado por EE.UU. en 2023 por sus vínculos con Rusia y con el narcotráfico, según Washington. El presidente Aleksandar Vučić dijo en 2025 que servicios extranjeros alientan las protestas; Rusia afirmó haberle advertido de una \"revolución de colores\"."
  ],
  keyFacts: [
    { l: "Programa espía NoviSpy", v: "Revelado en diciembre de 2024", n: "según Amnistía Internacional" },
    { l: "Ex jefe de la BIA sancionado", v: "Aleksandar Vulin", n: "por EE.UU., julio de 2023" },
    { l: "Protestas", v: "Desde noviembre de 2024", n: "tras el derrumbe de Novi Sad" },
    { l: "Presidente", v: "Aleksandar Vučić", n: "desde 2017" }
  ],
  power: { humana: 3, senales: 2, ciber: 2, imagenes: 1, encubierta: 2, contra: 3 },
  powerWhy: {
    humana: "Redes en los Balcanes y en la diáspora; cooperación con servicios rusos.",
    senales: "Escuchas internas con capacidad moderada.",
    ciber: "Usó herramientas comerciales y un programa espía propio contra activistas, según Amnistía.",
    imagenes: "Sin capacidades propias.",
    encubierta: "Operaciones en Kosovo y la región denunciadas por vecinos.",
    contra: "Control interno amplio y orientado a la oposición, según sus críticos."
  },
  priorities: [
    { h: "Protestas", x: "Movimiento estudiantil desde 2024." },
    { h: "Kosovo", x: "Comunidad serbia y tensiones con Pristina." },
    { h: "Vecinos", x: "Bosnia, Montenegro y Croacia." },
    { h: "Rusia y Occidente", x: "Equilibrio entre ambos bloques." },
    { h: "Crimen organizado", x: "Clanes balcánicos del narcotráfico." }
  ],
  focos: ["Kosovo", "Protestas", "Bosnia", "Montenegro", "Rusia"],
  bodies: {
    "CSN": { since: 2007, how: "Consejo de Seguridad Nacional presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Belgrado"] },
    "BIA": { since: 2002, how: "Agencia de Información de Seguridad: inteligencia civil interior y exterior y contraespionaje.", staff: "No se publica.", budget: "Secreto en parte.", tech: ["NoviSpy", "Herramientas forenses"], where: ["Belgrado"] },
    "VOA": { since: 2010, how: "Agencia de Inteligencia Militar: inteligencia exterior militar.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Belgrado"] },
    "VBA": { since: 2010, how: "Agencia de Seguridad Militar: contrainteligencia en las Fuerzas Armadas.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Belgrado"] }
  },
  civil: [
    "La BIA responde al gobierno y, en la práctica, al presidente Vučić.",
    "Una comisión parlamentaria controla a los servicios con poca eficacia, según sus críticos.",
    "El ex jefe de la BIA pasó a ser viceprimer ministro pese a las sanciones de EE.UU."
  ],
  law: {
    domestic: [
      "La ley de la BIA de 2002 regula sus facultades.",
      "Las escuchas necesitan orden judicial, pero el control es débil según organizaciones locales.",
      "Una ley de 2024 amplió la vigilancia de la policía."
    ],
    foreign: [
      "La BIA y la VOA operan en el exterior sin normas públicas detalladas."
    ],
    oversight: [
      "Comisión de Control de los Servicios de Seguridad del Parlamento.",
      "Defensor del Pueblo y comisionado de protección de datos."
    ]
  },
  rights: [
    { d: "2002", dir: "recorta", area: "Debido proceso", h: "Nace la BIA", x: "Reemplaza al servicio de seguridad del régimen de Milošević." },
    { d: "2024-12", dir: "amplia", area: "Privacidad", h: "NoviSpy", x: "Amnistía revela la infección de teléfonos de activistas durante interrogatorios." }
  ],
  events: [
    {"d": "1999-04-11", "lat": 44.81, "lon": 20.46, "c": "Serbia", "t": "encubierta", "ev": 2, "h": "Asesinato de Slavko Ćuruvija", "x": "Matan a tiros al periodista crítico de Milošević frente a su casa en Belgrado.", "u": "https://en.wikipedia.org/wiki/Slavko_%C4%86uruvija", "st": "Wikipedia: Slavko Ćuruvija"},
    {"d": "2003-03-12", "lat": 44.81, "lon": 20.47, "c": "Serbia", "t": "encubierta", "ev": 1, "h": "Asesinato de Zoran Đinđić", "x": "Un francotirador mata al primer ministro frente a la sede del gobierno.", "u": "https://en.wikipedia.org/wiki/Assassination_of_Zoran_%C4%90in%C4%91i%C4%87", "st": "Wikipedia: asesinato de Zoran Đinđić"},
    {"d": "2023-09-24", "lat": 42.97, "lon": 20.78, "c": "Kosovo", "t": "encubierta", "ev": 2, "h": "Ataque de Banjska", "x": "Un grupo armado serbio mata a un policía kosovar; Kosovo acusa a Belgrado de apoyarlo.", "u": "https://en.wikipedia.org/wiki/Banjska_attack", "st": "Wikipedia: ataque de Banjska"},
    { d: "2024-02", lat: 44.8, lon: 20.46, c: "Serbia", t: "ciber", ev: 2, h: "Infección de teléfonos de periodistas", x: "Policías y agentes de la BIA desbloquean teléfonos con Cellebrite e instalan NoviSpy, según Amnistía.", u: "https://www.amnesty.org/en/latest/news/2024/12/serbia-authorities-using-spyware-and-cellebrite-forensic-extraction-tools-to-hack-journalists-and-activists/", st: "Amnistía Internacional" },
    { d: "2024-11-01", lat: 45.26, lon: 19.83, c: "Serbia", t: "contra", ev: 1, h: "Derrumbe en Novi Sad", x: "El techo de la estación renovada mata a 16 personas y desata protestas masivas.", u: "https://en.wikipedia.org/wiki/Novi_Sad_railway_station_canopy_collapse", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Kosovo": 3, "Bosnia and Herz.": 2, "Montenegro": 2, "Croatia": 2, "Russia": 1, "Hungary": 1, "Albania": 1
  },
  timeline: [
    { era: "Yugoslavia", d: "1946", h: "UDBA", x: "Policía política yugoslava, con asesinatos de emigrados.", ctx: "Yugoslavia de Tito." },
    { era: "Milošević", d: "1991–1999", h: "Guerras yugoslavas", x: "Servicios ligados a paramilitares y crímenes de guerra.", ctx: "Disolución de Yugoslavia." },
    { era: "Democracia", d: "2002", h: "Nace la BIA", x: "Reforma de los servicios.", ctx: "Caída de Milošević." },
    { era: "Vučić", d: "2022–2023", h: "Vulin al frente de la BIA", x: "Acercamiento a Rusia y sanciones de EE.UU.", ctx: "Guerra en Ucrania." },
    { era: "Actual", d: "2024–2026", h: "Protestas y espionaje", x: "NoviSpy y represión de protestas.", now: true, ctx: "Protestas contra Vučić." }
  ],
  cases: [
    { ev: 2, ilegal: true, d: "2023–2024", h: "NoviSpy", x: "Amnistía documentó que policías y agentes de la BIA desbloquearon teléfonos de periodistas y activistas detenidos con herramientas de Cellebrite e instalaron un programa espía de desarrollo local. La BIA lo negó; Cellebrite suspendió a algunos clientes serbios.", who: "Amnistía Internacional", missing: "Reconocimiento oficial o investigación judicial.", u: "https://www.amnesty.org/en/latest/news/2024/12/serbia-authorities-using-spyware-and-cellebrite-forensic-extraction-tools-to-hack-journalists-and-activists/", st: "Amnistía Internacional" },
    { ev: 2, ilegal: true, d: "2022–2023", h: "Aleksandar Vulin", x: "El Tesoro de EE.UU. sancionó en 2023 al jefe de la BIA por facilitar actividades rusas en Serbia y por vínculos con una red de narcotráfico. Vulin lo negó y Serbia no lo investigó.", who: "Departamento del Tesoro de EE.UU.", missing: "Un proceso judicial.", u: "https://en.wikipedia.org/wiki/Aleksandar_Vulin", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1946–1990", h: "Los asesinatos de la UDBA", x: "Tribunales alemanes condenaron a ex agentes de la policía secreta yugoslava por el asesinato de emigrados croatas en Alemania.", who: "Tribunal Regional Superior de Múnich", missing: "", u: "https://en.wikipedia.org/wiki/UDBA", st: "Wikipedia (síntesis de fuentes)" },
    {"ev": 1, "ilegal": true, "d": "2003", "h": "El asesinato de Đinđić", "x": "La justicia condenó a ex miembros de la Unidad de Operaciones Especiales de la Seguridad del Estado y del clan mafioso de Zemun. Nunca se aclaró quién dio la orden política.", "who": "Tribunal Especial de Belgrado", "missing": "", "u": "https://en.wikipedia.org/wiki/Assassination_of_Zoran_%C4%90in%C4%91i%C4%87", "st": "Wikipedia: asesinato de Zoran Đinđić"},
    {"ev": 2, "ilegal": true, "d": "1999–2024", "h": "El asesinato de Ćuruvija", "x": "Cuatro ex agentes de la Seguridad del Estado fueron condenados en dos juicios; un tribunal de apelación los absolvió en 2024.", "who": "Fiscalía serbia", "missing": "Una condena firme.", "u": "https://en.wikipedia.org/wiki/Slavko_%C4%86uruvija", "st": "Wikipedia: Slavko Ćuruvija"}
  ],
  failures: [
    { k: "falla", d: "2024-11", ev: 1, w: 3, h: "Novi Sad", x: "El derrumbe expuso corrupción en obras públicas y desató la mayor crisis del gobierno de Vučić.", why: "El derrumbe está probado; la responsabilidad penal se investiga.", wx: "Proceso judicial en curso.", who: "Fiscalía de Novi Sad", u: "https://en.wikipedia.org/wiki/Novi_Sad_railway_station_canopy_collapse", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales en embajadas de la región y en Moscú.",
    campo: "Redes en Kosovo, Bosnia y Montenegro.",
    oficina: "Los servicios informan al presidente.",
    reclutamiento: "Personal policial y militar.",
    tecnica: "Herramientas forenses comerciales y programas espía propios, según Amnistía.",
    enlaces: "Cooperación con servicios rusos y, en menor medida, con occidentales."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 2, d: "2022–2023", n: "Aleksandar Vulin", h: "El jefe de la BIA cercano a Moscú", x: "Según EE.UU., usó su cargo para favorecer a Rusia.", cargo: "Director de la BIA", hacia: "Rusia, según el Tesoro de EE.UU.", fin: "Sancionado por EE.UU.; luego viceprimer ministro.", who: "Departamento del Tesoro de EE.UU.", u: "https://en.wikipedia.org/wiki/Aleksandar_Vulin", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "desinfo", rol: "autor", ev: 2, d: "2025", h: "La revolución de colores", x: "El gobierno y medios afines acusan a servicios occidentales de financiar las protestas estudiantiles.", obj: "Desacreditar a los manifestantes.", who: "Organizaciones de medios y observadores", u: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Serbian_anti-corruption_protests", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 2, x: "Opositores denunciaron vigilancia durante las protestas.", u: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Serbian_anti-corruption_protests", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 2, x: "Periodistas fueron infectados con NoviSpy, según Amnistía.", u: "https://www.amnesty.org/en/latest/news/2024/12/serbia-authorities-using-spyware-and-cellebrite-forensic-extraction-tools-to-hack-journalists-and-activists/", st: "Amnistía Internacional" },
    activistas: { ev: 2, x: "Activistas ambientales y de derechos humanos fueron espiados, según Amnistía.", u: "https://www.amnesty.org/en/latest/news/2024/12/serbia-authorities-using-spyware-and-cellebrite-forensic-extraction-tools-to-hack-journalists-and-activists/", st: "Amnistía Internacional" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Kosovo es el blanco central de los servicios.", u: "https://en.wikipedia.org/wiki/Security_Intelligence_Agency", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "La UDBA yugoslava asesinó a emigrados en el exterior.", u: "https://en.wikipedia.org/wiki/UDBA", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    propaganda: { ev: 2, x: "Medios afines difunden la tesis de una conspiración extranjera contra el gobierno.", u: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Serbian_anti-corruption_protests", st: "Wikipedia (síntesis de fuentes)" },
    conflictos: { ev: 2, x: "Kosovo acusó a Serbia de apoyar al grupo armado que atacó en Banjska en 2023.", u: "https://en.wikipedia.org/wiki/Banjska_attack", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 3, x: "Montenegro acusó a nacionalistas serbios y a agentes rusos de un intento de golpe en 2016; Serbia lo niega.", u: "https://en.wikipedia.org/wiki/2016_Montenegrin_coup_plot", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 2, x: "Kosovo halló armas de origen serbio tras el ataque de Banjska.", u: "https://en.wikipedia.org/wiki/Banjska_attack", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 2, x: "Coopera con servicios rusos, según EE.UU. y Moscú.", u: "https://en.wikipedia.org/wiki/Aleksandar_Vulin", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de la BIA es parcialmente secreto.",
    uso: "Vigilancia, contraespionaje y operaciones regionales.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "EE.UU. vinculó al ex jefe de la BIA con una red de narcotráfico.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "crimen", rol: "autor", ev: 2, d: "2022–2023", h: "Las sanciones a Vulin", x: "El Tesoro de EE.UU. dijo que Vulin estaba involucrado en tráfico de armas y drogas y en abuso de su cargo.", obj: "Beneficio personal y favorecer a Rusia, según EE.UU.", who: "Departamento del Tesoro de EE.UU.", u: "https://en.wikipedia.org/wiki/Aleksandar_Vulin", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Cellebrite", c: "extranjera", rubro: "Herramientas forenses", rel: "Proveedor", x: "Sus equipos sirvieron para desbloquear teléfonos de activistas, según Amnistía." }
  ],
  struggles: [
    { a: "Gobierno de Vučić", b: "Movimiento estudiantil", k: "Con la política", stake: "La corrupción y el poder", state: "Abierta", x: "Protestas masivas desde 2024." }
  ],
  proxies: [
    {"id": "arkan", "s": "Tigres de Arkan", "n": "Guardia Voluntaria Serbia (Tigres de Arkan)", "k": "armado", "d": "1990–1996", "rol": "patrocina", "hoy": false, "ev": 1, "x": "Paramilitares dirigidos y equipados por la Seguridad del Estado serbia durante las guerras yugoslavas, según el Tribunal de La Haya.", "who": "Tribunal Penal Internacional para la ex Yugoslavia", "u": "https://en.wikipedia.org/wiki/Serb_Volunteer_Guard", "st": "Wikipedia: Serb Volunteer Guard"}
  ],
  cuentas: {"n": 1, "x": "El caso NoviSpy no se investigó."},
  doctrina: [{"h": "Entre dos sillas", "x": "Coopera con Rusia y China mientras negocia con la UE."}],
  sources: [
    { t: "Amnistía: NoviSpy y Cellebrite en Serbia (2024)", u: "https://www.amnesty.org/en/latest/news/2024/12/serbia-authorities-using-spyware-and-cellebrite-forensic-extraction-tools-to-hack-journalists-and-activists/" },
    { t: "Wikipedia: Aleksandar Vulin", u: "https://en.wikipedia.org/wiki/Aleksandar_Vulin" },
    { t: "Wikipedia: Security Intelligence Agency", u: "https://en.wikipedia.org/wiki/Security_Intelligence_Agency" }
  ]
};
