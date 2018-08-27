import { Component, OnInit } from '@angular/core';
import { CurrencyRates } from '../currency-rates';

import { CurrencyService } from '../currency.service';
import { Convert } from '../convert';
import { ConversionResult } from '../conversion-result';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  search: string;
  rates: CurrencyRates[] = [];
  conversionResult: ConversionResult[] = [];

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    // Add the CZK
    this.rates = this.rates.concat({
      country: 'Česká Republika',
      currency: 'koruna',
      amount: 1,
      code: 'CZK',
      rate: 1
    });
    // Get the data
    this.getCurrencyRates();
  }

  onSelect(result): void {
    this.search = result.value + ' ' + result.code;
    this.smartSearch(this.search);
  }

  async getCurrencyRates() {
    /* Gets the currency rate data from the service */
    await this.currencyService.getCurrencyRates()
    .subscribe(data => {
      this.rates = this.rates.concat(data);
    }, err => {
      console.log('Could not load Currency Rates Data \n', err.message);
    }
  );
  }

  smartSearch(search: string) {
    const convert: Convert = {
      from: null,
      to: null,
      value: 0,
    };
    if (search) {
      let numberToConvert;
      // Delete the previous results
      this.conversionResult = [];
      // Set searched currency as conversion origin
      convert.from = this.getRateByCode(search);
      // Find a numeric value and convert it to a number; also replace decimal comma by a dot
      const valueToConvert = search.replace(/,/g, '.').match(/\d+((\.)\d{1,2})?/g);
      if (valueToConvert) {
        numberToConvert = valueToConvert.map(Number)[0];
      }
      // Check to see if both a value and a currency have been found
      if (convert.from && numberToConvert) {
        convert.value = numberToConvert;
        this.convertAll(convert);
      } else {
        // In case the search conditions are not met or the term is deleted, empty the result
        this.emptyResults();
      }
    } else {
      this.emptyResults();
    }
  }

  getRateByCode(code: string): CurrencyRates {
    // Return the currency rate class that is suitable to the imput code (i.e. "USD")
    code = code.trim().toUpperCase();
    return this.rates.find(function(value) {
      return code.search(value.code) >= 0;
    });
  }

  convertAll(convert: Convert): void {
    // Convert to all the possible currencies found in this.rates
    for (let i = 0; i < this.rates.length - 1; i++) {
      if (this.rates[i].code !== convert.from.code) {
        convert.to = this.rates[i];
        this.conversionResult.push({
          value: this.convertOne(convert).toFixed(2),
          code: convert.to.code,
          currencyName: ''
        });
      }
    }
  }

  convertOne(convert: Convert): number {
    // Do a conversion according to values set in this.convert
    const that = convert;
    let result: number;
    result = that.value / that.from.amount * that.from.rate;
    // Convert from origin ('.from') to CZK
    if (that.to.code !== 'CZK') {
      // Convert from CZK to target ('.to')
      result = result * that.to.amount / that.to.rate;
    }
    return result;
  }

  emptyResults(): void {
    this.conversionResult = [];
  }
}
