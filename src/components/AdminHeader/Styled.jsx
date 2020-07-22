import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const HeaderContainer = styled.div`
  width : 1440px;
  height: 100px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

  ${props => props.primary && css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: none;
    margin: 0 80px;
  `}
`

export const HeaderTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: ${Fonts.secondary};
    font-size: 32px;
    line-height: 40px;
    color: ${colors.lightBlue};
  }

  p {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${colors.gray};
    padding-top: 10px;
    margin-left: 10px;
  }
`

export const LinkContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  a {
    text-decoration: none;
  }
`

export const LinkList = styled.div`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.primary ? "#377CFF" : "#AAACAE"};
`

export const IconBox = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActiveLink = styled.div`
  position: absolute;
  top: 85px;
  left: 603px;

  ${props => props.Wishes && css`
    position: absolute;
    top: 85px;
    left: 732px;
  `}

  ${props => props.Fulfillment && css`
    position: absolute;
    top: 85px;
    left: 862px;
  `}
`