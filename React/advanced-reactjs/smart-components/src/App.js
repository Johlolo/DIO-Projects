import React, { useState } from 'react';
import Button from './Component/Button';
import Calc from './Component/Calc';
import PhotosGallery from './Component/PhotosGallery';

function App() {

  const photos = [
    'http://placeimg.com/200/100/peoples',
    'http://placeimg.com/200/100/animals',
    'http://placeimg.com/200/100/tech',
    'http://placeimg.com/200/100/nature',
    'http://placeimg.com/200/100/architecture'
  ]
  return (
    <>
      <h1>Galeria de Fotos</h1>
      <PhotosGallery 
        photos={photos}
      />

    </>
  )
}

export default App;