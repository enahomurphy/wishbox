import React from 'react';
import './userwishstatus.css';

export const UserFulfiledStatus = (props) => {
  return (
    <div className="fulfiled-status-container">
      <div className="status-group-box">
        <div className="status-pending-box">
          <div className="status">{ props.status }</div>
          <div className="complete">{ props.complete }</div>
        </div>
        <div className="star">{ props.StarIcon }</div>
      </div>
      <div className="status-date">{ props.date }</div>
      <div className="wish-content">{ props.content }</div>
      <div className="fulfiled-by">{ props.fulfiledBy }</div>
      <div className="fulfiled-name">{ props.name }</div>
      <div className="fulfiled-slot">{ props.slot }</div>
      <div className="fulfiled-type">{ props.wishType }</div>
      <div className="otherwishes">{ props.otherwishes }</div>
      <div className="fulfiled-profile-icon">
        <div className="icon">{ props.profileIcon }</div>
        <div className="icon">{ props.profileIcon2 }</div>
        <div className="icon">{ props.profileIcon }</div>
        <div className="icon">{ props.profileIcon2 }</div>
        <div className="icon">{ props.profileIcon }</div>
        <div className="icon">{ props.profileIcon2 }</div>
        <div className="num-of-wishes">{ props.numOfWishes }</div>
      </div>
    </div>
  );
}

export const UserFulfiledStatus2 = (props) => {
  return (
    <div className="fulfiled-status-container-2">
      <div className="status-group-box">
        <div className="status-pending-box">
          <div className="status">{ props.status }</div>
          <div className="complete">{ props.complete }</div>
        </div>
        <div className="star">{ props.StarIcon }</div>
      </div>
      <div className="status-date">{ props.date }</div>
      <div className="wish-content">{ props.content }</div>
      <div className="fulfiled-by">{ props.fulfiledBy }</div>
      <div className="fulfiled-name">{ props.name }</div>
    </div>
  );
}

export default UserFulfiledStatus;