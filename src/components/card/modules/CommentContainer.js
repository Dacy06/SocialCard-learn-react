import React, { Component } from 'react';
import './CommentContainer.css';
import Comment from './Comment';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  render() {
    const { isShowComment, commentList, handleComment} = this.props;
    return (
      isShowComment &&
      <div className="comment-container">
        <Comment handleComment={handleComment} btnText1="COMMENT" btnText2="CANCEL"/>
        <h4 className="comment-title">Comments From Others</h4>
        <div className="comment-list">
          {commentList.map((ele, index)=><div key={index} className="comment-item">{ele}</div>)}
          </div>
      </div>
    );
  }
}

export default CommentContainer;