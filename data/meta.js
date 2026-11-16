// Datos generales del monitor: fecha de corte, alertas, categorías y escalas.
// ESQUELETO: las alertas son de prueba y están marcadas con sample: true.
window.MONITOR_META = {
  updated: "2026-11-15",
  updatedLabel: "15 nov 2026 · 06:00 ART",
  next: "semanal, lunes 06:00 ART",
  edition: "Edición 0 · esqueleto",
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
  { g: "Qué métodos usan", k: "extorsion", n: "Extorsión y chantaje", x: "Presión con información comprometedora, amenazas a familiares, sobornos forzados." },
  { g: "Qué métodos usan", k: "asesinato", n: "Asesinatos selectivos", x: "Muertes planificadas dentro o fuera del país." },
  { g: "Qué métodos usan", k: "sabotaje", n: "Sabotajes", x: "Daños a infraestructura, industria, redes, transporte o equipos militares, físicos o informáticos." },
  { g: "Qué métodos usan", k: "tortura", n: "Tortura y malos tratos", x: "Propia o por complicidad con otros servicios." },
  { g: "Qué métodos usan", k: "secuestro", n: "Secuestros y detenciones secretas", x: "Capturas sin proceso, traslados clandestinos y cárceles secretas." },
  { g: "Cómo influyen en otras sociedades", k: "propaganda", n: "Propaganda y desinformación", x: "Mensajes, medios, cuentas falsas o noticias inventadas dirigidas a la población de otro país." },
  { g: "Cómo influyen en otras sociedades", k: "conflictos", n: "Fomentar divisiones y conflictos", x: "Avivar tensiones políticas, étnicas o religiosas, desestabilizar gobiernos o provocar choques." },
  { g: "Cómo influyen en otras sociedades", k: "cultural", n: "Influencia cultural, religiosa e ideológica", x: "Institutos, becas, revistas, fundaciones, centros de estudio, iglesias o movimientos culturales, religiosos, ideológicos y filosóficos financiados en secreto o usados para influir." },
  { g: "Cómo influyen en otras sociedades", k: "golpes", n: "Derrocar gobiernos", x: "Golpes de Estado, intentos de derrocamiento o desestabilización de un gobierno extranjero." },
  { g: "Cómo influyen en otras sociedades", k: "elecciones", n: "Intervención en elecciones", x: "Hackeos, filtraciones, desinformación, dinero o presión para torcer una elección, propia o ajena." },
  { g: "Cómo influyen en otras sociedades", k: "partidos", n: "Financiamiento de partidos y candidatos", x: "Dinero, apoyo o campañas a favor de partidos, candidatos o movimientos políticos de otro país." },
  { g: "A quién usan como agentes", k: "diaspora", n: "Emigrantes y diáspora", x: "Ciudadanos propios o sus descendientes que viven en otro país, usados como fuentes, agentes o para vigilar a otros emigrantes." },
  { g: "A quién usan como agentes", k: "empresarios", n: "Empresarios y empresas", x: "Hombres de negocios, ejecutivos o compañías usados como fuentes, agentes o cobertura." },
  { g: "A quién usan como agentes", k: "religiosos", n: "Religiosos e instituciones religiosas", x: "Sacerdotes, misioneros, imanes o iglesias usados como fuentes, agentes, cobertura o canal de influencia." },
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

window.LV = { 5: "#ff4d3d", 4: "#ff9433", 3: "#ffd23f", 2: "#6af59a", 1: "#4f8f6c" };
window.LV_LABEL = { 5: "Crítico", 4: "Alto", 3: "Elevado", 2: "Moderado", 1: "Bajo" };

window.ALERTS = [
  { sample: true, level: 5, tag: "Acción letal", date: "2026-11-12", countries: ["Rusia"], target: "ua", title: "Alerta de prueba: título de una operación grave", text: "Texto de prueba. Acá van tres a cinco frases propias sobre una operación atribuida, quién la atribuye y por qué importa." },
  { sample: true, level: 4, tag: "Sabotaje", date: "2026-11-10", countries: ["Irán", "Israel"], target: "ir", title: "Alerta de prueba: sabotaje contra infraestructura", text: "Texto de prueba. Qué pasó, dónde y qué servicios aparecen involucrados según las fuentes." },
  { sample: true, level: 3, tag: "Ciberespionaje", date: "2026-11-08", countries: ["China", "EE.UU."], target: "cn", title: "Alerta de prueba: intrusión atribuida en redes de gobierno", text: "Texto de prueba. Quién detectó la intrusión, a quién se atribuye y con qué evidencia." },
  { sample: true, level: 2, tag: "Expulsión", date: "2026-11-06", countries: ["Alemania", "Rusia"], target: "de", title: "Alerta de prueba: expulsión de diplomáticos", text: "Texto de prueba. Cuántos, por qué y qué respuesta hubo." }
];
