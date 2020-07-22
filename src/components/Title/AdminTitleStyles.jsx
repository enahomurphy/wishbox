import styled, { css } from 'styled-components';
import { Fonts, colors } from '../../Styles/Global';

export const InputBox = styled.div`
  width: 845px;
  height: 80px;
  background: ${colors.white};
  margin: 24px auto;
`

export const NewTitle = styled.div`
  font-family: ${Fonts.primary};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.darkGray};

.input-box {
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 6px;
  background: #F7F7F7;
  padding: 0 10px;
  cursor: pointer;
  position: absolute;
  left: 590px;
  top: 30px;
}

.input-box input {
  border: none;
  outline: none;
  margin-left: 10px;
  background: #F7F7F7;
  cursor: pointer;
}

.input-box input::placeholder {
  font-family: ${Fonts.primary};
  font-weight: bold;
  font-style: normal;
  font-size: 15px;
  line-height: 14px;
  color: rgba(43, 48, 52, 0.4);
}

.arrow {
  position: absolute;
  left: 140px;
  top: 1px;
}

.shape{
  padding-left: 12px;
}

${props => props.primary && css`
  color:${colors.gray};
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  margin-top: 11px;
`}

${props => props.secondary && css`
  color:${colors.lightBlue};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  left: 410px;
  top: 45px;
`}

${props => props.initial && css`
  color:${colors.darkGray};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  left: 490px;
  top: 43px;
`}
`
