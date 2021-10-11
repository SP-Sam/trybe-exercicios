import { Component } from "react";

class Checkbox extends Component {
  render() {
    const { id, type, value, onChange, checked, text } = this.props;
    return(
      <label htmlFor={id}>
        <input 
          type={type}
          name={id}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          />
        {text}
      </label>
    )
  }
}

export default Checkbox;