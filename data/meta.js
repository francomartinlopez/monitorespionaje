// Datos generales del monitor: fecha de corte, alertas, categorías y escalas.
// Las alertas son hechos reales de los últimos días, con fuente (u, st).
// Siempre 4, 8 o 12. Para completar se suman hechos de menor nivel o ya resueltos (nivel 0).
window.MONITOR_META = {
  updated: "2026-11-16",
  updatedLabel: "16 nov 2026 · 06:00 ART",
  next: "semanal, lunes 06:00 ART",
  edition: "Edición 1",
  skeleton: false
};

// Rubros operativos para medir el poder de cada país (1 a 5).
// Escala de poder: qué significa cada valor (vale para los seis rubros).
window.POWER_SCALE = {
  5: "Alcance global y sostenido: opera en casi cualquier país, con capacidades propias de primer nivel y resultados documentados.",
  4: "Alcance global o regional fuerte, con capacidades propias avanzadas pero con límites de escala o dependencia de aliados.",
  3: "Capacidad regional sólida, con operaciones documentadas fuera de sus fronteras en ese rubro.",
  2: "Capacidad sobre todo nacional o cercana, con operaciones externas puntuales.",
  1: "Capacidad mínima o sin evidencia pública de actividad relevante en ese rubro."
};
// Interés estratégico de un servicio sobre otro país (capa del mapa de operaciones).
window.INTEREST_SCALE = {
  3: "Alto: país señalado como amenaza o prioridad en documentos oficiales de estrategia, con operaciones documentadas o presencia sostenida.",
  2: "Medio: aliado clave, competidor regional o escenario de conflicto donde el servicio sigue de cerca lo que pasa.",
  1: "Bajo: interés puntual, por un tema concreto (terrorismo, narcotráfico, tecnología, diáspora)."
};

// Cómo operan: aspectos que cada ficha describe en "modus"
window.MODUS = [
  { k: "embajadas", n: "Embajadas y cobertura", x: "Oficiales con pasaporte diplomático, agregados y otras coberturas oficiales en el exterior." },
  { k: "campo", n: "Trabajo de campo", x: "Oficiales de caso, agentes sin cobertura oficial, fuentes y equipos operativos." },
  { k: "oficina", n: "Sede y análisis", x: "Analistas, técnicos y conducción en la sede; cómo llega la información a quien decide." },
  { k: "reclutamiento", n: "Reclutamiento", x: "A quién buscan como fuente y con qué incentivos." },
  { k: "tecnica", n: "Medios técnicos", x: "Interceptación, ciber, satélites y bases propias." },
  { k: "enlaces", n: "Enlaces y apoyos", x: "Servicios aliados, fuerzas armadas, policía, empresas e intermediarios." }
];

window.DINERO = [
  { k: "presupuesto", n: "Presupuesto y transparencia", x: "Cuánto les asigna el Estado, qué parte es pública y quién la controla." },
  { k: "uso", n: "En qué se gasta", x: "Personal, técnica, operaciones, pagos a fuentes y gastos reservados." },
  { k: "ingresos", n: "Otras fuentes de ingreso", x: "Ingresos propios, negocios, fondos de otros países o de actividades ilegales." },
  { k: "empresas", n: "Empresas propias y de fachada", x: "Compañías controladas por el servicio o usadas como cobertura." },
  { k: "bancos", n: "Bancos y circuitos financieros", x: "Cuentas, bancos amigos, paraísos fiscales y seguimiento del dinero ajeno." },
  { k: "crimen", n: "Relación con el crimen organizado", x: "Uso de mafias, contrabandistas o extremistas como fuentes, socios o instrumentos." },
  { k: "cobertura", n: "ONG y organizaciones de cobertura", x: "Fundaciones, asociaciones, medios y ONG usadas como pantalla o canal de fondos." }
];

// Qué hacen y a quién espían. ev 0 = sin casos documentados encontrados; 1 a 4 = escala de evidencia.
window.PRACTICAS = [
  { g: "A quién espían", k: "propios", n: "Funcionarios del propio gobierno", x: "Ministros, diplomáticos, militares y empleados del propio Estado." },
  { g: "A quién espían", k: "politicos", n: "Políticos y partidos", x: "Legisladores, candidatos y partidos, oficialistas u opositores." },
  { g: "A quién espían", k: "periodistas", n: "Periodistas", x: "Periodistas, medios y sus fuentes." },
  { g: "A quién espían", k: "activistas", n: "Activistas y ONG", x: "Movimientos sociales, defensores de derechos, sindicatos y ONG." },
  { g: "A quién espían", k: "aliados", n: "Gobiernos aliados", x: "Funcionarios, embajadas y organismos de países amigos." },
  { g: "A quién espían", k: "rivales", n: "Rivales y enemigos", x: "Gobiernos, fuerzas armadas y servicios adversarios." },
  { g: "A quién espían", k: "economico", n: "Empresas, tecnología y ciencia", x: "Espionaje económico, industrial y científico: secretos comerciales, patentes, programas de armas." },
  { g: "Qué métodos usan", k: "extorsion", n: "Extorsión y chantaje", x: "Presión con información comprometedora, amenazas a familiares, sobornos forzados." },
  { g: "Qué métodos usan", k: "vinculo", n: "Vínculo falso", x: "Acercarse a un blanco con una relación armada a propósito: seducción o pareja, amistad, falsos periodistas, académicos o reclutadores, o infiltración en un grupo haciéndose pasar por militante o fiel." },
  { g: "Qué métodos usan", k: "asesinato", n: "Asesinatos selectivos", x: "Muertes planificadas dentro o fuera del país." },
  { g: "Qué métodos usan", k: "sabotaje", n: "Sabotajes", x: "Daños a infraestructura, industria, redes, transporte o equipos militares, físicos o informáticos." },
  { g: "Qué métodos usan", k: "infraestructura", n: "Infraestructura civil como plataforma", x: "Puertos, antenas, cables, bases, empresas de tecnología o cadenas de suministro propias usadas para recolectar información u operar desde otro país." },
  { g: "Qué métodos usan", k: "tortura", n: "Tortura y malos tratos", x: "Propia o por complicidad con otros servicios." },
  { g: "Qué métodos usan", k: "secuestro", n: "Secuestros y detenciones secretas", x: "Capturas sin proceso, traslados clandestinos y cárceles secretas." },
  { g: "Qué métodos usan", k: "engano", n: "Engaño y agentes dobles", x: "Operaciones para hacerle creer algo falso a otro servicio: agentes dobles, organizaciones falsas, material alterado." },
  { g: "Qué métodos usan", k: "ilegales", n: "Ilegales y cobertura no oficial", x: "Agentes con identidad falsa, sin protección diplomática." },
  { g: "Qué métodos usan", k: "financiera", n: "Inteligencia financiera", x: "Rastreo de bancos y transferencias, y uso de sanciones como herramienta." },
  { g: "Cómo influyen en otras sociedades", k: "propaganda", n: "Propaganda y desinformación", x: "Mensajes, medios, cuentas falsas o noticias inventadas dirigidas a la población de otro país." },
  { g: "Cómo influyen en otras sociedades", k: "conflictos", n: "Fomentar divisiones y conflictos", x: "Avivar tensiones políticas, étnicas o religiosas, desestabilizar gobiernos o provocar choques." },
  { g: "Cómo influyen en otras sociedades", k: "cultural", n: "Influencia cultural, religiosa e ideológica", x: "Institutos, becas, revistas, fundaciones, centros de estudio, iglesias o movimientos culturales, religiosos, ideológicos y filosóficos financiados en secreto o usados para influir." },
  { g: "Cómo influyen en otras sociedades", k: "golpes", n: "Derrocar gobiernos", x: "Golpes de Estado, intentos de derrocamiento o desestabilización de un gobierno extranjero." },
  { g: "Cómo influyen en otras sociedades", k: "elecciones", n: "Intervención en elecciones", x: "Hackeos, filtraciones, desinformación, dinero o presión para torcer una elección, propia o ajena." },
  { g: "Cómo influyen en otras sociedades", k: "partidos", n: "Financiamiento de partidos y candidatos", x: "Dinero, apoyo o campañas a favor de partidos, candidatos o movimientos políticos de otro país." },
  { g: "Cómo influyen en otras sociedades", k: "mediacion", n: "Diplomacia secreta y mediación", x: "El servicio como canal paralelo: negociar con enemigos, mediar entre terceros, organizar canjes." },
  { g: "A quién usan como agentes", k: "diaspora", n: "Emigrantes y diáspora", x: "Ciudadanos propios o sus descendientes que viven en otro país, usados como fuentes, agentes o para vigilar a otros emigrantes." },
  { g: "A quién usan como agentes", k: "empresarios", n: "Empresarios y empresas", x: "Hombres de negocios, ejecutivos o compañías usados como fuentes, agentes o cobertura." },
  { g: "A quién usan como agentes", k: "religiosos", n: "Religiosos e instituciones religiosas", x: "Sacerdotes, misioneros, imanes o iglesias usados como fuentes, agentes, cobertura o canal de influencia." },
  { g: "A quién usan como agentes", k: "privados", n: "Contratistas y empresas privadas", x: "Empresas militares o de inteligencia privadas, contratistas y compra de datos comerciales." },
  { g: "Qué dan a otros", k: "armas", n: "Entrega o venta de armas", x: "Envíos encubiertos de armas o equipos militares." },
  { g: "Qué dan a otros", k: "inteligencia", n: "Asistencia de inteligencia", x: "Información compartida con otros países o fuerzas." },
  { g: "Qué dan a otros", k: "tecnologia", n: "Tecnología de vigilancia", x: "Equipos, software espía o cifrado entregados a otros." },
  { g: "Qué dan a otros", k: "entrenamiento", n: "Entrenamiento de servicios extranjeros", x: "Formación y creación de servicios de otros países." }
];
window.PRAC_NONE = { n: "Sin casos documentados", c: "#5b6f63" };

window.RUBROS = [
  { k: "humana", n: "Inteligencia humana", s: "HUMINT", x: "Agentes, informantes y redes de reclutamiento." },
  { k: "senales", n: "Señales y comunicaciones", s: "SIGINT", x: "Interceptación de comunicaciones y señales electrónicas." },
  { k: "ciber", n: "Ciberoperaciones", s: "CYBER", x: "Intrusión, sabotaje y defensa en redes." },
  { k: "imagenes", n: "Imágenes y satélites", s: "GEOINT", x: "Satélites, reconocimiento aéreo y análisis geoespacial." },
  { k: "encubierta", n: "Acción encubierta", s: "COVERT", x: "Operaciones clandestinas, paramilitares y de influencia." },
  { k: "contra", n: "Contrainteligencia", s: "CI", x: "Detectar y neutralizar el espionaje ajeno." }
];

// Tipos de hecho del mapa de operaciones.
window.EV_TYPES = {
  encubierta: { n: "Acción encubierta o letal", c: "#ff4d3d" },
  sabotaje:   { n: "Sabotaje", c: "#ff9433" },
  ciber:      { n: "Ciberespionaje o ciberataque", c: "#ffd23f" },
  senales:    { n: "Interceptación de señales", c: "#4fd1e8" },
  humana:     { n: "Reclutamiento o red de agentes", c: "#c9a7ff" },
  contra:     { n: "Captura de espías o expulsión", c: "#e6efe9" }
};

// Escala de evidencia para los casos controvertidos.
window.EVIDENCE = {
  1: { n: "Demostrado", c: "#6af59a", x: "Lo confirman documentos desclasificados, fallos judiciales, investigaciones oficiales o el propio organismo." },
  2: { n: "Con sustento sólido", c: "#ffd23f", x: "Sin confirmación oficial, pero con investigaciones serias, varias fuentes independientes, atribuciones de gobiernos o evidencia técnica." },
  3: { n: "Denuncia sin pruebas firmes", c: "#ff9433", x: "Tiene lógica o indicios circunstanciales, sin fuente importante ni evidencia directa. Se presenta como hipótesis." },
  4: { n: "Teoría conspirativa", c: "#ff4d3d", x: "Sin evidencia ni lógica que resista el análisis, o contradicha por la evidencia. Se explica de dónde salió y qué la desmiente." }
};

// Tipos de relación entre servicios.
window.REL_TYPES = {
  coop: { n: "Cooperación", c: "#6af59a" },
  amb:  { n: "Ambigua", c: "#ffd23f" },
  enf:  { n: "Enfrentamiento", c: "#ff4d3d" }
};

window.LV = { 0: "#6f7d76", 5: "#ff4d3d", 4: "#ff9433", 3: "#ffd23f", 2: "#6af59a", 1: "#4f8f6c" };
window.LV_LABEL = { 0: "Resuelto", 5: "Crítico", 4: "Alto", 3: "Elevado", 2: "Moderado", 1: "Bajo" };

window.ALERTS = [
  { level: 4, tag: "Contraespionaje", date: "2026-11-10", countries: ["Reino Unido", "EE.UU.", "Rusia"], target: "uk", title: "Detienen en Inglaterra a un oficial del ejército de EE.UU. por espiar para Rusia", text: "La policía antiterrorista británica detuvo cerca de Gloucester a un oficial de 41 años destinado en un cuartel de la OTAN. Lo acusan de ayudar a un servicio de inteligencia extranjero. La operación la hicieron el MI5 y el FBI, según autoridades de ambos países.", u: "https://www.washingtonpost.com/world/2026/11/10/us-army-officer-arrested-uk-suspicion-trying-steal-secrets-russia/", st: "The Washington Post" },
  { level: 4, tag: "Amenaza", date: "2026-11-09", countries: ["Irán", "Reino Unido", "EE.UU."], target: "ir", title: "EE.UU. retira aviones de una base británica por una amenaza atribuida a Irán", text: "La Fuerza Aérea de EE.UU. sacó aviones cisterna de RAF Mildenhall, según The Wall Street Journal, por una amenaza vinculada a Irán. Es el segundo caso en dos meses: en octubre retiró bombarderos de Fairford tras un presunto complot que el gobierno británico relacionó con Irán.", u: "https://www.al-monitor.com/originals/2026/11/britain-says-its-bases-are-safe-after-us-refuelling-planes-evacuated", st: "Reuters vía Al-Monitor" },
  { level: 4, tag: "Ciberrobo", date: "2026-10-31", countries: ["Corea del Norte"], target: "kp", title: "El FBI atribuye a Corea del Norte el robo de más de 6.000 millones de dólares a Binance", text: "El 29 de octubre hackers vaciaron billeteras de la plataforma Binance. El FBI y la empresa TRM Labs lo atribuyeron al grupo TraderTraitor, parte de Lazarus. Es el mayor robo de criptomonedas registrado.", u: "https://en.wikipedia.org/wiki/2026_Binance_hack", st: "Wikipedia (síntesis de fuentes)" },
  { level: 3, tag: "Ciberataque", date: "2026-11-02", countries: ["Rusia", "Ucrania"], target: "ua", title: "Hackean las apps de alertas aéreas de Ucrania y de Rusia", text: "La app ucraniana Alerta Aérea envió falsos avisos nucleares y químicos el 1 de noviembre; Kiev culpó a Rusia. Horas después falló la app de emergencias rusa, y Volodímir Zelenski confirmó que fue una respuesta ucraniana.", u: "https://kyivindependent.com/zelensky-confirms-ukraine-targeted-russian-emergency-alert-systems-in-retaliatory-hack/", st: "The Kyiv Independent" },
  { level: 2, tag: "Contraespionaje", date: "2026-11-15", countries: ["Israel", "Irán"], target: "ir", title: "Israel acusa a otro ciudadano de espiar para Irán", text: "La fiscalía de Haifa acusó a un árabe israelí de fotografiar bases militares para la inteligencia iraní, tras una investigación del Shin Bet iniciada en octubre. Es uno más de una serie de casos desde la guerra de 2025.", u: "https://nxnoticias.com/acusan-israeli-espionaje-inteligencia-iran/", st: "NX Noticias" },
  { level: 2, tag: "Contrainteligencia", date: "2026-11-04", countries: ["Canadá", "Ucrania"], target: "ca", title: "Un agente de contrainteligencia canadiense, acusado de pasar datos a Ucrania", text: "Un miembro de la contrainteligencia militar de Canadá fue acusado de entregar información operativa a Ucrania; irá a corte marcial en diciembre.", u: "https://kyivindependent.com/us-service-member-accused-of-attempting-to-spy-for-russia-identified-media-reports/", st: "The Kyiv Independent" },
  { level: 3, tag: "Represalia", date: "2026-11-11", countries: ["Irán", "Argentina"], target: "ar", title: "Irán declara terroristas a la Armada y la Fuerza Aérea argentinas", text: "La cancillería iraní aplicó una ley de reciprocidad de 2019, en respuesta a la decisión argentina de marzo de declarar terrorista a la Guardia Revolucionaria. Argentina ya había expulsado a un diplomático iraní.", u: "https://www.emol.com/noticias/Internacional/2026/11/11/1216723/iran-argentina-terroristas.html", st: "Emol (AFP)" },
  { level: 3, tag: "Vínculo falso", date: "2026-11-08", countries: ["China", "EE.UU."], target: "cn", title: "Nvidia investiga si su CEO fue blanco de una operación china", text: "Según The New York Times, Alice Huang, ejecutiva de un gran cliente de Nvidia en Singapur con quien Jensen Huang admitió una relación, habría sido reclutada por el MSS. El directorio abrió una investigación; China lo niega y no hay acusación judicial.", u: "https://noticias.perfil.com/noticias/internacionales/sexo-chips-y-espionaje-el-talon-de-aquiles-de-nvidia.phtml", st: "Perfil" },
];

// Organizaciones proxy (campo proxies de cada ficha)
window.PROXY_TIPOS = {
  armado: { n: "Grupo armado", c: "#ff5a5f" },
  terrorista: { n: "Organización terrorista", c: "#d0342c" },
  crimen: { n: "Crimen organizado", c: "#f5b83d" },
  empresa: { n: "Empresa", c: "#4fa3ff" },
  ong: { n: "ONG o fundación", c: "#9a8cff" },
  institucion: { n: "Institución o medio", c: "#7fd1c7" },
  academia: { n: "Academia, laboratorio o centro de estudios", c: "#c8b6ff" }
};
window.PROXY_ROLES = {
  patrocina: { n: "Lo financia o arma", c: "#ff5a5f" },
  usa: { n: "Lo usa o lo creó", c: "#4fa3ff" },
  doble: { n: "Doble juego o cambio de bando", c: "#c084fc" }
};

// Rendición de cuentas (campo cuentas de cada ficha)
window.CUENTAS = { 1: { n: "Sin consecuencias", c: "#ff5a5f" }, 2: { n: "Parcial", c: "#f5b83d" }, 3: { n: "Con condenas o reformas", c: "#6af59a" } };
