// Relaciones entre los servicios de los países del monitor.
// t: coop (cooperación) · amb (ambigua) · enf (enfrentamiento)
// ESQUELETO: clasificación preliminar, sin fuentes todavía. x lleva una línea de prueba.
window.RELACIONES = [
  ["us", "uk", "coop"], ["us", "il", "coop"], ["us", "kr", "coop"], ["us", "ua", "coop"], ["us", "sa", "coop"], ["us", "ar", "coop"],
  ["us", "fr", "coop"], ["us", "de", "amb"], ["us", "tr", "amb"], ["us", "pk", "amb"], ["us", "in", "amb"], ["us", "ae", "coop"], ["us", "br", "amb"],
  ["us", "ru", "enf"], ["us", "cn", "enf"], ["us", "ir", "enf"], ["us", "kp", "enf"], ["us", "cu", "enf"],
  ["uk", "fr", "coop"], ["uk", "de", "coop"], ["uk", "ua", "coop"], ["uk", "ru", "enf"], ["uk", "cn", "enf"],
  ["fr", "de", "coop"], ["de", "ru", "enf"], ["fr", "ru", "enf"],
  ["il", "ir", "enf"], ["il", "ae", "coop"], ["il", "sa", "amb"], ["il", "ar", "coop"], ["il", "tr", "amb"],
  ["ru", "ir", "coop"], ["ru", "kp", "coop"], ["ru", "cu", "coop"], ["ru", "cn", "coop"], ["ru", "ua", "enf"], ["ru", "tr", "amb"], ["ru", "in", "amb"],
  ["cn", "pk", "coop"], ["cn", "ir", "coop"], ["cn", "in", "enf"], ["cn", "kp", "amb"],
  ["in", "pk", "enf"], ["sa", "ir", "enf"], ["sa", "ae", "coop"], ["sa", "pk", "coop"],
  ["kp", "kr", "enf"], ["ir", "ae", "amb"], ["cu", "br", "amb"], ["ar", "br", "amb"],
  ["va", "it", "coop", true], ["va", "ar", "amb"], ["va", "cn", "amb"], ["va", "us", "amb"]
].filter(r => !r[3]).map(([a, b, t]) => ({ a, b, t, sample: true }));
