import React from 'react';
import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selector';


function mapStateToProps(state, ownProps) {
  return {
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  };
}

const ItemDetail = ({item}) => (
  <ul>
    <li><h3>{item.name}</h3></li>
    <li>Happiness: {item.happiness}</li>
    <li>Price: {item.price}</li>
  </ul>
);

export default connect(
  mapStateToProps
)(ItemDetail);
