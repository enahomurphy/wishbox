import React from 'react';
import PropTypes from 'prop-types';

import { SearchIcon } from '../../svg';
import { InputBox, NewTitle} from './AdminTitleStyles';

const Title = (props) => {
  return (
    <div>
      <InputBox>
        <NewTitle>{props.text}</NewTitle>
        <NewTitle primary>{props.label}</NewTitle>
        <div className="input-wrapper">
          <NewTitle secondary>{props.choice}<span className="arrow">{props.arrow}</span> </NewTitle>
          <NewTitle initial>{props.filter}<span className="shape" >{props.shape}</span> </NewTitle>
          <NewTitle>
            <div className="input-box">
              <SearchIcon />
              <input type="search" placeholder="Find..." />
            </div>
          </NewTitle>
        </div>
      </InputBox>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  choice: PropTypes.string,
  filter: PropTypes.string,

  shape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  arrow: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
}

export default Title;