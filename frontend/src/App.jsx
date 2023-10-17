import React from 'react';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {
  const { state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected, setPhotoData } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        setDisplayModal={setPhotoSelected}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={updateToFavPhotoIds}
        handleSetPhotos={(photos) => setPhotoData(photos)}
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
