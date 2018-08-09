//Install express server
const express = require('express');
const path = require('path');

const app = express();

const apiModule = require('./api');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/currency-converter'));

app.get('/api/rates', async (req, res) => {
  apiModule.prepareRatesJSON().then(data => {
    res.sendFile(apiModule.pathToJSON);
  });
});
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/dist/currency-converter/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

