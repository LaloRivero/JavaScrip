const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const fetchDataChallenge = async (url_api) => {
  try{
    const Alldata = await fetchData(url_api);
    const character = await fetchData(`${url_api}${Alldata.results[0].id}`);
    const origin = await  fetchData(character.origin.url);

    console.log(Alldata.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch(error){
    console.error(error);
  }
}

fetchDataChallenge(API);