import merge from 'lodash/merge';

import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.items;
    default:
      return state;
  }
};
