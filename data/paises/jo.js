// Ficha de Jordania · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["jo"] = {
  id: "jo",
  updated: "2026-11-16",
  summary: [
    "La Dirección General de Inteligencia (GID), la Mujabarat jordana, es uno de los servicios más eficaces del mundo árabe y uno de los socios más cercanos de la CIA en Medio Oriente. Depende directamente del rey Abdalá II y tiene un peso enorme en la política interna.",
    "La GID penetró redes yihadistas durante décadas, pero sufrió un golpe en 2009. Un médico jordano que trabajaba como doble agente detonó una bomba en una base de la CIA en Afganistán y mató a siete estadounidenses y a un oficial jordano. Organizaciones de derechos humanos denunciaron torturas en sus centros de detención.",
    "En 2021 el gobierno acusó al príncipe Hamzah, medio hermano del rey, y al ex jefe de la Corte Real Bassem Awadallah de conspirar contra la estabilidad del reino; Awadallah fue condenado a 15 años. En abril de 2025 la GID desarmó una célula que fabricaba cohetes y drones, y el gobierno prohibió a los Hermanos Musulmanes."
  ],
  keyFacts: [
    { l: "Rey", v: "Abdalá II", n: "desde 1999" },
    { l: "Ataque en Khost", v: "30 de diciembre de 2009", n: "siete agentes de la CIA y un oficial jordano muertos" },
    { l: "Caso de sedición", v: "Awadallah condenado a 15 años", n: "2022" },
    { l: "Prohibición de los Hermanos Musulmanes", v: "Abril de 2025", n: "tras el desarme de una célula" }
  ],
  power: { humana: 4, senales: 3, ciber: 2, imagenes: 2, encubierta: 3, contra: 4 },
  powerWhy: {
    humana: "Muy buena penetración en redes yihadistas, Siria, Irak y Cisjordania.",
    senales: "Capacidades apoyadas por EE.UU. y el Reino Unido.",
    ciber: "Uso de programas espía comerciales, según Citizen Lab y Access Now.",
    imagenes: "Acceso a imágenes de EE.UU.",
    encubierta: "Participó con la CIA en operaciones en Afganistán y Siria.",
    contra: "Control interno estrecho, con detecciones de complots en 2021 y 2025."
  },
  priorities: [
    { h: "Yihadismo", x: "Estado Islámico y Al Qaeda." },
    { h: "Siria", x: "Frontera, captagón y la transición posterior a Assad." },
    { h: "Cisjordania y Gaza", x: "Impacto de la guerra en la población palestina de Jordania." },
    { h: "Oposición interna", x: "Hermanos Musulmanes y protestas." },
    { h: "Irán", x: "Milicias y contrabando de armas." }
  ],
  focos: ["Siria", "Palestina", "Irak", "Estado Islámico", "Irán"],
  bodies: {
    "CSN": { since: 2016, how: "Consejo de Seguridad Nacional presidido por el rey.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Amán"] },
    "GID": { since: 1964, how: "Dirección General de Inteligencia: inteligencia exterior e interior y contraterrorismo, bajo el rey.", staff: "No se publica.", budget: "Secreto.", tech: ["Interceptación", "Programas espía comerciales"], where: ["Amán", "Embajadas"] },
    "Defensa": { since: 1921, how: "Inteligencia de las Fuerzas Armadas, centrada en las fronteras con Siria e Irak.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Amán"] },
    "PSD": { since: 1956, how: "Dirección de Seguridad Pública: policía y seguridad interna.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Amán", "Todo el país"] }
  },
  civil: [
    "La GID responde al rey; su director es una de las figuras más poderosas del país.",
    "El Parlamento no controla a la inteligencia.",
    "El Tribunal de Seguridad del Estado juzga los casos de terrorismo y sedición."
  ],
  law: {
    domestic: [
      "La ley antiterrorista de 2014 define el terrorismo de manera amplia.",
      "La ley de ciberdelitos de 2023 castiga la difusión de noticias falsas y críticas a funcionarios.",
      "El Tribunal de Seguridad del Estado juzga a civiles en casos de seguridad."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "2014-06", dir: "amplia", area: "Expresión", h: "Ley antiterrorista", x: "Amplía la definición de terrorismo a críticas a otros Estados." },
    { d: "2023-08", dir: "amplia", area: "Expresión", h: "Ley de ciberdelitos", x: "Penas por publicar contenidos considerados falsos o difamatorios." }
  ],
  events: [
    { d: "1997-09-25", lat: 31.95, lon: 35.93, c: "Jordan", t: "encubierta", ev: 1, h: "Envenenamiento de Jaled Meshal", x: "Agentes del Mossad envenenan en Amán al dirigente de Hamas; Jordania detiene a dos y obliga a Israel a entregar el antídoto.", u: "https://en.wikipedia.org/wiki/Khaled_Mashal", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2009-12-30", lat: 33.34, lon: 69.95, c: "Afghanistan", t: "contra", ev: 1, h: "Ataque en Khost", x: "Un doble agente presentado por la GID detona una bomba en una base de la CIA y mata a siete estadounidenses y a un oficial jordano.", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2021-04-03", lat: 31.97, lon: 35.86, c: "Jordan", t: "contra", ev: 1, h: "Caso de sedición", x: "Detienen a Bassem Awadallah y ponen bajo arresto domiciliario al príncipe Hamzah.", u: "https://en.wikipedia.org/wiki/Hamzah_bin_Hussein", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Syria": 3, "Iraq": 2, "Palestine": 3, "Israel": 2, "Iran": 2, "Saudi Arabia": 1, "United States of America": 1
  },
  timeline: [
    { era: "Hussein", d: "1964", h: "Nace la GID", x: "El rey Hussein crea la Mujabarat." },
    { era: "", d: "1970", h: "Septiembre Negro", x: "Guerra contra las organizaciones palestinas." },
    { era: "Abdalá II", d: "2005", h: "Atentados de Amán", x: "Al Qaeda ataca hoteles; la GID refuerza el contraterrorismo." },
    { era: "", d: "2009", h: "Khost", x: "Un doble agente golpea a la CIA y a la GID." },
    { era: "Actual", d: "2021–2026", h: "Sedición y Hermanos Musulmanes", x: "Juicio a Awadallah y prohibición de la Hermandad.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: false, d: "2009", h: "El doble agente de Khost", x: "Humam al-Balawi, un médico jordano detenido y reclutado por la GID, fue llevado a una base de la CIA en Afganistán como fuente sobre Al Qaeda. Era leal a los yihadistas y se inmoló, matando a siete agentes de la CIA y al oficial jordano Sharif Ali bin Zeid.", who: "CIA y gobierno de Jordania", missing: "", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2021", h: "La sedición del príncipe Hamzah", x: "El Tribunal de Seguridad del Estado condenó en 2022 a Bassem Awadallah y a un miembro de la familia real a 15 años por incitar contra el rey. El príncipe Hamzah no fue juzgado. Los defensores denunciaron falta de garantías.", who: "Tribunal de Seguridad del Estado de Jordania", missing: "", u: "https://en.wikipedia.org/wiki/Hamzah_bin_Hussein", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2019–2023", h: "Pegasus contra activistas", x: "Access Now y Citizen Lab identificaron infecciones de Pegasus en teléfonos de unos 35 periodistas, abogados y activistas jordanos. Atribuyeron la mayoría al gobierno, que lo niega.", who: "Access Now y Citizen Lab", missing: "Reconocimiento oficial.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2009-12", ev: 1, w: 3, h: "Khost", x: "La GID confió en una fuente que resultó ser un agente de Al Qaeda.", why: "No está en duda; lo reconocieron la CIA y Jordania.", wx: "Investigación interna de la CIA.", who: "CIA", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales de la GID en embajadas de la región y enlaces con servicios occidentales.",
    campo: "Fuentes humanas dentro de grupos yihadistas y en Siria e Irak.",
    oficina: "El director informa al rey.",
    reclutamiento: "Personal propio y militares.",
    tecnica: "Interceptación con apoyo occidental y programas espía comerciales.",
    enlaces: "Socio estrecho de la CIA y el MI6; cooperación discreta con Israel."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 1, d: "2009", n: "Humam al-Balawi", h: "El médico doble agente", x: "Reclutado por la GID para infiltrar a Al Qaeda, trabajaba en realidad para los yihadistas.", cargo: "Médico y fuente de la GID", hacia: "Al Qaeda y talibanes pakistaníes", fin: "Murió en el atentado de Khost.", who: "CIA y gobierno de Jordania", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "blanco", ev: 1, d: "2021-04", h: "Los audios del príncipe Hamzah", x: "El príncipe difundió videos y audios de su arresto domiciliario y de su conversación con el jefe del Ejército.", obj: "Denunciar su arresto.", who: "Prensa internacional", u: "https://en.wikipedia.org/wiki/Hamzah_bin_Hussein", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La GID investigó a miembros de la familia real y ex funcionarios en 2021.", u: "https://en.wikipedia.org/wiki/Hamzah_bin_Hussein", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Vigila y detiene a dirigentes de los Hermanos Musulmanes.", u: "https://en.wikipedia.org/wiki/Islamic_Action_Front", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 2, x: "Periodistas fueron infectados con Pegasus, según Access Now.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 2, x: "Activistas del sindicato docente y de protestas fueron espiados, según Access Now.", u: "https://en.wikipedia.org/wiki/Pegasus_(spyware)", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Grupos yihadistas y milicias proiraníes son blancos centrales.", u: "https://en.wikipedia.org/wiki/General_Intelligence_Directorate_(Jordan)", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 2, x: "Human Rights Watch documentó torturas en centros de la GID.", u: "https://en.wikipedia.org/wiki/General_Intelligence_Directorate_(Jordan)", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "Recibió detenidos de la CIA para interrogarlos tras 2001, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/General_Intelligence_Directorate_(Jordan)", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 2, x: "Apoyó a rebeldes del sur de Siria junto con EE.UU. durante la guerra civil.", u: "https://en.wikipedia.org/wiki/Timber_Sycamore", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 1, x: "Controla mezquitas y predicadores; prohibió a los Hermanos Musulmanes en 2025.", u: "https://en.wikipedia.org/wiki/Islamic_Action_Front", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 2, x: "Canalizó armas de la CIA a rebeldes sirios; parte fue robada, según la prensa.", u: "https://en.wikipedia.org/wiki/Timber_Sycamore", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 1, x: "Socio de la CIA en contraterrorismo.", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 1, x: "Entrenó a rebeldes sirios con EE.UU.", u: "https://en.wikipedia.org/wiki/Timber_Sycamore", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de la GID es secreto; recibe apoyo de EE.UU.",
    uso: "Contraterrorismo, vigilancia interna y operaciones regionales.",
    ingresos: "Ayuda de EE.UU. y del Golfo, según la prensa.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "desvio", rol: "blanco", ev: 2, d: "2016", h: "Las armas robadas de la CIA", x: "Oficiales jordanos vendieron en el mercado negro armas enviadas por la CIA para rebeldes sirios, según The New York Times y Al Jazeera.", obj: "Lucro personal.", who: "The New York Times y Al Jazeera", u: "https://en.wikipedia.org/wiki/Timber_Sycamore", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Pegasus se usó contra activistas jordanos, según Access Now." }
  ],
  struggles: [
    { a: "Monarquía", b: "Hermanos Musulmanes", k: "Con la política", stake: "La oposición islamista", state: "Abierta", x: "Prohibición de la Hermandad en 2025 tras el caso de los cohetes." }
  ],
  sources: [
    { t: "Wikipedia: General Intelligence Directorate (Jordan)", u: "https://en.wikipedia.org/wiki/General_Intelligence_Directorate_(Jordan)" },
    { t: "Wikipedia: Camp Chapman attack", u: "https://en.wikipedia.org/wiki/Camp_Chapman_attack" },
    { t: "Wikipedia: 2021 Jordanian alleged coup attempt", u: "https://en.wikipedia.org/wiki/Hamzah_bin_Hussein" }
  ]
};
