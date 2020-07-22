import styled, { css } from 'styled-components';
import {Fonts, colors} from '../../Styles/Global'

export const BoxContainer = styled.div`
  width: 360px;
  height: 254px;
  background: ${colors.white};
  border-radius: 6px ;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 15px;
  position: absolute;
  left: 200px;
  top: 186px;

  @media screen and (max-width: 700px) {
    width: 100px;
    height: 153px;
    background: ${colors.white};
    border-radius: 3.04724px;
    box-shadow: 0px 2.0315px 7.61811px rgba(0, 0, 0, 0.05);
    padding: 15px;
    position: absolute;
    left: 20px;
    top: 208px;
  }
 
  ${props => props.primary && css`
    box-shadow: 0px 7px 30px rgba(55, 124, 255, 0.15);
    border: 1px solid ${colors.lightBlue};
    position: absolute;
    left: 600px;
    top: 186px;

  @media screen and (max-width: 700px) {
    width: 100px;
    height: 153px;
    background: ${colors.white};
    border-radius: 3.04724px;
    box-shadow: 0px 2.0315px 7.61811px rgba(0, 0, 0, 0.05);
    padding: 15px;
    position: absolute;
    left: 138px;
    top: 208px;
  }
  `}

  ${props => props.secondary && css`
    position: absolute;
    left: 1000px;
    top: 186px;
  @media screen and (max-width: 700px) {
    width: 100px;
    height: 153px;
    background: ${colors.white};
    border-radius: 3.04724px;
    box-shadow: 0px 2.0315px 7.61811px rgba(0, 0, 0, 0.05);
    padding: 15px;
    position: absolute;
    left: 255px;
    top: 208px;
  }
  `}
`

export const Div = styled.div`
  font-weight: bold;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-size: 50px;
  line-height: 61px;
  color: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;

  ${props => props.primary && css`
    font-size: 24px;
    line-height: 29px;
    color: ${colors.gray};
  `}
`

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(19, 100, 216, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;

  ${props => props.primary && css`
    background: rgba(245, 207, 8, 0.2);
  `}
  ${props => props.secondary && css`
    background: rgba(25, 179, 68, 0.2);
  `}
`