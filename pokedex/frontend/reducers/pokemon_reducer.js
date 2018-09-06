import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from "../actions/pokemon_actions";
import {merge} from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
    // debugger
      const newState = Object.assign({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};
