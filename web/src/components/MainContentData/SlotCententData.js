import React from 'react';
import styled, {css} from 'styled-components';
import { colors, fonts } from '../../Styles/Global';

const ContentData = styled.div`
  width: 837px;
  height: 183px;
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 0px 16px 24px 24px;
  margin-bottom: 24px;

  .status-box {
    width: 837px;
    height: 50px;
    background: ${colors.backgroundColor};
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-left: -24px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 24px;
    justify-content:space-between;
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

const Fonts = styled.div`
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
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

const SlotContent = (props) => {
  return (
    <div>
      <ContentData>
        <div className="status-box">
          <div className="status">
            <Fonts>{props.status}</Fonts>
            <Fonts yellow> {props.pending}</Fonts>
            <Fonts green> {props.completed}</Fonts>
          </div>
          <Fonts > {props.newYear}</Fonts>
        </div>
        <div className="text-box">
          <div className="text">
            <Fonts>{props.icon}</Fonts>
            <Fonts text>{props.text}</Fonts>
          </div>
          {props.button}
        </div>
        <div className="name-box">
          <Fonts primary>{props.name}</Fonts>
          <Fonts primary>{props.date}</Fonts>
        </div>
      </ContentData>
    </div>
  );
}
 
export default SlotContent;