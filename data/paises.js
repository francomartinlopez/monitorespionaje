// Los 20 países del monitor. Los organismos son reales; el resto del contenido de cada
// ficha está en data/paises/<id>.js.
// g: grupo del organigrama → k coordinación · c inteligencia civil · m militar · p policial y seguridad · j control y justicia
// tier: 1 núcleo · 2 muy relevante · 3 relevante en su región o por una habilidad
window.PAISES = [
  { id: "us", name: "Estados Unidos", short: "EE.UU.", map: "United States of America", tier: 1, center: [-77.04, 38.9], alliance: "Cinco Ojos (con Reino Unido, Canadá, Australia y Nueva Zelanda)",
    agencies: [
      { code: "ODNI", name: "Oficina del Director de Inteligencia Nacional", g: "k" },
      { code: "CIA", name: "Agencia Central de Inteligencia", g: "c" },
      { code: "NSA", name: "Agencia de Seguridad Nacional", g: "m" },
      { code: "DIA", name: "Agencia de Inteligencia de Defensa", g: "m" },
      { code: "NGA", name: "Agencia Nacional de Inteligencia Geoespacial", g: "m" },
      { code: "NRO", name: "Oficina Nacional de Reconocimiento", g: "m" },
      { code: "G-2", name: "Inteligencia del Ejército", g: "m" },
      { code: "ONI", name: "Oficina de Inteligencia Naval", g: "m" },
      { code: "AF ISR", name: "Inteligencia de la Fuerza Aérea", g: "m" },
      { code: "MCIA", name: "Inteligencia del Cuerpo de Marines", g: "m" },
      { code: "NSIC", name: "Inteligencia de la Fuerza Espacial", g: "m" },
      { code: "FBI", name: "Buró Federal de Investigaciones", g: "p" },
      { code: "DEA", name: "Inteligencia de la Administración de Control de Drogas", g: "p" },
      { code: "I&A", name: "Inteligencia del Departamento de Seguridad Nacional", g: "p" },
      { code: "CGI", name: "Inteligencia de la Guardia Costera", g: "p" },
      { code: "INR", name: "Oficina de Inteligencia e Investigación del Departamento de Estado", g: "c" },
      { code: "OIA", name: "Oficina de Inteligencia del Tesoro", g: "c" },
      { code: "DOE-IN", name: "Inteligencia del Departamento de Energía", g: "c" },
      { code: "FISC", name: "Tribunal de Vigilancia de Inteligencia Extranjera", g: "j" },
      { code: "SSCI · HPSCI", name: "Comisiones de inteligencia del Senado y la Cámara", g: "j" },
      { code: "PCLOB", name: "Junta de Supervisión de Privacidad y Libertades Civiles", g: "j" }
    ] },
  { id: "ru", name: "Rusia", short: "Rusia", map: "Russia", tier: 1, center: [37.62, 55.75],
    agencies: [
      { code: "CSN", name: "Consejo de Seguridad de la Federación", g: "k" },
      { code: "SVR", name: "Servicio de Inteligencia Exterior", g: "c" },
      { code: "FSB", name: "Servicio Federal de Seguridad", g: "p" },
      { code: "GRU", name: "Dirección Principal del Estado Mayor", g: "m" },
      { code: "FSO", name: "Servicio Federal de Protección", g: "p" },
      { code: "Rosgvardia", name: "Guardia Nacional", g: "p" },
      { code: "Duma", name: "Comisión de seguridad de la Duma", g: "j" }
    ] },
  { id: "cn", name: "China", short: "China", map: "China", tier: 1, center: [116.4, 39.9],
    agencies: [
      { code: "CCSN", name: "Comisión Central de Seguridad Nacional del Partido", g: "k" },
      { code: "MSS", name: "Ministerio de Seguridad del Estado", g: "c" },
      { code: "JSD-IB", name: "Oficina de Inteligencia del Estado Mayor Conjunto", g: "m" },
      { code: "FCE", name: "Fuerza del Ciberespacio del EPL", g: "m" },
      { code: "FAI", name: "Fuerza de Apoyo a la Información del EPL", g: "m" },
      { code: "FAM", name: "Fuerza Aeroespacial Militar del EPL", g: "m" },
      { code: "MPS", name: "Ministerio de Seguridad Pública", g: "p" },
      { code: "UFWD", name: "Departamento de Trabajo del Frente Unido", g: "c" },
      { code: "CCDI", name: "Comisión Central de Control Disciplinario", g: "j" }
    ] },
  { id: "uk", name: "Reino Unido", short: "Reino Unido", map: "United Kingdom", tier: 1, center: [-0.12, 51.5], alliance: "Cinco Ojos",
    agencies: [
      { code: "JIC", name: "Comité Conjunto de Inteligencia", g: "k" },
      { code: "MI6", name: "Servicio Secreto de Inteligencia (SIS)", g: "c" },
      { code: "MI5", name: "Servicio de Seguridad", g: "p" },
      { code: "GCHQ", name: "Cuartel General de Comunicaciones del Gobierno", g: "c" },
      { code: "DI", name: "Inteligencia de Defensa", g: "m" },
      { code: "ISC", name: "Comité de Inteligencia y Seguridad del Parlamento", g: "j" },
      { code: "IPT", name: "Tribunal de Poderes de Investigación", g: "j" }
    ] },
  { id: "il", name: "Israel", short: "Israel", map: "Israel", tier: 1, center: [34.78, 32.08],
    agencies: [
      { code: "CSN", name: "Consejo de Seguridad Nacional", g: "k" },
      { code: "Mossad", name: "Instituto de Inteligencia y Operaciones Especiales", g: "c" },
      { code: "Shin Bet", name: "Servicio de Seguridad General", g: "p" },
      { code: "Aman", name: "Dirección de Inteligencia Militar", g: "m" },
      { code: "8200", name: "Unidad 8200 (señales)", g: "m" },
      { code: "Knéset", name: "Subcomisión de servicios secretos", g: "j" }
    ] },
  { id: "fr", name: "Francia", short: "Francia", map: "France", tier: 1, center: [2.35, 48.86],
    agencies: [
      { code: "CNRLT", name: "Coordinación Nacional de Inteligencia y Lucha Antiterrorista", g: "k" },
      { code: "DGSE", name: "Dirección General de Seguridad Exterior", g: "c" },
      { code: "DGSI", name: "Dirección General de Seguridad Interior", g: "p" },
      { code: "DRM", name: "Dirección de Inteligencia Militar", g: "m" },
      { code: "DRSD", name: "Dirección de Inteligencia y Seguridad de la Defensa", g: "m" },
      { code: "CNCTR", name: "Comisión Nacional de Control de las Técnicas de Inteligencia", g: "j" }
    ] },
  { id: "de", name: "Alemania", short: "Alemania", map: "Germany", tier: 1, center: [13.4, 52.52],
    agencies: [
      { code: "BKAmt", name: "Coordinación de inteligencia de la Cancillería", g: "k" },
      { code: "BND", name: "Servicio Federal de Inteligencia", g: "c" },
      { code: "BfV", name: "Oficina Federal de Protección de la Constitución", g: "p" },
      { code: "MAD", name: "Servicio de Contrainteligencia Militar", g: "m" },
      { code: "PKGr", name: "Comité de Control Parlamentario", g: "j" }
    ] },
  { id: "ir", name: "Irán", short: "Irán", map: "Iran", tier: 1, center: [51.39, 35.69],
    agencies: [
      { code: "CSSN", name: "Consejo Supremo de Seguridad Nacional", g: "k" },
      { code: "MOIS", name: "Ministerio de Inteligencia", g: "c" },
      { code: "IO-CGRI", name: "Organización de Inteligencia de la Guardia Revolucionaria", g: "m" },
      { code: "Quds", name: "Fuerza Quds", g: "m" },
      { code: "FARAJA", name: "Policía y su inteligencia", g: "p" }
    ] },
  { id: "kp", name: "Corea del Norte", short: "Corea del Norte", map: "North Korea", tier: 1, center: [125.75, 39.03],
    agencies: [
      { code: "CAE", name: "Comisión de Asuntos Estatales", g: "k" },
      { code: "RGB", name: "Oficina General de Reconocimiento", g: "m" },
      { code: "MSE", name: "Ministerio de Seguridad del Estado", g: "p" },
      { code: "MSS", name: "Ministerio de Seguridad Social", g: "p" },
      { code: "Lazarus", name: "Grupo Lazarus (ciber, bajo la RGB)", g: "m" }
    ] },
  { id: "ar", name: "Argentina", short: "Argentina", map: "Argentina", tier: 1, center: [-58.38, -34.6],
    agencies: [
      { code: "SIDE", name: "Secretaría de Inteligencia de Estado", g: "k" },
      { code: "SIA", name: "Servicio de Inteligencia Argentino", g: "c" },
      { code: "ANC", name: "Agencia Nacional de Contrainteligencia (ex Agencia de Seguridad Nacional)", g: "p" },
      { code: "AFC", name: "Agencia Federal de Ciberinteligencia", g: "c" },
      { code: "DNIEM", name: "Dirección Nacional de Inteligencia Estratégica Militar", g: "m" },
      { code: "DNIC", name: "Dirección Nacional de Inteligencia Criminal", g: "p" },
      { code: "IGI", name: "Inspectoría General de Inteligencia", g: "j" },
      { code: "CBI", name: "Comisión Bicameral de Fiscalización de los Organismos y Actividades de Inteligencia", g: "j" }
    ] },
  { id: "va", name: "Vaticano", short: "Vaticano", map: "Vatican", tier: 1, center: [12.45, 41.9],
    note: "No tiene un servicio de inteligencia formal. Su capacidad de información descansa en la red diplomática y en la seguridad interna.",
    agencies: [
      { code: "SdE", name: "Secretaría de Estado", g: "k" },
      { code: "Nunciaturas", name: "Red de nunciaturas apostólicas", g: "c" },
      { code: "Gendarmería", name: "Cuerpo de la Gendarmería", g: "p" },
      { code: "Guardia Suiza", name: "Guardia Suiza Pontificia", g: "m" },
      { code: "ASIF", name: "Autoridad de Supervisión e Información Financiera", g: "j" }
    ] },
  { id: "ua", name: "Ucrania", short: "Ucrania", map: "Ukraine", tier: 2, center: [30.52, 50.45],
    agencies: [
      { code: "CNSD", name: "Consejo Nacional de Seguridad y Defensa", g: "k" },
      { code: "SZRU", name: "Servicio de Inteligencia Exterior", g: "c" },
      { code: "SBU", name: "Servicio de Seguridad", g: "p" },
      { code: "GUR", name: "Dirección Principal de Inteligencia del Ministerio de Defensa", g: "m" },
      { code: "Rada", name: "Comisión de seguridad nacional de la Rada", g: "j" }
    ] },
  { id: "tr", name: "Turquía", short: "Turquía", map: "Turkey", tier: 2, center: [32.86, 39.93],
    agencies: [
      { code: "MGK", name: "Consejo de Seguridad Nacional", g: "k" },
      { code: "MİT", name: "Organización Nacional de Inteligencia", g: "c" },
      { code: "Gendarmería", name: "Inteligencia de la Gendarmería", g: "p" },
      { code: "EGM", name: "Inteligencia de la Policía", g: "p" },
      { code: "Estado Mayor", name: "Inteligencia del Estado Mayor", g: "m" }
    ] },
  { id: "pk", name: "Pakistán", short: "Pakistán", map: "Pakistan", tier: 2, center: [73.06, 33.68],
    agencies: [
      { code: "NSD", name: "División de Seguridad Nacional", g: "k" },
      { code: "ISI", name: "Inteligencia Interservicios", g: "m" },
      { code: "IB", name: "Oficina de Inteligencia", g: "p" },
      { code: "MI", name: "Inteligencia Militar", g: "m" },
      { code: "FIA", name: "Agencia Federal de Investigaciones", g: "p" }
    ] },
  { id: "in", name: "India", short: "India", map: "India", tier: 2, center: [77.21, 28.61],
    agencies: [
      { code: "NSCS", name: "Secretaría del Consejo de Seguridad Nacional", g: "k" },
      { code: "R&AW", name: "Ala de Investigación y Análisis", g: "c" },
      { code: "IB", name: "Oficina de Inteligencia", g: "p" },
      { code: "NTRO", name: "Organización Nacional de Investigación Técnica", g: "c" },
      { code: "DIA", name: "Agencia de Inteligencia de Defensa", g: "m" },
      { code: "NIA", name: "Agencia Nacional de Investigación", g: "p" }
    ] },
  { id: "sa", name: "Arabia Saudita", short: "Arabia Saudita", map: "Saudi Arabia", tier: 2, center: [46.72, 24.71],
    agencies: [
      { code: "CPSA", name: "Consejo de Asuntos Políticos y de Seguridad", g: "k" },
      { code: "GIP", name: "Presidencia General de Inteligencia", g: "c" },
      { code: "PSS", name: "Presidencia de Seguridad del Estado", g: "p" },
      { code: "Defensa", name: "Inteligencia militar", g: "m" }
    ] },
  { id: "cu", name: "Cuba", short: "Cuba", map: "Cuba", tier: 3, center: [-82.37, 23.11], skill: "Penetración de la inteligencia de EE.UU.",
    agencies: [
      { code: "MININT", name: "Ministerio del Interior", g: "k" },
      { code: "DI", name: "Dirección de Inteligencia", g: "c" },
      { code: "DGCI", name: "Dirección General de Contrainteligencia", g: "p" },
      { code: "CIM", name: "Contrainteligencia Militar", g: "m" }
    ] },
  { id: "ae", name: "Emiratos Árabes Unidos", short: "Emiratos", map: "United Arab Emirates", tier: 3, center: [54.37, 24.45], skill: "Espionaje digital y contratación de ex agentes extranjeros",
    agencies: [
      { code: "CSN", name: "Consejo Supremo de Seguridad Nacional", g: "k" },
      { code: "SSD", name: "Departamento de Seguridad del Estado", g: "p" },
      { code: "SIA", name: "Agencia de Inteligencia de Señales", g: "c" },
      { code: "Defensa", name: "Inteligencia militar", g: "m" }
    ] },
  { id: "br", name: "Brasil", short: "Brasil", map: "Brazil", tier: 3, center: [-47.88, -15.79],
    agencies: [
      { code: "GSI", name: "Gabinete de Seguridad Institucional", g: "k" },
      { code: "ABIN", name: "Agencia Brasileña de Inteligencia", g: "c" },
      { code: "PF", name: "Inteligencia de la Policía Federal", g: "p" },
      { code: "Defensa", name: "Inteligencia de las Fuerzas Armadas", g: "m" },
      { code: "CCAI", name: "Comisión Mixta de Control de las Actividades de Inteligencia", g: "j" }
    ] },
  { id: "kr", name: "Corea del Sur", short: "Corea del Sur", map: "South Korea", tier: 3, center: [126.98, 37.57],
    agencies: [
      { code: "NSO", name: "Oficina de Seguridad Nacional", g: "k" },
      { code: "NIS", name: "Servicio Nacional de Inteligencia", g: "c" },
      { code: "DCC", name: "Comando de Contrainteligencia de Defensa", g: "m" },
      { code: "KDIA", name: "Agencia de Inteligencia de Defensa", g: "m" },
      { code: "KNPA", name: "Inteligencia de la Policía Nacional", g: "p" }
    ] }
];

window.TIERS = {
  1: { n: "Núcleo", x: "Las potencias de inteligencia y los casos de interés directo" },
  2: { n: "Muy relevantes", x: "Peso propio en su región y en los conflictos actuales" },
  3: { n: "Relevantes en su región o por una habilidad", x: "Actores regionales o especialistas en un rubro" }
};

window.ORG_GROUPS = {
  k: "Coordinación", c: "Inteligencia civil", m: "Inteligencia militar", p: "Policial y seguridad interior", j: "Control y justicia"
};
