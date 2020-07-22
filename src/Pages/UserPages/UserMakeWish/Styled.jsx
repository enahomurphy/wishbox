import styled from 'styled-components';
import { Fonts, colors } from '../../../Styles/Global';

export const FormContainer = styled.div`
  width: 480px;
  height: 499px;
  position: absolute;
  top: 235px;
  left: 540px;
  background: ${colors.white};
  border-radius: 6px;
  padding: 28px 40px 40px 40px;

  h2 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${colors.darkGray};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 49px;
  }

  label {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${colors.darkGray};
  }

  input {
    display: block;
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 32px;
  }

  textarea {
    display: block;
    width: 400px;
    height: 98px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    margin-top: 5px;
    padding-top: 15px;
    margin-bottom: 40px;
  }

  input::placeholder, textarea::placeholder {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.gray};
    padding-left: 13px;
  }
 `

export const Arrow = styled.div`
  position: absolute;
  top: 265px ;
  left: 475px;
 `