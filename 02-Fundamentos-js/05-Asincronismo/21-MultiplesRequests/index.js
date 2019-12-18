//El servidor contesta de diferentes maneras, las respuestas no corresponden a los request en cuanto al orden
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }
const onPeopleResponse = function (character) {
  console.log(`Hola yo soy, ${character.name}`);
}
function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse);
}
for (var i = 1; i <= 100; i++) {
  obtenerPersonaje(i);
}