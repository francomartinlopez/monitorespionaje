// Ficha de Grecia · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["gr"] = {
  id: "gr",
  updated: "2026-11-16",
  summary: [
    "El Servicio Nacional de Inteligencia (EYP) es el servicio civil de Grecia y depende directamente de la Oficina del Primer Ministro desde 2019. Su principal preocupación exterior es Turquía, con la que Grecia mantiene disputas en el Egeo y Chipre. La Autoridad para la Privacidad de las Comunicaciones (ADAE) controla las escuchas.",
    "En 2022 estalló el escándalo conocido como \"Watergate griego\": el teléfono del líder socialista Nikos Androulakis fue atacado con el programa espía Predator, y se supo que el EYP también lo tenía bajo escucha legal. En febrero de 2026 un tribunal de Atenas condenó a cuatro personas vinculadas con la empresa Intellexa por la vigilancia ilegal de 87 personas, entre ellas ministros, militares y periodistas.",
    "El gobierno de Kyriakos Mitsotakis siempre negó haber comprado o usado Predator, pero un tercio de los vigilados también estaba bajo escucha del EYP. La causa sobre quién ordenó la vigilancia pasó a la Corte Suprema en abril de 2026. En la historia griega, el servicio antecesor KYP fue clave en la dictadura de los coroneles (1967-1974)."
  ],
  keyFacts: [
    { l: "Vigilados con Predator", v: "87 personas", n: "según el tribunal de Atenas (2026)" },
    { l: "Condenas a Intellexa", v: "Cuatro personas", n: "febrero de 2026, en primera instancia" },
    { l: "Escuchas del EYP", v: "Un tercio de los blancos", n: "también vigilados legalmente, según AFP" },
    { l: "Dependencia", v: "Oficina del Primer Ministro", n: "desde 2019" }
  ],
  power: { humana: 3, senales: 3, ciber: 2, imagenes: 2, encubierta: 2, contra: 2 },
  powerWhy: {
    humana: "Redes en Turquía, los Balcanes y el Mediterráneo oriental.",
    senales: "Escuchas legales extendidas; la ADAE controla con dificultades.",
    ciber: "Capacidad propia limitada; el escándalo Predator mostró el uso de proveedores privados.",
    imagenes: "Acceso a imágenes de la OTAN y de socios.",
    encubierta: "Participó en la detención de sospechosos en 2005 junto con agentes británicos, según denuncias.",
    contra: "No evitó la interceptación de los teléfonos del primer ministro en 2004 y 2005."
  },
  priorities: [
    { h: "Turquía", x: "Egeo, Chipre y migración." },
    { h: "Migración", x: "Flujos por el Egeo y la frontera de Evros." },
    { h: "Rusia", x: "Influencia en la Iglesia y en los Balcanes." },
    { h: "Terrorismo", x: "Grupos armados de extrema izquierda y yihadismo." },
    { h: "Mediterráneo oriental", x: "Energía, Libia y Medio Oriente." }
  ],
  focos: ["Turquía", "Chipre", "Migración", "Rusia", "Balcanes"],
  bodies: {
    "PM": { since: 2019, how: "Oficina del Primer Ministro, de la que depende el EYP desde 2019; su secretario general fue el nexo con el servicio en el escándalo de 2022.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Atenas"] },
    "EYP": { since: 1986, how: "Servicio Nacional de Inteligencia: inteligencia exterior e interior y contraespionaje. Heredero del KYP de la Guerra Fría.", staff: "No se publica.", budget: "Secreto.", tech: ["Escuchas con orden fiscal"], where: ["Atenas", "Embajadas"] },
    "Defensa": { since: 1953, how: "Inteligencia del Estado Mayor de Defensa: inteligencia militar centrada en Turquía.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Atenas"] },
    "ADAE": { since: 2003, how: "Autoridad para la Privacidad de las Comunicaciones: controla la legalidad de las escuchas y auditó a las operadoras en el caso Predator.", staff: "No se publica.", budget: "Público.", tech: [], where: ["Atenas"] }
  },
  civil: [
    "El EYP depende del primer ministro desde 2019, lo que la oposición considera un riesgo de uso político.",
    "Las escuchas del EYP las autoriza un fiscal asignado al servicio.",
    "En 2022 renunciaron el director del EYP y el secretario general del primer ministro."
  ],
  law: {
    domestic: [
      "La ley del EYP de 2008 regula sus funciones.",
      "La ley de 2022 prohibió a privados vender o usar programas espía y permitió su uso estatal con condiciones.",
      "En 2021 una reforma eliminó la obligación de avisar a los vigilados cuando termina la escucha; la Justicia la cuestionó."
    ],
    foreign: [
      "El EYP opera en el exterior; no hay normas públicas detalladas."
    ],
    oversight: [
      "Autoridad para la Privacidad de las Comunicaciones (ADAE).",
      "Comisión parlamentaria de instituciones y transparencia.",
      "Fiscal del EYP que autoriza escuchas."
    ]
  },
  rights: [
    { d: "1967-04", dir: "amplia", area: "Debido proceso", h: "Golpe de los coroneles", x: "La dictadura usa al KYP para perseguir a la oposición." },
    { d: "2021-03", dir: "amplia", area: "Privacidad", h: "Fin del aviso a los vigilados", x: "Se suspende el derecho a saber que uno fue espiado por razones de seguridad nacional." },
    { d: "2022-12", dir: "recorta", area: "Privacidad", h: "Ley sobre programas espía", x: "Prohíbe su venta y uso privado y fija condiciones para el uso estatal." }
  ],
  events: [
    { d: "2004-08", lat: 37.98, lon: 23.73, c: "Greece", t: "senales", ev: 2, h: "Escuchas a Vodafone", x: "Un programa oculto en la red de Vodafone intercepta los teléfonos del primer ministro y de ministros durante los Juegos Olímpicos; la prensa lo atribuyó a EE.UU.", u: "https://en.wikipedia.org/wiki/Greek_wiretapping_case_2004%E2%80%9305", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2018-07", lat: 38.0, lon: 23.75, c: "Greece", t: "contra", ev: 1, h: "Expulsión de diplomáticos rusos", x: "Grecia expulsa a dos diplomáticos rusos por intentar sobornar a funcionarios y frenar el acuerdo sobre el nombre de Macedonia del Norte.", u: "https://en.wikipedia.org/wiki/Greece%E2%80%93Russia_relations", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2021-09", lat: 37.96, lon: 23.7, c: "Greece", t: "ciber", ev: 1, h: "Predator contra Androulakis", x: "Intentan infectar con Predator el teléfono del líder socialista, que también estaba bajo escucha del EYP.", u: "https://www.amnesty.org/en/latest/news/2026/02/greece-spyware-scandal/", st: "Amnistía Internacional" },
    { d: "2026-02-26", lat: 37.99, lon: 23.72, c: "Greece", t: "ciber", ev: 1, h: "Condena en el caso Predator", x: "Un tribunal de Atenas condena a cuatro personas ligadas a Intellexa por la vigilancia ilegal de 87 personas.", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/", st: "AFP, vía Neos Kosmos" }
  ],
  interest: {
    "Turkey": 3, "Cyprus": 3, "Albania": 1, "Macedonia": 1, "Russia": 2, "Libya": 1, "Egypt": 1, "Israel": 1, "Bulgaria": 1
  },
  timeline: [
    { era: "Guerra Fría", d: "1953", h: "Nace el KYP", x: "Servicio creado con apoyo de la CIA.", ctx: "Posguerra civil y alianza con EE.UU." },
    { era: "", d: "1967–1974", h: "Dictadura", x: "Oficiales ligados al KYP encabezan el régimen de los coroneles.", ctx: "Junta de los coroneles." },
    { era: "Democracia", d: "1986", h: "Nace el EYP", x: "Reemplaza al KYP.", ctx: "Gobierno de Andreas Papandréu." },
    { era: "", d: "2004–2005", h: "Escuchas a Vodafone", x: "Intercepción del teléfono del primer ministro.", ctx: "Juegos Olímpicos de Atenas." },
    { era: "", d: "2022", h: "Watergate griego", x: "Predator y escuchas del EYP a un líder opositor.", ctx: "Gobierno de Mitsotakis." },
    { era: "Actual", d: "2026", h: "Condenas y Corte Suprema", x: "Condenas a Intellexa y nueva investigación sobre quién ordenó el espionaje.", now: true, ctx: "Fallos judiciales por el caso Predator." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2020–2022", h: "El Watergate griego", x: "Un tribunal de Atenas condenó en 2026 a Tal Dilian, fundador de Intellexa, y a otras tres personas por el acceso ilegal a comunicaciones de 87 personas. El gobierno niega haber usado Predator. Un tercio de los vigilados también estaba bajo escucha legal del EYP y la causa sobre quién lo ordenó pasó a la Corte Suprema.", who: "Tribunal de Atenas", missing: "", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/", st: "AFP, vía Neos Kosmos" },
    { ev: 3, ilegal: true, d: "2020–2022", h: "Quién ordenó el uso de Predator", x: "La oposición y periodistas vigilados sostienen que el gobierno usó Predator junto con las escuchas del EYP. El gobierno lo niega. Dilian dijo que Intellexa solo vende a gobiernos.", who: "Oposición griega y periodistas vigilados", missing: "Prueba de la orden y del comprador estatal.", u: "https://edri.org/our-work/predatorgate-breaking-the-chain-of-impunity-of-the-spyware-underworld/", st: "EDRi" },
    { ev: 2, ilegal: true, d: "2004–2005", h: "Las escuchas de Vodafone", x: "Un programa instalado en la red de Vodafone interceptó unos 100 teléfonos, entre ellos el del primer ministro Kostas Karamanlís. Un técnico de la empresa apareció muerto. Investigaciones de prensa atribuyeron la operación a la NSA desde la embajada de EE.UU.", who: "Fiscalía griega y prensa internacional", missing: "Confirmación oficial de EE.UU.", u: "https://en.wikipedia.org/wiki/Greek_wiretapping_case_2004%E2%80%9305", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2004–2005", ev: 2, w: 2, h: "Los teléfonos del primer ministro", x: "Los servicios griegos no detectaron durante meses la interceptación de los teléfonos del gobierno.", why: "La interceptación está probada; la autoría sigue sin confirmación oficial.", wx: "Investigación judicial y prensa.", who: "Fiscalía griega", u: "https://en.wikipedia.org/wiki/Greek_wiretapping_case_2004%E2%80%9305", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "El EYP trabaja desde embajadas, con foco en Turquía y los Balcanes.",
    campo: "Fuentes humanas en Turquía y en las rutas migratorias.",
    oficina: "El EYP informa al primer ministro a través de su secretario general.",
    reclutamiento: "Personal militar y policial y concursos públicos.",
    tecnica: "Escuchas legales a través de las operadoras con orden fiscal.",
    enlaces: "OTAN, EE.UU. y cooperación estrecha con Chipre e Israel."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "2022", n: "Thanasis Koukakis", h: "El periodista que destapó el caso", x: "Periodista financiero que descubrió que su teléfono tenía Predator y que el EYP lo escuchaba, y llevó el caso a la Justicia.", cargo: "Periodista", hacia: "Justicia y prensa", fin: "Querellante en el juicio de 2026.", who: "Citizen Lab y tribunal de Atenas", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/", st: "AFP, vía Neos Kosmos" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 2, d: "2021–2022", h: "Las escuchas a Androulakis", x: "El EYP escuchó al líder opositor por \"razones de seguridad nacional\" y la ley de 2021 impedía avisarle.", obj: "Mantener la vigilancia en secreto.", aquien: "El vigilado y el Parlamento", como: "La ADAE le informó tras el escándalo de Predator.", who: "ADAE y prensa", u: "https://www.yahoo.com/news/articles/four-convicted-over-spyware-scandal-150558339.html", st: "AFP, vía Yahoo" }
  ],
  practicas: {
    propios: { ev: 1, x: "Ministros y altos militares figuran entre los vigilados con Predator o por el EYP.", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/", st: "AFP, vía Neos Kosmos" },
    politicos: { ev: 1, x: "El EYP escuchó al líder del partido socialista PASOK.", u: "https://www.yahoo.com/news/articles/four-convicted-over-spyware-scandal-150558339.html", st: "AFP, vía Yahoo" },
    periodistas: { ev: 1, x: "Periodistas como Thanasis Koukakis fueron vigilados por el EYP y con Predator.", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/", st: "AFP, vía Neos Kosmos" },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Turquía es el blanco principal de la inteligencia griega.", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(Greece)", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "Durante la dictadura de 1967-1974 la policía militar torturó a opositores.", u: "https://en.wikipedia.org/wiki/Greek_junta", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "Paquistaníes denunciaron haber sido secuestrados e interrogados por agentes griegos y británicos en 2005.", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(Greece)", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 1, x: "La junta griega promovió en 1974 el golpe contra Makarios en Chipre, que desató la invasión turca.", u: "https://en.wikipedia.org/wiki/1974_Cypriot_coup_d%27%C3%A9tat", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 1, x: "La junta de Atenas organizó el golpe de 1974 en Chipre.", u: "https://en.wikipedia.org/wiki/1974_Cypriot_coup_d%27%C3%A9tat", st: "Wikipedia (síntesis de fuentes)" },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 1, x: "Empresarios figuran entre los vigilados con Predator.", u: "https://www.yahoo.com/news/articles/four-convicted-over-spyware-scandal-150558339.html", st: "AFP, vía Yahoo" },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Comparte inteligencia con Chipre e Israel en el Mediterráneo oriental.", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(Greece)", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del EYP es secreto en buena parte.",
    uso: "Personal, escuchas y operaciones regionales.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Intellexa operaba desde Atenas con empresas vinculadas, según el juicio.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "fachada", rol: "blanco", ev: 1, d: "2020–2022", h: "La red de Intellexa en Atenas", x: "Empresas ligadas a Intellexa y a un empresario griego operaron la infraestructura de Predator, según el tribunal.", obj: "Vender y operar vigilancia ilegal.", who: "Tribunal de Atenas", u: "https://thetimes.gr/predator-scandal-four-intellexa-executives-convicted-in-greek-wiretapping-case", st: "The Times (Grecia)" }
  ],
  companies: [
    { n: "Intellexa", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Comercializó Predator en Grecia; sus responsables fueron condenados en 2026." },
    { n: "Vodafone Grecia", c: "extranjera", rubro: "Telecomunicaciones", rel: "Víctima", x: "Su red fue usada para escuchar al gobierno en 2004 y 2005." }
  ],
  struggles: [
    { a: "Gobierno de Mitsotakis", b: "Oposición", k: "Con la política", stake: "El Watergate griego", state: "Abierta", x: "La oposición acusa al gobierno de un \"Estado profundo\"; el gobierno niega el uso de Predator." }
  ],
  proxies: [
  ],
  cuentas: {"n": 1, "x": "El caso Predator no tuvo responsables políticos."},
  doctrina: [{"h": "Turquía primero", "x": "El servicio depende del primer ministro desde 2019 y se concentra en el vecino."}],
  sources: [
    { t: "Amnistía: condenas en el caso Predator (2026)", u: "https://www.amnesty.org/en/latest/news/2026/02/greece-spyware-scandal/" },
    { t: "AFP: cuatro condenados por el escándalo de espionaje", u: "https://neoskosmos.com/en/2026/02/27/news/greece/athens-court-convicts-four-over-greece-spyware-saga/" },
    { t: "EDRi: la cadena de impunidad del espionaje", u: "https://edri.org/our-work/predatorgate-breaking-the-chain-of-impunity-of-the-spyware-underworld/" },
    { t: "Wikipedia: National Intelligence Service (Greece)", u: "https://en.wikipedia.org/wiki/National_Intelligence_Service_(Greece)" }
  ]
};
