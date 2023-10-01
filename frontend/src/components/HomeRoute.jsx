import React from "react";
import { useState } from "react";
import PhotoList from "./PhotoList";
import TopNavigation from "./TopNavigationBar";
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]); // State to keep track of favorite photos

  const toggleFavorite = (photoId, isFavorite) => {
    setFavoritePhotos(prevPhotos => {
      if (isFavorite) {
       
        return prevPhotos.filter(id => id !== photoId);
      } else {
       
        return [...prevPhotos, photoId];
      }
    });
    //console.log(`Photo ${photoId} is now ${isFavorite ? 'not ' : ''}a favorite.`);
  }
console.log("Favphotos",favoritePhotos);
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos}/>
      <PhotoList photos={photos} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      />
    </div>
  )
}

export default HomeRoute;
