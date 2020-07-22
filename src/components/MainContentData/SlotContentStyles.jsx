import styled, {css} from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const ContentData = styled.div`
  width: 810px;
  height: 183px;
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  margin: 20px auto;

  .status-box {
    width: 805px;
    height: 50px;
    background: ${colors.backgroundColor};
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    justify-content:space-between;
    margin-left: -20px;
    padding: 0 22px;
  }

  .status {
    display: flex;
    width: 160px;
    justify-content: space-between;
    align-items: center;
  }

  .text-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 80px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 530px;
  }
 `

export const Font = styled.div`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.yellow ? "#E4C940" : "#0E0E52" };

  ${props => props.green && css`
    color: ${props => props.green ? "#19B344" : "#0E0E52"};
    padding-left:10px;
  `}

  ${props => props.text && css`
    width:452px;
    height:52px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color:${colors.lightBlack };
  `}

  ${props => props.primary && css`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color:${colors.lightGray };
    margin-top: 10px;
  `}
 `
