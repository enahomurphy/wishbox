import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SideBarContainer, P, Div, Text, Icon} from './Styled';

const SideBar = (props) => {
  return (
    <SideBarContainer>
      <P>{props.wishBox}</P>
      <Link to="/users/Home">
        <Div >
          <Icon> {props.homeIcon} </Icon>
          <Text Blue>{props.home}</Text>
          <Text Home>{props.homeGray}</Text>
          <Div homeActiveBar>
            {props.homeActiveBar}
          </Div>
        </Div>
      </Link>
      <Link to="/users/Slots">
        <Div primary>
          <Div num>
            {props.slotNum}
          </Div>
          {props.slotIcon}
          <Text>{props.slot}</Text>
          <Text Blue>{props.slotsBlue}</Text>
          <Div slotsActiveBar>
            {props.slotsActiveBar}
          </Div>
        </Div>
      </Link>
      <Link to="/users/Wish">
        <Div primary>
          {props.wishesIcon}
          <Text>{props.wishes}</Text>
          <Text Blue>{props.wishesBlue}</Text>
          <Div wishesActiveBar>
            {props.wishesActiveBar}
          </Div>
        </Div>
      </Link>
      <Link to="/users/Fulfilled Wish">
        <Div primary>
          {props.fulfilledIcon}
          <Text>{props.fulfilled}</Text>
          <Text Blue>{props.fulfilledBlue}</Text>
          <Div fulfilledActiveBar>
            {props.fulfilledActiveBar}
          </Div>
        </Div>
      </Link>
    </SideBarContainer>
  );
}

SideBar.propTypes = {
  homeIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  homeActiveBar: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  slotNum: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  slotIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  slotsActiveBar: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  wishesIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  wishesActiveBar: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  fulfilledIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  fulfilledActiveBar: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  home: PropTypes.string,
  homeGray: PropTypes.string,
  slot: PropTypes.string,
  slotsBlue: PropTypes.string,
  wishes: PropTypes.string,
  wishesBlue: PropTypes.string,
  fulfilled: PropTypes.string,
  fulfilledBlue: PropTypes.string,
}

export default SideBar;