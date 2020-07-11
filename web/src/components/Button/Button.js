import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts } from '../../Styles/Global';

const NewButton = styled.button`
  width: 307px;
  height: 50px;
  background: ${colors.lightblue};
  color: ${colors.white};
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border-radius: 6px;
  border: none;
  outline: none;

  ${props => props.primary && css`
    width: 130px;
    height: 50px;
    font-size: 20px;
    background: ${colors.white};
    border: 1px solid ${colors.lightblue};
    color: ${colors.lightblue}
  `}

  ${props => props.secondary && css`
     width: 400px;
  `}
`

export const SlotButton = (props) => {
  return (
    <div>
      <NewButton primary>
        {props.text}
      </NewButton>
    </div>
  );
}

export const CreateButton = (props) => {
  return (
    <div>
      <NewButton secondary>
        {props.text}
      </NewButton>
    </div>
  );
}

const Button = (props) => {
  return (
    <div>
      <NewButton >
        {props.text}
      </NewButton>
    </div>
  );
}

export default Button;