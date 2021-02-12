import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.alcoholContent}</h3>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
}