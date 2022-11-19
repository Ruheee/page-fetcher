const fs = require("fs");
const request = require("request");


const file = process.argv[3]
const domain = process.argv[2]

request(domain, (error, response, body) => {
  if (error) {
    conosole.log('error:', error);
  }
  fs.writeFile(file, body, err => {
    if(err) {
      console.log(err)
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
 })
});