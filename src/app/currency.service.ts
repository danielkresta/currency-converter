import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CurrencyRates } from './currency-rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyRates(): Observable<CurrencyRates[]> {
    const ratesUrl = '/api/rates';

    return this.http.get<CurrencyRates[]>(ratesUrl)
    .pipe(
      tap(rates => console.log('fetched rates'))
    );
  }

}
