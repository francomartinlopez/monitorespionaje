// Ficha de Georgia · contenido real · revisada el 2026-11-16
(window.FICHAS = window.FICHAS || {})["ge"] = {
  id: "ge",
  updated: "2026-11-16",
  summary: [
    "El Servicio de Seguridad del Estado de Georgia (SSG) concentra contraespionaje, antiterrorismo y vigilancia interna, mientras que el Servicio de Inteligencia (GIS) se ocupa del exterior. Rusia ocupa desde la guerra de 2008 Abjasia y Osetia del Sur, alrededor del 20% del territorio.",
    "En septiembre de 2021 un ex empleado filtró miles de archivos del SSG que mostraban escuchas a sacerdotes de la Iglesia ortodoxa, periodistas, políticos de todos los partidos y diplomáticos, incluido el embajador de la UE. El gobierno de Sueño Georgiano dijo que los archivos no eran auténticos, aunque varios espiados confirmaron las conversaciones.",
    "Desde 2024 el gobierno aprobó una ley de agentes extranjeros, congeló el camino hacia la UE y reprimió protestas masivas. Organizaciones de derechos humanos denuncian que el SSG persigue a opositores y periodistas. En 2017 un periodista azerbaiyano exiliado fue secuestrado en Tiflis y apareció preso en Azerbaiyán."
  ],
  keyFacts: [
    { l: "Filtración del SSG", v: "Septiembre de 2021", n: "miles de archivos de escuchas" },
    { l: "Territorio ocupado", v: "Abjasia y Osetia del Sur", n: "tras la guerra de 2008" },
    { l: "Ley de agentes extranjeros", v: "2024", n: "reforzada en 2025" },
    { l: "Secuestro de Mukhtarli", v: "Tiflis, 2017", n: "periodista azerbaiyano llevado a Bakú" }
  ],
  power: { humana: 2, senales: 2, ciber: 2, imagenes: 1, encubierta: 1, contra: 2 },
  powerWhy: {
    humana: "Fuentes en los territorios ocupados y en Rusia.",
    senales: "Escuchas internas amplias, con una agencia técnica dependiente del SSG.",
    ciber: "Sufrió grandes ciberataques rusos en 2008 y 2019.",
    imagenes: "Sin capacidades propias relevantes.",
    encubierta: "No hay operaciones encubiertas documentadas en el exterior.",
    contra: "Servicio orientado a la vigilancia interna, según sus críticos."
  },
  priorities: [
    { h: "Rusia", x: "Territorios ocupados y presión militar." },
    { h: "Oposición", x: "Partidos opositores y protestas proeuropeas." },
    { h: "ONG y medios", x: "Aplicación de la ley de agentes extranjeros." },
    { h: "Terrorismo", x: "Valle de Pankisi y retornados del Estado Islámico." },
    { h: "Vecinos", x: "Turquía, Azerbaiyán y Armenia." }
  ],
  focos: ["Rusia", "Abjasia", "Osetia del Sur", "Oposición", "Azerbaiyán"],
  bodies: {
    "CSN": { since: 1996, how: "Consejo de Seguridad Nacional, con funciones de coordinación muy reducidas desde las reformas constitucionales.", staff: "No aplica.", budget: "No aplica.", tech: [], where: ["Tiflis"] },
    "GIS": { since: 1997, how: "Servicio de Inteligencia de Georgia: inteligencia exterior, dependiente del primer ministro.", staff: "No se publica.", budget: "Secreto en parte.", tech: [], where: ["Tiflis"] },
    "Defensa": { since: 1991, how: "Inteligencia militar del Ministerio de Defensa, centrada en las fuerzas rusas en los territorios ocupados.", staff: "No se publica.", budget: "Dentro de Defensa.", tech: [], where: ["Tiflis"] },
    "SSG": { since: 2015, how: "Servicio de Seguridad del Estado: contraespionaje, antiterrorismo y anticorrupción. La agencia operativo-técnica que hace las escuchas depende de él.", staff: "No se publica.", budget: "Público en lo general.", tech: ["Escuchas"], where: ["Tiflis", "Todo el país"] }
  },
  civil: [
    "El SSG responde al primer ministro y, según la oposición, al fundador de Sueño Georgiano, Bidzina Ivanishvili.",
    "El Parlamento tiene un control débil sobre los servicios.",
    "Un ex subjefe del SSG fue detenido en 2025 y amenazó con revelar abusos del gobierno."
  ],
  law: {
    domestic: [
      "La ley de 2015 separó el SSG del Ministerio del Interior.",
      "La ley de transparencia de la influencia extranjera de 2024 obliga a registrarse a ONG y medios con fondos extranjeros.",
      "Una ley de 2025 inspirada en la FARA estadounidense amplió las sanciones penales."
    ],
    foreign: [
      "El GIS opera en el exterior sin normas públicas detalladas."
    ],
    oversight: [
      "Comité de Defensa y Seguridad del Parlamento.",
      "Defensoría del Pueblo, que denunció la vigilancia revelada en 2021."
    ]
  },
  rights: [
    { d: "2015-08", dir: "recorta", area: "Privacidad", h: "Separación del SSG", x: "La seguridad del Estado sale del Ministerio del Interior." },
    { d: "2024-05", dir: "amplia", area: "Expresión", h: "Ley de agentes extranjeros", x: "Obliga a registrarse a ONG y medios con fondos extranjeros." },
    { d: "2025-04", dir: "amplia", area: "Expresión", h: "Ley tipo FARA", x: "Penas de prisión por no registrarse como agente extranjero." }
  ],
  events: [
    { d: "2008-08", lat: 42.23, lon: 43.97, c: "Georgia", t: "ciber", ev: 2, h: "Guerra con Rusia", x: "La invasión rusa se combina con ciberataques a sitios del gobierno georgiano.", u: "https://en.wikipedia.org/wiki/Russo-Georgian_War", st: "Wikipedia (síntesis de fuentes)" },
    { d: "2017-05-29", lat: 41.72, lon: 44.79, c: "Georgia", t: "encubierta", ev: 2, h: "Secuestro de Afgán Mukhtarli", x: "El periodista azerbaiyano exiliado es secuestrado en Tiflis y aparece detenido en Azerbaiyán; denunció la participación de agentes georgianos.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" },
    { d: "2021-09-13", lat: 41.7, lon: 44.8, c: "Georgia", t: "contra", ev: 2, h: "Filtración de los archivos del SSG", x: "Se publican miles de archivos con escuchas a clérigos, periodistas, políticos y diplomáticos.", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics", st: "OCCRP" }
  ],
  interest: {
    "Russia": 3, "Turkey": 1, "Azerbaijan": 2, "Armenia": 1, "Ukraine": 1, "Iran": 1
  },
  timeline: [
    { era: "Independencia", d: "1991", h: "Nuevos servicios", x: "Georgia hereda estructuras del KGB." },
    { era: "", d: "2008", h: "Guerra con Rusia", x: "Pérdida de control sobre Abjasia y Osetia del Sur." },
    { era: "Sueño Georgiano", d: "2015", h: "Nace el SSG", x: "Separado del Ministerio del Interior." },
    { era: "", d: "2021", h: "Filtración de archivos", x: "Revela la vigilancia masiva." },
    { era: "Actual", d: "2024–2026", h: "Giro autoritario", x: "Ley de agentes extranjeros y represión de protestas.", now: true }
  ],
  cases: [
    { ev: 2, ilegal: true, d: "2013–2021", h: "Los archivos del SSG", x: "Los archivos filtrados mostraron escuchas sistemáticas a la jerarquía de la Iglesia ortodoxa, políticos de todos los partidos, periodistas y diplomáticos. Varios espiados confirmaron sus conversaciones; el gobierno negó la autenticidad. La fiscalía abrió una investigación sin resultados públicos.", who: "Defensoría del Pueblo, prensa y personas espiadas", missing: "Una investigación judicial independiente.", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics", st: "OCCRP" },
    { ev: 2, ilegal: true, d: "2017", h: "El secuestro de Mukhtarli", x: "El periodista Afgán Mukhtarli dijo que hombres con uniforme georgiano lo secuestraron en Tiflis y lo entregaron en la frontera a Azerbaiyán, donde fue condenado. La investigación georgiana no identificó a los responsables.", who: "Afgán Mukhtarli y organizaciones de prensa", missing: "Identificación de los autores.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" }
  ],
  failures: [
    { k: "falla", d: "2021", ev: 2, w: 2, h: "La fuga de archivos", x: "Un ex empleado sacó miles de archivos secretos del servicio sin ser detectado.", why: "La filtración es un hecho; la autenticidad la discute el gobierno.", wx: "Confirmaciones parciales de los espiados.", who: "Prensa georgiana", u: "https://georgiatoday.ge/former-security-officer-allegedly-leaks-surveillance-files-including-kompromats-against-clergy/", st: "Georgia Today" }
  ],
  modus: {
    embajadas: "El GIS tiene oficiales en embajadas; los diplomáticos extranjeros en Tiflis fueron vigilados a través de sus colaboradores, según los archivos filtrados.",
    campo: "Fuentes en los territorios ocupados y en la diáspora.",
    oficina: "El SSG informa al primer ministro.",
    reclutamiento: "Personal policial y militar.",
    tecnica: "Escuchas a través de la agencia operativo-técnica dependiente del SSG.",
    enlaces: "Cooperación histórica con la OTAN y EE.UU., hoy enfriada."
  },
  insiders: [
    { k: "denunciante", dir: "sale", ev: 2, d: "2021", n: "Ex empleado del SSG", h: "El autor de la filtración", x: "Un ex empleado del servicio difundió los archivos de vigilancia, según la prensa.", cargo: "Empleado del SSG", hacia: "Periodistas", fin: "La prensa informó que murió en 2021; no hubo confirmación oficial de su identidad.", who: "Prensa georgiana", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics", st: "OCCRP" }
  ],
  leaks: [
    { k: "filtracion", rol: "autor", ev: 2, d: "2021-09", h: "Los archivos de vigilancia", x: "Se difunden escuchas del SSG a clérigos, políticos, periodistas y diplomáticos.", obj: "Exponer la vigilancia masiva, según el filtrador.", who: "Prensa georgiana", u: "https://www.intellinews.com/georgia-flooded-with-leaked-surveillance-recordings-of-clergy-221305", st: "Eurasianet, vía bne IntelliNews" }
  ],
  practicas: {
    propios: { ev: 2, x: "Los archivos muestran escuchas a políticos del propio partido de gobierno.", u: "https://grass.org.ge/en/inmedia/big-brother-is-listening-leaked-state-security-files-show-total-surveillance", st: "GRASS" },
    politicos: { ev: 2, x: "Políticos opositores confirmaron conversaciones que figuran en los archivos filtrados.", u: "https://oldwp.civil.ge/?p=440008", st: "Civil.ge" },
    periodistas: { ev: 2, x: "Periodistas figuran entre los espiados.", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics", st: "OCCRP" },
    activistas: { ev: 2, x: "Activistas de la sociedad civil fueron vigilados, según los archivos.", u: "https://socialjustice.org.ge/en/products/mamkhileblis-mier-faruli-tvaltvalis-metodebis-taobaze-gavrtselebuli-informatsia-sazogadoebis-totaluri-kontrolis-shesakheb-sagangasho-tsnobebs-sheitsavs", st: "Social Justice Center" },
    aliados: { ev: 2, x: "El embajador de la UE y personal de embajadas aliadas fueron escuchados, según los archivos.", u: "https://georgiatoday.ge/?p=16225", st: "Georgia Today" },
    rivales: { ev: 1, x: "Rusia y los territorios ocupados son blancos centrales.", u: "https://en.wikipedia.org/wiki/Russo-Georgian_War", st: "Wikipedia (síntesis de fuentes)" },
    extorsion: { ev: 2, x: "Los archivos contenían material comprometedor sobre la vida privada de clérigos.", u: "https://georgiatoday.ge/former-security-officer-allegedly-leaks-surveillance-files-including-kompromats-against-clergy/", st: "Georgia Today" },
    asesinato: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    sabotaje: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tortura: { ev: 2, x: "Organizaciones de derechos humanos denunciaron golpizas a manifestantes detenidos en 2024 y 2025.", u: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Georgian_protests", st: "Wikipedia (síntesis de fuentes)" },
    secuestro: { ev: 2, x: "El periodista Mukhtarli denunció su secuestro en Tiflis con participación georgiana.", u: "https://oc-media.org/tag/ssg-files", st: "OC Media" },
    propaganda: { ev: 0, x: "Esta ficha no encontró campañas encubiertas documentadas de los servicios." },
    conflictos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    cultural: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    golpes: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    elecciones: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    partidos: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    diaspora: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    empresarios: { ev: 2, x: "Los archivos incluían seguimiento de operaciones bancarias de personas vigiladas.", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics", st: "OCCRP" },
    religiosos: { ev: 2, x: "Una unidad del SSG vigilaba a la jerarquía de la Iglesia ortodoxa, según los archivos.", u: "https://grass.org.ge/en/inmedia/big-brother-is-listening-leaked-state-security-files-show-total-surveillance", st: "GRASS" },
    armas: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    inteligencia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    tecnologia: { ev: 0, x: "Esta ficha no encontró casos documentados." },
    entrenamiento: { ev: 0, x: "Esta ficha no encontró casos documentados." }
  },
  dinero: {
    presupuesto: "El presupuesto del SSG es público en lo general, sin detalle de operaciones.",
    uso: "Vigilancia interna, antiterrorismo y personal.",
    ingresos: "Esta ficha no encontró ingresos propios.",
    empresas: "Esta ficha no encontró empresas de fachada documentadas.",
    bancos: "Esta ficha no encontró casos documentados.",
    crimen: "Esta ficha no encontró casos documentados.",
    cobertura: "Esta ficha no encontró organizaciones de cobertura documentadas."
  },
  fondos: [
    { k: "presupuesto", rol: "autor", ev: 2, d: "2024–2025", h: "El control del dinero extranjero", x: "Las leyes de agentes extranjeros obligan a ONG y medios a declarar sus fondos, con inspecciones y sanciones.", obj: "Controlar a la sociedad civil, según la oposición y la UE.", who: "Unión Europea y organizaciones de derechos humanos", u: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Georgian_protests", st: "Wikipedia (síntesis de fuentes)" }
  ],
  companies: [
    { n: "Georgian Dream (grupo de Ivanishvili)", c: "nacional", rubro: "Política y negocios", rel: "Poder político", x: "El fundador del partido de gobierno, el empresario Bidzina Ivanishvili, ejerce influencia sobre el aparato de seguridad, según la oposición." }
  ],
  struggles: [
    { a: "Sueño Georgiano", b: "Oposición y sociedad civil", k: "Con la política", stake: "El rumbo europeo y las libertades", state: "Abierta", x: "Protestas masivas desde 2024 y detenciones de opositores." },
    { a: "Gobierno", b: "Ex subjefe del SSG", k: "Interna", stake: "Secretos del servicio", state: "Abierta", x: "El ex funcionario detenido amenazó con revelar abusos del gobierno." }
  ],
  sources: [
    { t: "OCCRP: los archivos del SSG", u: "https://www.occrp.org/en/daily/15182-files-show-georgian-security-service-spied-on-diplomats-journalists-clerics" },
    { t: "Georgia Today: la filtración que sacudió al país", u: "https://georgiatoday.ge/the-clergy-diplomat-surveillance-leak-that-shook-the-country/" },
    { t: "Social Justice Center: la vigilancia del SSG", u: "https://socialjustice.org.ge/en/products/mamkhileblis-mier-faruli-tvaltvalis-metodebis-taobaze-gavrtselebuli-informatsia-sazogadoebis-totaluri-kontrolis-shesakheb-sagangasho-tsnobebs-sheitsavs" },
    { t: "Wikipedia: Russo-Georgian War", u: "https://en.wikipedia.org/wiki/Russo-Georgian_War" }
  ]
};
