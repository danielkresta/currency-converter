//Install express server
const express = require('express');
const path = require('path');
var fs = require('fs');
var http = require('http');

const pathToJSON = './currencyRates.json';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/currency-converter'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/currency-converter/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Prepare the API
prepareRatesJSON();

function prepareRatesJSON() {
  fs.stat(pathToJSON, (err, stats) => {
    const msecsInDay = 1000*60*60*24;   // Number of miliseconds in a day
    const timeDiff = Date.now() - stats.mtime;  // Time difference between the current time and the last file modification

    if (err) {
      console.log(err)
      return 0;
    }

    if (timeDiff > msecsInDay || stats.size < 1) {
      // In case the file has not been changed for more than 1 day or the file is empty,
      // refresh it from the CNB
      refreshData();
    }

    // Get the data and prepare the JSON
    startApi();
  });

  return 1;
}

function refreshData() {
  http.get('http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    // Write the fresh data into the .json and then start the API
    fs.writeFile(pathToJSON, JSON.stringify( cnbStringToObject(data) ), "utf8", startApi);
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

function startApi() {
  const port = 8000;
  fs.readFile(pathToJSON, "utf8", (err, data) => {
    const server = http.createServer((req, res) => {
      if (req.url === '/api/rates') {
        res.write(data);
        res.end();
      }
    });
    server.listen(port);
    console.log("Listening on port", port, "...");
  });
}

function cnbStringToObject(data) {
  let countryRate = [];
  let currencyRates =  [];
  const rateArray = data.split('\n');
  for (let i = 2; i < rateArray.length - 1; i++) {
    countryRate = rateArray[i].split('|');
    currencyRates.push({
      country: countryRate[0],
      currency: countryRate[1],
      amount: Number(countryRate[2]),
      code: countryRate[3],
      rate: Number(countryRate[4].replace(/,/g, '.'))
    });
  }
  return currencyRates;
}
