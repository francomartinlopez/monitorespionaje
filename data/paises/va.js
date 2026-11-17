// Ficha del Vaticano · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["va"] = {
  id: "va",
  updated: "2026-11-15",
  summary: [
    "El Vaticano no tiene un servicio de inteligencia formal. Su capacidad de información descansa en la Secretaría de Estado y en una red de más de cien nunciaturas, las embajadas del papa, que reciben datos de obispos, sacerdotes y fieles de todo el mundo. La seguridad interna depende del Cuerpo de la Gendarmería y la del papa, de la Guardia Suiza.",
    "Gianluca Gauzzi Broccoletti, un ingeniero especializado en ciberseguridad, comanda la Gendarmería desde 2019. Su antecesor, Domenico Giani, renunció ese año tras la filtración de un memorando interno. La Autoridad de Supervisión e Información Financiera (ASIF) vigila el lavado de dinero en las finanzas vaticanas.",
    "En diciembre de 2025 el papa León XIV advirtió ante los servicios italianos que en varios países la Iglesia es víctima de agencias de inteligencia que usan información confidencial con malos fines. En 2026 el periodista Ken Klippenstein publicó, citando fuentes anónimas, que EE.UU. intensificó su espionaje sobre el Vaticano, y una causa italiana por espionaje ruso mencionó una supuesta misión vinculada a la Santa Sede.",
    "La historia vaticana mezcla diplomacia, dinero y secreto. Incluye el papel de clérigos en la fuga de criminales nazis, el escándalo del Banco Ambrosiano y las filtraciones de 2012 y 2015. También los pagos de la Secretaría de Estado a una consultora para supuestas tareas de inteligencia, juzgados en el caso Becciu."
  ],
  keyFacts: [
    { l: "Comandante de la Gendarmería", v: "Gianluca Gauzzi Broccoletti", n: "desde el 15 oct 2019" },
    { l: "Red diplomática", v: "Más de 100 nunciaturas", n: "relaciones con unos 180 Estados" },
    { l: "Pago por \"inteligencia\"", v: "€ 575.000", n: "de la Secretaría de Estado a la consultora de Cecilia Marogna, según el juicio" },
    { l: "Servicio de inteligencia formal", v: "No tiene", n: "la información circula por la Secretaría de Estado y las nunciaturas" }
  ],
  power: { humana: 3, senales: 1, ciber: 1, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Red de nunciaturas, obispos y órdenes religiosas en casi todos los países, con acceso a gobiernos y sociedades.",
    senales: "No tiene capacidad propia de interceptación conocida.",
    ciber: "Una pequeña unidad de ciberseguridad en la Gendarmería, que fue blanco de hackers chinos en 2020.",
    imagenes: "Sin capacidad propia.",
    encubierta: "No hay operaciones encubiertas documentadas; sí pagos opacos para gestiones en el exterior, como en el caso Marogna.",
    contra: "La Gendarmería investiga filtraciones internas, pero el Vaticano sufrió infiltraciones históricas de servicios del bloque soviético."
  },
  priorities: [
    { h: "Libertad de la Iglesia", x: "Proteger a católicos y clérigos en China, Nicaragua y otros países con restricciones." },
    { h: "Diplomacia por la paz", x: "Mediar en conflictos como Ucrania y Medio Oriente." },
    { h: "Seguridad del papa", x: "Proteger al papa en Roma y en sus viajes, con apoyo de policías extranjeras." },
    { h: "Finanzas limpias", x: "Evitar el lavado de dinero y los escándalos financieros." },
    { h: "Filtraciones", x: "Evitar la salida de documentos internos, como en los casos Vatileaks." }
  ],
  focos: ["China", "Ucrania y Rusia", "Medio Oriente", "Nicaragua", "EE.UU.", "Italia"],
  bodies: {
    "SdE": { since: 1487, how: "Gobierna la diplomacia y recibe la información de las nunciaturas. La conducen el cardenal Pietro Parolin y, como sustituto para los asuntos generales desde 2026, el arzobispo Paolo Rudelli.", staff: "No se publica.", budget: "Dentro del presupuesto de la Santa Sede.", tech: ["Valija diplomática", "Archivos"], where: ["Palacio Apostólico, Vaticano"] },
    "Nunciaturas": { since: 1500, how: "Embajadas del papa en más de cien países. El nuncio informa a Roma sobre gobiernos, obispos y sociedad, y propone candidatos a obispos.", staff: "Diplomáticos formados en la Pontificia Academia Eclesiástica.", budget: "No se publica por separado.", tech: ["Contactos con gobiernos", "Red de obispos y órdenes"], where: ["Capitales de todo el mundo"] },
    "Gendarmería": { since: 1816, how: "Policía del Estado vaticano: seguridad, investigaciones penales, antiterrorismo y ciberseguridad. Coordina con policías y servicios extranjeros en los viajes del papa.", staff: "Unos 130 agentes, según estimaciones de prensa.", budget: "Dentro de la Gobernación.", tech: ["Centro de operaciones", "Ciberseguridad"], where: ["Ciudad del Vaticano", "Castel Gandolfo"] },
    "Guardia Suiza": { since: 1506, how: "Custodia personal del papa y accesos del Palacio Apostólico. Sus miembros son soldados suizos católicos.", staff: "Unos 135 guardias.", budget: "Dentro de la Santa Sede, con aportes de donantes.", tech: [], where: ["Ciudad del Vaticano"] },
    "ASIF": { since: 2010, how: "Unidad de información financiera que recibe reportes de operaciones sospechosas y supervisa al banco vaticano (IOR). Coopera con unidades de otros países contra el lavado.", staff: "Un pequeño equipo técnico.", budget: "Propio.", tech: ["Reportes de operaciones sospechosas"], where: ["Ciudad del Vaticano"] }
  },
  civil: [
    "El papa concentra todos los poderes del Estado; la Secretaría de Estado conduce la diplomacia y la información.",
    "La Gendarmería depende de la Gobernación del Estado vaticano y responde en última instancia al papa.",
    "No hay parlamento ni control externo de las tareas de información."
  ],
  law: {
    domestic: [
      "El Vaticano aplica una versión del Código Penal italiano del siglo XIX, reformada en partes.",
      "Desde 2013 castiga la divulgación de documentos reservados, lo que permitió el juicio Vatileaks 2."
    ],
    foreign: [
      "Las nunciaturas gozan de inmunidad diplomática, como cualquier embajada.",
      "Los acuerdos con Italia regulan la cooperación policial y la seguridad en los alrededores."
    ],
    oversight: [
      "No existe un órgano de control independiente.",
      "El Tribunal del Estado vaticano juzga delitos, incluidos los financieros, como en el caso Becciu."
    ]
  },
  rights: [
    { d: "2010-12", dir: "recorta", area: "Transparencia", h: "Nace la ASIF", x: "Benedicto XVI crea una autoridad financiera contra el lavado de dinero." },
    { d: "2013-07", dir: "amplia", area: "Expresión", h: "Delito de divulgar documentos", x: "Una reforma penal castiga con cárcel la filtración de documentos reservados." },
    { d: "2020-03", dir: "recorta", area: "Transparencia", h: "Se abren los archivos de Pío XII", x: "Los investigadores pueden consultar los documentos de 1939 a 1958." },
    { d: "2021-04", dir: "recorta", area: "Debido proceso", h: "Cardenales ante el tribunal", x: "Francisco permite que los cardenales sean juzgados por el tribunal vaticano ordinario." }
  ],
  events: [
    { d: "2012-05-23", lat: 41.903, lon: 12.454, c: "Vatican", t: "contra", ev: 1, h: "Detienen al mayordomo del papa", x: "La Gendarmería detiene a Paolo Gabriele, que filtró documentos de Benedicto XVI; fue condenado e indultado.", u: "https://en.wikipedia.org/wiki/Vatican_leaks_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2015-11-02", lat: 41.903, lon: 12.454, c: "Vatican", t: "contra", ev: 1, h: "Vatileaks 2", x: "Detienen a un monseñor y a una consultora por filtrar documentos financieros a dos periodistas.", u: "https://en.wikipedia.org/wiki/VatiLeaks", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2018-02-01", lat: 17.57, lon: -3.99, c: "Mali", t: "humana", ev: 2, h: "Pagos por una monja secuestrada", x: "La Secretaría de Estado paga a la consultora de Cecilia Marogna para gestionar la liberación de una monja colombiana secuestrada en Malí, según el juicio vaticano.", u: "https://www.unionesarda.it/news/italia/caso-becciu-cecilia-marogna-torna-libera-con-obbligo-di-firma-dnx21xe2", st: "L'Unione Sarda" },
    { d: "2026-07-07", lat: 41.9, lon: 12.5, c: "Italy", t: "contra", ev: 3, h: "Una misión rusa sobre el Vaticano", x: "En una causa por espionaje ruso en Roma, un ex agente italiano menciona una misión relacionada con el Vaticano; no se aclaró su contenido.", u: "https://infovaticana.com/2026/07/10/una-investigacion-por-espionaje-ruso-en-italia-revela-una-supuesta-mision-relacionada-con-el-vaticano/", st: "InfoVaticana" }
  ],
  interest: {
    "China": 3, "Ukraine": 3, "Russia": 2, "Italy": 3, "United States of America": 2, "Nicaragua": 2, "Israel": 2, "Lebanon": 2, "Iraq": 1, "Syria": 1,
    "Venezuela": 1, "Argentina": 1, "Cuba": 1, "Poland": 1, "Mali": 1, "Nigeria": 1
  },
  timeline: [
    {"era": "Antiguo régimen", "d": "1500–1599", "h": "Nunciaturas permanentes", "x": "La Santa Sede organiza una de las primeras redes diplomáticas estables de Europa.", "ctx": "Reforma protestante y Concilio de Trento."},
    {"era": "", "d": "1555–1600", "h": "La Secretaría de Cifra", "x": "La Curia mantiene un secretario de cifra que cifra y descifra la correspondencia de los nuncios.", "ctx": "Guerras de religión en Europa."},
    {"era": "", "d": "1566", "h": "La \"Santa Alianza\"", "x": "El periodista Eric Frattini sostiene que Pío V creó un servicio secreto con ese nombre; los historiadores no encontraron pruebas.", "ctx": "Contrarreforma y conflicto con la Inglaterra de Isabel I."},
    {"era": "Siglo XX", "d": "1909–1921", "h": "El Sodalitium Pianum", "x": "Monseñor Umberto Benigni arma una red que vigila y denuncia a clérigos sospechosos de modernismo.", "ctx": "Campaña de Pío X contra el modernismo teológico."},
    {"era": "Siglo XX", "d": "1929", "h": "Pactos de Letrán", "x": "Nace el Estado de la Ciudad del Vaticano.", "ctx": "Italia fascista reconoce al Estado vaticano."},
    {"era": "", "d": "1945–1951", "h": "Las rutas de escape", "x": "Clérigos en Roma ayudan a criminales nazis a huir a América del Sur.", "ctx": "Fin de la Segunda Guerra Mundial."},
    {"era": "Guerra Fría", "d": "1960–1989", "h": "Infiltración del Este", "x": "Servicios polacos, checos y soviéticos reclutan clérigos para espiar al Vaticano.", "ctx": "Persecución de la Iglesia en el bloque soviético."},
    {"era": "", "d": "1978–1984", "h": "Mediación por el Beagle", "x": "El Vaticano evita una guerra entre Argentina y Chile.", "ctx": "Conflicto entre Argentina y Chile."},
    {"era": "", "d": "1981–1982", "h": "Atentado y Ambrosiano", "x": "Atentado contra Juan Pablo II y quiebra del Banco Ambrosiano, ligado al banco vaticano.", "ctx": "Pontificado de Juan Pablo II y crisis de Solidaridad en Polonia."},
    {"era": "Siglo XXI", "d": "2012–2015", "h": "Vatileaks", "x": "Filtraciones de documentos internos y juicios en el Vaticano.", "ctx": "Renuncia de Benedicto XVI."},
    {"era": "", "d": "2020–2023", "h": "Hackeo chino y caso Becciu", "x": "Hackers apuntan al Vaticano y un cardenal es condenado por manejo de fondos.", "ctx": "Pontificado de Francisco y acuerdo con China."},
    {"era": "Actual", "d": "2025–2026", "h": "León XIV y los servicios", "x": "El papa advierte sobre los servicios que atacan a la Iglesia; se denuncian espionajes de EE.UU. y Rusia.", "now": true, "ctx": "Primer papa estadounidense."}
  ],
  cases: [
    { ev: 1, ilegal: true, d: "1945–1951", h: "Las rutas de escape nazis", x: "El obispo austríaco Alois Hudal y otros clérigos en Roma ayudaron a criminales de guerra nazis a conseguir documentos y huir, muchos a Argentina. Se discute cuánto sabía la cúpula vaticana.", who: "Historiadores, archivos y el propio Hudal en sus memorias", missing: "", u: "https://en.wikipedia.org/wiki/Ratlines_(World_War_II)", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "1982", h: "El Banco Ambrosiano", x: "El banco italiano quebró con un agujero millonario ligado al banco vaticano (IOR), que pagó unos 240 millones de dólares a los acreedores sin admitir culpa. Su presidente, Roberto Calvi, apareció ahorcado en Londres.", who: "Justicia italiana y acuerdo de 1984 del IOR con los acreedores", missing: "Una sentencia que establezca la responsabilidad del IOR.", u: "https://en.wikipedia.org/wiki/Banco_Ambrosiano", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2013–2023", h: "El caso Becciu", x: "El cardenal Angelo Becciu fue condenado en 2023 por la compra de un edificio en Londres y por pagos a la consultora Cecilia Marogna para supuestas tareas de inteligencia. En marzo de 2026 la corte de apelación anuló en parte el juicio y ordenó repetir el debate.", who: "Tribunal del Estado vaticano", missing: "Una sentencia firme tras la apelación.", u: "https://www.agi.it/estero/news/2026-03-17/processo-becciu-annullato-procedimento-primo-grado-36152433/", st: "AGI" },
    { ev: 3, ilegal: false, d: "2026", h: "EE.UU. espía al papa", x: "El periodista Ken Klippenstein publicó, con fuentes anónimas, que la CIA tiene espías en la burocracia vaticana y que la NSA intercepta sus comunicaciones, con más intensidad tras las críticas de Trump a León XIV.", who: "Ken Klippenstein", missing: "Documentos o confirmación oficial.", u: "https://www.kenklippenstein.com/p/us-spies-on-the-vatican", st: "Ken Klippenstein" },
    { ev: 3, ilegal: false, d: "1983", h: "La desaparición de Emanuela Orlandi", x: "La hija de un empleado vaticano desapareció en Roma a los 15 años. Hay hipótesis que involucran a servicios extranjeros, a la mafia y a funcionarios vaticanos; en 2023 el Vaticano reabrió la investigación.", who: "Familia Orlandi, investigaciones periodísticas y fiscalías", missing: "Pruebas que permitan establecer qué pasó.", u: "https://en.wikipedia.org/wiki/Disappearance_of_Emanuela_Orlandi", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 4, ilegal: false, d: "1990–", h: "La Entidad, el espionaje secreto del papa", x: "Circula la versión de un servicio secreto vaticano centenario llamado \"la Entidad\", que hasta habría hecho asesinatos.", who: "Libros de divulgación y sitios conspirativos", missing: "Cualquier documento o testimonio verificable.", debunk: "Nace de libros sin fuentes comprobables. El Vaticano no tiene un servicio formal y la información circula por la Secretaría de Estado y las nunciaturas.", u: "https://en.wikipedia.org/wiki/Holy_See", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    {"k": "acierto", "d": "1978–1984", "ev": 1, "w": 3, "h": "La mediación por el Beagle", "x": "La diplomacia vaticana frenó una guerra inminente entre Argentina y Chile y logró el tratado de 1984.", "why": "No está en duda.", "wx": "", "who": "Gobiernos de Argentina y Chile", "u": "https://en.wikipedia.org/wiki/Papal_mediation_in_the_Beagle_conflict", "st": "Wikipedia: Papal mediation in the Beagle conflict"},
    { k: "falla", d: "1960–1989", ev: 1, w: 3, h: "Infiltrados del bloque soviético", x: "Servicios de Polonia y Checoslovaquia reclutaron clérigos que informaban desde Roma; en 2007 el arzobispo de Varsovia renunció al revelarse su colaboración.", why: "No está en duda: lo muestran los archivos de los servicios comunistas.", wx: "Archivos abiertos en Polonia y República Checa.", who: "Instituto de la Memoria Nacional de Polonia", u: "https://en.wikipedia.org/wiki/Stanis%C5%82aw_Wielgus", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2012", ev: 1, w: 3, h: "El mayordomo filtrador", x: "El ayudante personal del papa fotocopió durante años documentos reservados y los dio a un periodista.", why: "No está en duda: Gabriele confesó y fue condenado.", wx: "Sentencia del tribunal vaticano.", who: "Tribunal vaticano", u: "https://en.wikipedia.org/wiki/Vatican_leaks_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falsa", d: "1981-05-13", ev: 3, w: 2, h: "La pista búlgara", x: "El atentado de Mehmet Ali Ağca contra Juan Pablo II fue atribuido por algunos a los servicios búlgaros y soviéticos.", why: "Un tribunal italiano absolvió en 1986 a los búlgaros acusados porque no se probó su participación; una comisión italiana de 2006 sostuvo la pista soviética sin pruebas concluyentes.", wx: "Hay indicios y testimonios contradictorios del propio Ağca.", who: "Comisión Mitrokhin del Parlamento italiano (2006)", u: "https://en.wikipedia.org/wiki/Attempted_assassination_of_Pope_John_Paul_II", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Las nunciaturas son la principal fuente de información: el nuncio se reúne con gobiernos, oposiciones y obispos y manda informes a la Secretaría de Estado. Tienen inmunidad diplomática.",
    campo: "No hay agentes de campo formales. Obispos, órdenes religiosas y organizaciones católicas aportan información desde zonas de conflicto donde pocas embajadas llegan.",
    oficina: "La Secretaría de Estado reúne y analiza la información en el Palacio Apostólico. La Gendarmería tiene un centro de operaciones y un área de ciberseguridad.",
    reclutamiento: "Los diplomáticos se forman en la Pontificia Academia Eclesiástica. En casos puntuales, la Secretaría de Estado contrató consultores externos, como en el caso Marogna.",
    tecnica: "Capacidad técnica mínima: ciberseguridad defensiva y comunicaciones protegidas, apoyadas en cooperación con Italia y otros países.",
    enlaces: "Coopera con la policía y los servicios italianos y, según documentos del FBI citados por Klippenstein, recibe alertas de seguridad de EE.UU. en los viajes del papa."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 1, d: "2012-05", n: "Paolo Gabriele", h: "El mayordomo de Benedicto XVI", x: "Filtró cartas y documentos del papa a un periodista porque, dijo, quería denunciar corrupción.", cargo: "Ayudante de cámara del papa", hacia: "El periodista Gianluigi Nuzzi", fin: "Condenado a 18 meses e indultado por Benedicto XVI en 2012; murió en 2020.", who: "Tribunal vaticano", u: "https://en.wikipedia.org/wiki/Vatican_leaks_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { k: "denunciante", dir: "sale", ev: 1, d: "2015-11", n: "Lucio Vallejo Balda", h: "El monseñor de Vatileaks 2", x: "Un sacerdote de una comisión de reforma económica entregó documentos financieros a periodistas.", cargo: "Secretario de la Prefectura de Asuntos Económicos", hacia: "Los periodistas Nuzzi y Fittipaldi", fin: "Condenado a 18 meses en 2016; los periodistas fueron declarados fuera de la jurisdicción vaticana.", who: "Tribunal vaticano", u: "https://en.wikipedia.org/wiki/VatiLeaks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2007-01", n: "Stanisław Wielgus", h: "Un arzobispo que había colaborado con la policía secreta", x: "El recién nombrado arzobispo de Varsovia admitió haber colaborado con la policía política comunista polaca y renunció el día de su asunción.", cargo: "Arzobispo de Varsovia", hacia: "Servicio de Seguridad polaco (SB)", fin: "Renunció en enero de 2007.", who: "Archivos polacos y el propio Wielgus", u: "https://en.wikipedia.org/wiki/Stanis%C5%82aw_Wielgus", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "filtracion", rol: "blanco", ev: 1, d: "2012", h: "Vatileaks", x: "Se publican cartas y documentos del papa sobre corrupción y luchas internas.", obj: "Denunciar corrupción, según el filtrador.", who: "Tribunal vaticano", u: "https://en.wikipedia.org/wiki/Vatican_leaks_scandal", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "blanco", ev: 1, d: "2015", h: "Vatileaks 2", x: "Dos libros exponen despilfarro y mala gestión de fondos vaticanos.", obj: "Mostrar los problemas financieros.", who: "Tribunal vaticano", u: "https://en.wikipedia.org/wiki/VatiLeaks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "blanco", ev: 1, d: "2019-10", h: "El memorando de la Gendarmería", x: "Se filtra un aviso interno firmado por el comandante con fotos de empleados suspendidos en una investigación financiera.", obj: "Exponer a los investigados; costó la renuncia del comandante Giani.", who: "Santa Sede", u: "https://www.catholicnewsagency.com/news/42544/pope-francis-appoints-new-head-of-vatican-security", st: "Catholic News Agency" },
    { k: "robo", rol: "blanco", ev: 2, d: "2020-05", h: "Hackers chinos en la Santa Sede", x: "La empresa Recorded Future detectó una campaña de hackers vinculados a China contra el Vaticano antes de renovar el acuerdo con Pekín.", obj: "Conocer la posición vaticana en la negociación.", who: "Recorded Future; China lo negó", u: "https://www.cnnchile.com/mundo/informe-china-vaticano-hackers-iglesia/", st: "CNN Chile" },
    { k: "ocultamiento", rol: "autor", ev: 2, d: "1945–2020", h: "Los archivos de Pío XII", x: "Los documentos sobre el papel del Vaticano en la Segunda Guerra y la posguerra estuvieron cerrados hasta 2020.", aquien: "A historiadores y al público", como: "Francisco ordenó abrirlos en 2020.", obj: "Proteger la imagen de la Iglesia, según críticos.", who: "Historiadores", u: "https://en.wikipedia.org/wiki/Pope_Pius_XII_and_the_Holocaust", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 1, x: "En el caso Becciu se presentó una grabación hecha en secreto por el cardenal de una llamada con el papa Francisco; la Gendarmería investiga a empleados por filtraciones.", u: "https://www.agi.it/estero/news/2026-03-17/processo-becciu-annullato-procedimento-primo-grado-36152433/", st: "AGI" },
    politicos: { ev: 0, x: "Esta ficha no encontró casos documentados de espionaje vaticano a políticos." },
    periodistas: { ev: 0, x: "Esta ficha no encontró casos de espionaje a periodistas. El Vaticano sí juzgó en 2016 a dos periodistas por publicar documentos; el tribunal se declaró sin jurisdicción sobre ellos." },
    activistas: { ev: 0, x: "Esta ficha no encontró casos documentados de espionaje vaticano a activistas." },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados de espionaje vaticano a gobiernos aliados." },
    rivales: { ev: 0, x: "Esta ficha no encontró operaciones de espionaje vaticano contra otros Estados; las nunciaturas reúnen información por vías diplomáticas." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados de extorsión por parte del Vaticano." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 0, x: "No hay casos documentados. Las versiones sobre una \"Entidad\" que mata en nombre del papa no tienen pruebas." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados de sabotajes." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 1, "x": "La mediación papal evitó la guerra entre Argentina y Chile por el Beagle.", "u": "https://en.wikipedia.org/wiki/Papal_mediation_in_the_Beagle_conflict", "st": "Wikipedia: Papal mediation in the Beagle conflict"},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 0, x: "Esta ficha no encontró casos atribuidos a organismos vaticanos. Hubo capellanes militares condenados en otros países, como en Argentina." },
    secuestro: { ev: 0, x: "Esta ficha no encontró casos documentados de secuestros atribuidos al Vaticano." },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas; la comunicación vaticana es pública." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados. El Vaticano actúa sobre todo como mediador, como en el conflicto del Beagle." },
    cultural: { ev: 1, x: "La influencia religiosa y cultural es abierta, a través de iglesias, escuelas y universidades; en la Guerra Fría coordinó con EE.UU. el apoyo a la Iglesia en el bloque soviético.", u: "https://www.kenklippenstein.com/p/us-spies-on-the-vatican", st: "Ken Klippenstein" },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados de participación vaticana en derrocamientos." },
    elecciones: { ev: 1, x: "En la elección italiana de 1948 la Iglesia movilizó a sus organizaciones contra los comunistas, en paralelo al dinero que la CIA dio a la Democracia Cristiana.", u: "https://en.wikipedia.org/wiki/1948_Italian_general_election", st: "Wikipedia (síntesis de fuentes)" },
    partidos: { ev: 2, x: "Durante la Guerra Fría la Iglesia apoyó abiertamente a partidos democristianos, sobre todo en Italia.", u: "https://en.wikipedia.org/wiki/1948_Italian_general_election", st: "Wikipedia (síntesis de fuentes)" },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 2, x: "La Secretaría de Estado pagó 575.000 euros a la empresa de la consultora Cecilia Marogna para supuestas tareas de inteligencia en África; el juicio sigue en apelación.", u: "https://www.unionesarda.it/news/italia/caso-becciu-cecilia-marogna-torna-libera-con-obbligo-di-firma-dnx21xe2", st: "L'Unione Sarda" },
    religiosos: { ev: 1, x: "Clérigos en Roma ayudaron a criminales nazis a huir después de la guerra; los nuncios y obispos son la principal red de información.", u: "https://en.wikipedia.org/wiki/Ratlines_(World_War_II)", st: "Wikipedia (síntesis de fuentes)" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 2, x: "Según Klippenstein, el Vaticano coopera desde hace décadas con EE.UU. en diplomacia, seguridad y ciberseguridad.", u: "https://www.kenklippenstein.com/p/us-spies-on-the-vatican", st: "Ken Klippenstein" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "La Santa Sede publica estados financieros consolidados desde la reforma de Francisco, pero no hay una partida de inteligencia porque no existe un servicio. Los gastos de la Secretaría de Estado incluyeron fondos de uso reservado, como los del caso Marogna.",
    uso: "La red diplomática, la seguridad del papa y la Gendarmería se financian con el presupuesto general. Los pagos a consultores externos para gestiones en el exterior fueron objeto de juicio.",
    ingresos: "El Óbolo de San Pedro, las donaciones de los fieles, los museos y las inversiones financian a la Santa Sede. Parte del Óbolo se usó en la compra del edificio de Londres.",
    empresas: "Esta ficha no encontró empresas de fachada vaticanas. Sí hubo intermediarios financieros externos, como en la operación de Londres.",
    bancos: "El Instituto para las Obras de Religión (IOR), el banco vaticano, estuvo en el centro del escándalo del Banco Ambrosiano y de causas de lavado; desde 2010 lo supervisa la ASIF.",
    crimen: "En el caso Ambrosiano aparecieron vínculos con la logia P2 y la mafia, según la justicia italiana. Esta ficha no encontró uso deliberado del crimen organizado por la Santa Sede.",
    cobertura: "La red de órdenes religiosas, organizaciones católicas y caritativas es pública. Históricamente, instituciones católicas en Roma sirvieron a la fuga de criminales nazis."
  },
  fondos: [
    { k: "desvio", rol: "autor", ev: 2, d: "2018–2019", h: "Los pagos a Cecilia Marogna", x: "La Secretaría de Estado transfirió 575.000 euros a la empresa de una consultora para supuestas tareas de inteligencia en África, incluida la liberación de una monja secuestrada en Malí. Parte del dinero se gastó en bienes de lujo, según la acusación.", monto: "≈ € 575.000", obj: "Gestiones diplomáticas reservadas, según la defensa.", who: "Tribunal del Estado vaticano (2023), en revisión en apelación", u: "https://www.unionesarda.it/news/italia/caso-becciu-cecilia-marogna-torna-libera-con-obbligo-di-firma-dnx21xe2", st: "L'Unione Sarda" },
    { k: "desvio", rol: "autor", ev: 2, d: "2013–2019", h: "El edificio de Londres", x: "La Secretaría de Estado invirtió en un edificio de Sloane Avenue a través de intermediarios y perdió más de 100 millones de euros, según la fiscalía vaticana.", obj: "Inversión; terminó en el juicio Becciu.", who: "Tribunal del Estado vaticano", u: "https://www.agi.it/estero/news/2026-03-17/processo-becciu-annullato-procedimento-primo-grado-36152433/", st: "AGI" },
    { k: "banco", rol: "autor", ev: 2, d: "1982", h: "IOR y Banco Ambrosiano", x: "El banco vaticano estaba ligado a sociedades del Ambrosiano que quebró; en 1984 pagó unos 240 millones de dólares a los acreedores sin admitir responsabilidad.", monto: "≈ US$ 240 M", obj: "Cerrar el litigio.", who: "Acuerdo de 1984 y justicia italiana", u: "https://en.wikipedia.org/wiki/Banco_Ambrosiano", st: "Wikipedia (síntesis de fuentes)" },
    { k: "cobertura", rol: "autor", ev: 1, d: "1945–1951", h: "Las rutas de escape", x: "Instituciones religiosas en Roma, como el colegio Santa Maria dell'Anima del obispo Hudal, dieron refugio y documentos a criminales nazis en fuga.", obj: "Ayudar a la huida, según historiadores.", who: "Historiadores y archivos", u: "https://en.wikipedia.org/wiki/Ratlines_(World_War_II)", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Instituto para las Obras de Religión (IOR)", c: "nacional", rubro: "Banca", rel: "Propiedad de la Santa Sede", x: "El banco vaticano, supervisado por la ASIF desde 2010." },
    { n: "Banco Ambrosiano", c: "extranjera", rubro: "Banca", rel: "Escándalo histórico", x: "Banco italiano quebrado en 1982, ligado al IOR." },
    { n: "Empresa de Cecilia Marogna", c: "extranjera", rubro: "Consultoría", rel: "Proveedora de la Secretaría de Estado", x: "Recibió pagos por supuestas tareas de inteligencia, según el juicio Becciu." }
  ],
  struggles: [
    { a: "Secretaría de Estado", b: "Reformadores financieros", k: "Interna", stake: "Control del dinero", state: "Latente", x: "Las reformas de Francisco quitaron a la Secretaría de Estado el manejo de sus fondos tras el caso de Londres." },
    { a: "Cardenal Becciu", b: "Tribunal vaticano", k: "Con otros poderes", stake: "Su condena", state: "Abierta", x: "La apelación revisa el juicio por errores de procedimiento." },
    { a: "Santa Sede", b: "China", k: "Con otros Estados", stake: "Nombramiento de obispos", state: "Latente", x: "Un acuerdo provisional rige desde 2018, mientras el Vaticano denunció hackeos y presiones." },
    { a: "León XIV", b: "Gobierno de EE.UU.", k: "Con otros Estados", stake: "Política exterior y moral", state: "Abierta", x: "Trump criticó al papa en 2026 y se denunció un aumento del espionaje estadounidense." }
  ],
  proxies: [
    {"id": "ambrosiano", "s": "Banco Ambrosiano", "n": "Banco Ambrosiano e IOR", "k": "empresa", "d": "1970–1982", "rol": "doble", "hoy": false, "ev": 2, "x": "El banco del Vaticano estaba ligado al Ambrosiano, cuya quiebra destapó lazos con la P2 y la mafia; se lo acusó de financiar a Solidaridad en Polonia.", "who": "Justicia italiana; prensa", "u": "https://en.wikipedia.org/wiki/Banco_Ambrosiano", "st": "Wikipedia: Banco Ambrosiano"}
  ],
  doctrina: [{"h": "Diplomacia como inteligencia", "x": "La red de nuncios, obispos y órdenes religiosas informa a Roma sin un servicio formal."}, {"h": "Neutralidad y mediación", "x": "La Santa Sede ofrece canales discretos entre enemigos."}],
  politica: {"analisis": "La Secretaría de Estado concentra los informes de las nunciaturas.", "jefes": "Varios papas fueron antes diplomáticos, como Pío XII y Pablo VI."},
  cuentas: {"n": 2, "x": "Juicio del caso Becciu; el caso Ambrosiano no tuvo responsables internos."},
  sources: [
    { t: "Santa Sede: discurso de León XIV a los servicios italianos (diciembre de 2025)", u: "https://www.vatican.va/content/leo-xiv/en/speeches/2025/december/documents/20251212-intelligence-italiana.html" },
    { t: "Catholic World Report: el papa advierte sobre los servicios", u: "https://www.catholicworldreport.com/?p=399183" },
    { t: "GCatholic: Gendarmería vaticana", u: "https://gcatholic.org/dioceses/org/vaticancity-2c1" },
    { t: "Ken Klippenstein: EE.UU. espía al Vaticano (abril de 2026)", u: "https://www.kenklippenstein.com/p/us-spies-on-the-vatican" },
    { t: "InfoVaticana: la causa rusa y el Vaticano", u: "https://infovaticana.com/2026/07/10/una-investigacion-por-espionaje-ruso-en-italia-revela-una-supuesta-mision-relacionada-con-el-vaticano/" },
    { t: "AGI: anulación parcial del juicio Becciu", u: "https://www.agi.it/estero/news/2026-03-17/processo-becciu-annullato-procedimento-primo-grado-36152433/" },
    { t: "Quotidiano Nazionale: condena de Becciu y Marogna", u: "https://www.quotidiano.net/cronaca/becciu-condannato-news-bbb1bs7g" },
    { t: "CNN Chile: hackeo atribuido a China", u: "https://www.cnnchile.com/mundo/informe-china-vaticano-hackers-iglesia/" }
  ]
};
