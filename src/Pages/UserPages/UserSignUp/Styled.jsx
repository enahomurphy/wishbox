import styled, { css } from 'styled-components';
import { Fonts, colors } from '../../../Styles/Global';

export const Container = styled.div`
  display: flex;
  .music-icon {
    margin-top: 180px;
  }

  ${props => props.primary && css`
    width: 391px;
    height: 842px;
    display: block;
    background: linear-gradient(180deg, #2E3694 0%, #4494EC 100%);
  `}

  ${props => props.secondary && css`
    width: 789px;
    height: 842px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  `}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-size: 32px;
  font-family: ${Fonts.secondary};
  color: ${colors.white};
  margin: 16px;

  ${props => props.primary && css`
    width: 262px;
    height: 102px;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family:${Fonts.primary};
    font-weight: normal;
    font-style: normal;
    font-size: 23px;
    line-height: 34px;
    margin-top: 35px;
  `}

  ${props => props.initial && css`
    width: 162px;
    height: 34px;
    font-style: normal;
    font-weight: 600;
    font-family: ${Fonts.primary};
    font-size: 16px;
    line-height: 34px;
    text-align: center;
    color: ${colors.white}
    margin-top: 32px;
  `}
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 162px;
  margin-top: 24px;
`

export const Content = styled.div`
  width: 450px;
  margin-top: 100px;
  ${props => props.header && css`
    width: 255px;
    height: 29px;
    font-style: normal;
    font-weight: 500;
    font-family: ${Fonts.primary};
    font-size: 24px;
    line-height: 29px;
    color:${colors.lightBlue};
  `}

  ${props => props.primary && css`
    width: 230px;
    height: 17px;
    font-style: normal;
    font-weight: normal;
    font-family: ${Fonts.primary};
    font-size: 14px;
    line-height: 17px;
    color:${colors.gray};
    margin-top: 10px;
    margin-bottom: 20px;
  `}
`

export const ContentForm = styled.div`
${props => props.checkBox && css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 32px 0;

  p {
    font-style: normal;
    font-weight: normal;
    font-family:${Fonts.primary};
    font-size: 12px;
    line-height: 14px;
    color: ${colors.gray};
    padding-left: ${props => props.left ? "0px" : "10px"};
  }

  a {
    text-decoration: none;
    color: ${colors.lightBlue};
    cursor: pointer;
  }
`}

  label {
    font-style: normal;
    font-weight: normal;
    font-family: ${Fonts.primary};
    font-size: 16px;
    line-height: 14px;
    color: ${colors.darkGray};
    padding-top: 32px;
  }

  .input-box {
    display: block;
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 32px;
}

  input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-family: ${Fonts.primary};
    font-size: 12px;
    line-height: 14px;
    color: ${colors.gray};
    padding-left: 10px;
  }
`