import React from 'react';
import { LeftArrow, RightArrow } from '../../svg';
import './prevnext.css';

const PrevNext = () => {
  return (
    <div className="btn-wrapper">
      <LeftArrow />
      <p className="prev">Prev</p>
      <p className="num-pages">1  <span className="two"> 2</span>3  4 ... 263</p>
      <RightArrow />
      <p className="next">Next</p>
    </div>
  );
}

export default PrevNext;