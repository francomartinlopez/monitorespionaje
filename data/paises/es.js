// Ficha de España · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["es"] = {
  id: "es",
  updated: "2026-11-15",
  summary: [
    "El Centro Nacional de Inteligencia (CNI) es el único servicio de inteligencia civil de España y depende del Ministerio de Defensa. Lo dirige desde 2022 Esperanza Casteleiro, que reemplazó a Paz Esteban tras el escándalo de espionaje a dirigentes independentistas catalanes. Lo acompañan el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) y el Centro de Inteligencia contra el Terrorismo y el Crimen Organizado (CITCO), del Ministerio del Interior.",
    "Sus prioridades son el norte de África, el Sahel, el terrorismo yihadista y la injerencia rusa. Marruecos es un vecino clave y difícil: en 2021 el teléfono del presidente Pedro Sánchez fue infectado con Pegasus, en plena crisis migratoria en Ceuta. La Audiencia Nacional archivó la causa en enero de 2026 por falta de cooperación de Israel.",
    "Hacia adentro, el CNI reconoció ante jueces que espió con Pegasus, con autorización del Tribunal Supremo, a varios dirigentes independentistas. Citizen Lab identificó más de 60 personas del entorno independentista infectadas. En paralelo, la Audiencia Nacional juzgó en 2026 la operación Kitchen, en la que la cúpula policial del gobierno del Partido Popular espió a su ex tesorero con fondos reservados."
  ],
  keyFacts: [
    { l: "Directora del CNI", v: "Esperanza Casteleiro", n: "desde mayo de 2022" },
    { l: "Teléfono del presidente", v: "Infectado con Pegasus", n: "mayo y junio de 2021; causa archivada en 2026" },
    { l: "Catalangate", v: "Más de 60 víctimas", n: "según Citizen Lab (2022)" },
    { l: "Caso Kitchen", v: "Visto para sentencia", n: "julio de 2026; la fiscalía pide 15 años para el ex ministro" }
  ],
  power: { humana: 3, senales: 3, ciber: 3, imagenes: 3, encubierta: 2, contra: 3 },
  powerWhy: {
    humana: "Redes de fuentes en el Magreb, el Sahel y América Latina; buena penetración en el yihadismo.",
    senales: "Capacidad de interceptación nacional y acceso a cooperación europea y de la OTAN.",
    ciber: "El Centro Criptológico Nacional protege al Estado; compró Pegasus para uso interno.",
    imagenes: "Satélites militares propios de observación y acceso a los satélites europeos.",
    encubierta: "Operaciones encubiertas recientes poco documentadas; el antecedente principal es la guerra sucia de los GAL.",
    contra: "Detectó redes rusas, pero no evitó que se infectara el teléfono del presidente."
  },
  priorities: [
    { h: "Magreb y Sahel", x: "Marruecos, Argelia, migración y yihadismo." },
    { h: "Terrorismo", x: "Prevenir atentados yihadistas como los de 2004 y 2017." },
    { h: "Rusia", x: "Injerencia, desinformación y operaciones en Europa." },
    { h: "América Latina", x: "Seguridad de españoles y empresas en la región." },
    { h: "Ciberseguridad", x: "Protección del Estado frente a programas espía y ataques." }
  ],
  focos: ["Marruecos", "Argelia", "Sahel", "Rusia", "Cataluña"],
  bodies: {
    "CDGAI": { since: 2002, how: "Comisión Delegada del Gobierno para Asuntos de Inteligencia, presidida por la vicepresidencia, que fija los objetivos anuales del CNI.", staff: "Ministros y secretarios de Estado.", budget: "No aplica.", tech: [], where: ["Madrid"] },
    "CNI": { since: 2002, how: "Centro Nacional de Inteligencia, heredero del CESID: inteligencia exterior e interior y contrainteligencia. Puede intervenir comunicaciones con autorización de un magistrado del Tribunal Supremo.", staff: "Unas 3.500 personas, según estimaciones de prensa.", budget: "Público en lo general; gastos reservados sin detalle.", tech: ["Interceptación", "Centro Criptológico Nacional", "Pegasus"], where: ["Madrid", "Embajadas"] },
    "CIFAS": { since: 2005, how: "Centro de Inteligencia de las Fuerzas Armadas, a cargo de la inteligencia militar en misiones en el exterior.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Satélites militares"], where: ["Madrid"] },
    "CITCO": { since: 2014, how: "Centro de Inteligencia contra el Terrorismo y el Crimen Organizado del Ministerio del Interior, que coordina a la Policía y la Guardia Civil.", staff: "No se publica.", budget: "Dentro de Interior.", tech: [], where: ["Madrid"] },
    "Comisión": { since: 1995, how: "Comisión del Congreso que controla los gastos reservados y recibe información secreta del CNI.", staff: "Diputados de varios grupos.", budget: "No aplica.", tech: [], where: ["Madrid"] }
  },
  civil: [
    "El CNI depende de la ministra de Defensa, hoy Margarita Robles.",
    "Un magistrado del Tribunal Supremo autoriza previamente las escuchas y entradas del CNI.",
    "El gobierno puede desclasificar documentos para que la directora declare ante jueces, como hizo en 2025 y 2026."
  ],
  law: {
    domestic: [
      "La Ley 11/2002 regula el CNI y la Ley Orgánica 2/2002 su control judicial previo.",
      "La Ley de Secretos Oficiales de 1968 sigue vigente; el gobierno impulsa reemplazarla.",
      "La Ley de Seguridad Nacional de 2015 coordina a los organismos ante crisis."
    ],
    foreign: [
      "El CNI opera en el exterior sin normas públicas detalladas sobre operaciones."
    ],
    oversight: [
      "Magistrado del Tribunal Supremo que autoriza medidas intrusivas.",
      "Comisión de gastos reservados del Congreso.",
      "Tribunales ordinarios, que investigan el uso de Pegasus contra independentistas."
    ]
  },
  rights: [
    { d: "1977", dir: "recorta", area: "Debido proceso", h: "Fin de la policía política franquista", x: "Se disuelve la Brigada Político-Social en la transición." },
    { d: "2002-05", dir: "recorta", area: "Privacidad", h: "Control judicial del CNI", x: "Un magistrado del Supremo debe autorizar escuchas y entradas." },
    { d: "2015-10", dir: "amplia", area: "Privacidad", h: "Reforma de la ley procesal", x: "Regula el uso de programas espía por la policía con orden judicial." },
    { d: "2022-05", dir: "recorta", area: "Privacidad", h: "Destitución de la directora del CNI", x: "Tras el Catalangate el gobierno releva a Paz Esteban." }
  ],
  events: [
    { d: "1983-10", lat: 43.42, lon: -1.3, c: "France", t: "encubierta", ev: 1, h: "Primeros secuestros de los GAL", x: "Grupos parapoliciales financiados con fondos reservados secuestran y matan a presuntos miembros de ETA en Francia.", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2013-07", lat: 40.42, lon: -3.7, c: "Spain", t: "humana", ev: 1, h: "Operación Kitchen", x: "Policías espían al ex tesorero del PP para quitarle pruebas; la Audiencia Nacional los juzgó en 2026.", u: "https://www.moncloa.com/2026/08/02/juicio-operacion-kitchen-visto-para-sentencia-3409515/", st: "Moncloa.com" },
    { d: "2017-08-17", lat: 41.38, lon: 2.17, c: "Spain", t: "contra", ev: 2, h: "Atentados de Barcelona", x: "Una célula yihadista ataca la Rambla; su líder, el imán de Ripoll, había sido informante del CNI.", u: "https://en.wikipedia.org/wiki/2017_Barcelona_attacks", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2021-05", lat: 40.45, lon: -3.75, c: "Spain", t: "ciber", ev: 1, h: "Pegasus en el teléfono del presidente", x: "Infectan el teléfono de Pedro Sánchez en plena crisis migratoria en Ceuta; la causa se archivó en 2026.", u: "https://es.ara.cat/politica/justicia-no-investigara-espionaje-pedro-sanchez-pegasus-obstruccion-israel_1_5625719.amp.html", st: "Ara" },
    { d: "2024-02-13", lat: 38.52, lon: -0.3, c: "Spain", t: "encubierta", ev: 3, h: "Asesinato de Maksim Kuzmínov", x: "Matan a tiros en Villajoyosa al piloto ruso que desertó a Ucrania con su helicóptero; la prensa citó fuentes de inteligencia que apuntan a Rusia.", u: "https://en.wikipedia.org/wiki/Maxim_Kuzminov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Morocco": 3, "Algeria": 3, "Mali": 2, "Mauritania": 2, "Russia": 2, "W. Sahara": 2, "Venezuela": 1, "Libya": 1, "France": 1, "Niger": 1
  },
  timeline: [
    { era: "Franquismo", d: "1972", h: "SECED", x: "El servicio de Carrero Blanco vigila a la oposición." },
    { era: "Transición", d: "1977", h: "Nace el CESID", x: "Servicio militar que hereda la inteligencia del franquismo." },
    { era: "", d: "1983–1987", h: "GAL", x: "Guerra sucia contra ETA con fondos reservados." },
    { era: "", d: "1995", h: "Escuchas del CESID", x: "Se revela que el servicio grabó conversaciones de políticos, empresarios y el rey." },
    { era: "Democracia", d: "2002", h: "Nace el CNI", x: "Servicio civil con control judicial previo." },
    { era: "", d: "2022", h: "Catalangate", x: "Citizen Lab revela el espionaje a independentistas; cae la directora." },
    { era: "Actual", d: "2026", h: "Juicio Kitchen y Pegasus", x: "Juicio a la ex cúpula de Interior y archivo de la causa por el teléfono del presidente.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: false, d: "2017–2020", h: "El espionaje a independentistas", x: "La directora del CNI reconoció ante jueces que el centro espió con Pegasus, con autorización del Tribunal Supremo, a dirigentes como Pere Aragonès, Jordi Sànchez y ex diputados de la CUP. Citizen Lab identificó más infecciones, que el CNI no reconoce. Jueces de Barcelona investigan a la ex directora Paz Esteban.", who: "CNI ante tribunales y Citizen Lab", missing: "", u: "https://en.ara.cat/politics/the-cni-admits-that-it-spied-carles-riera-and-david-fernandez-with-pegasus_1_5797167.html", st: "Ara" },
    { ev: 1, ilegal: true, d: "1983–1987", h: "Los GAL", x: "Grupos armados financiados con fondos reservados del Ministerio del Interior mataron a 27 personas, varias sin relación con ETA. Un ex ministro del Interior y un secretario de Estado fueron condenados en 1998.", who: "Tribunal Supremo", missing: "", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2013–2015", h: "La operación Kitchen", x: "La fiscalía acusa al ex ministro del Interior Jorge Fernández Díaz y a su número dos de montar una operación policial con fondos reservados para robar pruebas al ex tesorero del PP. Pidió 15 años de cárcel; los acusados lo niegan. El juicio quedó visto para sentencia en julio de 2026.", who: "Fiscalía Anticorrupción", missing: "La sentencia.", u: "https://www.moncloa.com/2026/08/02/juicio-operacion-kitchen-visto-para-sentencia-3409515/", st: "Moncloa.com" },
    { ev: 3, ilegal: true, d: "2021", h: "Quién espió a Pedro Sánchez", x: "Varios medios atribuyeron la infección del teléfono del presidente y de tres ministros a Marruecos, cliente de Pegasus, por el contexto de la crisis de Ceuta. Marruecos lo niega y la justicia no pudo determinarlo.", who: "Medios españoles", missing: "Datos de NSO o de Israel, que no cooperó.", u: "https://www.escudodigital.com/ciberseguridad/espana-archiva-de-nuevo-la-investigacion-sobre-pegasus-por-la-falta-de-cooperacion-de-israel.html", st: "Escudo Digital" }
  ],
  failures: [
    { k: "falla", d: "2017-08", ev: 2, w: 2, h: "El imán de Ripoll", x: "El organizador de los atentados de Barcelona había sido informante del CNI.", why: "El contacto está reconocido; se discute qué sabía el CNI y si pudo prevenirlo.", wx: "Información oficial parcial y comisiones parlamentarias.", who: "Prensa y Parlamento", u: "https://en.wikipedia.org/wiki/2017_Barcelona_attacks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2004-03", ev: 1, w: 3, h: "Los atentados del 11-M", x: "Una célula yihadista con confidentes policiales en su entorno mató a 193 personas en trenes de Madrid; el gobierno culpó al principio a ETA.", why: "No está en duda la autoría yihadista; la atribución inicial a ETA fue errónea.", wx: "Sentencia de la Audiencia Nacional de 2007.", who: "Audiencia Nacional", u: "https://en.wikipedia.org/wiki/2004_Madrid_train_bombings", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "El CNI tiene oficiales en embajadas, con despliegue amplio en el Magreb, el Sahel y América Latina.",
    campo: "Fuentes humanas dentro del yihadismo; agentes en zonas de conflicto donde hay tropas españolas.",
    oficina: "La sede de Madrid produce informes para la Comisión Delegada; la directora informa al Congreso en sesiones secretas.",
    reclutamiento: "Concursos públicos y personal militar y policial en comisión.",
    tecnica: "Interceptación con autorización del Supremo, programas espía y el Centro Criptológico Nacional.",
    enlaces: "Cooperación con la CIA, la DGSE francesa y servicios del Magreb, sobre todo en terrorismo."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "1995", n: "Juan Alberto Perote", h: "El coronel de las escuchas", x: "Sacó documentos del CESID que revelaron escuchas a políticos, empresarios y al rey, y datos sobre los GAL.", cargo: "Jefe de operaciones del CESID", hacia: "El banquero Mario Conde y la prensa", fin: "Condenado por revelación de secretos.", who: "Justicia de España", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2004–2007", n: "Roberto Flórez", h: "El agente que vendió secretos a Rusia", x: "Ex agente del CNI que ofreció a la inteligencia rusa información sobre agentes españoles.", cargo: "Agente del CNI", hacia: "Servicio de Inteligencia Exterior ruso (SVR)", fin: "Condenado a 12 años en 2010.", who: "Audiencia Provincial de Madrid", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 1, d: "1995", h: "Las escuchas del CESID", x: "Documentos sacados por un coronel revelan años de grabaciones ilegales a personalidades.", obj: "Presionar al gobierno, según la justicia.", who: "Justicia de España", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2022–2026", h: "Los secretos del Catalangate", x: "El gobierno solo desclasificó parte de los documentos y limitó lo que la directora podía declarar ante los jueces.", obj: "Proteger fuentes y métodos, según el gobierno.", aquien: "Los jueces de Barcelona y las víctimas", como: "Pedidos judiciales y desclasificaciones parciales.", who: "elDiario.es", u: "https://www.eldiario.es/catalunya/gobierno-limita-investigaciones-espionaje-cni-independentistas-vetar-datos-clave_1_13380210.html", st: "elDiario.es" }
  ],
  practicas: {
    propios: { ev: 1, x: "En la década de 1990 el CESID grabó conversaciones de ministros y del propio rey.", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "El CNI reconoció haber espiado con Pegasus a dirigentes independentistas, con autorización del Supremo.", u: "https://en.ara.cat/politics/the-cni-admits-that-it-spied-carles-riera-and-david-fernandez-with-pegasus_1_5797167.html", st: "Ara" },
    periodistas: { ev: 2, x: "Citizen Lab detectó infecciones de periodistas del entorno independentista; el CNI no las reconoció.", u: "https://www.eldebate.com/espana/20251218/directora-cni-desmiente-investigara-abogado-junqueras_366902.html", st: "El Debate" },
    activistas: { ev: 1, x: "Los ex presidentes de la Asamblea Nacional Catalana fueron espiados con autorización judicial, según la directora del CNI.", u: "https://en.ara.cat/politics/the-director-of-the-cni-confirms-that-the-supreme-court-authorized-spying-former-anc-presidents-jordi-sanchez-and-elisenda-paluzie_1_5579583.html", st: "Ara" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Rusia y el yihadismo son blancos centrales de la contrainteligencia; un ex agente vendió secretos a Rusia.", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "Los GAL mataron a 27 personas en la década de 1980 con fondos del Estado.", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró sabotajes documentados." },
    tortura: { ev: 1, x: "Los GAL torturaron a detenidos, como en el caso de Lasa y Zabala.", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Los GAL secuestraron a Segundo Marey en Francia en 1983 por error.", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 2, x: "El imán de Ripoll había sido informante del CNI antes de los atentados de 2017.", u: "https://en.wikipedia.org/wiki/2017_Barcelona_attacks", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas." },
    inteligencia: { ev: 1, x: "Coopera con Marruecos y Francia contra el terrorismo y con la OTAN.", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del CNI figura en los Presupuestos Generales del Estado; los gastos reservados no se detallan. Esta ficha no encontró la cifra de 2026 verificada.",
    uso: "Personal, técnica, operaciones en el exterior y pagos a fuentes.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Los GAL contrataron a mercenarios y delincuentes comunes en la década de 1980.",
    cobertura: "Los fondos reservados del Ministerio del Interior financiaron los GAL y, según la fiscalía, la operación Kitchen."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 1, d: "1983–1994", h: "Fondos reservados para los GAL", x: "Altos cargos de Interior usaron fondos reservados para pagar a los GAL y luego para enriquecerse.", obj: "Financiar la guerra sucia y lucro personal.", who: "Tribunal Supremo", u: "https://en.wikipedia.org/wiki/Grupos_Antiterroristas_de_Liberaci%C3%B3n", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desvio", rol: "autor", ev: 2, d: "2013–2015", h: "Fondos reservados para Kitchen", x: "La fiscalía sostiene que se pagó al chofer del ex tesorero del PP con fondos reservados para que robara documentos.", obj: "Proteger al partido de gobierno.", who: "Fiscalía Anticorrupción", u: "https://www.elsaltodiario.com/corrupcion/desvio-fondos-reservados-guerra-sucia-pp-policia-patriotica-fernandez-diaz", st: "El Salto" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "El CNI usó Pegasus contra independentistas; el teléfono del presidente fue infectado con el mismo programa." }
  ],
  struggles: [
    { a: "Gobierno de Sánchez", b: "Partidos independentistas", k: "Con la política", stake: "El Catalangate", state: "Latente", x: "Los socios catalanes del gobierno exigen la verdad sobre el espionaje." },
    { a: "PSOE", b: "Partido Popular", k: "Con la política", stake: "La operación Kitchen", state: "Abierta", x: "El juicio expuso el uso político de la policía por el gobierno anterior." }
  ],
  sources: [
    { t: "Ara: el CNI reconoce el espionaje a ex diputados de la CUP (2026)", u: "https://en.ara.cat/politics/the-cni-admits-that-it-spied-carles-riera-and-david-fernandez-with-pegasus_1_5797167.html" },
    { t: "Ara: se archiva la causa por el teléfono de Sánchez (2026)", u: "https://es.ara.cat/politica/justicia-no-investigara-espionaje-pedro-sanchez-pegasus-obstruccion-israel_1_5625719.amp.html" },
    { t: "Moncloa.com: el juicio Kitchen, visto para sentencia", u: "https://www.moncloa.com/2026/08/02/juicio-operacion-kitchen-visto-para-sentencia-3409515/" },
    { t: "elDiario.es: el gobierno limita la investigación del Catalangate", u: "https://www.eldiario.es/catalunya/gobierno-limita-investigaciones-espionaje-cni-independentistas-vetar-datos-clave_1_13380210.html" },
    { t: "Wikipedia: Spanish National Intelligence Centre", u: "https://en.wikipedia.org/wiki/Spanish_National_Intelligence_Centre" }
  ]
};
