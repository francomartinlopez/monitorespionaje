// Ficha de Siria · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["sy"] = {
  id: "sy",
  updated: "2026-11-16",
  summary: [
    "Durante el gobierno de la familia Assad (1970-2024), Siria tuvo uno de los aparatos de inteligencia más temidos del mundo: cuatro grandes servicios, la Mujabarat, con centros de detención donde murieron decenas de miles de presos. Las fotos sacadas por el desertor conocido como César documentaron más de 6.000 muertos bajo custodia.",
    "La caída de Bashar al-Assad en diciembre de 2024 disolvió esos servicios. El nuevo gobierno de Ahmed al-Sharaa, ex jefe del grupo Hayat Tahrir al-Sham, creó un Servicio General de Inteligencia (GID) y un nuevo aparato de seguridad del Ministerio del Interior. En marzo de 2025 fuerzas afines al gobierno mataron a cientos de civiles alauitas en la costa, según la ONU y organizaciones sirias.",
    "Siria es hoy una zona de operaciones abierta: Israel bombardea y ocupa zonas del sur, Turquía tiene tropas en el norte, EE.UU. mantiene presencia en el este y Rusia negocia por sus bases. En 2022 un tribunal alemán condenó a perpetua a un ex coronel de la inteligencia de Assad por crímenes de lesa humanidad."
  ],
  keyFacts: [
    { l: "Caída de Assad", v: "8 de diciembre de 2024", n: "fin de 54 años de gobierno familiar" },
    { l: "Fotos de César", v: "Más de 6.000 muertos identificados", n: "en centros de inteligencia, según Human Rights Watch" },
    { l: "Condena en Koblenz", v: "Anwar Raslan", n: "perpetua en 2022" },
    { l: "Presidente de transición", v: "Ahmed al-Sharaa", n: "desde enero de 2025" }
  ],
  power: { humana: 2, senales: 1, ciber: 1, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "El nuevo servicio hereda redes de Hayat Tahrir al-Sham en el noroeste.",
    senales: "Infraestructura destruida o abandonada tras 2024.",
    ciber: "Capacidad mínima.",
    imagenes: "Sin capacidades propias.",
    encubierta: "No hay operaciones exteriores documentadas del nuevo gobierno.",
    contra: "Servicios extranjeros operan con libertad en el país."
  },
  priorities: [
    { h: "Remanentes de Assad", x: "Ex oficiales y milicias leales al régimen caído." },
    { h: "Estado Islámico", x: "Células en el desierto y en el este." },
    { h: "Israel", x: "Ocupación y bombardeos en el sur." },
    { h: "Kurdos", x: "Integración de las Fuerzas Democráticas Sirias." },
    { h: "Minorías", x: "Tensiones con alauitas y drusos." }
  ],
  focos: ["Israel", "Estado Islámico", "Kurdos", "Irán", "Hezbolá"],
  bodies: {
    "CSN": { since: 2025, how: "Consejo de Seguridad Nacional del gobierno de transición.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Damasco"] },
    "GID": { since: 2024, how: "Servicio General de Inteligencia del nuevo gobierno, creado tras disolver los servicios de Assad.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Damasco"] },
    "Defensa": { since: 2025, how: "Inteligencia del nuevo Ministerio de Defensa, que integra a ex grupos rebeldes.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Damasco"] },
    "Seguridad General": { since: 2025, how: "Seguridad General del Ministerio del Interior, la fuerza de seguridad interna del nuevo gobierno.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Damasco", "Todo el país"] }
  },
  civil: [
    "Los servicios responden al presidente de transición.",
    "La declaración constitucional de 2025 no creó controles independientes sobre la inteligencia.",
    "Bajo Assad, la inteligencia de la Fuerza Aérea y la militar respondían directamente al presidente."
  ],
  law: {
    domestic: [
      "La declaración constitucional de marzo de 2025 rige la transición.",
      "Bajo Assad, el estado de emergencia de 1963 permitió detenciones sin juicio durante 48 años.",
      "Las leyes antiterroristas de 2012 se usaron contra opositores."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control.",
      "Tribunales extranjeros juzgan a ex oficiales por jurisdicción universal."
    ]
  },
  rights: [
    { d: "1963-03", dir: "amplia", area: "Debido proceso", h: "Estado de emergencia", x: "Rige hasta 2011 y permite detenciones sin juicio." },
    { d: "2024-12", dir: "recorta", area: "Debido proceso", h: "Apertura de las cárceles", x: "Los rebeldes liberan a presos de Sednaya y otros centros de la inteligencia." },
    { d: "2025-03", dir: "amplia", area: "Debido proceso", h: "Declaración constitucional", x: "Concentra poder en el presidente de transición." }
  ],
  events: [
    { d: "2013-08", lat: 33.52, lon: 36.3, c: "Syria", t: "contra", ev: 1, h: "Las fotos de César", x: "Un fotógrafo de la policía militar saca del país miles de fotos de presos muertos en centros de inteligencia.", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-12-08", lat: 33.6, lon: 36.28, c: "Syria", t: "contra", ev: 1, h: "Cae Assad", x: "Los rebeldes toman Damasco, Assad huye a Moscú y se abren las cárceles de la inteligencia, como Sednaya.", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-03-07", lat: 35.5, lon: 35.95, c: "Syria", t: "contra", ev: 1, h: "Matanzas en la costa", x: "Tras ataques de leales a Assad, fuerzas afines al gobierno matan a cientos de civiles alauitas, según la ONU.", u: "https://en.wikipedia.org/wiki/March_2025_Western_Syria_clashes", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Israel": 3, "Turkey": 2, "Lebanon": 2, "Iraq": 2, "Jordan": 1, "Russia": 1, "Iran": 2
  },
  timeline: [
    { era: "Assad", d: "1970", h: "Hafez al-Assad", x: "Construye un Estado de seguridad con servicios rivales." },
    { era: "", d: "1982", h: "Hama", x: "El Ejército y los servicios aplastan una rebelión islamista; miles de muertos." },
    { era: "", d: "2011–2024", h: "Guerra civil", x: "Detenciones masivas y torturas en centros de inteligencia." },
    { era: "Transición", d: "2024", h: "Caída de Assad", x: "Se disuelven los servicios del régimen." },
    { era: "Actual", d: "2025–2026", h: "Nuevo aparato", x: "Nuevo servicio de inteligencia y violencia sectaria.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2011–2024", h: "Las cárceles de la inteligencia", x: "La comisión de investigación de la ONU y organizaciones sirias documentaron torturas, desapariciones y ejecuciones masivas en centros de los servicios de Assad, como la sección 215 de la inteligencia militar y la prisión de Sednaya.", who: "Comisión de Investigación de la ONU sobre Siria", missing: "", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2011–2012", h: "El juicio de Koblenz", x: "Un tribunal alemán condenó en 2022 a perpetua al ex coronel Anwar Raslan, de la inteligencia general, por la tortura de miles de presos en la sección 251 de Damasco. Fue el primer juicio penal por los crímenes del régimen.", who: "Tribunal Regional Superior de Koblenz", missing: "", u: "https://en.wikipedia.org/wiki/Anwar_Raslan", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2025", h: "Las matanzas de alauitas", x: "La ONU y organizaciones sirias documentaron la muerte de cientos de civiles alauitas en la costa a manos de fuerzas afines al gobierno. El gobierno creó una comisión que confirmó violaciones.", who: "ONU y comisión del gobierno sirio", missing: "", u: "https://en.wikipedia.org/wiki/March_2025_Western_Syria_clashes", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2024-11", ev: 1, w: 3, h: "El derrumbe en dos semanas", x: "Los servicios de Assad no previeron ni frenaron la ofensiva rebelde que tomó Damasco en 11 días.", why: "No está en duda.", wx: "Hechos públicos.", who: "Prensa internacional", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Bajo Assad, oficiales de inteligencia en embajadas vigilaban a la diáspora; el nuevo gobierno reconstruye su red.",
    campo: "Informantes en todo el país; el nuevo servicio usa redes de los ex rebeldes.",
    oficina: "Bajo Assad, los servicios competían entre sí y respondían al presidente.",
    reclutamiento: "El nuevo aparato recluta entre ex combatientes rebeldes.",
    tecnica: "Capacidades técnicas mínimas tras la guerra.",
    enlaces: "El nuevo gobierno coopera con Turquía, Catar y, en parte, con EE.UU. contra el Estado Islámico."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "2011–2013", n: "César", h: "El fotógrafo de los cadáveres", x: "Fotógrafo de la policía militar que sacó unas 53.000 fotos de presos muertos.", cargo: "Fotógrafo forense de la policía militar", hacia: "Oposición siria y gobiernos occidentales", fin: "Vive en el exilio con identidad protegida; reveló su nombre en 2025.", who: "Human Rights Watch y Congreso de EE.UU.", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desertor", dir: "sale", ev: 1, d: "2012", n: "Anwar Raslan", h: "El coronel que desertó y fue condenado", x: "Jefe de investigaciones de la sección 251 que desertó en 2012 y pidió asilo en Alemania.", cargo: "Coronel de la inteligencia general", hacia: "Oposición y luego Alemania", fin: "Condenado a perpetua en Alemania en 2022.", who: "Tribunal de Koblenz", u: "https://en.wikipedia.org/wiki/Anwar_Raslan", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 1, d: "2014-01", h: "El informe César", x: "Se publican fotos de miles de presos muertos en centros de la inteligencia.", obj: "Exponer los crímenes del régimen.", who: "Human Rights Watch", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2011–2024", h: "Los desaparecidos", x: "El régimen ocultó el destino de más de 100.000 desaparecidos, según organizaciones sirias.", obj: "Aterrorizar y evitar responsabilidades.", aquien: "Las familias y la comunidad internacional", como: "Apertura de cárceles y archivos tras la caída de Assad.", who: "Organizaciones sirias de derechos humanos", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "Bajo Assad los servicios vigilaban a militares y funcionarios.", u: "https://en.wikipedia.org/wiki/Anwar_Raslan", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Opositores fueron detenidos y torturados por décadas.", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Periodistas sirios y extranjeros fueron detenidos o muertos bajo Assad.", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Manifestantes de 2011 murieron bajo custodia, según el informe César.", u: "https://en.wikipedia.org/wiki/Caesar_Report", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Bajo Assad, Israel y la oposición; hoy, remanentes del régimen y el Estado Islámico.", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 1, x: "Funcionarios cobraban a familias por información sobre presos, según organizaciones sirias.", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" },
    asesinato: { ev: 1, x: "Ejecuciones masivas en Sednaya, según Amnistía.", u: "https://en.wikipedia.org/wiki/Saydnaya_Prison", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 1, x: "Tortura sistemática en centros de inteligencia, probada en juicios en Alemania.", u: "https://en.wikipedia.org/wiki/Anwar_Raslan", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Más de 100.000 desaparecidos durante la guerra.", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 1, x: "El régimen de Assad apoyó a grupos armados en el Líbano durante décadas.", u: "https://en.wikipedia.org/wiki/Syrian_occupation_of_Lebanon", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 1, x: "Assad controló a partidos libaneses durante la ocupación del Líbano.", u: "https://en.wikipedia.org/wiki/Syrian_occupation_of_Lebanon", st: "Wikipedia (síntesis de fuentes)" },
    diaspora: { ev: 1, x: "Bajo Assad los servicios vigilaban a sirios en Europa, según los juicios en Alemania.", u: "https://en.wikipedia.org/wiki/Anwar_Raslan", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 1, x: "El régimen de Assad fue un corredor de armas iraníes hacia Hezbolá.", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto es secreto.",
    uso: "Reconstrucción del aparato de seguridad.",
    ingresos: "Bajo Assad, el tráfico de captagón financió al régimen, según gobiernos occidentales.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas del nuevo gobierno.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "La Cuarta División de Maher al-Assad estuvo vinculada al captagón, según EE.UU. y la UE.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "crimen", rol: "autor", ev: 2, d: "2018–2024", h: "El negocio del captagón", x: "EE.UU. y la UE sancionaron a familiares y aliados de Assad por producir y traficar la droga captagón.", obj: "Financiar al régimen.", who: "Gobiernos de EE.UU. y la UE", u: "https://en.wikipedia.org/wiki/Captagon", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Syriatel", c: "nacional", rubro: "Telecomunicaciones", rel: "Ligada al régimen de Assad", x: "Operadora creada por Rami Makhlouf, primo de Assad; sancionada por EE.UU. y la UE." }
  ],
  struggles: [
    { a: "Gobierno de al-Sharaa", b: "Remanentes de Assad y minorías armadas", k: "Interna", stake: "El control del territorio", state: "Abierta", x: "Violencia en la costa y en el sur druso." },
    { a: "Siria", b: "Israel", k: "Con otros Estados", stake: "El sur del país", state: "Abierta", x: "Israel ocupa una zona tampón y bombardea." }
  ],
  sources: [
    { t: "Wikipedia: Fall of the Assad regime", u: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime" },
    { t: "Wikipedia: Caesar Report", u: "https://en.wikipedia.org/wiki/Caesar_Report" },
    { t: "Wikipedia: Anwar Raslan", u: "https://en.wikipedia.org/wiki/Anwar_Raslan" },
    { t: "Wikipedia: March 2025 Western Syria clashes", u: "https://en.wikipedia.org/wiki/March_2025_Western_Syria_clashes" }
  ]
};
