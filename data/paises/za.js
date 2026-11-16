// Ficha de Sudáfrica · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["za"] = {
  id: "za",
  updated: "2026-11-15",
  summary: [
    "La Agencia de Seguridad del Estado (SSA) concentró desde 2009 la inteligencia civil sudafricana. En marzo de 2025 el presidente Cyril Ramaphosa firmó una ley que la disuelve y la divide en un Servicio de Inteligencia Exterior y una Agencia de Inteligencia Doméstica. Así lo habían recomendado un panel presidencial en 2018 y la comisión sobre la captura del Estado. La transición sigue en curso.",
    "La comisión presidida por el juez Raymond Zondo concluyó que durante el gobierno de Jacob Zuma la SSA se usó para fines políticos y que se perdieron grandes sumas en efectivo sin control. Su ex director Arthur Fraser montó una red paralela de agentes y en 2022 denunció al propio Ramaphosa por el caso del dinero robado en su granja Phala Phala.",
    "En el apartheid, la Oficina de Seguridad del Estado (BOSS) y unidades secretas del Ejército como la Oficina de Cooperación Civil (CCB) asesinaron a opositores dentro y fuera del país, según la Comisión de la Verdad y la Reconciliación. En 2021 la Corte Constitucional declaró ilegal la interceptación masiva que hacía el Estado."
  ],
  keyFacts: [
    { l: "Disolución de la SSA", v: "Ley de marzo de 2025", n: "se divide en servicio exterior y agencia doméstica" },
    { l: "Comisión Zondo", v: "SSA usada políticamente", n: "informe sobre la captura del Estado (2022)" },
    { l: "Interceptación masiva", v: "Ilegal", n: "Corte Constitucional, 2021" },
    { l: "Ministra responsable", v: "Khumbudzo Ntshavheni", n: "ministra en la Presidencia" }
  ],
  power: { humana: 2, senales: 2, ciber: 2, imagenes: 1, encubierta: 2, contra: 2 },
  powerWhy: {
    humana: "Redes en el continente africano, debilitadas por años de uso político y salidas de personal.",
    senales: "El Centro Nacional de Comunicaciones intercepta, pero la Corte limitó la interceptación masiva.",
    ciber: "Capacidad modesta; hubo ataques graves a sistemas del Estado sin respuesta eficaz.",
    imagenes: "Sin satélites propios de inteligencia.",
    encubierta: "La red paralela de agentes de la era Zuma operó fuera de la ley, según la comisión Zondo.",
    contra: "Servicio debilitado por la corrupción y en plena reestructuración."
  },
  priorities: [
    { h: "Reforma", x: "Crear los dos nuevos servicios y recuperar credibilidad." },
    { h: "Crimen organizado", x: "Mafias de la construcción, minería ilegal y cárteles." },
    { h: "Estabilidad interna", x: "Disturbios como los de julio de 2021." },
    { h: "Región", x: "Mozambique, Zimbabue y los Grandes Lagos." },
    { h: "Injerencia extranjera", x: "Actividad de servicios de grandes potencias en el país." }
  ],
  focos: ["Reforma", "Crimen organizado", "Mozambique", "Zimbabue", "Disturbios"],
  bodies: {
    "NICOC": { since: 1994, how: "Comité Nacional de Coordinación de Inteligencia: reúne a todos los servicios y produce evaluaciones para el gabinete.", staff: "No se publica.", budget: "Dentro de la seguridad del Estado.", tech: [], where: ["Pretoria"] },
    "SSA": { since: 2009, how: "Agencia de Seguridad del Estado: inteligencia interior y exterior. La ley de 2025 la disuelve para crear el Servicio de Inteligencia Exterior y la Agencia de Inteligencia Doméstica.", staff: "No se publica.", budget: "Parcialmente secreto.", tech: ["Centro Nacional de Comunicaciones"], where: ["Pretoria", "Embajadas"] },
    "DI": { since: 1994, how: "Inteligencia de Defensa de la Fuerza Nacional de Defensa: inteligencia militar para despliegues en África.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Pretoria"] },
    "CI": { since: 1995, how: "Inteligencia Criminal del Servicio de Policía: inteligencia sobre crimen organizado y disturbios.", staff: "No se publica.", budget: "Dentro de la Policía.", tech: [], where: ["Pretoria", "Todo el país"] },
    "IGI": { since: 1994, how: "Inspector General de Inteligencia: investiga quejas y controla la legalidad de los servicios.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Pretoria"] },
    "JSCI": { since: 1994, how: "Comité Conjunto Permanente de Inteligencia del Parlamento, con acceso a información secreta.", staff: "Legisladores de varios partidos.", budget: "No aplica.", tech: [], where: ["Ciudad del Cabo"] }
  },
  civil: [
    "Los servicios responden a un ministro en la Presidencia.",
    "La comisión Zondo concluyó que la SSA sirvió a facciones políticas durante el gobierno de Zuma.",
    "La ley de 2025 refuerza el control parlamentario y del inspector general."
  ],
  law: {
    domestic: [
      "La ley de interceptación RICA regula las escuchas; la Corte Constitucional la declaró inconstitucional en parte en 2021.",
      "La ley de enmienda de 2025 disuelve la SSA y crea dos servicios.",
      "La ley de protección de información del Estado de 2013 nunca entró en vigor por críticas a su alcance."
    ],
    foreign: [
      "El nuevo Servicio de Inteligencia Exterior tendrá a su cargo la inteligencia fuera del país."
    ],
    oversight: [
      "Inspector General de Inteligencia (IGI).",
      "Comité Conjunto Permanente de Inteligencia (JSCI).",
      "Corte Constitucional, que limitó la interceptación."
    ]
  },
  rights: [
    { d: "1994", dir: "recorta", area: "Debido proceso", h: "Fin del apartheid", x: "Nuevos servicios con control parlamentario e inspector general." },
    { d: "2021-02", dir: "recorta", area: "Privacidad", h: "Fallo amaBhungane", x: "La Corte Constitucional declara ilegal la interceptación masiva y exige avisar a los vigilados." },
    { d: "2025-03", dir: "recorta", area: "Debido proceso", h: "Disolución de la SSA", x: "La reforma busca evitar el uso político del servicio; críticos advierten sobre definiciones amplias de seguridad." }
  ],
  events: [
    { d: "1989-05-01", lat: -26.2, lon: 28.04, c: "South Africa", t: "encubierta", ev: 1, h: "Asesinato de David Webster", x: "Un agente de la Oficina de Cooperación Civil mata al antropólogo y activista frente a su casa en Johannesburgo.", u: "https://en.wikipedia.org/wiki/Civil_Cooperation_Bureau", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2017-07", lat: -25.75, lon: 28.19, c: "South Africa", t: "humana", ev: 1, h: "Red paralela de agentes", x: "Sale a la luz que el ex director Arthur Fraser montó una red de agentes con fondos sin control.", u: "https://en.wikipedia.org/wiki/State_Security_Agency_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2022-06", lat: -24.5, lon: 28.6, c: "South Africa", t: "contra", ev: 1, h: "Denuncia por Phala Phala", x: "Arthur Fraser denuncia que el presidente ocultó el robo de dólares en su granja; el caso se volvió una crisis política.", u: "https://en.wikipedia.org/wiki/Phala_Phala_scandal", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Mozambique": 2, "Zimbabwe": 2, "Lesotho": 2, "Dem. Rep. Congo": 1, "eSwatini": 1, "Russia": 1, "China": 1, "United States of America": 1
  },
  timeline: [
    { era: "Apartheid", d: "1969", h: "Nace la BOSS", x: "La Oficina de Seguridad del Estado persigue a la oposición.", ctx: "Apartheid." },
    { era: "", d: "1986–1990", h: "Oficina de Cooperación Civil", x: "Unidad secreta del Ejército que asesina a opositores.", ctx: "Estado de emergencia y guerra en Angola." },
    { era: "Democracia", d: "1994", h: "Nuevos servicios", x: "Se crean servicios con control parlamentario.", ctx: "Fin del apartheid y gobierno de Mandela." },
    { era: "", d: "2009", h: "Nace la SSA", x: "Zuma unifica la inteligencia civil.", ctx: "Gobierno de Jacob Zuma." },
    { era: "", d: "2018–2022", h: "Panel y comisión Zondo", x: "Revelan la captura del servicio.", ctx: "Investigación de la captura del Estado." },
    { era: "Actual", d: "2025–2026", h: "Disolución de la SSA", x: "Comienza la división en dos servicios.", now: true, ctx: "Gobierno de unidad nacional." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2009–2018", h: "La captura de la SSA", x: "La comisión Zondo concluyó que la SSA se usó para proteger al presidente Zuma y atacar a sus rivales. Detectó grandes retiros de efectivo sin justificar y una red paralela de agentes llamada Principal Agent Network.", who: "Comisión judicial sobre la captura del Estado", missing: "", u: "https://en.wikipedia.org/wiki/Zondo_Commission", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1986–1990", h: "La Oficina de Cooperación Civil", x: "Una unidad secreta de las Fuerzas de Defensa asesinó y atacó a opositores dentro y fuera del país. La Comisión de la Verdad y la Reconciliación documentó sus crímenes.", who: "Comisión de la Verdad y la Reconciliación", missing: "", u: "https://en.wikipedia.org/wiki/Civil_Cooperation_Bureau", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2006–2021", h: "La interceptación masiva", x: "La Corte Constitucional falló en 2021, a pedido del centro de periodismo amaBhungane, que el Estado no tenía base legal para la interceptación masiva. El caso empezó cuando se supo que un periodista había sido espiado.", who: "Corte Constitucional", missing: "", u: "https://en.wikipedia.org/wiki/State_Security_Agency_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2021-07", ev: 1, w: 3, h: "Los disturbios de julio de 2021", x: "Saqueos y violencia tras la detención de Zuma dejaron más de 300 muertos; un panel de expertos concluyó que la inteligencia falló en anticiparlos.", why: "No está en duda; lo concluyó un panel convocado por el presidente.", wx: "Informe del panel de expertos.", who: "Panel de expertos de la Presidencia", u: "https://en.wikipedia.org/wiki/2021_South_African_unrest", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "La SSA tiene oficiales en embajadas, sobre todo en África.",
    campo: "Agentes y fuentes en la región; la comisión Zondo describió una red paralela fuera de los controles.",
    oficina: "El comité de coordinación produce evaluaciones para el gabinete, cuya calidad fue criticada tras 2021.",
    reclutamiento: "La ley de 2025 restablece la academia nacional de inteligencia.",
    tecnica: "Interceptación del Centro Nacional de Comunicaciones, limitada por la Corte en 2021.",
    enlaces: "Cooperación con servicios de los BRICS y de la región, y contactos con servicios occidentales."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 2, d: "2022", n: "Arthur Fraser", h: "El ex director que denunció al presidente", x: "Presentó una denuncia penal contra Ramaphosa por el dinero robado en Phala Phala. Él mismo fue acusado por la comisión Zondo de manejar una red paralela.", cargo: "Ex director general de la SSA", hacia: "Policía y opinión pública", fin: "La fiscalía no acusó al presidente; Fraser no fue condenado.", who: "Comisión Zondo y prensa", u: "https://en.wikipedia.org/wiki/Phala_Phala_scandal", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1960–1994", h: "Los crímenes del apartheid", x: "Los servicios destruyeron grandes cantidades de archivos antes de la transición, según la Comisión de la Verdad.", obj: "Evitar responsabilidades.", aquien: "La Comisión de la Verdad y la sociedad", como: "Investigaciones de la propia comisión.", who: "Comisión de la Verdad y la Reconciliación", u: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La SSA espió a rivales de Zuma dentro del propio partido de gobierno, según la comisión Zondo.", u: "https://en.wikipedia.org/wiki/Zondo_Commission", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Durante el gobierno de Zuma la SSA atacó a rivales políticos, según la comisión Zondo.", u: "https://en.wikipedia.org/wiki/Zondo_Commission", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "El periodista Sam Sole fue espiado; su caso llevó al fallo de 2021.", u: "https://en.wikipedia.org/wiki/State_Security_Agency_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "En el apartheid los servicios persiguieron y asesinaron a activistas.", u: "https://en.wikipedia.org/wiki/Civil_Cooperation_Bureau", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 1, x: "La Oficina de Cooperación Civil mató a opositores en el apartheid.", u: "https://en.wikipedia.org/wiki/Civil_Cooperation_Bureau", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 1, x: "Los servicios del apartheid pusieron bombas en oficinas del ANC en el exterior, según la Comisión de la Verdad.", u: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "La policía de seguridad torturó a detenidos políticos en el apartheid.", u: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Opositores fueron secuestrados en países vecinos en el apartheid.", u: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 1, x: "El gobierno del apartheid financió en secreto medios de propaganda en el escándalo de la Información de 1978.", u: "https://en.wikipedia.org/wiki/Information_Scandal", st: "Wikipedia (síntesis de fuentes)" },
    conflictos: { ev: 1, x: "El apartheid apoyó a la guerrilla Renamo en Mozambique y a UNITA en Angola.", u: "https://en.wikipedia.org/wiki/RENAMO", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 1, x: "Mercenarios con base en Sudáfrica intentaron un golpe en Seychelles en 1981 con apoyo de oficiales sudafricanos.", u: "https://en.wikipedia.org/wiki/1981_Seychelles_coup_attempt", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 1, x: "El apartheid financió partidos rivales del ANC, según la Comisión de la Verdad.", u: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(South_Africa)", st: "Wikipedia (síntesis de fuentes)" },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 1, x: "Abasteció de armas a Renamo y UNITA en las décadas de 1970 y 1980.", u: "https://en.wikipedia.org/wiki/RENAMO", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 1, x: "Entrenó a la guerrilla Renamo en el apartheid.", u: "https://en.wikipedia.org/wiki/RENAMO", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de la SSA es parcialmente secreto. La comisión Zondo detectó grandes retiros de efectivo sin justificar.",
    uso: "Personal, interceptación y operaciones; parte se desvió a fines políticos según la comisión.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "En el apartheid se usaron empresas de fachada para la Oficina de Cooperación Civil.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "La Oficina de Cooperación Civil contrató a criminales para sus ataques.",
    cobertura: "La comisión Zondo señaló pagos de la SSA a medios y a organizaciones afines a Zuma."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 1, d: "2012–2018", h: "El efectivo de la SSA", x: "La comisión Zondo concluyó que se retiraron grandes sumas en efectivo sin control y que parte terminó en fines políticos.", obj: "Proteger a la facción de Zuma.", who: "Comisión judicial sobre la captura del Estado", u: "https://en.wikipedia.org/wiki/Zondo_Commission", st: "Wikipedia (síntesis de fuentes)" },
    { k: "cobertura", rol: "autor", ev: 1, d: "1973–1978", h: "El escándalo de la Información", x: "El gobierno del apartheid financió en secreto un diario y campañas de propaganda en el exterior.", obj: "Mejorar la imagen del régimen.", who: "Comisión Erasmus", u: "https://en.wikipedia.org/wiki/Information_Scandal", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Armscor", c: "nacional", rubro: "Armamento", rel: "Estatal", x: "Empresa estatal que eludió el embargo de armas del apartheid con redes encubiertas." }
  ],
  struggles: [
    { a: "Ramaphosa", b: "Facción de Zuma", k: "Con la política", stake: "El control del aparato de seguridad", state: "Abierta", x: "Fraser, aliado de Zuma, denunció al presidente; la reforma busca cerrar esa etapa." }
  ],
  proxies: [
    {"id": "renamo", "s": "RENAMO y UNITA", "n": "RENAMO y UNITA", "k": "armado", "d": "1975–1990", "rol": "patrocina", "hoy": false, "ev": 1, "x": "El régimen del apartheid armó a la RENAMO en Mozambique y a la UNITA en Angola.", "who": "Comisión de la Verdad y Reconciliación", "u": "https://en.wikipedia.org/wiki/RENAMO", "st": "Wikipedia: RENAMO"}
  ],
  cuentas: {"n": 2, "x": "La comisión Zondo expuso los abusos y llevó a la reforma de 2025, con pocas condenas."},
  doctrina: [{"h": "Servicio en reconstrucción", "x": "Tras la captura del Estado, la ley de 2025 separa la inteligencia exterior de la interior."}],
  sources: [
    { t: "EWN: se firma la ley que divide la SSA (2025)", u: "https://ewn.co.za/2025/03/28/ramaphosa-signs-general-intelligence-laws-amendment-bill-into-law-splits-ssa-into-2-bodies" },
    { t: "SAnews: los dos nuevos servicios", u: "https://www.sanews.gov.za/node/74134" },
    { t: "Wikipedia: Zondo Commission", u: "https://en.wikipedia.org/wiki/Zondo_Commission" },
    { t: "Wikipedia: State Security Agency (South Africa)", u: "https://en.wikipedia.org/wiki/State_Security_Agency_(South_Africa)" }
  ]
};
