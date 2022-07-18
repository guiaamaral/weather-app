import { Component } from 'react';
import { WeatherData } from '../modules/weather/interfaces';
import { AditionalWeatherInfo } from './AditionalWeatherInfo';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { WiSunrise, WiSunset, WiStrongWind, WiHumidity } from 'react-icons/wi';

interface Props {
  items: WeatherData | undefined;
}

export class ActualWeather extends Component<Props, {}> {
  render() {
    const data = this.props.items;
    const firstBox = [{
      title: "Nascer do Sol",
      icon: <WiSunrise size={24} />,
     info: data?.sunrise
    }, {
      title: "Pôr do Sol",
      icon: <WiSunset size={24} />,
      info: data?.sunset
    }];
    const secondBox = [{
      title: "Vento",
      icon: <WiStrongWind size={24} />,
      info: `${data?.wind} km/h`
    }, {
      title: "Umidade",
      icon: <WiHumidity size={24} />,
      info: `${data?.humidity}%`
    }];

    return (
      <div>
        <div className="app__content__today box">
          <div>
            <h1>{data?.temp}°C</h1>
            <h3><FaMapMarkerAlt size={16} /> {data?.city}</h3>
            <p>{data?.temp_min}° / {data?.temp_max}°<br/>Sensação térmica: {data?.feels_like}°C</p>
          </div>
          <div>
            <img src={data?.icon} alt={data?.description} />
            <p>{data?.description}</p>
          </div>
        </div>
        <AditionalWeatherInfo items={firstBox}/>
        <AditionalWeatherInfo items={secondBox}/>
      </div>
    );
  }
}
