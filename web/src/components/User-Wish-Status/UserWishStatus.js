import React from 'react';
import './userwishstatus.css';

const UserWishStatus = (props) => {
  return (
    <div className="wish-status-container">
      <div className="status-group-box">
        <div className="status-pending-box">
          <div className="status">{ props.status }</div>
          <div className="pending">{ props.pending }</div>
          <div className="complete">{ props.complete }</div>
        </div>
        <div className="yellowbox">{ props.yellowbox }</div>
        <div className="star">{ props.StarIcon }</div>
      </div>
      <div className="status-date">{ props.date }</div>
      <div className="wish-content">{ props.content }</div>
    </div>
  );
}

export default UserWishStatus;