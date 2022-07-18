import { Component, createRef } from 'react';
import { ImSearch } from 'react-icons/im';

interface Props {
  onSearchChange: any;
  location?: string;
}

export class Search extends Component<Props, {}> {
  inputRef: any;
  constructor(props: Props) {
    super(props);
    this.inputRef = createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: any) => {
    e.preventDefault();
    this.props.onSearchChange(this.inputRef.current.value); 
  }

  _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      this.props.onSearchChange(this.inputRef.current.value); 
    }
  }

  render() {
    const location = this.props.location;
    return (
      <div className="app__content__search box">
        <input ref={this.inputRef} type="text" value={location} placeholder="Insira a sua cidade" onKeyDown={this._handleKeyDown} />
        <ImSearch className="btn" size={18} onClick={this.handleChange} />
      </div>
    );
  }
}
