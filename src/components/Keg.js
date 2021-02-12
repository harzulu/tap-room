import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props) {
  return (
    <>
    <div onClick={() => props.whenKegClicked(props.id)}>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
    </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}