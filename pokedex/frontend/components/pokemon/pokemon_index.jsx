import React from "react";

import {selectAllPokemon} from '../../reducers/selector';
import {fetchAllPokemon} from '../../actions/pokemon_actions';
import {connect} from 'react-redux';
import {PokemonIndexItem} from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';
import {Route} from 'react-router-dom';

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
        <PokemonIndexItem poke={poke} key={poke.id} />
      );
    });

    return (
      <div>
        <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
        <ul>
          {pokemon}
        </ul>
      </div>
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
