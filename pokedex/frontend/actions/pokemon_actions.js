import APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveSinglePokemon = ({pokemon, items}) => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon,
    items
  };
};

export const fetchAllPokemon = () => {
  return (dispatch) => {
    APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)));
  };
};

export const fetchSinglePokemon = (id) => {
  return (dispatch) => {
    APIUtil.fetchSinglePokemon(id).then( (payload) => {
      // debugger
      return dispatch(receiveSinglePokemon(payload));
    }
  );
};
};
