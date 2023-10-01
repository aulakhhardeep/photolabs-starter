import React from 'react';
import { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const handleClose = () => {
    setModalOpen(false);

  }

  return (
    modalOpen && (
      <div className={`photo-details-modal${modalOpen ? ' open' : ''}`}>
          <button className="photo-details-modal__close-button" onClick={handleClose}>
              <img src={closeSymbol} alt="close symbol" />
          </button>  
      </div>
    )
  )
};

export default PhotoDetailsModal;
