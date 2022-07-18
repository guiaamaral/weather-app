import { Component } from 'react';

interface Props {
  items: {
    title: string;
    icon: JSX.Element;
    info: string | undefined;
  }[];
}

export class AditionalWeatherInfo extends Component<Props, {}> {
  render() {
    const data = this.props.items;
    return (
      <div className='app__content__today__add box'>
        {data.map(item => <p key={item.title}>{item.title}<strong>{item.icon} {item?.info}</strong></p>)}
      </div>
    );
  }
}
