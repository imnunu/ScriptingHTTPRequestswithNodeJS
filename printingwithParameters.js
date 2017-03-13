
// function getAndPrintHTML (options) {
//   /* Add your code here */
// }
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };
//===========================================

var https = require('https');

function getAndPrintHTML (options) {
  /* Add your code here */
  https.get(requestOptions, function(response) {
    var data = [];
    response.on('data', function(chunk){
      data.push(chunk);
    }).on('end',function() {
      var buffer = Buffer.concat(data);
      console.log(buffer.toString());
      });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);