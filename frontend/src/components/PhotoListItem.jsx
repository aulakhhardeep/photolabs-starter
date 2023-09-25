import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { data } = props;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={data.urls.regular} alt="Sample" className="photo-list__image" />
      <img src={data.user.profile} alt="profile-pic" className="photo-list__user-profile" />
      <h2 className="photo-list__user-info">{data.user.username}</h2>
      <p className="photo-list__user-location">{`${data.location.city}, ${data.location.country}`}</p>
    </div>
  );
};

export default PhotoListItem;
