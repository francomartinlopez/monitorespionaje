// Ficha de Bélgica · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["be"] = {
  id: "be",
  updated: "2026-11-16",
  summary: [
    "Bruselas aloja las instituciones de la Unión Europea y el cuartel general de la OTAN, lo que la convierte en una de las capitales con más espías del mundo. Bélgica tiene dos servicios chicos: la Seguridad del Estado (VSSE), civil y uno de los servicios más antiguos del mundo, y el Servicio General de Inteligencia y Seguridad (SGRS) militar. El Órgano de Coordinación para el Análisis de la Amenaza (OCAM) evalúa el terrorismo.",
    "Bélgica fue blanco de aliados y rivales. Documentos de Snowden mostraron que la agencia británica GCHQ hackeó a la operadora estatal Belgacom en la operación Socialist. En 2023 la prensa reveló que un ex senador del partido Vlaams Belang trabajó para la inteligencia china, y en 2024 se descubrió la red rusa Voice of Europe, que pagaba a eurodiputados.",
    "Los atentados yihadistas de marzo de 2016 en Bruselas mataron a 32 personas y expusieron fallas de coordinación entre servicios. En 2022 el escándalo Qatargate, sobre sobornos a miembros del Parlamento Europeo, empezó con información de la VSSE."
  ],
  keyFacts: [
    { l: "Fundación de la Seguridad del Estado", v: "1830", n: "uno de los servicios más antiguos del mundo" },
    { l: "Operación Socialist", v: "GCHQ hackeó a Belgacom", n: "revelado en 2013" },
    { l: "Atentados de Bruselas", v: "32 muertos", n: "22 de marzo de 2016" },
    { l: "Qatargate", v: "2022", n: "investigación iniciada con datos de la VSSE" }
  ],
  power: { humana: 2, senales: 2, ciber: 2, imagenes: 1, encubierta: 1, contra: 3 },
  powerWhy: {
    humana: "Servicios chicos con recursos limitados para una capital llena de espías.",
    senales: "El SGRS tiene capacidades modestas de interceptación.",
    ciber: "No detectó durante años el hackeo de la GCHQ a su principal operadora.",
    imagenes: "Depende de la OTAN y de socios.",
    encubierta: "No hay operaciones encubiertas documentadas.",
    contra: "Destapó Qatargate y la red Voice of Europe con ayuda de socios."
  },
  priorities: [
    { h: "Instituciones europeas", x: "Proteger a la UE y la OTAN del espionaje." },
    { h: "Terrorismo", x: "Yihadismo y radicalización." },
    { h: "Rusia y China", x: "Espionaje e influencia en Bruselas." },
    { h: "Injerencia", x: "Sobornos y redes de influencia en el Parlamento Europeo." },
    { h: "Crimen organizado", x: "El puerto de Amberes y el narcotráfico." }
  ],
  focos: ["Rusia", "China", "Catar", "Marruecos", "Yihadismo"],
  bodies: {
    "CNS": { since: 2015, how: "Consejo Nacional de Seguridad, que reúne al primer ministro y a ministros clave.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Bruselas"] },
    "VSSE": { since: 1830, how: "Seguridad del Estado: inteligencia civil, contraespionaje, injerencia y extremismo. Depende del Ministerio de Justicia.", staff: "Unas 800 personas, según estimaciones públicas.", budget: "Público.", tech: [], where: ["Bruselas"] },
    "SGRS": { since: 1915, how: "Servicio General de Inteligencia y Seguridad: inteligencia militar, ciber y contrainteligencia de Defensa.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Interceptación", "Ciber"], where: ["Evere"] },
    "OCAM": { since: 2006, how: "Órgano de Coordinación para el Análisis de la Amenaza: fija el nivel de amenaza terrorista.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Bruselas"] },
    "Comité R": { since: 1991, how: "Comité Permanente de Control de los Servicios de Inteligencia, que depende del Parlamento.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Bruselas"] }
  },
  civil: [
    "La VSSE responde al ministro de Justicia y el SGRS al de Defensa.",
    "El Comité R controla a los dos servicios para el Parlamento.",
    "Una comisión administrativa autoriza los métodos excepcionales."
  ],
  law: {
    domestic: [
      "La ley orgánica de 1998 regula a los servicios.",
      "La ley de métodos especiales de 2010 permite escuchas e intrusiones con control de una comisión.",
      "Reformas posteriores a 2016 ampliaron el intercambio de datos entre servicios."
    ],
    foreign: [
      "El SGRS puede interceptar comunicaciones en el exterior."
    ],
    oversight: [
      "Comité Permanente R.",
      "Comisión administrativa de métodos especiales."
    ]
  },
  rights: [
    { d: "2010-02", dir: "amplia", area: "Privacidad", h: "Ley de métodos especiales", x: "Autoriza escuchas e intrusiones con control administrativo." },
    { d: "2016-12", dir: "amplia", area: "Privacidad", h: "Bases de datos comunes", x: "Tras los atentados se crean bases compartidas sobre combatientes extranjeros." }
  ],
  events: [
    { d: "2013-09", lat: 50.85, lon: 4.36, c: "Belgium", t: "ciber", ev: 1, h: "El hackeo a Belgacom", x: "Se revela que la GCHQ británica infectó durante años la red de la operadora estatal belga.", u: "https://en.wikipedia.org/wiki/Operation_Socialist", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2016-03-22", lat: 50.9, lon: 4.48, c: "Belgium", t: "contra", ev: 1, h: "Atentados de Bruselas", x: "Ataques suicidas en el aeropuerto y el metro matan a 32 personas.", u: "https://en.wikipedia.org/wiki/2016_Brussels_bombings", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2022-12-09", lat: 50.84, lon: 4.38, c: "Belgium", t: "contra", ev: 2, h: "Qatargate", x: "La policía detiene a una vicepresidenta del Parlamento Europeo y encuentra bolsas con dinero, en una causa iniciada con datos de la VSSE.", u: "https://en.wikipedia.org/wiki/Qatargate", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Russia": 3, "China": 3, "Qatar": 2, "Morocco": 2, "Iran": 1, "Syria": 1, "Dem. Rep. Congo": 1, "Netherlands": 1
  },
  timeline: [
    { era: "Fundación", d: "1830", h: "Nace la Seguridad del Estado", x: "Creada con la independencia belga." },
    { era: "Siglo XX", d: "1915", h: "Inteligencia militar", x: "Nace el servicio militar durante la Primera Guerra Mundial." },
    { era: "", d: "1998", h: "Ley orgánica", x: "Marco legal moderno y control parlamentario." },
    { era: "Siglo XXI", d: "2016", h: "Atentados de Bruselas", x: "Reformas de coordinación." },
    { era: "Actual", d: "2022–2026", h: "Injerencia en la UE", x: "Qatargate, Voice of Europe y espionaje chino.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2010–2013", h: "La operación Socialist", x: "Documentos de Snowden mostraron que la GCHQ infectó computadoras de empleados de Belgacom para acceder a su red. La fiscalía belga concluyó en 2018 que fue obra del Reino Unido, que nunca lo confirmó.", who: "Fiscalía federal de Bélgica", missing: "", u: "https://en.wikipedia.org/wiki/Operation_Socialist", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2018–2022", h: "Qatargate", x: "La fiscalía belga acusa a eurodiputados y asistentes de recibir sobornos de Catar y Marruecos para influir en el Parlamento Europeo. Los acusados lo niegan y el juicio aún no se hizo.", who: "Fiscalía federal de Bélgica", missing: "Un juicio.", u: "https://en.wikipedia.org/wiki/Qatargate", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2019–2023", h: "Frank Creyelman", x: "Una investigación periodística mostró que el ex senador de Vlaams Belang recibía instrucciones de un agente del Ministerio de Seguridad del Estado chino para influir en la política europea. Fue expulsado de su partido.", who: "Financial Times, Der Spiegel y Le Monde", missing: "Una condena judicial.", u: "https://en.wikipedia.org/wiki/Vlaams_Belang", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2015–2016", ev: 1, w: 3, h: "La célula de París y Bruselas", x: "Los autores de los atentados de París y Bruselas vivieron en Molenbeek pese a estar en listas de sospechosos.", why: "No está en duda; lo concluyó una comisión parlamentaria.", wx: "Informe de la comisión parlamentaria de 2017.", who: "Comisión parlamentaria belga", u: "https://en.wikipedia.org/wiki/2016_Brussels_bombings", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Bélgica tiene pocos oficiales en el exterior; en Bruselas operan cientos de espías extranjeros, según la VSSE.",
    campo: "Fuentes humanas en comunidades de riesgo y en el entorno de las instituciones europeas.",
    oficina: "La VSSE informa al gobierno y alerta a las instituciones europeas.",
    reclutamiento: "Concursos públicos; el servicio pidió más personal durante años.",
    tecnica: "Métodos especiales con control administrativo; capacidad técnica modesta.",
    enlaces: "Cooperación con servicios europeos, la OTAN y EE.UU."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 2, d: "2019–2023", n: "Frank Creyelman", h: "El ex senador al servicio de China", x: "Recibía pedidos de un agente chino para difundir mensajes y obtener información, según la prensa.", cargo: "Ex senador y dirigente de Vlaams Belang", hacia: "Ministerio de Seguridad del Estado chino", fin: "Expulsado del partido.", who: "Financial Times, Der Spiegel y Le Monde", u: "https://en.wikipedia.org/wiki/Vlaams_Belang", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "robo", rol: "blanco", ev: 1, d: "2010–2013", h: "Belgacom", x: "Un servicio aliado accede a las comunicaciones de la principal operadora belga.", obj: "Interceptar tráfico de instituciones y clientes.", who: "Fiscalía federal de Bélgica", u: "https://en.wikipedia.org/wiki/Operation_Socialist", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desinfo", rol: "blanco", ev: 2, d: "2023–2024", h: "Voice of Europe", x: "Un sitio financiado por Rusia pagaba a políticos europeos para difundir mensajes prorrusos, según los servicios checo y belga.", obj: "Influir en las elecciones europeas de 2024.", who: "Servicios de seguridad de Chequia y Bélgica", u: "https://en.wikipedia.org/wiki/Voice_of_Europe", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 1, x: "La VSSE vigila a políticos por posibles vínculos con potencias extranjeras, como en Qatargate.", u: "https://en.wikipedia.org/wiki/Qatargate", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Rusia y China son blancos centrales de la contrainteligencia belga.", u: "https://en.wikipedia.org/wiki/Voice_of_Europe", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "Durante la descolonización, oficiales belgas participaron en el asesinato de Patrice Lumumba en 1961, según una comisión parlamentaria.", u: "https://en.wikipedia.org/wiki/Patrice_Lumumba", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 1, x: "Apoyó la secesión de Katanga en el Congo en 1960.", u: "https://en.wikipedia.org/wiki/State_of_Katanga", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 2, x: "Una comisión parlamentaria atribuyó a Bélgica una responsabilidad moral en la caída y muerte de Lumumba.", u: "https://en.wikipedia.org/wiki/Patrice_Lumumba", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 1, x: "La VSSE vigila mezquitas y la financiación extranjera del islam en Bélgica.", u: "https://en.wikipedia.org/wiki/State_Security_Service_(Belgium)", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Comparte información con socios europeos sobre injerencia y terrorismo.", u: "https://en.wikipedia.org/wiki/State_Security_Service_(Belgium)", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos de la VSSE y el SGRS son públicos y crecieron tras 2016. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Personal, contraterrorismo y contraespionaje.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "cobertura", rol: "blanco", ev: 2, d: "2018–2022", h: "El dinero de Qatargate", x: "La policía encontró más de 1,5 millones de euros en efectivo en casas de los acusados, según la fiscalía.", monto: "Más de 1,5 millones de euros", obj: "Comprar influencia en el Parlamento Europeo.", who: "Fiscalía federal de Bélgica", u: "https://en.wikipedia.org/wiki/Qatargate", st: "Wikipedia (síntesis de fuentes)" },
    { k: "fachada", rol: "blanco", ev: 2, d: "2023–2024", h: "Voice of Europe", x: "Un sitio con sede en Praga, financiado por Rusia, pagaba a políticos europeos.", obj: "Difundir propaganda prorrusa.", who: "Servicio de seguridad checo", u: "https://en.wikipedia.org/wiki/Voice_of_Europe", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Proximus (ex Belgacom)", c: "nacional", rubro: "Telecomunicaciones", rel: "Víctima", x: "Hackeada por la GCHQ entre 2010 y 2013." }
  ],
  struggles: [
    { a: "VSSE", b: "Gobierno", k: "Con la política", stake: "Los recursos del servicio", state: "Latente", x: "El servicio reclama más personal para vigilar Bruselas." }
  ],
  proxies: [
  ],
  sources: [
    { t: "Wikipedia: State Security Service (Belgium)", u: "https://en.wikipedia.org/wiki/State_Security_Service_(Belgium)" },
    { t: "Wikipedia: Operation Socialist", u: "https://en.wikipedia.org/wiki/Operation_Socialist" },
    { t: "Wikipedia: 2022 European Parliament corruption scandal", u: "https://en.wikipedia.org/wiki/Qatargate" },
    { t: "Wikipedia: Voice of Europe", u: "https://en.wikipedia.org/wiki/Voice_of_Europe" }
  ]
};
