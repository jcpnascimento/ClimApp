import { TestBed } from '@angular/core/testing';
import { WeatherService } from '../service/weather-service.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data', async () => {
    const data = await service.getWeather('');
    expect(data).toBeDefined();
    expect(data.main.temp).toBeDefined();
    expect(data.weather).toBeDefined();
    expect(data.weather.length).toBeGreaterThan(0);
  });
});
