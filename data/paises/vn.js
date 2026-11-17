// Ficha de Vietnam · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["vn"] = {
  id: "vn",
  updated: "2026-11-15",
  summary: [
    "En Vietnam la inteligencia y la seguridad interior dependen del Ministerio de Seguridad Pública, el organismo más poderoso del Estado de partido único. Su ex ministro To Lam se convirtió en 2024 en secretario general del Partido Comunista. El Ejército tiene su propia Dirección General de Inteligencia de Defensa (conocida como TC2) y desde 2017 un Comando del Ciberespacio.",
    "Los servicios vietnamitas persiguen a disidentes también fuera del país. En 2017 agentes vietnamitas secuestraron en un parque de Berlín a un ex funcionario que pedía asilo; un tribunal alemán condenó a dos cómplices y Alemania expulsó al jefe de inteligencia de la embajada. En 2023 el bloguero Duong Van Thai desapareció en Tailandia y reapareció preso en Hanoi; fue condenado a 12 años.",
    "En el ciberespacio, empresas de seguridad atribuyen a Vietnam el grupo de hackers OceanLotus, que espía a periodistas, disidentes y empresas extranjeras. El Ejército mantiene la Fuerza 47, una unidad que combate en redes las \"opiniones erróneas\" sobre el partido."
  ],
  keyFacts: [
    { l: "Secretario general del partido", v: "To Lam", n: "ex ministro de Seguridad Pública, desde 2024" },
    { l: "Secuestro en Berlín", v: "2017", n: "dos condenados en Alemania" },
    { l: "Duong Van Thai", v: "12 años de prisión", n: "secuestrado en Tailandia en 2023, según organizaciones de derechos humanos" },
    { l: "Fuerza 47", v: "Unidad del Ejército", n: "propaganda y vigilancia en redes desde 2017" }
  ],
  power: { humana: 3, senales: 3, ciber: 3, imagenes: 2, encubierta: 3, contra: 4 },
  powerWhy: {
    humana: "Redes en la diáspora y en los países vecinos; capacidad demostrada de operar en Europa.",
    senales: "Vigilancia amplia de las comunicaciones internas; poca capacidad exterior documentada.",
    ciber: "El grupo OceanLotus, atribuido a Vietnam, espía a periodistas y empresas en varios países.",
    imagenes: "Depende de satélites comerciales y de socios.",
    encubierta: "Secuestros documentados en Alemania y atribuidos en Tailandia.",
    contra: "Control total del espacio interno y vigilancia de la diáspora."
  },
  priorities: [
    { h: "Seguridad del régimen", x: "Disidentes, blogueros y organizaciones religiosas independientes." },
    { h: "China", x: "Mar de China Meridional y relación con Pekín." },
    { h: "Diáspora", x: "Opositores en EE.UU., Europa y Tailandia." },
    { h: "Corrupción", x: "La campaña anticorrupción del partido." },
    { h: "Empresas extranjeras", x: "Información sobre inversiones y competencia." }
  ],
  focos: ["China", "Disidentes", "Diáspora", "Mar de China Meridional", "Ciberespionaje"],
  bodies: {
    "MPS": { since: 1945, how: "Ministerio de Seguridad Pública: policía, inteligencia interior y exterior, contraespionaje y ciberseguridad. Su titular integra el buró político del partido.", staff: "No se publica.", budget: "Secreto.", tech: ["Vigilancia de comunicaciones"], where: ["Hanoi", "Todo el país", "Embajadas"] },
    "TC2": { since: 1945, how: "Dirección General de Inteligencia de Defensa del Ministerio de Defensa: inteligencia militar en el exterior.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Hanoi"] },
    "Comando 86": { since: 2017, how: "Comando del Ciberespacio del Ejército: ciberdefensa y operaciones en redes.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Ciberoperaciones"], where: ["Hanoi"] },
    "SP": { since: 1945, how: "Seguridad interior del Ministerio de Seguridad Pública: vigila a disidentes, religiones independientes y medios.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Todo el país"] }
  },
  civil: [
    "No hay control civil independiente: los servicios responden al Partido Comunista.",
    "El ministro de Seguridad Pública integra el buró político, la máxima instancia del partido.",
    "La Asamblea Nacional no supervisa en la práctica a los servicios."
  ],
  law: {
    domestic: [
      "El artículo 117 del código penal castiga la \"propaganda contra el Estado\" con hasta 20 años.",
      "La ley de ciberseguridad de 2018 obliga a las empresas a guardar datos en el país y entregarlos a la policía.",
      "El decreto 53 de 2022 reglamenta el acceso policial a los datos de usuarios."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No existe un órgano independiente de control."
    ]
  },
  rights: [
    { d: "2015-07", dir: "amplia", area: "Expresión", h: "Nuevo código penal", x: "Mantiene los delitos de propaganda y abuso de libertades democráticas." },
    { d: "2018-06", dir: "amplia", area: "Privacidad", h: "Ley de ciberseguridad", x: "Obliga a guardar datos en Vietnam y a retirar contenidos a pedido del gobierno." },
    { d: "2022-08", dir: "amplia", area: "Privacidad", h: "Decreto 53", x: "Detalla la obligación de entregar datos a la policía." }
  ],
  events: [
    { d: "2017-07-23", lat: 52.51, lon: 13.35, c: "Germany", t: "encubierta", ev: 1, h: "Secuestro de Trinh Xuan Thanh", x: "Agentes vietnamitas secuestran en el Tiergarten de Berlín a un ex ejecutivo petrolero que pedía asilo y lo llevan a Hanoi.", u: "https://www.rfa.org/english/news/vietnam/vietnam-kidnapping-trial-01312023223033.html", st: "Radio Free Asia", op: "secuestro" },
    { d: "2023-04", lat: 14.0, lon: 100.6, c: "Thailand", t: "encubierta", ev: 2, h: "Desaparece Duong Van Thai", x: "El bloguero refugiado desaparece cerca de Bangkok y reaparece preso en Vietnam; organizaciones de derechos humanos acusan a agentes vietnamitas.", u: "https://www.hrw.org/news/2024/10/30/vietnam-quash-verdict-against-democracy-campaigner", st: "Human Rights Watch" }
  ],
  interest: {
    "China": 3, "Cambodia": 2, "Laos": 2, "Thailand": 2, "United States of America": 2, "Germany": 1, "Czechia": 1, "Philippines": 1, "Taiwan": 1
  },
  timeline: [
    { era: "Guerras", d: "1945", h: "Nacen los servicios", x: "El Viet Minh crea su seguridad y su inteligencia militar.", ctx: "Independencia y guerra contra Francia." },
    { era: "", d: "1954–1975", h: "Guerra de Vietnam", x: "Redes de espías en Saigón, como el periodista Pham Xuan An.", ctx: "Guerra con EE.UU. y Vietnam del Sur." },
    { era: "Doi Moi", d: "1986", h: "Apertura económica", x: "Los servicios siguen bajo control del partido.", ctx: "Reformas del Doi Moi." },
    { era: "", d: "2017", h: "Secuestro en Berlín", x: "Crisis diplomática con Alemania.", ctx: "Campaña anticorrupción del Partido." },
    { era: "Actual", d: "2024–2026", h: "To Lam al frente del partido", x: "El ex jefe de la seguridad lidera el país.", now: true, ctx: "Ascenso del ex ministro de Seguridad." }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "2017", h: "El secuestro de Berlín", x: "Agentes vietnamitas secuestraron a Trinh Xuan Thanh y a su acompañante en un parque de Berlín. Un tribunal alemán condenó en 2018 a un cómplice que admitió trabajar para la inteligencia vietnamita, y en 2023 a otro. La fiscalía mostró que un general de la policía vietnamita dirigió la operación.", who: "Tribunal Superior de Berlín", missing: "", u: "https://www.rfa.org/english/news/vietnam/vietnam-kidnapping-trial-01312023223033.html", st: "Radio Free Asia" },
    { ev: 2, ilegal: true, d: "2023", h: "Duong Van Thai", x: "El bloguero, reconocido como refugiado por la ONU, desapareció en Tailandia. Reapareció preso en Vietnam y fue condenado a 12 años por propaganda. Organizaciones de derechos humanos y de prensa sostienen que fue secuestrado; Vietnam dice que entró al país de manera ilegal.", who: "Human Rights Watch, CPJ y RSF", missing: "Reconocimiento oficial o investigación tailandesa concluyente.", u: "https://www.hrw.org/news/2024/10/30/vietnam-quash-verdict-against-democracy-campaigner", st: "Human Rights Watch" },
    { ev: 2, ilegal: true, d: "2014–", h: "OceanLotus", x: "Empresas de ciberseguridad atribuyen al gobierno vietnamita el grupo OceanLotus (APT32). Espió a periodistas, activistas de la diáspora y empresas extranjeras de autos y energía. Vietnam lo niega.", who: "FireEye y otras empresas de ciberseguridad", missing: "Reconocimiento oficial o acusación judicial.", u: "https://en.wikipedia.org/wiki/OceanLotus", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2017-07", ev: 1, w: 3, h: "La operación de Berlín quedó expuesta", x: "La policía alemana reconstruyó el secuestro y identificó a los participantes; Vietnam perdió a su jefe de inteligencia en Berlín y la relación con Alemania.", why: "No está en duda; hubo dos condenas y una expulsión.", wx: "Sentencias del Tribunal Superior de Berlín.", who: "Gobierno y justicia de Alemania", u: "https://www.arabnews.pk/node/1345671", st: "Reuters, vía Arab News" }
  ],
  modus: {
    embajadas: "Oficiales de inteligencia en embajadas: Alemania expulsó al jefe de inteligencia vietnamita tras el secuestro de 2017.",
    campo: "Agentes y colaboradores de la diáspora en Europa central y el sudeste asiático, según los juicios en Alemania.",
    oficina: "El Ministerio de Seguridad Pública informa al buró político del partido.",
    reclutamiento: "Academias propias de policía y seguridad; colaboradores dentro de la diáspora.",
    tecnica: "Vigilancia de redes sociales, presión a plataformas y ciberespionaje atribuido.",
    enlaces: "Cooperación histórica con la KGB soviética y hoy con servicios de la región."
  },
  insiders: [
    { k: "topo", dir: "entra", ev: 1, d: "1960–1975", n: "Pham Xuan An", h: "El periodista espía", x: "Corresponsal de Time en Saigón que pasó información al Norte durante toda la guerra.", cargo: "Periodista de Reuters y Time", hacia: "Inteligencia norvietnamita", fin: "Nombrado general; murió en 2006.", who: "Gobierno de Vietnam e historiadores", u: "https://en.wikipedia.org/wiki/Ph%E1%BA%A1m_Xu%C3%A2n_%E1%BA%A8n", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "entra", ev: 1, d: "2017", n: "Long N. H.", h: "El cómplice de Praga", x: "Vietnamita checo que alquiló la camioneta del secuestro y admitió trabajar para la inteligencia vietnamita.", cargo: "Residente en la República Checa", hacia: "Inteligencia vietnamita", fin: "Condenado en Berlín a 3 años y 10 meses.", who: "Tribunal Superior de Berlín", u: "https://www.scmp.com/print/news/world/europe/article/2156932/germany-jails-man-who-helped-vietnam-kidnap-oil-executive-berlin", st: "South China Morning Post" }
  ],
  leaks: [
    { k: "desinfo", rol: "autor", ev: 1, d: "2017–", h: "La Fuerza 47", x: "Una unidad del Ejército publica en redes contenidos favorables al partido y denuncia a críticos.", obj: "Controlar la opinión en internet.", who: "Ejército de Vietnam", u: "https://en.wikipedia.org/wiki/Force_47", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "La seguridad investiga a funcionarios en la campaña anticorrupción, incluso en el exterior.", u: "https://www.rfa.org/english/news/vietnam/vietnam-kidnapping-trial-01312023223033.html", st: "Radio Free Asia" },
    politicos: { ev: 1, x: "Disidentes y candidatos independientes son vigilados y detenidos.", u: "https://www.hrw.org/news/2024/10/30/vietnam-quash-verdict-against-democracy-campaigner", st: "Human Rights Watch" },
    periodistas: { ev: 1, x: "Blogueros y periodistas independientes son condenados por propaganda contra el Estado.", u: "https://manage.thediplomat.com/2024/10/vietnamese-court-sentences-dissident-blogger-to-12-years-in-prison", st: "The Diplomat" },
    activistas: { ev: 1, x: "Activistas ambientales y de derechos humanos fueron encarcelados en los últimos años.", u: "https://www.hrw.org/news/2024/10/30/vietnam-quash-verdict-against-democracy-campaigner", st: "Human Rights Watch" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 2, x: "OceanLotus apuntó a empresas y gobiernos de la región, según empresas de ciberseguridad.", u: "https://en.wikipedia.org/wiki/OceanLotus", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 2, "x": "El grupo OceanLotus, que empresas de seguridad atribuyen a Vietnam, atacó a fabricantes de autos extranjeros.", "u": "https://en.wikipedia.org/wiki/OceanLotus", "st": "Wikipedia: OceanLotus"},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 2, x: "Organizaciones de derechos humanos denuncian malos tratos a presos políticos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Vietnam", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 1, x: "Secuestró a Trinh Xuan Thanh en Berlín en 2017.", u: "https://www.rfa.org/english/news/vietnam/vietnam-kidnapping-trial-01312023223033.html", st: "Radio Free Asia" },
    propaganda: { ev: 1, x: "La Fuerza 47 hace propaganda en redes sociales.", u: "https://en.wikipedia.org/wiki/Force_47", st: "Wikipedia (síntesis de fuentes)" },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados recientes." },
    diaspora: { ev: 1, x: "Usó a vietnamitas residentes en la República Checa para el secuestro de Berlín.", u: "https://www.scmp.com/print/news/world/europe/article/2156932/germany-jails-man-who-helped-vietnam-kidnap-oil-executive-berlin", st: "South China Morning Post" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 2, x: "Vigila y presiona a iglesias y pagodas independientes, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Vietnam", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró envíos encubiertos recientes." },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 1, x: "Entrena a fuerzas de seguridad de Laos y Camboya, sus aliados históricos.", u: "https://en.wikipedia.org/wiki/Ministry_of_Public_Security_(Vietnam)", st: "Wikipedia (síntesis de fuentes)" }
  },
  dinero: {
    presupuesto: "El presupuesto de seguridad es secreto.",
    uso: "Policía, vigilancia interna y operaciones contra disidentes.",
    ingresos: "El Ministerio de Seguridad Pública y el Ejército tienen empresas propias.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso documentado de organizaciones criminales.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "cobertura", rol: "autor", ev: 2, d: "2017-07", h: "Una visita oficial como cobertura", x: "Medios checos y eslovacos informaron que Thanh fue sacado de Europa en un avión del gobierno eslovaco que transportaba a una delegación oficial vietnamita. Eslovaquia negó haber participado a sabiendas.", obj: "Sacar al secuestrado sin controles fronterizos.", who: "Fiscalía alemana y prensa centroeuropea", u: "https://ct24.ceskatelevize.cz/clanek/svet/v-nemecku-odsoudili-za-unos-manazera-vietnamce-s-trvalym-pobytem-v-cesku-pracoval-pro-tajne-sluzby-76615", st: "Česká televize" }
  ],
  companies: [
    { n: "Viettel", c: "nacional", rubro: "Telecomunicaciones", rel: "Del Ejército", x: "La mayor operadora del país pertenece al Ministerio de Defensa." }
  ],
  struggles: [
    { a: "Ministerio de Seguridad Pública", b: "Ejército", k: "Entre agencias", stake: "El poder dentro del partido", state: "Latente", x: "El ascenso de To Lam reforzó el peso de la seguridad frente al Ejército." }
  ],
  proxies: [
  ],
  cuentas: {"n": 1, "x": "Sin control independiente."},
  doctrina: [{"h": "Seguridad del Partido", "x": "El Ministerio de Seguridad Pública protege al Partido Comunista dentro y fuera del país."}],
  sources: [
    { t: "Radio Free Asia: segunda condena por el secuestro de Berlín", u: "https://www.rfa.org/english/news/vietnam/vietnam-kidnapping-trial-01312023223033.html" },
    { t: "Human Rights Watch: el caso Duong Van Thai", u: "https://www.hrw.org/news/2024/10/30/vietnam-quash-verdict-against-democracy-campaigner" },
    { t: "Wikipedia: Ministry of Public Security (Vietnam)", u: "https://en.wikipedia.org/wiki/Ministry_of_Public_Security_(Vietnam)" }
  ]
};
