const reqArray = process.argv.slice(2);
const fs = require('fs');


const request = require('request');
request(reqArray[0], function(error, response, body) {
  fs.stat(reqArray[1], (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Downloaded and saved ${stats.size} bytes to ${reqArray[1]}`);
    }
  });

  
  fs.writeFile(reqArray[1], body, function(err) {
    if (err) {
      return console.log(err);
    }
  });
});
