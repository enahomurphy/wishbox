import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors, fonts } from '../../Styles/Global';
import Button from '../Button/Button';

const Sidebar = styled.div`
  width: 355px;
  height: 831px;
  background: ${colors.white};
  border-radius: 6px;
  margin: 40px 80px 53px 0px;
  margin-left: 80px;
  padding: 24px;
  
 .setting-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .profile-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .profile-icon img {
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .label {
    display: flex;
    box-sizing: border-box;
    margin-left: -20px;
    justify-content:center;
    align-items: center;
  }

  .label div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 65px;
  }

  .wishes-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .active-bar {
    position: absolute;
    top: 725px;
    left: 81px;
  }
`

const Text = styled.div`
  width:200px;
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight:500;
  font-size: 24px;
  line-height:29px;
  color: ${colors.darkGray};

  ${props => props.initial && css`
    width: 105px;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 7px;
    color: ${colors.gray};
  `}

  ${props => props.num && css`
    width: 20px;
    margin-bottom: 32px;
  `}
`

const SideLabel = styled.div`
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight:500;
  font-size: 18px;
  line-height:22px;
  color: ${colors.gray};
  margin-bottom: 32px;

  ${props => props.progress && css`
    color: ${colors.lightblue};
  `}

  ${props => props.slot && css`
    font-size: 14px;
    line-height: 17px;
    color: ${colors.darkGray};
  `}

  ${props => props.allSlots && css`
    font-size: 14px;
    line-height: 17px;
    color: ${colors.navy};
    text-decoration: underline;
    padding-bottom: 10px;
  `}

  ${props => props.secondary && css`
    font-size: 16px;
    line-height: 19px;
    color: ${colors.darkGray};
  `}
`

const SideBar = (props) => {
  return (
    <div>
      <Sidebar>
        <Link to="/wishbox/Setting/Profile_Settings">
          <div className="setting-icon">{props.settingIcon}</div>
         </Link>
        <div className="profile-icon">
         {props.Icon}
          <Text>{props.name}</Text>
        </div>
        <div className="label">
          <div>
            <Text initial>{props.type1}</Text>
            <Text num>{props.num1}</Text>
          </div>
          <div>
          <Text initial>{props.type2}</Text>
          <Text num>{props.num2}</Text>
          </div>
          <div>
          <Text initial>{props.type3}</Text>
          <Text num>{props.num3}</Text>
          </div>
        </div>
        <div className="btn">
          <Button text="Create a Slot" />
        </div>
        <div>
          <SideLabel slot>{props.slot}</SideLabel>
          <SideLabel>{props.all}</SideLabel>
          <SideLabel progress>{props.progress}</SideLabel>
          <SideLabel>{props.compleded}</SideLabel>
          <div className="active-bar">
            {props.activeBar}
          </div>
        </div>
        <div>
          <div className="wishes-box">
          <SideLabel slot>{props.wishes}</SideLabel>
            <div>
            <SideLabel secondary> {props.recent}<span>{props.shape}</span></SideLabel>
            </div>
          </div>
          <div>
            <SideLabel>{props.wishType1}</SideLabel>
            <SideLabel progress>{props.wishType2}</SideLabel>
            <SideLabel>{props.wishType3}</SideLabel>
            <SideLabel>{props.wishType4}</SideLabel>
            <SideLabel>{props.wishType2}</SideLabel>
            <div className="active-bar">{props.ActiveBar}</div>
          </div>
        </div>
        <div className="setting-icon">
          <SideLabel allSlots>{props.allSlots}</SideLabel>
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;