// Ficha de Francia · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["fr"] = {
  id: "fr",
  updated: "2026-11-15",
  summary: [
    "Francia organiza su inteligencia en un primer círculo de seis servicios. Los principales son la Dirección General de Seguridad Exterior (DGSE), que espía fuera del país y concentra la interceptación técnica, y la Dirección General de Seguridad Interior (DGSI), a cargo del antiterrorismo y la contrainteligencia. Una coordinación nacional en el Elíseo los ordena.",
    "Nicolas Lerner dirige la DGSE desde enero de 2024, después de cinco años al frente de la DGSI; Céline Berthon encabeza la DGSI desde 2024 y es la primera mujer en el cargo. Ambos describen una amenaza simultánea de Rusia, Irán, China y del terrorismo islamista, con el Sahel como zona más sensible.",
    "El presupuesto crece con la ley de programación militar: la DGSE tiene previstos 4.600 millones de euros entre 2024 y 2030, un 53 % más que el período anterior. En julio de 2026 Francia atribuyó en público al Servicio Federal de Seguridad ruso (FSB) una campaña de ciberespionaje contra el país que lleva quince años.",
    "La historia pesa: el hundimiento del Rainbow Warrior en 1985, la desaparición de Mehdi Ben Barka en 1965 y la guerra de Argelia marcaron la imagen de los servicios. Desde 2015 existe una ley de inteligencia y una comisión que controla las técnicas de vigilancia."
  ],
  keyFacts: [
    { l: "Director de la DGSE", v: "Nicolas Lerner", n: "desde el 9 ene 2024" },
    { l: "Presupuesto de la DGSE", v: "€ 4.600 M", n: "previsto para 2024-2030 en la ley de programación militar, +53 %" },
    { l: "Directora de la DGSI", v: "Céline Berthon", n: "desde 2024, primera mujer en el cargo" },
    { l: "Ley marco", v: "Ley de inteligencia de 2015", n: "reformada en 2021 y 2024" }
  ],
  power: { humana: 4, senales: 4, ciber: 4, imagenes: 4, encubierta: 4, contra: 4 },
  powerWhy: {
    humana: "Red de la DGSE en África, Medio Oriente y Europa, con fuerte presencia histórica en el Sahel.",
    senales: "Sistema propio de interceptación con estaciones en Francia y en territorios de ultramar, por fuera de la alianza Cinco Ojos.",
    ciber: "La DGSE dirige el renseignement técnico y el país tiene un comando de ciberdefensa con capacidad ofensiva.",
    imagenes: "Satélites militares propios de observación (CSO) y cooperación espacial europea.",
    encubierta: "El Servicio de Acción de la DGSE hace operaciones encubiertas y rescates; se le atribuyen asesinatos selectivos en el Sahel.",
    contra: "La DGSI detiene redes rusas, chinas e iraníes, pero los atentados de 2015 mostraron fallas graves."
  },
  priorities: [
    { h: "Terrorismo yihadista", x: "Sahel, Siria y la zona afgano-paquistaní, según el director de la DGSE." },
    { h: "Rusia", x: "Espionaje, sabotaje, ciberataques y desinformación contra Francia y sus aliados." },
    { h: "África", x: "Pérdida de influencia en el Sahel y llegada de Rusia a Mali, Burkina Faso y Níger." },
    { h: "Injerencias extranjeras", x: "Influencia rusa, china, iraní, argelina y azerbaiyana en política, medios y territorios de ultramar." },
    { h: "Tecnología y economía", x: "Protección de la industria de defensa, aeronáutica y espacial." }
  ],
  focos: ["Sahel", "Rusia", "Medio Oriente", "Argelia y Marruecos", "Territorios de ultramar", "Ciberespacio"],
  bodies: {
    "CNRLT": { since: 2017, how: "Coordinación en el Elíseo que fija prioridades, reparte tareas entre servicios y asesora al presidente. Reúne la inteligencia y el antiterrorismo.", staff: "Unas pocas decenas de funcionarios.", budget: "Dentro de la Presidencia.", tech: ["Plan nacional de orientación de la inteligencia"], where: ["Palacio del Elíseo, París"] },
    "DGSE": { since: 1982, how: "Inteligencia exterior, interceptación técnica para todos los servicios y acción encubierta a través del Servicio de Acción. Depende del Ministerio de las Fuerzas Armadas.", staff: "Más de 7.000 agentes, según el propio servicio.", budget: "4.600 millones de euros previstos para 2024-2030.", tech: ["Interceptación de comunicaciones", "Servicio de Acción", "Inteligencia artificial y ciber"], where: ["Boulevard Mortier, París", "Estaciones de interceptación", "Sahel y Medio Oriente"] },
    "DGSI": { since: 2014, how: "Contrainteligencia, antiterrorismo, protección económica y lucha contra las injerencias. Tiene funciones de policía judicial y depende del Ministerio del Interior.", staff: "Más de 5.000 agentes, según cifras oficiales.", budget: "Dentro del Ministerio del Interior.", tech: ["Técnicas de inteligencia autorizadas por ley", "Algoritmos de detección"], where: ["Levallois-Perret", "Francia"] },
    "DRM": { since: 1992, how: "Inteligencia militar para las operaciones y la planificación de las fuerzas armadas, con imágenes satelitales y guerra electrónica. Su director fue removido en 2022 por no anticipar la invasión rusa de Ucrania.", staff: "Unas 2.000 personas, según estimaciones de prensa.", budget: "Dentro de Defensa.", tech: ["Satélites CSO", "Guerra electrónica"], where: ["Creil", "Teatros de operaciones"] },
    "DRSD": { since: 2016, how: "Contrainteligencia y seguridad dentro de las fuerzas armadas y de la industria de defensa.", staff: "Más de 1.500 personas, según estimaciones de prensa.", budget: "Dentro de Defensa.", tech: ["Habilitaciones de seguridad", "Protección de la industria"], where: ["Francia", "Bases en el exterior"] },
    "CNCTR": { since: 2015, how: "Autoridad administrativa independiente que revisa cada pedido de técnicas de vigilancia antes de que el primer ministro lo autorice. Puede llevar casos al Consejo de Estado.", staff: "Un colegio de magistrados y parlamentarios y un equipo técnico.", budget: "Propio.", tech: [], where: ["París"] }
  },
  civil: [
    "El presidente fija la política de inteligencia a través del Consejo de Defensa y la coordinación del Elíseo.",
    "El primer ministro autoriza cada técnica de vigilancia, previo dictamen de la CNCTR.",
    "La Delegación Parlamentaria de Inteligencia controla la política y el presupuesto, pero no las operaciones en curso."
  ],
  law: {
    domestic: [
      "La ley de inteligencia de 2015 enumera las técnicas permitidas, como escuchas, geolocalización y algoritmos sobre datos de conexión.",
      "Cada técnica requiere autorización del primer ministro y dictamen previo de la CNCTR, salvo urgencia.",
      "La ley de 2024 contra injerencias extranjeras amplió el uso de algoritmos y creó un registro de influencia."
    ],
    foreign: [
      "La vigilancia de comunicaciones internacionales tiene reglas más laxas que la doméstica.",
      "El Servicio de Acción de la DGSE opera bajo decisiones del presidente sin control judicial.",
      "Las misiones en el exterior están protegidas por el secreto de defensa nacional."
    ],
    oversight: [
      "Comisión Nacional de Control de las Técnicas de Inteligencia (CNCTR).",
      "Delegación Parlamentaria de Inteligencia (DPR).",
      "Formación especializada del Consejo de Estado para quejas de ciudadanos."
    ]
  },
  rights: [
    { d: "1991-07", dir: "recorta", area: "Comunicaciones", h: "Ley de escuchas", x: "Tras condenas del Tribunal Europeo de Derechos Humanos, las interceptaciones pasan a tener base legal y una comisión de control." },
    { d: "2006-01", dir: "amplia", area: "Privacidad", h: "Ley antiterrorista", x: "Los servicios acceden a datos de conexión de operadores y a registros de viajeros." },
    { d: "2007-10", dir: "recorta", area: "Transparencia", h: "Delegación Parlamentaria de Inteligencia", x: "Por primera vez diputados y senadores controlan a los servicios." },
    { d: "2015-07", dir: "amplia", area: "Comunicaciones", h: "Ley de inteligencia", x: "Legaliza algoritmos en las redes de los operadores, las llamadas cajas negras, y amplía las técnicas de vigilancia." },
    { d: "2015-07", dir: "recorta", area: "Debido proceso", h: "Nace la CNCTR", x: "La misma ley crea una comisión independiente que revisa cada pedido de vigilancia." },
    { d: "2015-11", dir: "amplia", area: "Debido proceso", h: "Estado de emergencia", x: "Tras los atentados de París, allanamientos y arrestos domiciliarios sin juez durante dos años." },
    { d: "2017-10", dir: "amplia", area: "Debido proceso", h: "Ley SILT", x: "Pasa al derecho común medidas del estado de emergencia, como el control administrativo de sospechosos." },
    { d: "2020-10", dir: "recorta", area: "Privacidad", h: "Fallo europeo sobre conservación de datos", x: "El Tribunal de Justicia de la UE limita la conservación general de datos de conexión, en un caso impulsado por La Quadrature du Net." },
    { d: "2021-07", dir: "amplia", area: "Comunicaciones", h: "Reforma de la ley de inteligencia", x: "Hace permanentes los algoritmos y los extiende a las direcciones web visitadas." },
    { d: "2024-07", dir: "amplia", area: "Privacidad", h: "Ley contra injerencias extranjeras", x: "Extiende los algoritmos a la detección de injerencias y crea un registro de representantes de intereses extranjeros." }
  ],
  events: [
    { d: "1965-10-29", lat: 48.85, lon: 2.33, c: "France", t: "encubierta", ev: 2, h: "La desaparición de Ben Barka", x: "El opositor marroquí Mehdi Ben Barka es secuestrado en París por policías franceses y nunca aparece; el caso involucró a agentes del SDECE.", u: "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1981-01-01", lat: 55.75, lon: 37.62, c: "Russia", t: "humana", ev: 1, h: "El caso Farewell", x: "La contrainteligencia francesa maneja en Moscú a un coronel de la KGB que entrega miles de documentos sobre espionaje tecnológico soviético.", u: "https://en.wikipedia.org/wiki/Vladimir_Vetrov", st: "Wikipedia (síntesis de fuentes)" },
    { d: "1985-07-10", lat: -37.4, lon: 175.2, c: "New Zealand", t: "sabotaje", ev: 1, h: "El Rainbow Warrior", x: "Agentes de la DGSE hunden con explosivos el barco de Greenpeace en Auckland y muere un fotógrafo. Francia lo reconoció semanas después.", u: "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2008-01-01", lat: 44.8, lon: 1.22, c: "France", t: "senales", ev: 2, h: "Las antenas de Domme", x: "Estaciones de la DGSE como la de Domme interceptan comunicaciones satelitales; la prensa francesa reveló en 2013 que se guardaban sin un marco legal claro.", u: "https://en.wikipedia.org/wiki/Frenchelon", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2013-01-12", lat: 1.8, lon: 44.5, c: "Somalia", t: "encubierta", ev: 1, h: "Rescate fallido en Bulo Marer", x: "El Servicio de Acción intenta liberar a un agente de la DGSE secuestrado por Al Shabab; mueren el rehén y dos comandos.", u: "https://en.wikipedia.org/wiki/Bulo_Marer_hostage_rescue_attempt", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2025-11-26", lat: 48.86, lon: 2.36, c: "France", t: "contra", ev: 2, h: "Red rusa desarticulada", x: "La DGSI detiene a cuatro personas por una presunta red de espionaje a favor de Rusia.", u: "https://www.aljazeera.com/news/2025/11/26/france-detains-four-amid-inquiry-into-suspected-russian-spy-network", st: "Al Jazeera" },
    { d: "2026-01-28", lat: 44.84, lon: -0.58, c: "France", t: "contra", ev: 2, h: "Espías chinos en Gironde", x: "Cuatro personas, dos de ellas chinas, son detenidas en Gironde y luego imputadas por espionaje para Pekín.", u: "https://www.sudradio.fr/societe/un-fleuron-francais-des-drones-militaires-vise-par-une-tentative-despionnage-au-profit-de-la-russie", st: "Sud Radio (AFP)" },
    { d: "2026-06-03", lat: 43.53, lon: 1.53, c: "France", t: "contra", ev: 2, h: "Un drone filmado para Rusia", x: "Un bielorruso es detenido mientras filmaba un prototipo de dron militar en la fábrica de Delair; según la DGSI, envió el video a Rusia.", u: "https://www.boursorama.com/actualite-economique/actualites/espionnage-un-bielorusse-arrete-en-train-de-filmer-un-prototype-de-drone-militaire-du-fleuron-francais-delair-b954d47d58d27cc3dd4c676bf1a6e648", st: "Boursorama (AFP)" }
  ],
  interest: {
    "Russia": 3, "Algeria": 3, "Mali": 3, "Syria": 3, "Niger": 2, "Burkina Faso": 2, "Chad": 2, "Libya": 2, "Iran": 2, "China": 2, "Ukraine": 2, "Lebanon": 2, "Morocco": 2,
    "Afghanistan": 2, "Pakistan": 2, "Central African Rep.": 2, "Azerbaijan": 2, "Belarus": 1, "Somalia": 1, "Djibouti": 1, "Senegal": 1, "United States of America": 1, "United Kingdom": 1, "Germany": 1, "Turkey": 1
  },
  timeline: [
    { era: "Orígenes", d: "1871", h: "Nace el Deuxième Bureau", x: "La inteligencia militar moderna francesa surge tras la derrota ante Prusia." },
    { era: "", d: "1894–1906", h: "El caso Dreyfus", x: "Un oficial judío es condenado con pruebas fabricadas por la inteligencia militar." },
    { era: "Guerra Fría", d: "1946", h: "El SDECE", x: "Se crea el servicio exterior, antecesor de la DGSE, con fuerte rol en Indochina y Argelia." },
    { era: "", d: "1965", h: "Ben Barka", x: "El escándalo lleva a pasar el SDECE al Ministerio de Defensa." },
    { era: "", d: "1982", h: "Nace la DGSE", x: "El SDECE se reorganiza tras la llegada de François Mitterrand." },
    { era: "", d: "1985", h: "Rainbow Warrior", x: "El hundimiento del barco de Greenpeace obliga a renunciar al ministro de Defensa." },
    { era: "Terrorismo", d: "2012–2015", h: "Merah, Charlie Hebdo y el Bataclan", x: "Una serie de atentados expone fallas y lleva a la ley de inteligencia de 2015." },
    { era: "", d: "2022", h: "Ucrania", x: "El jefe de inteligencia militar es removido por no anticipar la invasión rusa." },
    { era: "Actual", d: "2024–2026", h: "Rusia en el centro", x: "Lerner en la DGSE, ley contra injerencias, detenciones de espías y atribución pública al FSB.", now: true }
  ],
  cases: [
    { ev: 1, ilegal: true, d: "1985", h: "El hundimiento del Rainbow Warrior", x: "Agentes de la DGSE pusieron dos bombas en el barco de Greenpeace en Nueva Zelanda y murió el fotógrafo Fernando Pereira. El gobierno lo negó primero y luego lo admitió; dos agentes fueron condenados en Nueva Zelanda.", who: "Justicia neozelandesa y gobierno francés", missing: "", u: "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "1965", h: "La desaparición de Mehdi Ben Barka", x: "El opositor marroquí fue secuestrado en París por dos policías franceses con participación de un agente del SDECE y de los servicios marroquíes. Su cuerpo nunca apareció y el caso judicial sigue abierto.", who: "Justicia francesa (condenas de 1967) y familia de la víctima", missing: "Desclasificar todos los archivos y establecer el destino del cuerpo.", u: "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "1957", h: "Maurice Audin y la tortura en Argelia", x: "El matemático Maurice Audin murió detenido por militares franceses en Argel. En 2018 Emmanuel Macron reconoció que el Estado había instaurado un sistema que permitió la tortura.", who: "Presidencia de la República (2018)", missing: "", u: "https://en.wikipedia.org/wiki/Maurice_Audin", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2008–2015", h: "La interceptación masiva sin ley", x: "Le Monde reveló en 2013 que la DGSE recolectaba y guardaba en masa comunicaciones del país, sin un marco legal específico. La ley de 2015 dio base legal a buena parte de esas prácticas.", who: "Le Monde y organizaciones de derechos digitales", missing: "Un fallo judicial que declare ilegales las prácticas anteriores a 2015.", u: "https://en.wikipedia.org/wiki/Frenchelon", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: false, d: "2026", h: "El FSB y el ciberespionaje contra Francia", x: "El gobierno atribuyó en público a una unidad del FSB ruso una campaña de espionaje informático contra intereses estratégicos franceses desde 2010, y sancionó a sus responsables junto a otros países europeos.", who: "Ministerio de Europa y Asuntos Exteriores de Francia", missing: "", u: "https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/attribution-a-la-russie-d-activites-cyber-malveillantes-a-des-fins-d-espionnage-en-france", st: "Cancillería de Francia" },
    { ev: 4, ilegal: false, d: "2015", h: "Charlie Hebdo fue una falsa bandera", x: "Circula la versión de que el ataque a Charlie Hebdo fue organizado por servicios franceses o extranjeros para justificar guerras y leyes de vigilancia.", who: "Sitios conspirativos y algunas figuras públicas", missing: "Cualquier prueba de participación de un servicio.", debunk: "Nace de detalles del operativo, como un documento olvidado en el auto. Al Qaeda en la Península Arábiga reivindicó el ataque y un tribunal condenó en 2020 a catorce cómplices.", u: "https://en.wikipedia.org/wiki/Charlie_Hebdo_shooting", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    { k: "falla", d: "2012-03", ev: 1, w: 3, h: "Mohammed Merah", x: "Un joven mata a soldados y a chicos de una escuela judía en Toulouse y Montauban. La contrainteligencia lo había seguido y entrevistado meses antes.", why: "No está en duda: un informe de la inspección de la policía señaló errores de evaluación.", wx: "Informe oficial de 2012 y juicio a su hermano.", who: "Inspección General de la Policía Nacional", u: "https://en.wikipedia.org/wiki/Toulouse_and_Montauban_shootings", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2015-11-13", ev: 1, w: 3, h: "Los atentados de París", x: "Comandos del Estado Islámico matan a 130 personas. Varios atacantes estaban fichados y uno había vuelto de Siria sin que se lo detectara.", why: "No está en duda: una comisión de la Asamblea concluyó en 2016 que hubo fallas de coordinación entre servicios.", wx: "Informe parlamentario de 2016 y juicio de 2021-2022.", who: "Comisión de investigación de la Asamblea Nacional", u: "https://en.wikipedia.org/wiki/November_2015_Paris_attacks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2013-01-12", ev: 1, w: 3, h: "El rescate de Denis Allex", x: "La operación para liberar a un agente de la DGSE en Somalia fracasa: mueren el rehén y dos comandos.", why: "No está en duda; se discute si la información sobre el lugar estaba suficientemente confirmada.", wx: "Reconocimiento oficial del Ministerio de Defensa.", who: "Gobierno francés", u: "https://en.wikipedia.org/wiki/Bulo_Marer_hostage_rescue_attempt", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falla", d: "2022-02-24", ev: 1, w: 2, h: "La invasión de Ucrania", x: "La inteligencia militar francesa consideró poco probable una invasión total, a diferencia de EE.UU. y el Reino Unido. Su director fue removido en marzo.", why: "La remoción es un hecho; lo que se discute es si la falla fue solo de la DRM o también de la conducción política.", wx: "Declaraciones del jefe del Estado Mayor y prensa francesa.", who: "Jefatura del Estado Mayor de Francia", u: "https://en.wikipedia.org/wiki/%C3%89ric_Vidaud", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falsa", d: "1982-08", ev: 1, w: 3, h: "Los irlandeses de Vincennes", x: "Gendarmes de la célula antiterrorista del Elíseo detienen a tres irlandeses tras un atentado y colocan armas y explosivos para incriminarlos.", why: "No está en duda: la justicia condenó a los gendarmes por haber fabricado las pruebas.", wx: "Sentencias judiciales de los años noventa.", who: "Justicia francesa", u: "https://en.wikipedia.org/wiki/Irish_of_Vincennes_affair", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falsa", d: "1894", ev: 1, w: 3, h: "El caso Dreyfus", x: "La sección de estadística del ejército, su servicio de inteligencia, fabricó y ocultó pruebas para culpar de espionaje al capitán Alfred Dreyfus.", why: "No está en duda: Dreyfus fue rehabilitado en 1906 y el verdadero espía fue identificado.", wx: "Sentencia de rehabilitación y archivos.", who: "Corte de Casación (1906)", u: "https://en.wikipedia.org/wiki/Dreyfus_affair", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "La DGSE tiene puestos en embajadas, a veces declarados al país anfitrión como enlace. En África tuvo durante décadas una presencia muy cercana a gobiernos y ejércitos locales.",
    campo: "Oficiales de inteligencia manejan fuentes y el Servicio de Acción hace operaciones armadas, rescates y apoyo a fuerzas locales. En el Sahel trabajó junto a las fuerzas especiales.",
    oficina: "La DGSE concentra la interceptación técnica para todos los servicios y la reparte según las prioridades del Elíseo. El análisis se reparte entre París, Levallois-Perret y Creil.",
    reclutamiento: "Busca fuentes en el mundo árabe, África y Europa del Este. En 2026 abrió su reclutamiento a especialistas en inteligencia artificial y ciberseguridad.",
    tecnica: "Estaciones de interceptación propias, satélites militares, algoritmos sobre las redes de los operadores y un comando de ciberdefensa.",
    enlaces: "Coopera con EE.UU., el Reino Unido, Alemania y Marruecos, que su director describe como un socio esencial contra el terrorismo. Mantiene relaciones estrechas con la industria de defensa y de telecomunicaciones."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "1958", n: "Georges Pâques", h: "El alto funcionario que espiaba para Moscú", x: "Un funcionario francés con acceso a documentos de la OTAN pasa secretos a la Unión Soviética durante casi veinte años.", cargo: "Gobierno francés y OTAN", hacia: "KGB", fin: "Condenado a perpetua en 1964, indultado en 1970.", who: "Justicia francesa", u: "https://en.wikipedia.org/wiki/Georges_P%C3%A2ques", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "1964", n: "Bernard Boursicot", h: "El diplomático y la cantante de ópera", x: "Un empleado de la embajada en Pekín entrega documentos a China durante una relación con un cantante de ópera que se hacía pasar por mujer.", cargo: "Embajada de Francia en Pekín", hacia: "Inteligencia china", fin: "Condenado en 1986 a seis años, indultado en 1987.", who: "Justicia francesa", u: "https://en.wikipedia.org/wiki/Bernard_Boursicot", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "entra", ev: 1, d: "1981", n: "Vladimir Vetrov", h: "El caso Farewell", x: "Un coronel de la KGB entrega a la contrainteligencia francesa miles de documentos que revelan la red soviética de espionaje tecnológico en Occidente.", cargo: "KGB", hacia: "DST (contrainteligencia francesa)", fin: "Detenido por otro crimen y ejecutado en Moscú en 1985 tras descubrirse su trabajo.", who: "Gobierno francés y archivos", u: "https://en.wikipedia.org/wiki/Vladimir_Vetrov", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "sale", ev: 1, d: "2017", n: "Dos ex agentes de la DGSE", h: "Espías para China", x: "Dos ex oficiales de la DGSE son detenidos por pasar información a China mientras estaban en servicio o después.", cargo: "DGSE", hacia: "Inteligencia china", fin: "Condenados en 2020 a ocho y doce años de prisión.", who: "Justicia francesa", u: "https://origin01-en.protothema.gr/?p=217101", st: "Protothema (Intelnews)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1961-10-17", h: "La masacre del 17 de octubre", x: "La policía de París reprime una marcha de argelinos y mata a decenas de personas; la cifra oficial durante años fue de tres muertos.", aquien: "Al público y a la justicia", como: "Historiadores y la apertura parcial de archivos; Macron la llamó crimen imperdonable en 2021.", obj: "Ocultar la represión en plena guerra de Argelia.", who: "Historiadores y Presidencia de la República", u: "https://en.wikipedia.org/wiki/Paris_massacre_of_1961", st: "Wikipedia (síntesis de fuentes)" },
    { k: "ocultamiento", rol: "autor", ev: 1, d: "1985-08", h: "El informe Tricot", x: "Un primer informe oficial sobre el Rainbow Warrior exculpa a la DGSE y al gobierno, mientras la prensa revelaba la operación.", aquien: "Al público y al Parlamento", como: "Le Monde publicó la existencia de un tercer equipo; el ministro de Defensa renunció.", obj: "Proteger al gobierno.", who: "Prensa francesa y gobierno", u: "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", st: "Wikipedia (síntesis de fuentes)" },
    { k: "filtracion", rol: "blanco", ev: 2, d: "2017-05", h: "Macron Leaks", x: "A horas del balotaje se publican correos robados de la campaña de Emmanuel Macron mezclados con documentos falsos.", obj: "Dañar al candidato en el cierre de campaña.", who: "Acusación de EE.UU. de 2020 contra oficiales del GRU ruso", u: "https://en.wikipedia.org/wiki/2017_Macron_e-mail_leaks", st: "Wikipedia (síntesis de fuentes)" },
    { k: "desinfo", rol: "autor", ev: 1, d: "2020-12", h: "Cuentas falsas del ejército en África", x: "Meta elimina una red de cuentas falsas vinculada a personas del ejército francés que hacía propaganda en la República Centroafricana y Mali contra una red rusa.", obj: "Contrarrestar la influencia rusa en el Sahel.", who: "Meta (informe de diciembre de 2020)", u: "https://about.fb.com/news/2020/12/removing-coordinated-inauthentic-behavior-france-russia/", st: "Meta" },
    { k: "robo", rol: "blanco", ev: 2, d: "2021-07", h: "Pegasus y el teléfono de Macron", x: "La investigación periodística Pegasus Project reveló que números del presidente y de ministros figuraban como posibles objetivos de un cliente de NSO, señalado como Marruecos.", obj: "Espionaje sobre la cúpula del Estado francés.", who: "Forbidden Stories y Amnistía Internacional; Marruecos lo niega", u: "https://en.wikipedia.org/wiki/Pegasus_Project_(investigation)", st: "Wikipedia (síntesis de fuentes)" },
    { k: "robo", rol: "blanco", ev: 1, d: "2010–2026", h: "El FSB dentro de redes francesas", x: "Una unidad del FSB espió durante quince años redes del Estado y de empresas estratégicas francesas.", obj: "Espionaje político, militar y económico.", who: "Cancillería de Francia (13 de julio de 2026)", u: "https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/attribution-a-la-russie-d-activites-cyber-malveillantes-a-des-fins-d-espionnage-en-france", st: "Cancillería de Francia" },
    { k: "desinfo", rol: "blanco", ev: 2, d: "2025-08", h: "La falsa renuncia de la jefa de la DGSI", x: "Sitios de propaganda prorrusa difunden que Céline Berthon había renunciado.", obj: "Desacreditar a la contrainteligencia francesa.", who: "Euronews (verificación)", u: "https://www.euronews.com/my-europe/2025/09/11/claims-that-french-intelligence-chief-resigned-peddled-by-russian-propagandists", st: "Euronews" }
  ],
  practicas: {
    propios: {"ev": 0, "x": "Esta ficha no encontró casos documentados de espionaje de los servicios franceses a funcionarios del propio gobierno."},
    politicos: {"ev": 1, "x": "Squarcini fue condenado en 2024 por, entre otros hechos, hacer vigilar al activista y luego diputado François Ruffin para LVMH.", "u": "https://en.wikipedia.org/wiki/Bernard_Squarcini", "st": "Wikipedia (síntesis de fuentes)"},
    periodistas: {"ev": 1, "x": "En 2010 la contrainteligencia pidió registros telefónicos de un periodista de Le Monde para hallar su fuente en el caso Bettencourt; Squarcini fue multado por ello en 2014.", "u": "https://en.wikipedia.org/wiki/Bernard_Squarcini", "st": "Wikipedia (síntesis de fuentes)"},
    activistas: {"ev": 1, "x": "El hundimiento del Rainbow Warrior de Greenpeace en 1985 fue una operación de la DGSE.", "u": "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", "st": "Wikipedia (síntesis de fuentes)"},
    aliados: {"ev": 2, "x": "En los años noventa EE.UU. acusó a la inteligencia francesa de espionaje económico contra sus empresas; un ex jefe de la DGSE admitió en 1991 operaciones de ese tipo.", "u": "https://en.wikipedia.org/wiki/Industrial_espionage", "st": "Wikipedia (síntesis de fuentes)"},
    rivales: {"ev": 1, "x": "Rusia, Irán, China y los grupos yihadistas; en 2026 Francia atribuyó al FSB quince años de ciberespionaje.", "u": "https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/attribution-a-la-russie-d-activites-cyber-malveillantes-a-des-fins-d-espionnage-en-france", "st": "Cancillería de Francia"},
    extorsion: {"ev": 0, "x": "Esta ficha no encontró casos documentados de chantaje por parte de servicios franceses."},
    asesinato: {"ev": 2, "x": "Ex presidentes y periodistas describieron asesinatos selectivos de yihadistas en el Sahel; la DGSE no los confirma uno por uno.", "u": "https://en.wikipedia.org/wiki/Directorate-General_for_External_Security", "st": "Wikipedia (síntesis de fuentes)"},
    sabotaje: {"ev": 1, "x": "Agentes de la DGSE hundieron con explosivos el Rainbow Warrior en Nueva Zelanda en 1985.", "u": "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", "st": "Wikipedia (síntesis de fuentes)"},
    tortura: {"ev": 1, "x": "En 2018 el presidente Emmanuel Macron reconoció que el Estado instauró en Argelia un sistema que permitió la tortura.", "u": "https://en.wikipedia.org/wiki/Maurice_Audin", "st": "Wikipedia (síntesis de fuentes)"},
    secuestro: {"ev": 2, "x": "El opositor marroquí Mehdi Ben Barka fue secuestrado en París en 1965 con participación de policías franceses y de un agente del SDECE.", "u": "https://en.wikipedia.org/wiki/Mehdi_Ben_Barka", "st": "Wikipedia (síntesis de fuentes)"},
    armas: {"ev": 2, "x": "En el caso Angolagate, intermediarios ligados a la política francesa vendieron armas a Angola en los años noventa; algunos fueron condenados y otros absueltos en apelación.", "u": "https://en.wikipedia.org/wiki/Angolagate", "st": "Wikipedia (síntesis de fuentes)"},
    inteligencia: {"ev": 1, "x": "Coopera con EE.UU., el Reino Unido, Alemania y Marruecos contra el terrorismo, según el director de la DGSE.", "u": "https://fr.hespress.com/449718-449718.html", "st": "Hespress"},
    tecnologia: {"ev": 1, "x": "La empresa francesa Amesys vendió a la Libia de Gadafi un sistema de vigilancia de internet; sus directivos fueron imputados en 2021.", "u": "https://en.wikipedia.org/wiki/Amesys", "st": "Wikipedia (síntesis de fuentes)"},
    entrenamiento: {"ev": 1, "x": "Durante décadas formó y asesoró a servicios y guardias presidenciales en África, en el marco de la llamada Françafrique.", "u": "https://en.wikipedia.org/wiki/Fran%C3%A7afrique", "st": "Wikipedia (síntesis de fuentes)"}
  },
  dinero: {
    presupuesto: "La ley de programación militar prevé 4.600 millones de euros para la DGSE entre 2024 y 2030. Además existen fondos especiales, controlados por una comisión de verificación de magistrados y parlamentarios.",
    uso: "Personal, interceptación técnica, satélites y el Servicio de Acción. La DGSE triplicó en diez años sus empleos ligados a lo digital, según Next.",
    ingresos: "No tiene ingresos propios declarados. En la causa Elf, la petrolera estatal funcionó durante años como caja paralela de pagos políticos en Francia y en África.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas en los últimos años. En la causa Elf aparecieron pagos a dirigentes africanos y a intermediarios por fuera del presupuesto.",
    bancos: "La causa Elf mostró cuentas en Suiza y Liechtenstein para pagos ocultos. Esta ficha no encontró casos documentados de bancos usados directamente por la DGSE.",
    crimen: "El Servicio de Acción Cívica (SAC), una organización gaullista de seguridad disuelta en 1982, reclutaba a personas del hampa; tuvo vínculos con los servicios en los años sesenta y setenta.",
    cobertura: "En el Rainbow Warrior, los agentes viajaron con pasaportes suizos falsos como un matrimonio de turistas."
  },
  fondos: [
    {"k": "presupuesto", "rol": "autor", "ev": 1, "d": "2024–2030", "h": "El presupuesto de la DGSE", "x": "La ley de programación militar prevé 4.600 millones de euros para la DGSE en siete años, un 53 % más que el período anterior.", "monto": "€ 4.600 M (2024-2030)", "who": "Gobierno francés y Next", "u": "https://next.ink/237157/les-emplois-lies-au-numerique-ont-explose-de-79-a-la-dgse-en-10-ans/", "st": "Next"},
    {"k": "desvio", "rol": "autor", "ev": 1, "d": "1989–1993", "h": "La causa Elf", "x": "La petrolera estatal Elf financia en secreto a partidos, dirigentes africanos e intermediarios; en 2003 hubo decenas de condenas.", "obj": "Influencia política en Francia y África.", "who": "Justicia francesa (2003)", "u": "https://en.wikipedia.org/wiki/Elf_Aquitaine", "st": "Wikipedia (síntesis de fuentes)"},
    {"k": "crimen", "rol": "autor", "ev": 1, "d": "1960–1982", "h": "El Servicio de Acción Cívica", "x": "Organización gaullista que reclutaba matones y personas del hampa; fue disuelta tras la masacre de Auriol de 1981.", "who": "Comisión parlamentaria y gobierno francés (1982)", "u": "https://en.wikipedia.org/wiki/Service_d%27Action_Civique", "st": "Wikipedia (síntesis de fuentes)"},
    {"k": "cobertura", "rol": "autor", "ev": 1, "d": "1985", "h": "Falsos turistas suizos", "x": "Dos agentes de la DGSE detenidos en Nueva Zelanda viajaban como un matrimonio suizo con pasaportes falsos.", "who": "Justicia neozelandesa", "u": "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior", "st": "Wikipedia (síntesis de fuentes)"}
  ],
  companies: [
    { n: "Thales", c: "nacional", rubro: "Defensa y ciberseguridad", rel: "Contratista", x: "Provee sistemas de comunicaciones, cifrado y ciberseguridad a las fuerzas armadas y a los servicios." },
    { n: "Airbus Defence and Space", c: "nacional", rubro: "Espacio", rel: "Contratista", x: "Participa en los satélites militares de observación y comunicaciones." },
    { n: "Amesys (Nexa Technologies)", c: "nacional", rubro: "Vigilancia", rel: "Exportador investigado", x: "Vendió sistemas de vigilancia de internet a la Libia de Gadafi y a Egipto; sus directivos fueron imputados en 2021 por complicidad con torturas." },
    { n: "Orange", c: "nacional", rubro: "Telecomunicaciones", rel: "Cooperación con el Estado", x: "Documentos de Snowden publicados por Le Monde en 2014 describieron una cooperación estrecha con la DGSE." }
  ],
  struggles: [
    { a: "DGSE", b: "DGSI", k: "Entre agencias", stake: "Antiterrorismo y reparto de tareas", state: "Latente", x: "La rivalidad histórica bajó desde que Lerner pasó de una a otra, pero los atentados de 2015 mostraron problemas de coordinación." },
    { a: "Servicios", b: "Organizaciones de derechos digitales", k: "Con la sociedad civil", stake: "Alcance de la vigilancia", state: "Abierta", x: "La Quadrature du Net litiga contra la conservación de datos y los algoritmos ante tribunales franceses y europeos." },
    { a: "Ejecutivo", b: "Parlamento", k: "Con otros poderes", stake: "Control de los servicios", state: "Latente", x: "La delegación parlamentaria reclama más acceso a información operativa y presupuestaria." },
    { a: "Francia", b: "Rusia", k: "Con otros Estados", stake: "Influencia en África y guerra híbrida", state: "Abierta", x: "La salida francesa del Sahel y la llegada rusa llevaron la competencia a la desinformación y el espionaje." }
  ],
  sources: [
    { t: "DGSE: quiénes somos (Nicolas Lerner)", u: "https://www.dgse.gouv.fr/en/get-to-know-us/who-are-we" },
    { t: "Next: la DGSE y la ley de programación militar 2024-2030", u: "https://next.ink/237157/les-emplois-lies-au-numerique-ont-explose-de-79-a-la-dgse-en-10-ans/" },
    { t: "Asamblea Nacional: audiencia de la DGSI y la DRSD (junio de 2026)", u: "https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59046N072.html" },
    { t: "Hespress: el director de la DGSE sobre el Sahel y la cooperación con Marruecos", u: "https://fr.hespress.com/449718-449718.html" },
    { t: "Cancillería de Francia: atribución al FSB (julio de 2026)", u: "https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/attribution-a-la-russie-d-activites-cyber-malveillantes-a-des-fins-d-espionnage-en-france" },
    { t: "ANSSI: compromiso de entidades francesas por el FSB", u: "https://cyber.gouv.fr/actualites/ciblage-et-compromission-dentites-francaises-par-le-fsb/" },
    { t: "Boursorama (AFP): espionaje en la fábrica de drones Delair", u: "https://www.boursorama.com/actualite-economique/actualites/espionnage-un-bielorusse-arrete-en-train-de-filmer-un-prototype-de-drone-militaire-du-fleuron-francais-delair-b954d47d58d27cc3dd4c676bf1a6e648" },
    { t: "Al Jazeera: detenidos por una red rusa (noviembre de 2025)", u: "https://www.aljazeera.com/news/2025/11/26/france-detains-four-amid-inquiry-into-suspected-russian-spy-network" },
    { t: "Euronews: desinformación sobre la jefa de la DGSI", u: "https://www.euronews.com/my-europe/2025/09/11/claims-that-french-intelligence-chief-resigned-peddled-by-russian-propagandists" },
    { t: "Vie publique: la actualización de la ley de programación militar (2026)", u: "https://www.vie-publique.fr/eclairage/284741-budget-de-la-defense-les-etapes-pour-le-porter-5-du-pib" }
  ]
};
