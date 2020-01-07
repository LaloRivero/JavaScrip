let fetchData = require('../utils/fetchData')
const API = 'https://swapi.co/api/'

fetchData(API)
  .then(starships => {
    console.log(starships.starships);
    return fetchData(starships.starships);
  })
  .then(AllShipsInfo => {
    console.log(AllShipsInfo.results[3].name);
    return fetchData(AllShipsInfo.results[3].pilots[0]);
  })
  .then(pilot => {
    console.log(pilot.name);
  })
  .catch(error => {
    console.error(error);
  });
