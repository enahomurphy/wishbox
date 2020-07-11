import styled, {css} from 'styled-components';
import { colors, Circularfonts, fonts } from './Global';

export const Container = styled.div`
  width: 1440px;
  height:1024px;
  background: ${colors.background};
  margin-bottom: 25px;
`

export const Wishbox = styled.h2`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.lightblue};
  font-family: ${Circularfonts.fontFamily};
  font-style: normal;
  ${props => props.admin && css`
    font-size: 14px;
    font-size: 14px;
    color: ${colors.gray};
    padding-left: 12px;
    margin: 10px 0px 0px 0px;
  `}
`

export const Div = styled.div`
font-family: ${fonts.fontFamily};
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: ${colors.lighterGray};
${props => props.primary && css`
    color:${colors.lightblue};
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

export const MainContent = styled.div`
  width:885px;
  height: ${props => props.primary ? "763px" : "831px"};
  position: absolute;
  left: 475px;
  top: 140px;
  background: ${colors.white};
  border-radius: 6px;
  padding: 34px 24px 24px 24px;
  margin-bottom: 20px;
`