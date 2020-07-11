import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../Button/Button';
import { colors, fonts } from '../../Styles/Global';

const Sidebar = styled.div`
  width: 355px;
  height: 725px;
  padding: 24px;
  margin-left: 80px;
  border-radius: 6px;
  background: ${colors.white};
  margin: 40px 80px 53px 0px;
 
.slot-form input {
  width: 307px;
  height: 50px;
  border: 1px solid #D6DAE1;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 35px;
}

.slot-form textarea {
  width: 307px;
  height: 109px;
  border: 1px solid #D6DAE1;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 10px;
  line-height: 24px;
  margin-bottom: 28px;
}

.slot-form ::placeholder {
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.darkGray};
}

.delete {
  display: flex;
  width: 307px;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.form-btn {
  margin-top: 20px;
}
`

const Div = styled.div`
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight: bold;
  font-size: 24px;
  line-height:29px;
  color: ${colors.darkGray};
  margin-bottom: 40px;
  ${props => props.label && css`
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${colors.gray};
    width: 235px;
    margin-bottom: 10px;
  `}
  ${props => props.delete && css`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-decoration: underline;
    color: ${colors.navy};
    cursor: pointer;
    width: 78px;
  `}
  ${props => props.primary && css`
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${colors.gray};
  `}
`

const SideBar = () => {
  return (
    <div>
      <Sidebar>
        <div>
          <Div>Edit Slot Info</Div>
        </div>
        <div className="slot-form">
          <form>
            <Div label>Name of Slot</Div>
            <input type="text" placeholder="December Wishbox" />
            <Div label>Slot Description</Div>
            <textarea placeholder=" Lorem Khaled Ipsum is a major key to success. 
             Celebrate success right, the only way, apple. The other day the grass was." />
            <Div label>Start Slot</Div>
            <input type="text" placeholder="13 Friday, May 2019" />
            <Div label>End Slot</Div>
            <input type="text" placeholder="16 Monday, May 2019" />
            <div className="form-btn">
              <Button text="Update" />
            </div>
          </form>
        </div>
        <div className="delete">
          <Div primary>No longer interested in this slot?</Div>
          <Div delete>Delete Slot</Div>
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;