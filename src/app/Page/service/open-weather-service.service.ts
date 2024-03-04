import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private apiKey = 'ef0b2c2001185007ae598b57895d0420'; // Substitua com sua chave da API do OpenWeather

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(apiUrl);
  }

  // Outros métodos para buscar dados do clima por coordenadas, etc., podem ser adicionados aqui
}
