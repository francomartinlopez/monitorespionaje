// Ficha de Argelia · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["dz"] = {
  id: "dz",
  updated: "2026-11-16",
  summary: [
    "Durante 25 años el Departamento de Inteligencia y Seguridad (DRS) del general Mohamed \"Toufik\" Mediène fue el verdadero centro del poder en Argelia. En 2016 el presidente Abdelaziz Buteflika lo disolvió y repartió sus funciones. Hoy los servicios principales son la Dirección General de Seguridad Interior (DGSI), la Dirección General de Documentación y Seguridad Exterior (DGDSE) y la Dirección Central de Seguridad del Ejército (DCSA).",
    "En la guerra civil de la década de 1990, desertores y periodistas acusaron al DRS de infiltrar y manipular a grupos islamistas armados, incluso en matanzas atribuidas a ellos. El Ejército y los servicios siguen siendo el pilar del poder bajo el presidente Abdelmadjid Tebboune.",
    "En 2025 la relación con Francia entró en crisis cuando la justicia francesa acusó a un agente consular argelino por el secuestro en 2024 de un opositor en la periferia de París. Ambos países expulsaron diplomáticos. Argelia y Marruecos rompieron relaciones en 2021 y se acusan de espionaje mutuo."
  ],
  keyFacts: [
    { l: "Disolución del DRS", v: "2016", n: "tras 25 años bajo el general Toufik" },
    { l: "Presidente", v: "Abdelmadjid Tebboune", n: "desde 2019" },
    { l: "Secuestro de un opositor en Francia", v: "Abril de 2024", n: "agente consular acusado en 2025" },
    { l: "Ruptura con Marruecos", v: "Agosto de 2021", n: "Argelia cortó relaciones diplomáticas" }
  ],
  power: { humana: 3, senales: 2, ciber: 2, imagenes: 1, encubierta: 3, contra: 4 },
  powerWhy: {
    humana: "Redes en el Sahel, Francia y la diáspora argelina.",
    senales: "Capacidades moderadas, con cooperación rusa.",
    ciber: "Capacidad propia limitada.",
    imagenes: "Satélites de observación de uso civil.",
    encubierta: "Operaciones contra opositores en Francia, según la justicia francesa.",
    contra: "Aparato de seguridad muy extendido desde la guerra civil."
  },
  priorities: [
    { h: "Marruecos", x: "Sáhara Occidental y rivalidad regional." },
    { h: "Sahel", x: "Malí, Níger y grupos yihadistas." },
    { h: "Francia", x: "Diáspora y opositores en el exilio." },
    { h: "Oposición", x: "El movimiento Hirak y los autonomistas cabilios." },
    { h: "Libia", x: "Frontera e inestabilidad." }
  ],
  focos: ["Marruecos", "Sáhara Occidental", "Malí", "Francia", "Libia"],
  bodies: {
    "HCS": { since: 1989, how: "Alto Consejo de Seguridad presidido por el presidente.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Argel"] },
    "DGDSE": { since: 2016, how: "Dirección General de Documentación y Seguridad Exterior: inteligencia en el exterior.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Argel", "Embajadas y consulados"] },
    "DCSA": { since: 2016, how: "Dirección Central de Seguridad del Ejército: contrainteligencia militar, con fuerte peso político.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Argel"] },
    "DGSI": { since: 2016, how: "Dirección General de Seguridad Interior: contraespionaje, antiterrorismo y vigilancia de la oposición.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Argel", "Todo el país"] }
  },
  civil: [
    "Los servicios responden al presidente y al Estado Mayor del Ejército.",
    "No hay control parlamentario efectivo.",
    "Los jefes de los servicios cambian con frecuencia según las luchas internas del poder."
  ],
  law: {
    domestic: [
      "La reforma del código penal de 2021 amplió la definición de terrorismo e incluyó a movimientos opositores.",
      "Las leyes sobre noticias falsas de 2020 castigan a periodistas y usuarios de redes.",
      "La amnistía de 2005 impidió juzgar los crímenes de la guerra civil."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "1992-02", dir: "amplia", area: "Debido proceso", h: "Estado de emergencia", x: "Tras el golpe que anula las elecciones rige hasta 2011." },
    { d: "2005-09", dir: "amplia", area: "Debido proceso", h: "Carta por la paz", x: "Amnistía que prohíbe investigar a las fuerzas de seguridad por la guerra civil." },
    { d: "2021-06", dir: "amplia", area: "Expresión", h: "Terrorismo ampliado", x: "Movimientos opositores pueden ser declarados terroristas." }
  ],
  events: [
    { d: "1996-03-27", lat: 36.27, lon: 2.75, c: "Algeria", t: "encubierta", ev: 3, h: "Secuestro de los monjes de Tibhirine", x: "Siete monjes franceses son secuestrados y asesinados; el GIA lo reivindicó, pero desertores acusaron al DRS de manipulación.", u: "https://en.wikipedia.org/wiki/Assassination_of_the_monks_of_Tibhirine", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-04-29", lat: 48.8, lon: 2.35, c: "France", t: "encubierta", ev: 2, h: "Secuestro de Amir DZ", x: "Un influencer opositor argelino es secuestrado cerca de París; la justicia francesa acusó en 2025 a un agente consular argelino.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93France_relations", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "Morocco": 3, "W. Sahara": 3, "Mali": 2, "Niger": 2, "Libya": 2, "France": 2, "Tunisia": 1, "Spain": 1
  },
  timeline: [
    { era: "Independencia", d: "1962", h: "Seguridad Militar", x: "Los servicios heredan el aparato del FLN." },
    { era: "", d: "1990", h: "Nace el DRS", x: "Toufik asume el mando, que mantiene 25 años." },
    { era: "Guerra civil", d: "1992–2002", h: "Década negra", x: "Unos 150.000 muertos; acusaciones de manipulación del DRS." },
    { era: "Buteflika", d: "2016", h: "Disolución del DRS", x: "El presidente desarma el poder del servicio." },
    { era: "Actual", d: "2024–2026", h: "Crisis con Francia", x: "Secuestro de un opositor y expulsiones de diplomáticos.", now: true }
  ],
  cases: [
    { ev: 3, ilegal: true, d: "1994–1997", h: "El DRS y los grupos islamistas", x: "Ex oficiales del Ejército y del DRS, como Habib Souaïdia y Mohamed Samraoui, sostuvieron que los servicios infiltraron y manipularon al Grupo Islámico Armado. El Estado lo niega y la amnistía impidió investigar.", who: "Ex oficiales argelinos en el exilio", missing: "Documentos oficiales y un juicio.", u: "https://en.wikipedia.org/wiki/Armed_Islamic_Group_of_Algeria", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2024", h: "El secuestro de Amir DZ", x: "La justicia francesa acusó a un empleado del consulado argelino en Créteil y a otros dos hombres por el secuestro del influencer opositor Amir Boukhors. Argelia denunció una maniobra y expulsó a funcionarios franceses.", who: "Fiscalía antiterrorista de Francia", missing: "Un juicio.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93France_relations", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2019", h: "El juicio del general Toufik", x: "El ex jefe del DRS fue condenado en 2019 a 15 años por conspirar contra el Ejército durante la crisis del Hirak, junto con Saïd Buteflika. La condena se anuló en 2021.", who: "Tribunal militar de Blida", missing: "", u: "https://en.wikipedia.org/wiki/Mohamed_Medi%C3%A8ne", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2013-01", ev: 1, w: 3, h: "In Amenas", x: "Yihadistas tomaron una planta de gas con cientos de rehenes; murieron al menos 37 extranjeros en el asalto.", why: "No está en duda; se discute la decisión de asaltar sin negociar.", wx: "Investigaciones británicas y noruegas.", who: "Gobiernos del Reino Unido y Noruega", u: "https://en.wikipedia.org/wiki/In_Amenas_hostage_crisis", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales de inteligencia en consulados, sobre todo en Francia, según la justicia francesa.",
    campo: "Redes en el Sahel y en la diáspora.",
    oficina: "Los servicios informan al presidente y al jefe del Ejército.",
    reclutamiento: "Personal militar.",
    tecnica: "Vigilancia de comunicaciones y redes sociales.",
    enlaces: "Cooperación con Rusia; contraterrorismo con Francia y EE.UU. según el momento."
  },
  insiders: [
    { k: "desertor", dir: "sale", ev: 2, d: "1996", n: "Mohamed Samraoui", h: "El coronel del DRS que acusó a su servicio", x: "Ex subjefe de la contrainteligencia que se exilió en Alemania y acusó al DRS de manipular a grupos islamistas.", cargo: "Coronel del DRS", hacia: "Opinión pública europea", fin: "Vive en el exilio; condenado en ausencia en Argelia.", who: "El propio Samraoui", u: "https://en.wikipedia.org/wiki/Armed_Islamic_Group_of_Algeria", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1992–2026", h: "Los desaparecidos de la década negra", x: "La amnistía de 2005 cerró las investigaciones sobre miles de desaparecidos.", obj: "Evitar responsabilidades de las fuerzas de seguridad.", aquien: "Las familias y la sociedad", como: "Denuncias de asociaciones de familiares.", who: "Organizaciones de derechos humanos", u: "https://en.wikipedia.org/wiki/Algerian_Civil_War", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "Los servicios purgaron a generales en sucesivas luchas internas.", u: "https://en.wikipedia.org/wiki/Mohamed_Medi%C3%A8ne", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Dirigentes del Hirak y opositores fueron encarcelados.", u: "https://en.wikipedia.org/wiki/Hirak_(Algeria)", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Periodistas como Ihsane El Kadi fueron condenados.", u: "https://en.wikipedia.org/wiki/Hirak_(Algeria)", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Activistas cabilios y del Hirak fueron procesados por terrorismo.", u: "https://en.wikipedia.org/wiki/Hirak_(Algeria)", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Marruecos es el principal rival.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93Morocco_relations", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 3, x: "Acusaciones de desertores sobre asesinatos en la guerra civil, sin investigación judicial.", u: "https://en.wikipedia.org/wiki/Armed_Islamic_Group_of_Algeria", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "La tortura en la guerra civil está documentada por organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Algerian_Civil_War", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "Secuestro de un opositor en Francia en 2024, según la justicia francesa.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93France_relations", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 1, x: "Apoya al Frente Polisario en el Sáhara Occidental.", u: "https://en.wikipedia.org/wiki/Polisario_Front", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 2, x: "Vigila y presiona a opositores en Francia, según la justicia francesa.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93France_relations", st: "Wikipedia (síntesis de fuentes)" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 1, x: "Arma y entrena al Frente Polisario.", u: "https://en.wikipedia.org/wiki/Polisario_Front", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 1, x: "Coopera con Rusia en defensa e inteligencia.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 1, x: "Entrena a combatientes del Polisario en Tinduf.", u: "https://en.wikipedia.org/wiki/Polisario_Front", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto.",
    uso: "Seguridad interna, Sahel y apoyo al Polisario.",
    ingresos: "La renta del gas y el petróleo financia al Estado.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 1, d: "1976–", h: "El apoyo al Polisario", x: "Argelia financia, arma y alberga al Frente Polisario en Tinduf.", obj: "Apoyar la independencia del Sáhara Occidental frente a Marruecos.", who: "Gobierno de Argelia y ONU", u: "https://en.wikipedia.org/wiki/Polisario_Front", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Sonatrach", c: "nacional", rubro: "Hidrocarburos", rel: "Estatal", x: "La petrolera estatal financia al Estado; sus directivos fueron investigados por el DRS en 2010." }
  ],
  struggles: [
    { a: "Presidencia", b: "Ejército y servicios", k: "Interna", stake: "El reparto del poder", state: "Latente", x: "La disolución del DRS y las purgas reflejan la pugna entre clanes." }
  ],
  proxies: [
    {"id": "polisario", "s": "Frente Polisario", "n": "Frente Polisario", "k": "armado", "d": "1975–", "rol": "patrocina", "hoy": true, "ev": 1, "x": "Argelia aloja y sostiene al Frente Polisario en Tinduf.", "who": "Gobierno de Argelia; ONU", "u": "https://en.wikipedia.org/wiki/Polisario_Front", "st": "Wikipedia: Polisario Front"}
  ],
  cuentas: {"n": 1, "x": "Sin control civil efectivo."},
  sources: [
    { t: "Wikipedia: Mohamed Mediène", u: "https://en.wikipedia.org/wiki/Mohamed_Medi%C3%A8ne" },
    { t: "Wikipedia: Algeria–France relations", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93France_relations" },
    { t: "Wikipedia: Algerian Civil War", u: "https://en.wikipedia.org/wiki/Algerian_Civil_War" }
  ]
};
