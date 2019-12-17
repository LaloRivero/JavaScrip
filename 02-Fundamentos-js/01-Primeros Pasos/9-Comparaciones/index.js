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

function imprimirProfesiones(persona) {
  //Muestra nombre y apellido
  console.log(`${persona.nombre} ${persona.apellido} es:`);
  if (persona.ingeniero === true) {
    console.log('Ingeniero');
  }
  if (persona.cocinero === true) {
    console.log('Cocinero');
  }
  if (persona.cantante === true) {
    console.log('Cantante');
  }
  if (persona.dj === true) {
    console.log('Dj');
  }
  if (persona.guitarrista === true) {
    console.log('Guitarrista');
  }
  if (persona.foto === true) {
    console.log('Fotografo');
  }
  console.log("No es:");

  if (persona.ingeniero === false) {
    console.log('Ingeniero');
  }
  if (persona.cocinero === false) {
    console.log('Cocinero');
  }
  if (persona.cantante === false) {
    console.log('Cantante');
  }
  if (persona.dj === false) {
    console.log('Dj');
  }
  if (persona.guitarrista === false) {
    console.log('Guitarrista');
  }
  if (persona.foto === false) {
    console.log('Fotografo');
  }
}

function mayorEdad(persona) {
  edad = persona.edad;
  if (edad >= 18) {
    console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} ${persona.apellido} es menor de edad`);
  }
}

imprimirProfesiones(sebastian);
mayorEdad(sebastian);
mayorEdad(hector);
