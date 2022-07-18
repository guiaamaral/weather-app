import { Component } from 'react';
import { ImNeutral } from 'react-icons/im';

interface Props {
    status: number | undefined;
}

export class Error extends Component<Props, {}> {
  render() {
    const msg = this.props.status?.toString() === '404' ? 'Verifique o nome da cidade, por favor.' : 'Ocorreu um problema. Por favor tente novamente mais tarde.';
    return (      
      <div className="app__content box error">
        <ImNeutral size={42} />
        <h3 style={{marginBottom: 0}}>Oops!</h3>
        <p>{msg}</p>
      </div>
    );
  }
}
