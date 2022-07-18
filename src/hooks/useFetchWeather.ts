import { useState, useEffect } from 'react';
import { WeatherData, WeatherForecast, GetWeatherRequest } from '../modules/weather/interfaces';
import { getActualWeather, getWeatherForecast } from '../modules/weather/services';

export default function useFetchWeather(position: GetWeatherRequest) {
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const actualWeatherData = await getActualWeather(position);
      const weatherForecastData = await getWeatherForecast(position);
      setWeather(actualWeatherData);
      setWeatherForecast(weatherForecastData);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position.city]);

  return {
    isLoading,
    weather,
    weatherForecast
  };
}
