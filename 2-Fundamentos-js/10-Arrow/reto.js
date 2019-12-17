var persona1 = {
  nombre: 'Arnoldo',
  edad: 22
}

var persona2 = {
  nombre: 'Allan',
  edad: 15
}

const MAYOR_EDAD = 21;

const menorDeEdad = ({ edad }) => edad <= MAYOR_EDAD;

function edad(persona) {
  if (menorDeEdad(persona)) {
    console.log(`${persona.nombre} es menor de edad`);
  } else {
    console.log(`${persona.nombre} es mayor de edad`);
  }
}