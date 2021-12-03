import { Component } from "react";
import './App.css';

import Pokedex from './components/Pokedex';
import pokemons from "./data";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemons={ pokemons }/>
      </div>
    )
  }
}

export default App;