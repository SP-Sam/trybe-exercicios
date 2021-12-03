import { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <div className='pokedex'>
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} name={pokemon.name} image={pokemon.image} type={pokemon.type} averageWeight={pokemon.averageWeight}/>
        ))}
      </div>
    );
  }
}

export default Pokedex;