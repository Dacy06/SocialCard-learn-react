import React, { Component } from 'react';
import './Card.css';
import UserImg from './modules/UserImg';
import UserInfo from './modules/UserInfo';
import CardContent from './modules/CardContent';
import CardOperateArea from './modules/CardOperateArea';

class Card extends Component {
  render(props) {
    const { data: { userInfo, cardContent } } = this.props;
    return (
      <div className="container">
        <div className="module-container">
          <UserImg userInfo={userInfo} />
        </div>
        <div className="module-container">
          <UserInfo userInfo={userInfo} cardContent={cardContent} />
          {cardContent.message}
          <CardContent cardContent={cardContent}/>
          <CardOperateArea cardContent={cardContent} email={userInfo.email}/>
        </div>
      </div>
    );
  }
}

export default Card;