import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData, toggleFavorite, favoritePhotos, setDisplayModal } = props;
  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavorite={toggleFavorite} photoId={photoData.id} favoritePhotos={favoritePhotos}/>
      <img src={photoData.urls.regular} alt="Sample" className="photo-list__image" onClick={()=>setDisplayModal(photoData)} />
      <div className="photo-list__user-details">
      <img src={photoData.user.profile} alt="profile-pic" className="photo-list__user-profile" />
      <div className="photo-list__user-info">
      <h2>{photoData.user.name}</h2>
      <p className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</p>
      </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
