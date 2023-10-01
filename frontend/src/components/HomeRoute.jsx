import React from "react";
import { useState } from "react";
import PhotoList from "./PhotoList";
import TopNavigation from "./TopNavigationBar";
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setDisplayModal, favoritePhotos, toggleFavorite}) => {
  

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos}/>
      <PhotoList photos={photos} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      setDisplayModal={setDisplayModal}
      />
    </div>
  )
}

export default HomeRoute;
