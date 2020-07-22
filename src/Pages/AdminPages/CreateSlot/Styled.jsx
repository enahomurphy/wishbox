import styled from 'styled-components';
import { colors, Fonts } from '../../../Styles/Global';

export const SlotContainer = styled.div`
  width: 600px;
  height: 714px;
  background: ${colors.white};
  border-radius: 6px;
  position: absolute;
  left: 420px;
  top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  label {
    font-family: ${Fonts.primary};
    font-style: normal; 
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${colors.darkGray};
    margin-bottom: 10px;
  }

  input {
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 10px 0px 32px 0px;
    padding: 10px;
    display: block;
  }

  textarea {
    width: 400px;
    height: 98px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 10px 0px 32px 0px;
    padding: 10px;
    display: block;
  }
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${colors.darkGray};
  }

  p {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${colors.gray};
    margin-top: 10px;
    margin-bottom: 40px;
  }
`

export const ActiveArrow = styled.div`
  position: absolute;
  top: -0px;
  left: -50px;
`