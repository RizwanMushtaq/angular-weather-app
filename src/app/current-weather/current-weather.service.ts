import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { ICurrentWeather } from './icurrent-weather';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<any> {
    const uriParams = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', environment.appId);

    return this.httpClient.get(environment.baseUrl, { params: uriParams });
  }
}
