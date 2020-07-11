import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/UserPages/UserSlots/userslots.css';

const SlotsData = (props) => {
  return (
    <div>
      <div className="slots-data-container">
        <div className="num-box">
          <h3>{ props.slots }</h3>
          <p>{ props.num }</p>
        </div>
        <div className="title-box">
          <p className="title">{ props.title }</p>
          <p className="date">{ props.date }</p>
          <p className="slots-wishes">{ props.wishes }</p>
        </div>
        <p className="line"></p>
        <div className="content-box">
          <p>{ props.content }</p>
        </div>
        <p className="line"></p>
        <div className="btn-slots">
        <Link to="/users/Make Wish" >
          <button>Make a Wish</button>
        </Link>
          </div>
      </div>
    </div>
  );
}

export default SlotsData;