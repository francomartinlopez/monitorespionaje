// Datos generales del monitor: fecha de corte, alertas, categorías y escalas.
// ESQUELETO: las alertas son de prueba y están marcadas con sample: true.
window.MONITOR_META = {
  updated: "2026-11-15",
  updatedLabel: "15 nov 2026 · 06:00 ART",
  next: "semanal, lunes 06:00 ART",
  edition: "Edición 0 · esqueleto",
  skeleton: true
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
