import { useReducer } from 'react';

const useApplicationData = () => {
  const INITIAL_STATE = {
    favoritePhotos: [],
    displayModal: false,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'FAVORITE_PHOTO':
        if (state.favoritePhotos.includes(payload)) {
          const copyOfFavorite = state.favoritePhotos.filter((id) => id !== payload);
          return { ...state, favoritePhotos: copyOfFavorite };
        } else {
          return { ...state, favoritePhotos: [...state.favoritePhotos, payload] };
        }

      case 'UPDATE_MODAL':
        return { ...state, displayModal: payload };

      case 'SET_PHOTO_SELECTED':
        return { ...state, displayModal: payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: 'FAVORITE_PHOTO',
      payload: photoId,
    });
  };

  const onClosePhotoDetailsModal = (value) => {
    dispatch({
      type: 'UPDATE_MODAL',
      payload: value,
    });
  };

  const setPhotoSelected = (photo) => {
    dispatch({
      type: 'SET_PHOTO_SELECTED',
      payload: photo,
    });
  };

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  };
};

export default useApplicationData;
