import { Component } from 'react';

interface Props {
  title: string;
}

export class Header extends Component<Props, {}> {
  render() {
    return (
      <header className="app__header">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
