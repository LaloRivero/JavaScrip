let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://swapi.co/api/'
//obtener datos -> FetchData
function fetchData(api_url, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', api_url, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const error = new Error('Error ' + api_url);
        callback('error', null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, function (error1, starships) {
  if (error1) {
    return console.error(error1);
  }
  fetchData(starships.starships + '10/', function (error2, starship) {
    if (error2) {
      return console.error(error2);
    }
    fetchData(starship.pilots[0], function (error3, pilot) {
      if (error3) {
        return console.error(error3);
      }
      console.log(starship.name);
      console.log(pilot.name);
    })
  })
})
