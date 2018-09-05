import React from "react";

import {selectAllPokemon} from '../../reducers/selector';
import {fetchAllPokemon} from '../../actions/pokemon_actions';
import {connect} from 'react-redux';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map( (poke) => {
      return (
        <li key={poke.id}>
          <h4>{poke.name}</h4>
          <img src={poke.image_url}></img>
        </li>
      );
    });

    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPokemon: () => {
      dispatch(fetchAllPokemon());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
