import { CurrencyRates } from './currency-rates';

export class Convert {
  from: CurrencyRates;
  to: CurrencyRates;
  value: number;
  converted: string;
}

export class ConversionResult {
  value: string;
  code: string;
  currencyName: string;
}
