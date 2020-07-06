import React from 'react';
import { Group2, Group3, SearchIcon } from '../../svg';
import ProfileLogo from '../../images/Ellipse 1.png';
import './header.css';

class Header extends React.Component {
  render () {
    return (
      <div className="header-container">
        <div className="profile-logo-box">
          <div className="bell">
            <div className="red-dots">
              <Group3 />
            </div>
              <Group2 />
          </div>
          <img src={ProfileLogo} alt="profile-logo" />
        </div>
        <div className="header-input-container">
          <div className="filter-column">
            <select id="filter-option">
              <option>Filter</option>
              <option>December Wishbox</option>
              <option>New Year Exchange</option>
              <option>January Gifting</option>
              <option>Valentine Secret Admirer</option>
              <option>New Year Exchange</option>
              <option>December Wishbox</option>
              <option>New Year Exchange</option>
              <option>January Gifting</option>
              <option>Valentine Secret Admirer</option>
              <option>New Year Exchange</option>
            </select>
          </div>
          <div className="header-input">
            <SearchIcon />
            <input type="search" placeholder="Find..." />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;