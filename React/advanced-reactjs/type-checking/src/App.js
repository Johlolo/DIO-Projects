import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import PetShop from './PetShop';

function App () {

  const handleClick = () => {
    console.log('Iniciando o banho...')
  }

  return (
    <PetShop 
      dogs={2}
      customerName='Johannes Rey'
      onClick={handleClick}
      status='Completed'
    />
  )
}


export default App;