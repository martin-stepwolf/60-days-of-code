let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'https://rickandmortyapi.com/api/character/';

// In this case the function does not have the function as parameter
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if(xhttp.readyState === 4){
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error ' + url_api))
      }
    });
    xhttp.send();
  });
}

fetchData(api)
  .then(data => {
    console.log(data.info.count);
    return fetchData(`${api}${data.results[0].id}`);
  })
  .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension);
  })
  .catch(err => {
    console.log(err);
  })
//   This program does the same like the past one
// But the code is better and the callback hell disappears