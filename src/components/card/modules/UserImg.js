import React from 'react';
import './UserImg.css';

const UserImg = ({userInfo}) => {
  return(
    <div className="user-area">
      <img alt="" src={userInfo.headImg} className="head-image"/> 
      <UserModal userInfo={userInfo}/>
    </div>  
  );
}

const UserModal = ({userInfo}) => {
  return(
    <div className="user-card-container">
      <img alt="" src={userInfo.headImg} className="head-image"/> 
      <ul className="user-info-detail">
        <li><label>Name: </label><strong>{userInfo.name}</strong> @{userInfo.id}</li>
        <li><label>Address: </label>{userInfo.address}</li>
        <li><label>Gender: </label>{userInfo.gender}</li>
        <li><label>Email: </label><a href={`mailto:${userInfo.email}?subject=send email by xxx`}>{`<${userInfo.email}>`}</a></li>
      </ul>
    </div>
  );
}

export default UserImg;