// Ficha de Ruanda · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["rw"] = {
  id: "rw",
  updated: "2026-11-15",
  summary: [
    "Ruanda tiene servicios chicos pero muy eficaces, centrados en proteger al gobierno de Paul Kagame. El Servicio Nacional de Inteligencia y Seguridad (NISS) y la Inteligencia Militar (DMI) vigilan a la oposición dentro y fuera del país. La Oficina de Investigación de Ruanda (RIB) es la policía judicial que lleva las causas.",
    "Opositores y ex aliados de Kagame fueron asesinados o atacados en el exterior. Un tribunal sudafricano concluyó en 2019 que el asesinato del ex jefe de inteligencia Patrick Karegeya en Johannesburgo tenía vínculos con el gobierno ruandés. En 2020 Ruanda llevó con engaños a Kigali a Paul Rusesabagina, el gerente del hotel de la película Hotel Ruanda, que fue condenado y liberado en 2023.",
    "Grupos de expertos de la ONU documentaron que Ruanda apoya, arma y dirige a la guerrilla M23 en el este de la República Democrática del Congo, que tomó Goma en enero de 2025. Ruanda lo niega y firmó un acuerdo de paz con el Congo en Washington en junio de 2025."
  ],
  keyFacts: [
    { l: "Presidente", v: "Paul Kagame", n: "en el poder desde 2000" },
    { l: "Rusesabagina", v: "Llevado con engaños a Kigali", n: "agosto de 2020; liberado en 2023" },
    { l: "Apoyo al M23", v: "Documentado por la ONU", n: "grupos de expertos, 2022-2025" },
    { l: "Pegasus", v: "Cliente según Amnistía", n: "miles de números ruandeses posibles blancos (2021)" }
  ],
  power: { humana: 4, senales: 2, ciber: 3, imagenes: 1, encubierta: 4, contra: 4 },
  powerWhy: {
    humana: "Redes densas en la diáspora y en los países vecinos.",
    senales: "Vigilancia interna amplia; capacidades técnicas propias limitadas.",
    ciber: "Usa programas espía comerciales contra disidentes, según Amnistía y Citizen Lab.",
    imagenes: "Sin capacidades propias relevantes.",
    encubierta: "Operaciones contra opositores en Sudáfrica, Kenia y otros países, según tribunales y prensa.",
    contra: "Control social estricto y pocos casos públicos de espionaje extranjero."
  },
  priorities: [
    { h: "Oposición en el exilio", x: "Ex aliados de Kagame y grupos opositores." },
    { h: "Este del Congo", x: "Las FDLR, el M23 y los minerales." },
    { h: "Burundi y Uganda", x: "Relaciones tensas con los vecinos." },
    { h: "Imagen internacional", x: "Responder a las acusaciones sobre el Congo." },
    { h: "Seguridad interna", x: "Prevenir cualquier oposición organizada." }
  ],
  focos: ["Congo", "Oposición en el exilio", "Burundi", "Uganda", "FDLR"],
  bodies: {
    "CSN": { since: 2002, how: "Consejo de Seguridad Nacional presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Kigali"] },
    "NISS": { since: 2011, how: "Servicio Nacional de Inteligencia y Seguridad: inteligencia interior y exterior, con oficinas en embajadas.", staff: "No se publica.", budget: "Secreto.", tech: ["Programas espía comerciales"], where: ["Kigali", "Embajadas"] },
    "DMI": { since: 1994, how: "Inteligencia Militar de las Fuerzas de Defensa de Ruanda: clave en las operaciones en el Congo.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Kigali"] },
    "RIB": { since: 2017, how: "Oficina de Investigación de Ruanda: policía judicial que investiga delitos, incluidos los de seguridad del Estado.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Kigali", "Todo el país"] }
  },
  civil: [
    "Los servicios responden al presidente Kagame.",
    "No hay un control parlamentario efectivo ni prensa independiente que los fiscalice.",
    "Los tribunales condenaron a opositores en juicios criticados por organizaciones internacionales."
  ],
  law: {
    domestic: [
      "Las leyes contra la \"ideología del genocidio\" y el divisionismo se usan contra críticos, según organizaciones de derechos humanos.",
      "La ley de interceptación de comunicaciones de 2013 permite escuchas con autorización de un fiscal.",
      "La ley de cibercrimen de 2018 castiga publicar rumores."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "2008", dir: "amplia", area: "Expresión", h: "Ley de ideología del genocidio", x: "Castiga discursos de manera amplia; se reformó en 2013 tras críticas." },
    { d: "2013", dir: "amplia", area: "Privacidad", h: "Ley de interceptación", x: "Permite escuchas autorizadas por fiscales, sin control judicial previo." },
    { d: "2018-08", dir: "amplia", area: "Expresión", h: "Ley de cibercrimen", x: "Castiga la difusión de rumores y noticias falsas." }
  ],
  events: [
    { d: "1998-05-16", lat: -1.29, lon: 36.82, c: "Kenya", t: "encubierta", ev: 2, h: "Asesinato de Seth Sendashonga", x: "Matan en Nairobi al ex ministro del Interior que había roto con el gobierno; un tribunal keniano señaló a un diplomático ruandés.", u: "https://en.wikipedia.org/wiki/Seth_Sendashonga", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2014-01-01", lat: -26.1, lon: 28.05, c: "South Africa", t: "encubierta", ev: 2, h: "Asesinato de Patrick Karegeya", x: "El ex jefe de inteligencia exterior ruandés aparece estrangulado en un hotel de Johannesburgo.", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2020-08-27", lat: -1.95, lon: 30.06, c: "Rwanda", t: "encubierta", ev: 1, h: "Rusesabagina llega a Kigali con engaños", x: "Un avión privado que el disidente creía con destino a Burundi lo lleva desde Dubái a Kigali, donde lo detienen.", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-01", lat: -1.6, lon: 28.9, c: "Dem. Rep. Congo", t: "encubierta", ev: 2, h: "El M23 toma Goma", x: "La guerrilla, apoyada por Ruanda según la ONU, toma la principal ciudad del este del Congo.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Dem. Rep. Congo": 3, "Burundi": 3, "Uganda": 2, "South Africa": 2, "Belgium": 2, "France": 1, "United Kingdom": 1, "Kenya": 1, "Tanzania": 1
  },
  timeline: [
    { era: "Posgenocidio", d: "1994", h: "El FPR toma el poder", x: "Tras el genocidio, el Frente Patriótico Ruandés arma sus servicios." },
    { era: "", d: "1996–2003", h: "Guerras del Congo", x: "La inteligencia militar dirige operaciones en el país vecino." },
    { era: "Kagame", d: "2010–2014", h: "Ataques a disidentes", x: "Atentado contra Kayumba Nyamwasa y asesinato de Karegeya en Sudáfrica." },
    { era: "", d: "2020", h: "Rusesabagina", x: "Operación para llevar a un disidente a Kigali." },
    { era: "Actual", d: "2022–2026", h: "El M23", x: "Apoyo a la guerrilla en el Congo y acuerdo de paz en Washington.", now: true }
  ],
  cases: [
    { ev: 2, ilegal: true, d: "2013–2014", h: "El asesinato de Patrick Karegeya", x: "El ex jefe de inteligencia exterior, que se había exiliado, fue estrangulado en un hotel de Johannesburgo. En 2019 una investigación judicial sudafricana concluyó que los sospechosos tenían vínculos directos con el gobierno ruandés. Kigali lo niega.", who: "Tribunal de investigación de Sudáfrica", missing: "Un juicio a los autores, que salieron del país.", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2020", h: "La captura de Rusesabagina", x: "El propio gobierno admitió haber pagado el vuelo que llevó al disidente a Kigali con engaños. Fue condenado a 25 años por terrorismo en un juicio criticado por EE.UU. y la UE, y liberado en 2023 tras una mediación de Catar.", who: "Gobierno de Ruanda y tribunales", missing: "", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2022–2025", h: "El apoyo al M23", x: "Los grupos de expertos de la ONU informaron que el Ejército ruandés apoya, entrena y dirige al M23 y que miles de soldados ruandeses operaron en el Congo. Ruanda lo niega y habla de defensa propia frente a las FDLR.", who: "Grupo de Expertos de la ONU sobre el Congo", missing: "Reconocimiento oficial ruandés.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2010-06", ev: 1, w: 3, h: "El atentado fallido contra Nyamwasa", x: "Un ataque a tiros contra el ex jefe del Ejército en Johannesburgo fracasó y la justicia sudafricana condenó a varios participantes.", why: "Las condenas están firmes; el vínculo con Kigali lo sostuvo la fiscalía y lo niega Ruanda.", wx: "Sentencia de 2014.", who: "Justicia de Sudáfrica", u: "https://en.wikipedia.org/wiki/Faustin_Kayumba_Nyamwasa", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales del NISS en embajadas vigilan a la diáspora, según organizaciones de derechos humanos.",
    campo: "Agentes y colaboradores en Sudáfrica, Kenia, Uganda, Bélgica y otros países.",
    oficina: "Los servicios informan al presidente y al círculo militar.",
    reclutamiento: "Personal militar del FPR y de la diáspora.",
    tecnica: "Programas espía comerciales y vigilancia de comunicaciones.",
    enlaces: "Relación con servicios occidentales en contraterrorismo; tensiones con Sudáfrica, Burundi y el Congo."
  },
  insiders: [
    { k: "desertor", dir: "sale", ev: 1, d: "2007", n: "Patrick Karegeya", h: "El ex jefe de inteligencia exterior", x: "Rompió con Kagame, se exilió en Sudáfrica y fundó un partido opositor.", cargo: "Jefe de inteligencia exterior", hacia: "Oposición en el exilio", fin: "Asesinado en Johannesburgo en 2013.", who: "Tribunal de investigación de Sudáfrica", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desertor", dir: "sale", ev: 1, d: "2010", n: "Kayumba Nyamwasa", h: "El ex jefe del Ejército que sobrevivió", x: "Ex jefe del Ejército exiliado en Sudáfrica; sobrevivió a un atentado en 2010.", cargo: "Jefe del Ejército y embajador", hacia: "Oposición en el exilio", fin: "Un tribunal sudafricano condenó a varios atacantes en 2014.", who: "Justicia de Sudáfrica", u: "https://en.wikipedia.org/wiki/Faustin_Kayumba_Nyamwasa", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "desinfo", rol: "autor", ev: 2, d: "2022–2025", h: "La negación sobre el Congo", x: "El gobierno niega la presencia de tropas en el Congo pese a los informes de la ONU.", obj: "Evitar sanciones.", who: "Grupo de Expertos de la ONU", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "Ex altos cargos que rompieron con Kagame fueron perseguidos en el exilio.", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Opositores como Victoire Ingabire fueron encarcelados.", u: "https://en.wikipedia.org/wiki/Victoire_Ingabire_Umuhoza", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 2, x: "Periodistas críticos fueron asesinados o perseguidos, según organizaciones de prensa.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Rwanda", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 2, x: "La hija de Rusesabagina, Carine Kanimba, fue infectada con Pegasus, según Amnistía.", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Vigila a las FDLR y a gobiernos vecinos.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 2, x: "Un tribunal sudafricano vinculó al gobierno con el asesinato de Karegeya.", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 2, x: "Ex detenidos denunciaron torturas en centros militares, según Human Rights Watch.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Rwanda", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Llevó con engaños a Rusesabagina desde Dubái a Kigali.", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 2, x: "Apoya al M23 en el Congo, según la ONU.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 1, x: "Apoyó la rebelión que derrocó a Mobutu en el Zaire en 1997.", u: "https://en.wikipedia.org/wiki/First_Congo_War", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 1, x: "Vigila y ataca a opositores de la diáspora, según tribunales extranjeros.", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 2, x: "Armas y apoyo logístico al M23, según la ONU.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 2, x: "Entrena a combatientes del M23, según la ONU.", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto.",
    uso: "Vigilancia, operaciones regionales y protección del gobierno.",
    ingresos: "Minerales del este del Congo salen por Ruanda, según la ONU.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso documentado de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "2020", h: "El vuelo de Rusesabagina", x: "El gobierno admitió haber pagado el avión privado que llevó al disidente a Kigali.", obj: "Capturar a un opositor.", who: "Gobierno de Ruanda", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desvio", rol: "autor", ev: 2, d: "2022–2025", h: "Los minerales del Congo", x: "Los expertos de la ONU informaron que minerales como el coltán salen del territorio del M23 hacia Ruanda.", obj: "Financiar la guerrilla y obtener ingresos.", who: "Grupo de Expertos de la ONU", u: "https://en.wikipedia.org/wiki/March_23_Movement", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "GainJet Aviation", c: "extranjera", rubro: "Vuelos privados", rel: "Contratista", x: "Empresa griega cuyo avión llevó a Rusesabagina de Dubái a Kigali en 2020, según la causa judicial." }
  ],
  struggles: [
    { a: "Ruanda", b: "República Democrática del Congo", k: "Con otros Estados", stake: "El este del Congo y sus minerales", state: "Latente", x: "Acuerdo de paz firmado en 2025, con combates intermitentes." }
  ],
  proxies: [
    {"id": "m23", "s": "M23", "n": "Movimiento 23 de Marzo (M23)", "k": "armado", "d": "2012–", "rol": "patrocina", "hoy": true, "ev": 1, "x": "Grupos de expertos de la ONU documentaron que Ruanda arma y comanda al M23 en el este del Congo; Ruanda lo niega.", "who": "Grupo de expertos de la ONU sobre el Congo", "u": "https://en.wikipedia.org/wiki/March_23_Movement", "st": "Wikipedia: March 23 Movement", "graf": true}
  ],
  cuentas: {"n": 1, "x": "Sin control independiente."},
  sources: [
    { t: "Wikipedia: March 23 Movement", u: "https://en.wikipedia.org/wiki/March_23_Movement" },
    { t: "Wikipedia: Patrick Karegeya", u: "https://en.wikipedia.org/wiki/Patrick_Karegeya" },
    { t: "Wikipedia: Paul Rusesabagina", u: "https://en.wikipedia.org/wiki/Paul_Rusesabagina" }
  ]
};
