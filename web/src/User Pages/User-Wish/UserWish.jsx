import React from 'react';
import Title from '../../components/Title/Title';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/Header/Header';
import UserWishStatus from '../../components/User-Wish-Status/UserWishStatus';
import Footer from '../../components/Footer/Footer';
import './userwish.css';
import {
  Layer1,
  Vector,
  Vector6,
  Fulfilled,
  ActiveBar,
  SearchIcon,
  Shape,
  Yellowbox,
  StarIcon
} from '../../svg';

const UserWish = () => {
  return (
    <div className="wish-container">
      <Title wish="Wishes" smallWishes="Make a Wish" />
      <Header />
      <SideBar
        wishbox="wishBox"
        layer={ Layer1() }
        home="Home"
        Slots={ Vector() }
        slot="Slots"
        Vector={ Vector6() }
        wishes="Wishes"
        WishActiveBar={ ActiveBar() }
        Fulfiled={ Fulfilled() }
        fulfiled="Fulfiled"
      />
      <div className="wish-slots-container">
        <h3>Slots</h3>
        <div className="wish-input">
          <SearchIcon />
          <input type="search" placeholder="Search all slots" />
        </div>
        <div className="wish-filter-column">
          <div className="wish-filter-option">
            <div className="option">Filter <Shape /></div>
            <div>December Wishbox</div>
            <div className="blue-text">New Year Exchange</div>
            <div>January Gifting</div>
            <div>Valentine Secret Admirer</div>
            <div>New Year Exchange</div>
            <div>December Wishbox</div>
            <div>New Year Exchange</div>
            <div>January Gifting</div>
            <div>Valentine Secret Admirer</div>
            <div>New Year Exchange</div>
          </div>
        </div>
      </div>
      <div className="wishbox-status">
        <h3>New Year Exchange</h3>
        <p>All your wishes in this slots</p>
        <div className="user-status-wrapper">
          <UserWishStatus
            status="Status:"
            pending="Pending"
            yellowbox={ Yellowbox() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad."
          />
          <UserWishStatus
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad."
          />
        </div>
        <div className="user-status-wrapper">
          <UserWishStatus
            status="Status:"
            pending="Pending"
            yellowbox={ Yellowbox() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad."
          />
          <UserWishStatus
            status="Status:"
            pending="Pending"
            yellowbox={ Yellowbox() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad."
          />
        </div>
        <div className="plus-icon">
          +
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserWish;