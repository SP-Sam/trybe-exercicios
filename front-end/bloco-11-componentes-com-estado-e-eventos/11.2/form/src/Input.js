import { Component } from 'react';

class Input extends Component {
  render() {
    const { id, type, value, onChange, text } = this.props;

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
      </label>
    )
  }
}

export default Input;
