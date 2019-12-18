const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }
const onPeopleResponse = function (character) {
  console.log(`Hola yo soy, ${character.name}`);
}
/* for (var i = 1; i <= 100; i++) {
  $.get(`${API_URL}${PEOPLE_URL.replace(':id', i)}`, { crossDomain: true }, function (data) {
    console.log(`Hola yo soy, ${data.name}`)
  })
} */

$.get(LUKE_URL, opts, onPeopleResponse);