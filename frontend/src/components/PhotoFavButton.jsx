import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFavorite, favoritePhotos }) => {

  const handleIconClick = () => {
    toggleFavorite(photoId); 
  }
 
  const selected = favoritePhotos.includes(photoId); 
 

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
  
}


export default PhotoFavButton;