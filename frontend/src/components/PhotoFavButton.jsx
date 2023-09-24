import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [liked, setLiked] = useState(false);

  const handleIconClick = () => {
    setLiked(prevLiked => !prevLiked);
    console.log("Button Clicked!");
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}


export default PhotoFavButton;