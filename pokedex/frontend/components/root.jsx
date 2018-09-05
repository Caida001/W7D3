import React from 'react';
import { Provider } from 'react-redux';

import PokemonIndex from "./pokemon/pokemon_index";

const Root = ({store}) => (
    <Provider store={store}>
      <PokemonIndex />
    </Provider>
  );


// function Root(props) {
//   return (
//     <Provider store={props.store}>
//       <div>Hello World</div>
//     </Provider>
//   );
// }

export default Root;
