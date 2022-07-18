import { Component } from 'react';
import { WeatherForecast } from '../modules/weather/interfaces';

interface Props {
  items: WeatherForecast[] | undefined;
}

export class ForecastWeather extends Component<Props, {}> {
  render() {
    const data = this.props.items;

    return (
      <div className='app__content__forecast box'>
        <table>
          <thead>
            <tr style={{borderBottomColor: '#ccc'}}>
              <th style={{textAlign: 'left'}} colSpan={2}>Próximos dias</th>
              <th>Mín. / Máx.</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((_item, _index) => {
              return (
                <tr key={_index}>
                  <td>{_item.date}</td>
                  <td style={{textAlign: 'center'}}><img src={_item.icon} alt={_item.date} width={36} /></td>
                  <td style={{textAlign: 'center'}}>{_item.temp_min}° / {_item.temp_max}°</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
