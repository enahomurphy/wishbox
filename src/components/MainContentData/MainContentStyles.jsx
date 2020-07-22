import styled, {css} from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';


export const ContentData = styled.div`
  width: 837px;
  height: 200px;
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  margin: 24px auto;
`

export const NameContainer = styled.div`
  width: 837px;
  height: 50px;
  background: ${colors.backgroundColor};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600px;
    color: ${colors.navy};
    padding: 0 20px;
  }
`
export const WishContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
    color: ${colors.darkGray};
    margin: 0;
    padding-left: 20px;
  }
    
  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: ${colors.darkGray};
    margin: 0;
    padding-right: 20px;
  }
`
export const WishContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 300px;
    height: 52px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: ${colors.lightBlack};
    padding-left: 20px;
  }
   
  ${props => props.primary && css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${colors.lightGray};
    margin-bottom: 16px;
    padding-right: 20px;
  `}
`