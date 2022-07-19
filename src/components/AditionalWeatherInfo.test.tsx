import { render, screen } from '@testing-library/react';
import { AditionalWeatherInfo } from './AditionalWeatherInfo';
import { WiSunrise, WiSunset } from 'react-icons/wi';

describe('AditionalWeatherInfo component', () => {
  const data = [{
    title: 'Título 1',
    icon:  <WiSunrise />,
    info: '1'
  }, {
    title: 'Título 2',
    icon: <WiSunset />,
    info: '1'
  }];

  test('should be rendered', () => {
    render(<AditionalWeatherInfo items={data} />);
    const textEl = screen.getAllByText(/Título/i);
    expect(textEl).toHaveLength(2);
  });
});
