const fetchData = require('../utils/fetchData');
const API = 'https://swapi.co/api/';

const fetch = async(url_api, ship) => {
  try{
    const allData = await fetchData (url_api);
    const starship = await fetchData(`${allData.starships}${ship}`);
    const pilot = await fetchData(starship.pilots[0]);
    console.log(allData.starships);
    console.log(starship.name);
    console.log(pilot.name);
  }catch (error){
    console.error(error);
  }
}
fetch(API, '10/');