import { Component } from "react";

class PokemonDetails extends Component {
  render() {
    const { id } = this.props;

    return <h1>{id}</h1>;
  }
}

export default PokemonDetails;