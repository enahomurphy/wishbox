import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../../Styles/Global';

export const ProfileContainer = styled.div`
  width: 716px;
  height: 653px;
  position: absolute;
  top: 140px;
  left: 362px;
  background: ${colors.white};
  border-radius: 6px;
  display: flex;
`
 
export const FormContainer = styled.div`
  padding-left: 32px;

  label {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-size: 16px;
    color: ${colors.gray};
    line-height: 14px;
  }

  input {
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    box-sizing: border-box;
    border-radius: 3px;
    display: block;
    padding: 10px;
    margin: 10px 0px 24px 0px;
  }

  input::placeholder {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-size: 16px;
    color: ${props => props.primary ? "#909090" : "#909090"};
    line-height: 19px;
  }

  p {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${colors.darkGray};
    line-height: 17px;
    text-transform: uppercase;
  }
`
   
export const LinkBox = styled.div`
  width: 250px;
  height: 653px;
  border-right: 1px solid #F0F0F0;
  padding-left: 20px;

  h2 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: ${colors.darkGray};
    line-height: 29px;
    margin-bottom: 36px;
 }

  a {
    text-decoration: none;
  }
`

export const P = styled.p`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.primary ? "#909090" : "#377CFF" };
  line-height: 22px;
  margin-bottom: 24px;    
`

export const Icon = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`

export const ActiveLink = styled.div`
  position: absolute;
  left: 0px;
  top: 80px;

${props => props.Arrow && css`
  position: absolute;
  left: -60px;
  top: 0px;
`}

${props => props.primary && css`
  position: absolute;
  left: 0px;
  top: 125px;
`}
`