var sebastian = {
  nombre: 'Sebastian',
  apellido: 'Lopez',
  edad: 20,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  foto: true
}
var hector = {
  nombre: 'Hector',
  apellido: 'Cano',
  edad: 15,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  foto: true
}
const MAYOR_EDAD = 18;

/* 
const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYOR_EDAD;
} */
//esta es una arrow function y en este caso hace lo mismo que lo se esta haciendo arriba
/* 
const esMayorDeEdad = persona =>{
  return persona.edad >= MAYOR_EDAD;
} */
// si una arrow function devuelve un valor solamte se puede borrar el return y dejar solo lo que devuelve
const esMayorDeEdad = persona => persona.edad >= MAYOR_EDAD;

function imprimirSiMayorEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} ${persona.apellido} es menor de edad`);
  }
}

imprimirSiMayorEdad(sebastian);
imprimirSiMayorEdad(hector);


