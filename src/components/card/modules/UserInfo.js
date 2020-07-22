import React from 'react';
import './UserInfo.css';

const UserInfo = ({userInfo,cardContent}) => {
  console.log(userInfo);
  return (
    <div className="user-info">
      <strong>{userInfo.name}</strong> @{userInfo.id} · {cardContent.sendTime}
    </div>
  );
}

export default UserInfo;