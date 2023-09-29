import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log(props);
  const { data, toggleFavorite, photoId} = props;
  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavorite={toggleFavorite} photoId={data.id}/>
      <img src={data.urls.regular} alt="Sample" className="photo-list__image" />
      <div className="photo-list__user-details">
      <img src={data.user.profile} alt="profile-pic" className="photo-list__user-profile" />
      <div className="photo-list__user-info">
      <h2>{data.user.username}</h2>
      <p className="photo-list__user-location">{`${data.location.city}, ${data.location.country}`}</p>
      </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
