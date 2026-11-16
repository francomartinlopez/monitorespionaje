// Ficha de Hungría · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["hu"] = {
  id: "hu",
  updated: "2026-11-15",
  summary: [
    "Hungría tiene cinco servicios. La Oficina de Información (IH) hace inteligencia exterior y la Oficina de Protección de la Constitución (AH), contraespionaje. Completan el sistema el Servicio Especial de Seguridad Nacional (NBSZ), que hace las escuchas para todos; el Servicio de Seguridad Nacional Militar (KNBSZ); y el centro antiterrorista TIBEK. Durante los 16 años de Viktor Orbán quedaron bajo control directo del gobierno.",
    "Bajo Orbán los servicios fueron acusados de espiar a periodistas con Pegasus y de intentar reclutar a funcionarios de las instituciones europeas en Bruselas. En 2023 el gobierno creó una Oficina de Protección de la Soberanía que investigaba a medios y ONG con fondos extranjeros. En 2025 Ucrania dijo haber desarmado una red de la inteligencia militar húngara en Transcarpatia.",
    "El 12 de abril de 2026 el partido Tisza de Péter Magyar ganó las elecciones con mayoría de dos tercios. En junio el Parlamento disolvió la Oficina de Protección de la Soberanía, y el nuevo gobierno prometió revisar el uso político de los servicios."
  ],
  keyFacts: [
    { l: "Primer ministro", v: "Péter Magyar", n: "desde mayo de 2026, tras ganar con dos tercios" },
    { l: "Oficina de Protección de la Soberanía", v: "Disuelta", n: "voto del Parlamento, junio de 2026" },
    { l: "Pegasus", v: "Unos 300 blancos posibles", n: "según el Proyecto Pegasus (2021)" },
    { l: "Red en Ucrania", v: "Mayo de 2025", n: "Ucrania denunció espías militares húngaros" }
  ],
  power: { humana: 2, senales: 3, ciber: 2, imagenes: 1, encubierta: 2, contra: 2 },
  powerWhy: {
    humana: "Redes en los países vecinos con minorías húngaras y en Bruselas, según investigaciones periodísticas.",
    senales: "El NBSZ concentra las escuchas de todo el Estado y compró Pegasus.",
    ciber: "La Cancillería sufrió una intrusión rusa prolongada, según la prensa.",
    imagenes: "Sin capacidades propias relevantes.",
    encubierta: "Operaciones en Ucrania y en las instituciones europeas, según acusaciones.",
    contra: "Durante años el gobierno priorizó vigilar a opositores y ONG sobre el espionaje ruso, según sus críticos."
  },
  priorities: [
    { h: "Reforma", x: "Revisar el uso político de los servicios bajo el gobierno anterior." },
    { h: "Rusia", x: "Espionaje ruso y su influencia en la política húngara." },
    { h: "Ucrania", x: "La minoría húngara en Transcarpatia y la relación con Kiev." },
    { h: "Migración", x: "La frontera sur con Serbia." },
    { h: "Unión Europea", x: "Recuperar la confianza de los socios europeos." }
  ],
  focos: ["Ucrania", "Rusia", "Unión Europea", "Serbia", "Rumania"],
  bodies: {
    "TIBEK": { since: 2016, how: "Centro de Información y Análisis contra el Terrorismo: reúne información de todos los servicios y hace análisis.", staff: "No se publica.", budget: "Dentro del Interior.", tech: [], where: ["Budapest"] },
    "IH": { since: 1990, how: "Oficina de Información: inteligencia exterior civil. Bajo Orbán pasó a depender de la Cancillería.", staff: "No se publica.", budget: "Secreto en parte.", tech: [], where: ["Budapest", "Embajadas"] },
    "KNBSZ": { since: 2012, how: "Servicio de Seguridad Nacional Militar: inteligencia y contrainteligencia militar.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Budapest"] },
    "AH": { since: 1990, how: "Oficina de Protección de la Constitución: contraespionaje y protección del orden constitucional.", staff: "No se publica.", budget: "Dentro del Interior.", tech: [], where: ["Budapest"] },
    "NBSZ": { since: 1996, how: "Servicio Especial de Seguridad Nacional: hace las escuchas y la vigilancia técnica para todos los organismos. Compró y usó Pegasus.", staff: "No se publica.", budget: "Dentro del Interior.", tech: ["Pegasus", "Interceptación"], where: ["Budapest"] }
  },
  civil: [
    "Las escuchas de seguridad nacional las autoriza el ministro de Justicia, no un juez.",
    "Bajo Orbán, los servicios dependían de ministros de su confianza y el control parlamentario era débil.",
    "El gobierno de Magyar prometió revisar la vigilancia de opositores y periodistas."
  ],
  law: {
    domestic: [
      "La ley de seguridad nacional de 1995 permite escuchas con autorización del ministro de Justicia.",
      "La ley de defensa de la soberanía de 2023 creó una oficina para investigar la financiación extranjera; fue derogada en 2026.",
      "El Tribunal Europeo de Derechos Humanos falló en 2016 que la vigilancia húngara no tenía suficientes garantías."
    ],
    foreign: [
      "La IH opera en el exterior bajo la Cancillería."
    ],
    oversight: [
      "Comisión de Seguridad Nacional del Parlamento.",
      "Autoridad de protección de datos, que investigó el uso de Pegasus."
    ]
  },
  rights: [
    { d: "1990", dir: "recorta", area: "Debido proceso", h: "Fin de la policía política", x: "Se disuelve el departamento III/III de vigilancia interna del régimen comunista." },
    { d: "2016-01", dir: "recorta", area: "Privacidad", h: "Fallo Szabó y Vissy", x: "El Tribunal Europeo de Derechos Humanos condena a Hungría por vigilancia sin control judicial." },
    { d: "2023-12", dir: "amplia", area: "Expresión", h: "Oficina de Protección de la Soberanía", x: "Investiga a medios y ONG con fondos extranjeros." },
    { d: "2026-06", dir: "recorta", area: "Expresión", h: "Se disuelve la oficina", x: "El nuevo Parlamento la cierra por considerarla un instrumento político." }
  ],
  events: [
    { d: "2017", lat: 50.84, lon: 4.38, c: "Belgium", t: "humana", ev: 2, h: "Reclutamiento en Bruselas", x: "Se derrumba la red de la IH en Bruselas tras los intentos de reclutar a funcionarios europeos, según una investigación de medios publicada en 2025.", u: "https://insighthungary.444.hu/2025/10/10/european-commission-launches-investigation-into-hungarian-spy-network", st: "Insight Hungary (444)" },
    { d: "2019-04", lat: 47.5, lon: 19.05, c: "Hungary", t: "ciber", ev: 2, h: "Pegasus contra periodistas", x: "El teléfono del periodista Szabolcs Panyi es infectado con Pegasus; Amnistía lo confirmó y la prensa lo atribuyó al gobierno.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-05", lat: 48.62, lon: 22.3, c: "Ukraine", t: "humana", ev: 2, h: "Red húngara en Transcarpatia", x: "El servicio de seguridad ucraniano dice haber detenido a dos agentes de la inteligencia militar húngara; Budapest y Kiev expulsaron diplomáticos.", u: "https://en.wikipedia.org/wiki/Hungary%E2%80%93Ukraine_relations", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Ukraine": 3, "Romania": 2, "Serbia": 2, "Slovakia": 2, "Russia": 2, "Belgium": 2, "China": 1, "Austria": 1
  },
  timeline: [
    { era: "Comunismo", d: "1945–1990", h: "La policía política", x: "La ÁVH y luego el III/III vigilan y reprimen a la población." },
    { era: "Democracia", d: "1990", h: "Nuevos servicios", x: "Se crean la IH y el servicio de protección constitucional." },
    { era: "Orbán", d: "2010–2026", h: "Control político", x: "Los servicios pasan a manos de ministros de confianza." },
    { era: "", d: "2021", h: "Pegasus", x: "Se revela la vigilancia de periodistas y empresarios." },
    { era: "Actual", d: "2026", h: "Cambio de gobierno", x: "Gana Tisza y se disuelve la Oficina de Protección de la Soberanía.", now: true }
  ],
  cases: [
    { ev: 2, ilegal: true, d: "2018–2021", h: "Pegasus en Hungría", x: "El Proyecto Pegasus identificó unos 300 números húngaros como posibles blancos, entre ellos periodistas y abogados. Un funcionario de gobierno admitió en 2021 que el Ministerio del Interior había comprado el programa. La autoridad de datos concluyó que el uso fue legal, lo que los afectados rechazan.", who: "Proyecto Pegasus, Amnistía y gobierno húngaro", missing: "Una investigación independiente sobre cada blanco.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2015–2017", h: "Espionaje en las instituciones europeas", x: "Una investigación de Direkt36, Der Spiegel y De Tijd publicada en 2025 informó que oficiales de la IH con cobertura diplomática intentaron reclutar a húngaros que trabajaban en la Comisión Europea, con ofertas de dinero y carrera. La red se derrumbó en 2017. La Comisión abrió una investigación interna.", who: "Direkt36, Der Spiegel y De Tijd", missing: "Las conclusiones de la investigación de la Comisión.", u: "https://insighthungary.444.hu/2025/10/10/european-commission-launches-investigation-into-hungarian-spy-network", st: "Insight Hungary (444)" }
  ],
  failures: [
    { k: "falla", d: "2021–2022", ev: 2, w: 2, h: "El hackeo ruso a la Cancillería", x: "Hackers rusos accedieron durante años a la red de la Cancillería, según la prensa; el gobierno no lo informó.", why: "Lo reveló la prensa con fuentes internas; el gobierno de entonces no lo confirmó del todo.", wx: "Investigación del medio Direkt36.", who: "Direkt36", u: "https://europrospects.eu/the-weak-link-hungarys-espionage-and-the-risk-to-europe-and-nato/", st: "EuroProspects" }
  ],
  modus: {
    embajadas: "Oficiales de la IH con cobertura diplomática, incluida la representación ante la UE, según la prensa.",
    campo: "Fuentes en los países vecinos con minorías húngaras; Ucrania denunció una red en Transcarpatia.",
    oficina: "Bajo Orbán los servicios informaban a ministros de confianza; el nuevo gobierno los reorganiza.",
    reclutamiento: "Personal militar y policial y concursos internos.",
    tecnica: "El NBSZ centraliza escuchas y vigilancia técnica, incluido Pegasus.",
    enlaces: "OTAN y servicios europeos; la confianza de los aliados cayó en los últimos años de Orbán."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 2, d: "2015–2017", n: "Agente \"V.\"", h: "El jefe de la red de Bruselas", x: "Oficial de la IH con cobertura de diplomático que intentó reclutar a empleados de la Comisión Europea con ofertas de dinero.", cargo: "Diplomático en la representación húngara ante la UE", hacia: "Oficina de Información (IH)", fin: "Expuesto en 2017; la red se desarmó.", who: "Direkt36, Der Spiegel y De Tijd", u: "https://insighthungary.444.hu/2025/10/10/european-commission-launches-investigation-into-hungarian-spy-network", st: "Insight Hungary (444)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 2, d: "2021–2022", h: "La intrusión rusa", x: "El gobierno no informó al Parlamento la intrusión rusa en la Cancillería, según la prensa.", obj: "Evitar costos políticos.", aquien: "El Parlamento y los aliados", como: "Investigación periodística.", who: "Direkt36", u: "https://europrospects.eu/the-weak-link-hungarys-espionage-and-the-risk-to-europe-and-nato/", st: "EuroProspects" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 2, x: "Entre los posibles blancos de Pegasus había políticos y allegados de la oposición, según el Proyecto Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Periodistas de investigación fueron infectados con Pegasus, según Amnistía.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "La Oficina de Protección de la Soberanía investigó a ONG con fondos extranjeros.", u: "https://telex.hu/english/2026/06/30/hungarian-parliament-votes-to-abolish-sovereignty-protection-office", st: "Telex" },
    aliados: { ev: 2, x: "Intentó reclutar a funcionarios de la Comisión Europea, según una investigación periodística.", u: "https://insighthungary.444.hu/2025/10/10/european-commission-launches-investigation-into-hungarian-spy-network", st: "Insight Hungary (444)" },
    rivales: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas de los servicios." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 2, x: "Financió organizaciones de la minoría húngara en países vecinos, una política pública que Ucrania y Rumania vieron como injerencia.", u: "https://en.wikipedia.org/wiki/Hungary%E2%80%93Ukraine_relations", st: "Wikipedia (síntesis de fuentes)" },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 2, x: "Ucrania acusó a la inteligencia militar húngara de reclutar en la minoría húngara de Transcarpatia.", u: "https://en.wikipedia.org/wiki/Hungary%E2%80%93Ukraine_relations", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 2, x: "Empresarios figuraban entre los posibles blancos de Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos de los servicios figuran en la ley de presupuesto con poco detalle. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Personal, escuchas y operaciones regionales.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2017", h: "La compra de Pegasus", x: "Un alto funcionario de Fidesz admitió en 2021 que el Ministerio del Interior compró Pegasus.", obj: "Vigilancia de comunicaciones.", who: "Gobierno de Hungría", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Vendió Pegasus al Estado húngaro." }
  ],
  struggles: [
    { a: "Gobierno de Magyar", b: "Fidesz", k: "Con la política", stake: "El control de los servicios y la revisión del pasado", state: "Abierta", x: "El nuevo gobierno desmantela instituciones de Orbán y revisa la vigilancia política." }
  ],
  sources: [
    { t: "Telex: el Parlamento disuelve la Oficina de Protección de la Soberanía (2026)", u: "https://telex.hu/english/2026/06/30/hungarian-parliament-votes-to-abolish-sovereignty-protection-office" },
    { t: "Euronews: cómo Magyar desmontó el régimen de Orbán", u: "https://www.euronews.com/my-europe/2026/08/03/built-to-last-gone-in-months-how-peter-magyar-dismantled-viktor-orbans-regime" },
    { t: "CIVICUS: la nueva oportunidad democrática de Hungría", u: "https://lens.civicus.org/hungarys-new-opportunity-for-democracy/" },
    { t: "Wikipedia: Pegasus (spyware)", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)" }
  ]
};
