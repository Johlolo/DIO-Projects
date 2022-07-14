import React, { useState } from 'react';
import { Button, PhotosGallery } from './components';
import { sanitizeString } from './commons/utils/string';

function App() {

  const photos = [
    'http://placeimg.com/200/100/peoples',
    'http://placeimg.com/200/100/animals',
    'http://placeimg.com/200/100/tech',
    'http://placeimg.com/200/100/nature',
    'http://placeimg.com/200/100/architecture'
  ]

  sanitizeString('teste')

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <PhotosGallery 
        photos={photos}
      />
      <Button>
        Botão
      </Button>
    </>
  )
}

export default App;