import { render, screen } from '@testing-library/react';
import { ForecastWeather } from './ForecastWeather';

describe('ForecastWeather component', () => {
  const data = [{
    date: '01/01/2022',
    icon: 'icon',
    status: 200,
    temp_max: 30,
    temp_min: 18,
  }];

  test('should be rendered', () => {
    render(<ForecastWeather items={data} />);
    const textEl = screen.getByText(/01\/01\/2022/i);
    expect(textEl).toBeInTheDocument();
  });
});
