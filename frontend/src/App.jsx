import React from 'react';
import { useState } from 'react';

import HomeRoute from 'components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]); // State to keep track of favorite photos

  const toggleFavorite = (photoId) => {
    setFavoritePhotos(prevPhotos => {
      if (favoritePhotos.includes(photoId)) {
       
        return prevPhotos.filter(id => id !== photoId);
      } else {
       
        return [...prevPhotos, photoId];
      }
    });
   
  }
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="App">
     <HomeRoute 
      photos={photos} 
      topics={topics} 
      setDisplayModal={setDisplayModal} 
      favoritePhotos={favoritePhotos} 
      toggleFavorite={toggleFavorite}/>

     {displayModal && <PhotoDetailsModal 
      selectedPhoto={displayModal} 
      setDisplayModal={setDisplayModal}
      favoritePhotos={favoritePhotos} 
      toggleFavorite={toggleFavorite} />}

    </div>
  );
};

export default App;
