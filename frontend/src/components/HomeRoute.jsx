import React from "react";
import PhotoList from "./PhotoList";
import TopNavigation from "./TopNavigationBar";
import '../styles/HomeRoute.scss';


const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  )
}

export default HomeRoute;