import React from 'react';
import './sidebar.css';

const SideBarSlots = (props) => {
  return (
    <div id="sidebar-container">
      <div className="wishbox">{ props.wishbox }</div>
      <div className="home-slots">
        <div >
          { props.layer }
        </div>
        <p>{ props.home }</p>
      </div>
      <div className="slots-slots">
        <div className="slot-activebar">
          { props.ActiveBar }
        </div>
        <div className="group">
          { props.Group }
        </div>
        { props.Slots }
        <p>{ props.slots }</p>
      </div>
      <div className="wishes">
        { props.Vector }
        <p>{ props.wish }</p>
      </div>
      <div className="fulfiled">
        { props.Fulfiled }
        <p>{ props.fulfiled }</p>
      </div>
    </div>
  );
}

export default SideBarSlots;