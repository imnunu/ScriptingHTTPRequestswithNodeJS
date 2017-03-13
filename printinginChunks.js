// var https = require('https');

// var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };

// https.get(requestOptions, function(response) {
//   var bodyChunks = [];
//   response.on('data', function(chunk){
//     bodyChunks.push(chunk);
//   }).on('end', function() {
//     var body = Buffer.concat(bodyChunks);
//     console.log('BODY: ' + body);
//   })
// });


var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

var getAndPrintHTMLChunks = function(response) {
// https.get(requestOptions, function(response) {

  response.on('data', function(chunk){
    // console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString() + '\n');
  })
};

https.request(requestOptions, getAndPrintHTMLChunks).end();



// function getAndPrintHTMLChunks () {

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };

//   /* Add your code here */

// }





