import { Component, OnInit } from '@angular/core';
import { CurrencyRates } from '../currency-rates';

import { CurrencyService } from '../currency.service';
import { RATES } from '../offline-rates';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  search: string;
  ratesPureData: string;
  rates: CurrencyRates[] = [];

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    // Get the data
    this.getCurrencyRates();
    // Parse the data
    this.parseCnbRates();
  }

  getCurrencyRates(): void {
    /* Gets the currency rate data from the service, if no data are received, the offline data from /offline-rates are used */
    this.currencyService.getCurrencyRates()
    .subscribe(ratesPureData => this.ratesPureData = ratesPureData);
    if (!this.ratesPureData) {
      this.ratesPureData = RATES;
    }
  }

  parseCnbRates() {
    /* Takes the ratesPureData got from the CNB server and parses them into the rates class */
    let countryRate: string[];
    const rateArray = this.ratesPureData.split('\n');
    for (let i = 2; i < rateArray.length - 1; i++) {
      countryRate = rateArray[i].split('|');
      this.rates.push({
        country: countryRate[0],
        currency: countryRate[1],
        amount: Number(countryRate[2]),
        code: countryRate[3],
        rate: Number(countryRate[4].replace(/,/g, '.'))
      });
    }
  }
}
