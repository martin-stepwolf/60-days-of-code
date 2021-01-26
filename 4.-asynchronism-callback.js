// The past way to make request, nowadays fetch is used with promises
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'https://rickandmortyapi.com/api/character/';

// When a function get a function as parameter it is called "higher-order function"
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);
    // open(method, parameter, if the verification is asynchronous (tru by default))

    // When the state changes the next function starts
    xhttp.onreadystatechange = function (event) {
        /*
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        */
        if (xhttp.readyState === 4) {
            /*
            1xx: The request is processed
            2xx: request was received, accepted and processed
            3xx: Aditional action to complete the request (redirect in general)
            4xx: Client error
            5xx: Server error
            */
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    // The request is sent
    xhttp.send();
}

// We ask al the characters
fetchData(api, (error1, data1) => {
    if (error1) return console.error(error1);
    console.log('first character id: ' + data1.results[0].id);
    // We ask the if of the first character
    fetchData(api + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        console.log('its url: ' + data2.origin.url);
        // At the final we ask its dimension
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log('its dimension: ' + data3.dimension);
//-------> callback hell
        });
    });
});