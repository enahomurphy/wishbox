import React from 'react';
import styled, {css} from 'styled-components';
import { colors, fonts } from '../../Styles/Global';

const ContentData = styled.div`
  width: 837px;
  height: 200px;
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 0px 16px 24px 24px;
  margin-bottom: 24px;

  .name-wrapper {
    width: 837px;
    height: 50px;
    background: ${colors.backgroundColor};
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -24px;
    padding: 24px 16px 24px 24px;
    margin-bottom: 20px;
  }

  .wish-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wish {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .prev {
    position: absolute;
  }
`

const Div = styled.div`
   font-family: ${fonts.fontFamily};
    font-style: ${fonts.fontStyle};
    font-size: 18px;
    line-height: 22px;
    font-weight: 600px;
    color: ${colors.navy};

  ${props => props.wishType && css`
      font-size: 24px;
      line-height: 29px;
      font-weight: 500;
      color: ${colors.darkGray};
      margin-bottom: 12px;
  `}

  ${props => props.totalWish && css`
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: ${colors.darkGray};
      margin-bottom: 18px;
  `}

  ${props => props.wishContent && css`
      width: 300px;
      height: 52px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      color: ${colors.lightBlack};
  `}

  ${props => props.primary && css`
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: ${colors.lightGray};
      margin-bottom: 16px;
  `}
`

const MainContentData = (props) => {
  return (
    <div>
      <ContentData >
        <div className="name-wrapper">
          <Div>{props.name}</Div>
          <Div>{props.date}</Div>
        </div>
        <div className="wish-type">
          <Div wishType>{props.wishType}</Div>
          <Div totalWish>{props.totalWish}</Div>
        </div>
        <div className="wish-type">
          <Div wishContent>{props.wishContent}</Div>
          <div>
            <Div primary className="wish">{props.fulfiledWish}</Div>
            <Div primary>{props.pendingWish}</Div>
          </div>
        </div>
      </ContentData>
    </div>
  );
}

export default MainContentData;