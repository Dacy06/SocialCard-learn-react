import React, { useState } from 'react';
import './Comment.css';

const Comment = ({handleComment,btnText1, btnText2}) => {

  const [comment, setComment] = useState('');

  const submitComment = () => {
    if(!comment){
      var r = window.confirm("You have not enter anything~");
      return;
    }
    handleComment(comment);
    // 清空
    setComment('');
  }

  const cancelComment = () => {
    if(!comment){
      handleComment();
    }else{
      var r = window.confirm("If you click ok, your input will be lost!");
      if(r===false) return;
      handleComment();
      // 清空
      setComment('');
    }
  }

  return (
    <div className="comment-area" >
      <textarea className="input-area" placeholder="please input..." value={comment}
        onChange={(e) => {
          setComment( e.target.value );
        }} />
      <div className="submit-btn-area">
        <button className="comment-btn common-btn" onClick={submitComment}>{btnText1}</button>
        <button className="comment-btn common-btn" onClick={cancelComment}>{btnText2}</button>
      </div>
    </div>
  );
  
}

export default Comment;