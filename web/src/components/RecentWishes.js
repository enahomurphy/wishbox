import React from 'react';
import { Vector3 } from '../svg';
import '../Pages/UserPages/UserHome/userhome.css';

const RecentWishes = () => {
  return (
    <div className="recent-wishes">
      <div className="recent-wishes-date">
        <p>Fulfiled: <span>31 June 2019</span> </p>
        <Vector3 />
      </div>
      <div className="wish">
        I wish for a new pair of the Nike Air Max, thats all I really need right now, my old shoes are bad.
     </div>
    </div>
  );
}

export default RecentWishes;