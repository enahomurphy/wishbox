import styled, { css } from 'styled-components';
import { colors, Fonts } from './Global';

export const Container = styled.div`
  width: 1440px;
  height: 1104px;
  background: ${colors.background};
  margin: 0 auto;
  position: relative;
  
  ${props => props.primary && css`
    width: 1440px;
    height: 1104px;
    background: #E5E5E5;
    margin-bottom: 0px;
    box-sizing: border-box;
  `}

  ${props => props.secondary && css`
    width: 1440px;
    height: 80px;
    background: ${colors.navy}; 
    margin: auto;
    padding: 0px;
  `}
`

export const Wishbox = styled.h2`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.lightBlue};
  font-family: ${Fonts.secondary};
  font-style: normal;

  ${props => props.admin && css`
    font-size: 14px;
    font-size: 14px;
    color: ${colors.gray};
    padding-top: 10px;
  `}
`

export const Div = styled.div`
font-family: ${Fonts.primary};
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: ${colors.lighterGray};

${props => props.primary && css`
  color:${colors.lightBlue};
`}
`

export const Sidebar = styled.div`
  width: 355px;
  height: 831px;
  background: ${colors.white};
  border-radius: 6px;
  border: 1px solid black;
  margin: 40px 80px 53px 0px;
  margin-left: 80px;
`

export const Profile = styled.div`
  font-family: ${Fonts.primary};
  font-style: normal;
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

export const MainContent = styled.div`
  width:885px;
  height: ${props => props.primary ? "763px" : "831px"};
  position: absolute;
  left: 475px;
  top: 140px;
  background: ${colors.white};
  border-radius: 6px;
  padding-bottom:20px;
`