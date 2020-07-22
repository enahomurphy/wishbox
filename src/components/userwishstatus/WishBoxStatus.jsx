import React from 'react';
import PropTypes from 'prop-types';

import {
  StatusContainer,
  StatusGroup,
  Text,
  IconBox,
  Icon
} from './Styled';

export const WishBoxStatus = (props) => {
  return (
    <div>
      <StatusContainer>
        <StatusGroup>
          <StatusGroup primary>
            <Text>{props.status}</Text>
            <Text yellow>{props.pending}</Text>
            <Text green>{props.complete}</Text>
          </StatusGroup>
          <div className="yellowBox">{props.yellowBox}</div>
          <div className="star">{props.StarIcon}</div>
        </StatusGroup> 
        <Text primary>{props.date}</Text>
        <Text primary content="true">{props.wishContent}</Text>
      </StatusContainer>
    </div>
  );
}

WishBoxStatus.propTypes = {
  status: PropTypes.string.isRequired,
  pending: PropTypes.string,
  complete: PropTypes.string,

  yellowBox: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  StarIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wishContent: PropTypes.string.isRequired
}

export const FulfilledBoxStatus = (props) => {
  return (
    <div>
      <StatusContainer primary>
        <StatusGroup>
          <StatusGroup primary>
            <Text>{props.status}</Text>
            <Text yellow>{props.pending}</Text>
            <Text green>{props.complete}</Text>
          </StatusGroup>
          <div className="star">{props.StarIcon}</div>
        </StatusGroup>
        <Text primary>{props.date}</Text>
        <Text primary content="true">{props.wishContent}</Text>
        <Text secondary> {props.fulfilledBy}</Text>
        <Text secondary names>{props.name}</Text>
        <Text secondary otherWishes>{props.slot}</Text>
        <Text secondary names> {props.wishType}</Text>
        <Text secondary otherWishes> {props.otherWishes}</Text>
        <IconBox>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon> {props.ProfileIcon}</Icon>
          <Icon text> {props.numOfWishes}</Icon>
        </IconBox>
      </StatusContainer>
    </div>
  );
}

FulfilledBoxStatus.propTypes = {
  slot: PropTypes.string,
  pending: PropTypes.string,
  complete: PropTypes.string,
  otherWishes: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  wishType: PropTypes.string.isRequired,
  wishContent: PropTypes.string.isRequired,
  fulfilledBy: PropTypes.string.isRequired,
 
  StarIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  ProfileIcon: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  numOfWishes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export const SecondFulfilledBoxStatus = (props) => {
  return (
    <div>
      <StatusContainer primary second>
        <StatusGroup>
          <StatusGroup primary>
            <Text>{props.status}</Text>
            <Text yellow>{props.pending}</Text>
            <Text green>{props.complete}</Text>
          </StatusGroup>
          <div className="star">{props.StarIcon}</div>
        </StatusGroup>
         
        <Text primary>{props.date}</Text>
        <Text primary content="true">{props.wishContent}</Text>
        <Text secondary> {props.fulfilledBy}</Text>
        <Text secondary names>{props.name}</Text>
      </StatusContainer>
    </div>
  );
}