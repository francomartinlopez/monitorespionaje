// Ficha de Suecia · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["se"] = {
  id: "se",
  updated: "2026-11-15",
  summary: [
    "Suecia, miembro de la OTAN desde 2024, tiene tres servicios principales. El Instituto Nacional de Radio de Defensa (FRA) intercepta señales con gran capacidad técnica. Los otros dos son el Servicio Militar de Inteligencia y Seguridad (MUST) y el Servicio de Seguridad (Säpo), dirigido por Charlotte von Essen. Su ubicación sobre el Báltico le da acceso a las comunicaciones rusas.",
    "Según la Säpo, Rusia, China e Irán son las principales amenazas. Irán usa a redes criminales suecas, incluidos menores, como intermediarios para atacar blancos israelíes y judíos. En 2023 un ex oficial de la Säpo y del MUST fue condenado a prisión perpetua por espiar para la inteligencia militar rusa durante una década.",
    "La FRA intercepta el tráfico de los cables que cruzan el país desde la ley de 2008, muy discutida en su momento. En 1973 dos periodistas revelaron la existencia de la Oficina de Información (IB), un servicio secreto que fichaba a comunistas, y fueron condenados por espionaje."
  ],
  keyFacts: [
    { l: "Jefa de la Säpo", v: "Charlotte von Essen", n: "informe 2025-2026" },
    { l: "Principales amenazas", v: "Rusia, China e Irán", n: "según la Säpo (marzo de 2026)" },
    { l: "Espía ruso en la Säpo", v: "Peyman Kia", n: "condenado a perpetua en 2023" },
    { l: "Ley de la FRA", v: "2008", n: "interceptación de cables" }
  ],
  power: { humana: 2, senales: 5, ciber: 4, imagenes: 3, encubierta: 1, contra: 3 },
  powerWhy: {
    humana: "Servicio humano chico, centrado en Rusia y el Báltico.",
    senales: "La FRA intercepta los cables del Báltico y es socio clave de la NSA, según documentos de Snowden.",
    ciber: "Capacidad técnica alta en la FRA.",
    imagenes: "Aviones de reconocimiento propios sobre el Báltico.",
    encubierta: "No hay operaciones encubiertas documentadas.",
    contra: "Un oficial de la propia Säpo espió para Rusia durante una década sin ser detectado."
  },
  priorities: [
    { h: "Rusia", x: "Báltico, sabotaje y espionaje." },
    { h: "Irán", x: "Uso de bandas criminales contra blancos judíos e israelíes." },
    { h: "China", x: "Tecnología, adquisiciones y vigilancia de la diáspora." },
    { h: "Terrorismo", x: "Radicalización en línea de jóvenes." },
    { h: "Elecciones", x: "Injerencia en las elecciones de septiembre de 2026." }
  ],
  focos: ["Rusia", "Irán", "China", "Báltico", "Bandas criminales"],
  bodies: {
    "CSN": { since: 2019, how: "Consejo de Seguridad Nacional del gobierno, que coordina la política de seguridad.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Estocolmo"] },
    "FRA": { since: 1942, how: "Instituto Nacional de Radio de Defensa: inteligencia de señales y ciberdefensa. Intercepta el tráfico que cruza las fronteras por cable.", staff: "Unas 900 personas, según estimaciones públicas.", budget: "Público.", tech: ["Interceptación de cables"], where: ["Bromma"] },
    "MUST": { since: 1994, how: "Servicio Militar de Inteligencia y Seguridad de las Fuerzas Armadas: inteligencia militar y contrainteligencia.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Estocolmo"] },
    "Säpo": { since: 1989, how: "Servicio de Seguridad: contraespionaje, terrorismo, protección de autoridades y de la Constitución.", staff: "Unas 1.600 personas, según el servicio.", budget: "Público.", tech: [], where: ["Solna"] },
    "SIN": { since: 2009, how: "Inspección de Inteligencia de Defensa: controla la legalidad de la FRA y el MUST.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Estocolmo"] }
  },
  civil: [
    "La FRA y el MUST dependen de Defensa; la Säpo, de Justicia.",
    "Un tribunal de inteligencia de defensa autoriza la recolección de señales por cable.",
    "La Comisión de Seguridad y de Integridad controla a la Säpo y la policía."
  ],
  law: {
    domestic: [
      "La ley de inteligencia de señales de 2008 permite a la FRA interceptar el tráfico de cables.",
      "Las reformas de 2023 crearon el delito de espionaje sobre extranjeros y endurecieron las penas.",
      "La Säpo puede pedir escuchas con orden judicial."
    ],
    foreign: [
      "El MUST y la FRA operan en el exterior bajo directivas del gobierno."
    ],
    oversight: [
      "Inspección de Inteligencia de Defensa (SIN).",
      "Tribunal de Inteligencia de Defensa.",
      "Comisión de Seguridad y de Integridad."
    ]
  },
  rights: [
    { d: "1973-05", dir: "recorta", area: "Privacidad", h: "Escándalo de la IB", x: "Se revela un servicio secreto que fichaba a militantes de izquierda." },
    { d: "2008-06", dir: "amplia", area: "Privacidad", h: "Ley de la FRA", x: "Autoriza la interceptación del tráfico de cables pese a grandes protestas." },
    { d: "2023-07", dir: "amplia", area: "Expresión", h: "Espionaje extranjero", x: "Nuevo delito que críticos temieron afectara a periodistas." }
  ],
  events: [
    { d: "1987-10", lat: 59.6, lon: 17.0, c: "Sweden", t: "contra", ev: 1, h: "Fuga de Stig Bergling", x: "El ex policía de seguridad condenado por espiar para la URSS escapa durante un permiso y huye a Moscú.", u: "https://en.wikipedia.org/wiki/Stig_Bergling", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2021-09", lat: 59.5, lon: 17.6, c: "Sweden", t: "contra", ev: 1, h: "Detienen a los hermanos Kia", x: "La Säpo detiene a un ex oficial propio y a su hermano por espiar para la inteligencia militar rusa durante una década.", u: "https://en.wikipedia.org/wiki/Swedish_Security_Service", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-05", lat: 59.45, lon: 17.4, c: "Sweden", t: "encubierta", ev: 2, h: "Disparos cerca de la embajada israelí", x: "Una ola de ataques contra blancos israelíes en Estocolmo; la Säpo atribuyó el uso de bandas criminales a Irán.", u: "https://www.iranintl.com/en/202503117330", st: "Iran International" }
  ],
  interest: {
    "Russia": 3, "Iran": 3, "China": 2, "Finland": 1, "Estonia": 1, "Latvia": 1, "Lithuania": 1, "Belarus": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1973", h: "Escándalo de la IB", x: "Periodistas revelan un servicio secreto de fichaje político." },
    { era: "", d: "1979", h: "Stig Bergling", x: "Detienen a un policía de seguridad que trabajaba para la URSS." },
    { era: "Posguerra Fría", d: "2008", h: "Ley de la FRA", x: "Interceptación de cables." },
    { era: "", d: "2021–2023", h: "Los hermanos Kia", x: "Espías rusos dentro de la Säpo y el MUST." },
    { era: "Actual", d: "2024–2026", h: "OTAN e Irán", x: "Ingreso a la OTAN y ataques iraníes con bandas criminales.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2011–2021", h: "Los hermanos Kia", x: "Peyman Kia, que trabajó en la Säpo y en el MUST, y su hermano Payam pasaron información a la inteligencia militar rusa durante una década. Peyman fue condenado a perpetua y Payam a nueve años en 2023.", who: "Justicia de Suecia", missing: "", u: "https://en.wikipedia.org/wiki/Swedish_Security_Service", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2024–2026", h: "Irán y las bandas criminales", x: "La Säpo informó que la inteligencia iraní contrata a integrantes de bandas criminales, muchos menores, para atacar blancos israelíes y judíos y a disidentes iraníes. Irán lo niega.", who: "Säpo", missing: "Condenas que prueben la orden estatal.", u: "https://www.iranintl.com/en/202503117330", st: "Iran International" },
    { ev: 1, ilegal: true, d: "1965–1973", h: "La IB", x: "Un servicio secreto militar fichaba a militantes comunistas y de izquierda, con vínculos con el partido socialdemócrata. Los periodistas Jan Guillou y Peter Bratt lo revelaron y fueron condenados por espionaje.", who: "Justicia de Suecia y comisiones oficiales", missing: "", u: "https://en.wikipedia.org/wiki/Informationsbyr%C3%A5n", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2011–2021", ev: 1, w: 3, h: "Un espía ruso en la Säpo", x: "Un oficial de contrainteligencia trabajó para Rusia durante una década sin ser detectado.", why: "No está en duda; hubo condena.", wx: "Sentencias de 2023.", who: "Justicia de Suecia", u: "https://en.wikipedia.org/wiki/Swedish_Security_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Agregados militares y oficiales de enlace; Suecia expulsó a diplomáticos rusos por espionaje.",
    campo: "Fuentes humanas limitadas; la fortaleza está en las señales.",
    oficina: "La Säpo publica una evaluación anual de amenazas.",
    reclutamiento: "Concursos públicos; la FRA recluta técnicos y lingüistas.",
    tecnica: "Interceptación de cables del Báltico y aviones de reconocimiento.",
    enlaces: "Socio de la NSA y el GCHQ desde la Guerra Fría, según documentos de Snowden; OTAN desde 2024."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "1973–1979", n: "Stig Bergling", h: "El policía de seguridad que trabajó para Moscú", x: "Pasó a la URSS información sobre defensas suecas.", cargo: "Policía de seguridad y oficial de enlace", hacia: "Inteligencia militar soviética (GRU)", fin: "Condenado a perpetua; escapó en 1987 y volvió en 1990.", who: "Justicia de Suecia", u: "https://en.wikipedia.org/wiki/Stig_Bergling", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2011–2021", n: "Peyman Kia", h: "El oficial de la Säpo y el MUST", x: "Pasó información a la inteligencia militar rusa con ayuda de su hermano.", cargo: "Oficial de la Säpo y del MUST", hacia: "Inteligencia militar rusa (GRU)", fin: "Condenado a perpetua en 2023.", who: "Justicia de Suecia", u: "https://en.wikipedia.org/wiki/Swedish_Security_Service", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1965–1973", h: "La existencia de la IB", x: "El gobierno negó la existencia del servicio secreto hasta que lo revelaron los periodistas.", obj: "Ocultar el fichaje político.", aquien: "El Parlamento y el público", como: "Artículos de la revista Folket i Bild/Kulturfront.", who: "Comisiones oficiales", u: "https://en.wikipedia.org/wiki/Informationsbyr%C3%A5n", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "autor", ev: 1, d: "2013-12", h: "La FRA y la NSA", x: "Documentos de Snowden mostraron que la FRA comparte con la NSA datos de los cables rusos del Báltico.", obj: "La filtración buscaba exponer la vigilancia masiva.", who: "SVT", u: "https://en.wikipedia.org/wiki/National_Defence_Radio_Establishment", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    politicos: { ev: 1, x: "La IB fichó a militantes de izquierda en las décadas de 1960 y 1970.", u: "https://en.wikipedia.org/wiki/Informationsbyr%C3%A5n", st: "Wikipedia (síntesis de fuentes)" },
    periodistas: { ev: 1, x: "Los periodistas que revelaron la IB fueron condenados por espionaje en 1974.", u: "https://en.wikipedia.org/wiki/Informationsbyr%C3%A5n", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "La IB vigiló a militantes comunistas y de izquierda.", u: "https://en.wikipedia.org/wiki/Informationsbyr%C3%A5n", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "La FRA intercepta comunicaciones rusas que pasan por los cables del Báltico.", u: "https://en.wikipedia.org/wiki/National_Defence_Radio_Establishment", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    secuestro: { ev: 1, x: "Entregó a la CIA a dos egipcios en 2001, que denunciaron torturas en Egipto; la ONU condenó a Suecia.", u: "https://en.wikipedia.org/wiki/Extraordinary_rendition", st: "Wikipedia (síntesis de fuentes)" },
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
    inteligencia: { ev: 1, x: "Comparte con la NSA datos de los cables rusos, según documentos de Snowden.", u: "https://en.wikipedia.org/wiki/National_Defence_Radio_Establishment", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "Los presupuestos de la FRA y la Säpo son públicos en sus líneas generales. Esta ficha no encontró las cifras de 2026 verificadas.",
    uso: "Interceptación, ciberdefensa, contraespionaje y protección de autoridades.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Irán contrata a bandas criminales suecas para ataques, según la Säpo.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "crimen", rol: "blanco", ev: 2, d: "2024–2026", h: "Bandas pagadas por Irán", x: "La inteligencia iraní paga a jóvenes de bandas criminales para atacar blancos en Suecia, según la Säpo.", obj: "Atacar a enemigos de Irán sin exponer a sus agentes.", who: "Säpo", u: "https://www.tv4.se/artikel/1LrSTGIO47yo6bdnOf4iDV/saepo-iran-fortsaetter-vaerva-unga-foer-attentat", st: "TV4" }
  ],
  companies: [
    { n: "Telia", c: "nacional", rubro: "Telecomunicaciones", rel: "Infraestructura", x: "Operadora cuyos cables cruzan el Báltico, fuente de la interceptación de la FRA." }
  ],
  struggles: [
    { a: "FRA", b: "Defensores de la privacidad", k: "Con otros poderes", stake: "La interceptación de cables", state: "Latente", x: "La ley de 2008 provocó grandes protestas y un fallo europeo pidió más garantías en 2021." }
  ],
  proxies: [
  ],
  cuentas: {"n": 2, "x": "Comisiones oficiales y condenas a espías dentro de los servicios."},
  sources: [
    { t: "Reuters: Rusia, China e Irán, principales amenazas (2026)", u: "https://theprint.in/world/russia-china-and-iran-are-main-threats-to-sweden-security-service-says/2882406" },
    { t: "Säpo: informe 2025-2026", u: "https://sakerhetspolisen.se/download/18.6d8b207419df2497fd955/1778075300407/SP_La%CC%88gesbild%20ENG_Anpassad.pdf" },
    { t: "Iran International: Irán y las bandas en Suecia", u: "https://www.iranintl.com/en/202503117330" },
    { t: "Wikipedia: Swedish Security Service", u: "https://en.wikipedia.org/wiki/Swedish_Security_Service" }
  ]
};
