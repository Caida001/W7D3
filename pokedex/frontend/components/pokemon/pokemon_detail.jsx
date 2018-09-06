import React from 'react';
import {connect} from 'react-redux';
import {fetchSinglePokemon} from '../../actions/pokemon_actions';
import ItemDetail from '../items/item_detail';
import {Route} from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    if (!this.props.pokemon) return null;
    const moves = this.props.pokemon.moves.map( (move, index) => {
      return <li key={index}>{move}</li>;
    });
    // debugger
    return (
      <section>
        <figure>
          <img src={this.props.pokemon.image_url} />
        </figure>
        <ul>
          <li>
            <h2>{this.props.pokemon.name}</h2>
          </li>
          <li>
            Type: {this.props.pokemon.poke_type}
          </li>
          <li>
            Attack: {this.props.pokemon.attack}
          </li>
          <li>
            Defense: {this.props.pokemon.defense}
          </li>
          <ul>{moves}</ul>
        </ul>
        <Route exact path="/pokemon/:pokemonId/item/:itemId" component={ItemDetail} />
      </section>
    );
  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.pokemon && this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
  //     this.props.fetchSinglePokemon(newProps.match.params.pokemonId);
  //   }
  // }
}

function mapStateToProps(state, ownProps) {
  // debugger
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSinglePokemon: (id) => {
      dispatch(fetchSinglePokemon(id));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
