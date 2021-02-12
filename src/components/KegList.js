import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg.js'

export default function KegList(props) {
  return (
    <>
      {props.kegList.map((keg) => 
        <Keg
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={keg.id}
          id={keg.id}/>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}