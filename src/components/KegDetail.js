import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props) {
  const { keg, changePints } = props;
  return (
    <>
      <h1>Keg Details:</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>
      <h3>{keg.pints}</h3>
      <button onClick={() => changePints()}>Take a pint!</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  changePints: PropTypes.func
}