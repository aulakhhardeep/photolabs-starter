import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFavorite, isFavorite }) => {

  const handleIconClick = () => {
    toggleFavorite(photoId, isFavorite); // Pass isFavorite to toggleFavorite function
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}


export default PhotoFavButton;