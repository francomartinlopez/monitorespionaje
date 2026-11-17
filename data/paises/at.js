// Ficha de Austria · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["at"] = {
  id: "at",
  updated: "2026-11-16",
  summary: [
    "Viena, sede de la ONU, la OSCE y la OPEP, es desde la Guerra Fría una de las capitales del espionaje mundial. La ley austríaca castigó hasta hace poco solo el espionaje dirigido contra la propia Austria, lo que permitió a servicios extranjeros operar con libertad. Austria no tiene un servicio civil de inteligencia exterior: sus servicios son la Dirección de Seguridad del Estado e Inteligencia (DSN) y los dos servicios militares.",
    "La DSN nació en 2021 para reemplazar a la Oficina para la Protección de la Constitución (BVT). La BVT quedó desacreditada después de que el Ministerio del Interior de Herbert Kickl ordenara allanarla en 2018, y servicios aliados redujeran el intercambio de información. En noviembre de 2020 un atentado yihadista en Viena mató a cuatro personas pese a advertencias previas.",
    "En mayo de 2026 un jurado de Viena condenó al ex oficial de la BVT Egisto Ott a cuatro años y un mes por espiar para Rusia como cómplice de Jan Marsalek, ex directivo de Wirecard prófugo en Rusia. Ott ayudó a localizar al periodista de investigación Christo Grozev, según la fiscalía."
  ],
  keyFacts: [
    { l: "Condena de Egisto Ott", v: "4 años y 1 mes", n: "mayo de 2026, apelada" },
    { l: "Nace la DSN", v: "Diciembre de 2021", n: "reemplaza a la BVT" },
    { l: "Allanamiento de la BVT", v: "Febrero de 2018", n: "ordenado bajo el ministro Kickl" },
    { l: "Atentado de Viena", v: "2 de noviembre de 2020", n: "cuatro muertos" }
  ],
  power: { humana: 2, senales: 2, ciber: 2, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Sin servicio civil exterior; la inteligencia militar tiene capacidades limitadas.",
    senales: "La inteligencia militar opera estaciones de escucha modestas.",
    ciber: "Capacidad defensiva en construcción.",
    imagenes: "Sin capacidades propias.",
    encubierta: "La neutralidad limita la acción encubierta.",
    contra: "Un ex oficial de la propia BVT espió para Rusia durante años."
  },
  priorities: [
    { h: "Rusia", x: "Espionaje desde las misiones en Viena." },
    { h: "Terrorismo", x: "Yihadismo y radicalización en línea." },
    { h: "Extremismo", x: "Extrema derecha e islamismo." },
    { h: "Reconstruir la confianza", x: "Recuperar el intercambio con servicios aliados." },
    { h: "Organismos internacionales", x: "Proteger a la ONU y la OSCE en Viena." }
  ],
  focos: ["Rusia", "Yihadismo", "Viena internacional", "Balcanes", "Irán"],
  bodies: {
    "NSR": { since: 2001, how: "Consejo Nacional de Seguridad, que asesora al gobierno.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Viena"] },
    "HNaA": { since: 1985, how: "Oficina de Inteligencia del Ejército: inteligencia exterior militar y de señales.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Estaciones de escucha"], where: ["Viena"] },
    "AbwA": { since: 1985, how: "Oficina de Defensa: contrainteligencia militar.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Viena"] },
    "DSN": { since: 2021, how: "Dirección de Seguridad del Estado e Inteligencia del Ministerio del Interior: contraespionaje, terrorismo y extremismo, con una rama de inteligencia separada de la policial.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Viena"] }
  },
  civil: [
    "La DSN depende del Ministerio del Interior y los servicios militares de Defensa.",
    "Un subcomité parlamentario controla a los servicios.",
    "El allanamiento de 2018 mostró la vulnerabilidad del servicio a la política."
  ],
  law: {
    domestic: [
      "La ley de protección del Estado de 2016, reformada en 2021, regula a la DSN.",
      "El código penal castigaba solo el espionaje contra Austria; en 2025 y 2026 se discutió ampliarlo.",
      "Las escuchas necesitan autorización de un comisionado de protección jurídica."
    ],
    foreign: [
      "La inteligencia militar es la única que opera en el exterior."
    ],
    oversight: [
      "Subcomités parlamentarios de Interior y Defensa.",
      "Comisionado de protección jurídica."
    ]
  },
  rights: [
    { d: "2016-07", dir: "amplia", area: "Privacidad", h: "Ley de protección del Estado", x: "Más facultades a la BVT con controles limitados." },
    { d: "2021-12", dir: "recorta", area: "Debido proceso", h: "Reforma de la DSN", x: "Separa la inteligencia de la policía y crea nuevos controles." }
  ],
  events: [
    {"d": "1989-07-13", "lat": 48.2, "lon": 16.38, "c": "Austria", "t": "encubierta", "ev": 2, "h": "Asesinato de Ghassemlou", "x": "Emisarios iraníes matan en Viena al líder kurdo Abdul Rahman Ghassemlou durante una negociación.", "u": "https://en.wikipedia.org/wiki/Abdul_Rahman_Ghassemlou", "st": "Wikipedia: Abdul Rahman Ghassemlou", "op": "asesinato", "por": "ir" },
    { d: "2018-02-28", lat: 48.2, lon: 16.4, c: "Austria", t: "contra", ev: 1, h: "Allanamiento de la BVT", x: "Policías bajo el Ministerio del Interior allanan la oficina de contrainteligencia y se llevan datos sensibles; un tribunal lo declaró ilegal.", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2020-11-02", lat: 48.21, lon: 16.37, c: "Austria", t: "contra", ev: 1, h: "Atentado de Viena", x: "Un yihadista mata a cuatro personas; Eslovaquia había avisado que intentó comprar munición.", u: "https://en.wikipedia.org/wiki/2020_Vienna_attack", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2026-05-20", lat: 48.2, lon: 16.35, c: "Austria", t: "contra", ev: 1, h: "Condena de Egisto Ott", x: "Un jurado condena al ex oficial de la BVT por espiar para Rusia.", u: "https://www.thestar.com.my/news/world/2026/05/21/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds", st: "Reuters, vía The Star" }
  ],
  interest: {
    "Russia": 3, "Iran": 1, "Serbia": 1, "Bosnia and Herz.": 1, "Turkey": 1, "Hungary": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1955", h: "Neutralidad", x: "Viena se vuelve punto de encuentro de espías del Este y del Oeste.", ctx: "Fin de la ocupación aliada." },
    { era: "", d: "2018", h: "Allanamiento de la BVT", x: "Aliados reducen el intercambio de información.", ctx: "Coalición con la ultraderecha." },
    { era: "", d: "2020", h: "Atentado de Viena", x: "Falla al procesar una advertencia eslovaca.", ctx: "Auge del Estado Islámico." },
    { era: "Reforma", d: "2021", h: "Nace la DSN", x: "Reemplaza a la BVT.", ctx: "Reforma tras el atentado." },
    { era: "Actual", d: "2026", h: "Condena de Ott", x: "El mayor juicio de espionaje en décadas.", now: true, ctx: "Guerra en Ucrania." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2015–2020", h: "Egisto Ott y Jan Marsalek", x: "El ex oficial de la BVT pasó datos de bases policiales, teléfonos y computadoras del Estado a Rusia por encargo de Jan Marsalek. Ayudó a ubicar al periodista Christo Grozev, cuya casa fue allanada. Fue condenado en mayo de 2026 y apeló.", who: "Tribunal Regional de Viena", missing: "", u: "https://www.thestar.com.my/news/world/2026/05/21/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds", st: "Reuters, vía The Star" },
    { ev: 1, ilegal: true, d: "2018", h: "El allanamiento de la BVT", x: "Policías de una unidad dirigida por un dirigente del partido FPÖ allanaron la oficina de contrainteligencia y se llevaron archivos sobre la extrema derecha. Un tribunal declaró ilegal el operativo y servicios aliados limitaron la cooperación.", who: "Tribunal Regional Superior de Viena y comisión parlamentaria", missing: "", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism", st: "Wikipedia (síntesis de fuentes)" },
    {"ev": 2, "ilegal": true, "d": "1989", "h": "Los asesinos que Austria dejó ir", "x": "Tras el asesinato de Ghassemlou, los sospechosos iraníes se refugiaron en su embajada y salieron del país. Austria emitió órdenes de captura meses después.", "who": "Justicia y prensa de Austria", "missing": "Un juicio.", "u": "https://en.wikipedia.org/wiki/Abdul_Rahman_Ghassemlou", "st": "Wikipedia: Abdul Rahman Ghassemlou"}
  ],
  failures: [
    { k: "falla", d: "2020-07", ev: 1, w: 3, h: "La advertencia eslovaca", x: "La BVT no actuó a tiempo ante el aviso de que el futuro atacante intentó comprar munición en Eslovaquia.", why: "No está en duda; lo concluyó una comisión oficial.", wx: "Informe de la comisión de 2021.", who: "Comisión de investigación del gobierno", u: "https://en.wikipedia.org/wiki/2020_Vienna_attack", st: "Wikipedia (síntesis de fuentes)" },
    {"k": "omision", "d": "1989-07", "ev": 2, "w": 2, "h": "La salida de los sospechosos iraníes", "x": "La policía dejó volver a Teherán a los enviados iraníes sospechados del triple asesinato.", "why": "La salida no está en duda; se discute si hubo presión política para evitar un conflicto con Irán.", "wx": "", "who": "Prensa austríaca; ex funcionarios", "u": "https://en.wikipedia.org/wiki/Abdul_Rahman_Ghassemlou", "st": "Wikipedia: Abdul Rahman Ghassemlou"}
  ],
  modus: {
    embajadas: "Austria tiene poca inteligencia en el exterior; servicios extranjeros operan desde sus misiones en Viena.",
    campo: "La DSN trabaja dentro del país; la inteligencia militar sigue los Balcanes y el este.",
    oficina: "La DSN informa al Ministerio del Interior.",
    reclutamiento: "Personal policial y militar; nuevas carreras de analistas desde 2021.",
    tecnica: "Escuchas con control jurídico; capacidades modestas.",
    enlaces: "Cooperación con servicios europeos, dañada tras 2018 y en reconstrucción."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "2015–2020", n: "Egisto Ott", h: "El oficial que trabajó para Marsalek", x: "Pasó información de bases de datos policiales y equipos del Estado a Rusia.", cargo: "Oficial de la BVT", hacia: "Jan Marsalek y la inteligencia rusa", fin: "Condenado en 2026 a 4 años y 1 mes; apeló.", who: "Tribunal Regional de Viena", u: "https://brusselssignal.eu/2026/05/former-austrian-intelligence-officer-convicted-of-spying-for-russia/", st: "Brussels Signal" },
    { k: "topo", dir: "sale", ev: 1, d: "1988–2018", n: "Coronel retirado del Ejército", h: "El coronel que espió treinta años", x: "Un coronel del Ejército pasó información a la inteligencia militar rusa durante décadas.", cargo: "Coronel del Ejército", hacia: "Inteligencia militar rusa (GRU)", fin: "Condenado en 2020.", who: "Justicia de Austria", u: "https://www.internazionale.it/ultime-notizie-reuters/2026/05/20/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds", st: "Reuters, vía Internazionale" }
  ],
  leaks: [
    { k: "robo", rol: "blanco", ev: 1, d: "2015–2020", h: "Teléfonos y computadoras del Estado", x: "Equipos seguros del gobierno terminaron en manos rusas a través de Ott, según la condena.", obj: "Acceso a sistemas del Estado.", who: "Tribunal Regional de Viena", u: "https://www.thestar.com.my/news/world/2026/05/21/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds", st: "Reuters, vía The Star" }
  ],
  practicas: {
    propios: { ev: 1, x: "El Ministerio del Interior allanó a su propio servicio de contrainteligencia en 2018.", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos de vigilancia de periodistas por el servicio austríaco." },
    activistas: { ev: 1, x: "La DSN vigila a la extrema derecha y al islamismo.", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Rusia es el principal blanco de la contrainteligencia.", u: "https://www.thestar.com.my/news/world/2026/05/21/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds", st: "Reuters, vía The Star" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
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
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 1, x: "Vigila a organizaciones islamistas; en 2020 allanó a la Hermandad Musulmana en la operación Luxor, luego declarada en parte ilegal.", u: "https://en.wikipedia.org/wiki/2020_Vienna_attack", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Coopera con servicios europeos; la cooperación se redujo tras 2018.", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de la DSN es público dentro del Ministerio del Interior. Esta ficha no encontró la cifra de 2026 verificada.",
    uso: "Personal, contraterrorismo y contraespionaje.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Wirecard, empresa alemana con directivos austríacos, sirvió de cobertura a Marsalek, según investigaciones.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "fachada", rol: "blanco", ev: 2, d: "2015–2020", h: "Marsalek y Wirecard", x: "El directivo de Wirecard usó su posición y contactos para financiar operaciones para Rusia, según fiscalías europeas.", obj: "Espionaje y operaciones contra opositores.", who: "Fiscalías de Austria y el Reino Unido", u: "https://fintelegram.com/austrian-spy-egisto-ott-convicted-how-marsaleks-spy-network-reopens-the-wirecard-case/", st: "FinTelegram" }
  ],
  companies: [
    { n: "Wirecard", c: "extranjera", rubro: "Pagos", rel: "Cobertura", x: "Su ex directivo Jan Marsalek dirigió operaciones rusas, según la justicia británica y austríaca." }
  ],
  struggles: [
    { a: "Ministerio del Interior (FPÖ, 2018)", b: "BVT", k: "Con la política", stake: "El control del servicio", state: "Cerrada", x: "El allanamiento llevó a la disolución de la BVT y a la creación de la DSN." }
  ],
  proxies: [
  ],
  cuentas: {"n": 2, "x": "Comisión parlamentaria sobre la BVT y condena a Egisto Ott en 2026."},
  doctrina: [{"h": "Neutralidad vigilada", "x": "Durante décadas, espiar a terceros países desde Austria no fue delito."}],
  sources: [
    { t: "Reuters: condena de Egisto Ott (2026)", u: "https://www.thestar.com.my/news/world/2026/05/21/austrian-former-domestic-intelligence-officer-spied-for-russia-court-finds" },
    { t: "Brussels Signal: el mayor caso de espionaje", u: "https://brusselssignal.eu/2026/05/former-austrian-intelligence-officer-convicted-of-spying-for-russia/" },
    { t: "Wikipedia: BVT", u: "https://en.wikipedia.org/wiki/Federal_Office_for_the_Protection_of_the_Constitution_and_Counterterrorism" },
    { t: "Wikipedia: 2020 Vienna attack", u: "https://en.wikipedia.org/wiki/2020_Vienna_attack" }
  ]
};
