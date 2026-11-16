// Ficha de Italia · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["it"] = {
  id: "it",
  updated: "2026-11-15",
  summary: [
    "El sistema italiano tiene dos agencias: la Agencia de Información y Seguridad Exterior (AISE), dirigida por Giovanni Caravelli, y la Agencia de Información y Seguridad Interior (AISI), dirigida por Bruno Valensise. Las coordina el Departamento de Información para la Seguridad (DIS), que encabeza desde enero de 2025 el prefecto Vittorio Rizzi, bajo la autoridad delegada del subsecretario Alfredo Mantovano.",
    "La AISE tiene peso propio en el Mediterráneo: maneja la relación con Libia, los flujos migratorios y la liberación de rehenes, como la de la periodista Cecilia Sala en Irán en enero de 2025. La contrainteligencia enfrenta el espionaje ruso; en 2023 un capitán de la Marina fue condenado por vender documentos a un agregado ruso.",
    "La historia de los servicios está marcada por desvíos: en las décadas de 1970 y 1980 oficiales del servicio militar desviaron investigaciones de atentados como el de la estación de Bolonia. En 2025 se supo que la AISE y la AISI usaban el programa espía Graphite de la empresa israelí Paragon; el comité parlamentario reconoció su uso contra activistas de una ONG de rescate de migrantes."
  ],
  keyFacts: [
    { l: "Director del DIS", v: "Vittorio Rizzi", n: "desde enero de 2025" },
    { l: "Contratos con Paragon", v: "Unos 2 millones de euros", n: "AISE y AISI, rescindidos en 2025, según la prensa" },
    { l: "Condena por espionaje ruso", v: "Walter Biot", n: "capitán de fragata, condenado en 2023" },
    { l: "Centenario", v: "1925", n: "el sistema celebra 100 años de inteligencia" }
  ],
  power: { humana: 4, senales: 3, ciber: 3, imagenes: 3, encubierta: 3, contra: 3 },
  powerWhy: {
    humana: "Red extensa en el Mediterráneo, Libia y Medio Oriente; negocia liberaciones de rehenes.",
    senales: "Capacidad militar de interceptación y cooperación con EE.UU. y la OTAN.",
    ciber: "Usó programas espía comerciales; la Agencia de Ciberseguridad Nacional maneja la defensa.",
    imagenes: "Satélites militares propios de la serie COSMO-SkyMed.",
    encubierta: "Operaciones de negociación y presencia en Libia; poca acción encubierta documentada fuera de eso.",
    contra: "Detecta espías rusos, pero un ruso detenido a pedido de EE.UU. escapó de su arresto domiciliario en 2023."
  },
  priorities: [
    { h: "Libia y el Mediterráneo", x: "Migración, energía y milicias." },
    { h: "Rusia", x: "Espionaje, influencia y guerra híbrida." },
    { h: "Terrorismo", x: "Yihadismo y extremismo violento." },
    { h: "Medio Oriente", x: "Irán, Israel y Gaza." },
    { h: "Seguridad económica", x: "Protección de empresas estratégicas." }
  ],
  focos: ["Libia", "Rusia", "Migración", "Irán", "Terrorismo"],
  bodies: {
    "DIS": { since: 2007, how: "Departamento de Información para la Seguridad de la Presidencia del Consejo: coordina a las dos agencias, hace análisis estratégico e inspecciona su actividad.", staff: "No se publica.", budget: "Dentro de la Presidencia del Consejo.", tech: [], where: ["Roma"] },
    "AISE": { since: 2007, how: "Agencia de Información y Seguridad Exterior, heredera del servicio militar SISMI: inteligencia en el exterior, rehenes y Libia.", staff: "No se publica.", budget: "Reservado.", tech: ["Graphite (hasta 2025)"], where: ["Roma", "Embajadas"] },
    "RIS": { since: 1997, how: "Inteligencia del Estado Mayor de Defensa: inteligencia militar, señales e imágenes.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Satélites COSMO-SkyMed"], where: ["Roma"] },
    "AISI": { since: 2007, how: "Agencia de Información y Seguridad Interior, heredera del SISDE: contraespionaje, terrorismo y crimen organizado.", staff: "No se publica.", budget: "Reservado.", tech: ["Graphite (hasta 2025)"], where: ["Roma", "Centros regionales"] },
    "COPASIR": { since: 2007, how: "Comité Parlamentario para la Seguridad de la República: lo preside siempre la oposición y controla a los servicios.", staff: "Diez legisladores.", budget: "Dentro del Parlamento.", tech: [], where: ["Roma"] }
  },
  civil: [
    "La primera ministra delega el control de los servicios en un subsecretario, hoy Alfredo Mantovano.",
    "La ley de 2007 separó a los servicios de las Fuerzas Armadas tras décadas de escándalos.",
    "El secreto de Estado lo pone el gobierno; en el caso Abu Omar frenó condenas a oficiales."
  ],
  law: {
    domestic: [
      "La ley 124 de 2007 regula los servicios y el secreto de Estado.",
      "Las agencias pueden pedir escuchas preventivas con autorización de un fiscal.",
      "Las garantías funcionales permiten a los agentes cometer ciertos delitos con autorización del gobierno."
    ],
    foreign: [
      "La AISE opera en el exterior bajo directivas de la Presidencia del Consejo."
    ],
    oversight: [
      "Comité Parlamentario para la Seguridad de la República (COPASIR), presidido por la oposición.",
      "Fiscalías, que investigaron el uso de Graphite y casos históricos de desvíos."
    ]
  },
  rights: [
    { d: "1977-10", dir: "recorta", area: "Debido proceso", h: "Primera reforma de los servicios", x: "Tras escándalos golpistas se crean el SISMI y el SISDE con control parlamentario." },
    { d: "2007-08", dir: "recorta", area: "Debido proceso", h: "Ley 124", x: "Nueva estructura con AISE, AISI y DIS y un comité parlamentario con más poderes." },
    { d: "2015-04", dir: "amplia", area: "Privacidad", h: "Decreto antiterrorista", x: "Amplía las escuchas preventivas y el acceso a datos tras los atentados de París." },
    { d: "2025-06", dir: "recorta", area: "Privacidad", h: "Fin de Graphite", x: "Las agencias rescinden el contrato con Paragon tras el escándalo." }
  ],
  events: [
    { d: "1980-08-02", lat: 44.5, lon: 11.34, c: "Italy", t: "contra", ev: 1, h: "Atentado de Bolonia", x: "Una bomba en la estación mata a 85 personas; oficiales del SISMI fueron condenados por desviar la investigación.", u: "https://en.wikipedia.org/wiki/Bologna_massacre", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2003-02-17", lat: 45.48, lon: 9.2, c: "Italy", t: "encubierta", ev: 1, h: "Secuestro de Abu Omar", x: "La CIA secuestra en Milán a un clérigo egipcio con ayuda de oficiales del SISMI, según la fiscalía de Milán.", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2021-03-30", lat: 41.87, lon: 12.52, c: "Italy", t: "contra", ev: 1, h: "Caso Walter Biot", x: "Detienen a un capitán de fragata cuando entregaba documentos a un agregado militar ruso; dos diplomáticos rusos fueron expulsados.", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2023-03-22", lat: 45.4, lon: 9.1, c: "Italy", t: "contra", ev: 1, h: "Fuga de Artem Uss", x: "Un empresario ruso detenido a pedido de EE.UU. escapa de su arresto domiciliario cerca de Milán y llega a Rusia.", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-01-08", lat: 35.7, lon: 51.4, c: "Iran", t: "humana", ev: 1, h: "Liberación de Cecilia Sala", x: "El director de la AISE vuela a Teherán para traer a la periodista detenida; Italia liberó días después a un iraní pedido por EE.UU.", u: "https://gabrielecarrer.substack.com/p/il-dopo-belloni-rizzi-al-dis-e-cuzzocrea", st: "Gabriele Carrer" },
    { d: "2025-01-31", lat: 41.9, lon: 12.48, c: "Italy", t: "ciber", ev: 1, h: "Escándalo Paragon", x: "WhatsApp avisa a periodistas y activistas italianos que fueron blanco de Graphite; el comité parlamentario confirmó su uso por las agencias contra activistas.", u: "https://en.ilsole24ore.com/art/what-is-the-paragon-case-and-what-is-happening-AHhJrvBB", st: "Il Sole 24 Ore" }
  ],
  interest: {
    "Libya": 3, "Russia": 3, "Tunisia": 2, "Egypt": 2, "Iran": 2, "Israel": 2, "Turkey": 2, "Algeria": 1, "Niger": 1, "China": 1, "Albania": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1949", h: "SIFAR", x: "Nace el servicio militar, que en 1964 elabora un plan golpista.", ctx: "Posguerra y entrada en la OTAN." },
    { era: "", d: "1969–1984", h: "Años de plomo", x: "Desvíos del servicio militar en las investigaciones de atentados.", ctx: "Terrorismo de izquierda y de derecha." },
    { era: "", d: "1981", h: "Logia P2", x: "Se descubre que los jefes de los servicios integraban la logia de Licio Gelli.", ctx: "Crisis del sistema de partidos." },
    { era: "", d: "1990", h: "Gladio", x: "El gobierno reconoce la red secreta de resistencia de la OTAN.", ctx: "Fin de la Guerra Fría." },
    { era: "Reforma", d: "2007", h: "AISE, AISI y DIS", x: "La ley 124 reorganiza el sistema.", ctx: "Reforma tras el caso Abu Omar." },
    { era: "Actual", d: "2025–2026", h: "Paragon", x: "Escándalo por Graphite, investigación judicial y relevo en el DIS.", now: true, ctx: "Gobierno de Giorgia Meloni." }
  ],
  cases: [
    { ev: 1, ilegal: false, d: "2023–2025", h: "Graphite contra activistas", x: "El comité parlamentario confirmó que la AISE y la AISI usaron el programa espía de Paragon contra Luca Casarini y Giuseppe Caccia, de la ONG Mediterranea. Sostuvo que lo hicieron dentro de la ley. Las agencias rescindieron el contrato en 2025.", who: "Comité Parlamentario para la Seguridad de la República (COPASIR)", missing: "", u: "https://en.ilsole24ore.com/art/paragon-contract-l-italy-cancelled-case-AHuXlzAB", st: "Il Sole 24 Ore" },
    { ev: 2, ilegal: true, d: "2024–2025", h: "El periodista Francesco Cancellato", x: "El director del medio Fanpage recibió el aviso de que su teléfono fue blanco de Graphite. En 2026 la fiscalía confirmó el programa en su teléfono, pero concluyó que no lo infectó la AISI; no se sabe quién lo hizo.", who: "Fiscalías de Roma y Nápoles", missing: "Identificar al responsable.", u: "https://www.avvenire.it/attualita/caso-paragon-la-procura-conferma-malware-su-tre-telefoni-ma-aisi-non-spio-cancellato_105412", st: "Avvenire" },
    { ev: 1, ilegal: true, d: "1980–1995", h: "El desvío de la investigación de Bolonia", x: "Oficiales del SISMI fueron condenados por fabricar pistas falsas para desviar la investigación del atentado de 1980. La justicia también condenó a militantes neofascistas como autores.", who: "Justicia de Italia", missing: "", u: "https://en.wikipedia.org/wiki/Bologna_massacre", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2003", h: "Abu Omar", x: "La justicia italiana condenó en ausencia a 23 estadounidenses por el secuestro. Los oficiales italianos del SISMI acusados quedaron sin condena porque el gobierno impuso el secreto de Estado.", who: "Justicia de Italia", missing: "", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2023-03", ev: 1, w: 3, h: "La fuga de Artem Uss", x: "Un ruso acusado en EE.UU. de contrabando de tecnología militar escapó con ayuda externa.", why: "No está en duda; el gobierno abrió una investigación disciplinaria a jueces.", wx: "Hechos públicos y condenas a quienes lo ayudaron.", who: "Gobierno de Italia", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falsa", d: "1969–1980", ev: 2, w: 3, h: "La estrategia de la tensión", x: "Atentados de la extrema derecha se atribuyeron al comienzo a la izquierda, con desvíos de oficiales de inteligencia.", why: "Los desvíos están probados en varias causas; el grado de dirección de los servicios sigue en debate.", wx: "Sentencias y comisiones parlamentarias.", who: "Justicia y comisiones parlamentarias", u: "https://en.wikipedia.org/wiki/Strategy_of_tension", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "La AISE tiene oficiales en embajadas, con presencia fuerte en Libia, el norte de África y Medio Oriente.",
    campo: "Oficiales y fuentes que negocian con milicias, gobiernos y grupos armados, sobre todo en casos de rehenes.",
    oficina: "El DIS integra análisis de ambas agencias y publica un informe anual al Parlamento.",
    reclutamiento: "Gran parte del personal viene de los Carabineros, la Policía y la Guardia de Finanzas; hay concursos para especialistas técnicos.",
    tecnica: "Escuchas preventivas, satélites COSMO-SkyMed y programas espía comerciales hasta 2025.",
    enlaces: "Alianza con la CIA y los servicios de la OTAN; cooperación con Libia y Túnez en migración."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "2019–2021", n: "Walter Biot", h: "El capitán que vendía documentos", x: "Entregó documentos clasificados de la OTAN a un agregado militar ruso por unos 5.000 euros.", cargo: "Capitán de fragata en el Estado Mayor de Defensa", hacia: "Inteligencia militar rusa", fin: "Condenado en 2023 por un tribunal militar y uno civil.", who: "Justicia de Italia", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "1976–1981", n: "Oficiales de la logia P2", h: "Los jefes de los servicios en una logia", x: "Los directores del SISMI y del SISDE integraban la logia P2 de Licio Gelli, que buscaba influir en la política.", cargo: "Directores de los servicios", hacia: "Logia P2", fin: "La logia fue disuelta por ley en 1982.", who: "Comisión parlamentaria sobre la P2", u: "https://en.wikipedia.org/wiki/Propaganda_Due", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1945–1990", h: "Gladio", x: "Una red armada secreta preparada para una invasión soviética funcionó durante décadas sin conocimiento del Parlamento.", obj: "Mantener una resistencia clandestina.", aquien: "El Parlamento y el público", como: "El primer ministro Giulio Andreotti la reveló en 1990.", who: "Gobierno de Italia", u: "https://en.wikipedia.org/wiki/Operation_Gladio", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "blanco", ev: 2, d: "2025", h: "Documentos de la AISI", x: "El DIS denunció ante la fiscalía de Perugia la difusión de documentos reservados de la AISI que estaban en manos de la fiscalía de Roma.", obj: "No determinado.", who: "DIS", u: "https://en.ilsole24ore.com/art/007-allerta-jihadismo-e-suprematismo-russia-leader-minaccia-ibrida-golden-power-mantovano-possibile-tagliando-legge-AGJJxJJD", st: "Il Sole 24 Ore" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    politicos: { ev: 1, x: "En 1964 el servicio militar SIFAR reunió expedientes de miles de políticos para un plan golpista.", u: "https://en.wikipedia.org/wiki/Piano_Solo", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 2, x: "El teléfono del periodista Francesco Cancellato tenía Graphite; la fiscalía descartó a la AISI y no identificó al responsable.", u: "https://www.avvenire.it/attualita/caso-paragon-la-procura-conferma-malware-su-tre-telefoni-ma-aisi-non-spio-cancellato_105412", st: "Avvenire" },
    activistas: { ev: 1, x: "La AISE y la AISI usaron Graphite contra dirigentes de la ONG Mediterranea, según el comité parlamentario.", u: "https://en.ilsole24ore.com/art/paragon-contract-l-italy-cancelled-case-AHuXlzAB", st: "Il Sole 24 Ore" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "La contrainteligencia sigue a Rusia; el informe anual de 2025 la señala como principal amenaza híbrida.", u: "https://en.ilsole24ore.com/art/007-allerta-jihadismo-e-suprematismo-russia-leader-minaccia-ibrida-golden-power-mantovano-possibile-tagliando-legge-AGJJxJJD", st: "Il Sole 24 Ore" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados en territorio italiano." },
    secuestro: { ev: 1, x: "Oficiales del SISMI colaboraron con la CIA en el secuestro de Abu Omar en Milán en 2003, según la fiscalía.", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas documentadas." },
    conflictos: { ev: 1, x: "Oficiales de inteligencia desviaron investigaciones de atentados en la estrategia de la tensión.", u: "https://en.wikipedia.org/wiki/Strategy_of_tension", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 1, x: "El servicio militar preparó en 1964 el Plan Solo, un esquema de golpe que no se ejecutó.", u: "https://en.wikipedia.org/wiki/Piano_Solo", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 1, x: "Gladio tenía depósitos secretos de armas en todo el país.", u: "https://en.wikipedia.org/wiki/Operation_Gladio", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 1, x: "Comparte información con Libia sobre migración; la cooperación con la guardia costera libia es pública.", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Libya_relations", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 1, x: "Italia entrena y equipa a la guardia costera libia.", u: "https://en.wikipedia.org/wiki/Italy%E2%80%93Libya_relations", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios se fija en un fondo reservado de la Presidencia del Consejo. Esta ficha no encontró la cifra de 2026 verificada.",
    uso: "Personal, operaciones en el exterior, liberación de rehenes y tecnología.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados recientes.",
    crimen: "Esta ficha no encontró uso documentado reciente de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 2, d: "2023–2025", h: "Contratos con Paragon", x: "Las dos agencias pagaron unos 2 millones de euros por Graphite, según la prensa.", monto: "Unos 2 millones de euros", obj: "Vigilancia de comunicaciones.", who: "Prensa italiana", u: "https://www.tecnoandroid.it/news/paragon-lo-spyware-graphite-e-il-muro-di-silenzio-con-litalia-1875335/", st: "Tecnoandroid" }
  ],
  companies: [
    { n: "Paragon Solutions", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Vendió Graphite a la AISE y la AISI; los contratos se rescindieron en 2025." },
    { n: "Hacking Team", c: "nacional", rubro: "Programas espía", rel: "Proveedor", x: "Empresa milanesa que vendió herramientas de hackeo a decenas de gobiernos hasta su filtración en 2015." }
  ],
  struggles: [
    { a: "Gobierno de Meloni", b: "Oposición y prensa", k: "Con la política", stake: "El caso Paragon", state: "Abierta", x: "La oposición acusa al gobierno de ocultar quién espió a periodistas." },
    { a: "DIS", b: "Fiscalía de Roma", k: "Con otros poderes", stake: "Documentos reservados", state: "Latente", x: "El DIS denunció la difusión de documentos de la AISI que estaban en manos de fiscales." }
  ],
  proxies: [
    {"id": "p2", "s": "Logia P2", "n": "Logia Propaganda Due (P2)", "k": "institucion", "d": "1970–1981", "rol": "doble", "hoy": false, "ev": 1, "x": "Logia masónica secreta que reunía a jefes de los servicios, militares y empresarios; una comisión parlamentaria la declaró una amenaza para la democracia.", "who": "Comisión parlamentaria Anselmi", "u": "https://en.wikipedia.org/wiki/Propaganda_Due", "st": "Wikipedia: Propaganda Due", "graf": true}
  ],
  doctrina: [{"h": "Secreto de Estado", "x": "El gobierno puede oponerlo a los jueces, como en el caso Abu Omar."}],
  cuentas: {"n": 2, "x": "Condenas por el caso Abu Omar, con secreto de Estado para los jefes."},
  sources: [
    { t: "Il Sole 24 Ore: qué es el caso Paragon", u: "https://en.ilsole24ore.com/art/what-is-the-paragon-case-and-what-is-happening-AHhJrvBB" },
    { t: "Avvenire: la fiscalía y el teléfono de Cancellato (2026)", u: "https://www.avvenire.it/attualita/caso-paragon-la-procura-conferma-malware-su-tre-telefoni-ma-aisi-non-spio-cancellato_105412" },
    { t: "Il Post: Rizzi, nuevo director del DIS", u: "https://www.ilpost.it/2025/01/09/rizzi-nuovo-direttore-servizi-segreti-dopo-belloni/" },
    { t: "Il Sole 24 Ore: informe anual de inteligencia", u: "https://en.ilsole24ore.com/art/007-allerta-jihadismo-e-suprematismo-russia-leader-minaccia-ibrida-golden-power-mantovano-possibile-tagliando-legge-AGJJxJJD" },
    { t: "Wikipedia: Imam Rapito affair", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair" }
  ]
};
