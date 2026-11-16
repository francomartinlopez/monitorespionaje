// Ficha de Países Bajos · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["nl"] = {
  id: "nl",
  updated: "2026-11-15",
  summary: [
    "Los Países Bajos tienen dos servicios con prestigio técnico: el Servicio General de Inteligencia y Seguridad (AIVD), dirigido por Simone Smit, y el Servicio de Inteligencia y Seguridad Militar (MIVD), dirigido por el vicealmirante Peter Reesink. El Coordinador Nacional de Antiterrorismo y Seguridad (NCTV) coordina la respuesta del Estado.",
    "La Haya alberga la Corte Penal Internacional, la Organización para la Prohibición de las Armas Químicas (OPAQ) y Europol, lo que la convierte en blanco de servicios extranjeros. En 2018 el MIVD frustró un hackeo de la inteligencia militar rusa contra la OPAQ y en 2022 descubrió a un espía ruso que se hacía pasar por brasileño para entrar a la Corte Penal Internacional.",
    "En su informe sobre 2025, el AIVD dijo que en sus 80 años de historia nunca hubo un nivel de amenaza como el actual. En mayo de 2025 ambos servicios expusieron a Laundry Bear, un grupo de hackers rusos que robó datos de miles de policías neerlandeses."
  ],
  keyFacts: [
    { l: "Directora del AIVD", v: "Simone Smit", n: "informe anual 2025" },
    { l: "Director del MIVD", v: "Vicealmirante Peter Reesink", n: "informe anual 2025" },
    { l: "Hackeo a la OPAQ frustrado", v: "Abril de 2018", n: "cuatro oficiales rusos expulsados" },
    { l: "Laundry Bear", v: "Mayo de 2025", n: "grupo ruso expuesto por el AIVD y el MIVD" }
  ],
  power: { humana: 3, senales: 4, ciber: 5, imagenes: 2, encubierta: 2, contra: 4 },
  powerWhy: {
    humana: "Red de fuentes en Rusia y Medio Oriente; aportó a la operación Stuxnet, según la prensa.",
    senales: "El MIVD y el AIVD operan una unidad conjunta de interceptación y ciberinteligencia.",
    ciber: "El AIVD accedió a las cámaras y redes del grupo ruso Cozy Bear, según la prensa; expuso a Laundry Bear.",
    imagenes: "Depende de socios y satélites comerciales.",
    encubierta: "Participó en el sabotaje contra el programa nuclear iraní, según la prensa.",
    contra: "Detectó a espías rusos en la OPAQ y la Corte Penal Internacional."
  },
  priorities: [
    { h: "Rusia", x: "Espionaje, sabotaje y ciberataques." },
    { h: "China", x: "Espionaje tecnológico, en especial sobre semiconductores." },
    { h: "Organizaciones internacionales", x: "Proteger a la CPI, la OPAQ y Europol." },
    { h: "Crimen y Estados", x: "Uso de redes criminales por servicios extranjeros." },
    { h: "Terrorismo", x: "Yihadismo y radicalización en línea." }
  ],
  focos: ["Rusia", "China", "Irán", "La Haya", "Semiconductores"],
  bodies: {
    "NCTV": { since: 2012, how: "Coordinador Nacional de Antiterrorismo y Seguridad del Ministerio de Justicia: evalúa amenazas y coordina la respuesta.", staff: "No se publica.", budget: "Dentro de Justicia.", tech: [], where: ["La Haya"] },
    "AIVD": { since: 2002, how: "Servicio General de Inteligencia y Seguridad: inteligencia interior y exterior civil, contraespionaje y ciberinteligencia. Heredero del BVD, creado en 1945.", staff: "Unas 2.000 personas, según estimaciones públicas.", budget: "Público en el presupuesto.", tech: ["Unidad conjunta de señales y ciber"], where: ["Zoetermeer"] },
    "MIVD": { since: 2002, how: "Servicio de Inteligencia y Seguridad Militar: inteligencia militar, contrainteligencia y ciberoperaciones.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Interceptación", "Ciberoperaciones"], where: ["La Haya"] },
    "CTIVD": { since: 2002, how: "Comisión de Control de los Servicios de Inteligencia y Seguridad: supervisa la legalidad de ambos servicios.", staff: "No se publica.", budget: "Público.", tech: [], where: ["La Haya"] }
  },
  civil: [
    "El AIVD responde al ministro del Interior y el MIVD a la ministra de Defensa.",
    "Una comisión independiente evalúa previamente las medidas más intrusivas.",
    "La comisión de servicios de inteligencia del Parlamento recibe información secreta."
  ],
  law: {
    domestic: [
      "La ley de servicios de inteligencia de 2017 permite interceptar cables de manera masiva con controles.",
      "En 2018 los votantes rechazaron esa ley en un referéndum consultivo; el gobierno la mantuvo con ajustes.",
      "Una ley temporal de 2024 da más margen contra ciberataques estatales."
    ],
    foreign: [
      "Ambos servicios pueden operar en el exterior y hackear sistemas con autorización ministerial."
    ],
    oversight: [
      "Comisión de Control (CTIVD).",
      "Comisión de evaluación de facultades (TIB), que aprueba medidas antes de su uso.",
      "Comisión de servicios de inteligencia del Parlamento."
    ]
  },
  rights: [
    { d: "2017-07", dir: "amplia", area: "Privacidad", h: "Ley de servicios de inteligencia", x: "Permite la interceptación masiva de cables; la prensa la llamó la ley de arrastre." },
    { d: "2018-03", dir: "recorta", area: "Privacidad", h: "Referéndum consultivo", x: "Los votantes rechazan la ley; el gobierno agrega controles pero no la deroga." },
    { d: "2024-07", dir: "amplia", area: "Privacidad", h: "Ley temporal de ciber", x: "Amplía las facultades contra ataques de servicios estatales." }
  ],
  events: [
    { d: "2007", lat: 33.72, lon: 51.72, c: "Iran", t: "sabotaje", ev: 2, h: "Stuxnet en Natanz", x: "Un ingeniero reclutado por el AIVD habría ayudado a introducir el virus en la planta nuclear iraní, según una investigación del diario de Volkskrant de 2024.", u: "https://en.wikipedia.org/wiki/Stuxnet", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2018-04-13", lat: 52.09, lon: 4.28, c: "Netherlands", t: "contra", ev: 1, h: "Hackeo a la OPAQ frustrado", x: "El MIVD sorprende a cuatro oficiales de la inteligencia militar rusa que intentaban hackear la red wifi de la OPAQ y los expulsa.", u: "https://en.wikipedia.org/wiki/Organisation_for_the_Prohibition_of_Chemical_Weapons", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2022-04", lat: 52.11, lon: 4.32, c: "Netherlands", t: "contra", ev: 1, h: "El falso brasileño en la CPI", x: "El MIVD descubre que un pasante aceptado en la Corte Penal Internacional era un oficial ruso con identidad brasileña falsa.", u: "https://en.wikipedia.org/wiki/Sergey_Cherkasov", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-09", lat: 52.08, lon: 5.12, c: "Netherlands", t: "ciber", ev: 1, h: "Robo de datos de la policía", x: "Hackers rusos roban datos de contacto de miles de policías; en 2025 el AIVD y el MIVD los identificaron como Laundry Bear.", u: "https://www.defensie.nl/nieuws/20250527-onbekende-russische-groep-achter-hacks-nederlandse-doelen", st: "Ministerio de Defensa de los Países Bajos" }
  ],
  interest: {
    "Russia": 3, "China": 3, "Iran": 2, "Belarus": 1, "Syria": 1, "Afghanistan": 1, "Belgium": 1, "Germany": 1
  },
  timeline: [
    { era: "Posguerra", d: "1945", h: "Nace el BVD", x: "Servicio de seguridad que vigila al comunismo durante la Guerra Fría." },
    { era: "", d: "2002", h: "AIVD y MIVD", x: "Nueva ley de servicios y nombres actuales." },
    { era: "", d: "2014", h: "MH17", x: "El derribo del avión sobre Ucrania mata a 196 neerlandeses." },
    { era: "", d: "2018", h: "OPAQ y referéndum", x: "Golpe a la inteligencia rusa y rechazo popular a la ley de arrastre." },
    { era: "Actual", d: "2025–2026", h: "Laundry Bear", x: "Amenaza rusa en su punto más alto, según el AIVD.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2018", h: "La operación rusa contra la OPAQ", x: "Cuatro oficiales de la unidad 26165 de la inteligencia militar rusa estacionaron un auto con equipos de hackeo junto a la sede de la OPAQ, que investigaba el envenenamiento de Serguéi Skripal. El MIVD los detuvo y expulsó, y el gobierno publicó los detalles en octubre de 2018.", who: "Gobierno de los Países Bajos", missing: "", u: "https://en.wikipedia.org/wiki/Organisation_for_the_Prohibition_of_Chemical_Weapons", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2022", h: "Serguéi Cherkásov", x: "Un oficial de la inteligencia militar rusa construyó durante años la identidad del brasileño Viktor Muller Ferreira y fue aceptado como pasante en la CPI. El MIVD lo descubrió y lo deportó a Brasil, donde fue condenado por uso de documentos falsos.", who: "MIVD", missing: "", u: "https://en.wikipedia.org/wiki/Sergey_Cherkasov", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: false, d: "2007", h: "El papel neerlandés en Stuxnet", x: "Una investigación de de Volkskrant de 2024 informó que un ingeniero reclutado por el AIVD introdujo el virus Stuxnet en la planta iraní de Natanz. El gobierno neerlandés no lo confirmó.", who: "de Volkskrant", missing: "Confirmación oficial.", u: "https://en.wikipedia.org/wiki/Stuxnet", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2014-07", ev: 1, w: 3, h: "El derribo del MH17", x: "Un misil ruso derribó sobre Ucrania un avión con 196 neerlandeses; los servicios no habían advertido del riesgo de sobrevolar la zona, según la junta de seguridad.", why: "La autoría rusa la estableció la justicia neerlandesa en 2022; la falla de advertencia la señaló la junta de seguridad.", wx: "Sentencia de 2022 e informe de la junta de seguridad.", who: "Junta de Seguridad de los Países Bajos", u: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_17", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales de enlace en embajadas; el país expulsó a numerosos diplomáticos rusos que espiaban.",
    campo: "Fuentes humanas en el exterior; el AIVD reclutó a un ingeniero para la operación Stuxnet, según la prensa.",
    oficina: "La sede de Zoetermeer publica un informe anual detallado y alertas sobre amenazas.",
    reclutamiento: "Concursos abiertos y campañas para técnicos y analistas.",
    tecnica: "Unidad conjunta de señales y ciber; capacidad de hackeo ofensivo con autorización.",
    enlaces: "Socio cercano de la NSA, el GCHQ y los servicios europeos; aporta en la llamada coalición de los nueve ojos."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 2, d: "2007", n: "Erik van Sabben", h: "El ingeniero de Stuxnet", x: "Ingeniero que trabajaba en Dubái y habría introducido el virus en Natanz por encargo del AIVD, según de Volkskrant.", cargo: "Ingeniero de una empresa de transporte", hacia: "AIVD", fin: "Murió en un accidente en 2009.", who: "de Volkskrant", u: "https://en.wikipedia.org/wiki/Stuxnet", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "robo", rol: "blanco", ev: 1, d: "2024-09", h: "Los datos de la policía", x: "Laundry Bear roba datos de contacto de decenas de miles de empleados policiales.", obj: "Espionaje y posibles operaciones futuras.", who: "AIVD y MIVD", u: "https://www.defensie.nl/nieuws/20250527-onbekende-russische-groep-achter-hacks-nederlandse-doelen", st: "Ministerio de Defensa de los Países Bajos" },
    { k: "filtracion", rol: "autor", ev: 2, d: "2018-01", h: "El AIVD dentro de Cozy Bear", x: "La prensa informó que el AIVD accedió a las cámaras y redes del grupo de hackers rusos Cozy Bear y avisó a EE.UU. del ataque al Partido Demócrata.", obj: "La filtración no tuvo un fin político conocido.", who: "de Volkskrant y Nieuwsuur", u: "https://en.wikipedia.org/wiki/Cozy_Bear", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    periodistas: { ev: 1, x: "Un tribunal ordenó en 2006 al servicio dejar de vigilar a periodistas que publicaron documentos filtrados.", u: "https://en.wikipedia.org/wiki/General_Intelligence_and_Security_Service", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "El AIVD vigila a extremistas de izquierda y derecha; en 2025 calificó como baja la amenaza de los activistas por Gaza.", u: "https://nos.nl/l/2611683", st: "NOS" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Rusia, China e Irán son los blancos centrales de la contrainteligencia.", u: "https://nos.nl/l/2611683", st: "NOS" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 2, x: "Participó en la operación Stuxnet contra el programa nuclear iraní, según la prensa.", u: "https://en.wikipedia.org/wiki/Stuxnet", st: "Wikipedia (síntesis de fuentes)" },
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
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
    inteligencia: { ev: 2, x: "Avisó a EE.UU. del hackeo ruso al Partido Demócrata, según la prensa.", u: "https://en.wikipedia.org/wiki/Cozy_Bear", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos del AIVD y el MIVD figuran en los de Interior y Defensa. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Personal, ciberinteligencia, interceptación y contraespionaje.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "El AIVD estudia desde 2025 cómo otros Estados usan redes criminales en los Países Bajos.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "crimen", rol: "blanco", ev: 2, d: "2025", h: "Criminales al servicio de Estados", x: "El AIVD informó que servicios extranjeros contratan redes criminales en los Países Bajos para sus operaciones.", obj: "Tercerizar acciones y negar la autoría.", who: "AIVD", u: "https://www.securitymanagement.nl/jaarverslag-aivd-wereld-vol-conflict-en-botsende-belangen/", st: "Security Management" }
  ],
  companies: [
    { n: "ASML", c: "nacional", rubro: "Semiconductores", rel: "Blanco a proteger", x: "Empresa clave en máquinas de litografía, blanco del espionaje chino según los servicios." }
  ],
  struggles: [
    { a: "Servicios", b: "Organizaciones de privacidad", k: "Con otros poderes", stake: "La interceptación masiva", state: "Latente", x: "El referéndum de 2018 mostró desconfianza hacia la ley de servicios." }
  ],
  sources: [
    { t: "Ministerio de Defensa: Laundry Bear (2025)", u: "https://www.defensie.nl/nieuws/20250527-onbekende-russische-groep-achter-hacks-nederlandse-doelen" },
    { t: "NOS: el informe anual del AIVD (2026)", u: "https://nos.nl/l/2611683" },
    { t: "Dutch IT Channel: el informe del AIVD sobre 2025", u: "https://www.dutchitchannel.nl/research/730544/rusland-en-china-voeren-digitale-druk-op-nederland-op" },
    { t: "Wikipedia: General Intelligence and Security Service", u: "https://en.wikipedia.org/wiki/General_Intelligence_and_Security_Service" }
  ]
};
