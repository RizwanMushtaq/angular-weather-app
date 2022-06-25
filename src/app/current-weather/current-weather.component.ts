import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from './icurrent-weather';
import { CurrentWeatherService } from './current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private currentWeatherService: CurrentWeatherService) {}

  ngOnInit(): void {
    this.currentWeatherService
      .getCurrentWeather('Munich', 'de')
      .subscribe((data) => {
        console.log(data);
        this.current = { ...data };
      });
  }
}
