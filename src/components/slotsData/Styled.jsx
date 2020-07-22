import styled, { css } from 'styled-components';
import { Fonts, colors } from '../../Styles/Global';

export const SlotsContainer = styled.div`
  width: 1185px;
  height: 124.98px; 
  background: ${colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  display: flex;
  margin-top: 15px;
`

export const SlotsIdBox = styled.div`
  width: 100px;
  height: 124.98px;
  background: ${colors.backgroundColor};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  font-family: ${Fonts.primary};
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.navy};
  text-align: center;
`

export const TitleBox = styled.div`
  width: 275px;
  height: 124.98px;
  padding: 0px 14px;
  border-right: 1px solid #EBEBEB;
`

export const Text = styled.p`
  font-family: ${Fonts.primary};
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.darkGray};
  margin: 0px;
  padding: 10px 0;

  ${props => props.date && css`
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.navy};
    padding: 0 0 10px 0;
  `}

  ${props => props.wishes && css`
    font-size: 20px;
    color: #999999;
    padding: 0 0 10px 0;
  `}
`

export const ContentBox = styled.div`
  width: 448px;
  height: 124.98px;
  border-right: 1px solid #EBEBEB;
  padding: 0 14px;

  p {
    width: 418px;
    height: 77.99px;
    font-family: ${Fonts.primary};
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    color: #999999;
    padding-top: 12px;
  }
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  button {
    width: 200px;
    height: 49.99px;
    background: ${colors.lightBlue};
    border-radius: 3px;
    font-family: ${Fonts.primary};
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    color:${colors.white};
    outline: none;
    border: none;
    cursor: pointer;
  }
`