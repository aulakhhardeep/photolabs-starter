import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'


const TopNavigation = ({ topics, favoritePhotos}) => {
  const handleTopicClick = (topicId) => {
    console.log(`Topic with ID ${topicId} clicked!`);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={favoritePhotos.length > 0 }/>

    </div>
  )
};

export default TopNavigation;