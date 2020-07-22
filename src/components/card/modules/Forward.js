import React, { useState } from 'react';
import CardContent from './CardContent';
import Comment from './Comment'; 
import './Forward.css';

const Forward = ({ isShowForward, handleForward, onCloseForwardModal, cardContent }) => {
  return (
    isShowForward &&
    <div className="modal-container" onClick={() => onCloseForwardModal()}>
      <div className="forward-container" onClick={(e) => { e.stopPropagation(); }}>
        <Comment handleComment={handleForward} btnText1="FORWARD" btnText2="CANCEL"/>
        <CardContent cardContent={cardContent} />
      </div>
    </div>
  );

}

export default Forward; 