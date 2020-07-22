import React from 'react';
import './CardContent.css';

const CardContent = ({cardContent}) => {
  return (
    <div className="card-container">
      <img alt="" className="card-image" src={cardContent.cardPicture}/>
      <div className="card-ifo">
        <strong>{cardContent.cardTitle}</strong><br/>
        {cardContent.cardDescription}
      </div>
    </div>
  );
}

export default CardContent;