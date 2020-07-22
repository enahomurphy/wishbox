import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const Sidebar = styled.div`
  width: 355px;
  height: 831px;
  background: ${colors.white};
  border-radius: 6px;
  position: absolute;
  left: 80px;
  top: 140px;
  padding: 10px;
  
 .setting-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 65px;
  }

  .wishes-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .active-bar {
    position: absolute;
    top: 562px;
    left: 0px;
  }
`

export const Text = styled.div`
  width:200px;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight:500;
  font-size: 24px;
  line-height:29px;
  color: ${colors.darkGray};
  margin: 0 auto;
`

export const SideLabel = styled.div`
  font-family:  ${Fonts.primary};
  font-style: normal;
  font-weight:500;
  font-size: 18px;
  line-height:22px;
  color: ${colors.gray};
  margin-bottom: 32px;
  padding-left: 30px;
  
  ${props => props.progress && css`
    color: ${colors.lightBlue};
  `}

  ${props => props.primary && css`
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: ${colors.darkGray};
  `}

  ${props => props.allSlots && css`
    font-size: 14px;
    line-height: 17px;
    color: ${colors.navy};
    text-decoration: underline;
    padding-bottom: 10px;
  `}

  ${props => props.secondary && css`
    font-size: 16px;
    line-height: 19px;
    color: ${colors.darkGray};
  `}
`
export const Icon = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
`

export const TypesBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px auto;
`

export const Types = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    font-family:  ${Fonts.primary};
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.gray};
    text-transform: uppercase;
    margin: 0px;
    padding: 0;
  }

  h3 {
  font-family:  ${Fonts.primary};
  font-style: normal;
  font-weight:500;
  font-size: 24px;
  line-height:29px;
  color: ${colors.darkGray};
  margin: 0px;
  padding: 0;
  }
`