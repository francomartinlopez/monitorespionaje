// Ficha de Corea del Sur · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["kr"] = {
  id: "kr",
  updated: "2026-11-15",
  summary: [
    "El Servicio Nacional de Inteligencia (NIS) es el principal servicio de Corea del Sur. Heredero de la Agencia Central de Inteligencia de Corea (KCIA) de la dictadura, se ocupa sobre todo de Corea del Norte. Desde junio de 2025 lo dirige Lee Jong-seok, ex ministro de Unificación, al que la oposición acusa de ser blando con Pyongyang.",
    "La historia del servicio está marcada por el uso político: según el propio director, la mitad de sus 16 ex jefes fue a prisión por escuchas ilegales, manipulación de la opinión en internet o el plan de ley marcial. En 2012 agentes del NIS publicaron comentarios en internet a favor de la candidata oficialista, y su jefe fue condenado.",
    "La ley marcial de diciembre de 2024 provocó la mayor reforma en décadas. En junio de 2026 un tribunal condenó en primera instancia al ex presidente Yoon Suk Yeol a 30 años y al jefe de la contrainteligencia militar a 15 por enviar drones sobre Pyongyang para justificar la ley marcial. En agosto de 2026 el gobierno disolvió el Comando de Contrainteligencia de Defensa y repartió sus funciones en tres organismos."
  ],
  keyFacts: [
    { l: "Director del NIS", v: "Lee Jong-seok", n: "desde junio de 2025" },
    { l: "Ex jefes presos", v: "8 de 16", n: "según el director del NIS" },
    { l: "Comando de contrainteligencia", v: "Disuelto", n: "3 ago 2026, tras 49 años" },
    { l: "Agentes expuestos", v: "Lista de agentes encubiertos", n: "filtrada a un ciudadano chino; condena de 20 años" }
  ],
  power: { humana: 3, senales: 4, ciber: 4, imagenes: 3, encubierta: 2, contra: 3 },
  powerWhy: {
    humana: "Redes de agentes en China y Rusia dedicadas a Corea del Norte, dañadas por la filtración de 2024.",
    senales: "Interceptación avanzada con apoyo de EE.UU. y estaciones en la frontera.",
    ciber: "Capacidad técnica alta; el NIS compró herramientas de hackeo de la empresa italiana Hacking Team en 2012.",
    imagenes: "Satélites militares propios desde 2023 y acceso a imágenes de EE.UU.",
    encubierta: "Pocas operaciones encubiertas en el exterior en democracia; la principal fue ilegal y para fines internos.",
    contra: "Detecta redes norcoreanas, pero en 2024 no evitó la filtración de su lista de agentes encubiertos."
  },
  priorities: [
    { h: "Corea del Norte", x: "Programa nuclear, misiles, sucesión y tropas en Rusia." },
    { h: "China", x: "Espionaje chino y robo de tecnología." },
    { h: "Robo de tecnología", x: "Proteger semiconductores, baterías y defensa." },
    { h: "Reforma interna", x: "Despolitizar los servicios después de la ley marcial." },
    { h: "Alianza con EE.UU.", x: "Mantener la cooperación pese a las tensiones de 2026." }
  ],
  focos: ["Corea del Norte", "China", "Rusia", "Japón", "Robo de tecnología"],
  bodies: {
    "NSO": { since: 2013, how: "Oficina de Seguridad Nacional de la Presidencia, que coordina defensa, diplomacia e inteligencia. Su ex jefe fue investigado por el caso de la ley marcial.", staff: "No se publica.", budget: "Dentro de la Presidencia.", tech: [], where: ["Seúl"] },
    "NIS": { since: 1961, how: "Servicio Nacional de Inteligencia: inteligencia exterior, asuntos de Corea del Norte, contraterrorismo y ciberseguridad. Desde 2024 ya no investiga casos de espionaje, que pasaron a la policía.", staff: "No se publica.", budget: "Parcialmente secreto; los gastos de actividades especiales no se detallan.", tech: ["Interceptación", "Ciberinteligencia"], where: ["Seúl", "Embajadas"] },
    "DCA": { since: 2026, how: "Agencia de Contrainteligencia de Defensa, creada en agosto de 2026 al disolverse el Comando de Contrainteligencia de Defensa. Contraespionaje militar, protección de tecnología de defensa y antiterrorismo; tiene prohibido vigilar la actividad de los militares.", staff: "Un tercio menos que el comando anterior, según el gobierno.", budget: "Dentro de Defensa.", tech: [], where: ["Gwacheon"] },
    "KDIC": { since: 1990, how: "Comando de Inteligencia de Defensa: inteligencia humana militar, con agentes encubiertos en China y otros países dedicados a Corea del Norte.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Agentes encubiertos"], where: ["Seúl", "China", "Rusia"] },
    "KDIA": { since: 1981, how: "Agencia de Inteligencia de Defensa: inteligencia de señales e imágenes militares, con satélites propios.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Satélites", "Interceptación militar"], where: ["Seúl"] },
    "KNPA": { since: 1991, how: "La policía nacional investiga los casos de espionaje desde 2024, cuando recibió la facultad que tenía el NIS.", staff: "No se publica.", budget: "Dentro del gobierno.", tech: [], where: ["Todo el país"] }
  },
  civil: [
    "El presidente nombra al director del NIS con audiencia en la Asamblea, que no puede vetarlo.",
    "En 2020 una reforma prohibió al NIS reunir información de política interna.",
    "En 2026 el Ministerio de Defensa prohibió por decreto a la contrainteligencia militar vigilar la actividad de los militares."
  ],
  law: {
    domestic: [
      "La Ley de Seguridad Nacional de 1948 castiga el apoyo a Corea del Norte; organismos de la ONU piden reformarla.",
      "La ley del NIS de 2020 le quitó la investigación de espionaje desde 2024 y prohibió su intervención política.",
      "La ley antiterrorista de 2016 permite al NIS rastrear datos personales y financieros de sospechosos."
    ],
    foreign: [
      "El NIS puede operar en el exterior; no hay normas públicas detalladas sobre operaciones encubiertas."
    ],
    oversight: [
      "Comisión de Inteligencia de la Asamblea Nacional, con sesiones secretas.",
      "Tribunales que condenaron a varios ex directores del NIS.",
      "Fiscales especiales para el caso de la ley marcial."
    ]
  },
  rights: [
    { d: "1961-06", dir: "amplia", area: "Debido proceso", h: "Nace la KCIA", x: "Tras el golpe de Park Chung-hee, el servicio vigila, detiene y tortura a opositores." },
    { d: "2016-03", dir: "amplia", area: "Privacidad", h: "Ley antiterrorista", x: "Permite al NIS acceder a datos de comunicaciones y financieros de sospechosos." },
    { d: "2020-12", dir: "recorta", area: "Debido proceso", h: "Reforma del NIS", x: "Prohíbe la intervención política y le quita la investigación de espionaje desde 2024." },
    { d: "2024-01", dir: "recorta", area: "Debido proceso", h: "La policía investiga el espionaje", x: "Se completa el traspaso de la facultad del NIS a la policía, la primera vez en 63 años." },
    { d: "2026-08", dir: "recorta", area: "Privacidad", h: "Disolución del comando de contrainteligencia", x: "El nuevo organismo tiene prohibido vigilar la actividad de los militares." }
  ],
  events: [
    { d: "1973-08-08", lat: 35.69, lon: 139.7, c: "Japan", t: "encubierta", ev: 1, h: "Secuestro de Kim Dae-jung", x: "Agentes de la KCIA secuestran en Tokio al opositor y futuro presidente; lo liberan días después en Seúl.", u: "https://en.wikipedia.org/wiki/Kim_Dae-jung", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1979-10-26", lat: 37.58, lon: 126.97, c: "South Korea", t: "encubierta", ev: 1, h: "El jefe de la KCIA mata al presidente", x: "Kim Jae-gyu asesina al presidente Park Chung-hee durante una cena; fue ejecutado en 1980.", u: "https://en.wikipedia.org/wiki/Assassination_of_Park_Chung_Hee", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2012-12", lat: 37.5, lon: 127.05, c: "South Korea", t: "ciber", ev: 1, h: "Comentarios del NIS en la elección", x: "Agentes publican en internet mensajes a favor de la candidata oficialista; el director Won Sei-hoon fue condenado.", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-06", lat: 37.45, lon: 126.95, c: "South Korea", t: "contra", ev: 1, h: "Filtración de agentes encubiertos", x: "Se descubre que un empleado del Comando de Inteligencia de Defensa entregó la lista de agentes encubiertos a un ciudadano chino.", u: "https://www.koreatimes.co.kr/www/nation/2024/08/113_380072.html", st: "The Korea Times" },
    { d: "2024-10", lat: 39.03, lon: 125.75, c: "North Korea", t: "encubierta", ev: 1, h: "Drones sobre Pyongyang", x: "Drones militares surcoreanos tiran volantes sobre Pyongyang; un tribunal concluyó en 2026 que buscaban provocar a Corea del Norte para justificar la ley marcial.", u: "https://www.koreatimes.co.kr/southkorea/law-crime/20260612/ex-president-yoon-sentenced-to-30-yrs-in-prison-in-drone-infiltration-case", st: "Yonhap, vía The Korea Times" },
    { d: "2024-12-03", lat: 37.53, lon: 126.92, c: "South Korea", t: "contra", ev: 1, h: "La ley marcial", x: "Yoon declara la ley marcial; el comando de contrainteligencia militar recibe la orden de detener a dirigentes políticos y el Parlamento la anula en horas.", u: "https://biz.heraldcorp.com/article/10853694", st: "The Korea Herald" }
  ],
  interest: {
    "North Korea": 3, "China": 3, "Russia": 2, "Japan": 2, "United States of America": 2, "Ukraine": 1, "Taiwan": 1, "Vietnam": 1, "Mongolia": 1
  },
  timeline: [
    { era: "Dictadura", d: "1961", h: "Nace la KCIA", x: "Creada por Kim Jong-pil tras el golpe de Park Chung-hee." },
    { era: "", d: "1973", h: "Secuestro de Kim Dae-jung", x: "Operación de la KCIA en Tokio contra el principal opositor." },
    { era: "", d: "1976–1978", h: "Koreagate", x: "La KCIA soborna a legisladores de EE.UU. a través de un empresario." },
    { era: "", d: "1979", h: "Asesinato de Park", x: "El jefe de la KCIA mata al presidente." },
    { era: "Democracia", d: "1999", h: "Nace el NIS", x: "Kim Dae-jung, víctima de la KCIA, da al servicio su nombre actual." },
    { era: "", d: "2012–2017", h: "Escándalos de los directores", x: "Comentarios electorales, fondos para la Presidencia y escuchas." },
    { era: "Actual", d: "2024–2026", h: "Ley marcial y reforma", x: "Condenas por los drones, disolución del comando militar y tensiones con EE.UU.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2012", h: "Los comentarios del NIS en la elección", x: "Un equipo del NIS publicó miles de mensajes en internet a favor de Park Geun-hye y contra la oposición antes de la elección presidencial. El director Won Sei-hoon fue condenado por violar la ley electoral y la ley del NIS.", who: "Justicia de Corea del Sur", missing: "", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2024", h: "Los drones sobre Pyongyang", x: "Un tribunal de Seúl condenó en junio de 2026 al ex presidente Yoon a 30 años y al ex jefe de la contrainteligencia militar Yeo In-hyung a 15. Concluyó que enviaron drones sobre Pyongyang para provocar una reacción que justificara la ley marcial. Es una condena de primera instancia.", who: "Tribunal del distrito central de Seúl", missing: "", u: "https://www.koreatimes.co.kr/southkorea/law-crime/20260612/ex-president-yoon-sentenced-to-30-yrs-in-prison-in-drone-infiltration-case", st: "Yonhap, vía The Korea Times" },
    { ev: 1, ilegal: true, d: "1973", h: "El secuestro de Kim Dae-jung", x: "Agentes de la KCIA secuestraron al opositor en un hotel de Tokio y lo trasladaron en barco a Corea. El NIS reconoció en 2007 la participación del servicio.", who: "Comisión de la verdad del NIS", missing: "", u: "https://en.wikipedia.org/wiki/Kim_Dae-jung", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2013–2023", h: "Sue Mi Terry", x: "La fiscalía de EE.UU. acusó a la ex analista de la CIA de actuar como agente no registrada del NIS a cambio de regalos de lujo y dinero para su centro de estudios. En octubre de 2026 la fiscalía suspendió la causa con un acuerdo; ella negó los cargos.", who: "Fiscalía federal de Nueva York", missing: "Un juicio; el acuerdo evitó la sentencia.", u: "https://koreatimes.co.kr/world/20261014/us-to-drop-s-korea-intelligence-case-against-ex-cia-analyst", st: "Reuters, vía The Korea Times" },
    { ev: 1, ilegal: true, d: "2013", h: "La prueba falsa contra Yoo Woo-sung", x: "Agentes del NIS falsificaron documentos chinos para acusar de espionaje a un ex funcionario de Seúl nacido en Corea del Norte. Fue absuelto y los agentes, condenados.", who: "Justicia de Corea del Sur", missing: "", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 4, ilegal: false, d: "2020–", h: "El fraude electoral de 2020", x: "Sectores de la derecha sostienen que las elecciones legislativas de 2020 fueron fraudulentas; Yoon envió tropas a la comisión electoral durante la ley marcial.", who: "Grupos de derecha y Yoon Suk Yeol", missing: "Cualquier prueba de fraude.", debunk: "Los tribunales rechazaron todas las demandas por fraude y los recuentos confirmaron los resultados.", u: "https://biz.heraldcorp.com/article/10853694", st: "The Korea Herald" }
  ],
  failures: [
    { k: "falla", d: "2011-12", ev: 1, w: 3, h: "La muerte de Kim Jong-il", x: "El NIS se enteró por la televisión norcoreana, dos días después de la muerte.", why: "No está en duda; lo admitió el propio director ante la Asamblea.", wx: "Declaraciones oficiales.", who: "Director del NIS", u: "https://en.wikipedia.org/wiki/Death_and_state_funeral_of_Kim_Jong_Il", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2024", ev: 1, w: 3, h: "La filtración de agentes encubiertos", x: "Un empleado vendió durante años datos de agentes a un ciudadano chino; varios agentes tuvieron que volver al país.", why: "No está en duda; hubo condena firme.", wx: "Condena de 20 años confirmada en 2026.", who: "Justicia militar", u: "https://cm.asiae.co.kr/en/article/2026012012211302096", st: "Asia Economy" }
  ],
  modus: {
    embajadas: "El NIS tiene oficiales en embajadas; en EE.UU. trabajaban con cobertura diplomática y cultivaban a expertos, según la acusación contra Sue Mi Terry.",
    campo: "Agentes encubiertos en China, Rusia y el sudeste asiático, haciéndose pasar por empresarios, siguen a Corea del Norte.",
    oficina: "La sede de Seúl produce evaluaciones sobre Corea del Norte que el director presenta a la Asamblea en sesiones informativas.",
    reclutamiento: "Recluta por concurso; desertores norcoreanos son fuente clave de información.",
    tecnica: "Interceptación, satélites militares y herramientas de hackeo compradas a empresas extranjeras.",
    enlaces: "Alianza estrecha con la CIA; cooperación con Japón desde el acuerdo de 2016 y con Ucrania sobre las tropas norcoreanas en Rusia."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "2017–2024", n: "Empleado civil del KDIC", h: "El que vendió la lista", x: "Pasó documentos y mensajes con datos de agentes encubiertos a un ciudadano chino a cambio de dinero.", cargo: "Comando de Inteligencia de Defensa", hacia: "Un ciudadano chino de origen coreano, posible informante de Corea del Norte o de China", fin: "Condenado a 20 años; sentencia firme en 2026.", who: "Justicia militar", u: "https://cm.asiae.co.kr/en/article/2026012012211302096", st: "Asia Economy" },
    { k: "topo", dir: "entra", ev: 2, d: "2013–2023", n: "Sue Mi Terry", h: "La ex analista de la CIA", x: "Según la fiscalía de EE.UU., dio información y acceso a oficiales del NIS a cambio de regalos.", cargo: "Ex analista de la CIA y del Consejo de Seguridad Nacional", hacia: "NIS", fin: "Causa suspendida en 2026 por un acuerdo con la fiscalía.", who: "Fiscalía federal de Nueva York", u: "https://justice.gov/opa/pr/former-cia-and-white-house-official-sue-mi-terry-arrested-acting-unregistered-agent-south", st: "Departamento de Justicia de EE.UU." },
    { k: "desertor", dir: "sale", ev: 1, d: "1973", n: "Kim Hyong-uk", h: "El ex jefe de la KCIA que habló", x: "Ex director de la KCIA que se exilió en EE.UU. y declaró ante el Congreso contra el régimen de Park.", cargo: "Director de la KCIA (1963-1969)", hacia: "Congreso de EE.UU.", fin: "Desapareció en París en 1979; investigaciones posteriores apuntaron a la KCIA.", who: "Comisión de la verdad del NIS y prensa", u: "https://en.wikipedia.org/wiki/Kim_Hyong-uk", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "robo", rol: "blanco", ev: 1, d: "2017–2024", h: "La lista de agentes encubiertos", x: "Miles de documentos con nombres y destinos de agentes llegan a manos de un ciudadano chino.", obj: "Obtener dinero; el destino final de la información no se determinó.", who: "Justicia militar", u: "https://www.koreatimes.co.kr/www/nation/2024/08/113_380072.html", st: "The Korea Times" },
    { k: "filtracion", rol: "blanco", ev: 1, d: "2023-04", h: "Los documentos del Pentágono", x: "Una filtración en Discord muestra que EE.UU. escuchaba conversaciones de funcionarios de seguridad surcoreanos sobre armas para Ucrania.", obj: "La filtración no tenía fin político; expuso el espionaje a un aliado.", who: "Justicia de EE.UU.", u: "https://en.wikipedia.org/wiki/2023_Pentagon_document_leaks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desinfo", rol: "autor", ev: 1, d: "2012", h: "La campaña en internet", x: "Agentes del NIS publican mensajes anónimos para influir en la elección presidencial.", obj: "Favorecer a la candidata oficialista.", who: "Justicia de Corea del Sur", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La contrainteligencia militar vigilaba la actividad de los militares; el gobierno lo prohibió en 2026 tras su papel en la ley marcial.", u: "https://mbiz.heraldcorp.com/article/10788459", st: "The Korea Herald" },
    politicos: { ev: 1, x: "El NIS intervino en la elección de 2012 y el comando militar recibió en 2024 la orden de detener a dirigentes políticos.", u: "https://biz.heraldcorp.com/article/10853694", st: "The Korea Herald" },
    periodistas: { ev: 2, x: "Ex directores del NIS fueron condenados por escuchas ilegales y vigilancia; periodistas figuraron entre los blancos de varias épocas.", u: "https://ommcomnews.com/?p=742562", st: "IANS, vía Ommcom News" },
    activistas: { ev: 1, x: "Agentes del NIS falsificaron pruebas contra un ex funcionario nacido en Corea del Norte en 2013.", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 2, x: "Según la fiscalía de EE.UU., el NIS cultivó a una ex analista de la CIA para obtener información y acceso en Washington.", u: "https://justice.gov/opa/pr/former-cia-and-white-house-official-sue-mi-terry-arrested-acting-unregistered-agent-south", st: "Departamento de Justicia de EE.UU." },
    rivales: { ev: 1, x: "Corea del Norte es el blanco central; también China y Rusia.", u: "https://www.koreatimes.co.kr/www/nation/2024/08/113_380072.html", st: "The Korea Times" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados en democracia." },
    asesinato: { ev: 2, x: "El ex director de la KCIA Kim Hyong-uk desapareció en París en 1979; investigaciones posteriores lo atribuyeron al servicio.", u: "https://en.wikipedia.org/wiki/Kim_Hyong-uk", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró sabotajes documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 1, x: "La KCIA y su sucesora torturaron a opositores durante las dictaduras, según comisiones de la verdad.", u: "https://en.wikipedia.org/wiki/Korean_Central_Intelligence_Agency", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Secuestró a Kim Dae-jung en Tokio en 1973 y a coreanos residentes en Europa en el caso de Berlín Oriental de 1967.", u: "https://en.wikipedia.org/wiki/Kim_Dae-jung", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 1, x: "Los drones de 2024 tiraron volantes sobre Pyongyang, según el fallo de 2026.", u: "https://www.koreatimes.co.kr/southkorea/law-crime/20260612/ex-president-yoon-sentenced-to-30-yrs-in-prison-in-drone-infiltration-case", st: "Yonhap, vía The Korea Times" },
    conflictos: { ev: 1, x: "Un tribunal concluyó que la operación de drones buscaba provocar una reacción norcoreana.", u: "https://en.fnnews.com/news/202606121100450345", st: "Financial News" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados de influencia cultural encubierta." },
    golpes: { ev: 0, x: "Esta ficha no encontró intentos de derrocar gobiernos extranjeros." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras; la documentada es la elección propia de 2012." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 1, x: "En la década de 1970 la KCIA vigiló a coreanos en EE.UU., según la investigación del Congreso estadounidense.", u: "https://en.wikipedia.org/wiki/Koreagate", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 1, x: "En el Koreagate, el empresario Tongsun Park repartió dinero de la KCIA entre legisladores de EE.UU.", u: "https://en.wikipedia.org/wiki/Koreagate", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 2, x: "La investigación del Congreso de EE.UU. sobre el Koreagate describió vínculos entre la KCIA y la Iglesia de la Unificación.", u: "https://en.wikipedia.org/wiki/Koreagate", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas." },
    inteligencia: { ev: 1, x: "Comparte con EE.UU., Japón y Ucrania información sobre Corea del Norte y sus tropas en Rusia.", u: "https://mbiz.heraldcorp.com/article/10888957", st: "The Korea Herald" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del NIS se aprueba en sesión secreta; los gastos de actividades especiales no se detallan. Esta ficha no encontró la cifra de 2026 verificada.",
    uso: "Agentes en el exterior, interceptación, ciberseguridad y análisis sobre Corea del Norte.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "El NIS pagó eventos y aportes a un centro de estudios en EE.UU. a través de Sue Mi Terry, según la fiscalía estadounidense."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 1, d: "2013–2016", h: "Fondos del NIS para la Presidencia", x: "Directores del NIS entregaron dinero de gastos especiales a la presidenta Park Geun-hye; varios fueron condenados.", obj: "Financiar gastos de la Presidencia sin control.", who: "Justicia de Corea del Sur", u: "https://ommcomnews.com/?p=742562", st: "IANS, vía Ommcom News" },
    { k: "cobertura", rol: "autor", ev: 2, d: "2013–2023", h: "Regalos y aportes en Nueva York", x: "Oficiales del NIS pagaron regalos de lujo y depositaron unos 37.000 dólares en una cuenta de un centro de estudios que controlaba Terry, según la acusación.", monto: "Unos 37.000 dólares", obj: "Ganar acceso e influencia en Washington.", who: "Departamento de Justicia de EE.UU.", u: "https://justice.gov/opa/pr/former-cia-and-white-house-official-sue-mi-terry-arrested-acting-unregistered-agent-south", st: "Departamento de Justicia de EE.UU." },
    { k: "cobertura", rol: "autor", ev: 1, d: "1970–1977", h: "El Koreagate", x: "La KCIA usó a un empresario para sobornar a legisladores de EE.UU. y frenar el retiro de tropas.", obj: "Influir en el Congreso de EE.UU.", who: "Congreso de EE.UU.", u: "https://en.wikipedia.org/wiki/Koreagate", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Hacking Team", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "La filtración de 2015 mostró que el NIS le compró herramientas de hackeo." }
  ],
  struggles: [
    { a: "Yoon Suk Yeol y aliados", b: "Justicia y Parlamento", k: "Con la política", stake: "La ley marcial", state: "Abierta", x: "Juicios a un ex presidente, ex jefes del NIS y militares; condenas en 2026." },
    { a: "NIS", b: "Policía", k: "Entre agencias", stake: "La investigación del espionaje", state: "Latente", x: "La oposición pide devolver al NIS la facultad que pasó a la policía en 2024." },
    { a: "Gobierno de Lee Jae-myung", b: "Oposición", k: "Con la política", stake: "La alianza con EE.UU.", state: "Abierta", x: "La oposición pide la renuncia del director del NIS por supuestas tensiones con Washington; el NIS lo niega." }
  ],
  proxies: [
  ],
  sources: [
    { t: "The Korea Herald: el NIS y la alianza con EE.UU. (2026)", u: "https://mbiz.heraldcorp.com/article/10900786" },
    { t: "The Korea Times: condena por los drones", u: "https://www.koreatimes.co.kr/southkorea/law-crime/20260612/ex-president-yoon-sentenced-to-30-yrs-in-prison-in-drone-infiltration-case" },
    { t: "UPI: disolución del comando de contrainteligencia", u: "https://www.upi.com/Top_News/World-News/2026/08/03/defense-counterintelligence-command-dissolved-divided-three-orgs/9741785805173/" },
    { t: "The Korea Times: la filtración de agentes encubiertos", u: "https://www.koreatimes.co.kr/www/nation/2024/08/113_380072.html" },
    { t: "Departamento de Justicia: acusación contra Sue Mi Terry", u: "https://justice.gov/opa/pr/former-cia-and-white-house-official-sue-mi-terry-arrested-acting-unregistered-agent-south" },
    { t: "Wikipedia: National Intelligence Service (South Korea)", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(South_Korea)" }
  ]
};
