import { render, screen } from '@testing-library/react';
import { ActualWeather } from './ActualWeather';


describe('ActualWeather component', () => {
  const weather = {
    description: "Algumas nuvens",
    feels_like: 20,
    humidity: 82,
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    city: "São Paulo",
    temp_max: 22,
    temp_min: 19,
    temp: 19,
    status: 200,
    sunrise: "6:46",
    sunset: "17:38",
    wind: 3.6
  };

  test('should be rendered', () => {
    render(<ActualWeather items={weather} />);
    const textEl = screen.getByText(/Sensação térmica/i);
    expect(textEl).toBeInTheDocument();
  });
});
