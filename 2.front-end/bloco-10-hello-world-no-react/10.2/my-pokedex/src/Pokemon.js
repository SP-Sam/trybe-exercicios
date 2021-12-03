import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='pokemonCard'>
        <div className='pokemonInfos'>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Average weight: ${averageWeight.value}, ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name}/>
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