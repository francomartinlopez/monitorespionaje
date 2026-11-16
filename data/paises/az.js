// Ficha de Azerbaiyán · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["az"] = {
  id: "az",
  updated: "2026-11-16",
  summary: [
    "Azerbaiyán tiene dos servicios creados en 2015 al dividir el antiguo Ministerio de Seguridad Nacional: el Servicio de Seguridad del Estado (DTX), interno, y el Servicio de Inteligencia Exterior (XKX). Ambos responden al presidente Ilham Aliyev, en el poder desde 2003. Su principal tarea es proteger al gobierno y vigilar a la oposición, la prensa independiente y la diáspora.",
    "Amnistía Internacional confirmó en 2021 que el teléfono de la periodista de investigación Khadija Ismayilova fue infectado con Pegasus. Desde 2023 el gobierno encarceló a decenas de periodistas, entre ellos el equipo del medio Abzas Media. En 2017 el periodista Afgán Mukhtarli fue secuestrado en Georgia y llevado a Bakú.",
    "En septiembre de 2023 Azerbaiyán recuperó todo Nagorno Karabaj en una ofensiva relámpago. Desde 2024 su relación con Rusia se deterioró. En diciembre de 2024 la defensa aérea rusa derribó un avión de la aerolínea nacional, según Bakú. En 2025 el DTX detuvo a empleados de la agencia rusa Sputnik acusados de trabajar para el FSB."
  ],
  keyFacts: [
    { l: "Presidente", v: "Ilham Aliyev", n: "desde 2003" },
    { l: "Pegasus", v: "Khadija Ismayilova infectada", n: "según Amnistía (2021)" },
    { l: "Karabaj", v: "Recuperado", n: "septiembre de 2023" },
    { l: "Avión derribado", v: "25 de diciembre de 2024", n: "Azerbaiyán culpó a la defensa aérea rusa" }
  ],
  power: { humana: 3, senales: 3, ciber: 3, imagenes: 2, encubierta: 2, contra: 4 },
  powerWhy: {
    humana: "Redes en la diáspora, Armenia, Irán y Rusia.",
    senales: "Escuchas internas amplias; cooperación técnica con Israel.",
    ciber: "Cliente de Pegasus según Amnistía y Citizen Lab.",
    imagenes: "Satélites comerciales y drones israelíes y turcos.",
    encubierta: "Operaciones contra exiliados denunciadas en Georgia y Europa.",
    contra: "Control casi total de la vida política interna."
  },
  priorities: [
    { h: "Oposición y prensa", x: "Periodistas, activistas y exiliados." },
    { h: "Armenia", x: "Negociaciones de paz y frontera." },
    { h: "Irán", x: "Minoría azerí en Irán y relación con Israel." },
    { h: "Rusia", x: "Deterioro de la relación desde 2024." },
    { h: "Energía", x: "Oleoductos y gasoductos hacia Europa." }
  ],
  focos: ["Armenia", "Irán", "Rusia", "Oposición en el exilio", "Prensa"],
  bodies: {
    "CS": { since: 1997, how: "Consejo de Seguridad presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Bakú"] },
    "XKX": { since: 2015, how: "Servicio de Inteligencia Exterior: espionaje en el exterior, con foco en Armenia, Irán y Rusia.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Bakú", "Embajadas"] },
    "Defensa": { since: 1991, how: "Inteligencia militar del Ministerio de Defensa, clave en la guerra de 2020 con apoyo turco e israelí.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Drones"], where: ["Bakú"] },
    "DTX": { since: 2015, how: "Servicio de Seguridad del Estado: contraespionaje, antiterrorismo y vigilancia de la oposición.", staff: "No se publica.", budget: "Secreto.", tech: ["Escuchas", "Pegasus"], where: ["Bakú", "Todo el país"] }
  },
  civil: [
    "Los servicios responden al presidente Aliyev.",
    "No hay control parlamentario ni judicial independiente.",
    "Los tribunales condenan a periodistas por contrabando o evasión, acusaciones que sus defensores llaman fabricadas."
  ],
  law: {
    domestic: [
      "Las leyes de ONG de 2014 restringen los fondos extranjeros.",
      "La ley de medios de 2022 creó un registro obligatorio de periodistas.",
      "El código penal se usa contra periodistas con cargos de contrabando de divisas."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "2014-02", dir: "amplia", area: "Expresión", h: "Ley de ONG", x: "Restringe los fondos extranjeros de las organizaciones civiles." },
    { d: "2022-02", dir: "amplia", area: "Prensa", h: "Ley de medios", x: "Registro obligatorio que deja fuera a periodistas independientes." },
    { d: "2023-11", dir: "amplia", area: "Prensa", h: "Detenciones en Abzas Media", x: "Comienza una ola de arrestos de periodistas independientes." }
  ],
  events: [
    { d: "2017-05-29", lat: 41.6, lon: 45.0, c: "Georgia", t: "encubierta", ev: 2, h: "Secuestro de Mukhtarli", x: "El periodista exiliado es secuestrado en Tiflis y entregado en la frontera; fue condenado a seis años en Bakú.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" },
    { d: "2019", lat: 40.45, lon: 49.3, c: "Azerbaijan", t: "ciber", ev: 1, h: "Pegasus contra Khadija Ismayilova", x: "El teléfono de la periodista es infectado con Pegasus durante años, según el análisis forense de Amnistía.", u: "https://en.wikipedia.org/wiki/Khadija_Ismayilova", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-12-25", lat: 43.9, lon: 52.2, c: "Kazakhstan", t: "contra", ev: 2, h: "Avión de AZAL derribado", x: "Un avión de Azerbaijan Airlines se estrella en Kazajistán; Bakú atribuyó el daño a la defensa aérea rusa y Putin pidió disculpas sin admitir culpa.", u: "https://en.wikipedia.org/wiki/Azerbaijan_Airlines_Flight_8243", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Armenia": 3, "Iran": 3, "Russia": 2, "Georgia": 2, "Turkey": 1, "Israel": 1, "France": 1
  },
  timeline: [
    { era: "Independencia", d: "1991", h: "Ministerio de Seguridad Nacional", x: "Hereda el KGB azerbaiyano." },
    { era: "Aliyev", d: "2015", h: "División de los servicios", x: "Se crean el DTX y el XKX tras la caída del ministro Eldar Mahmudov." },
    { era: "", d: "2020", h: "Segunda guerra de Karabaj", x: "Victoria con drones turcos e israelíes." },
    { era: "", d: "2023", h: "Recuperación de Karabaj", x: "Éxodo de la población armenia." },
    { era: "Actual", d: "2024–2026", h: "Prensa y Rusia", x: "Represión de periodistas y crisis con Moscú.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2019–2021", h: "Pegasus contra Khadija Ismayilova", x: "El laboratorio de Amnistía confirmó que el teléfono de la periodista de investigación fue infectado con Pegasus desde 2019. Azerbaiyán figura entre los clientes identificados por el Proyecto Pegasus.", who: "Amnistía Internacional", missing: "", u: "https://en.wikipedia.org/wiki/Khadija_Ismayilova", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2017", h: "El secuestro de Afgán Mukhtarli", x: "El periodista exiliado dijo que lo secuestraron en Tiflis, lo golpearon y le pusieron dinero en el bolsillo antes de entregarlo en la frontera. En Bakú lo condenaron por contrabando.", who: "Afgán Mukhtarli y organizaciones de prensa", missing: "Identificación de los autores.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" },
    { ev: 1, ilegal: true, d: "2023–2025", h: "Abzas Media", x: "Periodistas del medio de investigación Abzas Media fueron condenados a largas penas por contrabando, acusaciones que organizaciones de prensa consideran represalias por sus investigaciones sobre corrupción.", who: "Tribunales de Azerbaiyán y organizaciones de prensa", missing: "", u: "https://en.wikipedia.org/wiki/Abzas_Media", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2015", ev: 1, w: 3, h: "Escándalo de Eldar Mahmudov", x: "El ministro de Seguridad Nacional fue destituido en 2015 por abusos de su ministerio, que el propio gobierno denunció.", why: "No está en duda; el gobierno lo destituyó y juzgó a funcionarios.", wx: "Decisiones oficiales y juicios.", who: "Gobierno de Azerbaiyán", u: "https://en.wikipedia.org/wiki/Eldar_Mahmudov", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales del XKX en embajadas vigilan a la diáspora, según organizaciones de derechos humanos.",
    campo: "Fuentes en Armenia, Irán, Georgia y Rusia.",
    oficina: "Los servicios informan al presidente.",
    reclutamiento: "Personal propio formado en academias del servicio.",
    tecnica: "Escuchas, programas espía y vigilancia de redes.",
    enlaces: "Cooperación estrecha con Turquía e Israel."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 2, d: "2025", n: "Empleados de Sputnik Azerbaiyán", h: "Los periodistas acusados de trabajar para el FSB", x: "El DTX detuvo a empleados de la agencia rusa y los acusó de actuar para el servicio de seguridad ruso.", cargo: "Directivos de Sputnik Azerbaiyán", hacia: "FSB, según Bakú", fin: "Detenidos en 2025; Rusia protestó.", who: "Servicio de Seguridad del Estado de Azerbaiyán", u: "https://en.wikipedia.org/wiki/Azerbaijan%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "blanco", ev: 1, d: "2017", h: "El lavadero azerbaiyano", x: "Periodistas del OCCRP revelaron un sistema que movió unos 2.900 millones de dólares para pagar a políticos europeos y lavar dinero de la élite.", obj: "Comprar influencia en el Consejo de Europa.", who: "OCCRP", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "El gobierno purgó en 2015 al Ministerio de Seguridad Nacional y juzgó a sus funcionarios.", u: "https://en.wikipedia.org/wiki/Eldar_Mahmudov", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Opositores son encarcelados con frecuencia, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Khadija Ismayilova fue espiada con Pegasus y los periodistas de Abzas Media fueron encarcelados.", u: "https://en.wikipedia.org/wiki/Khadija_Ismayilova", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Activistas de derechos humanos fueron detenidos en sucesivas olas represivas.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Armenia, Irán y, desde 2024, Rusia son blancos de los servicios.", u: "https://en.wikipedia.org/wiki/Azerbaijan%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 2, x: "Ismayilova fue chantajeada con videos íntimos grabados en secreto en su casa en 2012.", u: "https://en.wikipedia.org/wiki/Khadija_Ismayilova", st: "Wikipedia (síntesis de fuentes)" },
    asesinato: { ev: 3, x: "Exiliados azerbaiyanos fueron atacados en Francia; sus allegados acusan a Bakú, que lo niega.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 2, x: "Detenidos denunciaron torturas, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "Afgán Mukhtarli fue secuestrado en Georgia y llevado a Azerbaiyán.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" },
    propaganda: { ev: 1, x: "El llamado lavadero azerbaiyano pagó a políticos europeos para defender al gobierno.", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat", st: "Wikipedia (síntesis de fuentes)" },
    conflictos: { ev: 0, x: "Esta ficha no encontró operaciones encubiertas documentadas; Karabaj fue una guerra abierta." },
    cultural: { ev: 2, x: "Financió eventos y grupos de cabildeo en Europa para mejorar su imagen.", u: "https://en.wikipedia.org/wiki/Caviar_diplomacy", st: "Wikipedia (síntesis de fuentes)" },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 2, x: "Pagos a legisladores europeos a través del lavadero, según el OCCRP.", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat", st: "Wikipedia (síntesis de fuentes)" },
    diaspora: { ev: 2, x: "Vigila a exiliados en Europa, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 1, x: "Empresas pantalla del lavadero movieron fondos de la élite.", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 2, x: "Vigila y detiene a creyentes chiitas acusados de vínculos con Irán.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Azerbaijan", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 2, x: "Coopera con Israel frente a Irán, según la prensa.", u: "https://en.wikipedia.org/wiki/Azerbaijan%E2%80%93Israel_relations", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto.",
    uso: "Vigilancia interna, operaciones regionales y cabildeo.",
    ingresos: "La renta petrolera financia al Estado y su aparato de seguridad.",
    empresas: "Empresas pantalla británicas canalizaron el lavadero azerbaiyano, según el OCCRP.",
    bancos: "Un banco danés sirvió al lavadero, según la investigación periodística.",
    crimen: "Esta ficha no encontró uso documentado de organizaciones criminales.",
    cobertura: "El gobierno financió grupos de cabildeo en Europa, la llamada diplomacia del caviar."
  },
  fondos: [
    { k: "cobertura", rol: "autor", ev: 1, d: "2012–2014", h: "El lavadero azerbaiyano", x: "Unos 2.900 millones de dólares pasaron por empresas pantalla; parte se pagó a políticos y periodistas europeos.", monto: "Unos 2.900 millones de dólares", obj: "Comprar influencia y lavar dinero.", who: "OCCRP", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Azerbaiyán figura como cliente de Pegasus, según el Proyecto Pegasus." }
  ],
  struggles: [
    { a: "Azerbaiyán", b: "Rusia", k: "Con otros Estados", stake: "El avión derribado y la influencia rusa", state: "Abierta", x: "Detenciones cruzadas y cierre de medios rusos desde 2025." }
  ],
  sources: [
    { t: "Wikipedia: Khadija Ismayilova", u: "https://en.wikipedia.org/wiki/Khadija_Ismayilova" },
    { t: "Wikipedia: Azerbaijani laundromat", u: "https://en.wikipedia.org/wiki/Azerbaijani_laundromat" },
    { t: "Wikipedia: Azerbaijan Airlines Flight 8243", u: "https://en.wikipedia.org/wiki/Azerbaijan_Airlines_Flight_8243" },
    { t: "OC Media: el caso Mukhtarli", u: "https://oc-media.org/tag/ssg-files" }
  ]
};
