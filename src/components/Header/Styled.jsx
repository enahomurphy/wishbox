import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const HeaderContainer = styled.div`
  width: 1162px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 222px;
  padding-top: 32px;

  ${props => props.primary && css`
     left: 180px;
  `}

  ${props => props.secondary && css`
  @media screen and (max-width: 700px) {
    width: 700px;
    border: 3px solid blue;
    left: 0;
    display: ${props => props.primaryMob ? "none" : "none"};
  }
  ` }
`

export const HeaderContainer2 = styled.div`
  @media screen and (max-width: 700px) {
    width: 700px;
    border: 3px solid blue;
    left: 0;
    display: ${props => props.primary ? "none" : "none"};
  }
`
export const BellGroup = styled.div`
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

  ${props => props.redDot && css`
    position: absolute;
    top: 37px;
    right: 85px;
  `}
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const InputContainer = styled.div`
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
    font-family: ${Fonts.primary};
    font-weight: bold;
    font-style: normal;
    font-size: 15px;
    line-height: 14px;
    color: rgba(43, 48, 52, 0.4);
  }
`}

  @media screen and (max-width: 700px) {
    display: none;
  }
`
export const FilterOption = styled.select`
  background: ${colors.white};
  border: 1px solid ${colors.lightBlue};
  height: 50px;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  text-align: center;
  padding: 0 10px;
  font-family: ${Fonts.primary};
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.darkGray};
  cursor: pointer;
  margin-right:40px;
  
  @media screen and (max-width: 700px) {
    display: none;
  }
`