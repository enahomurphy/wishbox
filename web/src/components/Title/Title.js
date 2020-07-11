import React from 'react';
import { Link } from 'react-router-dom';
import './title.css';

const Title = (props) => {
  return (
    <div className="slots-header">
      <h2>{props.slots}</h2>
      <p>{props.label}</p>
      <h2>{props.wish}</h2>
      <Link to="/users/Make Wish">
        <p>{props.smallWishes}</p>
      </Link>
      <h2>{props.fulfiled}</h2>
      <p>{props.fulfiledWishes}</p>
    </div>
  )
}

export default Title;