import React from 'react';
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'
import { colors, fonts } from '../../Styles/Global'

const SettingContainer = styled.div`
  width: 716px;
  height: 653px;
  background: ${colors.white};
  border-radius: 6px;
  position: absolute;
  left: 362px;
  top: 140px;
  padding: 0px 24px;
  

  .setting-container {
    display: flex;
    align-items: center;
  }

  .setting-container a {
    text-decoration: none;
  }
  .settings {
    width: 250px;
    height: 653px;
    border-right: 1px solid #F0F0F0;
    padding-top: 32px;
  }
  .profile-settings {
    width: 466px;
    height: 653px;
    padding: 32px;
  }

  .profile-settings img {
    margin-bottom: 32px;
  }

  .form-wrapper input, .password-form-wrapper input {
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 24px;
  }
  .form-wrapper ::placeholder {
    color: ${colors.darkGray};
    font-size: 16px;
    line-height: 19px;
    font-family: ${fonts.fontFamily};
    font-weight: normal;
  }

  .password-form-wrapper ::placeholder {
    color: ${colors.gray};
    font-size: 16px;
    line-height: 19px;
    font-family: ${fonts.fontFamily};
    font-weight: normal;
  }
  .setting-btn {
    margin-top: 34px;
  }

  .setting-arrow {
    position:absolute;
    top: -3px;
    left: -60px;
  }

  .active-bar {
    position: absolute;
    left: 0px;
    top: 90px;
  }
  .active-setting {
    position: absolute;
    left: 0px;
    top: 140px;
  }
  .icon-plus {
    width: 24px;
    height: 24px;
    background: ${colors.navy};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 100%;
    padding-bottom: 5px;
    position: absolute;
    top: 132px;
    left: 385px
  }
  `

const Profile = styled.div`
    font-family: ${fonts.fontFamily};
    font-style: ${fonts.fontStyle};
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
     margin-bottom: 36px;
    color: ${colors.darkGray};
    ${props => props.label && css`
      font-weight: normal;
      font-size: 16px;
      line-height: 14px;
      color: ${colors.gray};
      margin-bottom: 10px;
    `}
     ${props => props.primary && css`
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: ${colors.darkGray};
      text-transform: uppercase;
      margin-bottom: 32px;
    `}
   
  `
const LinkTag = styled.div`
 font-family: ${fonts.fontFamily};
 font-style: ${fonts.fontStyle};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.primary ? "#377CFF" : "#909090"};
  margin-bottom: 24px;
`

const WishboxSetting = (props) => {
  return (
    <div>
      <SettingContainer>
        <Link to="/wishbox/admin/Home">
          <div className="setting-arrow">{props.arrow}</div>
         </Link>
        <div className="setting-container">
          <div className="settings">
            <Profile>{props.setting}</Profile>
            <Link to="/wishbox/Setting/Profile_Settings">
               <LinkTag primary>{props.link1}</LinkTag>
               </Link>
            <Link to="/wishbox/Setting/Change_Password">
              <LinkTag>{props.link2}</LinkTag>
             </Link>
             <Link to="/wishbox/Setting/Profile_Settings">
              <LinkTag>{props.link3}</LinkTag>
            </Link>
            <Link to="/wishbox/Setting/Change_Password">
              <LinkTag primary>{props.link4}</LinkTag>
            </Link>
             
            <div className="active-bar">{props.activeBar}</div>
            <div className="active-setting">{props.activeSetting}</div>
          </div>
          <div className="profile-settings">
            <Profile primary>{props.profile}</Profile>
            <div>{props.Icon}</div>
            <div>{props.PlusIcon}</div>
            <div>
              {props.ProfileForm}
            </div>
          </div>
        </div>
      </SettingContainer>
    </div>
  );
}

export default WishboxSetting;