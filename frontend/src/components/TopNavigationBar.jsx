import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import useApplicationData from '../hooks/useApplicationData';

const TopNavigation = ({ topics, favoritePhotos, handleSetPhotos }) => {
  const {setPhotosByTopic } = useApplicationData();

  const handleTopicClick = async (topicId) => {
    const photos = await setPhotosByTopic(topicId)
    handleSetPhotos(photos)
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