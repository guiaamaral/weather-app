import { getActualWeather } from './getActualWeather';
import { GetWeatherRequest, GetActualWeatherResult, WeatherData } from '../interfaces';

describe('getActualWeather service', () => {
  let originFetch: any;
  beforeEach(() => { originFetch = (global as any).fetch; });
  afterEach(() => { (global as any).fetch = originFetch; });

  const mockResp: GetActualWeatherResult = {
    id: 1,
    name: 'São Paulo',
    weather: [{ description: 'Céu limpo', icon: '01d' }],
    main: { feels_like: 30, humidity: 10, temp_max: 31, temp_min: 18, temp: 29 },
    cod: 200,
    sys: { sunrise: 123456, sunset: 654321 },
    wind: { speed: 1 }
  };
  const response: WeatherData = {
    description: 'Céu limpo',
    feels_like: 30,
    humidity: 10,
    icon: 'http://openweathermap.org/img/wn/01d@2x.png',
    city: 'São Paulo',
    temp_max: 31,
    temp_min: 18,
    temp: 29,
    status: 200,
    sunrise: '7:17',
    sunset: '10:45',
    wind: 1
  };

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
    const result = await getActualWeather(params);
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
    const result = await getActualWeather(params);
    expect(result).toEqual(response);
  });
});
