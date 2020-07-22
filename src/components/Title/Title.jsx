import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Fonts, colors } from '../../Styles/Global';

const TitleContainer = styled.div`

h2 {
  font-family: ${Fonts.primary};
  font-weight: bold;
  font-style: normal;
  font-size: 36px;
  line-height: 44px;
  color: ${colors.darkGray};
  position: absolute;
  top: 94px;
  left: 199px;
}

p {
  font-family: ${Fonts.primary};
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray};
  position: absolute;
  top: 152px;
  left: 199px;
}

a {
  text-decoration: none;
  cursor: pointer;
}
`

const Title = (props) => {
  return (
    <TitleContainer>
      <h2>{props.type}</h2>
      <p>{props.label}</p>
      <Link to="/users/Make Wish">
        <p>{props.smallWishes}</p>
      </Link>
    </TitleContainer>
  );
}

Title.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  smallWishes: PropTypes.string,
}

export default Title;