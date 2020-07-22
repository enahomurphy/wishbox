import React from 'react';
import PropTypes from 'prop-types';
import { Font, ContentData } from './SlotContentStyles';

const SlotContent = (props) => {
  return (
    <div>
      <ContentData>
        <div className="status-box">
          <div className="status">
            <Font>{props.status}</Font>
            <Font yellow> {props.pending}</Font>
            <Font green> {props.completed}</Font>
          </div>
          <Font > {props.newYear}</Font>
        </div>
        <div className="text-box">
          <div className="text">
            {props.ProfileIcon}
            <Font text>{props.text}</Font>
          </div>
          {props.button}
        </div>
        <div className="name-box">
          <Font primary>{props.name}</Font>
          <Font primary>{props.date}</Font>
        </div>
      </ContentData>
    </div>
  );
}
 
SlotContent.propTypes = {
  status: PropTypes.string.isRequired,
  pending: PropTypes.string,
  completed: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.element,
  name: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default SlotContent;