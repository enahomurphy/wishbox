import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  TitleBox,
  Text,
  SlotsContainer,
  SlotsIdBox,
  ContentBox,
  ButtonBox
} from './Styled';

const SlotsData = (props) => {
  return (
    <div>
      <SlotsContainer>
        <SlotsIdBox>
          <h3>{props.slots} <br /> <span>{props.num}</span></h3>
        </SlotsIdBox>
        <TitleBox>
          <Text>{props.title}</Text>
          <Text date>{props.date}</Text>
          <Text wishes>{props.wishes}</Text>
        </TitleBox>
        <ContentBox>
          {props.content}
        </ContentBox>
        <ButtonBox>
          <Link to="/users/Make Wish" >
            <button>Make a Wish</button>
          </Link>
        </ButtonBox>
      </SlotsContainer>
    </div>
  );
}

SlotsData.propTypes = {
  slots: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  wishes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  content: PropTypes.object.isRequired,
}

export default SlotsData;