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

/* PRIMERA FUNCION 

function imprimirMayus(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirMayus(gumaro.nombre);
imprimirMayus(chikis.nombre); */

/* SEGUNDA FUNCION 
function imprimirMayus(persona) {
  var nombre = persona.nombre.toUpperCase();
  console.log(nombre);
  //otra forma 
  console.log(persona.nombre.toUpperCase());
}

imprimirMayus(gumaro);
imprimirMayus(chikis);  */

function imprimirMayus({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirMayus(gumaro);
imprimirMayus(chikis);

