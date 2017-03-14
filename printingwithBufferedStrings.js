// function getAndPrintHTML () {
//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step2.html'
//   };
//   /* Add your code here */
// }
//=========================================
var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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
getAndPrintHTML();
