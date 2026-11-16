// Ficha de Dinamarca · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["dk"] = {
  id: "dk",
  updated: "2026-11-16",
  summary: [
    "Dinamarca tiene dos servicios: el Servicio de Inteligencia de Defensa (FE), que se ocupa del exterior y de las señales, y el Servicio de Seguridad e Inteligencia (PET), de la seguridad interna. Por su posición entre el mar del Norte y el Báltico, por donde pasan cables clave, es un socio valioso de la NSA estadounidense.",
    "Esa cercanía generó un escándalo: en 2021 la televisión pública DR reveló que el FE ayudó a la NSA a espiar, a través de cables daneses, a dirigentes europeos como Angela Merkel. El ex jefe del FE Lars Findsen fue acusado de filtrar secretos, pero la causa se cerró en 2023.",
    "Desde 2025 la relación con EE.UU. es tensa por el interés de Donald Trump en Groenlandia. En agosto de 2025 Dinamarca convocó al principal diplomático estadounidense después de que informes de inteligencia señalaran operaciones de influencia encubiertas de estadounidenses ligados a Trump en la isla. El PET reforzó su presencia en Groenlandia."
  ],
  keyFacts: [
    { l: "Operación con la NSA", v: "Escuchas a líderes europeos", n: "revelada por DR en 2021" },
    { l: "Ex jefe del FE", v: "Lars Findsen", n: "acusado de filtración; causa cerrada en 2023" },
    { l: "Groenlandia", v: "Diplomático de EE.UU. convocado", n: "agosto de 2025" },
    { l: "Socio de la NSA", v: "Desde la Guerra Fría", n: "cables que cruzan Dinamarca" }
  ],
  power: { humana: 2, senales: 4, ciber: 3, imagenes: 2, encubierta: 1, contra: 3 },
  powerWhy: {
    humana: "Servicio chico, centrado en Rusia, el Ártico y el terrorismo.",
    senales: "Interceptación de cables clave en cooperación con la NSA.",
    ciber: "Centro de ciberseguridad dentro del FE.",
    imagenes: "Vigilancia del Ártico con apoyo aliado.",
    encubierta: "No hay operaciones encubiertas documentadas.",
    contra: "Detecta influencias en Groenlandia y espionaje ruso."
  },
  priorities: [
    { h: "Rusia", x: "Báltico, sabotaje y drones sobre infraestructura." },
    { h: "Groenlandia", x: "Influencia de EE.UU., China y Rusia." },
    { h: "Ártico", x: "Rutas marítimas y presencia militar." },
    { h: "Terrorismo", x: "Islamismo y extrema derecha." },
    { h: "Ciberseguridad", x: "Ataques a infraestructura crítica." }
  ],
  focos: ["Rusia", "Groenlandia", "Ártico", "Estados Unidos", "China"],
  bodies: {
    "RSU": { since: 2010, how: "Comité de Seguridad del Gobierno, presidido por el primer ministro.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Copenhague"] },
    "FE": { since: 1967, how: "Servicio de Inteligencia de Defensa: inteligencia exterior, señales y ciberseguridad.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Interceptación de cables", "Centro de ciberseguridad"], where: ["Copenhague"] },
    "PET": { since: 1951, how: "Servicio de Seguridad e Inteligencia: contraespionaje, terrorismo y protección, incluida Groenlandia.", staff: "No se publica.", budget: "Dentro de Justicia.", tech: [], where: ["Søborg"] },
    "TET": { since: 2014, how: "Autoridad de Control de los Servicios de Inteligencia: supervisa al FE y al PET.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Copenhague"] }
  },
  civil: [
    "El FE responde al Ministerio de Defensa y el PET al de Justicia.",
    "La autoridad de control TET denunció en 2020 irregularidades del FE.",
    "Un comité parlamentario recibe información de ambos servicios."
  ],
  law: {
    domestic: [
      "La ley del FE de 2013 regula sus funciones y prohíbe espiar a residentes daneses.",
      "La ley del PET de 2013 regula la seguridad interna.",
      "Leyes de 2025 ampliaron el registro de inversiones extranjeras en sectores críticos."
    ],
    foreign: [
      "El FE puede operar en el exterior y compartir datos con aliados."
    ],
    oversight: [
      "Autoridad de Control de los Servicios de Inteligencia (TET).",
      "Comité de Servicios de Inteligencia del Parlamento."
    ]
  },
  rights: [
    { d: "2014", dir: "recorta", area: "Privacidad", h: "Autoridad de control", x: "Se crea el TET para supervisar a los servicios." },
    { d: "2020-08", dir: "recorta", area: "Privacidad", h: "Informe del TET", x: "La autoridad acusa al FE de reunir datos de ciudadanos daneses y de ocultar información." }
  ],
  events: [
    { d: "2014", lat: 55.65, lon: 12.1, c: "Denmark", t: "senales", ev: 1, h: "Operación Dunhammer", x: "El FE ayuda a la NSA a interceptar a dirigentes europeos a través de cables daneses, según DR.", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-08-27", lat: 66.0, lon: -45.0, c: "Greenland", t: "humana", ev: 2, h: "Influencia en Groenlandia", x: "Dinamarca convoca al diplomático estadounidense por operaciones de influencia de personas ligadas a Trump.", u: "https://www.aljazeera.com/news/2025/8/27/denmark-summons-us-diplomat-over-greenland-interference-attempts", st: "Al Jazeera" }
  ],
  interest: {
    "Russia": 3, "Greenland": 3, "United States of America": 2, "China": 2, "Iran": 1, "Sweden": 1, "Germany": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1951", h: "Nace el PET", x: "Servicio de seguridad ligado a la OTAN." },
    { era: "", d: "1967", h: "Nace el FE", x: "Inteligencia de defensa y señales." },
    { era: "Siglo XXI", d: "2020", h: "Escándalo del FE", x: "La autoridad de control denuncia al servicio." },
    { era: "", d: "2021", h: "Dunhammer", x: "Se revela el espionaje a líderes europeos con la NSA." },
    { era: "Actual", d: "2025–2026", h: "Groenlandia", x: "Tensión con EE.UU. por la isla.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2012–2014", h: "Dunhammer", x: "Un informe interno del FE citado por DR concluyó que la NSA usó cables daneses para espiar a dirigentes de Alemania, Francia, Suecia y Noruega con ayuda danesa. El gobierno no lo desmintió.", who: "DR, sobre un informe interno del FE", missing: "", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2025", h: "La influencia en Groenlandia", x: "Informes de inteligencia citados por DR señalaron que al menos tres estadounidenses ligados a la administración Trump hicieron operaciones de influencia para promover la separación de Groenlandia. Dinamarca convocó al diplomático de EE.UU.; Washington no comentó el fondo.", who: "Gobierno de Dinamarca y DR", missing: "Identificación pública y pruebas.", u: "https://www.thestar.com.my/news/world/2025/08/27/danish-foreign-minister-summons-us-diplomat-over-greenland-broadcaster-reports", st: "Reuters, vía The Star" }
  ],
  failures: [
    { k: "falla", d: "2020", ev: 1, w: 3, h: "El FE fuera de control", x: "La autoridad de control concluyó que el FE reunió datos de daneses y ocultó información al organismo.", why: "Lo dijo la autoridad de control; un estudio posterior relativizó parte de las acusaciones.", wx: "Informe del TET y comisión posterior.", who: "Autoridad de Control (TET)", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales y agregados en embajadas; el PET actúa en Groenlandia.",
    campo: "Fuentes humanas limitadas; foco en Rusia y el Ártico.",
    oficina: "El FE publica una evaluación anual de amenazas.",
    reclutamiento: "Personal militar y civil por concurso.",
    tecnica: "Interceptación de cables con apoyo de la NSA.",
    enlaces: "NSA, servicios nórdicos y OTAN; desconfianza creciente con EE.UU. desde 2025."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "2020", n: "Denunciante del FE", h: "El empleado que alertó a la autoridad de control", x: "Un empleado entregó a la autoridad de control información sobre irregularidades del FE.", cargo: "Empleado del FE", hacia: "Autoridad de Control (TET)", fin: "Su identidad no se hizo pública.", who: "Autoridad de Control (TET)", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 3, d: "2021", n: "Lars Findsen", h: "El jefe acusado de filtrar", x: "El ex director del FE fue detenido y acusado de revelar secretos de Estado; él lo negó.", cargo: "Director del FE", hacia: "Periodistas, según la acusación", fin: "La fiscalía retiró los cargos en 2023.", who: "Fiscalía de Dinamarca", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 1, d: "2021-05", h: "Dunhammer", x: "Se publica el informe interno sobre la cooperación con la NSA contra líderes europeos.", obj: "Exponer el espionaje a aliados.", who: "DR", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 2, x: "El FE reunió datos de ciudadanos daneses, según la autoridad de control.", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    aliados: { ev: 1, x: "Ayudó a la NSA a espiar a líderes europeos, según DR.", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    rivales: { ev: 1, x: "Rusia es el blanco central.", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
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
    inteligencia: { ev: 1, x: "Comparte inteligencia de señales con la NSA.", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos del FE y el PET figuran en los de Defensa y Justicia. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Interceptación, ciberseguridad y contraespionaje.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2008–2014", h: "El centro de datos con la NSA", x: "Dinamarca financió con la NSA un centro de procesamiento de datos de cables en Sandagergård, según DR.", obj: "Interceptar el tráfico que cruza el país.", who: "DR", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "TDC", c: "nacional", rubro: "Telecomunicaciones", rel: "Infraestructura", x: "Principal operadora danesa, dueña de cables usados en la interceptación." }
  ],
  struggles: [
    { a: "Dinamarca", b: "EE.UU.", k: "Con otros Estados", stake: "Groenlandia", state: "Abierta", x: "Convocatorias diplomáticas y desconfianza entre aliados." }
  ],
  proxies: [
  ],
  sources: [
    { t: "Al Jazeera: Dinamarca convoca al diplomático de EE.UU. (2025)", u: "https://www.aljazeera.com/news/2025/8/27/denmark-summons-us-diplomat-over-greenland-interference-attempts" },
    { t: "Reuters: influencia encubierta en Groenlandia", u: "https://www.thestar.com.my/news/world/2025/08/27/danish-foreign-minister-summons-us-diplomat-over-greenland-broadcaster-reports" },
    { t: "Wikipedia: Danish Defence Intelligence Service", u: "https://en.wikipedia.org/wiki/Danish_Defence_Intelligence_Service" }
  ]
};
