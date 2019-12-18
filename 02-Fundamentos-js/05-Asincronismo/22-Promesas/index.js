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
obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es el ${personaje.name}`)
  })
  .catch(onError)

