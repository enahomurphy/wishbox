import React from 'react';
import PropTypes from 'prop-types';
import { BoxContainer, Div, Icon } from './Styled';


export const SlotsBoxSection = (props) => {
  return (
    <div>
      <BoxContainer>
      <Icon>{props.icon}</Icon>
        <Div>{props.num}</Div>
        <Div primary>{props.label}</Div>
      </BoxContainer>
    </div>
  );
}

SlotsBoxSection.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  num: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export const WishesBoxSection = (props) => {
  return (
    <div>
      <BoxContainer primary>
      <Icon primary>{props.icon}</Icon>
        <Div>{props.num}</Div>
        <Div primary>{props.label}</Div>
      </BoxContainer>
    </div>
  );
}

WishesBoxSection.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  num: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}
export const FulfilledBoxSection = (props) => {
  return (
    <div>
      <BoxContainer secondary>
      <Icon secondary>{props.icon}</Icon>
        <Div>{props.num}</Div>
        <Div primary>{props.label}</Div>
      </BoxContainer>
    </div>
  );
}

FulfilledBoxSection.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  num: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}