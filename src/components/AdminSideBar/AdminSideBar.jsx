import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import { ProfileIcon } from '../../svg'

import {
  Sidebar,
  SideLabel,
  Icon,
  Types,
  TypesBox,
  Text

} from './Styled';

const SideBar = (props) => {
  return (
    <div>
      <Sidebar>
        <Link to="/wishbox/Setting/Profile_Settings">
          <div className="setting-icon">{props.settingIcon}</div>
        </Link>
        <Icon> <ProfileIcon /> </Icon>
        <Text>{props.name}</Text>
        <TypesBox>
          < Types>
            <p>{props.slot}</p>
            <h3>{props.slotNum}</h3>
          </Types>
          <Types>
            <p>{props.wish}</p>
            <h3>{props.wishesNum}</h3>
          </Types>
          <Types>
            <p>{props.fulfillments}</p>
            <h3>{props.fulfilledNum}</h3>
          </Types>
        </TypesBox>
        <div className="btn">
          <Link to="/wishbox/Create_Slot">
            <Button text="Create a Slot" />
          </Link>
        </div>
        <div>
          <SideLabel primary>{props.slots}</SideLabel>
          <SideLabel>{props.all}</SideLabel>
          <SideLabel progress>{props.progress}</SideLabel>
          <SideLabel>{props.completed}</SideLabel>
          <div className="active-bar">
            {props.activeBar}
          </div>
        </div>
        <div>
          <div className="wishes-box">
            <SideLabel primary>{props.wishes}</SideLabel>
            <div>
              <SideLabel secondary> {props.recent}<span>{props.shape}</span></SideLabel>
            </div>
          </div>
          <div>
            <SideLabel>{props.december}</SideLabel>
            <SideLabel progress>{props.newYear}</SideLabel>
            <SideLabel>{props.january}</SideLabel>
            <SideLabel>{props.valentine}</SideLabel>
            <SideLabel>{props.newYear}</SideLabel>
            <div className="active-bar">{props.activeBar}</div>
          </div>
        </div>
        <div className="setting-icon">
          <SideLabel allSlots>{props.allSlots}</SideLabel>
        </div>
      </Sidebar>
    </div>
  );
}

SideBar.propTypes = {
  all: PropTypes.string,
  slot: PropTypes.string,
  wish: PropTypes.string,
  slots: PropTypes.string,
  wishes: PropTypes.string,
  recent: PropTypes.string,
  january: PropTypes.string,
  newYear: PropTypes.string,
  progress: PropTypes.string,
  december: PropTypes.string,
  allSlots: PropTypes.string,
  valentine: PropTypes.string,
  completed: PropTypes.string,
  fulfillments: PropTypes.string,
  name: PropTypes.string.isRequired,

  settingIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  activeBar: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  shape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  fulfilledNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  wishesNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  slotNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default SideBar;