import { CurrencyRates } from './currency-rates';

export interface Convert {
  from: CurrencyRates;
  to: CurrencyRates;
  value: number;
}
