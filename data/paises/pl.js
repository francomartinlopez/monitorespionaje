// Ficha de Polonia · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["pl"] = {
  id: "pl",
  updated: "2026-11-15",
  summary: [
    "Polonia es el principal centro de tránsito de la ayuda occidental a Ucrania y uno de los blancos preferidos de la guerra híbrida rusa. Sus servicios son la Agencia de Inteligencia (AW), la Agencia de Seguridad Interior (ABW), los servicios militares de inteligencia (SWW) y contrainteligencia (SKW) y la Oficina Central Anticorrupción (CBA). Los coordina un ministro de servicios especiales, Tomasz Siemoniak.",
    "Desde 2022 la ABW desarmó decenas de redes reclutadas por Rusia, muchas por Telegram y con ciudadanos de terceros países. En noviembre de 2025 una explosión dañó la vía férrea entre Varsovia y Lublin; el primer ministro Donald Tusk atribuyó el sabotaje a dos ucranianos que trabajaban para la inteligencia rusa. En agosto de 2026 la ABW frustró un plan ruso para matar en Varsovia a un ciudadano ucraniano-estadounidense.",
    "Hacia adentro, el país discute el uso de Pegasus por el gobierno de Ley y Justicia (PiS). Según el fiscal general Adam Bodnar, el programa se usó contra 578 personas entre 2017 y 2022, entre ellas políticos de la oposición. En febrero de 2026 la fiscalía acusó a los ex jefes de la ABW y de la SKW; el ex ministro de Justicia Zbigniew Ziobro recibió asilo en Hungría."
  ],
  keyFacts: [
    { l: "Personas espiadas con Pegasus", v: "578", n: "entre 2017 y 2022, según el fiscal general (2024)" },
    { l: "Detenidos por sabotaje", v: "23", n: "en causas vinculadas a Rusia, según Tusk (nov. 2025)" },
    { l: "Ex jefes acusados", v: "ABW, SKW y CBA", n: "por el uso de Pegasus (2026)" },
    { l: "Ministro coordinador", v: "Tomasz Siemoniak", n: "servicios especiales" }
  ],
  power: { humana: 3, senales: 3, ciber: 3, imagenes: 2, encubierta: 2, contra: 4 },
  powerWhy: {
    humana: "Buen conocimiento de Rusia, Bielorrusia y Ucrania; la AW tiene historia de operaciones osadas como Samum.",
    senales: "Capacidades propias moderadas, reforzadas por la cooperación con EE.UU. y la OTAN.",
    ciber: "Comando de ciberdefensa en expansión ante ataques rusos constantes.",
    imagenes: "Satélites propios recientes y acceso a imágenes aliadas.",
    encubierta: "Albergó un centro secreto de la CIA; no hay operaciones encubiertas propias recientes documentadas.",
    contra: "Desarticuló decenas de redes rusas desde 2022, aunque no evitó varios sabotajes."
  },
  priorities: [
    { h: "Rusia", x: "Sabotaje, espionaje, reclutamiento por Telegram y guerra híbrida." },
    { h: "Bielorrusia", x: "Presión migratoria en la frontera y servicios al servicio de Moscú." },
    { h: "Ucrania", x: "Proteger las rutas de ayuda militar." },
    { h: "Infraestructura", x: "Vías férreas, energía y depósitos." },
    { h: "Reforma interna", x: "Rendición de cuentas por Pegasus y control de los servicios." }
  ],
  focos: ["Rusia", "Bielorrusia", "Ucrania", "Sabotaje", "Pegasus"],
  bodies: {
    "Colegio": { since: 2002, how: "Colegio de Servicios Especiales del Consejo de Ministros, que coordina a los servicios. El ministro coordinador lo encabeza en la práctica.", staff: "No se publica.", budget: "Dentro del gobierno.", tech: [], where: ["Varsovia"] },
    "AW": { since: 2002, how: "Agencia de Inteligencia: inteligencia exterior civil, nacida de la división de la antigua Oficina de Protección del Estado.", staff: "No se publica.", budget: "Público en el presupuesto, sin detalle.", tech: [], where: ["Varsovia", "Embajadas"] },
    "SWW": { since: 2006, how: "Servicio de Inteligencia Militar, creado al disolverse los servicios militares heredados del comunismo.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Varsovia"] },
    "SKW": { since: 2006, how: "Servicio de Contrainteligencia Militar: protege a las Fuerzas Armadas del espionaje. Su ex jefe fue acusado por el uso de Pegasus.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Varsovia"] },
    "ABW": { since: 2002, how: "Agencia de Seguridad Interior: contraespionaje, antiterrorismo y protección del Estado. Lidera las causas contra las redes rusas de sabotaje.", staff: "No se publica.", budget: "Público en el presupuesto, sin detalle.", tech: ["Escuchas con orden judicial"], where: ["Varsovia", "Delegaciones regionales"] },
    "CBA": { since: 2006, how: "Oficina Central Anticorrupción, con facultades de vigilancia. Compró Pegasus en 2017; el gobierno actual anunció su disolución.", staff: "No se publica.", budget: "Público en el presupuesto.", tech: ["Pegasus (2017-2022)"], where: ["Varsovia"] }
  },
  civil: [
    "El primer ministro controla los servicios a través de un ministro coordinador.",
    "Los tribunales autorizan las escuchas, pero en el caso Pegasus los jueces no sabían qué programa se usaba, según la fiscalía.",
    "En 2015 el gobierno del PiS ocupó de noche un centro de contrainteligencia de la OTAN en Varsovia para reemplazar a su dirección."
  ],
  law: {
    domestic: [
      "La ley de la ABW y la AW de 2002 regula su funcionamiento.",
      "La ley antiterrorista de 2016 amplió la vigilancia de extranjeros sin orden judicial previa.",
      "Las reformas de 2023 endurecieron las penas por espionaje y sabotaje."
    ],
    foreign: [
      "La AW y el SWW actúan en el exterior; las operaciones no se detallan en público."
    ],
    oversight: [
      "Comisión de Servicios Especiales del Sejm.",
      "Comisión parlamentaria de investigación sobre Pegasus, creada en 2024.",
      "Tribunales, que autorizan las escuchas."
    ]
  },
  rights: [
    { d: "1990-04", dir: "recorta", area: "Debido proceso", h: "Disolución de la policía política", x: "Se disuelve el Servicio de Seguridad comunista y nace la Oficina de Protección del Estado." },
    { d: "2016-06", dir: "amplia", area: "Privacidad", h: "Ley antiterrorista", x: "Permite vigilar a extranjeros hasta tres meses sin orden judicial." },
    { d: "2017", dir: "amplia", area: "Privacidad", h: "Compra de Pegasus", x: "La CBA adquiere el programa espía con dinero de un fondo para víctimas de delitos." },
    { d: "2024-02", dir: "recorta", area: "Privacidad", h: "Comisión sobre Pegasus", x: "El Parlamento investiga el uso del programa y la fiscalía notifica a las víctimas." }
  ],
  events: [
    { d: "1990-09", lat: 33.3, lon: 44.4, c: "Iraq", t: "humana", ev: 1, h: "Operación Samum", x: "Oficiales polacos sacan de Irak a seis agentes de la CIA atrapados tras la invasión de Kuwait.", u: "https://en.wikipedia.org/wiki/Operation_Samum", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2002-12", lat: 53.65, lon: 21.07, c: "Poland", t: "encubierta", ev: 1, h: "Centro secreto de la CIA", x: "La CIA interroga a detenidos de Al Qaeda en una base de inteligencia en Stare Kiejkuty; el Tribunal Europeo condenó a Polonia en 2014.", u: "https://en.wikipedia.org/wiki/Stare_Kiejkuty", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2022-02-28", lat: 49.8, lon: 22.7, c: "Poland", t: "contra", ev: 1, h: "Detienen a Pablo González", x: "La ABW detiene en Przemyśl a un periodista hispano-ruso acusado de trabajar para la inteligencia militar rusa; fue canjeado en 2024.", u: "https://en.wikipedia.org/wiki/Pavel_Rubtsov", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-05-12", lat: 52.32, lon: 20.98, c: "Poland", t: "sabotaje", ev: 2, h: "Incendio de Marywilska", x: "Un incendio destruye un gran centro comercial de Varsovia; Tusk lo atribuyó en 2025 a servicios rusos.", u: "https://notesfrompoland.com/2025/05/12/poland-confirms-russia-behind-fire-that-destroyed-warsaws-biggest-shopping-centre/", st: "Notes from Poland" },
    { d: "2025-11-16", lat: 51.85, lon: 21.6, c: "Poland", t: "sabotaje", ev: 2, h: "Explosión en la vía Varsovia-Lublin", x: "Una carga militar daña la vía usada para enviar ayuda a Ucrania; Tusk acusó a dos ucranianos al servicio de la inteligencia rusa.", u: "https://www.thestar.com.my/news/world/2025/11/18/polish-pm-says-two-responsible-for-railway-blast-worked-for-russian-intelligence", st: "Reuters, vía The Star" },
    { d: "2026-08", lat: 52.24, lon: 21.02, c: "Poland", t: "contra", ev: 2, h: "Plan para matar a un disidente", x: "La ABW detiene a un ruso acusado de planear el asesinato de un ciudadano ucraniano-estadounidense por orden de Moscú.", u: "https://www.euronews.com/my-europe/2026/08/13/poland-thwarts-unprecedented-plot-by-russia-to-kill-ukrainian-us-citizen-in-a-nato-country", st: "Euronews" }
  ],
  interest: {
    "Russia": 3, "Belarus": 3, "Ukraine": 3, "Lithuania": 2, "Germany": 1, "United States of America": 1, "China": 1
  },
  timeline: [
    { era: "Comunismo", d: "1944–1990", h: "La policía política", x: "El Ministerio de Seguridad Pública y luego el Servicio de Seguridad persiguen a la oposición.", ctx: "Régimen comunista bajo órbita soviética." },
    { era: "Democracia", d: "1990", h: "Operación Samum", x: "La nueva inteligencia polaca rescata a agentes de la CIA en Irak.", ctx: "Caída del comunismo y primera guerra del Golfo." },
    { era: "", d: "2002–2003", h: "Centro secreto de la CIA", x: "Detenidos de Al Qaeda son interrogados en suelo polaco.", ctx: "Guerra contra el terrorismo de EE.UU." },
    { era: "", d: "2006", h: "Disolución de los servicios militares", x: "Se crean el SWW y la SKW tras un informe sobre los viejos servicios.", ctx: "Gobierno de Ley y Justicia." },
    { era: "", d: "2017–2022", h: "Pegasus", x: "La CBA usa el programa espía contra opositores, según la fiscalía actual.", ctx: "Segundo gobierno de Ley y Justicia." },
    { era: "Actual", d: "2022–2026", h: "Guerra híbrida rusa", x: "Sabotajes, incendios, redes de reclutamiento y acusaciones por Pegasus.", now: true, ctx: "Invasión rusa de Ucrania." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2017–2022", h: "Pegasus contra la oposición", x: "Citizen Lab confirmó infecciones de Pegasus en teléfonos del senador Krzysztof Brejza, el abogado Roman Giertych y la fiscal Ewa Wrzosek. El fiscal general informó 578 personas vigiladas. En 2026 fueron acusados los ex jefes de la ABW, la SKW y la CBA por abuso de funciones.", who: "Fiscalía Nacional de Polonia y Citizen Lab", missing: "", u: "https://www.aljazeera.com/news/2026/2/25/poland-charges-ex-intel-chiefs-for-using-israels-pegasus-spyware", st: "Al Jazeera" },
    { ev: 1, ilegal: true, d: "2002–2003", h: "El centro secreto de la CIA", x: "El Tribunal Europeo de Derechos Humanos concluyó en 2014 que Polonia permitió a la CIA detener y torturar en su territorio a sospechosos de terrorismo. Polonia pagó indemnizaciones.", who: "Tribunal Europeo de Derechos Humanos", missing: "", u: "https://en.wikipedia.org/wiki/Stare_Kiejkuty", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2025-11", h: "El sabotaje ferroviario", x: "Una explosión dañó la vía entre Varsovia y Lublin y otra acción afectó el cableado de la misma línea. El gobierno atribuyó los hechos a dos ucranianos que trabajaban para la inteligencia rusa y huyeron a Bielorrusia. Rusia lo niega.", who: "Gobierno de Polonia", missing: "Un juicio; los acusados están prófugos.", u: "https://www.themoscowtimes.com/2025/11/18/poland-says-2-ukrainians-working-for-russia-suspected-in-railway-sabotage-a91163/pdf", st: "AFP, vía The Moscow Times" }
  ],
  failures: [
    { k: "falla", d: "2025-11", ev: 2, w: 2, h: "Sabotaje en la ruta a Ucrania", x: "Pese a decenas de detenciones, una carga explotó en la línea férrea más sensible del país.", why: "La autoría rusa la afirma el gobierno; los autores huyeron.", wx: "Declaraciones oficiales; sin juicio.", who: "Gobierno de Polonia", u: "https://www.thestar.com.my/news/world/2025/11/18/polish-pm-says-two-responsible-for-railway-blast-worked-for-russian-intelligence", st: "Reuters, vía The Star" },
    { k: "falla", d: "2024-05", ev: 1, w: 3, h: "El juez que se pasó a Bielorrusia", x: "Un juez con acceso a información clasificada pidió asilo en Minsk sin que los servicios lo detectaran.", why: "No está en duda; el propio juez apareció en Minsk.", wx: "Hechos públicos y causa por espionaje.", who: "Gobierno de Polonia", u: "https://en.wikipedia.org/wiki/Tomasz_Szmydt", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "La AW trabaja desde embajadas; Polonia cerró consulados rusos en respuesta a los sabotajes.",
    campo: "Agentes y fuentes en Bielorrusia, Rusia y Ucrania; en 1990 la AW sacó a agentes de la CIA de Irak.",
    oficina: "La ABW concentra las causas de sabotaje y el ministro coordinador informa al Parlamento.",
    reclutamiento: "Recluta por concurso; en el pasado los servicios militares cargaron con personal formado en la era comunista.",
    tecnica: "Escuchas judiciales, vigilancia de Telegram y programas espía como Pegasus entre 2017 y 2022.",
    enlaces: "Estrecha relación con la CIA y los servicios de la OTAN; cooperación con Ucrania y los países bálticos."
  },
  insiders: [
    { k: "desertor", dir: "sale", ev: 1, d: "2024-05", n: "Tomasz Szmydt", h: "El juez que pidió asilo en Minsk", x: "Juez con acceso a información clasificada que huyó a Bielorrusia; la fiscalía lo acusó de espionaje.", cargo: "Juez del Tribunal Administrativo de Varsovia", hacia: "Bielorrusia y Rusia, según la fiscalía", fin: "Vive en Minsk; acusado en ausencia.", who: "Fiscalía de Polonia", u: "https://en.wikipedia.org/wiki/Tomasz_Szmydt", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 2, d: "2016–2022", n: "Pablo González (Pavel Rubtsov)", h: "El periodista de la inteligencia rusa", x: "Detenido en la frontera con Ucrania; Polonia lo acusó de reunir información para el GRU.", cargo: "Periodista independiente", hacia: "Inteligencia militar rusa (GRU)", fin: "Canjeado en agosto de 2024 y recibido por Putin en Moscú.", who: "ABW y fiscalía de Polonia", u: "https://en.wikipedia.org/wiki/Pavel_Rubtsov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2017–2023", h: "Pegasus ante los jueces", x: "Los pedidos de escuchas no decían que se usaría Pegasus, según la fiscalía actual.", obj: "Usar el programa sin un control efectivo.", aquien: "Los tribunales y el Parlamento", como: "Citizen Lab, la comisión parlamentaria y la investigación de la fiscalía.", who: "Fiscalía Nacional de Polonia", u: "https://brusselssignal.eu/2026/10/prosecutors-say-israeli-firm-had-access-to-polish-pegasus-data/", st: "Brussels Signal" },
    { k: "robo", rol: "blanco", ev: 2, d: "2017–2022", h: "Datos de Pegasus", x: "La fiscalía sostiene que la CBA no controlaba del todo el sistema y que la empresa israelí pudo acceder a datos; el ex jefe de la CBA lo niega.", obj: "No determinado.", who: "Fiscalía Nacional de Polonia", u: "https://brusselssignal.eu/2026/10/prosecutors-say-israeli-firm-had-access-to-polish-pegasus-data/", st: "Brussels Signal" }
  ],
  practicas: {
    propios: { ev: 1, x: "Pegasus se usó contra una fiscal y otros funcionarios críticos del gobierno anterior.", u: "https://www.aljazeera.com/news/2026/2/25/poland-charges-ex-intel-chiefs-for-using-israels-pegasus-spyware", st: "Al Jazeera" },
    politicos: { ev: 1, x: "El senador opositor Krzysztof Brejza fue infectado durante la campaña de 2019, según Citizen Lab.", u: "https://brusselssignal.eu/2026/10/prosecutors-say-israeli-firm-had-access-to-polish-pegasus-data/", st: "Brussels Signal" },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados con prueba técnica." },
    activistas: { ev: 2, x: "Entre los 578 vigilados con Pegasus hay figuras de la sociedad civil, según el fiscal general.", u: "https://keyt.com/?p=1062991", st: "AP, vía KEYT" },
    aliados: { ev: 1, x: "En 2015 el gobierno ocupó de noche un centro de contrainteligencia de la OTAN en Varsovia.", u: "https://en.wikipedia.org/wiki/Antoni_Macierewicz", st: "Wikipedia (síntesis de fuentes)" },
    rivales: { ev: 1, x: "Rusia y Bielorrusia son los blancos centrales de su inteligencia y contrainteligencia.", u: "https://www.npr.org/2026/02/18/nx-s1-5702706/russia-hybrid-warfare-poland", st: "NPR" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró sabotajes polacos documentados; Polonia es blanco de sabotajes rusos." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "Permitió que la CIA torturara a detenidos en su territorio, según el Tribunal Europeo.", u: "https://en.wikipedia.org/wiki/Stare_Kiejkuty", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Colaboró con los traslados secretos de detenidos de la CIA.", u: "https://en.wikipedia.org/wiki/Stare_Kiejkuty", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 1, x: "Es el principal corredor de armas occidentales hacia Ucrania, una tarea abierta con apoyo de los servicios.", u: "https://www.npr.org/2026/02/18/nx-s1-5702706/russia-hybrid-warfare-poland", st: "NPR" },
    inteligencia: { ev: 1, x: "En 1990 rescató a agentes de la CIA en Irak a cambio de apoyo estadounidense.", u: "https://en.wikipedia.org/wiki/Operation_Samum", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos de los servicios figuran en la ley de presupuesto sin detalle de gastos. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Contraespionaje, ciberdefensa, personal y operaciones.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Pegasus se pagó con dinero del Fondo de Justicia, destinado a víctimas de delitos, según la fiscalía y la auditoría estatal."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 2, d: "2017", h: "Pegasus con el fondo de víctimas", x: "Unos 25 millones de zlotys del Fondo de Justicia, creado para ayudar a víctimas de delitos, se usaron para comprar Pegasus, según el ex presidente de la auditoría estatal.", monto: "Unos 25 millones de zlotys", obj: "Comprar un programa espía fuera del presupuesto de los servicios.", who: "Fiscalía y Oficina Suprema de Auditoría", u: "https://www.jpost.com/international/article-794793", st: "The Jerusalem Post" },
    { k: "presupuesto", rol: "autor", ev: 1, d: "2002–2003", h: "Pagos de la CIA", x: "La CIA pagó a Polonia por el uso de sus instalaciones para interrogar detenidos, según investigaciones de prensa y del Senado de EE.UU.", obj: "Cooperación con EE.UU.", who: "Senado de EE.UU. y prensa", u: "https://en.wikipedia.org/wiki/Stare_Kiejkuty", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Vendió Pegasus a la CBA en 2017." }
  ],
  struggles: [
    { a: "Gobierno de Tusk", b: "Ley y Justicia (PiS)", k: "Con la política", stake: "Pegasus y el control de los servicios", state: "Abierta", x: "Acusaciones a ex jefes de los servicios y a Ziobro, asilado en Hungría." },
    { a: "Gobierno", b: "CBA", k: "Entre agencias", stake: "La disolución de la oficina anticorrupción", state: "Abierta", x: "El gobierno quiere disolverla por su papel político." }
  ],
  proxies: [
  ],
  doctrina: [{"h": "Frente oriental", "x": "Contraespionaje y defensa contra sabotajes de Rusia y Bielorrusia."}],
  cuentas: {"n": 2, "x": "Comisión parlamentaria sobre Pegasus y causas en curso."},
  sources: [
    { t: "Al Jazeera: acusan a ex jefes de inteligencia por Pegasus (2026)", u: "https://www.aljazeera.com/news/2026/2/25/poland-charges-ex-intel-chiefs-for-using-israels-pegasus-spyware" },
    { t: "Reuters: el sabotaje ferroviario", u: "https://www.thestar.com.my/news/world/2025/11/18/polish-pm-says-two-responsible-for-railway-blast-worked-for-russian-intelligence" },
    { t: "Euronews: el plan ruso de asesinato (2026)", u: "https://www.euronews.com/my-europe/2026/08/13/poland-thwarts-unprecedented-plot-by-russia-to-kill-ukrainian-us-citizen-in-a-nato-country" },
    { t: "NPR: la guerra híbrida rusa en Polonia", u: "https://www.npr.org/2026/02/18/nx-s1-5702706/russia-hybrid-warfare-poland" },
    { t: "AP: 578 personas vigiladas con Pegasus", u: "https://keyt.com/?p=1062991" }
  ]
};
