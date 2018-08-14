import { Component, OnInit } from '@angular/core';
import { CurrencyRates } from '../currency-rates';

import { CurrencyService } from '../currency.service';
import { Convert, ConversionResult } from '../convert';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  search: string;
  ratesPureData: string;
  rates: CurrencyRates[] = [];
  convert: Convert;
  conversionResult: ConversionResult[] = [];

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    // Get the data
    this.getCurrencyRates();
    // Add the CZK
    this.rates.push({
      country: 'Česká Republika',
      currency: 'koruna',
      amount: 1,
      code: 'CZK',
      rate: 1
    });
    // Parse the data
    this.parseCnbRates();
    this.convert = new Convert();
  }

  async getCurrencyRates() {
    /* Gets the currency rate data from the service */
    await this.currencyService.getCurrencyRates()
    .subscribe(ratesPureData => this.ratesPureData = ratesPureData);
  }

  parseCnbRates() {
    /* Takes the ratesPureData got from the CNB server and parses them into the rates class */
    console.log(this.ratesPureData);
    const data = JSON.parse(this.ratesPureData);
    for (let i = 2; i < data.length - 1; i++) {
      this.rates.push(
        data
        /*country: data.country,
        currency: data.currency,
        amount: data.amount,
        code: data.code,
        rate: data.rate*/
      );
    }
  }

  smartSearch(search: string) {
    if (search) {
      let numberToConvert: number[];
      // Delete the previous results
      this.conversionResult = [];
      // Set searched currency as conversion origin
      this.convert.from = this.getRateByCode(search);
      // Find a numeric value and convert it to a number
      const valueToConvert = search.match(/\d+/g);
      if (valueToConvert) {
        numberToConvert = valueToConvert.map(Number);
      }
      // Check to see if both a value and a currency have been found
      if (this.convert.from && numberToConvert) {
        this.convert.value = numberToConvert[0];
        this.convertAll();
        this.convert.converted = this.convert.value + ' ' + this.convert.from.code + ' =';
      } else {
        // In case the search conditions are not met or the term is deleted, empty the result
        this.conversionResult = [];
        this.convert.converted = '';
      }
    }
  }

  getRateByCode(code: string): CurrencyRates {
    // Return the currency rate class that is suitable to the imput code (i.e. "USD")
    return this.rates.find(function(value) {
      return code.trim().toUpperCase().search(value.code) >= 0;
    });
  }

  convertAll(): void {
    // Convert to all the possible currencies found in this.rates
    for (let i = 0; i < this.rates.length - 1; i++) {
      if (this.rates[i].code !== this.convert.from.code) {
        this.convert.to = this.rates[i];
        this.conversionResult.push({
          value: this.convertOne().toFixed(2),
          code: this.convert.to.code,
          currencyName: ''
        });
      }
    }
  }

  convertOne(): number {
    // Do a conversion according to values set in this.convert
    const that = this.convert;
    let result: number;
    result = that.value / that.from.amount * that.from.rate;
    // Convert from origin ('.from') to CZK
    if (that.to.code !== 'CZK') {
      // Convert from CZK to target ('.to')
      result = result * that.to.amount / that.to.rate;
    }
    return result;
  }
}
