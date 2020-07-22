import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

export const Sidebar = styled.div`
  width: 355px;
  height: 725px;
  padding-top: 32px;
  padding-left: 15px;
  border-radius: 6px;
  background: ${colors.white};
  position: absolute; 
  left: 80px;
  top: 140px;

  h2 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height:29px;
    color: ${colors.darkGray};
    margin-bottom: 40px;
  }
 
.delete {
  display: flex;
  width: 307px;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.form-btn {
  margin-top: 20px;
}
`

export const Div = styled.div`
  ${props => props.delete && css`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-decoration: underline;
    color: ${colors.navy};
    cursor: pointer;
    width: 78px;
  `}

  ${props => props.primary && css`
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${colors.gray};
  `}
`

export const FormContainer = styled.div`
  label {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${colors.gray};
    margin-bottom: 10px;
  }

  input {
    width: 307px;
    height: 50px;
    border: 1px solid #D6DAE1;
    box-sizing: border-box;
    border-radius: 3px;
    padding-left: 10px;
    margin: 10px 10px 35px 0px;
    display: block;
  }

  textarea {
    width: 307px;
    height: 109px;
    border: 1px solid #D6DAE1;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px;
    line-height: 24px;
    margin: 10px 10px 28px 0px;
    display: block;
  }

  input::placeholder, textarea::placeholder {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.darkGray};
  }
`