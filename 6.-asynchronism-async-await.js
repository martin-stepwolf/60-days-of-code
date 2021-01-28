let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// If a value wont be updated is better use capital letters
let API = 'https://rickandmortyapi.com/api/character/';

// In this case the function does not have the function as parameter
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error ' + url_api))
      }
    });
    xhttp.send();
  });
}

const functionLoad = async (url_api) => {
  console.time();
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    const result = { count: data.info.count, name: character.name, dimension: origin.dimension }
    console.table(result);
  } catch {
    console.log(error)
  }
  console.timeEnd()
}

functionLoad(API);