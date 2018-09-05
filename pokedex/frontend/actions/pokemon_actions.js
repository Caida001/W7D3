import APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => {
  console.log("Hello");
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const fetchAllPokemon = () => {
  return (dispatch) => {
    APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)));
  };
};
