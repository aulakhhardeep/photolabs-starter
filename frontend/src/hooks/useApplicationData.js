import { useReducer } from 'react';
import { useEffect } from 'react';

const useApplicationData = () => {
  const INITIAL_STATE = {
    favoritePhotos: [],
    displayModal: false,
    photoData: [],
    topicData: []
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then(res => res.json())
    .then(data => {
      setPhotoData(data);
    })
  },[]);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
    .then(res => res.json())
    .then(topic => {
      setTopicData(topic);
    })
  })

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

      case 'SET_PHOTO_DATA':
        return { ...state, photoData: payload};

      case 'SET_TOPIC_DATA':
        return{ ...state, topicData: payload};

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

  const setPhotoData = (photos) => {
    dispatch({
      type: 'SET_PHOTO_DATA',
      payload: photos,
    })
  };

  const setTopicData = (topics) => {
    dispatch({
      type: 'SET_TOPIC_DATA',
      payload: topics,
    })
  }

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  };
};

export default useApplicationData;
