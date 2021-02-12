import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props) {
  const { keg, changePints } = props;

  let pintAmmount, pintButton;
  if (keg.pints < 1) {
    pintAmmount = "Out of stock"
  } else {
    pintAmmount = keg.pints;
    pintButton = <button onClick={() => changePints()}>Take a pint!</button>;
    
  }
  return (
    <>
      <h1>Keg Details:</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>
      <h3>{pintAmmount}</h3>
      {pintButton}
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  changePints: PropTypes.func
}