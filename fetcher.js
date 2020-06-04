const reqArray = process.argv.slice(2);
const fs = require('fs');


const request = require('request');
request(reqArray[0], function(error, response, body) {
  if (error !== null) {
    console.log('Error: The URL is not valid.');
  } else {
    fs.stat(reqArray[1], (error, stats) => {
      if (error) {
        console.log('Error: File path does not exist.');
      } else {
        fs.writeFile(reqArray[1], body, function(err) {
          if (err) {
            return console.log(err);
          }
        });
        console.log(`Downloaded and saved ${stats.size} bytes to ${reqArray[1]}`);
      }
    });
  }
});
