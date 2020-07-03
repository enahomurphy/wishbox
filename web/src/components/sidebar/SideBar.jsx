import React from 'react';
import { Layer } from '../../svg';
import { Group } from '../../svg';
import { Vector } from '../../svg';
import { Vector1 } from '../../svg';
import { Fulfilled } from '../../svg';
import { ActiveBar } from '../../svg';
import './sidebar.css';

const SideBar = () => {
  return (
    <div id="sidebar-container">
      <div>
        <p className="wishbox">wishBox</p>
        <div className="home">
          <div className="activebar">
            <ActiveBar />
          </div>
          <div>
            <Layer />
          </div>
          <p>Home</p>
        </div>
        <div className="slots">
          <div className="group">
            <Group />
          </div>
          <Vector />
          <p>Slots</p>
        </div>
        <div className="wishes">
          <Vector1 />
          <p>Wishes</p>
        </div>
        <div className="fulfiled">
          <Fulfilled />
          <p>Fulfiled</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar