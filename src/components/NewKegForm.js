import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm.js';

export default function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Create new keg"/>

    </>
  );

}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}