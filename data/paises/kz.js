// Ficha de Kazajistán · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["kz"] = {
  id: "kz",
  updated: "2026-11-16",
  summary: [
    "El Comité de Seguridad Nacional (KNB) es el servicio más poderoso de Kazajistán: contraespionaje, fronteras, antiterrorismo y vigilancia política. La inteligencia exterior está en manos del servicio Syrbar. Ambos responden al presidente Kasym-Yomart Tokáyev.",
    "En enero de 2022 protestas por el precio del gas derivaron en disturbios con más de 200 muertos. Tokáyev pidió tropas a la alianza militar liderada por Rusia y acusó a un intento de golpe. El ex jefe del KNB Karim Masimov, aliado del ex presidente Nursultán Nazarbáyev, fue condenado en 2023 a 18 años por traición y abuso de poder.",
    "Kazajistán equilibra a Rusia, China y Occidente. En 2019 el gobierno intentó obligar a los usuarios a instalar un certificado que permitía interceptar el tráfico cifrado. En 2024 el periodista opositor exiliado Aidos Sadykov murió baleado en Kiev; Ucrania acusó a dos ciudadanos kazajos."
  ],
  keyFacts: [
    { l: "Presidente", v: "Kasym-Yomart Tokáyev", n: "desde 2019" },
    { l: "Disturbios de enero de 2022", v: "Más de 200 muertos", n: "según cifras oficiales" },
    { l: "Ex jefe del KNB", v: "Karim Masimov", n: "condenado a 18 años en 2023" },
    { l: "Certificado de interceptación", v: "2019", n: "abandonado tras la reacción de los navegadores" }
  ],
  power: { humana: 3, senales: 3, ciber: 2, imagenes: 1, encubierta: 2, contra: 3 },
  powerWhy: {
    humana: "Redes en Asia Central, la diáspora y China (Xinjiang).",
    senales: "El KNB controla la infraestructura de interceptación nacional.",
    ciber: "Intentó interceptar tráfico cifrado de manera masiva en 2019.",
    imagenes: "Satélites propios de observación de uso civil.",
    encubierta: "Acusaciones de operaciones contra exiliados.",
    contra: "El propio jefe del KNB fue acusado de traición en 2022."
  },
  priorities: [
    { h: "Estabilidad del régimen", x: "Evitar otra crisis como la de 2022." },
    { h: "Rusia", x: "Influencia rusa y minoría rusa en el norte." },
    { h: "China", x: "Xinjiang, inversiones y diáspora kazaja." },
    { h: "Extremismo", x: "Grupos islamistas y retornados de Siria." },
    { h: "Oposición", x: "Opositores y periodistas en el exilio." }
  ],
  focos: ["Rusia", "China", "Asia Central", "Oposición en el exilio", "Afganistán"],
  bodies: {
    "CS": { since: 1991, how: "Consejo de Seguridad presidido por el presidente; Nazarbáyev lo encabezó de por vida hasta 2022.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Astaná"] },
    "Syrbar": { since: 1992, how: "Servicio de Inteligencia Exterior, dependiente del presidente.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Astaná", "Embajadas"] },
    "Defensa": { since: 1992, how: "Inteligencia militar del Ministerio de Defensa.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Astaná"] },
    "KNB": { since: 1992, how: "Comité de Seguridad Nacional: contraespionaje, fronteras, antiterrorismo e interceptación. Heredero del KGB soviético.", staff: "No se publica.", budget: "Secreto.", tech: ["Interceptación"], where: ["Astaná", "Todo el país"] }
  },
  civil: [
    "Los servicios responden al presidente; el Parlamento no los controla.",
    "Tras 2022 Tokáyev desplazó del KNB a los aliados de Nazarbáyev.",
    "No hay control judicial independiente de la vigilancia."
  ],
  law: {
    domestic: [
      "La ley de seguridad nacional permite a los servicios interceptar comunicaciones con control de fiscales.",
      "Las leyes contra el extremismo y la difusión de información falsa se usan contra críticos, según organizaciones de derechos humanos.",
      "La ley de 2024 sobre medios amplió el control sobre periodistas extranjeros."
    ],
    foreign: [
      "Syrbar opera en el exterior sin normas públicas detalladas."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "2019-07", dir: "amplia", area: "Privacidad", h: "Certificado nacional", x: "El gobierno pide instalar un certificado que permite interceptar tráfico cifrado; lo abandona tras el bloqueo de los navegadores." },
    { d: "2022-01", dir: "amplia", area: "Debido proceso", h: "Estado de emergencia", x: "Orden de disparar sin aviso y detenciones masivas tras los disturbios." }
  ],
  events: [
    { d: "2022-01-05", lat: 43.25, lon: 76.92, c: "Kazakhstan", t: "contra", ev: 1, h: "Disturbios de Almatý", x: "Las protestas se vuelven violentas; el KNB pierde el control y Tokáyev pide tropas a la alianza liderada por Rusia.", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-06-18", lat: 50.45, lon: 30.52, c: "Ukraine", t: "encubierta", ev: 2, h: "Atentado contra Aidos Sadykov", x: "El periodista opositor kazajo es baleado en Kiev y muere días después; Ucrania acusó a dos kazajos.", u: "https://en.wikipedia.org/wiki/Aidos_Sadykov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Russia": 3, "China": 3, "Kyrgyzstan": 2, "Uzbekistan": 2, "Afghanistan": 1, "Ukraine": 1, "Turkey": 1
  },
  timeline: [
    { era: "Nazarbáyev", d: "1992", h: "Nace el KNB", x: "Hereda el KGB soviético." },
    { era: "", d: "2011", h: "Masacre de Zhanaozén", x: "La policía mata a trabajadores petroleros en huelga." },
    { era: "Tokáyev", d: "2019", h: "Transición", x: "Nazarbáyev deja la presidencia pero conserva poder." },
    { era: "", d: "2022", h: "Enero sangriento", x: "Disturbios, intervención rusa y caída de Masimov." },
    { era: "Actual", d: "2023–2026", h: "Consolidación", x: "Tokáyev controla los servicios y equilibra a Rusia y China.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2022", h: "Karim Masimov", x: "El jefe del KNB fue detenido días después de los disturbios y condenado en 2023 a 18 años por traición, intento de toma del poder y abuso de funciones. El juicio fue a puertas cerradas.", who: "Tribunal militar de Kazajistán", missing: "", u: "https://en.wikipedia.org/wiki/Karim_Massimov", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 3, ilegal: true, d: "2022", h: "El intento de golpe", x: "Tokáyev atribuyó los disturbios a terroristas entrenados en el exterior y a un intento de golpe interno. Investigaciones independientes no encontraron pruebas públicas de terroristas extranjeros.", who: "Gobierno de Kazajistán", missing: "Pruebas públicas y juicios abiertos.", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2024", h: "El asesinato de Aidos Sadykov", x: "El periodista opositor fue baleado en Kiev. La fiscalía ucraniana acusó a dos ciudadanos kazajos y su familia culpó al gobierno de Kazajistán, que lo niega.", who: "Fiscalía de Ucrania y familia de la víctima", missing: "Prueba de la orden estatal.", u: "https://en.wikipedia.org/wiki/Aidos_Sadykov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2022-01", ev: 1, w: 3, h: "Los disturbios de enero", x: "El KNB no anticipó ni contuvo la violencia; su jefe terminó condenado.", why: "No está en duda; el propio presidente lo admitió.", wx: "Declaraciones oficiales y condena de Masimov.", who: "Gobierno de Kazajistán", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Syrbar trabaja desde embajadas en la región y en Occidente.",
    campo: "Redes en Asia Central y vigilancia de exiliados.",
    oficina: "Los servicios informan al presidente.",
    reclutamiento: "Academia propia del KNB.",
    tecnica: "Interceptación nacional y control de internet en crisis.",
    enlaces: "Cooperación con Rusia en la alianza militar y con China en la Organización de Cooperación de Shanghái."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "2022", n: "Karim Masimov", h: "El jefe del KNB condenado por traición", x: "Ex primer ministro y jefe del KNB acusado de intentar tomar el poder.", cargo: "Jefe del Comité de Seguridad Nacional", hacia: "Facción de Nazarbáyev, según la acusación", fin: "Condenado a 18 años en 2023.", who: "Tribunal militar de Kazajistán", u: "https://en.wikipedia.org/wiki/Karim_Massimov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 2, d: "2022", h: "Los muertos de enero", x: "El gobierno tardó en publicar cifras y nombres de los muertos; organizaciones denunciaron torturas a detenidos.", obj: "Controlar el relato oficial.", aquien: "Las familias y la sociedad", como: "Investigaciones de periodistas y organizaciones de derechos humanos.", who: "Organizaciones de derechos humanos", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "El KNB detuvo a su propio ex jefe y a altos funcionarios tras 2022.", u: "https://en.wikipedia.org/wiki/Karim_Massimov", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Opositores son encarcelados o forzados al exilio.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Kazakhstan", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 2, x: "Periodistas críticos son perseguidos; uno exiliado fue asesinado en Kiev.", u: "https://en.wikipedia.org/wiki/Aidos_Sadykov", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Activistas fueron detenidos tras las protestas de 2022.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Kazakhstan", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 3, x: "La familia de Aidos Sadykov culpa al gobierno de su asesinato; no hay pruebas firmes.", u: "https://en.wikipedia.org/wiki/Aidos_Sadykov", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "Detenidos de 2022 denunciaron torturas; el gobierno reconoció algunos casos.", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 2, x: "Vigila a opositores en el exilio, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Kazakhstan", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 1, x: "Persigue a grupos religiosos no registrados por extremismo.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Kazakhstan", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Coopera con Rusia y China en las alianzas regionales.", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto.",
    uso: "Seguridad interna, fronteras e interceptación.",
    ingresos: "La renta petrolera y minera financia al Estado.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 2, d: "1991–2022", h: "La fortuna del clan Nazarbáyev", x: "Investigaciones periodísticas describieron grandes fortunas de la familia del ex presidente en el exterior; el gobierno de Tokáyev recuperó parte de los activos.", obj: "Enriquecimiento de la élite.", who: "Prensa internacional y gobierno de Kazajistán", u: "https://en.wikipedia.org/wiki/Nursultan_Nazarbayev", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Kazakhtelecom", c: "nacional", rubro: "Telecomunicaciones", rel: "Estatal", x: "Operadora que debía distribuir el certificado de interceptación en 2019." }
  ],
  struggles: [
    { a: "Tokáyev", b: "Clan Nazarbáyev", k: "Interna", stake: "El control del Estado y los servicios", state: "Latente", x: "Tras 2022 Tokáyev desplazó a la familia y aliados del ex presidente." }
  ],
  proxies: [
  ],
  cuentas: {"n": 1, "x": "El ex jefe del KNB fue condenado tras 2022, en una pelea interna del poder."},
  sources: [
    { t: "Wikipedia: 2022 Kazakh unrest", u: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest" },
    { t: "Wikipedia: Karim Massimov", u: "https://en.wikipedia.org/wiki/Karim_Massimov" },
    { t: "Wikipedia: Aidos Sadykov", u: "https://en.wikipedia.org/wiki/Aidos_Sadykov" }
  ]
};
