// function getHTML (options, callback) {
//   /* Add your code here */
// }

// function printHTML (html) {
//   console.log(html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };
//===========================================

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(response) {
    var data = [];
    response.on('data', function(chunk){
      data.push(chunk);
    }).on('end',function() {
      var buffer = Buffer.concat(data);
      callback(buffer.toString());
      });
  });
}

function printHTML (html) {
   console.log(html);
}

getHTML(requestOptions, printHTML);
