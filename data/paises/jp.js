// Ficha de Japón · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["jp"] = {
  id: "jp",
  updated: "2026-11-15",
  summary: [
    "Japón tuvo durante décadas una inteligencia dispersa y sin ley contra el espionaje: en 1983 el primer ministro Yasuhiro Nakasone lo llamó un \"paraíso de espías\". Sus servicios son la Oficina Nacional de Inteligencia (NIB) del Gabinete, el Cuartel General de Inteligencia de Defensa (DIH), que concentra la interceptación de señales, la Agencia de Inteligencia de Seguridad Pública (PSIA) y la policía de seguridad pública.",
    "El 31 de julio de 2026 el gobierno de Sanae Takaichi creó el Consejo Nacional de Inteligencia, presidido por la primera ministra. También convirtió a la vieja Oficina de Investigación e Inteligencia del Gabinete (CIRO) en la NIB, con unas 730 personas. El siguiente paso anunciado es una ley contra el espionaje y un servicio de inteligencia exterior, que la coalición se comprometió a crear antes de marzo de 2028.",
    "Antes de 1945 la inteligencia militar japonesa organizó operaciones de falsa bandera como el incidente de Mukden de 1931, que sirvió de pretexto para invadir Manchuria, y la policía política torturó a opositores. Hoy los principales blancos son China, Corea del Norte y Rusia, que usa a Japón como base para obtener tecnología."
  ],
  keyFacts: [
    { l: "Director de la NIB", v: "Kazuya Hara", n: "desde el 31 de julio de 2026" },
    { l: "Personal de la NIB", v: "Unas 730 personas", n: "igual que la CIRO, según el gobierno (2026)" },
    { l: "Ley contra el espionaje", v: "No existe", n: "el gobierno prepara un proyecto" },
    { l: "Casos rusos desde 1991", v: "11", n: "causas de la policía de Tokio, según Jiji (2026)" }
  ],
  power: { humana: 2, senales: 4, ciber: 3, imagenes: 4, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Sin servicio exterior propio: depende de diplomáticos, policías destacados y aliados.",
    senales: "El DIH tiene una red de estaciones de interceptación que vigila a China, Rusia y Corea del Norte.",
    ciber: "La ley de ciberdefensa activa de 2025 habilita a neutralizar servidores atacantes; la capacidad recién se arma.",
    imagenes: "Constelación propia de satélites de recolección de información desde 2003.",
    encubierta: "No hay operaciones encubiertas documentadas desde 1945.",
    contra: "Sin ley contra el espionaje, muchos casos se juzgan como robo de secretos comerciales."
  },
  priorities: [
    { h: "China", x: "Expansión militar, Taiwán y espionaje tecnológico." },
    { h: "Corea del Norte", x: "Misiles, programa nuclear y ciudadanos secuestrados." },
    { h: "Rusia", x: "Islas Kuriles, cooperación militar con China y robo de tecnología." },
    { h: "Reforma", x: "Ley contra el espionaje y servicio de inteligencia exterior." },
    { h: "Seguridad económica", x: "Proteger semiconductores y máquinas herramienta." }
  ],
  focos: ["China", "Corea del Norte", "Rusia", "Taiwán", "Seguridad económica"],
  bodies: {
    "NIC": { since: 2026, how: "Consejo Nacional de Inteligencia: órgano de ministros presidido por la primera ministra, creado en julio de 2026 para fijar prioridades y coordinar a todos los servicios.", staff: "Lo asiste la NIB.", budget: "Dentro del Gabinete.", tech: [], where: ["Tokio"] },
    "NIB": { since: 2026, how: "Oficina Nacional de Inteligencia: reemplazó en 2026 a la CIRO, creada en 1952. Coordina análisis, controla el programa de satélites y hace de secretaría del consejo; su papel se parece más al de la Oficina del Director de Inteligencia Nacional de EE.UU. que al de la CIA.", staff: "Unas 730 personas (2026).", budget: "Dentro del Gabinete; el gasto de satélites se publica.", tech: ["Satélites de recolección de información"], where: ["Tokio"] },
    "DIH": { since: 1997, how: "Cuartel General de Inteligencia de Defensa: el mayor servicio del país. Reúne la interceptación de señales, las imágenes y los agregados militares.", staff: "Unas 2.500 personas, según estimaciones públicas.", budget: "Dentro de Defensa.", tech: ["Estaciones de interceptación", "Imágenes"], where: ["Tokio", "Estaciones en todo el archipiélago"] },
    "PSIA": { since: 1952, how: "Agencia de Inteligencia de Seguridad Pública del Ministerio de Justicia: vigila grupos considerados subversivos, la secta de Aum Shinrikyo y sucesoras, Corea del Norte y el terrorismo. No puede detener.", staff: "Unas 1.700 personas, según estimaciones públicas.", budget: "Dentro de Justicia.", tech: [], where: ["Tokio", "Oficinas regionales"] },
    "NPA": { since: 1954, how: "Oficina de Seguridad de la Agencia Nacional de Policía y la policía de seguridad pública de Tokio: contrainteligencia y detención de espías.", staff: "No se publica.", budget: "Dentro de la policía.", tech: ["Escuchas con orden judicial"], where: ["Tokio", "Todo el país"] }
  },
  civil: [
    "La primera ministra preside el nuevo Consejo Nacional de Inteligencia y nombra al director de la NIB.",
    "Los servicios dependen de distintos ministerios, lo que durante décadas trabó el intercambio de información.",
    "La policía de seguridad pública tiene mucha autonomía; el caso Ohkawara Kakohki mostró sus excesos."
  ],
  law: {
    domestic: [
      "No hay ley contra el espionaje; los casos se juzgan por secretos de Estado, defensa o competencia desleal.",
      "La ley de secretos especialmente designados de 2013 castiga con hasta 10 años la filtración de secretos.",
      "La ley de ciberdefensa activa de 2025 permite vigilar tráfico y neutralizar servidores atacantes."
    ],
    foreign: [
      "No hay base legal para un servicio de inteligencia exterior con agentes; el gobierno estudia crearlo."
    ],
    oversight: [
      "Comisiones de supervisión de secretos en ambas cámaras de la Dieta, creadas en 2014.",
      "Tribunales, que declararon ilegales investigaciones de la policía de seguridad pública."
    ]
  },
  rights: [
    { d: "1925-04", dir: "amplia", area: "Expresión", h: "Ley de Preservación de la Paz", x: "Permite perseguir a comunistas y opositores; la policía política la usa hasta 1945." },
    { d: "1945-10", dir: "recorta", area: "Debido proceso", h: "Disolución de la policía política", x: "La ocupación estadounidense deroga la ley y disuelve la Tokko." },
    { d: "2013-12", dir: "amplia", area: "Prensa", h: "Ley de secretos especialmente designados", x: "Endurece las penas por filtrar secretos; periodistas advirtieron sobre su alcance." },
    { d: "2025-05", dir: "amplia", area: "Privacidad", h: "Ciberdefensa activa", x: "Habilita a analizar datos de comunicaciones internacionales y a actuar contra servidores." },
    { d: "2026-05", dir: "amplia", area: "Debido proceso", h: "Consejo Nacional de Inteligencia", x: "Centraliza la inteligencia bajo la primera ministra." }
  ],
  events: [
    { d: "1928-06-04", lat: 41.8, lon: 123.4, c: "China", t: "sabotaje", ev: 1, h: "Asesinato de Zhang Zuolin", x: "Oficiales del Ejército de Kwantung vuelan el tren del jefe militar de Manchuria.", u: "https://en.wikipedia.org/wiki/Huanggutun_incident", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1931-09-18", lat: 41.85, lon: 123.45, c: "China", t: "sabotaje", ev: 1, h: "Incidente de Mukden", x: "Oficiales japoneses detonan explosivos en una vía férrea, culpan a China y usan el ataque para invadir Manchuria.", u: "https://en.wikipedia.org/wiki/Mukden_incident", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2000-09", lat: 35.68, lon: 139.75, c: "Japan", t: "contra", ev: 1, h: "Caso Bogatenkov", x: "Un oficial de la Fuerza Marítima es detenido por vender documentos a un agregado militar ruso; el ruso salió del país.", u: "https://en.wikipedia.org/wiki/Japan%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2010-10", lat: 35.69, lon: 139.75, c: "Japan", t: "contra", ev: 1, h: "Filtración sobre musulmanes", x: "Se publican en internet 114 documentos de la policía de Tokio sobre la vigilancia de residentes musulmanes.", u: "https://en.wikipedia.org/wiki/Tokyo_Metropolitan_Police_Department", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2020-03", lat: 35.45, lon: 139.6, c: "Japan", t: "contra", ev: 1, h: "Detención ilegal en Ohkawara Kakohki", x: "La policía de seguridad pública detiene a tres directivos por exportaciones; la causa cayó y un tribunal la declaró ilegal.", u: "https://www.cbsnews.com/news/japan-police-apologize-grave-innocent-businessman-long-detention", st: "AP, vía CBS News" },
    { d: "2026-01-20", lat: 35.7, lon: 139.72, c: "Japan", t: "humana", ev: 2, h: "Espía ruso que se hacía pasar por ucraniano", x: "La policía de Tokio envía a la fiscalía el caso de un ex empleado de la representación comercial rusa que compró secretos de una fábrica de máquinas.", u: "https://english.adnkronos.com/2026/01/20/ex-russian-official-referred-to-prosecutors-in-japan/", st: "Jiji Press, vía Adnkronos" },
    { d: "2026-10-13", lat: 46.95, lon: 142.74, c: "Russia", t: "humana", ev: 3, h: "Periodista japonés detenido en Sajalín", x: "El FSB ruso detiene a un periodista del Hokkaido Shimbun y lo acusa de reunir datos para la inteligencia japonesa; Tokio lo niega.", u: "https://www.aljazeera.com/amp/news/2026/10/13/russia-arrests-japanese-reporter-for-alleged", st: "Al Jazeera" }
  ],
  interest: {
    "China": 3, "North Korea": 3, "Russia": 3, "Taiwan": 2, "South Korea": 1, "United States of America": 1, "Philippines": 1
  },
  timeline: [
    { era: "Imperio", d: "1904–1905", h: "Akashi y la revolución rusa", x: "El coronel Motojiro Akashi financia a opositores del zar durante la guerra con Rusia." },
    { era: "", d: "1931", h: "Mukden", x: "Falsa bandera que abre la invasión de Manchuria." },
    { era: "", d: "1938", h: "Escuela de Nakano", x: "El Ejército crea su escuela de espías y sabotaje." },
    { era: "Posguerra", d: "1952", h: "Nacen la CIRO y la PSIA", x: "Se arman servicios civiles chicos bajo el paraguas de EE.UU." },
    { era: "", d: "1997", h: "Nace el DIH", x: "Defensa unifica su inteligencia de señales e imágenes." },
    { era: "", d: "2013", h: "Ley de secretos", x: "Primer marco moderno para proteger información clasificada." },
    { era: "Actual", d: "2026", h: "Reforma de Takaichi", x: "Consejo Nacional de Inteligencia, NIB y proyecto de ley contra el espionaje.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "1931", h: "El incidente de Mukden", x: "Oficiales del Ejército de Kwantung volaron una vía del ferrocarril de Manchuria y culparon a soldados chinos. El ataque sirvió de pretexto para ocupar Manchuria y crear el Estado títere de Manchukuo. La autoría quedó demostrada en la posguerra.", who: "Tribunal de Tokio y testimonios de los participantes", missing: "", u: "https://en.wikipedia.org/wiki/Mukden_incident", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2020–2025", h: "Ohkawara Kakohki", x: "La policía de seguridad pública de Tokio detuvo a tres directivos acusados de exportar equipos que servirían para armas biológicas. La fiscalía retiró los cargos en 2021, cuando uno ya había muerto de cáncer sin atención a tiempo. En 2025 el Tribunal Superior de Tokio declaró ilegales la investigación y las detenciones.", who: "Tribunal Superior de Tokio", missing: "", u: "https://www.cbsnews.com/news/japan-police-apologize-grave-innocent-businessman-long-detention", st: "AP, vía CBS News" },
    { ev: 1, ilegal: false, d: "2010", h: "La vigilancia de musulmanes", x: "Documentos filtrados mostraron que la policía de Tokio registraba datos de residentes musulmanes y de las mezquitas que frecuentaban. Los tribunales ordenaron indemnizar a los afectados por la filtración, pero consideraron legal la vigilancia.", who: "Justicia de Japón", missing: "", u: "https://en.wikipedia.org/wiki/Tokyo_Metropolitan_Police_Department", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 3, ilegal: false, d: "2026", h: "El periodista detenido en Rusia", x: "El FSB acusa a un periodista japonés de reunir datos sobre defensas rusas para un servicio japonés. Tokio negó que hiciera espionaje y organizaciones de prensa advirtieron sobre la criminalización del periodismo.", who: "FSB de Rusia", missing: "Pruebas públicas y un juicio independiente.", u: "https://www.occrp.org/en/news/russia-detains-japanese-journalist-on-espionage-charges", st: "OCCRP" }
  ],
  failures: [
    { k: "falsa", d: "1931-09", ev: 1, w: 3, h: "Mukden", x: "La explosión atribuida a China fue obra de oficiales japoneses.", why: "No está en duda; lo admitieron los propios participantes.", wx: "Testimonios y documentos de posguerra.", who: "Historiadores y Tribunal de Tokio", u: "https://en.wikipedia.org/wiki/Mukden_incident", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2020", ev: 1, w: 3, h: "La causa armada contra Ohkawara Kakohki", x: "La policía forzó una interpretación técnica para acusar a una empresa inocente.", why: "No está en duda; la policía lo admitió en un informe de 2025.", wx: "Fallos judiciales e informe interno.", who: "Policía de Tokio", u: "https://www.cbsnews.com/news/japan-police-apologize-grave-innocent-businessman-long-detention", st: "AP, vía CBS News" }
  ],
  modus: {
    embajadas: "Japón no tiene oficiales de inteligencia con cobertura en embajadas como otros países; usa agregados militares, diplomáticos y policías destacados.",
    campo: "No tiene agentes de campo en el exterior reconocidos. Rusia y China acusaron a ciudadanos japoneses de trabajar para su inteligencia.",
    oficina: "El análisis estaba repartido entre ministerios; la NIB busca unificarlo y llevarlo a la primera ministra.",
    reclutamiento: "Casi todo el personal viene de la policía, Defensa y otros ministerios; el gobierno planea una escuela de inteligencia.",
    tecnica: "Interceptación de señales del DIH, satélites propios y ciberdefensa activa desde 2025.",
    enlaces: "Alianza con EE.UU., acuerdos de intercambio de información con Corea del Sur y con miembros de Cinco Ojos."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "1999–2000", n: "Shigehiro Hagisaki", h: "El oficial naval que vendió documentos", x: "Pasó documentos de la Fuerza Marítima a un agregado militar ruso.", cargo: "Oficial de la Fuerza Marítima de Autodefensa", hacia: "Inteligencia militar rusa (GRU)", fin: "Condenado en 2001.", who: "Justicia de Japón", u: "https://en.wikipedia.org/wiki/Japan%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desertor", dir: "entra", ev: 1, d: "1979", n: "Stanislav Levchenko", h: "El oficial de la KGB en Tokio", x: "Desertó a EE.UU. y reveló la red de agentes japoneses de la KGB, entre ellos políticos y periodistas.", cargo: "Oficial de la KGB con cobertura de periodista en Tokio", hacia: "EE.UU.", fin: "Vivió en EE.UU.; la URSS lo condenó a muerte en ausencia.", who: "Congreso de EE.UU. y prensa", u: "https://en.wikipedia.org/wiki/Stanislav_Levchenko", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 2, d: "2024–2025", n: "Empleado de una fábrica de máquinas", h: "Los secretos vendidos por 700.000 yenes", x: "Pasó dos veces datos de nuevas tecnologías a un ruso que se hacía pasar por ucraniano.", cargo: "Empleado de un fabricante de máquinas herramienta", hacia: "Servicio de Inteligencia Exterior de Rusia, según la policía", fin: "Enviado a la fiscalía en enero de 2026.", who: "Policía de Tokio", u: "https://www.scmp.com/week-asia/people/article/3342169/why-russian-spies-find-japan-such-easy-target-people-are-so-polite", st: "South China Morning Post" }
  ],
  leaks: [
    { k: "accidental", rol: "autor", ev: 1, d: "2010-10", h: "Los documentos sobre musulmanes", x: "Archivos de la policía de Tokio con datos personales de residentes musulmanes aparecen en internet.", obj: "Sin objetivo político conocido; expuso la vigilancia.", who: "Justicia de Japón", u: "https://en.wikipedia.org/wiki/Tokyo_Metropolitan_Police_Department", st: "Wikipedia (síntesis de fuentes)" },
    { k: "robo", rol: "blanco", ev: 2, d: "2024–2025", h: "Tecnología de máquinas herramienta", x: "Un agente ruso obtiene en Tokio datos de desarrollos industriales a cambio de efectivo.", obj: "Sortear las sanciones a la industria militar rusa.", who: "Policía de Tokio", u: "https://english.adnkronos.com/2026/01/20/ex-russian-official-referred-to-prosecutors-in-japan/", st: "Jiji Press, vía Adnkronos" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2020–2023", h: "Pruebas en Ohkawara Kakohki", x: "Investigadores alteraron declaraciones y ocultaron opiniones técnicas que favorecían a la empresa.", obj: "Sostener la acusación.", aquien: "Los tribunales y la defensa", como: "Declaraciones de policías ante el tribunal y el informe interno de 2025.", who: "Tribunal Superior de Tokio", u: "https://www.cbsnews.com/news/japan-police-apologize-grave-innocent-businessman-long-detention", st: "AP, vía CBS News" }
  ],
  practicas: {
    propios: { ev: 1, x: "La contrainteligencia detecta funcionarios y militares que venden documentos, como el caso de un oficial naval en 2000.", u: "https://en.wikipedia.org/wiki/Japan%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "La PSIA mantiene al Partido Comunista de Japón como objeto de investigación; el partido lo rechaza.", u: "https://en.wikipedia.org/wiki/Public_Security_Intelligence_Agency", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados de vigilancia de periodistas en la posguerra." },
    activistas: { ev: 1, x: "La policía registró datos de residentes musulmanes y de sus mezquitas, según documentos filtrados en 2010.", u: "https://en.wikipedia.org/wiki/Tokyo_Metropolitan_Police_Department", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "El DIH intercepta comunicaciones militares de China, Rusia y Corea del Norte.", u: "https://en.wikipedia.org/wiki/Defense_Intelligence_Headquarters", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "Oficiales del Ejército de Kwantung mataron en 1928 al jefe militar Zhang Zuolin.", u: "https://en.wikipedia.org/wiki/Huanggutun_incident", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 1, x: "El incidente de Mukden de 1931 fue un sabotaje propio atribuido a China.", u: "https://en.wikipedia.org/wiki/Mukden_incident", st: "Wikipedia (síntesis de fuentes)" },
    tortura: { ev: 1, x: "La policía política Tokko torturó a opositores antes de 1945; el escritor Takiji Kobayashi murió en una comisaría en 1933.", u: "https://en.wikipedia.org/wiki/Tokubetsu_K%C5%8Dt%C5%8D_Keisatsu", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 0, x: "Esta ficha no encontró secuestros documentados en la posguerra." },
    propaganda: { ev: 1, x: "Antes de 1945 los servicios militares hicieron propaganda en China y el sudeste asiático.", u: "https://en.wikipedia.org/wiki/Nakano_School", st: "Wikipedia (síntesis de fuentes)" },
    conflictos: { ev: 1, x: "Mukden fue usado para desatar la invasión de Manchuria.", u: "https://en.wikipedia.org/wiki/Mukden_incident", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados de influencia encubierta en la posguerra." },
    golpes: { ev: 1, x: "La inteligencia militar organizó el Estado títere de Manchukuo en 1932.", u: "https://en.wikipedia.org/wiki/Manchukuo", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 2, x: "El coronel Motojiro Akashi financió a revolucionarios rusos durante la guerra de 1904-1905.", u: "https://en.wikipedia.org/wiki/Akashi_Motojiro", st: "Wikipedia (síntesis de fuentes)" },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 1, x: "La PSIA vigila a las sucesoras de Aum Shinrikyo; la policía vigiló mezquitas.", u: "https://en.wikipedia.org/wiki/Public_Security_Intelligence_Agency", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas en la posguerra." },
    inteligencia: { ev: 1, x: "Comparte inteligencia militar con EE.UU. y con Corea del Sur por el acuerdo de 2016.", u: "https://en.wikipedia.org/wiki/General_Security_of_Military_Information_Agreement", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 1, x: "Antes de 1945 la Escuela de Nakano entrenó a nacionalistas de Asia, como el Ejército Nacional de Birmania.", u: "https://en.wikipedia.org/wiki/Nakano_School", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de inteligencia está repartido entre ministerios. Esta ficha no encontró una cifra total verificada.",
    uso: "Satélites, estaciones de interceptación, personal y análisis.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales en la posguerra.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2003–", h: "Los satélites de recolección", x: "El Gabinete financia desde 2003 una constelación de satélites espía, el mayor gasto conocido de su inteligencia.", obj: "Vigilar a Corea del Norte y China.", who: "Gobierno de Japón", u: "https://en.wikipedia.org/wiki/Information_Gathering_Satellite", st: "Wikipedia (síntesis de fuentes)" },
    { k: "cobertura", rol: "autor", ev: 2, d: "1904–1905", h: "Los fondos de Akashi", x: "El agregado militar Akashi repartió dinero entre revolucionarios y nacionalistas del Imperio ruso.", obj: "Debilitar a Rusia durante la guerra.", who: "Historiadores", u: "https://en.wikipedia.org/wiki/Akashi_Motojiro", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Ohkawara Kakohki", c: "nacional", rubro: "Maquinaria", rel: "Víctima", x: "Sus directivos fueron detenidos ilegalmente por la policía de seguridad pública." },
    { n: "Mitsubishi Electric", c: "nacional", rubro: "Defensa y satélites", rel: "Proveedor", x: "Fabrica los satélites de recolección de información." }
  ],
  struggles: [
    { a: "Gobierno de Takaichi", b: "Oposición y abogados", k: "Con la política", stake: "La ley contra el espionaje", state: "Abierta", x: "Críticos advierten sobre la vigilancia de ciudadanos; el gobierno dice que Japón es vulnerable." },
    { a: "NIB", b: "Ministerios", k: "Entre agencias", stake: "El control de la información", state: "Latente", x: "La reforma busca terminar con la compartimentación entre Defensa, Justicia, Exteriores y la policía." }
  ],
  sources: [
    { t: "UPI: nace la Oficina Nacional de Inteligencia (2026)", u: "https://www.upi.com/Top_News/World-News/2026/07/31/japan-national-intelligence-bureau-national-security/7451785540742/" },
    { t: "Al Jazeera: la nueva inteligencia japonesa", u: "https://www.aljazeera.com/amp/news/2026/7/13/what-is-japans-new-intelligence-agency-and-why-is-tokyo-building-it" },
    { t: "East Asia Forum: la reforma de Takaichi", u: "https://eastasiaforum.org/?p=2353501" },
    { t: "Jiji Press: caso del espía ruso (2026)", u: "https://english.adnkronos.com/2026/01/20/ex-russian-official-referred-to-prosecutors-in-japan/" },
    { t: "AP: disculpa por el caso Ohkawara Kakohki", u: "https://www.cbsnews.com/news/japan-police-apologize-grave-innocent-businessman-long-detention" },
    { t: "Wikipedia: Mukden incident", u: "https://en.wikipedia.org/wiki/Mukden_incident" }
  ]
};
