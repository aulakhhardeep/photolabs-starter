import { useState } from 'react';


const useApplicationData = () => {
  const [state, setState] = useState({
    favoritePhotos: [],
    displayModal: false,
    //selectedPhoto: null
  });

  const updateToFavPhotoIds = (photoId) => {
     
      if (state.favoritePhotos.includes(photoId)) {
        const copyOfFavorite = [...state.favoritePhotos].filter((id) => id !== photoId);
        setState({...state, favoritePhotos: copyOfFavorite})
        return;
      } else {
        setState({...state, favoritePhotos: [...state.favoritePhotos, photoId]})
      }
  };

  const onClosePhotoDetailsModal = (value) => {
    setState({...state, displayModal: value});
  };

  const setPhotoSelected = (photo) => {
    setState({...state, displayModal: photo})
  }
  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  };
};

export default useApplicationData;
