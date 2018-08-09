const fs = require('fs');
const http = require('http');
const axios = require('axios');
const util = require('util');

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
  });

  return 1;
}

function refreshData() {
  const url = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt'
  const response = axios.get(url);
  const data = response.data;

  fs.writeFile(pathToJSON, JSON.stringify( cnbStringToObject(data) ), "utf8");

}

// TODO: remove
function startApi() {
  const port = 3000;
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

module.exports = {
  pathToJSON: './currencyRates.json',
  prepareRatesJSON
}
