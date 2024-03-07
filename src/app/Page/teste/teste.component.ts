import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather-service.service';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent implements OnInit {
  city = 'Recife'; 
  weatherData: any; 

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  async getWeather() {
    try {
      this.weatherData = await this.weatherService.getWeather(this.city);
      this.weatherData.main.temp = this.weatherData.main.temp.toFixed(1); 
      console.log('Weather Data:', this.weatherData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  }
}
