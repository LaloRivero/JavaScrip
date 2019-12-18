//El servidor contesta de diferentes maneras, las respuestas no corresponden a los request en cuanto al orden
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data);
      })
      .fail(() => reject(id))
  })
}
function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}
async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7, 12, 35, 44, 15, 36, 17];
  var promesas = ids.map(id => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id)
  }
}
obtenerPersonajes();
