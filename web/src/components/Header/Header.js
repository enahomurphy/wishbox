import React from 'react';
import styled, { css } from 'styled-components';

import { colors, fonts } from '../../Styles/Global';
import { Group2, Group3, SearchIcon } from '../../svg';
import ProfileLogo from '../../images/Ellipse 1.png';


const HeaderContainer = styled.div`
  width: 1162px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 199px;
  padding-top: 32px;
`
const BellGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${props => props.bell && css`
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  `}

  ${props => props.reddot && css`
    position: absolute;
    top: 37px;
    right: 90px;
  `}
`

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top:30px;

  ${props => props.HeaderInput && css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    border-radius: 6px;
    background: ${colors.white};
    padding: 0 10px;
    cursor: pointer;
    input {
    border: none;
    outline: none;
    margin-left: 10px;
    cursor: pointer;
  }
  input::placeholder {
    font-family: ${fonts.fontFamily};
    font-weight: bold;
    font-style: ${fonts.fontStyle};
    font-size: 15px;
    line-height: 14px;
    color: rgba(43, 48, 52, 0.4);
  }
  `}
`
const FilterOption = styled.select`
  background: ${colors.white};
  border: 1px solid ${colors.lightblue};
  height: 50px;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  text-align: center;
  padding: 0 10px;
  font-family: ${fonts.fontFamily};
  font-weight: 500;
  font-style: ${fonts.fontStyle};
  font-size: 18px;
  line-height: 22px;
  color: ${colors.darkGray};
  cursor: pointer;
  margin-right:40px;
`

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <BellGroup>
          <BellGroup bell><Group2 /></BellGroup>
          <BellGroup reddot><Group3 /></BellGroup>
          <img src={ProfileLogo} alt="icon" />
        </BellGroup>
        <InputContainer>
          <FilterOption>
            <option>Filter</option>
            <option>December Wishbox</option>
            <option>New Year Exchange</option>
            <option>January Gifting</option>
            <option>Valentine Secret Admirer</option>
            <option>New Year Exchange</option>
            <option>December Wishbox</option>
            <option>New Year Exchange</option>
            <option>January Gifting</option>
            <option>Valentine Secret Admirer</option>
            <option>New Year Exchange</option>
          </FilterOption>
          <InputContainer HeaderInput>
            <SearchIcon />
            <input type="search" placeholder="Find..." />
          </InputContainer>
        </InputContainer >
      </HeaderContainer>
    </div>
  );
}

export default Header;