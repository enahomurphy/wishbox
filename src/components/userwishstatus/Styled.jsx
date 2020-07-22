import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const StatusContainer = styled.div`
  width: 340px;
  height: 200px;
  background: ${colors.white};
  box-shadow: 0px 1.81667px 6.8125px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 20px 18px 0 14px;
 
  ${props => props.primary && css`
  width: 340px;
  height: ${props => props.second ? "258px" : "415px"};
  `}
`

export const StatusGroup = styled.div`
  display: flex;
  margin-bottom: 14px;
  justify-content: space-between;
  align-items: center;

  .yellowBox {
  margin-right: -160px;
}

.star {
  border-radius: 50%;
  padding: 2px;
  background: rgba(25, 179, 68, 0.2);
}
  ${props => props.primary && css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  `}
`

export const Text = styled.div`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.yellow ? "#E4C940" : "#0E0E52"};

  ${props => props.green && css`
    color: #19B344;
    margin-left: 5px;
  `}

  ${props => props.primary && css`
    font-weight: 500;
    font-size: 16px;
    line-height:${props => props.content ? "26px" : "19px"};
    color: ${props => props.content ? "#505050" : "#AEAEAE"};
    margin-bottom: 10px;
  `}

  ${props => props.secondary && css`
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.names ? "18px" : "14px"};
    line-height: ${props => props.names ? "22px" : "17px"};
    color: ${props => props.names ? "#909090" : "#AAACAE"};
    margin-top: ${props => props.names ? "10px" : "20px"};
    text-transform: ${props => props.otherWishes ? "uppercase" : "none"};
  `}
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`

export const Icon = styled.div`
  margin-right: -22px;
  ${props => props.text && css`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.gray};
  margin-left: 30px;
  `}
`