// Ficha de Líbano · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["lb"] = {
  id: "lb",
  updated: "2026-11-16",
  summary: [
    "Líbano tiene cuatro servicios estatales, repartidos según el sistema confesional. Son la Dirección General de Seguridad General (SG), la Seguridad del Estado (SE), la Dirección de Inteligencia del Ejército (G2) y la Rama de Información de las Fuerzas de Seguridad Interior. Al lado del Estado, Hezbollah tiene su propio aparato de seguridad, con más medios que varios de ellos.",
    "El país es un escenario más que un actor: allí chocan los servicios de Israel, Irán, Siria, Arabia Saudita y las potencias occidentales. En 2024 Israel hizo estallar miles de buscapersonas de Hezbollah y mató a casi toda su conducción militar, con ayuda de informantes locales.",
    "Desde septiembre de 2024 las autoridades detuvieron a decenas de personas acusadas de espiar para Israel; muchas fueron reclutadas por internet durante la crisis económica. La explosión del puerto de Beirut en 2020 mostró que varios servicios sabían del nitrato de amonio y nadie lo retiró."
  ],
  keyFacts: [
    { l: "Detenidos por espiar para Israel", v: "Más de 40", n: "desde septiembre de 2024, según fuentes de seguridad" },
    { l: "Explosión del puerto", v: "4 de agosto de 2020", n: "más de 200 muertos" },
    { l: "Asesinato de Rafic Hariri", v: "2005", n: "un tribunal de la ONU condenó a miembros de Hezbollah" },
    { l: "Alto el fuego con Israel", v: "Junio de 2026", n: "tras una nueva guerra" }
  ],
  power: { humana: 3, senales: 2, ciber: 1, imagenes: 1, encubierta: 1, contra: 3 },
  powerWhy: {
    humana: "Redes locales densas, pero divididas por confesión y por lealtades políticas.",
    senales: "Escuchas limitadas; el control de las telecomunicaciones es disputado.",
    ciber: "Capacidad estatal mínima.",
    imagenes: "Sin capacidades propias.",
    encubierta: "El Estado no opera en el exterior; Hezbollah sí.",
    contra: "Desarticuló redes de espionaje israelí, pero no evitó la infiltración de Hezbollah."
  },
  priorities: [
    { h: "Espionaje israelí", x: "Redes de informantes que guían ataques contra Hezbollah." },
    { h: "Desarme de Hezbollah", x: "Plan del gobierno y del Ejército bajo presión internacional." },
    { h: "Siria", x: "Frontera, refugiados y el nuevo poder en Damasco." },
    { h: "Grupos yihadistas", x: "Células en campamentos y en la frontera." }
  ],
  focos: ["Israel", "Hezbollah", "Siria", "Campamentos palestinos"],
  bodies: {
    "CSD": { since: 1983, how: "Consejo Superior de Defensa: coordina a los servicios bajo el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Beirut"] },
    "SG": { since: 1945, how: "Dirección General de Seguridad General: inteligencia interior, extranjeros y fronteras. Desmanteló varias redes de espionaje israelí.", staff: "No se publica.", budget: "Dentro del Ministerio del Interior.", tech: [], where: ["Beirut"] },
    "SE": { since: 1985, how: "Dirección General de Seguridad del Estado: seguridad interior bajo el Consejo Superior de Defensa.", staff: "No se publica.", budget: "No se publica.", tech: [], where: ["Beirut"] },
    "G2": { since: 1945, how: "Dirección de Inteligencia del Ejército: la más extendida del país; vigila la frontera sur y los campamentos.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Beirut"] },
    "FSI-RI": { since: 2005, how: "Rama de Información de las Fuerzas de Seguridad Interior: creció tras el asesinato de Hariri y desarmó redes israelíes y sirias.", staff: "No se publica.", budget: "Dentro del Ministerio del Interior.", tech: ["Análisis de telecomunicaciones"], where: ["Beirut"] }
  },
  civil: [
    "Cada servicio responde en la práctica a una comunidad religiosa y a sus partidos.",
    "Hezbollah conserva un aparato de seguridad fuera del control del Estado.",
    "El gobierno de 2025 se comprometió a concentrar las armas en manos del Estado."
  ],
  law: {
    domestic: [
      "La ley de 1999 regula las escuchas, con autorización judicial o ministerial.",
      "El trato con Israel es un delito grave según el Código Penal."
    ],
    foreign: [
      "Los servicios estatales no tienen mandato de operaciones en el exterior."
    ],
    oversight: [
      "Control parlamentario débil y fragmentado.",
      "Tribunal militar para casos de espionaje."
    ]
  },
  rights: [
    { d: "1999", dir: "recorta", area: "Privacidad", h: "Ley de escuchas", x: "Exige autorización para intervenir comunicaciones." }
  ],
  events: [
    {"d": "1983-10-23", "lat": 33.83, "lon": 35.49, "c": "Lebanon", "t": "encubierta", "ev": 2, "h": "Atentado contra los cuarteles", "x": "Dos camiones bomba matan a 241 militares de EE.UU. y 58 franceses en Beirut. Un tribunal de EE.UU. responsabilizó a Irán y a Hezbollah.", "u": "https://en.wikipedia.org/wiki/1983_Beirut_barracks_bombings", "st": "Wikipedia: atentados de Beirut de 1983"},
    { d: "2005-02-14", lat: 33.88, lon: 35.53, c: "Lebanon", t: "encubierta", ev: 1, h: "Asesinato de Rafic Hariri", x: "Un coche bomba mata al ex primer ministro y a otras 21 personas en Beirut.", u: "https://en.wikipedia.org/wiki/Assassination_of_Rafic_Hariri", st: "Wikipedia: asesinato de Rafic Hariri" },
    {"d": "2012-10-19", "lat": 33.89, "lon": 35.52, "c": "Lebanon", "t": "encubierta", "ev": 3, "h": "Asesinato de Wissam al-Hassan", "x": "Un coche bomba mata al jefe de la Rama de Información, que investigaba a aliados de Siria.", "u": "https://en.wikipedia.org/wiki/Wissam_al-Hassan", "st": "Wikipedia: Wissam al-Hassan"},
    { d: "2020-08-04", lat: 33.89, lon: 35.56, c: "Lebanon", t: "contra", ev: 1, h: "Explosión del puerto de Beirut", x: "Estallan 2.750 toneladas de nitrato de amonio almacenadas durante años en el puerto.", u: "https://en.wikipedia.org/wiki/2020_Beirut_explosion", st: "Wikipedia: explosión de Beirut" },
    {"d": "2024-09-17", "lat": 33.87, "lon": 35.51, "c": "Lebanon", "t": "sabotaje", "ev": 1, "h": "Estallan los buscapersonas", "x": "Miles de buscapersonas y radios de Hezbollah explotan en dos días; Israel lo reconoció.", "u": "https://en.wikipedia.org/wiki/2024_Lebanon_electronic_device_attacks", "st": "Wikipedia: ataques con dispositivos en Líbano"},
    { d: "2025-10-10", lat: 33.85, lon: 35.5, c: "Lebanon", t: "contra", ev: 2, h: "Red israelí desarticulada", x: "La Seguridad General anuncia la captura de una red que preparaba atentados y asesinatos para Israel.", u: "https://www.aljazeera.com/amp/news/2025/10/10/lebanon-says-it-foiled-israeli-network-plotting-bomb-attacks", st: "Al Jazeera" },
    { d: "2026-07", lat: 33.86, lon: 35.51, c: "Lebanon", t: "contra", ev: 2, h: "Detenido un agente cercano a Hezbollah", x: "Un hombre cercano a jefes de Hezbollah es acusado de haber guiado a Israel en asesinatos de 2024.", u: "https://today.lorientlejour.com/article/1541333/lebanon-detains-man-close-to-hezbollah-for-allegedly-spying-for-israel-judicial-official.html", st: "L'Orient Today (AFP)" }
  ],
  interest: {
    "Israel": 3, "Syria": 3, "Palestine": 2, "Iran": 1, "Saudi Arabia": 1
  },
  timeline: [
    { era: "Guerra civil", d: "1975–1990", h: "Servicios extranjeros en el país", x: "Siria, Israel e Irán operan en Líbano con milicias propias.", ctx: "Guerra civil." },
    { era: "Tutela siria", d: "1990–2005", h: "Control sirio de la seguridad", x: "La inteligencia siria domina a los servicios libaneses.", ctx: "Posguerra bajo tutela siria." },
    { era: "", d: "2005", h: "Asesinato de Hariri", x: "Salen las tropas sirias; crece la Rama de Información.", ctx: "Revolución de los Cedros." },
    { era: "", d: "2020", h: "Explosión del puerto", x: "Varios servicios sabían del nitrato almacenado.", ctx: "Crisis económica." },
    { era: "Actual", d: "2024–2026", h: "Guerra y cacería de espías", x: "Decenas de detenidos por espiar para Israel.", now: true, ctx: "Guerra entre Israel y Hezbollah." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2005", h: "El asesinato de Rafic Hariri", x: "El Tribunal Especial para el Líbano condenó en 2020 a Salim Ayyash, miembro de Hezbollah, y en 2022 a otros dos. El tribunal no halló pruebas de la participación directa de la conducción de Hezbollah ni de Siria.", who: "Tribunal Especial para el Líbano (ONU)", missing: "", u: "https://en.wikipedia.org/wiki/Special_Tribunal_for_Lebanon", st: "Wikipedia: Tribunal Especial para el Líbano" },
    { ev: 2, ilegal: false, d: "2024–2026", h: "Las redes israelíes", x: "Las autoridades detuvieron a más de 40 personas acusadas de pasar a Israel datos que guiaron ataques contra Hezbollah. Muchas fueron reclutadas por internet a cambio de dinero.", who: "Fuentes judiciales y de seguridad libanesas", missing: "Sentencias públicas en la mayoría de los casos.", u: "https://www.timesofisrael.com/over-30-arrested-in-lebanon-for-allegedly-providing-israel-with-intel-on-hezbollah/", st: "The Times of Israel (AFP)" },
    {"ev": 1, "ilegal": true, "d": "2012", "h": "Michel Samaha", "x": "La Rama de Información detuvo al ex ministro Michel Samaha con explosivos que le dio el jefe de seguridad sirio Ali Mamlouk para atentados en Líbano. Fue condenado.", "who": "Justicia militar libanesa", "missing": "", "u": "https://en.wikipedia.org/wiki/Michel_Samaha", "st": "Wikipedia: Michel Samaha"},
    {"ev": 3, "ilegal": true, "d": "2012", "h": "El asesinato de Wissam al-Hassan", "x": "Meses después de detener a Samaha, el jefe de la Rama de Información murió en un atentado. La oposición acusó a Siria; nadie fue juzgado.", "who": "Dirigentes de la oposición libanesa", "missing": "Una investigación judicial con resultados.", "u": "https://en.wikipedia.org/wiki/Wissam_al-Hassan", "st": "Wikipedia: Wissam al-Hassan"}
  ],
  failures: [
    { k: "omision", d: "2020-08-04", ev: 1, w: 3, h: "La explosión del puerto", x: "El nitrato de amonio estuvo almacenado seis años en el puerto. La Seguridad del Estado avisó a los máximos funcionarios semanas antes, y nadie lo retiró.", why: "No está en duda que hubo avisos; la investigación judicial fue bloqueada durante años y su jefe fue apartado varias veces.", wx: "Informes de la Seguridad del Estado, cartas de la aduana e investigaciones de prensa.", who: "Juez Tarek Bitar; Human Rights Watch", u: "https://en.wikipedia.org/wiki/2020_Beirut_explosion", st: "Wikipedia: explosión de Beirut" },
    { k: "falla", d: "2024-09", ev: 1, w: 3, h: "Hezbollah infiltrado", x: "Israel mató a casi toda la conducción militar de Hezbollah gracias a informantes, comunicaciones intervenidas y equipos manipulados.", why: "No está en duda; Hezbollah reconoció la infiltración.", wx: "Declaraciones de Hezbollah y de Israel.", who: "Hezbollah; gobierno de Israel", u: "https://en.wikipedia.org/wiki/Fuad_Shukr", st: "Wikipedia: Fuad Shukr" },
    {"k": "acierto", "d": "2012-08", "ev": 1, "w": 3, "h": "La captura de Samaha", "x": "La Rama de Información usó un informante para grabar al ex ministro mientras entregaba explosivos sirios.", "why": "No está en duda; fue condenado.", "wx": "", "who": "Justicia militar libanesa", "u": "https://en.wikipedia.org/wiki/Michel_Samaha", "st": "Wikipedia: Michel Samaha"}
  ],
  modus: {
    embajadas: "Poca presencia exterior; la diplomacia libanesa no es un instrumento de inteligencia relevante.",
    campo: "Cada servicio tiene redes en las zonas de su comunidad. El Ejército cubre la frontera sur y los campamentos palestinos.",
    oficina: "Los jefes de servicio se reparten por confesión: la Seguridad General suele quedar para un chiita y la Rama de Información para un sunita.",
    reclutamiento: "Personal de las fuerzas de seguridad, con cuotas confesionales.",
    tecnica: "Análisis de registros telefónicos, clave en el caso Hariri; poca capacidad propia de interceptación.",
    enlaces: "Coopera con EE.UU., Francia y el Reino Unido, que financian al Ejército, y con servicios árabes."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 2, d: "2024–2026", n: "Detenido no identificado (2026)", h: "El agente cercano a Hezbollah", x: "Según fuentes judiciales, pasó a Israel datos que permitieron matar a jefes de seguridad de Hezbollah en 2024.", cargo: "Persona del entorno de jefes de Hezbollah", hacia: "Israel", fin: "Detenido en Beirut en julio de 2026.", who: "Fuente judicial libanesa (AFP)", u: "https://today.lorientlejour.com/article/1541333/lebanon-detains-man-close-to-hezbollah-for-allegedly-spying-for-israel-judicial-official.html", st: "L'Orient Today (AFP)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 2, d: "2014–2020", h: "El nitrato del puerto", x: "Funcionarios y servicios sabían del cargamento peligroso y no lo informaron al público ni lo retiraron.", obj: "Evitar responsabilidades administrativas.", aquien: "Al público y a la justicia", como: "La explosión de 2020 y los documentos publicados después.", who: "Human Rights Watch; juez Tarek Bitar", u: "https://en.wikipedia.org/wiki/2020_Beirut_explosion", st: "Wikipedia: explosión de Beirut" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Israel es el blanco central de la contrainteligencia.", u: "https://www.aljazeera.com/amp/news/2025/10/10/lebanon-says-it-foiled-israeli-network-plotting-bomb-attacks", st: "Al Jazeera" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados de los servicios estatales." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
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
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos se repartieron entre servicios y quedaron devaluados por la crisis desde 2019.",
    uso: "Salarios, contrainteligencia y control de fronteras.",
    ingresos: "EE.UU., Catar y otros países financian al Ejército y a sus salarios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados de los servicios estatales.",
    crimen: "Esta ficha no encontró vínculos documentados de los servicios estatales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "blanco", ev: 1, d: "2019–", h: "La crisis y la ayuda externa", x: "La caída de la libra dejó a los agentes con salarios mínimos; Israel aprovechó para reclutar por dinero, según las autoridades libanesas.", obj: "Reclutamiento de informantes.", who: "Fuentes judiciales y de seguridad libanesas", u: "https://www.timesofisrael.com/over-30-arrested-in-lebanon-for-allegedly-providing-israel-with-intel-on-hezbollah/", st: "The Times of Israel (AFP)" }
  ],
  proxies: [],
  companies: [],
  struggles: [
    { a: "Estado libanés", b: "Hezbollah", k: "Con otros poderes", stake: "El monopolio de las armas y de la seguridad", state: "Abierta", x: "El gobierno aprobó en 2025 un plan para desarmar a Hezbollah, que se resiste." }
  ],
  doctrina: [{"h": "Reparto confesional", "x": "Cada servicio responde a una comunidad religiosa."}],
  cuentas: {"n": 1, "x": "La investigación del puerto fue bloqueada durante años."},
  sources: [
    { t: "Al Jazeera: Líbano desarticula una red israelí (2025)", u: "https://www.aljazeera.com/amp/news/2025/10/10/lebanon-says-it-foiled-israeli-network-plotting-bomb-attacks" },
    { t: "Wikipedia: Tribunal Especial para el Líbano", u: "https://en.wikipedia.org/wiki/Special_Tribunal_for_Lebanon" },
    { t: "Wikipedia: explosión de Beirut", u: "https://en.wikipedia.org/wiki/2020_Beirut_explosion" },
    { t: "Wikipedia: Seguridad General", u: "https://en.wikipedia.org/wiki/General_Directorate_of_General_Security" }
  ]
};
