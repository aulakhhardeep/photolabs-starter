import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favoritePhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <PhotoListItem 
        key={photoData.id} 
        data={photoData} 
        toggleFavorite={toggleFavorite} 
        favoritePhotos={favoritePhotos}
        isFavorite={favoritePhotos.includes(photoData.id)} />
      ))}
    </ul>
  );
};

export default PhotoList;
