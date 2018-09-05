import React from "react";
import ReactDOM from "react-dom";

import {configureStore} from "./store/store";

import {fetchAllPokemon} from "./actions/pokemon_actions";
import {selectAllPokemon} from "./reducers/selector";

import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore()}/>, rootEl);

  window.store = configureStore();
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
});
