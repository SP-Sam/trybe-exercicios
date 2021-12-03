import { Component } from "react";

import Pokemon from "./Pokemon";
import Button from './Button';

class Pokedex extends Component {
  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);
    this.getPokemonByTybe = this.getPokemonByTybe.bind(this);
    this.fetchFilteredPokemons = this.fetchFilteredPokemons.bind(this);

    this.state = {
      pokemonIndex: 0,
      pokemonType: 'all'
    }
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { pokemonType } = this.state;

    return pokemons.filter(pokemon => {
      if (pokemonType === 'all') return true;
      return pokemon.type === pokemonType;
    })
  }
  
  getPokemonByTybe(type) {
    this.setState({
      pokemonType: type,
      pokemonIndex: 0
    })
  }

  nextPokemon(length) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % length
    }))
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemon}/>

        <div className="buttons-area">
          <Button className="button-fire" onClick={() => this.getPokemonByTybe('Fire')} text="Fire"/>

          <Button className="button-psychic" onClick={() => this.getPokemonByTybe('Psychic')} text="Psychic"/>

          <Button className="button-all" onClick={() => this.getPokemonByTybe('all')} text="Todos"/>
          
          <Button className="button-next" onClick={() => this.nextPokemon(filteredPokemons.length)} text="Próximo Pokemon"/>
        </div>
      </div>
    );
  }
}

export default Pokedex;