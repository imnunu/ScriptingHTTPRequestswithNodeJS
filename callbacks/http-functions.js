var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */

  https.get(options, function(response) {
    var data = [];
    response.on('data', function(chunk){
      data.push(chunk);
    }).on('end',function() {
      var buffer = Buffer.concat(data);
      callback(buffer.toString());
      });
  });
};