const express = require("express");
const https = require('https');
const http = require('http');

const app = express();
const port = 3000;

function getgames(){
    let data = [];
    //https.get('http://jsonplaceholder.typicode.com/users', res => {
      https.get('https://www.freetogame.com/api/games', res => {
        
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);
    
        res.on('data', chunk => {
          data.push(chunk);
        });
    
        res.on('end', () => {
          console.log('Response ended: ');
          console.log(data.toString());
          const users = JSON.parse(Buffer.concat(data).toString());
          return users;
          
    
        });
      }).on('error', err=> {
        console.log('Error: ', err.message);
      });
      return data;
  }

  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    let data = getgames();
    console.log(data);
    res.end(data.toString());
    //res.end(data.toString());
    //res.end(<h1>'Hello World!'</h1>);
  }).listen(8080); 

  

app.get("/https://www.freetogame.com/api/games", function (req, res) {
    
    let data = getgames();
    console.log(data.toString());
    res.end(data.toString());
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
