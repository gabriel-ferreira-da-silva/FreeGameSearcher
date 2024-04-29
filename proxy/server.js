var host1 = "http://localhost:4123/https://www.freetogame.com/api/games";
var host ="localhost";
var port = 4123;

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Enable CORS for all routes
app.use(cors());


app.get('/games', async (req, res) => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games');
      res.json(response.data);
      
    } catch (error) {
      console.log(error);
      res.write(error);
      res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
    }
    res.end();
  });

  app.get('/game/:id', async (req, res) => {
    try {
      const gameId = req.params.id;
      const response = await axios.get('https://www.freetogame.com/api/game?id='+gameId);
      res.json(response.data);
      
    } catch (error) {
      console.log(error);
      res.write(error);
      res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
    }
    res.end();
  });


app.listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

app.get('/', ()=>{
    console.log("hello");
});