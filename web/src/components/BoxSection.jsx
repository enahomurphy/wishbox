import React from 'react';
import '../User Pages/User-Home/userhome.css';

export const BoxSection = (props) => {
  return (
    <div className="box">
      <div className="slot-img">{props.img}</div>
      <div className="slot-num">{props.num}</div>
      <div className="slot-label">{props.label}</div>
    </div>
  );
};

export const BoxSection1 = (props) => {
  return (
    <div className="box-1">
      <div className="slot-img-1">{props.img1}</div>
      <div className="slot-num">{props.num}</div>
      <div className="slot-label">{props.label}</div>
    </div>
  );
};

export const BoxSection2 = (props) => {
  return (
    <div className="box">
      <div className="slot-img-2">{props.img2}</div>
      <div className="slot-num">{props.num}</div>
      <div className="slot-label">{props.label}</div>
    </div>
  );
};