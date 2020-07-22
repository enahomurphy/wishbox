import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';


const NewButton = styled.button`
  width: 307px;
  height: 50px;
  background: ${colors.lightBlue};
  color: ${colors.white};
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;

  ${props => props.primary && css`
    width: 130px;
    height: 50px;
    font-size: 19px;
    background: ${colors.white};
    border: 1px solid ${colors.lightBlue};
    color: ${colors.lightBlue}
  `}

  ${props => props.secondary && css`
     width: 400px;
  `}
`

export const MakeButton = (props) => {
  return (
    <div>
      <NewButton make>
        {props.text}
      </NewButton>
    </div>
  );
}

MakeButton.propTypes = {
  text: PropTypes.string
}

export const SlotButton = (props) => {
  return (
    <div>
      <NewButton primary>
        {props.text}
      </NewButton>
    </div>
  );
}

SlotButton.propTypes = {
  text: PropTypes.string
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

CreateButton.propTypes = {
  text: PropTypes.string
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

Button.propTypes = {
  text: PropTypes.string
}

export default Button;