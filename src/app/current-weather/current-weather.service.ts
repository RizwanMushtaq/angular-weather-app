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

    return this.httpClient
      .get(environment.baseUrl, { params: uriParams })
      .pipe(map((data) => this.transformToICurrentWeather(data)));
  }

  private transformToICurrentWeather(data: any): ICurrentWeather {
    console.log(data);
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      temperature: this.convertKelvinToCelsius(data.main.temp),
      description: data.weather[0].description,
    };
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
