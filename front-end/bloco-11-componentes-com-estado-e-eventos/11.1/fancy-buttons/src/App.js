import { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.bt1 = this.bt1.bind(this);
    this.bt2 = this.bt2.bind(this);
    this.bt3 = this.bt3.bind(this);

    this.state = {
      button1: 0,
      button2: 0,
      button3: 0
    }
  }

  bt1(event) {
    this.setState((previous, _props) => ({
      button1: previous.button1 + 1
    }))

    if (this.state.button1 % 2 === 1) {
      event.target.style.backgroundColor = '#00ff00';
    } else {
      event.target.style.backgroundColor = '#fff'
    }
  }
  
  bt2(event) {
    this.setState((previous, _props) => ({
      button2: previous.button2 + 1
    }))

    if (this.state.button2 % 2 === 1) {
      event.target.style.backgroundColor = '#00ff00';
    } else {
      event.target.style.backgroundColor = '#fff'
    }
  }
  
  bt3(event) {
    this.setState((previous, _props) => ({
      button3: previous.button3 + 1
    }))

    if (this.state.button3 % 2 === 1) {
      event.target.style.backgroundColor = '#00ff00';
    } else {
      event.target.style.backgroundColor = '#fff'
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.bt1 } style={{backgroundColor: '#00ff00'}}>Botão 1 - {this.state.button1}</button>
        <button onClick={ this.bt2 } style={{backgroundColor: '#00ff00'}}>Botão 2 - {this.state.button2}</button>
        <button onClick={ this.bt3 } style={{backgroundColor: '#00ff00'}}>Botão 3 - {this.state.button3}</button>
      </div>
    );
  }
}

export default App;
