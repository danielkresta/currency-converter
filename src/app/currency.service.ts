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

  getCurrencyRates(): Observable<string> {
    const ratesUrl = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt';
    const options = { responseType: 'text' as 'json', withCredentials: true };

    return this.http.get<string>(ratesUrl, options)
    .pipe(
      tap(rates => console.log('fetched rates'))
    );
  }

}
