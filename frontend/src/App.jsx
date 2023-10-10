import React from 'react';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

import './App.scss';

const App = () => {
  const { state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={topics}
        setDisplayModal= {setPhotoSelected}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={updateToFavPhotoIds}
      />

      {state.displayModal && (
        
        <PhotoDetailsModal
          selectedPhoto={state.displayModal}
          setDisplayModal={onClosePhotoDetailsModal}
          favoritePhotos={state.favoritePhotos}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
  
};

export default App;
