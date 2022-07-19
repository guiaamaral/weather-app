import useFetchWeather from '../hooks/useFetchWeather';
import { GetWeatherRequest } from '../modules/weather/interfaces';
import { ActualWeather } from './ActualWeather';
import { Error } from './Error';
import { ForecastWeather } from './ForecastWeather';
import { ImSpinner8 } from 'react-icons/im';

interface Props {
  location: string;
}

export function Weather(props: Props) {
  const loc: GetWeatherRequest = {
    city: props.location
  }

  const data = useFetchWeather(loc);
  if (data.isLoading) {
    return (
      <div className="app__content center">
        <ImSpinner8 className="rotate" size={42} title="Carregando" />
      </div>
    );
  } else {
    if (data.weather?.status !== 200) {
      return (
        <Error status={data.weather?.status} />
      );
    } else {
      return (
        <div className="app__content">
          <ActualWeather items={data.weather} />
          <ForecastWeather items={data.weatherForecast} />
        </div>
      );
    }
  }
}

export default Weather;
