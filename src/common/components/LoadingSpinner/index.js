import React from 'react';
import { ClipLoader } from 'react-spinners';
import './style.css';

export const CardLoader = (message) => (
  <div className="text-center dashboard_card_loader">
    <ClipLoader
      sizeUnit={'px'}
      size={150}
      color={'cyan'}
      loading
    >
      {message ? message : ""}
    </ClipLoader>
  </div>
)

CardLoader.propTypes = {
}

