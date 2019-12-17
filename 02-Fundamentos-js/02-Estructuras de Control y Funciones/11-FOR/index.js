const INCREMENTO = 0.2;
const TOTAL_DIAS = 365;
var persona = {
  nombre: 'Casey',
  apellido: 'Amparan',
  edad: 27,
  peso: 83.5
}
console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);
const aumentarDePeso = persona => persona.peso += INCREMENTO;
const bajarDePeso = persona => persona.peso -= INCREMENTO;

for (var i = 1; i < TOTAL_DIAS; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(persona);
  } else if (random > 0.25 && random < 0.5) {
    bajarDePeso(persona);
  }
}
console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}kg`);
