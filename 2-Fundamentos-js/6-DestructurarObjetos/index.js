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

function imprimirMayus({ nombre }) {
  //var nombre = persona.nombre;
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirMayus(gumaro);
imprimirMayus(chikis);

