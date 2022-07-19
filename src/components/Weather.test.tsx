import { render, screen, waitFor } from '@testing-library/react';
import { Weather } from './Weather';
import { GetActualWeatherResult } from '../modules/weather/interfaces';

describe('Weather component', () => {
  let originFetch: any;
  beforeEach(() => { originFetch = (global as any).fetch; });
  afterEach(() => { (global as any).fetch = originFetch; });

  test('should be rendered', () => {
    render(<Weather location={'Teste'} />);
    const loadingEl = screen.getByTitle(/Carregando/i);
    expect(loadingEl).toBeInTheDocument();
  });

  test('should render Error component when API return status 404', async () => {
    const mockResp = {cod: 404};
    const mockedFetch = jest.fn(() => 
      Promise.resolve({
        json: () => mockResp
      })
    );
    (global as any).fetch = mockedFetch;
    render(<Weather location={'Teste'} />);
    const errorTitle = await waitFor(() => screen.findByText(/Verifique o nome da cidade/i), { timeout: 2000 });
    expect(errorTitle).toBeInTheDocument();
    expect(mockedFetch).toBeCalled();
  });

  test('should render Error component when API return status 429', async () => {
    const mockResp = {cod: 429};
    const mockedFetch = jest.fn(() => 
      Promise.resolve({
        json: () => mockResp
      })
    );
    (global as any).fetch = mockedFetch;
    render(<Weather location={'Teste'} />);
    const errorTitle = await waitFor(() => screen.findByText(/Ocorreu um problema/i), { timeout: 2000 });
    expect(errorTitle).toBeInTheDocument();
    expect(mockedFetch).toBeCalled();
  });

  test('should render ActualWeather and ForecastWeather components', async () => {
    const mockResp: GetActualWeatherResult = {
      id: 1,
      name: 'São Paulo',
      weather: [{ description: 'Céu limpo', icon: '01d' }],
      main: { feels_like: 30, humidity: 10, temp_max: 31, temp_min: 18, temp: 29 },
      cod: 200,
      sys: { sunrise: 123456, sunset: 123456 },
      wind: { speed: 1 }
    };
    const mockedFetch = jest.fn(() => 
      Promise.resolve({
        json: () => mockResp
      })
    );
    (global as any).fetch = mockedFetch;
    render(<Weather location={'São Paulo'} />);
    const errorTitle = await waitFor(() => screen.findByText(/Sensação térmica/i), { timeout: 2000 });
    expect(errorTitle).toBeInTheDocument();
    expect(mockedFetch).toBeCalled();
  });
});
