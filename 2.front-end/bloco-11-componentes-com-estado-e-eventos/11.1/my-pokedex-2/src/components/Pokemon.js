import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    return (
      <div className='pokemonCard'>
        <div className="pokeInfos">
          <div className='pokemonInfos'>
            <h3>{name}</h3>
            <p>{type}</p>
            <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <img src={image} alt={name}/>
        </div>
        <Link to={`/pokemonDetails${id}`}>Detalhes do Pokemón</Link>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.exact({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  }),
  image: PropTypes.string
}

export default Pokemon;