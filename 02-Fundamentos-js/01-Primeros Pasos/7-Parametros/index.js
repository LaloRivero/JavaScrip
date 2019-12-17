/* creando nuevos objetos */

var gumaro = {
  nombre: 'Gumaro',
  apellido: 'Dogward',
  edad: 5
}

var chikis = {
  nombre: 'Chikis',
  apellido: 'Dogward',
  edad: 4
}

function imprimirMayus(persona) {
  //var nombre = persona.nombre; es lo mismo que abajo
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirMayus(gumaro);
imprimirMayus(chikis);

/* Reto de la clase pasada
function imprimirNomYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años");
}

imprimirNomYEdad(gumaro);
imprimirNomYEdad(chikis); */

/* Esta funcion modifica el elemento edad del objeto recibido 
function cumpleAnos(persona){
  persona.edad += 1;
} */

//Esta regresa un objeto nuevo que copia los elementos del objeto recibido anterior mente lo modifica y crea un objeto nuevo
function cumpleAnos(persona) {
  return {
    ...persona,
    edad: persona.edad += 1;
  }
}