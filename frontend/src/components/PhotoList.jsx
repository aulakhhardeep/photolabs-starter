import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favoritePhotos, setDisplayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <PhotoListItem 
        key={photoData.id} 
        photoData={photoData} 
        toggleFavorite={toggleFavorite} 
        favoritePhotos={favoritePhotos}
        setDisplayModal={setDisplayModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
