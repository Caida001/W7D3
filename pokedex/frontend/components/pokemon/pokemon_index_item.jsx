import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.poke.id}`}>
        <h4>{props.poke.name}</h4>
        <img src={props.poke.image_url}></img>
      </Link>
    </li>
  );
};
