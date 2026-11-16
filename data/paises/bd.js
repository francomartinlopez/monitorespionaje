// Ficha de Bangladés · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["bd"] = {
  id: "bd",
  updated: "2026-11-16",
  summary: [
    "La Dirección General de Inteligencia de las Fuerzas de Defensa (DGFI) es el servicio más poderoso de Bangladés. La Inteligencia de Seguridad Nacional (NSI) cubre lo civil, el Centro Nacional de Monitoreo de Telecomunicaciones (NTMC) concentra las escuchas y la Rama Especial (SB) de la policía vigila dentro del país.",
    "Bajo el gobierno de Sheikh Hasina (2009–2024), la DGFI y la policía fueron acusadas de cientos de desapariciones forzadas. En 2025 una comisión investigadora describió cárceles secretas como \"Aynaghar\", y en octubre de 2025 un tribunal acusó a oficiales de la DGFI.",
    "Hasina cayó en agosto de 2024 tras protestas estudiantiles con cientos de muertos, según la ONU. El gobierno interino de Muhammad Yunus prometió reformar los servicios; Hasina fue condenada en ausencia en noviembre de 2025 y vive en India."
  ],
  keyFacts: [
    { l: "Muertos en las protestas de 2024", v: "Hasta 1.400", n: "según la ONU, febrero de 2025" },
    { l: "Desapariciones denunciadas", v: "Más de 1.600", n: "según la comisión investigadora, 2025" },
    { l: "Cárcel secreta", v: "Aynaghar (DGFI)", n: "según la comisión y testimonios" },
    { l: "Hasina", v: "Condenada en ausencia", n: "noviembre de 2025" }
  ],
  power: { humana: 3, senales: 3, ciber: 2, imagenes: 1, encubierta: 2, contra: 4 },
  powerWhy: {
    humana: "Redes internas extensas; poca presencia exterior fuera de la región.",
    senales: "El NTMC centraliza la interceptación de telecomunicaciones.",
    ciber: "Compró equipos de vigilancia a empresas extranjeras, según investigaciones de prensa.",
    imagenes: "Sin capacidades propias.",
    encubierta: "Secuestros y desapariciones internas, según la comisión.",
    contra: "Aparato de control interno amplio, usado contra la oposición."
  },
  priorities: [
    { h: "Oposición", x: "BNP y Jamaat-e-Islami hasta 2024." },
    { h: "Terrorismo islamista", x: "Ataque de Holey Artisan en 2016." },
    { h: "India y Myanmar", x: "Fronteras y refugiados rohinyás." },
    { h: "Transición", x: "Reforma tras la caída de Hasina." }
  ],
  focos: ["Daca", "India", "Myanmar", "Rohinyás"],
  bodies: {
    "NCC": { since: 2010, how: "Comité Nacional de Coordinación de inteligencia.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Daca"] },
    "NSI": { since: 1972, how: "Inteligencia de Seguridad Nacional: servicio civil bajo la oficina del primer ministro.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Daca"] },
    "NTMC": { since: 2013, how: "Centro Nacional de Monitoreo de Telecomunicaciones: escuchas legales del Estado.", staff: "No se publica.", budget: "Secreto.", tech: ["Interceptación", "Vigilancia de redes"], where: ["Daca"] },
    "DGFI": { since: 1977, how: "Dirección General de Inteligencia de las Fuerzas de Defensa: inteligencia militar con gran poder político interno.", staff: "No se publica.", budget: "Secreto.", tech: [], where: ["Daca"] },
    "SB": { since: 1947, how: "Rama Especial de la policía: inteligencia interior y control de pasaportes.", staff: "No se publica.", budget: "Dentro de la policía.", tech: [], where: ["Daca"] }
  },
  civil: [
    "Bajo Hasina, la DGFI respondía de hecho a la oficina de la primera ministra.",
    "El gobierno interino de 2024 removió a jefes de inteligencia y abrió investigaciones.",
    "No hay control parlamentario efectivo de los servicios."
  ],
  law: {
    domestic: [
      "La Ley de Telecomunicaciones de 2001, reformada en 2006, permite escuchas por razones de seguridad.",
      "La Ley de Seguridad Digital de 2018 se usó contra periodistas; fue reemplazada en 2023."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "Comisión de investigación de desapariciones forzadas, creada en 2024.",
      "Tribunal Internacional de Crímenes."
    ]
  },
  rights: [
    { d: "2006", dir: "amplia", area: "Privacidad", h: "Reforma de telecomunicaciones", x: "Permite escuchas sin control judicial." },
    { d: "2018", dir: "amplia", area: "Expresión", h: "Ley de Seguridad Digital", x: "Usada para detener a periodistas y críticos." },
    { d: "2024", dir: "recorta", area: "Debido proceso", h: "Comisión de desapariciones", x: "Investiga a la DGFI y a la policía." }
  ],
  events: [
    { d: "2016-07-01", lat: 23.79, lon: 90.42, c: "Bangladesh", t: "contra", ev: 1, h: "Ataque de Holey Artisan", x: "Un comando islamista mata a 22 rehenes en un café de Daca.", u: "https://en.wikipedia.org/wiki/July_2016_Dhaka_attack", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-08-05", lat: 23.76, lon: 90.39, c: "Bangladesh", t: "contra", ev: 1, h: "Cae Hasina", x: "La primera ministra huye a India tras semanas de protestas.", u: "https://en.wikipedia.org/wiki/July_Revolution_(Bangladesh)", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2024-12", lat: 23.82, lon: 90.4, c: "Bangladesh", t: "encubierta", ev: 2, h: "Aynaghar", x: "La comisión visita celdas secretas de la DGFI en Daca, según su informe.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" }
  ],
  interest: {
    "India": 3, "Myanmar": 3, "Pakistan": 1, "China": 1
  },
  timeline: [
    { era: "Independencia", d: "1971", h: "Nace Bangladés", x: "Guerra de independencia de Pakistán." },
    { era: "Militares", d: "1977", h: "Nace la DGFI", x: "Bajo el gobierno militar de Ziaur Rahman." },
    { era: "Hasina", d: "2009–2024", h: "Desapariciones", x: "Cientos de opositores desaparecidos, según organizaciones de derechos humanos." },
    { era: "Transición", d: "2024–2026", h: "Gobierno interino", x: "Investigaciones a la DGFI y juicio a Hasina.", now: true }
  ],
  cases: [
    { ev: 2, ilegal: true, d: "2009–2024", h: "Aynaghar", x: "La comisión investigadora y ex detenidos describieron una cárcel secreta de la DGFI donde opositores pasaron meses o años sin proceso. En 2025 un tribunal acusó a oficiales por desapariciones forzadas.", who: "Comisión de investigación de desapariciones forzadas; Human Rights Watch", missing: "Sentencias firmes.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 1, ilegal: true, d: "2024-07", h: "La represión de julio", x: "La ONU concluyó que el gobierno de Hasina y sus servicios coordinaron una represión que pudo dejar hasta 1.400 muertos. Hasina fue condenada en ausencia en 2025.", who: "Oficina de la ONU para los Derechos Humanos; Tribunal Internacional de Crímenes", missing: "", u: "https://www.ohchr.org/en/press-releases/2025/02/bangladesh-un-report-finds-brutal-systematic-repression-protests-calls-justice", st: "ACNUDH" }
  ],
  failures: [
    { k: "falla", d: "2016-07", ev: 1, w: 2, h: "Holey Artisan", x: "Los servicios no detectaron la célula que atacó el café pese a amenazas previas.", why: "El ataque está probado; el alcance de los avisos se discute.", wx: "Hubo informes de prensa sobre alertas ignoradas.", who: "Prensa bangladesí", u: "https://en.wikipedia.org/wiki/July_2016_Dhaka_attack", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Presencia limitada en embajadas regionales.",
    campo: "Redes internas en universidades, partidos y medios.",
    oficina: "La DGFI dominaba el aparato bajo Hasina.",
    reclutamiento: "Oficiales militares y policías.",
    tecnica: "El NTMC compró equipos de interceptación extranjeros, según investigaciones de prensa.",
    enlaces: "Cooperación con India bajo Hasina."
  },
  insiders: [
    { k: "desertor", dir: "sale", ev: 2, d: "2024", n: "Ziaul Ahsan", h: "El jefe del NTMC", x: "El ex jefe del NTMC fue detenido tras la caída de Hasina y acusado por desapariciones.", cargo: "Director del NTMC", hacia: "No aplica", fin: "Detenido en 2024.", who: "Prensa bangladesí", u: "https://en.wikipedia.org/wiki/Ziaul_Ahsan", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 2, d: "2009–2024", h: "Las desapariciones", x: "El gobierno negó durante años la existencia de cárceles secretas.", obj: "Evitar responsabilidades.", aquien: "Al público y a la justicia", como: "Testimonios de liberados y la comisión de 2024.", who: "Comisión de investigación", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" }
  ],
  practicas: {
    propios: { ev: 2, x: "Se detuvo a oficiales críticos, según testimonios.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 1, x: "Opositores del BNP y de Jamaat desaparecieron bajo Hasina.", u: "https://www.ohchr.org/en/press-releases/2025/02/bangladesh-un-report-finds-brutal-systematic-repression-protests-calls-justice", st: "ACNUDH" },
    periodistas: { ev: 2, x: "Periodistas detenidos con la Ley de Seguridad Digital.", u: "https://en.wikipedia.org/wiki/Digital_Security_Act,_2018", st: "Wikipedia (síntesis de fuentes)" },
    activistas: { ev: 1, x: "Líderes estudiantiles detenidos por la policía de inteligencia en 2024, según la ONU.", u: "https://www.ohchr.org/en/press-releases/2025/02/bangladesh-un-report-finds-brutal-systematic-repression-protests-calls-justice", st: "ACNUDH" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    asesinato: { ev: 2, x: "Ejecuciones extrajudiciales atribuidas a fuerzas de seguridad, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 2, x: "Ex detenidos de Aynaghar describieron torturas.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "Desapariciones forzadas atribuidas a la DGFI.", u: "https://en.wikipedia.org/wiki/Aynaghar", st: "Wikipedia (síntesis de fuentes)" },
    propaganda: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 3, x: "La oposición acusó a los servicios de manipular las elecciones de 2014, 2018 y 2024.", u: "https://en.wikipedia.org/wiki/2024_Bangladeshi_general_election", st: "Wikipedia (síntesis de fuentes)" },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto.",
    uso: "Control interno y vigilancia de telecomunicaciones.",
    ingresos: "Esta ficha no encontró ingresos propios documentados.",
    empresas: "Las Fuerzas Armadas tienen empresas propias; no se documentó su uso por la DGFI.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 3, d: "2013–2024", h: "Compras de vigilancia", x: "Investigaciones de prensa describieron compras de equipos de interceptación por el NTMC y la DGFI sin control público.", obj: "Vigilancia de la población.", who: "Prensa de investigación", u: "https://en.wikipedia.org/wiki/National_Telecommunication_Monitoring_Centre", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Proveedores extranjeros de interceptación", c: "extranjera", rubro: "Vigilancia", rel: "Proveedores", x: "Vendieron equipos al NTMC, según investigaciones de prensa." }
  ],
  struggles: [
    { a: "Gobierno interino", b: "Antiguo aparato de seguridad", k: "Con otros poderes", stake: "Las responsabilidades por desapariciones", state: "Abierta", x: "Juicios a oficiales de la DGFI." }
  ],
  proxies: [
  ],
  sources: [
    { t: "ACNUDH: informe sobre la represión de 2024", u: "https://www.ohchr.org/en/press-releases/2025/02/bangladesh-un-report-finds-brutal-systematic-repression-protests-calls-justice" },
    { t: "Wikipedia: Aynaghar", u: "https://en.wikipedia.org/wiki/Aynaghar" },
    { t: "Wikipedia: July Revolution (Bangladesh)", u: "https://en.wikipedia.org/wiki/July_Revolution_(Bangladesh)" }
  ]
};
