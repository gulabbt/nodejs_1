require("dotenv").config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'files', 'sampleFile.txt');
fs.writeFile('helloworld.txt', 'Zdravo kako ste!', function (err) {
if (err) return console.log("404 Not Found");
 console.log('Zdravo kako ste > helloworld.txt');
  
});

const host = process.env.HOST;
const port = process.env.PORT;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    
  });
  //server.listen(3000);
//console.log('Listening on port 3000...');
server.listen(port,host, () =>{ 
console.log(`Server running at http://${host}:${port}/`);
});  
