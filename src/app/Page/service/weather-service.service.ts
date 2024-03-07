import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ef0b2c2001185007ae598b57895d0420';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { }

  async getWeather(city: string) {
    try {
      const response = await axios.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
      const weatherData = response.data;
      weatherData.main.temp = this.convertKelvinToCelsius(weatherData.main.temp);
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  }

  private convertKelvinToCelsius(tempKelvin: number): number {
    return tempKelvin - 273.15;
  }
}
