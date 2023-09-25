import React from 'react';

import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge count={5} />
    </div>
  )
}

export default TopNavigation;