import { Component } from 'react';

class Input extends Component {
  render() {
    const { id, type, value, onChange, text } = this.props;

    let error = undefined;
    if (value.length > 100) error = 'Muitos caracteres';
    if (value.length < 1) error = 'Preencha este campo'

    return (
      <label htmlFor={id}>
        {text}
        <input 
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={onChange}
        />
        <div>{error ? error : ''}</div>
      </label>
    )
  }
}

export default Input;
