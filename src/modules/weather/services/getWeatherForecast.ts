import { WeatherForecast, GetWeatherRequest, GetWeatherForecastResult } from '../interfaces';

const UNIT = 'metric';
const LANGUAGE = 'pt_br';
const DAYS_OF_WEEK = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export const getWeatherForecast = async (params: GetWeatherRequest): Promise<WeatherForecast[]> => {
  const { city, long, lat, unit = UNIT, lang = LANGUAGE } = params;
  let url = `https://api.openweathermap.org/data/2.5/forecast?lang=${lang}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  if (city) {
    url += `&q=${city}`;
  } else {
    url += `&lat=${lat}&lon=${long}`;
  }

  const fetchResult = await fetch(url);
  const resultJson: GetWeatherForecastResult = await fetchResult.json();
  
  let lastDay: number;
  const result: WeatherForecast[] = [];
  resultJson.list.forEach(item => {
    const today = new Date().setHours(23,59,59,59);
    if (today > (item.dt * 1000)) return;

    const weatherDate = new Date(item.dt * 1000);
    const icon = `http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`;
    if (lastDay !== weatherDate.getDay()) {
      result.push({
        date: DAYS_OF_WEEK[weatherDate.getDay()],
        icon: icon,
        temp_max: Math.round(item.main.temp_max),
        temp_min: Math.round(item.main.temp_min)
      })
    }
    lastDay = weatherDate.getDay();
  });

  return result;
}
