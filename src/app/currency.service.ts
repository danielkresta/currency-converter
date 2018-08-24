import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CurrencyRates } from './currency-rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _ratesUrl = '/api/rates';

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyRates(): Observable<CurrencyRates[]> {

    return this.http.get<CurrencyRates[]>(this._ratesUrl)
      .pipe(
        tap(
          // rates => console.log('fetched rates'),
          // error => console.log(error || 'Server Error')
        )
      );
  }
}
