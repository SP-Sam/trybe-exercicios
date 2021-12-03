import { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Pokedex from './components/Pokedex';
import pokemons from "./data";
import PokemonDetails from "./PokemonDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Pokedex pokemons={ pokemons }/>}/>
            <Route path="/pokemonDetails/:id" render={() => <PokemonDetails id={pokemons[0].id} />} />
          </Switch>
        </div>
      </BrowserRouter>
      <div className="App">
        <Pokedex pokemons={ pokemons }/>
      </div>
    )
  }
}

export default App;