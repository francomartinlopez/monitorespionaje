// Ficha de Canadá · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["ca"] = {
  id: "ca",
  updated: "2026-11-15",
  summary: [
    "Canadá integra la alianza Cinco Ojos y no tiene un servicio de inteligencia humana en el exterior como la CIA o el MI6. Su peso está en el Establecimiento de Seguridad de las Comunicaciones (CSE), que intercepta señales y hace ciberoperaciones, y en el Servicio Canadiense de Inteligencia de Seguridad (CSIS), dirigido desde octubre de 2024 por Daniel Rogers. La Policía Montada (RCMP) investiga los delitos de seguridad nacional.",
    "La injerencia extranjera dominó el debate desde 2023. Una comisión pública presidida por la jueza Marie-Josée Hogue concluyó en 2025 que China es el principal autor de injerencia en Canadá. En 2023 Canadá expulsó a un diplomático chino que buscaba información sobre un diputado opositor, y en agosto de 2026 empezó a funcionar el registro de agentes de influencia extranjera.",
    "El gobierno de Justin Trudeau acusó en 2023 a agentes de India por el asesinato del dirigente sij Hardeep Singh Nijjar, pero en julio de 2026 la RCMP dijo que no encontró pruebas que vinculen al gobierno indio. La historia de los servicios incluye errores graves, como la información falsa que llevó a la tortura de Maher Arar en Siria en 2002."
  ],
  keyFacts: [
    { l: "Director del CSIS", v: "Daniel Rogers", n: "desde octubre de 2024" },
    { l: "Principal autor de injerencia", v: "China", n: "según la comisión Hogue (2025) y el CSIS" },
    { l: "Registro de influencia extranjera", v: "4 de agosto de 2026", n: "comisionado: Anton Boegman" },
    { l: "Espía en la RCMP", v: "Cameron Ortis", n: "condenado a 14 años en 2024" }
  ],
  power: { humana: 2, senales: 4, ciber: 4, imagenes: 3, encubierta: 1, contra: 3 },
  powerWhy: {
    humana: "Sin servicio exterior de inteligencia humana; el CSIS puede actuar afuera solo en temas de seguridad.",
    senales: "El CSE es un socio pleno de Cinco Ojos con cobertura sobre el Ártico y otras regiones.",
    ciber: "La ley de 2019 autorizó al CSE a hacer ciberoperaciones activas y defensivas.",
    imagenes: "Satélites radar propios y acceso a imágenes de EE.UU.",
    encubierta: "No hay operaciones encubiertas documentadas en el exterior.",
    contra: "Detectó redes chinas, pero un director de inteligencia de la RCMP vendió secretos."
  },
  priorities: [
    { h: "Injerencia extranjera", x: "China, India, Rusia e Irán en la política y las comunidades." },
    { h: "Ártico", x: "Interés ruso y chino en la región y sus recursos." },
    { h: "Extremismo violento", x: "Radicalización de adolescentes y violencia ideológica." },
    { h: "Seguridad económica", x: "Robo de tecnología e inversiones en sectores clave." },
    { h: "Relación con EE.UU.", x: "Cooperación de inteligencia en un contexto de tensiones comerciales." }
  ],
  focos: ["China", "India", "Rusia", "Irán", "Ártico"],
  bodies: {
    "NSIA": { since: 2004, how: "Asesor de Seguridad Nacional e Inteligencia del primer ministro, que coordina a los servicios desde la Oficina del Consejo Privado.", staff: "No se publica.", budget: "Dentro de la Oficina del Consejo Privado.", tech: [], where: ["Ottawa"] },
    "CSE": { since: 1946, how: "Establecimiento de Seguridad de las Comunicaciones: inteligencia de señales en el exterior, ciberseguridad y ciberoperaciones. Tiene prohibido apuntar a canadienses.", staff: "Unas 3.000 personas, según el organismo.", budget: "Público en el presupuesto.", tech: ["Interceptación", "Ciberoperaciones"], where: ["Ottawa", "Estaciones en el país"] },
    "CFINTCOM": { since: 2013, how: "Comando de Inteligencia de las Fuerzas Canadienses: inteligencia militar para Defensa.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Satélites radar"], where: ["Ottawa"] },
    "CSIS": { since: 1984, how: "Servicio Canadiense de Inteligencia de Seguridad: contraespionaje, injerencia extranjera y terrorismo. Nació al separar la inteligencia de la RCMP tras escándalos de la década de 1970.", staff: "Unas 3.300 personas, según el servicio.", budget: "Público en el presupuesto.", tech: ["Escuchas con orden judicial"], where: ["Ottawa", "Oficinas regionales", "Algunas embajadas"] },
    "RCMP": { since: 1920, how: "Real Policía Montada de Canadá: investiga los delitos de seguridad nacional, como el espionaje y la injerencia, y lleva las causas a juicio.", staff: "No se publica la parte de seguridad nacional.", budget: "Dentro de Seguridad Pública.", tech: [], where: ["Ottawa", "Todo el país"] },
    "NSIRA": { since: 2019, how: "Agencia de Revisión de Seguridad Nacional e Inteligencia: revisa la legalidad de todas las actividades de inteligencia.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Ottawa"] }
  },
  civil: [
    "Los servicios responden al ministro de Seguridad Pública (CSIS) y a la ministra de Defensa (CSE).",
    "Un comité de parlamentarios con acceso a secretos, el NSICOP, revisa la inteligencia desde 2017.",
    "El CSIS necesita orden de un juez federal para sus medidas más intrusivas."
  ],
  law: {
    domestic: [
      "La ley del CSIS de 1984 regula sus poderes; la reforma de 2024 cambió cómo pide órdenes y a quién puede informar.",
      "La ley de seguridad nacional de 2019 creó el organismo de revisión y dio al CSE poderes de ciberoperación.",
      "La ley de transparencia de influencia extranjera de 2024 creó el registro que funciona desde agosto de 2026."
    ],
    foreign: [
      "El CSE puede hacer ciberoperaciones activas en el exterior con autorización ministerial."
    ],
    oversight: [
      "Agencia de Revisión de Seguridad Nacional e Inteligencia (NSIRA).",
      "Comité de Parlamentarios sobre Seguridad Nacional e Inteligencia (NSICOP).",
      "Comisionado de Inteligencia, que aprueba ciertas autorizaciones."
    ]
  },
  rights: [
    { d: "1981-08", dir: "recorta", area: "Debido proceso", h: "Comisión McDonald", x: "Revela delitos de la policía de seguridad de la RCMP y propone separar la inteligencia de la policía." },
    { d: "2015-06", dir: "amplia", area: "Privacidad", h: "Ley antiterrorista C-51", x: "Permite al CSIS actuar para reducir amenazas y amplía el intercambio de datos." },
    { d: "2019-06", dir: "recorta", area: "Debido proceso", h: "Ley C-59", x: "Crea órganos de revisión y limita los poderes de 2015." },
    { d: "2024-06", dir: "amplia", area: "Privacidad", h: "Ley C-70", x: "Amplía las herramientas contra la injerencia y crea el registro de agentes extranjeros." }
  ],
  events: [
    { d: "1945-09-05", lat: 45.42, lon: -75.7, c: "Canada", t: "contra", ev: 1, h: "Deserción de Gouzenko", x: "Un cifrador soviético deserta en Ottawa con documentos sobre redes de espionaje en Occidente.", u: "https://en.wikipedia.org/wiki/Igor_Gouzenko", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2002-09-26", lat: 41.0, lon: -74.3, c: "United States of America", t: "contra", ev: 1, h: "Traslado de Maher Arar", x: "EE.UU. detiene en Nueva York a un ciudadano canadiense y lo envía a Siria, donde lo torturan, con información falsa de la RCMP.", u: "https://en.wikipedia.org/wiki/Maher_Arar", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2012-01", lat: 44.7, lon: -63.65, c: "Canada", t: "contra", ev: 1, h: "Detienen a Jeffrey Delisle", x: "Un oficial naval de Halifax vendía secretos de los Cinco Ojos a la inteligencia militar rusa.", u: "https://en.wikipedia.org/wiki/Jeffrey_Delisle", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2019-09", lat: 45.43, lon: -75.69, c: "Canada", t: "contra", ev: 1, h: "Detienen a Cameron Ortis", x: "El director de inteligencia de la RCMP es detenido por pasar secretos a personas investigadas.", u: "https://en.wikipedia.org/wiki/Cameron_Ortis", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2023-05-08", lat: 45.41, lon: -75.71, c: "Canada", t: "contra", ev: 1, h: "Expulsión del diplomático Zhao Wei", x: "Canadá expulsa a un diplomático chino acusado de buscar información sobre el diputado Michael Chong y su familia en Hong Kong.", u: "https://en.wikipedia.org/wiki/Chinese_government_interference_in_Canada", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "China": 3, "Russia": 3, "India": 2, "Iran": 2, "United States of America": 2, "Greenland": 1, "Ukraine": 1, "Pakistan": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1945", h: "Caso Gouzenko", x: "La deserción abre la Guerra Fría en la inteligencia occidental." },
    { era: "", d: "1946", h: "Nace el CSE", x: "Canadá se suma al acuerdo de señales con EE.UU. y el Reino Unido." },
    { era: "", d: "1984", h: "Nace el CSIS", x: "La inteligencia de seguridad se separa de la policía." },
    { era: "", d: "1985", h: "Air India", x: "El peor atentado de la historia del país expone fallas del CSIS y la RCMP." },
    { era: "Siglo XXI", d: "2002", h: "Caso Arar", x: "Información falsa canadiense lleva a la tortura de un ciudadano en Siria." },
    { era: "", d: "2023–2025", h: "Injerencia extranjera", x: "Filtraciones, la comisión Hogue y el caso Nijjar." },
    { era: "Actual", d: "2026", h: "Registro de influencia", x: "Entra en vigor el registro y la RCMP dice no tener pruebas contra India en el caso Nijjar.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2002", h: "Maher Arar", x: "La RCMP pasó a EE.UU. información falsa que describía como extremista a un ingeniero canadiense. EE.UU. lo envió a Siria, donde estuvo preso y fue torturado casi un año. Una comisión lo exoneró en 2006 y el gobierno pagó 10,5 millones de dólares canadienses.", who: "Comisión O'Connor", missing: "", u: "https://en.wikipedia.org/wiki/Maher_Arar", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2015–2023", h: "La injerencia china", x: "La comisión Hogue concluyó en 2025 que China es el principal autor de injerencia en Canadá. Documentó intentos de influir en nominaciones y comunidades, aunque sin alterar el resultado de las elecciones.", who: "Comisión de investigación sobre injerencia extranjera", missing: "", u: "https://openparliament.ca/committees/house-affairs/45-1/20/", st: "Comité de la Cámara de los Comunes" },
    { ev: 3, ilegal: true, d: "2023", h: "El asesinato de Nijjar", x: "Trudeau habló en 2023 de acusaciones creíbles contra agentes indios y en 2024 Canadá expulsó a diplomáticos. En julio de 2026 la RCMP dijo que su investigación no encontró pruebas que vinculen al gobierno indio; cuatro acusados esperan juicio.", who: "Gobierno de Canadá (2023-2024)", missing: "Pruebas públicas de un vínculo con el Estado indio.", u: "https://theprint.in/diplomacy/no-evidence-linking-indian-govt-to-killing-of-nijjar-says-rcmp-3-years-after-trudeau-accusations/2980674/", st: "ThePrint" },
    { ev: 1, ilegal: true, d: "2006–2016", h: "Los metadatos retenidos", x: "Un juez federal concluyó en 2016 que el CSIS guardó ilegalmente durante una década metadatos de personas que no eran blanco de investigación, y que no informó al tribunal.", who: "Tribunal Federal de Canadá", missing: "", u: "https://en.wikipedia.org/wiki/Canadian_Security_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "1985-06", ev: 1, w: 3, h: "El atentado de Air India", x: "Una bomba de extremistas sijs mató a 329 personas; el CSIS había vigilado a los sospechosos y borró grabaciones clave.", why: "No está en duda; una comisión pública lo documentó en 2010.", wx: "Informe de la comisión Major.", who: "Comisión Major", u: "https://en.wikipedia.org/wiki/Air_India_Flight_182", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2007–2019", ev: 1, w: 3, h: "Cameron Ortis", x: "El director de inteligencia de la RCMP tuvo acceso a secretos de los Cinco Ojos y los ofreció a investigados.", why: "No está en duda; hubo condena en 2023.", wx: "Condena y sentencia de 14 años.", who: "Justicia de Canadá", u: "https://en.wikipedia.org/wiki/Cameron_Ortis", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "El CSIS tiene oficiales de enlace en algunas embajadas; no hay un servicio de inteligencia humana exterior.",
    campo: "El CSIS recluta fuentes dentro de Canadá y puede actuar afuera en temas de seguridad.",
    oficina: "La Oficina del Consejo Privado integra evaluaciones para el primer ministro.",
    reclutamiento: "Concursos públicos con controles de seguridad; el CSE recluta técnicos y lingüistas.",
    tecnica: "Interceptación del CSE, ciberoperaciones y escuchas judiciales del CSIS.",
    enlaces: "Cinco Ojos, OTAN y cooperación estrecha con EE.UU. en el comando aeroespacial NORAD."
  },
  insiders: [
    { k: "desertor", dir: "entra", ev: 1, d: "1945", n: "Igor Gouzenko", h: "El cifrador soviético", x: "Entregó más de 100 documentos sobre redes soviéticas en Canadá, EE.UU. y el Reino Unido.", cargo: "Cifrador de la embajada soviética en Ottawa", hacia: "Gobierno de Canadá", fin: "Vivió en Canadá con identidad protegida.", who: "Comisión Kellock-Taschereau", u: "https://en.wikipedia.org/wiki/Igor_Gouzenko", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2007–2012", n: "Jeffrey Delisle", h: "El oficial naval que vendió secretos", x: "Vendió a la inteligencia militar rusa información de los Cinco Ojos durante casi cinco años.", cargo: "Suboficial de inteligencia naval en Halifax", hacia: "Inteligencia militar rusa (GRU)", fin: "Condenado a 20 años en 2013.", who: "Justicia de Canadá", u: "https://en.wikipedia.org/wiki/Jeffrey_Delisle", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2015", n: "Cameron Ortis", h: "El director de inteligencia de la RCMP", x: "Pasó información secreta a personas investigadas por lavado de dinero.", cargo: "Director de Inteligencia de la RCMP", hacia: "Personas investigadas por la policía", fin: "Condenado a 14 años en 2024.", who: "Justicia de Canadá", u: "https://en.wikipedia.org/wiki/Cameron_Ortis", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 1, d: "2022–2023", h: "Los informes sobre injerencia china", x: "Funcionarios filtraron a la prensa informes del CSIS sobre injerencia china en elecciones.", obj: "Presionar al gobierno para que actuara, según el propio filtrador anónimo.", who: "The Globe and Mail y Global News", u: "https://en.wikipedia.org/wiki/Chinese_government_interference_in_Canada", st: "Wikipedia (síntesis de fuentes)" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2006–2016", h: "Los metadatos ante el juez", x: "El CSIS no informó al Tribunal Federal que retenía datos de personas no investigadas.", obj: "Mantener una base de datos sin control.", aquien: "El Tribunal Federal", como: "Un informe del órgano de revisión de entonces.", who: "Tribunal Federal de Canadá", u: "https://en.wikipedia.org/wiki/Canadian_Security_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La contrainteligencia detectó a un oficial naval y a un jefe policial que vendían secretos.", u: "https://en.wikipedia.org/wiki/Jeffrey_Delisle", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "La policía de seguridad de la RCMP vigiló al Partido Quebequés en la década de 1970, según la comisión McDonald.", u: "https://en.wikipedia.org/wiki/McDonald_Commission", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    activistas: { ev: 1, x: "El CSIS vigiló a opositores de oleoductos en reuniones públicas, según su órgano de revisión.", u: "https://en.wikipedia.org/wiki/Canadian_Security_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "China, Rusia, India e Irán son los principales blancos de la contrainteligencia, según el CSIS.", u: "https://openparliament.ca/committees/house-affairs/45-1/20/", st: "Comité de la Cámara de los Comunes" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 1, x: "Información falsa de la RCMP llevó a la tortura de Maher Arar en Siria.", u: "https://en.wikipedia.org/wiki/Maher_Arar", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 1, x: "El CSIS investiga amenazas contra comunidades sij, china e iraní en Canadá.", u: "https://www.thebureau.news/p/ten-per-cent-of-csis-terror-investigations", st: "The Bureau" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas." },
    inteligencia: { ev: 1, x: "Comparte inteligencia de señales con los Cinco Ojos desde 1946.", u: "https://en.wikipedia.org/wiki/Communications_Security_Establishment", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 1, x: "Entrenó a fuerzas de seguridad de Ucrania desde 2015 en la misión Unifier.", u: "https://en.wikipedia.org/wiki/Operation_Unifier", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "Los presupuestos del CSIS y el CSE se publican en los planes de gasto del gobierno. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Personal, interceptación, ciberdefensa y contraespionaje.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2007", h: "La indemnización a Arar", x: "El gobierno pidió disculpas y pagó a Maher Arar por el papel de la RCMP en su tortura.", monto: "10,5 millones de dólares canadienses", obj: "Reparar el daño.", who: "Gobierno de Canadá", u: "https://en.wikipedia.org/wiki/Maher_Arar", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "BlackBerry", c: "nacional", rubro: "Ciberseguridad", rel: "Socio", x: "Empresa canadiense de ciberseguridad que trabaja con el gobierno." }
  ],
  struggles: [
    { a: "CSIS", b: "RCMP", k: "Entre agencias", stake: "La versión sobre la injerencia india", state: "Abierta", x: "La prensa canadiense describió narrativas distintas de las dos agencias sobre India." },
    { a: "Gobierno", b: "Oposición conservadora", k: "Con la política", stake: "La respuesta a la injerencia china", state: "Latente", x: "La oposición acusó a los liberales de demorar el registro de agentes extranjeros." }
  ],
  sources: [
    { t: "CP24: el registro de influencia extranjera (2026)", u: "https://www.cp24.com/news/canada/2026/07/03/long-delayed-foreign-influence-registry-coming-in-august/" },
    { t: "Comité de la Cámara de los Comunes: injerencia extranjera (2026)", u: "https://openparliament.ca/committees/house-affairs/45-1/20/" },
    { t: "CBC: Daniel Rogers, nuevo director del CSIS", u: "https://www.cbc.ca/lite/story/1.7353008" },
    { t: "ThePrint: la RCMP y el caso Nijjar (2026)", u: "https://theprint.in/diplomacy/no-evidence-linking-indian-govt-to-killing-of-nijjar-says-rcmp-3-years-after-trudeau-accusations/2980674/" },
    { t: "Wikipedia: Canadian Security Intelligence Service", u: "https://en.wikipedia.org/wiki/Canadian_Security_Intelligence_Service" }
  ]
};
