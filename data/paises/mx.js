// Ficha de México · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["mx"] = {
  id: "mx",
  updated: "2026-11-15",
  summary: [
    "El Centro Nacional de Inteligencia (CNI), sucesor desde 2018 del Centro de Investigación y Seguridad Nacional (CISEN), es el servicio civil de México. Depende de la Secretaría de Seguridad y Protección Ciudadana de Omar García Harfuch. Las Fuerzas Armadas tienen sus propios servicios, con mucho más peso desde que el Ejército asumió tareas de seguridad pública.",
    "La prioridad es el crimen organizado y la relación con EE.UU., que presiona por resultados contra los carteles del fentanilo. En julio de 2025 una ley creó la Plataforma Central de Inteligencia, que conecta bases de datos públicas y privadas bajo control del CNI; organizaciones de derechos digitales advirtieron que no tiene control judicial previo.",
    "México fue en 2011 el primer cliente mundial del programa espía Pegasus. Durante el gobierno de Enrique Peña Nieto se usó contra periodistas y activistas, y documentos filtrados por el colectivo Guacamaya mostraron que el Ejército lo siguió usando en 2020 contra un defensor de derechos humanos. Antes, la Dirección Federal de Seguridad (DFS) reprimió a opositores en la Guerra Sucia y se vinculó con narcotraficantes."
  ],
  keyFacts: [
    { l: "Secretario de Seguridad", v: "Omar García Harfuch", n: "el CNI depende de su secretaría (2026)" },
    { l: "Primer cliente de Pegasus", v: "2011", n: "Defensa, bajo el gobierno de Felipe Calderón" },
    { l: "Ley de inteligencia", v: "Julio de 2025", n: "Plataforma Central de Inteligencia a cargo del CNI" },
    { l: "Filtración de Guacamaya", v: "6 terabytes", n: "correos de Defensa, en 2022" }
  ],
  power: { humana: 3, senales: 3, ciber: 3, imagenes: 2, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Redes de informantes contra el crimen organizado, muchas veces infiltradas por los propios carteles.",
    senales: "Escucha telefónica legal e ilegal; compró varios sistemas de interceptación.",
    ciber: "Uso extendido de programas espía comerciales; ciberdefensa débil, como mostró la filtración de 2022.",
    imagenes: "Depende de satélites comerciales y de EE.UU., que hace vuelos de vigilancia sobre carteles.",
    encubierta: "No hay operaciones encubiertas documentadas en el exterior.",
    contra: "Servicios infiltrados por el crimen organizado; poca capacidad frente a espionaje extranjero."
  },
  priorities: [
    { h: "Crimen organizado", x: "Carteles, fentanilo, tráfico de armas y lavado." },
    { h: "Relación con EE.UU.", x: "Presión por resultados y temor a acciones militares unilaterales." },
    { h: "Integración de datos", x: "Poner en marcha la Plataforma Central de Inteligencia." },
    { h: "Migración", x: "Flujos hacia la frontera norte." },
    { h: "Conflictos sociales", x: "Protestas y grupos armados locales." }
  ],
  focos: ["Carteles", "Estados Unidos", "Fentanilo", "Lavado de dinero", "Migración"],
  bodies: {
    "Gabinete": { since: 2018, how: "Gabinete de Seguridad del gobierno federal, que coordina a las secretarías de Seguridad, Defensa y Marina y a la Guardia Nacional.", staff: "No se publica.", budget: "No aplica.", tech: [], where: ["Ciudad de México"] },
    "CNI": { since: 2018, how: "Centro Nacional de Inteligencia: servicio civil heredero del CISEN (1989) y de la DFS (1947). Desde 2025 administra la Plataforma Central de Inteligencia, que conecta bases de datos de todo el Estado y de privados.", staff: "No se publica.", budget: "Dentro de la Secretaría de Seguridad.", tech: ["Plataforma Central de Inteligencia", "Interceptación con orden judicial"], where: ["Ciudad de México"] },
    "Defensa": { since: 1924, how: "Inteligencia del Ejército y la Fuerza Aérea, con el Centro Militar de Inteligencia. Según documentos filtrados, operó Pegasus sin control judicial.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Pegasus", "Interceptación"], where: ["Ciudad de México", "Todo el país"] },
    "Marina": { since: 1940, how: "Inteligencia de la Secretaría de Marina, que ejecutó varias de las capturas de jefes de carteles con apoyo de EE.UU.", staff: "No se publica.", budget: "Dentro de Marina.", tech: [], where: ["Ciudad de México", "Puertos"] },
    "UIF": { since: 2004, how: "Unidad de Inteligencia Financiera de Hacienda: analiza operaciones sospechosas y congela cuentas del crimen organizado.", staff: "No se publica.", budget: "Dentro de Hacienda.", tech: ["Análisis financiero"], where: ["Ciudad de México"] },
    "FGR": { since: 2019, how: "Inteligencia de la Fiscalía General de la República, heredera de la PGR, que también compró Pegasus.", staff: "No se publica.", budget: "Dentro de la Fiscalía.", tech: [], where: ["Ciudad de México"] }
  },
  civil: [
    "El CNI depende del gobierno federal a través de la Secretaría de Seguridad.",
    "Las Fuerzas Armadas ganaron peso en seguridad y en inteligencia desde 2019, con la Guardia Nacional bajo Defensa.",
    "En 2026 Defensa y Seguridad firmaron un convenio para compartir bases de datos, lo que preocupó a especialistas."
  ],
  law: {
    domestic: [
      "La Ley de Seguridad Nacional de 2005 exige orden judicial para intervenir comunicaciones.",
      "La Ley del Sistema Nacional de Investigación e Inteligencia de 2025 crea la Plataforma Central de Inteligencia.",
      "Reformas de 2025 obligan a vincular las líneas telefónicas con la identidad de su titular."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "Comisión Bicameral de Seguridad Nacional del Congreso.",
      "Jueces federales que autorizan escuchas.",
      "La desaparición del organismo de transparencia INAI en 2025 debilitó el acceso a contratos de vigilancia."
    ]
  },
  rights: [
    { d: "1947", dir: "amplia", area: "Debido proceso", h: "Nace la DFS", x: "La policía política del presidente vigila y reprime a opositores hasta 1985." },
    { d: "2005-01", dir: "recorta", area: "Privacidad", h: "Ley de Seguridad Nacional", x: "Exige orden judicial para intervenir comunicaciones." },
    { d: "2014-07", dir: "amplia", area: "Privacidad", h: "Retención de datos", x: "La ley de telecomunicaciones obliga a guardar metadatos de los usuarios." },
    { d: "2025-07", dir: "amplia", area: "Privacidad", h: "Plataforma Central de Inteligencia", x: "Conecta bases públicas y privadas sin control judicial previo, según organizaciones de derechos digitales." }
  ],
  events: [
    { d: "1968-10-02", lat: 19.45, lon: -99.14, c: "Mexico", t: "contra", ev: 1, h: "Masacre de Tlatelolco", x: "Militares y agentes disparan contra estudiantes en la Plaza de las Tres Culturas; la DFS vigilaba el movimiento.", u: "https://en.wikipedia.org/wiki/Tlatelolco_massacre", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1985-02-07", lat: 20.67, lon: -103.35, c: "Mexico", t: "humana", ev: 1, h: "Secuestro de Kiki Camarena", x: "Narcotraficantes secuestran y matan al agente de la DEA; la investigación salpicó a agentes de la DFS, que fue disuelta ese año.", u: "https://en.wikipedia.org/wiki/Direcci%C3%B3n_Federal_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2017-06", lat: 19.42, lon: -99.16, c: "Mexico", t: "ciber", ev: 1, h: "Gobierno Espía", x: "Citizen Lab y organizaciones mexicanas revelan intentos de infectar con Pegasus a periodistas, activistas y expertos internacionales.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2020-08", lat: 27.4, lon: -99.55, c: "Mexico", t: "ciber", ev: 1, h: "El Ejército espía a Raymundo Ramos", x: "El Centro Militar de Inteligencia usa Pegasus contra el defensor que documentaba ejecuciones del Ejército en Nuevo Laredo.", u: "https://www.article19.org/resources/mexico-army-used-pegasus-to-spy-on-human-rights-defender-raymundo-ramos/1", st: "Artículo 19" },
    { d: "2022-09", lat: 19.44, lon: -99.22, c: "Mexico", t: "ciber", ev: 1, h: "Filtración de Guacamaya", x: "Un colectivo de hackers publica millones de correos de Defensa, que revelan su red de espionaje.", u: "https://mexiconewsdaily.com/news/journalists-and-ngos-file-spyware-criminal-complaint-against-defense-ministry", st: "Mexico News Daily" }
  ],
  interest: {
    "United States of America": 3, "Guatemala": 2, "Colombia": 2, "China": 1, "Honduras": 1, "Venezuela": 1, "Cuba": 1, "Canada": 1
  },
  timeline: [
    { era: "Partido hegemónico", d: "1947", h: "Nace la DFS", x: "Policía política creada por Miguel Alemán con ayuda de EE.UU." },
    { era: "", d: "1968–1982", h: "Guerra Sucia", x: "La DFS persigue, tortura y desaparece a guerrilleros y opositores." },
    { era: "", d: "1985", h: "Disolución de la DFS", x: "El caso Camarena expone sus lazos con el narcotráfico." },
    { era: "", d: "1989", h: "Nace el CISEN", x: "Servicio civil profesional bajo Gobernación." },
    { era: "Alternancia", d: "2011", h: "Pegasus", x: "México se convierte en el primer cliente del programa espía." },
    { era: "", d: "2018", h: "CNI", x: "Andrés Manuel López Obrador disuelve el CISEN y crea el CNI." },
    { era: "Actual", d: "2025–2026", h: "Plataforma Central de Inteligencia", x: "Ley de inteligencia, presión de EE.UU. y convenio de datos con Defensa.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2020", h: "El Ejército espía a Raymundo Ramos", x: "Documentos internos de Defensa filtrados por Guacamaya muestran que el Centro Militar de Inteligencia usó Pegasus contra el defensor de derechos humanos de Nuevo Laredo. Lo hizo mientras él documentaba ejecuciones de civiles por soldados, y la información llegó al alto mando. Citizen Lab confirmó la infección.", who: "Artículo 19, R3D, Citizen Lab y medios mexicanos", missing: "", u: "https://www.article19.org/resources/mexico-army-used-pegasus-to-spy-on-human-rights-defender-raymundo-ramos/1", st: "Artículo 19" },
    { ev: 1, ilegal: true, d: "2015–2016", h: "Gobierno Espía", x: "Citizen Lab detectó mensajes con enlaces de Pegasus enviados a periodistas, entre ellos Carmen Aristegui y su hijo menor, y a abogados de víctimas. También fueron blanco expertos internacionales que investigaban la desaparición de 43 estudiantes de Ayotzinapa.", who: "Citizen Lab y organizaciones mexicanas", missing: "", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1968–1982", h: "La Guerra Sucia", x: "La DFS y el Ejército detuvieron, torturaron y desaparecieron a cientos de opositores y guerrilleros. Una fiscalía especial y comisiones de la verdad lo documentaron.", who: "Fiscalía especial y comisiones de la verdad", missing: "", u: "https://en.wikipedia.org/wiki/Mexican_Dirty_War", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1980–1985", h: "La DFS y el narcotráfico", x: "Agentes de la DFS dieron credenciales y protección a jefes del cartel de Guadalajara. El escándalo por el asesinato del agente de la DEA Enrique Camarena llevó a disolverla.", who: "Justicia de EE.UU. y de México", missing: "", u: "https://en.wikipedia.org/wiki/Direcci%C3%B3n_Federal_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2014-09", ev: 1, w: 3, h: "Ayotzinapa", x: "El Estado no explicó la desaparición de 43 estudiantes; la versión oficial inicial fue desmentida por expertos internacionales.", why: "No está en duda que la versión oficial fue falsa; sigue sin aclararse el destino de los estudiantes.", wx: "Informes del grupo de expertos de la CIDH.", who: "Grupo de expertos de la CIDH", u: "https://en.wikipedia.org/wiki/2014_Iguala_mass_kidnapping", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2022-09", ev: 1, w: 3, h: "Guacamaya", x: "Defensa no detectó la extracción de millones de correos, incluidos informes de inteligencia.", why: "No está en duda; el gobierno reconoció el robo.", wx: "Reconocimiento oficial y documentos publicados.", who: "Gobierno de México", u: "https://mexiconewsdaily.com/news/journalists-and-ngos-file-spyware-criminal-complaint-against-defense-ministry", st: "Mexico News Daily" }
  ],
  modus: {
    embajadas: "Agregados militares y de seguridad en embajadas, sobre todo en EE.UU. y Centroamérica; no hay una red civil de oficiales en el exterior documentada.",
    campo: "Informantes y agentes infiltrados en organizaciones criminales, con frecuencia comprometidos por la corrupción.",
    oficina: "El CNI y el Gabinete de Seguridad integran información para operativos; la Plataforma Central centraliza datos.",
    reclutamiento: "Personal civil por concurso y militares en comisión; el CNI tiene una escuela propia.",
    tecnica: "Escuchas, programas espía comerciales, cámaras urbanas y bases de datos biométricas.",
    enlaces: "Relación estrecha y desigual con la CIA, la DEA y el FBI; EE.UU. vuela drones de vigilancia sobre carteles."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "2022", n: "Guacamaya", h: "El colectivo que filtró a Defensa", x: "Hackers anónimos extrajeron y publicaron correos de Defensa y de otros ejércitos latinoamericanos.", cargo: "Externo", hacia: "Periodistas y público", fin: "Sin detenidos conocidos.", who: "Gobierno de México y medios", u: "https://mexiconewsdaily.com/news/journalists-and-ngos-file-spyware-criminal-complaint-against-defense-ministry", st: "Mexico News Daily" },
    { k: "topo", dir: "sale", ev: 1, d: "1980–1985", n: "Agentes de la DFS", h: "Los policías del cartel", x: "Agentes con credenciales oficiales protegieron a narcotraficantes del cartel de Guadalajara.", cargo: "Dirección Federal de Seguridad", hacia: "Cartel de Guadalajara", fin: "La DFS fue disuelta en 1985.", who: "Justicia de EE.UU. y de México", u: "https://en.wikipedia.org/wiki/Direcci%C3%B3n_Federal_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "robo", rol: "blanco", ev: 1, d: "2022-09", h: "Los correos de Defensa", x: "Guacamaya publica millones de correos con informes de inteligencia, salud del presidente y operaciones.", obj: "Exponer abusos de los ejércitos de la región.", who: "Gobierno de México y medios", u: "https://mexiconewsdaily.com/news/journalists-and-ngos-file-spyware-criminal-complaint-against-defense-ministry", st: "Mexico News Daily" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2022–2026", h: "Los contratos de Pegasus", x: "Defensa se negó a entregar los contratos de compra pese a una orden del organismo de transparencia.", obj: "Evitar el escrutinio sobre el espionaje.", aquien: "El organismo de transparencia, la fiscalía y el público", como: "Un juez ordenó acatar la resolución tras un amparo de R3D.", who: "R3D y juzgado federal", u: "https://grupoanimal.mx/seguridad/sedena-resolucion-inai-contratos-pegasus-espionaje-sexenio-de-amlo", st: "Animal Político" }
  ],
  practicas: {
    propios: { ev: 2, x: "La investigación Ejército Espía documentó que el Centro Militar de Inteligencia también reunía información sobre funcionarios.", u: "https://www.xataka.com.mx/investigacion/ejercito-tiene-departamento-secreto-que-usa-pegasus-a-discrecion-secretario-defensa-mexico-filtracion-guacamaya", st: "Xataka México" },
    politicos: { ev: 2, x: "Políticos de oposición figuraron entre los blancos de Pegasus durante el gobierno de Peña Nieto, según Citizen Lab.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Periodistas como Carmen Aristegui y Ricardo Raphael fueron blanco de Pegasus.", u: "https://mexiconewsdaily.com/news/journalists-and-ngos-file-spyware-criminal-complaint-against-defense-ministry", st: "Mexico News Daily" },
    activistas: { ev: 1, x: "El Ejército espió al defensor Raymundo Ramos en 2020, según documentos de Defensa.", u: "https://www.article19.org/resources/mexico-army-used-pegasus-to-spy-on-human-rights-defender-raymundo-ramos/1", st: "Artículo 19" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 0, x: "Esta ficha no encontró espionaje documentado contra otros Estados." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "La DFS participó en ejecuciones extrajudiciales durante la Guerra Sucia.", u: "https://en.wikipedia.org/wiki/Mexican_Dirty_War", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró sabotajes documentados." },
    tortura: { ev: 1, x: "La DFS torturó a detenidos en la Guerra Sucia, según comisiones de la verdad.", u: "https://en.wikipedia.org/wiki/Mexican_Dirty_War", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Cientos de opositores fueron desaparecidos por fuerzas del Estado en la Guerra Sucia.", u: "https://en.wikipedia.org/wiki/Mexican_Dirty_War", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas." },
    inteligencia: { ev: 1, x: "Intercambia información sobre carteles con EE.UU., que aporta vuelos de vigilancia.", u: "https://www.elimparcial.com/mexico/2026/10/25/que-se-sabe-del-acuerdo-entre-harfuch-y-defensa-sobre-vigilancia-y-privacidad/", st: "El Imparcial" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del CNI forma parte del de la Secretaría de Seguridad. Esta ficha no encontró la cifra de 2026 verificada.",
    uso: "Personal, plataformas de datos, interceptación y programas espía.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Pegasus se compró a través de intermediarios privados con representación exclusiva en México.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Agentes de la DFS protegieron al cartel de Guadalajara en la década de 1980.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2019", h: "Compra de Pegasus por Defensa", x: "Defensa contrató un sistema de monitoreo remoto a la empresa con la representación de Pegasus en México, según la investigación Ejército Espía.", obj: "Vigilancia de comunicaciones.", who: "R3D, Artículo 19 y SocialTIC", u: "https://www.ejecentral.com.mx/denuncian-espionaje-con-pegasus-amlo-lo-niega-y-minimiza", st: "Eje Central" },
    { k: "crimen", rol: "autor", ev: 1, d: "1980–1985", h: "La DFS y el cartel de Guadalajara", x: "Agentes cobraban por dar protección y credenciales a narcotraficantes.", obj: "Enriquecimiento de funcionarios.", who: "Justicia de EE.UU. y de México", u: "https://en.wikipedia.org/wiki/Direcci%C3%B3n_Federal_de_Seguridad", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Pegasus se usó en México desde 2011 contra periodistas y activistas." },
    { n: "Hacking Team", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "La filtración de 2015 mostró a México como su principal cliente." }
  ],
  struggles: [
    { a: "Fuerzas Armadas", b: "Autoridades civiles", k: "Con otros poderes", stake: "El control de la inteligencia y la seguridad", state: "Abierta", x: "El Ejército ganó funciones civiles y acceso a datos policiales." },
    { a: "Gobierno de México", b: "Gobierno de EE.UU.", k: "Con la política", stake: "La lucha contra los carteles", state: "Abierta", x: "Washington presiona y amenaza con acciones unilaterales; México defiende su soberanía." }
  ],
  sources: [
    { t: "InSight Crime: la nueva ley de inteligencia", u: "https://insightcrime.org/es/noticias/como-impactara-nueva-ley-inteligencia-en-mexico-seguridad-publica/" },
    { t: "Cámara de Diputados: texto de la ley (2025)", u: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSNIIMSP.pdf" },
    { t: "Artículo 19: el Ejército espió a Raymundo Ramos", u: "https://www.article19.org/resources/mexico-army-used-pegasus-to-spy-on-human-rights-defender-raymundo-ramos/1" },
    { t: "El Imparcial: convenio de datos entre Seguridad y Defensa (2026)", u: "https://www.elimparcial.com/mexico/2026/10/25/que-se-sabe-del-acuerdo-entre-harfuch-y-defensa-sobre-vigilancia-y-privacidad/" },
    { t: "Wikipedia: Dirección Federal de Seguridad", u: "https://en.wikipedia.org/wiki/Direcci%C3%B3n_Federal_de_Seguridad" }
  ]
};
