// Ficha de Chipre · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["cy"] = {
  id: "cy",
  updated: "2026-11-16",
  summary: [
    "El Servicio de Información de Chipre (KYP) depende del presidente y tiene como prioridad a Turquía, que ocupa el norte de la isla desde 1974. Chipre está a menos de 300 kilómetros de Líbano, Siria e Israel, lo que la convierte en un punto de paso para servicios de todo el Mediterráneo oriental, y su sector financiero atrajo durante años dinero ruso.",
    "La isla fue base de empresas de vigilancia privadas. En 2019 la policía detuvo cerca de Lárnaca a empleados de una empresa del israelí Tal Dilian, fundador de Intellexa, por una camioneta capaz de interceptar teléfonos; la causa se cerró en 2021. Investigaciones de periodistas de 2023, conocidas como Cyprus Confidential, mostraron a Chipre como centro de la red de Intellexa y de servicios financieros para oligarcas rusos.",
    "En enero de 2026, cuando Chipre asumía la presidencia de la Unión Europea, circuló un video grabado en secreto que acusaba a colaboradores del presidente Nikos Christodoulides de financiamiento irregular de campaña. El gobierno habló de un ataque híbrido; en abril la empresa israelí de inteligencia privada Black Cube admitió haberlo producido, sin decir quién la contrató."
  ],
  keyFacts: [
    { l: "Video del escándalo", v: "8 de enero de 2026", n: "producido por Black Cube, según la propia empresa" },
    { l: "Renuncia", v: "Jefe de gabinete del presidente", n: "tras el video, enero de 2026" },
    { l: "Camioneta espía", v: "2019", n: "empresa de Tal Dilian; causa cerrada en 2021" },
    { l: "Dependencia del KYP", v: "Presidencia", n: "ley de 2016" }
  ],
  power: { humana: 2, senales: 2, ciber: 1, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Fuentes en la parte norte de la isla y en Turquía; servicio chico.",
    senales: "Capacidad limitada; la isla alberga bases británicas de interceptación ajenas al Estado chipriota.",
    ciber: "Capacidad propia mínima.",
    imagenes: "Sin capacidades propias.",
    encubierta: "No hay operaciones encubiertas documentadas.",
    contra: "Frustró planes iraníes con ayuda extranjera, pero empresas privadas de vigilancia operaron con libertad."
  },
  priorities: [
    { h: "Turquía", x: "Ocupación del norte, Egeo y gas." },
    { h: "Mediterráneo oriental", x: "Israel, Líbano, Siria y Gaza." },
    { h: "Irán y Hezbolá", x: "Planes contra israelíes en la isla." },
    { h: "Dinero ruso", x: "Sanciones y lavado." },
    { h: "Migración", x: "Llegadas por la Línea Verde y por mar." }
  ],
  focos: ["Turquía", "Israel", "Líbano", "Irán", "Rusia"],
  bodies: {
    "CNS": { since: 2016, how: "Consejo Nacional de Seguridad presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Nicosia"] },
    "KYP": { since: 1970, how: "Servicio de Información de Chipre: inteligencia y contrainteligencia, bajo control directo del presidente desde la ley de 2016.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Nicosia"] },
    "Guardia": { since: 1964, how: "Inteligencia de la Guardia Nacional: inteligencia militar centrada en las fuerzas turcas del norte.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Nicosia"] },
    "Policía": { since: 1960, how: "Policía de Chipre: investiga delitos de seguridad, incluidos planes terroristas y el caso de la camioneta espía.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Nicosia", "Todo el país"] }
  },
  civil: [
    "El presidente nombra al jefe del KYP, que le responde directamente.",
    "El Parlamento tiene un control limitado sobre el servicio.",
    "Según la prensa, el KYP ayudó a las autoridades a contactar a Black Cube en la investigación de 2026."
  ],
  law: {
    domestic: [
      "La ley del KYP de 2016 dio base legal al servicio y regula sus escuchas.",
      "Las escuchas necesitan autorización judicial.",
      "Una reforma de 2020 amplió el acceso a datos de comunicaciones por razones de seguridad."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "Comité de tres miembros que supervisa las escuchas del KYP.",
      "Fiscal general, que dirige las investigaciones penales."
    ]
  },
  rights: [
    { d: "2016-05", dir: "recorta", area: "Privacidad", h: "Ley del KYP", x: "El servicio pasa a tener base legal y un control de sus escuchas." },
    { d: "2020", dir: "amplia", area: "Privacidad", h: "Acceso a datos", x: "Se amplía el acceso de las autoridades a datos de comunicaciones." }
  ],
  events: [
    { d: "2015-05", lat: 34.92, lon: 33.55, c: "Cyprus", t: "contra", ev: 1, h: "Explosivos de Hezbolá en Lárnaca", x: "La policía halla casi nueve toneladas de nitrato de amonio en un depósito de un miembro de Hezbolá, que fue condenado.", u: "https://en.wikipedia.org/wiki/Hezbollah", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2019-11", lat: 34.93, lon: 33.6, c: "Cyprus", t: "senales", ev: 1, h: "La camioneta espía", x: "Detienen a empleados de una empresa de Tal Dilian por una camioneta capaz de interceptar teléfonos; la causa se cerró en 2021.", u: "https://eualive.net/eus-spyware-scandal-deepens-black-cube-and-intellexa-thrived-in-greece-cyprus-slovenia-amid-brussels-inaction/", st: "Bosphorus News, vía EU Alive" },
    { d: "2026-01-08", lat: 34.95, lon: 33.15, c: "Cyprus", t: "humana", ev: 1, h: "El video contra el presidente", x: "Circula un video grabado en secreto sobre el financiamiento de la campaña presidencial; Black Cube admitió haberlo producido.", u: "https://cyprus-mail.com/2026/04/10/israeli-private-intelligence-agency-allegedly-behind-christodoulides-corruption-video", st: "Cyprus Mail" }
  ],
  interest: {
    "Turkey": 3, "N. Cyprus": 3, "Israel": 2, "Lebanon": 2, "Syria": 2, "Greece": 2, "Iran": 1, "Russia": 1, "Egypt": 1
  },
  timeline: [
    { era: "Independencia", d: "1970", h: "Nace el KYP", x: "Se crea el servicio bajo la presidencia de Makarios." },
    { era: "", d: "1974", h: "Golpe e invasión", x: "Golpe impulsado por la junta griega e invasión turca del norte." },
    { era: "Siglo XXI", d: "2016", h: "Ley del KYP", x: "Primer marco legal del servicio." },
    { era: "", d: "2019", h: "Camioneta espía", x: "Expone a la industria privada de vigilancia en la isla." },
    { era: "Actual", d: "2026", h: "Videogate", x: "Un video producido por Black Cube sacude al gobierno.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: false, d: "2025–2026", h: "El video de Black Cube", x: "Un video con grabaciones ocultas acusó a allegados del presidente de manejar fondos de campaña irregulares, y su jefe de gabinete renunció. Black Cube admitió en abril de 2026 haberlo producido. En julio el investigador designado dijo que no encontró indicios de delito en los implicados y sugirió que pudo ser un ataque híbrido.", who: "Investigador designado por el fiscal general y Black Cube", missing: "", u: "https://cyprus-mail.com/2026/07/20/no-criminal-wrongdoing-indicated-in-videogate-investigator-says", st: "Cyprus Mail" },
    { ev: 3, ilegal: true, d: "2025–2026", h: "Quién encargó el video", x: "El gobierno habló de un ataque híbrido y el investigador habló de grandes sumas pagadas a Black Cube. La empresa no reveló su cliente; partidos de oposición y la prensa especularon con un Estado detrás.", who: "Gobierno de Chipre y prensa", missing: "La identidad del cliente.", u: "https://en.politis.com.cy/news/cy-news/1020862/videogate-probe-split-over-black-cubes-motive", st: "Politis" },
    { ev: 1, ilegal: true, d: "2015", h: "El depósito de Hezbolá", x: "La policía chipriota encontró toneladas de nitrato de amonio guardadas por un miembro de Hezbolá en Lárnaca. Fue condenado a seis años.", who: "Justicia de Chipre", missing: "", u: "https://en.wikipedia.org/wiki/Hezbollah", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2025–2026", ev: 1, w: 3, h: "Una operación privada sobre el entorno presidencial", x: "Agentes de una empresa extranjera grabaron en secreto a allegados del presidente sin que los servicios lo detectaran.", why: "No está en duda; la empresa lo admitió.", wx: "Declaraciones de Black Cube e investigación oficial.", who: "Investigación oficial", u: "https://cyprus-mail.com/2026/06/11/fresh-leads-emerge-in-videogate-probe", st: "Cyprus Mail" }
  ],
  modus: {
    embajadas: "El KYP tiene presencia limitada en el exterior.",
    campo: "Fuentes en el norte ocupado y en las comunidades de la región.",
    oficina: "El servicio informa directamente al presidente.",
    reclutamiento: "Personal policial y militar.",
    tecnica: "Escuchas con autorización judicial; capacidades modestas.",
    enlaces: "Cooperación estrecha con Grecia e Israel, y con EE.UU. y el Reino Unido."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 3, d: "2022", n: "Makarios Drousiotis", h: "El periodista que denunció espionaje", x: "Periodista crítico del gobierno anterior que dijo que su teléfono fue atacado con Predator.", cargo: "Periodista", hacia: "Prensa y Justicia", fin: "No hubo conclusión oficial.", who: "El propio periodista", u: "https://eualive.net/eus-spyware-scandal-deepens-black-cube-and-intellexa-thrived-in-greece-cyprus-slovenia-amid-brussels-inaction/", st: "Bosphorus News, vía EU Alive" }
  ],
  leaks: [
    { k: "desinfo", rol: "blanco", ev: 2, d: "2026-01", h: "La difusión del video", x: "Una cuenta con foto generada por inteligencia artificial publicó el video, que se difundió en horas en medios chipriotas.", obj: "Dañar al gobierno durante la presidencia europea.", who: "Observatorio europeo de medios digitales (EDMO)", u: "https://edmo.eu/publications/cyprus-report-on-the-videogate-incident/", st: "EDMO" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados con prueba." },
    periodistas: { ev: 3, x: "Un periodista denunció ataques con Predator, sin conclusión oficial.", u: "https://eualive.net/eus-spyware-scandal-deepens-black-cube-and-intellexa-thrived-in-greece-cyprus-slovenia-amid-brussels-inaction/", st: "Bosphorus News, vía EU Alive" },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Turquía es el blanco central de la inteligencia chipriota.", u: "https://en.wikipedia.org/wiki/Cyprus_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Coopera con Israel, EE.UU. y Grecia; pidió ayuda a EE.UU. e Israel en la investigación del video.", u: "https://theins.ru/en/news/288532", st: "The Insider" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del KYP es secreto.",
    uso: "Personal y operaciones en la isla.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Empresas de vigilancia extranjeras, como las de Intellexa, se registraron en Chipre, según Cyprus Confidential.",
    bancos: "El sector financiero chipriota sirvió a oligarcas rusos, según investigaciones periodísticas de 2023.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales por el KYP.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "banco", rol: "blanco", ev: 2, d: "2010–2023", h: "Cyprus Confidential", x: "Documentos filtrados mostraron cómo proveedores de servicios chipriotas ayudaron a oligarcas rusos y a la red de Intellexa.", obj: "Ocultar dinero y eludir controles.", who: "Consorcio Internacional de Periodistas de Investigación (ICIJ)", u: "https://eualive.net/eus-spyware-scandal-deepens-black-cube-and-intellexa-thrived-in-greece-cyprus-slovenia-amid-brussels-inaction/", st: "Bosphorus News, vía EU Alive" },
    { k: "cobertura", rol: "blanco", ev: 1, d: "2025–2026", h: "Los pagos a Black Cube", x: "El investigador oficial dijo que Black Cube recibió grandes sumas por la operación, de un cliente no identificado.", obj: "Producir el video contra el entorno presidencial.", who: "Investigador designado por el fiscal general", u: "https://cyprus-mail.com/2026/07/20/no-criminal-wrongdoing-indicated-in-videogate-investigator-says", st: "Cyprus Mail" }
  ],
  companies: [
    { n: "Black Cube", c: "extranjera", rubro: "Inteligencia privada", rel: "Autora del video", x: "Empresa israelí que admitió haber producido el video de 2026." },
    { n: "Intellexa", c: "extranjera", rubro: "Programas espía", rel: "Con base en la isla", x: "Usó Chipre como centro de operaciones, según Cyprus Confidential." }
  ],
  struggles: [
    { a: "Gobierno de Christodoulides", b: "Oposición (AKEL)", k: "Con la política", stake: "El videogate", state: "Abierta", x: "La oposición pide transparencia y habla de posible encubrimiento." }
  ],
  sources: [
    { t: "Cyprus Mail: Black Cube detrás del video (2026)", u: "https://cyprus-mail.com/2026/04/10/israeli-private-intelligence-agency-allegedly-behind-christodoulides-corruption-video" },
    { t: "Cyprus Mail: el investigador no encuentra delitos", u: "https://cyprus-mail.com/2026/07/20/no-criminal-wrongdoing-indicated-in-videogate-investigator-says" },
    { t: "EDMO: informe sobre el videogate", u: "https://edmo.eu/publications/cyprus-report-on-the-videogate-incident/" },
    { t: "Politis: la investigación dividida sobre el motivo", u: "https://en.politis.com.cy/news/cy-news/1020862/videogate-probe-split-over-black-cubes-motive" }
  ]
};
