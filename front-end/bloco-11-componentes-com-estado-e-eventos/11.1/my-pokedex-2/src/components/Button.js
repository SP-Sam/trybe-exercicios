import { Component } from 'react';

class Button extends Component {
  render() {
    const { className, onClick, text } = this.props
    return (
      <button 
        className={className} 
        onClick={onClick}>
        {text}
      </button>
    )
  }
}

export default Button;