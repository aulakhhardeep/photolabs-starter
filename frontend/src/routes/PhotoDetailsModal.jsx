import React from 'react';
import { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({selectedPhoto, setDisplayModal, favoritePhotos, toggleFavorite}) => {
 
  const handleClose = () => {
    setDisplayModal(false);
  }
  const similarPhotos = Object.values(selectedPhoto.similar_photos);
  return (
    <div className='photo-details-modal'>
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite}
        photoId={selectedPhoto.id}
        />
        <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} alt="Selected" />
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
            <div className='photo-details-modal__photographer-info'>{selectedPhoto.user.name}
              <div className='photo-details-modal__photographer-location'>
               {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
      </div>
      <div className='photo-details-modal__header'>Similar Photos</div>
      <div className='photo-details-modal__images'>
        <PhotoList 
        photos={similarPhotos}
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite}
        setDisplayModal={()=>{}}
        />
      </div>
   </div>
  )
};

export default PhotoDetailsModal;
