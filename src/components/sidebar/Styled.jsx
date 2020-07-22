import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const SideBarContainer = styled.div`
  width: 120px;
  height: 1021px;
  background: ${colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const P = styled.p`
  font-family: ${Fonts.secondary};
  font-size: 18px;
  line-height: 23px;
  color: ${colors.lightBlue};
  margin-top: 32px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 230px;

  ${props => props.homeActiveBar && css`
    position: absolute;
    left: 0;
    top: 85px;
`}

  ${props => props.slotsActiveBar && css`
    position: absolute;
    left: 0;
    top: 205px;
`}

  ${props => props.wishesActiveBar && css`
    position: absolute;
    left: 0;
    top: 330px;
`}
  ${props => props.fulfilledActiveBar && css`
    position: absolute;
    left: 0;
    top: 460px;
`}

  ${props => props.primary && css`
    margin-top: 20px;
`}

  ${props => props.num && css`
    position: absolute;
    top: 178px;
    left: 70px;
`}
`

export const Text = styled.p`
  font-family: ${Fonts.primary};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${props => props.Blue ? "#377CFF" : "#AAACAE"};
  margin-top:  ${props => props.Blue ? "-10px" : "10px"};

  ${props => props.Home && css`
    margin-top: -15px
  `};
`
export const Icon = styled.div`
  margin-bottom: 20px;
`