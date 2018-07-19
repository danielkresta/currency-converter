import { CurrencyRates } from './currency-rates';

export class Convert {
  type: string;
  from: CurrencyRates;
  to: CurrencyRates;
  value: number;
}

export class ConversionResult {
  value: string;
  code: string;
  currencyName: string;
}
