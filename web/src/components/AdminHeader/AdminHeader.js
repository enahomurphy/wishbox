import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BellIcon, ProfileIcon } from '../../svg';
import { Wishbox, Div } from '../../Styles/Elements';

const HeaderContainer = styled.div`
  width : 1440px;
  height: 100px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

  .row {
    display: flex;
    align-items: center;
  }

  .dashboard {
    width: 320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dashboard a {
    text-decoration: none;
  }

  .header-profile {
    width:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .profile-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 1280px;
  }

  .active-bar {
    position: absolute;
    left: 660px;
    top:84px;
  }

  .active-wish {
    position: absolute;
    top:84px;
    left: 800px;
  }

  .active-fulfilment {
    position: absolute;
    top:84px;
    left: 870px;
  }
`

const AdminHeader = (props) => {
  return (
    <div className="row">
      <HeaderContainer >
        <Wishbox> {props.title} </Wishbox>
        <Wishbox admin> {props.admin} </Wishbox>
        <div className="dashboard">
          <Link to="/wishbox/admin/Home">
            <Div primary>{props.dashboard}</Div>
          </Link>
          <Link to="/wishbox/admin/Home">
            <Div>{props.normalDashboard}</Div>
          </Link>
          <Link to="/wishbox/Wishes">
            <Div>{props.wishes}</Div>
          </Link>
          <Div primary>{props.blueWishes}</Div>
          <Link to="/wishbox/Fulfilments">
            <Div>{props.fulfilment}</Div>
          </Link>
        </div>
        <div className="active-bar">{props.HeaderActiveBar}</div>
        <div className="active-wish">{props.activeWish}</div>
        <div className="active-fulfilment">{props.activeFulfilment}</div>
        <div className="profile-box">
          <div className="header-profile">
            <BellIcon />
            <ProfileIcon />
          </div>
        </div>
      </HeaderContainer>
    </div>
  );
}

export default AdminHeader;