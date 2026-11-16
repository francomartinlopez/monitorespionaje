// Ficha de Australia · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["au"] = {
  id: "au",
  updated: "2026-11-15",
  summary: [
    "Australia integra la alianza Cinco Ojos y aloja Pine Gap, una de las principales bases de inteligencia de señales de EE.UU. Sus servicios son el Servicio Secreto de Inteligencia (ASIS), la Dirección de Señales (ASD), la Organización de Inteligencia de Defensa (DIO) y la Organización de Inteligencia de Seguridad (ASIO), coordinados por la Oficina de Inteligencia Nacional (ONI).",
    "El director de la ASIO, Mike Burgess, advirtió que el espionaje y la injerencia extranjera superaron al terrorismo como principal amenaza, con China a la cabeza. En agosto de 2025 Australia expulsó al embajador de Irán después de que la ASIO concluyera que la Guardia Revolucionaria ordenó incendios contra blancos judíos en Sídney y Melbourne.",
    "En diciembre de 2025 un ataque terrorista en la playa de Bondi durante una celebración de Janucá mató a 15 personas. Una comisión real sobre antisemitismo examina si las agencias desviaron recursos del antiterrorismo; Burgess lo niega. En el pasado, el ASIS espió al gobierno de Timor Oriental durante una negociación petrolera en 2004."
  ],
  keyFacts: [
    { l: "Director de la ASIO", v: "Mike Burgess", n: "desde 2019" },
    { l: "Complots terroristas frustrados", v: "31", n: "desde 2014, según la ASIO (junio de 2026)" },
    { l: "Embajador iraní expulsado", v: "Agosto de 2025", n: "por incendios ordenados por la Guardia Revolucionaria, según la ASIO" },
    { l: "Ataque de Bondi", v: "15 muertos", n: "diciembre de 2025" }
  ],
  power: { humana: 3, senales: 5, ciber: 4, imagenes: 4, encubierta: 2, contra: 4 },
  powerWhy: {
    humana: "El ASIS es chico pero activo en el Indo-Pacífico y el sudeste asiático.",
    senales: "Pine Gap y la ASD forman parte de la red de Cinco Ojos con cobertura sobre Asia.",
    ciber: "La ASD tiene capacidad ofensiva reconocida, usada contra el Estado Islámico.",
    imagenes: "Acceso pleno a satélites de EE.UU. y capacidades propias de análisis geoespacial.",
    encubierta: "Operaciones puntuales documentadas, como el espionaje en Timor Oriental; el ASIS no puede usar violencia.",
    contra: "Leyes estrictas contra la injerencia extranjera y casos llevados a juicio."
  },
  priorities: [
    { h: "China", x: "Espionaje, injerencia política y competencia en el Pacífico." },
    { h: "Irán", x: "Ataques contra la comunidad judía y amenazas a disidentes." },
    { h: "Terrorismo", x: "Radicalización rápida de jóvenes y violencia política." },
    { h: "AUKUS", x: "Proteger los secretos de submarinos y tecnología militar." },
    { h: "Pacífico Sur", x: "Influencia china en Islas Salomón y otros países." }
  ],
  focos: ["China", "Irán", "Indo-Pacífico", "AUKUS", "Antisemitismo"],
  bodies: {
    "ONI": { since: 2018, how: "Oficina de Inteligencia Nacional: coordina a los servicios y hace evaluaciones para el primer ministro.", staff: "No se publica.", budget: "Público en el presupuesto.", tech: [], where: ["Canberra"] },
    "ASIS": { since: 1952, how: "Servicio Secreto de Inteligencia de Australia: inteligencia humana en el exterior. Su existencia se reconoció en 1977.", staff: "No se publica.", budget: "Público en el presupuesto, sin detalle.", tech: [], where: ["Canberra", "Embajadas"] },
    "ASD": { since: 1947, how: "Dirección de Señales de Australia: inteligencia de señales, ciberseguridad y operaciones cibernéticas ofensivas. Desde 2018 es un organismo legal independiente.", staff: "No se publica.", budget: "Público en el presupuesto.", tech: ["Interceptación", "Ciberoperaciones"], where: ["Canberra", "Pine Gap", "Geraldton"] },
    "DIO": { since: 1990, how: "Organización de Inteligencia de Defensa: análisis militar y estratégico para el gobierno y las Fuerzas Armadas.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Canberra"] },
    "ASIO": { since: 1949, how: "Organización de Inteligencia de Seguridad de Australia: contraespionaje, injerencia extranjera y terrorismo. Su director da una evaluación pública anual de amenazas.", staff: "No se publica.", budget: "Público en el presupuesto.", tech: ["Escuchas con orden ministerial"], where: ["Canberra", "Todas las capitales"] },
    "IGIS": { since: 1986, how: "Inspector General de Inteligencia y Seguridad: controla la legalidad de las seis agencias principales.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Canberra"] }
  },
  civil: [
    "Las agencias responden a ministros; las órdenes de escucha de la ASIO las firma el ministro del Interior.",
    "La Comisión Parlamentaria Conjunta de Inteligencia y Seguridad revisa leyes y presupuestos.",
    "En 2026 una comisión real sobre antisemitismo examina la actuación de las agencias antes del ataque de Bondi."
  ],
  law: {
    domestic: [
      "La ley de la ASIO de 1979 regula sus poderes de vigilancia y detención para interrogar.",
      "Las leyes de injerencia extranjera de 2018 castigan la injerencia encubierta y crearon un registro de agentes extranjeros.",
      "La ley de asistencia y acceso de 2018 obliga a las empresas a ayudar a acceder a comunicaciones cifradas."
    ],
    foreign: [
      "La ley de servicios de inteligencia de 2001 rige al ASIS y la ASD; el ASIS no puede usar violencia ni armas salvo para defensa propia."
    ],
    oversight: [
      "Inspector General de Inteligencia y Seguridad (IGIS).",
      "Comisión Parlamentaria Conjunta de Inteligencia y Seguridad.",
      "Monitor Independiente de la Legislación de Seguridad Nacional."
    ]
  },
  rights: [
    { d: "1974-08", dir: "recorta", area: "Debido proceso", h: "Comisión Hope", x: "Una comisión real revisa a los servicios tras el allanamiento de la ASIO ordenado por el fiscal general en 1973." },
    { d: "2003-07", dir: "amplia", area: "Debido proceso", h: "Detención para interrogar", x: "La ASIO puede detener a personas no sospechosas para interrogarlas sobre terrorismo." },
    { d: "2015-10", dir: "amplia", area: "Privacidad", h: "Retención de metadatos", x: "Las operadoras deben guardar metadatos por dos años." },
    { d: "2018-06", dir: "amplia", area: "Expresión", h: "Leyes de injerencia extranjera", x: "Crean delitos de injerencia y espionaje más amplios; periodistas advirtieron sobre su alcance." },
    { d: "2018-12", dir: "amplia", area: "Privacidad", h: "Ley de asistencia y acceso", x: "Permite exigir a las empresas ayuda para leer comunicaciones cifradas." }
  ],
  events: [
    { d: "1954-04-03", lat: -35.3, lon: 149.13, c: "Australia", t: "contra", ev: 1, h: "Deserción de Petrov", x: "El oficial soviético Vladimir Petrov deserta en Canberra y entrega documentos sobre espionaje soviético.", u: "https://en.wikipedia.org/wiki/Petrov_Affair", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1973-09", lat: -33.45, lon: -70.67, c: "Chile", t: "encubierta", ev: 1, h: "El ASIS en Chile", x: "La estación del ASIS en Santiago apoya a la CIA contra el gobierno de Salvador Allende, según documentos desclasificados en 2021.", u: "https://en.wikipedia.org/wiki/Australian_Secret_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2004", lat: -8.6, lon: 125.6, c: "Timor-Leste", t: "senales", ev: 1, h: "Escuchas en Timor Oriental", x: "El ASIS instala micrófonos en oficinas del gobierno timorense durante la negociación del petróleo del mar de Timor.", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-10-20", lat: -33.88, lon: 151.22, c: "Australia", t: "sabotaje", ev: 2, h: "Incendio en un restaurante judío", x: "Incendian el Lewis Continental Kitchen de Sídney; la ASIO lo atribuyó a la Guardia Revolucionaria de Irán.", u: "https://www.sbs.com.au/news/article/asio-boss-reveals-australian-residents-link-to-synagogue-plot-fears-killing-on-home-soil/elq4mvtsp", st: "SBS News" },
    { d: "2024-12-06", lat: -37.87, lon: 145.0, c: "Australia", t: "sabotaje", ev: 2, h: "Incendio de la sinagoga Adass Israel", x: "Incendian la sinagoga de Melbourne; la ASIO dijo que lo coordinó un ex residente en Irak que trabajaba con la Guardia Revolucionaria.", u: "https://www.sbs.com.au/news/article/asio-boss-reveals-australian-residents-link-to-synagogue-plot-fears-killing-on-home-soil/elq4mvtsp", st: "SBS News" },
    { d: "2025-12-14", lat: -33.89, lon: 151.2, c: "Australia", t: "contra", ev: 1, h: "Ataque de Bondi", x: "Un ataque terrorista durante una celebración de Janucá mata a 15 personas; una comisión real examina a las agencias.", u: "https://www.australianjewishnews.com/chief-defends-asios-resourcing-after-bondi/amp/", st: "Australian Jewish News" }
  ],
  interest: {
    "China": 3, "Indonesia": 3, "Papua New Guinea": 2, "Solomon Is.": 2, "Timor-Leste": 2, "Iran": 2, "North Korea": 1, "Russia": 1, "Fiji": 1, "Vietnam": 1, "Philippines": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1949", h: "Nace la ASIO", x: "Se crea con apoyo británico tras detectarse filtraciones soviéticas." },
    { era: "", d: "1954", h: "Caso Petrov", x: "Deserción de un oficial soviético y comisión real sobre espionaje." },
    { era: "", d: "1970", h: "Pine Gap", x: "Empieza a operar la base conjunta con EE.UU. en el desierto." },
    { era: "", d: "1983", h: "Incidente del Sheraton", x: "Un ejercicio mal hecho del ASIS en un hotel de Melbourne lleva a una comisión real." },
    { era: "Siglo XXI", d: "2004", h: "Timor Oriental", x: "Escuchas a un gobierno vecino durante una negociación comercial." },
    { era: "", d: "2018", h: "Leyes de injerencia", x: "Australia endurece su legislación contra la injerencia china." },
    { era: "Actual", d: "2025–2026", h: "Irán y Bondi", x: "Expulsión del embajador iraní, ataque de Bondi y comisión real.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2004", h: "Las escuchas en Timor Oriental", x: "Agentes del ASIS instalaron micrófonos en oficinas del gobierno timorense para obtener ventaja en la negociación del petróleo. El ex agente conocido como Testigo K se declaró culpable en 2021 de revelar el caso; la acusación contra su abogado se retiró en 2022.", who: "Justicia de Australia y gobierno de Timor Oriental", missing: "", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2024", h: "Los incendios ordenados por Irán", x: "La ASIO concluyó que la Guardia Revolucionaria de Irán dirigió, a través de intermediarios y criminales, los incendios de un restaurante judío en Sídney y de una sinagoga en Melbourne. El gobierno expulsó al embajador iraní en agosto de 2025. Irán lo niega.", who: "ASIO y gobierno de Australia", missing: "Juicios a los organizadores, que están en el exterior.", u: "https://thenightly.com.au/politics/asio-identifies-antisemitic-bombings-as-iranian-regime-arson-foreign-coercion-in-annual-threat-assessment-c-22478862", st: "The Nightly" },
    { ev: 1, ilegal: true, d: "2023", h: "Di Sanh Duong", x: "Un dirigente comunitario de Melbourne fue el primer condenado por la ley de injerencia extranjera. Preparaba un acercamiento a un ministro para favorecer los intereses de China, según el tribunal.", who: "Tribunal del Condado de Victoria", missing: "", u: "https://en.wikipedia.org/wiki/Foreign_interference_in_Australia", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2025-12", ev: 2, w: 2, h: "El ataque de Bondi", x: "Uno de los atacantes había estado bajo la mira de la ASIO años antes; la agencia dice que no tenía datos de un plan.", why: "Se discute si el desvío de recursos hacia la injerencia extranjera debilitó el antiterrorismo.", wx: "Comisión real en curso.", who: "Comisión real sobre antisemitismo", u: "https://www.australianjewishnews.com/chief-defends-asios-resourcing-after-bondi/amp/", st: "Australian Jewish News" },
    { k: "falla", d: "1983-11", ev: 1, w: 3, h: "El incidente del Sheraton", x: "Agentes del ASIS armados irrumpieron en un hotel de Melbourne en un ejercicio de rescate sin avisar al hotel ni a la policía.", why: "No está en duda; una comisión real lo investigó.", wx: "Comisión real Hope.", who: "Comisión real", u: "https://en.wikipedia.org/wiki/Sheraton_Hotel_incident", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "El ASIS trabaja desde embajadas, sobre todo en Asia y el Pacífico.",
    campo: "Oficiales del ASIS reclutan fuentes en la región; la ley les prohíbe usar violencia.",
    oficina: "La ONI integra evaluaciones para el primer ministro; la ASIO publica una evaluación anual de amenazas.",
    reclutamiento: "Concursos públicos con controles de seguridad estrictos; campañas de reclutamiento abiertas.",
    tecnica: "La ASD y Pine Gap interceptan comunicaciones; la ley de 2018 da acceso a datos cifrados.",
    enlaces: "Cinco Ojos, AUKUS y cooperación estrecha con Nueva Zelanda, Japón e India."
  },
  insiders: [
    { k: "desertor", dir: "entra", ev: 1, d: "1954", n: "Vladimir Petrov", h: "El oficial soviético de Canberra", x: "Desertó con su esposa Evdokia y documentos sobre redes soviéticas en Australia.", cargo: "Oficial del MVD en la embajada soviética", hacia: "ASIO", fin: "Vivió en Australia con otro nombre hasta su muerte.", who: "Comisión real sobre espionaje", u: "https://en.wikipedia.org/wiki/Petrov_Affair", st: "Wikipedia (síntesis de fuentes)" },
    { k: "denunciante", dir: "sale", ev: 1, d: "2013–2021", n: "Testigo K", h: "El agente que reveló las escuchas", x: "Ex oficial del ASIS que denunció el espionaje en Timor Oriental ante el inspector general.", cargo: "Oficial del ASIS", hacia: "Su abogado y, por él, Timor Oriental", fin: "Se declaró culpable; condena en suspenso.", who: "Justicia de Australia", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2004–2013", h: "Las escuchas en Timor", x: "El gobierno ocultó el espionaje y luego persiguió a quien lo reveló.", obj: "Proteger la operación y la relación bilateral.", aquien: "El Parlamento y el público", como: "La denuncia de Testigo K y el arbitraje en La Haya.", who: "Justicia de Australia", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "autor", ev: 1, d: "2013-11", h: "Escuchas al presidente de Indonesia", x: "Documentos de Snowden mostraron que la inteligencia australiana intentó escuchar el teléfono del presidente indonesio y de su esposa en 2009.", obj: "La filtración buscaba exponer la vigilancia masiva.", who: "The Guardian y ABC", u: "https://en.wikipedia.org/wiki/Australian_Signals_Directorate", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    politicos: { ev: 1, x: "En la Guerra Fría la ASIO vigiló a políticos del Partido Laborista y del Partido Comunista.", u: "https://en.wikipedia.org/wiki/Australian_Security_Intelligence_Organisation", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "En 2019 la policía allanó la ABC y la casa de una periodista por publicar información de inteligencia.", u: "https://en.wikipedia.org/wiki/2019_Australian_Federal_Police_raids", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "La ASIO vigiló a activistas contra la guerra de Vietnam y a dirigentes aborígenes.", u: "https://en.wikipedia.org/wiki/Australian_Security_Intelligence_Organisation", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 1, x: "Intentó escuchar el teléfono del presidente de Indonesia en 2009, según documentos de Snowden.", u: "https://en.wikipedia.org/wiki/Australian_Signals_Directorate", st: "Wikipedia (síntesis de fuentes)" },
    rivales: { ev: 1, x: "China e Irán son los blancos centrales de la contrainteligencia.", u: "https://thenightly.com.au/politics/asio-identifies-antisemitic-bombings-as-iranian-regime-arson-foreign-coercion-in-annual-threat-assessment-c-22478862", st: "The Nightly" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 1, x: "La ASD admitió operaciones cibernéticas ofensivas contra el Estado Islámico.", u: "https://en.wikipedia.org/wiki/Australian_Signals_Directorate", st: "Wikipedia (síntesis de fuentes)" },
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 2, x: "La estación del ASIS en Chile colaboró con la CIA contra Allende antes del golpe de 1973, según documentos desclasificados.", u: "https://en.wikipedia.org/wiki/Australian_Secret_Intelligence_Service", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento de partidos extranjeros." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 1, x: "Las escuchas en Timor Oriental beneficiaron a empresas petroleras australianas, según el denunciante.", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos de armas." },
    inteligencia: { ev: 1, x: "Comparte inteligencia de señales con los Cinco Ojos a través de Pine Gap y la ASD.", u: "https://en.wikipedia.org/wiki/Pine_Gap", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 1, x: "Recibe tecnología de submarinos nucleares de EE.UU. y el Reino Unido por AUKUS.", u: "https://en.wikipedia.org/wiki/AUKUS", st: "Wikipedia (síntesis de fuentes)" },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos de las agencias se publican en los documentos del presupuesto federal. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Personal, interceptación, ciberdefensa y operaciones en el exterior.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "crimen", rol: "blanco", ev: 2, d: "2024", h: "Criminales pagados por Irán", x: "La Guardia Revolucionaria usó intermediarios y redes criminales para pagar los incendios contra blancos judíos, según la ASIO.", obj: "Atacar a la comunidad judía y sembrar división.", who: "ASIO", u: "https://www.al-monitor.com/originals/2026/06/australia-spy-chief-warns-iran-terror-threat", st: "AFP, vía Al-Monitor" }
  ],
  companies: [
    { n: "Woodside", c: "nacional", rubro: "Petróleo y gas", rel: "Beneficiaria", x: "Empresa interesada en el petróleo del mar de Timor durante la negociación espiada en 2004." }
  ],
  struggles: [
    { a: "ASIO", b: "Comunidad judía y oposición", k: "Con la política", stake: "La respuesta al antisemitismo", state: "Abierta", x: "Críticos acusan a las agencias de no anticipar el ataque de Bondi; la ASIO defiende su asignación de recursos." },
    { a: "Gobierno", b: "Periodistas y denunciantes", k: "Con otros poderes", stake: "El secreto y la libertad de prensa", state: "Latente", x: "Juicios a denunciantes y allanamientos a medios generan debate sobre las leyes de seguridad." }
  ],
  sources: [
    { t: "SBS News: la ASIO revela quién coordinó los incendios (2026)", u: "https://www.sbs.com.au/news/article/asio-boss-reveals-australian-residents-link-to-synagogue-plot-fears-killing-on-home-soil/elq4mvtsp" },
    { t: "The Nightly: evaluación anual de amenazas (2026)", u: "https://thenightly.com.au/politics/asio-identifies-antisemitic-bombings-as-iranian-regime-arson-foreign-coercion-in-annual-threat-assessment-c-22478862" },
    { t: "Australian Jewish News: la ASIO ante la comisión real", u: "https://www.australianjewishnews.com/chief-defends-asios-resourcing-after-bondi/amp/" },
    { t: "Wikipedia: escándalo de espionaje en Timor Oriental", u: "https://en.wikipedia.org/wiki/Australia%E2%80%93East_Timor_spying_scandal" },
    { t: "Wikipedia: Australian Security Intelligence Organisation", u: "https://en.wikipedia.org/wiki/Australian_Security_Intelligence_Organisation" }
  ]
};
