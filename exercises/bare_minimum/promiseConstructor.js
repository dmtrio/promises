/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');



// This function should retrieve the first line of the file at `filePath`


var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise (function (resolve, reject) {
    fs.readFile(filePath, 'utf8', (err, results) => {
      err ? err.code : null;
      var body = '';
      body += results;

      var firstLine = (body.split('\n'))[0];
      if (err) {
        reject(err);
      } 
      resolve(firstLine);
    });
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise ( (resolve, reject) => {
    request(url, (err, response, body) => {
      err ? err.code : null;
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
