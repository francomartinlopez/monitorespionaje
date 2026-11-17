// Ficha de Marruecos · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["ma"] = {
  id: "ma",
  updated: "2026-11-17",
  summary: [
    "Marruecos tiene dos servicios principales. La Dirección General de Estudios y Documentación (DGED) hace inteligencia exterior y la dirige Yassine Mansouri, compañero de estudios del rey Mohamed VI. La Dirección General de Vigilancia del Territorio (DGST) cubre lo interior; su jefe, Abdellatif Hammouchi, dirige también la policía nacional desde 2015.",
    "La DGST es un socio central de Europa en contraterrorismo y recibe delegaciones de España, Francia, Austria y Suecia. Al mismo tiempo, Marruecos aparece en grandes escándalos de espionaje e influencia: el Proyecto Pegasus de 2021 lo señaló como cliente de NSO, y la justicia belga lo investiga en el caso de sobornos en el Parlamento Europeo.",
    "La prioridad es el Sáhara Occidental y la rivalidad con Argelia. Desde 2020 Marruecos coopera abiertamente con Israel, y desde los años sesenta trabaja con la CIA."
  ],
  keyFacts: [
    { l: "Jefe de la DGST y la policía", v: "Abdellatif Hammouchi", n: "al frente de la DGSN desde 2015" },
    { l: "Jefe de la DGED", v: "Yassine Mansouri", n: "desde 2005" },
    { l: "Caso en el Parlamento Europeo", v: "Desde diciembre de 2022", n: "investigación de la justicia belga" },
    { l: "Relación con Israel", v: "Formal desde 2020", n: "Acuerdos de Abraham" }
  ],
  power: { humana: 4, senales: 3, ciber: 3, imagenes: 2, encubierta: 3, contra: 4 },
  powerWhy: {
    humana: "Redes amplias en la diáspora de Europa y en el Sahel.",
    senales: "Escuchas internas extensas y cooperación técnica con Israel.",
    ciber: "Uso de Pegasus contra periodistas y políticos, según el Proyecto Pegasus.",
    imagenes: "Satélites de observación propios desde 2017 y 2018.",
    encubierta: "Operaciones de influencia en el Parlamento Europeo, según la justicia belga.",
    contra: "Contraterrorismo con resultados reconocidos por servicios europeos."
  },
  priorities: [
    { h: "Sáhara Occidental", x: "Defender la soberanía marroquí frente al Frente Polisario." },
    { h: "Argelia", x: "Rivalidad regional y apoyo argelino al Polisario." },
    { h: "Yihadismo", x: "Redes en el Sahel y entre emigrantes en Europa." },
    { h: "Diáspora", x: "Millones de marroquíes en Francia, España, Bélgica y Países Bajos." },
    { h: "Europa", x: "Influencia sobre las decisiones de la UE." }
  ],
  focos: ["Argelia", "Sáhara Occidental", "España", "Francia", "Bélgica", "Sahel"],
  bodies: {
    "Palacio": { since: 1999, how: "El rey fija las prioridades y los jefes de los servicios le responden. Un consejo de seguridad formal casi no tiene peso propio.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Rabat"] },
    "DGED": { since: 1973, how: "Dirección General de Estudios y Documentación: espionaje exterior, influencia y operaciones en África y Europa. Depende de la Defensa y responde al rey.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Rabat"] },
    "DGST": { since: 1973, how: "Dirección General de Vigilancia del Territorio: contraespionaje, contraterrorismo y control interno. Comparte jefe con la policía nacional desde 2015.", staff: "No se publica.", budget: "Secreto.", tech: ["Interceptación", "Herramientas de intrusión"], where: ["Rabat", "Temara"] },
    "DGSN": { since: 1956, how: "Dirección General de Seguridad Nacional: la policía, unida en el mando a la DGST.", staff: "No se publica.", budget: "Dentro del Ministerio del Interior.", tech: [], where: ["Rabat"] },
    "DRM": { since: 1975, how: "Dirección de Inteligencia Militar de las Fuerzas Armadas Reales, centrada en el Sáhara y en Argelia.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: ["Satélites Mohammed VI"], where: ["Rabat"] }
  },
  civil: [
    "Los servicios responden al rey y no al gobierno elegido.",
    "El Parlamento no controla a la DGED ni a la DGST.",
    "Organizaciones de derechos humanos denuncian el uso de los servicios contra periodistas críticos."
  ],
  law: {
    domestic: [
      "La ley antiterrorista de 2003, aprobada tras los atentados de Casablanca, amplió las detenciones.",
      "La DGST tiene facultades de policía judicial desde 2011."
    ],
    foreign: [
      "No hay normas públicas sobre las operaciones de la DGED en el exterior."
    ],
    oversight: [
      "Sin control parlamentario efectivo; los servicios responden al rey.",
      "Consejo Nacional de Derechos Humanos, sin facultades sobre los servicios."
    ]
  },
  rights: [
    { d: "2003", dir: "amplia", area: "Debido proceso", h: "Ley antiterrorista", x: "Tras los atentados de Casablanca se amplían las detenciones sin juez." },
    { d: "2011", dir: "recorta", area: "Debido proceso", h: "Nueva Constitución", x: "Reconoce derechos y prohíbe la tortura, aunque sin control sobre los servicios." }
  ],
  events: [
    { d: "1965-10-29", lat: 48.85, lon: 2.33, c: "France", t: "encubierta", ev: 1, h: "Secuestro de Ben Barka", x: "El opositor Mehdi Ben Barka es secuestrado en París y desaparece; la justicia francesa condenó a agentes franceses y al ministro marroquí Mohamed Oufkir en ausencia.", u: "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", st: "Wikipedia: Mehdi Ben Barka", op: "secuestro" },
    {"d": "1971-07-10", "lat": 33.82, "lon": -7.0, "c": "Morocco", "t": "contra", "ev": 1, "h": "El golpe de Skhirat", "x": "Cadetes militares atacan el palacio durante el cumpleaños del rey y matan a decenas de invitados.", "u": "https://en.wikipedia.org/wiki/1971_Moroccan_coup_attempt", "st": "Wikipedia: 1971 Moroccan coup attempt"},
    {"d": "1972-08-16", "lat": 34.02, "lon": -6.84, "c": "Morocco", "t": "encubierta", "ev": 1, "h": "El golpe de Oufkir", "x": "Aviones militares atacan el avión del rey. El general Mohamed Oufkir, ministro de Defensa y ex jefe de seguridad, aparece muerto al día siguiente.", "u": "https://en.wikipedia.org/wiki/1972_Moroccan_coup_attempt", "st": "Wikipedia: 1972 Moroccan coup attempt"},
    { d: "2003-05-16", lat: 33.59, lon: -7.62, c: "Morocco", t: "contra", ev: 1, h: "Atentados de Casablanca", x: "Doce suicidas matan a 33 personas; el Estado endurece la ley antiterrorista.", u: "https://en.wikipedia.org/wiki/2003_Casablanca_bombings", st: "Wikipedia: atentados de Casablanca" },
    { d: "2019", lat: 48.85, lon: 2.35, c: "France", t: "ciber", ev: 2, h: "Pegasus en Francia", x: "El Proyecto Pegasus halló números de periodistas y ministros franceses entre los posibles blancos de un cliente marroquí; Rabat lo niega.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    { d: "2022-12-09", lat: 50.85, lon: 4.35, c: "Belgium", t: "humana", ev: 2, h: "Sobornos en el Parlamento Europeo", x: "La policía belga detiene a eurodiputados y asistentes acusados de recibir dinero de Catar y Marruecos.", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament", st: "Wikipedia: caso de corrupción en el Parlamento Europeo" },
    {"d": "2026-07-16", "lat": 34.0, "lon": -6.85, "c": "Morocco", "t": "senales", "ev": 2, "h": "Un denunciante sobre Pegasus", "x": "Un ex empleado presentado como miembro de la DGST describe a Forbidden Stories el uso de Pegasus contra periodistas, activistas y funcionarios extranjeros. Marruecos lo niega.", "u": "https://forbiddenstories.org/how-did-morocco-become-addicted-to-tracking-down-its-opponents-with-spyware/", "st": "Forbidden Stories"}
  ],
  interest: {
    "Algeria": 3, "W. Sahara": 3, "Spain": 3, "France": 3, "Belgium": 2, "Netherlands": 2, "Mauritania": 2, "Mali": 2, "Israel": 2, "United States of America": 2
  },
  timeline: [
    { era: "Hassan II", d: "1965", h: "Caso Ben Barka", x: "Desaparición del principal opositor en París.", ctx: "Reinado de Hassan II." },
    { era: "Años de plomo", d: "1970–1990", h: "Represión", x: "Cárceles secretas como Tazmamart contra opositores y militares.", ctx: "Golpes fallidos y guerra del Sáhara." },
    { era: "Mohamed VI", d: "2003", h: "Atentados de Casablanca", x: "Giro hacia el contraterrorismo y alianza con la CIA.", ctx: "Después del 11-S." },
    { era: "", d: "2015", h: "Hammouchi suma la policía", x: "La DGST y la DGSN quedan bajo un mismo jefe.", ctx: "Amenaza del Estado Islámico." },
    { era: "", d: "2020", h: "Relaciones con Israel", x: "Acuerdo con Israel y reconocimiento de EE.UU. sobre el Sáhara.", ctx: "Acuerdos de Abraham." },
    { era: "Actual", d: "2021–2026", h: "Pegasus y Parlamento Europeo", x: "Escándalos de espionaje e influencia en Europa.", now: true, ctx: "Disputa por el Sáhara Occidental." }
  ],
  cases: [
    {"ev": 1, "ilegal": false, "d": "1972", "h": "Oufkir, el jefe de seguridad golpista", "x": "El general Mohamed Oufkir dirigió la seguridad del reino durante años y organizó el intento de derribar el avión de Hasán II. Murió el mismo día; la versión oficial habló de suicidio.", "who": "Historiadores; familia Oufkir", "missing": "Las circunstancias de su muerte no están aclaradas.", "u": "https://en.wikipedia.org/wiki/1972_Moroccan_coup_attempt", "st": "Wikipedia: 1972 Moroccan coup attempt"},
    {"ev": 2, "ilegal": false, "d": "2026", "h": "El denunciante de la DGST", "x": "Forbidden Stories, The Guardian y Le Monde publicaron el testimonio de un ex empleado que describe cómo se usó Pegasus contra opositores y funcionarios extranjeros. Amnistía Internacional amplió la denuncia en octubre de 2026.", "who": "Forbidden Stories y medios asociados; Amnistía Internacional", "missing": "Marruecos niega el uso de Pegasus y no hubo investigación judicial.", "u": "https://www.amnestyusa.org/press-releases/morocco-whistleblower-reveals-how-authorities-used-a-web-of-surveillance-to-silence-journalists-and-activists/", "st": "Amnistía Internacional"},
    { ev: 1, ilegal: true, d: "1965", h: "La desaparición de Mehdi Ben Barka", x: "El líder opositor fue secuestrado en París por policías franceses en contacto con los servicios marroquíes. Un tribunal francés condenó en ausencia al ministro del Interior marroquí. Su cuerpo nunca apareció.", who: "Justicia francesa", missing: "", u: "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", st: "Wikipedia: Mehdi Ben Barka" },
    { ev: 2, ilegal: true, d: "2002–2006", h: "El centro de Temara", x: "Funcionarios de EE.UU. dijeron a la AP que la CIA interrogó a sospechosos de Al Qaeda en el centro de la DGST en Temara. Ex detenidos denunciaron torturas. Marruecos lo niega.", who: "Associated Press; ex detenidos; organizaciones de derechos humanos", missing: "Reconocimiento oficial o una investigación judicial.", u: "https://en.wikipedia.org/wiki/Temara_interrogation_centre", st: "Wikipedia: centro de Temara" },
    { ev: 2, ilegal: true, d: "2017–2021", h: "Pegasus", x: "El Proyecto Pegasus atribuyó a Marruecos miles de números seleccionados como posibles blancos, entre ellos los de periodistas, del presidente Macron y de ministros franceses. Amnistía confirmó infecciones en periodistas marroquíes. Marruecos niega haber comprado Pegasus.", who: "Amnistía Internacional; Forbidden Stories; Citizen Lab", missing: "Pruebas de que el gobierno compró la herramienta o un fallo judicial.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    { ev: 2, ilegal: true, d: "2019–2022", h: "Sobornos en el Parlamento Europeo", x: "La justicia belga acusa a ex eurodiputados de recibir dinero de Catar y de Marruecos para favorecer a esos países. Un servicio europeo alertó a Bélgica sobre pagos marroquíes al ex eurodiputado Antonio Panzeri. Marruecos lo niega.", who: "Fiscalía federal de Bélgica; testimonio de Francesco Giorgi", missing: "Un juicio con sentencia.", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament", st: "Wikipedia: caso de corrupción en el Parlamento Europeo" }
  ],
  failures: [
    {"k": "falla", "d": "1971-07-10", "h": "Skhirat", "x": "Más de mil cadetes llegaron armados al palacio sin que la seguridad lo detectara.", "ev": 1, "why": "No está en duda.", "w": 3, "wx": "Hay historia oficial y testimonios.", "who": "Historiadores", "u": "https://en.wikipedia.org/wiki/1971_Moroccan_coup_attempt", "st": "Wikipedia: 1971 Moroccan coup attempt"},
    {"k": "acierto", "d": "2015-11", "h": "La pista de Abaaoud", "x": "Marruecos dio a Francia datos que ayudaron a ubicar al organizador de los atentados de París, según el gobierno francés.", "ev": 2, "why": "El aporte lo agradecieron públicamente las autoridades francesas; su peso exacto no se conoce.", "w": 2, "wx": "Hay declaraciones oficiales, no documentos.", "who": "Gobierno de Francia", "u": "https://en.wikipedia.org/wiki/Abdelhamid_Abaaoud", "st": "Wikipedia: Abdelhamid Abaaoud"},
    { k: "falla", d: "2003-05-16", ev: 1, w: 3, h: "Los atentados de Casablanca", x: "Doce suicidas atacaron cinco blancos en la ciudad y mataron a 33 personas además de ellos mismos. La amenaza yihadista local no estaba en el radar.", why: "No está en duda; el gobierno respondió con una ley antiterrorista y miles de detenciones.", wx: "Investigaciones judiciales y reconocimiento oficial.", who: "Gobierno de Marruecos", u: "https://en.wikipedia.org/wiki/2003_Casablanca_bombings", st: "Wikipedia: atentados de Casablanca" }
  ],
  modus: {
    embajadas: "Oficiales en embajadas y consulados de Europa, con fuerte presencia en España, Francia y Bélgica. Los consulados atienden a la diáspora y, según sus críticos, también la vigilan.",
    campo: "Redes de informantes en el Sahel y en los barrios de emigrantes de Europa. Agentes en el Sáhara Occidental y en la frontera con Argelia.",
    oficina: "Mansouri y Hammouchi responden al rey. La prensa describe rivalidades entre la DGED y la DGST.",
    reclutamiento: "Personal de la policía, del Ejército y de las élites formadas en el Colegio Real.",
    tecnica: "Escuchas internas, satélites propios y herramientas de intrusión, según el Proyecto Pegasus. Cooperación técnica con Israel desde 2020.",
    enlaces: "Socio de la CIA, de los servicios franceses y españoles y del Mossad. Intercambia información de contraterrorismo con toda Europa."
  },
  insiders: [
    {"k": "denunciante", "dir": "sale", "d": "2026", "n": "Ex empleado de la DGST (sin nombre público)", "h": "El denunciante de Pegasus", "x": "Describió a periodistas el uso del programa espía contra críticos del gobierno.", "cargo": "Dirección General de Vigilancia del Territorio (DGST)", "hacia": "Forbidden Stories y medios asociados", "fin": "Su identidad fue revelada por la prensa marroquí después de la publicación.", "ev": 2, "who": "Forbidden Stories; Le Monde", "u": "https://forbiddenstories.org/how-did-morocco-become-addicted-to-tracking-down-its-opponents-with-spyware/", "st": "Forbidden Stories"},
    { k: "desertor", dir: "sale", ev: 3, d: "2024–2025", n: "Mehdi Hijaoui", h: "El ex funcionario de la DGED en España", x: "Se presentó como ex número dos de la DGED y pidió asilo en España; Rabat dice que fue un empleado menor y lo acusa de estafa.", cargo: "Funcionario de la DGED, según él mismo", hacia: "Se desconoce", fin: "Vive en España y es buscado por Marruecos.", who: "Prensa española y argelina; versiones opuestas de Rabat", u: "https://en.wikipedia.org/wiki/Yassine_Mansouri", st: "Wikipedia: Yassine Mansouri" }
  ],
  leaks: [
    { k: "filtracion", rol: "blanco", ev: 2, d: "2014–2015", h: "Las filtraciones de Chris Coleman", x: "Una cuenta anónima publicó correos de la diplomacia y de la DGED sobre pagos a periodistas extranjeros por el tema del Sáhara.", obj: "Exponer las campañas de influencia marroquíes.", who: "Prensa francesa e internacional", u: "https://en.wikipedia.org/wiki/Yassine_Mansouri", st: "Wikipedia: Yassine Mansouri" }
  ],
  practicas: {
    propios: { ev: 2, x: "Periodistas y activistas marroquíes fueron infectados con Pegasus, según Amnistía.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    politicos: { ev: 2, x: "Ministros franceses y el presidente Macron figuraban entre los blancos seleccionados, según el Proyecto Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    periodistas: { ev: 2, x: "Periodistas marroquíes y franceses figuran entre los blancos de Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    activistas: { ev: 2, x: "Activistas saharauis y del movimiento del Rif denunciaron vigilancia.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    aliados: { ev: 2, x: "Francia y España, aliados de Marruecos, aparecen entre los países con blancos de Pegasus.", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia: Proyecto Pegasus" },
    rivales: { ev: 1, x: "Argelia y el Frente Polisario son los blancos principales.", u: "https://en.wikipedia.org/wiki/Algeria%E2%80%93Morocco_relations", st: "Wikipedia: relaciones Argelia–Marruecos" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 1, x: "Ben Barka desapareció en París en 1965, con participación marroquí según la justicia francesa.", u: "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", st: "Wikipedia: Mehdi Ben Barka" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 2, x: "Ex detenidos denunciaron torturas en el centro de Temara.", u: "https://en.wikipedia.org/wiki/Temara_interrogation_centre", st: "Wikipedia: centro de Temara" },
    secuestro: { ev: 2, x: "La CIA habría interrogado a detenidos de Al Qaeda en Temara, según la AP.", u: "https://en.wikipedia.org/wiki/Temara_interrogation_centre", st: "Wikipedia: centro de Temara" },
    propaganda: { ev: 2, x: "Pagos a periodistas extranjeros por el Sáhara, según correos filtrados.", u: "https://en.wikipedia.org/wiki/Yassine_Mansouri", st: "Wikipedia: Yassine Mansouri" },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 2, x: "Pagos a eurodiputados para favorecer a Marruecos, según la justicia belga.", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament", st: "Wikipedia: caso de corrupción en el Parlamento Europeo" },
    diaspora: { ev: 3, x: "Asociaciones de emigrantes y mezquitas en Europa denunciadas como vía de control; Rabat lo niega.", u: "https://en.wikipedia.org/wiki/Yassine_Mansouri", st: "Wikipedia: Yassine Mansouri" },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 1, x: "Pasa información de contraterrorismo a Francia, España, Austria y otros países europeos.", u: "https://www.moroccoworldnews.com/2026/05/291269/abdellatif-hammouchi-leads-security-delegation-to-vienna-for-un-meeting/", st: "Morocco World News" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto y no pasa por un control parlamentario detallado.",
    uso: "Contraterrorismo, vigilancia interna, influencia en Europa y África y la disputa por el Sáhara.",
    ingresos: "Esta ficha no encontró ingresos propios documentados.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró vínculos documentados con el crimen organizado.",
    cobertura: "La justicia belga investiga a una ONG del caso de sobornos en el Parlamento Europeo."
  },
  fondos: [
    { k: "cobertura", rol: "autor", ev: 2, d: "2019–2022", h: "Dinero para eurodiputados", x: "Según la fiscalía belga, el ex eurodiputado Panzeri recibió pagos de Marruecos para influir en el Parlamento Europeo.", obj: "Influir en las decisiones de la UE sobre el Sáhara y la pesca.", who: "Fiscalía federal de Bélgica", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament", st: "Wikipedia: caso de corrupción en el Parlamento Europeo" }
  ],
  proxies: [
    { id: "fightimpunity", s: "Fight Impunity", n: "Fight Impunity", k: "ong", d: "2019–2022", rol: "usa", hoy: false, ev: 3, x: "ONG de Bruselas fundada por Panzeri que, según un acusado arrepentido, sirvió para canalizar dinero; la fiscalía investiga los pagos de Catar y de Marruecos.", who: "Testimonio de Francesco Giorgi; fiscalía belga", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament", st: "Wikipedia: caso de corrupción en el Parlamento Europeo" }
  ],
  companies: [
    { n: "NSO Group", c: "extranjera", rubro: "Software espía", rel: "Proveedor señalado", x: "El Proyecto Pegasus atribuyó a Marruecos un cliente de Pegasus; Rabat lo niega." }
  ],
  struggles: [
    { a: "DGST (Hammouchi)", b: "DGED (Mansouri)", k: "Entre agencias", stake: "La influencia ante el rey", state: "Discutida", x: "Medios argelinos describen una pelea abierta; medios marroquíes y franceses lo niegan." }
  ],
  doctrina: [{"h": "Inteligencia como diplomacia", "x": "La cooperación antiterrorista sirve de moneda de cambio con Europa."}],
  cuentas: {"n": 1, "x": "Los servicios sólo responden al rey."},
  sources: [
    { t: "Wikipedia: Proyecto Pegasus", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)" },
    { t: "Wikipedia: caso de corrupción en el Parlamento Europeo", u: "https://en.wikipedia.org/wiki/Qatar_corruption_scandal_at_the_European_Parliament" },
    { t: "Wikipedia: Abdellatif Hammouchi", u: "https://en.wikipedia.org/wiki/Abdellatif_Hammouchi" },
    { t: "Morocco World News: Hammouchi en Viena (2026)", u: "https://www.moroccoworldnews.com/2026/05/291269/abdellatif-hammouchi-leads-security-delegation-to-vienna-for-un-meeting/" }
  ]
};
