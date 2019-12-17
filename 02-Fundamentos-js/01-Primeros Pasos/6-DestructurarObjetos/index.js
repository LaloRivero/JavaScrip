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

function imprimirNomYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años");
}

imprimirNomYEdad(gumaro);
imprimirNomYEdad(chikis);