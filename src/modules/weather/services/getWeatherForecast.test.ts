import { getWeatherForecast } from './getWeatherForecast';
import { GetWeatherRequest, GetWeatherForecastResult, WeatherForecast } from '../interfaces';

describe('getWeatherForecast service', () => {
  let originFetch: any;
  beforeEach(() => { originFetch = (global as any).fetch; });
  afterEach(() => { (global as any).fetch = originFetch; });

  const mockResp: GetWeatherForecastResult = {
    list: [{
      dt: 1643684400,
      main: { feels_like: 30, temp_min: 18, temp_max: 31 },
      weather: [{ icon: '01d' }],
    }, {
      dt: 2524618800,
      main: { feels_like: 30, temp_min: 18, temp_max: 31 },
      weather: [{ icon: '01d' }],
    }, {
      dt: 2524680000,
      main: { feels_like: 30, temp_min: 18, temp_max: 31 },
      weather: [{ icon: '01d' }],
    }, {
      dt: 2524705200,
      main: { feels_like: 30, temp_min: 18, temp_max: 31 },
      weather: [{ icon: '01d' }],
    }],
    cod: 200,
    message: '0'
  };
  const response: WeatherForecast[] = [{
    date: 'Sábado',
    icon: 'http://openweathermap.org/img/wn/01d@2x.png',
    status: 200,
    temp_max: 31,
    temp_min: 18
  }, {
    date: 'Domingo',
    icon: 'http://openweathermap.org/img/wn/01d@2x.png',
    status: 200,
    temp_max: 31,
    temp_min: 18
  }];

  test('should fetch API search by city', async () => {
    const params: GetWeatherRequest = {
      city: 'São Paulo'
    };
    const mockedFetch = jest.fn(() => 
      Promise.resolve({
        json: () => mockResp
      })
    );
    (global as any).fetch = mockedFetch;
    const result = await getWeatherForecast(params);
    expect(result).toEqual(response);
  });

  test('should fetch API search by lat/long', async () => {
    const params: GetWeatherRequest = {
      lat: -1, long: -1
    };
    const mockedFetch = jest.fn(() => 
      Promise.resolve({
        json: () => mockResp
      })
    );
    (global as any).fetch = mockedFetch;
    const result = await getWeatherForecast(params);
    expect(result).toEqual(response);
  });
});
