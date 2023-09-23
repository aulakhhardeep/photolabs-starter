import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
 const { data } = props;
 return (
  <div className="photo-list__item">
    <img src={data.imageSource} alt="Sample" className="photo-list__image" />
    <img src={data.profile} alt="profile-pic" className="photo-list__user-profile" />
    <h2 className="photo-list__user-info">{data.username}</h2>
    <p className="photo-list__user-location">{`${data.location.city}, ${data.location.country}`}</p>
  </div>

 );
  
};

export default PhotoListItem;
