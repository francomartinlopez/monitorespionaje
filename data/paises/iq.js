// Ficha de Irak · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["iq"] = {
  id: "iq",
  updated: "2026-11-16",
  summary: [
    "El Servicio Nacional de Inteligencia Iraquí (INIS) nació en 2004 con apoyo de la CIA, sobre las ruinas del aparato de Saddam Hussein. Convive con el Servicio de Seguridad Nacional, la inteligencia militar y las Fuerzas de Movilización Popular (FMP), una coalición de milicias en su mayoría alineadas con Irán.",
    "Irak es un territorio disputado entre Irán y EE.UU. En Bagdad, EE.UU. mató en 2020 al general iraní Qasem Soleimani. Las milicias atacaron bases estadounidenses, y en junio de 2026 aviones de EE.UU. y Arabia Saudita bombardearon sedes de las FMP.",
    "En octubre de 2026 el primer ministro Ali al-Zaidi destituyó al jefe del INIS, Hamid al-Shatri, y asumió en persona la conducción del servicio. Ese año la misión militar de EE.UU. terminó, y el gobierno envió al Parlamento una ley para volver permanentes a las FMP."
  ],
  keyFacts: [
    { l: "Jefe del INIS", v: "El primer ministro Ali al-Zaidi", n: "desde octubre de 2026" },
    { l: "Fuerzas de Movilización Popular", v: "Parte formal de las Fuerzas Armadas", n: "ley de 2016" },
    { l: "Muerte de Soleimani", v: "Bagdad, enero de 2020", n: "ataque de EE.UU." },
    { l: "Caída de Mosul", v: "Junio de 2014", n: "ante el Estado Islámico" }
  ],
  power: { humana: 3, senales: 2, ciber: 1, imagenes: 1, encubierta: 2, contra: 2 },
  powerWhy: {
    humana: "Buenas fuentes contra el Estado Islámico, con ayuda de EE.UU. y del Kurdistán.",
    senales: "Depende de socios extranjeros para la interceptación avanzada.",
    ciber: "Capacidad estatal mínima.",
    imagenes: "Sin capacidades propias.",
    encubierta: "Las milicias hacen operaciones por su cuenta, a veces contra el propio Estado.",
    contra: "Los servicios están penetrados por facciones y por Irán, según funcionarios iraquíes y estadounidenses."
  },
  priorities: [
    { h: "Estado Islámico", x: "Restos de la organización en el desierto y en la frontera con Siria." },
    { h: "Milicias", x: "Control de las armas fuera del Estado." },
    { h: "Irán y EE.UU.", x: "Equilibrio entre los dos padrinos." },
    { h: "Kurdistán", x: "Relación con los servicios del gobierno regional kurdo." }
  ],
  focos: ["Siria", "Irán", "Kurdistán", "Estado Islámico"],
  bodies: {
    "CSN": { since: 2004, how: "Consejo y Asesoría de Seguridad Nacional: coordina a los servicios bajo el primer ministro.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Bagdad"] },
    "INIS": { since: 2004, how: "Servicio Nacional de Inteligencia Iraquí: inteligencia exterior e interior y contraterrorismo. Lo creó la CIA tras la invasión; desde octubre de 2026 lo conduce el primer ministro.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Bagdad"] },
    "NSS": { since: 2004, how: "Servicio de Seguridad Nacional: seguridad interior, cercano a los partidos chiitas.", staff: "No se publica.", budget: "No se publica.", tech: [], where: ["Bagdad"] },
    "DGIS": { since: 2004, how: "Dirección de Inteligencia Militar del Ministerio de Defensa.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Bagdad"] },
    "FMP": { since: 2014, how: "Comisión de Movilización Popular: coalición de milicias creada contra el Estado Islámico. Tiene su propia rama de inteligencia y varias facciones responden a la Fuerza Quds iraní.", staff: "Más de 200.000, según estimaciones de prensa.", budget: "Línea propia del presupuesto nacional.", tech: [], where: ["Bagdad"] }
  },
  civil: [
    "Los cargos de seguridad se reparten entre partidos y comunidades; el primer ministro Al-Zaidi pidió terminar con esas cuotas en 2026.",
    "Los primeros ministros suelen controlar el INIS en persona: lo hicieron Mustafa al-Kadhimi y Mohammed Shia al-Sudani, y ahora Al-Zaidi.",
    "Las FMP responden formalmente al primer ministro, pero varias facciones siguen a Irán."
  ],
  law: {
    domestic: [
      "La ley de 2016 incorporó a las FMP a las Fuerzas Armadas.",
      "La ley antiterrorista de 2005 se usó para detenciones masivas."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "Comisión de Seguridad y Defensa del Parlamento.",
      "El primer ministro concentra el mando de los servicios."
    ]
  },
  rights: [
    { d: "2005", dir: "amplia", area: "Debido proceso", h: "Ley antiterrorista", x: "Permite condenas a muerte y detenciones masivas, según organizaciones de derechos humanos." }
  ],
  events: [
    { d: "1988-03-16", lat: 35.18, lon: 45.98, c: "Iraq", t: "encubierta", ev: 1, h: "Halabja", x: "El régimen de Saddam Hussein bombardea con armas químicas a la ciudad kurda y mata a miles de civiles.", u: "https://en.wikipedia.org/wiki/Halabja_massacre", st: "Wikipedia: masacre de Halabja" },
    { d: "2014-06-10", lat: 36.34, lon: 43.13, c: "Iraq", t: "contra", ev: 1, h: "Caída de Mosul", x: "El Estado Islámico toma la segunda ciudad del país ante un ejército que se desbanda.", u: "https://en.wikipedia.org/wiki/Fall_of_Mosul", st: "Wikipedia: caída de Mosul" },
    { d: "2020-01-03", lat: 33.26, lon: 44.23, c: "Iraq", t: "encubierta", ev: 1, h: "Muerte de Soleimani", x: "Un dron de EE.UU. mata al jefe de la Fuerza Quds y a un jefe de las FMP en el aeropuerto de Bagdad.", u: "https://en.wikipedia.org/wiki/Assassination_of_Qasem_Soleimani", st: "Wikipedia: asesinato de Qasem Soleimani" },
    { d: "2026-10-29", lat: 33.31, lon: 44.37, c: "Iraq", t: "contra", ev: 1, h: "El primer ministro toma el INIS", x: "Ali al-Zaidi destituye al jefe de inteligencia y asume la conducción del servicio.", u: "https://www.thenationalnews.com/news/mena/2026/10/30/iraqi-prime-minister-takes-direct-control-of-intelligence-service/", st: "The National" }
  ],
  interest: {
    "Syria": 3, "Iran": 3, "Turkey": 2, "Saudi Arabia": 2, "Jordan": 1, "Kuwait": 1
  },
  timeline: [
    { era: "Saddam Hussein", d: "1979–2003", h: "El Mujabarat", x: "Un aparato de vigilancia y represión con varias agencias que se espiaban entre sí." },
    { era: "Ocupación", d: "2003", h: "Disolución", x: "EE.UU. disuelve los servicios de Saddam." },
    { era: "", d: "2004", h: "Nace el INIS", x: "La CIA organiza el nuevo servicio." },
    { era: "", d: "2014", h: "Mosul y las FMP", x: "Cae Mosul y nacen las milicias de Movilización Popular." },
    { era: "Actual", d: "2020–2026", h: "Entre Irán y EE.UU.", x: "Ataques cruzados en suelo iraquí y control directo del INIS por el primer ministro.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "1986–1989", h: "La campaña de Anfal", x: "El régimen de Saddam Hussein mató a decenas de miles de kurdos, incluido el ataque químico de Halabja. Un tribunal iraquí condenó a los responsables por genocidio en 2007.", who: "Alto Tribunal Penal Iraquí", missing: "", u: "https://en.wikipedia.org/wiki/Halabja_massacre", st: "Wikipedia: masacre de Halabja" },
    { ev: 1, ilegal: true, d: "2003–2004", h: "Abu Ghraib", x: "Soldados y contratistas de EE.UU. torturaron a presos iraquíes en la cárcel de Abu Ghraib. Varios militares fueron condenados.", who: "Tribunales militares de EE.UU.", missing: "", u: "https://en.wikipedia.org/wiki/Abu_Ghraib_torture_and_prisoner_abuse", st: "Wikipedia: Abu Ghraib" }
  ],
  failures: [
    { k: "falla", d: "2014-06-10", ev: 1, w: 3, h: "La caída de Mosul", x: "Unos pocos miles de combatientes del Estado Islámico tomaron la ciudad ante tropas mucho más numerosas.", why: "No está en duda; una comisión parlamentaria responsabilizó al ex primer ministro Nuri al-Maliki y a altos mandos.", wx: "Informe de la comisión parlamentaria de 2015.", who: "Parlamento de Irak", u: "https://en.wikipedia.org/wiki/Fall_of_Mosul", st: "Wikipedia: caída de Mosul" }
  ],
  modus: {
    embajadas: "Presencia limitada en embajadas, sobre todo en la región.",
    campo: "Redes de informantes contra el Estado Islámico en el norte y el oeste del país.",
    oficina: "El primer ministro controla el INIS; las FMP tienen inteligencia propia.",
    reclutamiento: "Personal de partidos, comunidades y milicias, según el sistema de cuotas.",
    tecnica: "Depende de EE.UU. y de socios regionales para la tecnología.",
    enlaces: "Coopera con EE.UU., el Reino Unido y Arabia Saudita, y a la vez con Irán."
  },
  insiders: [
    { k: "desertor", dir: "sale", ev: 1, d: "1995", n: "Hussein Kamel", h: "El yerno de Saddam", x: "El jefe de los programas de armas desertó a Jordania y reveló a la ONU y a la CIA el programa de armas biológicas. Volvió a Irak en 1996 y fue asesinado.", cargo: "Ministro de Industria y jefe de los programas de armamento", hacia: "Jordania, EE.UU. y los inspectores de la ONU", fin: "Asesinado en Bagdad en 1996.", who: "Inspectores de la ONU; gobierno de Jordania", u: "https://en.wikipedia.org/wiki/Hussein_Kamel_al-Majid", st: "Wikipedia: Hussein Kamel" }
  ],
  leaks: [
    { k: "filtracion", rol: "blanco", ev: 2, d: "2019-11", h: "Los cables iraníes", x: "Documentos filtrados del Ministerio de Inteligencia iraní mostraron cómo Irán reclutó a funcionarios iraquíes y a ex informantes de la CIA.", obj: "Exponer la influencia iraní en Irak.", who: "The Intercept y The New York Times", u: "https://en.wikipedia.org/wiki/Iran%E2%80%93Iraq_relations", st: "Wikipedia: relaciones Irán–Irak" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    activistas: { ev: 2, x: "Milicias de las FMP fueron acusadas de matar a manifestantes en las protestas de 2019.", u: "https://en.wikipedia.org/wiki/Popular_Mobilization_Forces", st: "Wikipedia: Fuerzas de Movilización Popular" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "El Estado Islámico es el blanco central.", u: "https://en.wikipedia.org/wiki/Iraqi_National_Intelligence_Service", st: "Wikipedia: INIS" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "El régimen de Saddam Hussein asesinó a opositores dentro y fuera del país.", u: "https://en.wikipedia.org/wiki/Iraqi_Intelligence_Service", st: "Wikipedia: Mujabarat iraquí" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "Torturas en cárceles de Saddam y, tras 2003, en centros de detención iraquíes, según la ONU.", u: "https://en.wikipedia.org/wiki/Iraqi_Intelligence_Service", st: "Wikipedia: Mujabarat iraquí" },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Comparte información sobre el Estado Islámico con EE.UU., Siria y otros vecinos.", u: "https://www.thenationalnews.com/news/mena/2026/10/30/iraqi-prime-minister-takes-direct-control-of-intelligence-service/", st: "The National" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del INIS es secreto; las FMP tienen una línea propia en el presupuesto nacional.",
    uso: "Contraterrorismo y salarios de una estructura grande.",
    ingresos: "EE.UU. financió durante años la creación y el funcionamiento del INIS.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "EE.UU. sancionó a bancos iraquíes por mover dólares hacia Irán y sus milicias.",
    crimen: "Las milicias controlan negocios de contrabando y pasos fronterizos, según funcionarios iraquíes y estadounidenses.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2016–", h: "Los salarios de las FMP", x: "El Estado paga los sueldos de las milicias de Movilización Popular, incluidas facciones alineadas con Irán.", obj: "Integrar a las milicias, según el gobierno; financiar a aliados de Irán, según sus críticos.", who: "Gobierno de Irak; gobierno de EE.UU.", u: "https://en.wikipedia.org/wiki/Popular_Mobilization_Forces", st: "Wikipedia: Fuerzas de Movilización Popular" }
  ],
  proxies: [],
  companies: [],
  struggles: [
    { a: "Primer ministro", b: "Facciones de las FMP alineadas con Irán", k: "Con otros poderes", stake: "El control de las armas y de la inteligencia", state: "Abierta", x: "Al-Zaidi asumió el INIS y empujó un plan de desarme; las FMP quedaron afuera del desarme." }
  ],
  cuentas: {"n": 2, "x": "Juicios al régimen de Saddam; las milicias no rinden cuentas."},
  sources: [
    { t: "The National: el primer ministro asume el control del INIS (2026)", u: "https://www.thenationalnews.com/news/mena/2026/10/30/iraqi-prime-minister-takes-direct-control-of-intelligence-service/" },
    { t: "Wikipedia: INIS", u: "https://en.wikipedia.org/wiki/Iraqi_National_Intelligence_Service" },
    { t: "Wikipedia: Fuerzas de Movilización Popular", u: "https://en.wikipedia.org/wiki/Popular_Mobilization_Forces" },
    { t: "Rudaw: destitución del jefe del INIS (2026)", u: "https://rudaw.net/english/categories/iraq/1079917" }
  ]
};
