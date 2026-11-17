// Ficha de Egipto · contenido real · revisada el 2026-11-15
(window.FICHAS = window.FICHAS || {})["eg"] = {
  id: "eg",
  updated: "2026-11-17",
  summary: [
    "El Servicio General de Inteligencia (GIS), la Mujabarat, es uno de los pilares del poder en Egipto junto con el Ejército. Lo dirige desde octubre de 2024 el general Hassan Rashad, que en enero de 2026 se sumó a la junta ejecutiva para la reconstrucción de Gaza. El presidente Abdel Fattah al-Sisi fue jefe de la Inteligencia Militar antes del golpe de 2013.",
    "El GIS maneja los expedientes más sensibles de la política exterior: la mediación entre Israel y Hamas, Libia, Sudán y la relación con EE.UU. Hacia adentro controla, a través de una empresa propia, la mayor parte de los canales y diarios privados del país. El Sector de Seguridad Nacional (NSS), la policía política, se ocupa de la represión interna.",
    "Los servicios egipcios están acusados de desapariciones forzadas y torturas. En septiembre de 2026 un tribunal de Roma condenó en ausencia a tres oficiales de seguridad egipcios a 10 años por el secuestro del investigador italiano Giulio Regeni, asesinado en El Cairo en 2016; Egipto niega su participación."
  ],
  keyFacts: [
    { l: "Director del GIS", v: "Hassan Rashad", n: "desde octubre de 2024" },
    { l: "Caso Regeni", v: "3 condenas en Roma", n: "10 años por secuestro, en ausencia (sept. 2026)" },
    { l: "Medios del GIS", v: "Más de 40 empresas", n: "United Media Services, según CPJ y prensa independiente" },
    { l: "Libertad de prensa", v: "Puesto 169 de 180", n: "Reporteros sin Fronteras, 2026" }
  ],
  power: { humana: 4, senales: 3, ciber: 3, imagenes: 2, encubierta: 3, contra: 4 },
  powerWhy: {
    humana: "Redes de fuentes en Gaza, Libia y Sudán; interlocutor obligado de Israel, Hamas y EE.UU.",
    senales: "Interceptación interna amplia sobre las redes de telecomunicaciones; poca capacidad propia en el exterior.",
    ciber: "Compra programas espía comerciales como Predator e inyecta tráfico en las redes de los operadores.",
    imagenes: "Depende sobre todo de aliados y de satélites comerciales.",
    encubierta: "Opera en Libia y en la mediación de Gaza; la intervención directa está poco documentada.",
    contra: "Aparato de seguridad interna muy extendido, orientado a vigilar a la oposición."
  },
  priorities: [
    { h: "Gaza", x: "Mediación entre Israel y Hamas, frontera de Rafah y reconstrucción." },
    { h: "Libia y Sudán", x: "Apoyo a aliados en dos guerras en sus fronteras." },
    { h: "Oposición interna", x: "Hermanos Musulmanes, críticos y opositores en el exilio." },
    { h: "Etiopía", x: "La represa del Nilo." },
    { h: "Terrorismo", x: "Grupos yihadistas en el Sinaí y el desierto occidental." }
  ],
  focos: ["Gaza", "Israel", "Libia", "Sudán", "Hermanos Musulmanes"],
  bodies: {
    "CSN": { since: 2014, how: "Consejo de Seguridad Nacional presidido por el presidente, que fija la política de seguridad.", staff: "No se publica.", budget: "Dentro de la Presidencia.", tech: [], where: ["El Cairo"] },
    "GIS": { since: 1954, how: "Servicio General de Inteligencia: inteligencia exterior, contraespionaje y expedientes políticos clave como Gaza y Libia. Depende directamente del presidente y controla un conglomerado de medios.", staff: "No se publica.", budget: "Secreto.", tech: ["Interceptación", "Programas espía comerciales"], where: ["El Cairo", "Embajadas"] },
    "MI": { since: 1952, how: "Inteligencia Militar y Reconocimiento del Ministerio de Defensa. La dirigió Sisi entre 2010 y 2012.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["El Cairo"] },
    "NSS": { since: 2011, how: "Sector de Seguridad Nacional del Ministerio del Interior, heredero de la Investigación de Seguridad del Estado disuelta tras la revolución de 2011. Vigila y detiene a opositores.", staff: "No se publica.", budget: "Dentro del Interior.", tech: ["Vigilancia de redes sociales"], where: ["Todo el país"] }
  },
  civil: [
    "El GIS responde al presidente; no hay control parlamentario efectivo.",
    "Militares retirados y oficiales de inteligencia ocupan cargos clave del Estado y de la economía.",
    "El Parlamento no discute el presupuesto de los servicios."
  ],
  law: {
    domestic: [
      "La ley antiterrorista de 2015 y la ley de delitos informáticos de 2018 permiten bloquear sitios y vigilar comunicaciones.",
      "La detención preventiva se renueva por años, una práctica que organizaciones de derechos humanos llaman \"rotación\".",
      "La ley de 2020 exige permiso de inteligencia para que militares retirados se presenten a elecciones."
    ],
    foreign: [
      "No hay normas públicas sobre operaciones en el exterior."
    ],
    oversight: [
      "No hay un órgano independiente que controle a los servicios.",
      "Tribunales extranjeros, como el de Roma en el caso Regeni, juzgaron a oficiales egipcios en ausencia."
    ]
  },
  rights: [
    { d: "1981-10", dir: "amplia", area: "Debido proceso", h: "Estado de emergencia", x: "Tras el asesinato de Sadat rige una emergencia que dura hasta 2012 y permite detenciones sin juicio." },
    { d: "2011-03", dir: "recorta", area: "Debido proceso", h: "Disolución de Seguridad del Estado", x: "Tras la revolución se disuelve la policía política, que renace como Sector de Seguridad Nacional." },
    { d: "2015-08", dir: "amplia", area: "Debido proceso", h: "Ley antiterrorista", x: "Amplía las detenciones y castiga publicar cifras distintas de las oficiales sobre ataques." },
    { d: "2018-08", dir: "amplia", area: "Expresión", h: "Ley de delitos informáticos", x: "Permite bloquear sitios y exige a los operadores guardar datos de los usuarios." }
  ],
  events: [
    {"d": "1965-02", "lat": 30.04, "lon": 31.24, "c": "Egypt", "t": "contra", "ev": 1, "h": "Cae Wolfgang Lotz", "x": "Egipto detiene en El Cairo a un espía israelí que se hacía pasar por criador de caballos alemán.", "u": "https://en.wikipedia.org/wiki/Wolfgang_Lotz", "st": "Wikipedia: Wolfgang Lotz"},
    {"d": "1973-10-06", "lat": 30.6, "lon": 32.3, "c": "Egypt", "t": "encubierta", "ev": 1, "h": "El engaño antes de la guerra", "x": "Egipto cruza el canal de Suez después de meses de ejercicios y señales que hicieron creer a Israel que no atacaría.", "u": "https://en.wikipedia.org/wiki/Yom_Kippur_War", "st": "Wikipedia: Yom Kippur War"},
    { d: "2003-02-17", lat: 45.48, lon: 9.2, c: "Italy", t: "encubierta", ev: 1, h: "Secuestro de Abu Omar", x: "La CIA secuestra en Milán a un clérigo egipcio y lo lleva a Egipto, donde denunció torturas; Italia condenó a agentes estadounidenses.", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2007-06-27", lat: 51.5, lon: -0.15, c: "United Kingdom", t: "contra", ev: 3, h: "Muerte de Ashraf Marwan", x: "El yerno de Nasser, que había sido fuente del Mossad, cae de un balcón en Londres; la investigación británica no determinó si fue asesinato.", u: "https://en.wikipedia.org/wiki/Ashraf_Marwan", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2016-01-25", lat: 30.0, lon: 31.2, c: "Egypt", t: "contra", ev: 1, h: "Secuestro de Giulio Regeni", x: "El investigador italiano desaparece en El Cairo; su cuerpo torturado aparece días después. Un tribunal de Roma condenó a tres oficiales egipcios en 2026.", u: "https://www.aljazeera.com/news/2026/9/28/italian-court-convicts-three-egyptian-agents-for-kidnap-of-giulio-regeni", st: "Al Jazeera", op: "secuestro" },
    { d: "2023-08", lat: 30.05, lon: 31.25, c: "Egypt", t: "ciber", ev: 2, h: "Predator contra un candidato", x: "Intentan infectar el teléfono del opositor Ahmed Tantawy con un programa espía tras anunciar su candidatura; Citizen Lab lo atribuye al gobierno egipcio.", u: "https://citizenlab.ca/2023/09/predator-in-the-wires-ahmed-eltantawy-targeted-with-predator-spyware-after-announcing-presidential-ambitions/", st: "Citizen Lab" }
  ],
  interest: {
    "Israel": 3, "Palestine": 3, "Libya": 3, "Sudan": 3, "Ethiopia": 2, "Saudi Arabia": 2, "United Arab Emirates": 2, "Qatar": 2, "Turkey": 2, "United States of America": 2, "Italy": 1, "S. Sudan": 1
  },
  timeline: [
    { era: "Nasser", d: "1954", h: "Nace el GIS", x: "Los Oficiales Libres crean un servicio de inteligencia tras la revolución de 1952.", ctx: "Nasser toma el poder." },
    { era: "", d: "1973", h: "Guerra de Octubre", x: "El engaño egipcio sorprende a Israel.", ctx: "Guerra con Israel por el Sinaí." },
    { era: "Mubarak", d: "1993–2011", h: "Omar Suleiman", x: "El jefe del GIS coopera con la CIA en traslados de detenidos y maneja el expediente palestino.", ctx: "Gobierno de Mubarak y paz con Israel." },
    { era: "", d: "2011", h: "Revolución", x: "Se disuelve la policía política, que vuelve con otro nombre.", ctx: "Primavera Árabe." },
    { era: "Sisi", d: "2013", h: "Golpe militar", x: "El ex jefe de la Inteligencia Militar derroca al presidente Mohamed Morsi.", ctx: "El Ejército derroca a Mohamed Morsi." },
    { era: "", d: "2016", h: "Caso Regeni", x: "El asesinato de un investigador italiano abre una crisis con Italia.", ctx: "Gobierno de Al Sisi." },
    { era: "Actual", d: "2024–2026", h: "Gaza y Regeni", x: "El GIS media en Gaza; Roma condena a tres oficiales egipcios.", now: true, ctx: "Guerra en Gaza." }
  ],
  cases: [
    {"ev": 1, "ilegal": false, "d": "1960–1965", "h": "Wolfgang Lotz", "x": "Un oficial israelí se instaló en El Cairo como empresario alemán y pasó información sobre científicos alemanes del programa de misiles. Fue detenido en 1965 y canjeado en 1968.", "who": "Gobiernos de Israel y Egipto", "missing": "", "u": "https://en.wikipedia.org/wiki/Wolfgang_Lotz", "st": "Wikipedia: Wolfgang Lotz"},
    { ev: 1, ilegal: true, d: "2016", h: "El secuestro de Giulio Regeni", x: "El investigador de la Universidad de Cambridge estudiaba sindicatos independientes en El Cairo. Un tribunal de Roma condenó en ausencia a tres oficiales de seguridad egipcios a 10 años por secuestro agravado, absolvió a un cuarto y no los condenó por el asesinato. Egipto niega toda participación y no cooperó con el juicio.", who: "Primer Tribunal de Assise de Roma", missing: "", u: "https://www.aljazeera.com/news/2026/9/28/italian-court-convicts-three-egyptian-agents-for-kidnap-of-giulio-regeni", st: "Al Jazeera" },
    { ev: 1, ilegal: true, d: "2018–2022", h: "El senador Menendez", x: "Un jurado de EE.UU. condenó en 2024 al senador Bob Menendez por recibir sobornos para favorecer a Egipto, entre otros cargos. La acusación describió contactos con funcionarios de inteligencia egipcios.", who: "Justicia federal de EE.UU.", missing: "", u: "https://en.wikipedia.org/wiki/Bob_Menendez", st: "Wikipedia (síntesis de fuentes)" },
    { ev: 2, ilegal: true, d: "2023", h: "Predator contra Ahmed Tantawy", x: "Citizen Lab detectó intentos de infectar el teléfono del ex diputado tras anunciar que competiría contra Sisi. Lo atribuyó con alta confianza al gobierno egipcio, cliente conocido del programa, porque el ataque salió de un equipo dentro de Egipto.", who: "Citizen Lab y Google", missing: "Reconocimiento oficial o documentos internos.", u: "https://citizenlab.ca/2023/09/predator-in-the-wires-ahmed-eltantawy-targeted-with-predator-spyware-after-announcing-presidential-ambitions/", st: "Citizen Lab" },
    { ev: 3, ilegal: false, d: "1956–1973", h: "Rafaat al-Haggan", x: "Egipto presenta como su agente infiltrado en Israel durante años a un hombre que inspiró una serie de televisión. Israel sostiene que trabajaba en realidad para su inteligencia.", who: "GIS de Egipto", missing: "Documentos de ambos servicios.", u: "https://en.wikipedia.org/wiki/Refaat_Al-Gammal", st: "Wikipedia (síntesis de fuentes)" }
  ],
  failures: [
    {"k": "acierto", "d": "1973-10-06", "h": "El engaño de octubre", "x": "Egipto disimuló sus preparativos de guerra y logró la sorpresa estratégica sobre Israel.", "ev": 1, "why": "No está en duda.", "w": 3, "wx": "Lo reconoció la comisión israelí Agranat.", "who": "Historiadores; comisión Agranat", "u": "https://en.wikipedia.org/wiki/Yom_Kippur_War", "st": "Wikipedia: Yom Kippur War"},
    { k: "falla", d: "1967-06", ev: 1, w: 3, h: "La guerra de los Seis Días", x: "Israel destruyó la aviación egipcia en tierra en pocas horas.", why: "No está en duda; la sorpresa está ampliamente documentada.", wx: "Abundante historiografía.", who: "Historiadores", u: "https://en.wikipedia.org/wiki/Six-Day_War", st: "Wikipedia (síntesis de fuentes)" },
    { k: "falsa", d: "1954", ev: 1, w: 3, h: "El caso Lavon", x: "Agentes israelíes pusieron bombas en blancos estadounidenses y británicos en Egipto para culpar a egipcios. Egipto desarmó la red.", why: "No está en duda; Israel lo reconoció en 2005.", wx: "Reconocimiento oficial israelí.", who: "Gobierno de Israel", u: "https://en.wikipedia.org/wiki/Lavon_affair", st: "Wikipedia (síntesis de fuentes)" }
  ],
  modus: {
    embajadas: "Oficiales del GIS trabajan en embajadas y vigilan a opositores en el exterior, según organizaciones de derechos humanos.",
    campo: "Fuentes y contactos en Gaza, Libia y Sudán, donde el GIS negocia con milicias y facciones.",
    oficina: "La sede de El Cairo maneja expedientes políticos que en otros países llevaría la Cancillería.",
    reclutamiento: "Recluta sobre todo en el Ejército y la Academia Militar; parientes del presidente ocuparon cargos altos.",
    tecnica: "Interceptación interna, inspección de tráfico en las redes de los operadores y programas espía comprados.",
    enlaces: "Cooperación histórica con la CIA; coordinación con Israel en Gaza y el Sinaí y con Emiratos y Arabia Saudita."
  },
  insiders: [
    { k: "topo", dir: "sale", ev: 1, d: "1970–1998", n: "Ashraf Marwan", h: "El yerno de Nasser", x: "Pasó secretos al Mossad durante décadas; alertó sobre la guerra de 1973. Algunos sostienen que era un doble agente egipcio.", cargo: "Asesor de la Presidencia", hacia: "Mossad (Israel)", fin: "Murió en Londres en 2007 al caer de un balcón.", who: "Tribunales de Israel e historiadores", u: "https://en.wikipedia.org/wiki/Ashraf_Marwan", st: "Wikipedia (síntesis de fuentes)" },
    { k: "topo", dir: "entra", ev: 1, d: "2018–2022", n: "Bob Menendez", h: "El senador de EE.UU.", x: "Recibió oro y dinero a cambio de favorecer a Egipto en ayuda militar, según el jurado que lo condenó.", cargo: "Senador y presidente de la Comisión de Relaciones Exteriores", hacia: "Funcionarios egipcios", fin: "Condenado en 2024 a 11 años de prisión.", who: "Justicia federal de EE.UU.", u: "https://en.wikipedia.org/wiki/Bob_Menendez", st: "Wikipedia (síntesis de fuentes)" }
  ],
  leaks: [
    { k: "ocultamiento", rol: "autor", ev: 1, d: "2016–2026", h: "Los responsables del caso Regeni", x: "Egipto no informó el paradero de los acusados ni cooperó con la justicia italiana.", obj: "Evitar el juicio a sus oficiales.", aquien: "La justicia italiana y la familia de la víctima", como: "La fiscalía de Roma reconstruyó el caso con testigos y registros telefónicos.", who: "Fiscalía de Roma", u: "https://www.thestar.com.my/news/world/2026/09/29/italy-distances-egypt-from-verdict-over-giulio-regeni-as-opposition-attacks", st: "Reuters, vía The Star" },
    { k: "desinfo", rol: "autor", ev: 1, d: "2016–2026", h: "El control de los medios", x: "Una empresa ligada al GIS controla canales y diarios privados y despide a conductores críticos.", obj: "Controlar el mensaje político.", who: "Comité para la Protección de los Periodistas (CPJ)", u: "https://cpj.org/2025/07/egypts-intelligence-controlled-media-company-retaliates-against-programs-hosts-critical-of-government/", st: "CPJ" }
  ],
  practicas: {
    propios: { ev: 2, x: "Los servicios controlan a militares retirados, que necesitan permiso para presentarse a elecciones.", u: "https://en.wikipedia.org/wiki/General_Intelligence_Service_(Egypt)", st: "Wikipedia (síntesis de fuentes)" },
    politicos: { ev: 2, x: "Un programa espía apuntó al opositor Ahmed Tantawy tras anunciar su candidatura, según Citizen Lab.", u: "https://citizenlab.ca/2023/09/predator-in-the-wires-ahmed-eltantawy-targeted-with-predator-spyware-after-announcing-presidential-ambitions/", st: "Citizen Lab" },
    periodistas: { ev: 2, x: "Un conductor de televisión exiliado fue infectado con Predator en 2021, según Citizen Lab.", u: "https://citizenlab.ca/tag/egypt", st: "Citizen Lab" },
    activistas: { ev: 1, x: "El Sector de Seguridad Nacional detiene y desaparece a activistas, según organizaciones de derechos humanos.", u: "https://en.wikipedia.org/wiki/Human_rights_in_Egypt", st: "Wikipedia (síntesis de fuentes)" },
    aliados: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    rivales: { ev: 1, x: "Vigila a Turquía, Catar y los Hermanos Musulmanes, y negocia con Hamas.", u: "https://en.wikipedia.org/wiki/General_Intelligence_Service_(Egypt)", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    vinculo: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    asesinato: { ev: 3, x: "Hay sospechas sobre la muerte de Ashraf Marwan en Londres en 2007, sin conclusión oficial.", u: "https://en.wikipedia.org/wiki/Ashraf_Marwan", st: "Wikipedia (síntesis de fuentes)" },
    sabotaje: { ev: 0, x: "Esta ficha no encontró sabotajes documentados." },
    infraestructura: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    economico: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    engano: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    ilegales: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    financiera: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    mediacion: {"ev": 1, "x": "La Inteligencia General egipcia es el canal habitual entre Israel y los grupos palestinos de Gaza.", "u": "https://en.wikipedia.org/wiki/General_Intelligence_Service_(Egypt)", "st": "Wikipedia: General Intelligence Service (Egypt)"},
    privados: {"ev": 0, "x": "Esta ficha no encontró casos documentados."},
    tortura: { ev: 1, x: "Un tribunal de Roma concluyó que oficiales egipcios secuestraron a Regeni, torturado hasta la muerte; Abu Omar denunció torturas tras su traslado.", u: "https://www.timeshighereducation.com/news/three-convicted-kidnapping-murdered-cambridge-phd-student", st: "Times Higher Education" },
    secuestro: { ev: 1, x: "Tres oficiales condenados en Roma por el secuestro de Regeni en 2016.", u: "https://www.aljazeera.com/news/2026/9/28/italian-court-convicts-three-egyptian-agents-for-kidnap-of-giulio-regeni", st: "Al Jazeera" },
    propaganda: { ev: 1, x: "El conglomerado de medios del GIS produce noticieros y series de televisión con mensajes del Estado.", u: "https://cpj.org/2025/07/egypts-intelligence-controlled-media-company-retaliates-against-programs-hosts-critical-of-government/", st: "CPJ" },
    conflictos: { ev: 2, x: "Apoya al mariscal Jalifa Haftar en Libia; la ONU documentó violaciones del embargo de armas de varios países.", u: "https://en.wikipedia.org/wiki/Libyan_civil_war_(2014%E2%80%932020)", st: "Wikipedia (síntesis de fuentes)" },
    cultural: { ev: 1, x: "Financia series y películas con relatos oficiales de la historia de los servicios.", u: "https://3arabawy.substack.com/p/the-garrison-state-prime-time", st: "Hossam el-Hamalawy" },
    golpes: { ev: 0, x: "Esta ficha no encontró intentos documentados de derrocar gobiernos extranjeros." },
    elecciones: { ev: 0, x: "Esta ficha no encontró intervenciones documentadas en elecciones extranjeras." },
    partidos: { ev: 0, x: "Esta ficha no encontró financiamiento documentado de partidos extranjeros." },
    diaspora: { ev: 2, x: "Opositores en el exilio, como Ayman Nour, fueron infectados con programas espía, según Citizen Lab.", u: "https://citizenlab.ca/tag/egypt", st: "Citizen Lab" },
    empresarios: { ev: 1, x: "Un empresario de Nueva Jersey canalizó sobornos al senador Menendez en favor de Egipto, según la condena.", u: "https://en.wikipedia.org/wiki/Bob_Menendez", st: "Wikipedia (síntesis de fuentes)" },
    religiosos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    armas: { ev: 2, x: "Envía apoyo militar a Haftar en Libia, según informes del panel de expertos de la ONU citados por la prensa.", u: "https://en.wikipedia.org/wiki/Libyan_civil_war_(2014%E2%80%932020)", st: "Wikipedia (síntesis de fuentes)" },
    inteligencia: { ev: 1, x: "Cooperó con la CIA en el traslado de detenidos tras 2001.", u: "https://en.wikipedia.org/wiki/Imam_Rapito_affair", st: "Wikipedia (síntesis de fuentes)" },
    tecnologia: { ev: 0, x: "Esta ficha no encontró transferencias documentadas." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto de los servicios es secreto y no pasa por el Parlamento.",
    uso: "Personal, vigilancia interna, programas espía y operaciones regionales.",
    ingresos: "El GIS tiene ingresos propios a través de empresas de medios, publicidad, producción y derechos deportivos.",
    empresas: "United Media Services controla más de 40 empresas de medios a través de un fondo ligado al GIS, según prensa independiente.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró uso documentado de organizaciones criminales.",
    cobertura: "Esta ficha no encontró ONG de cobertura documentadas."
  },
  fondos: [
    { k: "fachada", rol: "autor", ev: 2, d: "2016–", h: "United Media Services", x: "El conglomerado que domina la televisión privada pertenece a un fondo de inversión vinculado al GIS, según CPJ y prensa independiente.", obj: "Controlar los medios y generar ingresos.", who: "CPJ y prensa independiente", u: "https://statemediamonitor.com/egypt/", st: "State Media Monitor" },
    { k: "cobertura", rol: "autor", ev: 1, d: "2018–2022", h: "Los sobornos a Menendez", x: "Lingotes de oro y dinero en efectivo para un senador a cambio de favores a Egipto, según el jurado.", obj: "Asegurar ayuda militar y apoyo en Washington.", who: "Justicia federal de EE.UU.", u: "https://en.wikipedia.org/wiki/Bob_Menendez", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Cytrox / Intellexa", c: "extranjera", rubro: "Programas espía", rel: "Proveedor", x: "Egipto es cliente conocido de Predator, según Citizen Lab." },
    { n: "Sandvine", c: "extranjera", rubro: "Inspección de tráfico", rel: "Proveedor", x: "Sus equipos sirvieron para inyectar el programa espía en la red de un operador egipcio, según Citizen Lab." },
    { n: "United Media Services", c: "nacional", rubro: "Medios", rel: "Propia", x: "Controla los principales canales privados." }
  ],
  struggles: [
    { a: "GIS", b: "Ministerio del Interior", k: "Entre agencias", stake: "El control de la seguridad interna", state: "Latente", x: "Las dos estructuras compiten por expedientes y recursos desde 2011." },
    { a: "Egipto", b: "Justicia italiana", k: "Con otros poderes", stake: "El caso Regeni", state: "Abierta", x: "Roma condenó a oficiales egipcios; el gobierno italiano evita una ruptura con El Cairo." }
  ],
  proxies: [
    {"id": "lna", "s": "Ejército de Haftar", "n": "Ejército Nacional Libio de Jalifa Haftar", "k": "armado", "d": "2014–", "rol": "patrocina", "hoy": true, "ev": 1, "x": "Egipto apoya a Haftar en el este de Libia, según la ONU.", "who": "Panel de expertos de la ONU sobre Libia", "u": "https://en.wikipedia.org/wiki/Libyan_National_Army", "st": "Wikipedia: Libyan National Army", "graf": true}
  ],
  doctrina: [{"h": "Mediación", "x": "La Inteligencia General es el canal con Israel y con los grupos palestinos."}],
  cuentas: {"n": 1, "x": "Sin control independiente."},
  sources: [
    { t: "Al Jazeera: condena en Roma por el caso Regeni (2026)", u: "https://www.aljazeera.com/news/2026/9/28/italian-court-convicts-three-egyptian-agents-for-kidnap-of-giulio-regeni" },
    { t: "Citizen Lab: Predator contra Ahmed Tantawy", u: "https://citizenlab.ca/2023/09/predator-in-the-wires-ahmed-eltantawy-targeted-with-predator-spyware-after-announcing-presidential-ambitions/" },
    { t: "CPJ: la empresa de medios de la inteligencia", u: "https://cpj.org/2025/07/egypts-intelligence-controlled-media-company-retaliates-against-programs-hosts-critical-of-government/" },
    { t: "State Media Monitor: Egipto", u: "https://statemediamonitor.com/egypt/" },
    { t: "Wikipedia: General Intelligence Service (Egypt)", u: "https://en.wikipedia.org/wiki/General_Intelligence_Service_(Egypt)" }
  ]
};
