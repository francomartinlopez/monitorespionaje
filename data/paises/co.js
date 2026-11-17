// Ficha de Colombia · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["co"] = {
  id: "co",
  updated: "2026-11-16",
  summary: [
    "Colombia tiene una de las comunidades de inteligencia más activas de América Latina por su conflicto armado y el narcotráfico. La Dirección Nacional de Inteligencia (DNI) es el servicio civil desde 2011, cuando se disolvió el Departamento Administrativo de Seguridad (DAS) por un escándalo de escuchas ilegales a jueces, periodistas y opositores. Las Fuerzas Militares y la Dirección de Inteligencia Policial (DIPOL) tienen más recursos y peso operativo.",
    "Durante décadas la inteligencia colombiana trabajó estrechamente con EE.UU. y logró golpes como el rescate de Ingrid Betancourt en 2008. En noviembre de 2025 el presidente Gustavo Petro ordenó suspender el envío de inteligencia a EE.UU. por los bombardeos a lanchas en el Caribe, y luego aclaró su alcance.",
    "En 2024 Petro denunció que la policía había comprado el programa espía Pegasus por 11 millones de dólares pagados en efectivo; EE.UU. confirmó luego que lo financió como parte de la cooperación antinarcóticos. Por revelar información financiera reservada, el Grupo Egmont suspendió a Colombia de su red de inteligencia financiera."
  ],
  keyFacts: [
    { l: "Disolución del DAS", v: "2011", n: "tras el escándalo de las chuzadas" },
    { l: "Compra de Pegasus", v: "11 millones de dólares", n: "en efectivo, financiada por EE.UU." },
    { l: "Suspensión con EE.UU.", v: "11 de noviembre de 2025", n: "orden de Petro, luego matizada" },
    { l: "Grupo Egmont", v: "Suspensión", n: "por revelar datos financieros reservados (2024)" }
  ],
  power: { humana: 4, senales: 3, ciber: 2, imagenes: 3, encubierta: 3, contra: 3 },
  powerWhy: {
    humana: "Décadas de infiltración en guerrillas y carteles.",
    senales: "Interceptación amplia, con apoyo técnico de EE.UU.",
    ciber: "Uso de programas espía comerciales; capacidad propia modesta.",
    imagenes: "Vigilancia aérea y apoyo satelital estadounidense.",
    encubierta: "Operaciones de engaño como Jaque y ataques en el exterior como el de Ecuador en 2008.",
    contra: "Los servicios sufrieron filtraciones y abusos internos repetidos."
  },
  priorities: [
    { h: "Grupos armados", x: "ELN, disidencias de las FARC y Clan del Golfo." },
    { h: "Narcotráfico", x: "Rutas, laboratorios y lavado." },
    { h: "Venezuela", x: "Frontera y refugio de grupos armados." },
    { h: "Relación con EE.UU.", x: "Cooperación antidrogas en tensión." },
    { h: "Elecciones", x: "Seguridad de candidatos tras el atentado contra Miguel Uribe Turbay en 2025." }
  ],
  focos: ["ELN", "Disidencias de las FARC", "Narcotráfico", "Venezuela", "Estados Unidos"],
  bodies: {
    "CSN": { since: 2011, how: "Consejo de Seguridad Nacional presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Bogotá"] },
    "DNI": { since: 2011, how: "Dirección Nacional de Inteligencia: servicio civil estratégico, sin facultades de policía, creado tras disolver el DAS.", staff: "No se publica.", budget: "Público en lo general.", tech: [], where: ["Bogotá"] },
    "CGFM": { since: 1960, how: "Inteligencia de las Fuerzas Militares: Ejército, Armada y Fuerza Aérea, con fuerte apoyo de EE.UU.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Interceptación", "Vigilancia aérea"], where: ["Bogotá", "Todo el país"] },
    "DIPOL": { since: 1995, how: "Dirección de Inteligencia Policial: narcotráfico, crimen organizado y terrorismo. Recibió Pegasus.", staff: "No se publica.", budget: "Dentro de la Policía.", tech: ["Pegasus", "Interceptación"], where: ["Bogotá"] },
    "Comisión": { since: 2013, how: "Comisión Legal de Seguimiento a las Actividades de Inteligencia del Congreso.", staff: "Legisladores.", budget: "No aplica.", tech: [], where: ["Bogotá"] }
  },
  civil: [
    "El presidente dirige la inteligencia a través del Consejo de Seguridad Nacional.",
    "La Ley de Inteligencia de 2013 creó controles internos y una comisión del Congreso.",
    "La orden de suspender la cooperación con EE.UU. en 2025 se tomó sin consultar al ministro de Defensa, según la prensa."
  ],
  law: {
    domestic: [
      "La Ley Estatutaria de Inteligencia de 2013 regula las actividades y exige depurar archivos.",
      "Las interceptaciones requieren orden de un fiscal y control de un juez.",
      "La ley prohíbe usar la inteligencia por razones políticas o ideológicas."
    ],
    foreign: [
      "La ley permite actividades de inteligencia en el exterior."
    ],
    oversight: [
      "Comisión Legal de Seguimiento del Congreso.",
      "Inspectores internos en cada organismo."
    ]
  },
  rights: [
    { d: "2011-10", dir: "recorta", area: "Privacidad", h: "Disolución del DAS", x: "El gobierno disuelve el servicio tras las escuchas ilegales." },
    { d: "2013-04", dir: "recorta", area: "Privacidad", h: "Ley de Inteligencia", x: "Prohíbe el uso político y crea controles." }
  ],
  events: [
    { d: "2008-03-01", lat: 0.1, lon: -77.0, c: "Ecuador", t: "encubierta", ev: 1, h: "Operación Fénix", x: "Un bombardeo colombiano en territorio ecuatoriano mata al jefe guerrillero Raúl Reyes y provoca una crisis regional.", u: "https://en.wikipedia.org/wiki/2008_Andean_diplomatic_crisis", st: "Wikipedia (síntesis de fuentes)", op: "asesinato" },
    { d: "2008-07-02", lat: 2.0, lon: -72.6, c: "Colombia", t: "humana", ev: 1, h: "Operación Jaque", x: "Inteligencia militar engaña a las FARC y rescata a Ingrid Betancourt y otros 14 rehenes sin disparos.", u: "https://en.wikipedia.org/wiki/Operation_Jaque", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2009-02", lat: 4.65, lon: -74.1, c: "Colombia", t: "contra", ev: 1, h: "Escándalo de las chuzadas", x: "Se revela que el DAS escuchaba ilegalmente a jueces, periodistas y opositores.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Venezuela": 3, "Ecuador": 2, "United States of America": 2, "Panama": 1, "Mexico": 1, "Peru": 1, "Brazil": 1
  },
  timeline: [
    { era: "Conflicto", d: "1953", h: "Nace el SIC", x: "Antecesor del DAS.", ctx: "Dictadura de Rojas Pinilla." },
    { era: "", d: "1960", h: "Nace el DAS", x: "Servicio de inteligencia y policía de migración.", ctx: "Frente Nacional." },
    { era: "", d: "2002–2009", h: "Chuzadas", x: "El DAS espía a la Corte Suprema y a opositores.", ctx: "Gobierno de Álvaro Uribe." },
    { era: "", d: "2011", h: "Nace la DNI", x: "Se disuelve el DAS.", ctx: "Gobierno de Juan Manuel Santos." },
    { era: "Actual", d: "2024–2026", h: "Pegasus y EE.UU.", x: "Denuncia de Petro y tensión con Washington.", now: true, ctx: "Gobierno de Gustavo Petro." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2002–2009", h: "Las chuzadas del DAS", x: "El DAS interceptó y siguió a magistrados de la Corte Suprema, periodistas y opositores del gobierno de Álvaro Uribe. La ex directora María del Pilar Hurtado y otros funcionarios fueron condenados.", who: "Corte Suprema de Justicia de Colombia", missing: "", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: false, d: "2021–2022", h: "La compra de Pegasus", x: "Petro reveló en 2024 que la policía recibió Pegasus pagado con 11 millones de dólares en efectivo trasladados desde Israel. EE.UU. confirmó que lo financió como parte de la cooperación. La Fiscalía investiga su uso.", who: "Presidencia de Colombia y gobierno de EE.UU.", missing: "", u: "https://www.eltiempo.com/politica/gobierno/el-nuevo-giro-del-caso-del-software-espia-pegasus-papa-caliente-para-la-administracion-del-presidente-gustavo-petro-3398344", st: "El Tiempo" },
    { ev: 1, ilegal: true, d: "2019", h: "Los perfilamientos del Ejército", x: "Una investigación de la revista Semana reveló en 2020 que unidades de inteligencia del Ejército armaron perfiles de periodistas, políticos y activistas. El gobierno retiró a varios oficiales.", who: "Semana y Ministerio de Defensa", missing: "", u: "https://en.wikipedia.org/wiki/National_Army_of_Colombia", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2025-06", ev: 1, w: 3, h: "El atentado contra Miguel Uribe Turbay", x: "Un sicario adolescente disparó contra el precandidato presidencial en un acto en Bogotá; murió dos meses después.", why: "No está en duda; se discute qué sabían los servicios.", wx: "Hechos públicos y proceso judicial.", who: "Fiscalía de Colombia", u: "https://en.wikipedia.org/wiki/Miguel_Uribe_Turbay", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Agregados militares y policiales en embajadas, sobre todo en EE.UU. y la región.",
    campo: "Infiltrados y desmovilizados en grupos armados; recompensas a informantes.",
    oficina: "La DNI hace análisis estratégico; las Fuerzas Militares y la Policía hacen inteligencia operativa.",
    reclutamiento: "Personal militar y policial y analistas civiles.",
    tecnica: "Interceptación, vigilancia aérea y programas espía.",
    enlaces: "Cooperación histórica con la CIA, la DEA y el Comando Sur; tensiones desde 2025."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "2005–2009", n: "Rafael García", h: "El ex jefe de informática del DAS", x: "Ex funcionario que declaró sobre la manipulación de bases de datos y los vínculos del DAS con paramilitares.", cargo: "Jefe de informática del DAS", hacia: "Paramilitares y luego la Justicia", fin: "Condenado y colaborador de la fiscalía.", who: "Justicia de Colombia", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 1, d: "2024-09", h: "La carta de Israel sobre Pegasus", x: "El presidente lee en público un documento financiero reservado sobre la compra de Pegasus.", obj: "Denunciar el uso del programa espía.", who: "Presidencia de Colombia", u: "https://www.elheraldo.co/colombia/2024/09/24/que-pierde-colombia-con-la-suspension-del-egmont-group/", st: "El Heraldo" }
  ],
  practicas: {
    propios: { ev: 1, x: "El DAS espió a magistrados de la Corte Suprema.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "El DAS siguió a opositores del gobierno de Uribe.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "El DAS y unidades del Ejército vigilaron a periodistas.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Defensores de derechos humanos fueron perfilados por el DAS y el Ejército.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Guerrillas y grupos armados, incluso en territorio vecino como en 2008.", u: "https://en.wikipedia.org/wiki/2008_Andean_diplomatic_crisis", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 1, x: "Funcionarios del DAS entregaron listas de sindicalistas a paramilitares, según la Justicia.", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
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
    inteligencia: { ev: 1, x: "Intercambio intenso con EE.UU., suspendido en parte en 2025.", u: "https://www.thestar.com.my/news/world/2025/11/12/colombia-president-orders-suspension-of-intelligence-sharing-with-us", st: "Reuters, vía The Star" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 1, x: "Militares y policías colombianos entrenan a fuerzas de otros países de la región.", u: "https://en.wikipedia.org/wiki/National_Army_of_Colombia", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "Los gastos reservados figuran en el presupuesto sin detalle.",
    uso: "Informantes, recompensas, interceptación y operaciones.",
    ingresos: "EE.UU. financió equipos, como Pegasus.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Funcionarios del DAS colaboraron con paramilitares, según la Justicia.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2021–2022", h: "Pegasus en efectivo", x: "Dos pagos en efectivo, trasladados en aviones desde Tel Aviv, pagaron Pegasus para la policía; EE.UU. dijo haberlo financiado.", monto: "11 millones de dólares", obj: "Vigilancia antinarcóticos, según EE.UU.", who: "Presidencia de Colombia y gobierno de EE.UU.", u: "https://www.eltiempo.com/justicia/investigacion/en-que-quedo-el-escandalo-por-la-compra-de-pegasus-colombia-entraria-en-fase-de-prueba-con-el-grupo-egmont-tras-su-suspension-3474697", st: "El Tiempo" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Vendió Pegasus a la policía colombiana con fondos de EE.UU." }
  ],
  struggles: [
    { a: "Gobierno de Petro", b: "Cúpula militar y policial", k: "Con la política", stake: "La cooperación con EE.UU. y Pegasus", state: "Abierta", x: "La orden de 2025 sorprendió al ministro de Defensa y a los mandos." }
  ],
  proxies: [
    {"id": "auc", "s": "AUC", "n": "Autodefensas Unidas de Colombia", "k": "armado", "d": "1997–2006", "rol": "doble", "hoy": false, "ev": 1, "x": "El jefe del DAS Jorge Noguera fue condenado por entregar a los paramilitares listas de sindicalistas y opositores.", "who": "Corte Suprema de Colombia (2011)", "u": "https://en.wikipedia.org/wiki/Administrative_Department_of_Security", "st": "Wikipedia: Administrative Department of Security", "graf": true}
  ],
  cuentas: {"n": 3, "x": "El DAS fue disuelto y varios de sus ex jefes, condenados."},
  doctrina: [{"h": "Del DAS a la DNI", "x": "La DNI nació en 2011 sin poderes policiales, tras los abusos del DAS."}],
  sources: [
    { t: "Reuters: Petro suspende el intercambio de inteligencia (2025)", u: "https://www.thestar.com.my/news/world/2025/11/12/colombia-president-orders-suspension-of-intelligence-sharing-with-us" },
    { t: "El Tiempo: el caso Pegasus y el Grupo Egmont", u: "https://www.eltiempo.com/justicia/investigacion/en-que-quedo-el-escandalo-por-la-compra-de-pegasus-colombia-entraria-en-fase-de-prueba-con-el-grupo-egmont-tras-su-suspension-3474697" },
    { t: "Infobae: la orden sin consulta a Defensa", u: "https://www.infobae.com/colombia/2025/11/12/petro-ordeno-suspender-cooperacion-de-inteligencia-con-ee-uu-sin-consultar-al-ministerio-de-defensa-ni-a-la-cupula-militar/" },
    { t: "Wikipedia: Departamento Administrativo de Seguridad", u: "https://en.wikipedia.org/wiki/Departamento_Administrativo_de_Seguridad" }
  ]
};
