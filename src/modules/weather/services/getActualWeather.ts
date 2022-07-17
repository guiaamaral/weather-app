import { WeatherData, GetWeatherRequest, GetActualWeatherResult } from '../interfaces';

const UNIT = 'metric';
const LANGUAGE = 'pt_br';

export const getActualWeather = async (params: GetWeatherRequest): Promise<WeatherData> => {
  const { city, long, lat, unit = UNIT, lang = LANGUAGE } = params;
  let url = `https://api.openweathermap.org/data/2.5/weather?lang=${lang}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  if (city) {
    url += `&q=${city}`;
  } else {
    url += `&lat=${lat}&lon=${long}`;
  }

  const fetchResult = await fetch(url);
  const resultJson: GetActualWeatherResult = await fetchResult.json();

  const description = resultJson.weather[0]?.description.substring(0,1).toUpperCase() + resultJson.weather[0]?.description.substring(1).toLowerCase();
  const icon = `http://openweathermap.org/img/wn/${resultJson.weather[0]?.icon}@2x.png`;
  const result: WeatherData = {
    description: description,
    feels_like: Math.round(resultJson.main.feels_like),
    humidity: resultJson.main.humidity,
    icon: icon,
    city: resultJson.name,
    temp_max: Math.round(resultJson.main.temp_max),
    temp_min: Math.round(resultJson.main.temp_min),
    temp: Math.round(resultJson.main.temp),
    sunrise: getHourAndMinute(resultJson.sys.sunrise),
    sunset: getHourAndMinute(resultJson.sys.sunset),
    wind: resultJson.wind.speed
  }

  return result;
}

const getHourAndMinute = (date: number) => {
  const unixToTimestamp = new Date(date * 1000);
  return `${unixToTimestamp.getHours()}:${unixToTimestamp.getMinutes()}`;
}
