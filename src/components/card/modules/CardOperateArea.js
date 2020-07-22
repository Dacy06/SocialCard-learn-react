import React, {  useState } from 'react';
import './CardOperateArea.css';
import forwardImg from '../../../resource/forward.png';
import commentIcon from '../../../resource/1187839.png';
import loveIcon from '../../../resource/1249256.png';
import emailIcon from '../../../resource/1265551.png';

import CommentContainer from './CommentContainer';
import Forward from './Forward';

const CardOperateArea = ({cardContent,email}) => {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isShowForward, setIsShowForward] = useState(false);
  const [commentAmount, setCommentAmount] =useState(2);
  const [forwardAmount, setForwardAmount] =useState(47);
  const [loveAmount, setLoveAmount] = useState(190);
  const [localCommentList, setLocalCommentList] = useState(cardContent.commentList);
  
  // handle comment operation
  const handleComment = (comment) =>{
    if(!comment) return;
    console.log(comment);
    setCommentAmount(commentAmount+1);
    setLocalCommentList([...localCommentList,comment]);
  };

  const onCloseForwardModal = ()=> {
    setIsShowForward(false);
  }


  // handle forward operation
  const handleForward = (forward) =>{
    if(forward!=''){
      setForwardAmount(forwardAmount+1);
    }
    onCloseForwardModal();
  };

  
  return (
    <div className="operate-area">
      <div className="operate-btn-container">
        <button className="operate-btn common-btn" onClick={()=>setIsShowComment(!isShowComment)}>
          <img alt="" className="btn-icon" src={commentIcon}/>{commentAmount}
        </button>
        <button className="operate-btn common-btn" onClick={()=>setIsShowForward(true)}>
          <img alt="" className="btn-icon" src={forwardImg}/>{forwardAmount}
        </button>
        <button className="operate-btn common-btn" onClick={()=>setLoveAmount(loveAmount+1)}>
          <img alt="" className="btn-icon" src={loveIcon}/>{loveAmount}
        </button>
        <a href={`mailto:${email}?subject=send email by xxx`} className="operate-btn common-btn">
          <img alt="" className="btn-icon" src={emailIcon}/>
        </a>
      </div>
      <CommentContainer isShowComment={isShowComment}
       handleComment={handleComment}
       commentList={localCommentList}/>
      <Forward isShowForward={isShowForward}
       handleForward={handleForward}
       onCloseForwardModal={onCloseForwardModal}
       cardContent={cardContent}/>
    </div>
  );
}

export default CardOperateArea;