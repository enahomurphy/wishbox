import React from 'react';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import Title from '../../../components/Title/Title';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import Footer from '../../../components/Footer/Footer';
import './userfulfiledwish.css';
import {
  UserFulfiledStatus,
  UserFulfiledStatus2
} from '../../../components/User-Wish-Status/UserFulfiledStatus';
import {
  Layer1,
  Vector,
  Vector1,
  FulfiledIcon,
  ActiveBar,
  StarIcon
} from '../../../svg';
import Ellipse1 from '../../../images/Ellipse 1.png'
import Ellipse2 from '../../../images/Ellipse 3.png'

const profileIcon = () => <img src={ Ellipse1 } alt="profile-icon" />
const profileIcon2 = () => <img src={ Ellipse2 } alt="profile-icon" />

const UserFulfiledWish = () => {
  return (
    <div className="fulfiled-content-container">
      <Title fulfiled="Fulfiled" fulfiledWishes="All your fulfiled wishes" />
      <Header />
      <SideBar
        wishbox="wishBox"
        layer={ Layer1() }
        home="Home"
        Slots={ Vector() }
        slot="Slots"
        Vector={ Vector1() }
        wish="Wishes"
        Fulfiled={ FulfiledIcon() }
        fulfiledBlueText="Fulfiled"
        fulfiledActiveBar={ ActiveBar() }
      />
      <div className="fulfiled-wishbox-container">
        <div className="fulfiled-wishbox-wrapper">
          <UserFulfiledStatus
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
            slot="Slot"
            wishType="December Wishbox"
            otherwishes="Other Wishes"
            profileIcon={ profileIcon() }
            profileIcon2={ profileIcon2() }
            numOfWishes="+2000 wishes"
          />
          <UserFulfiledStatus
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
            slot="Slot"
            wishType="December Wishbox"
            otherwishes="Other Wishes"
            profileIcon={ profileIcon() }
            profileIcon2={ profileIcon2() }
            numOfWishes="+2000 wishes"
          />
          <UserFulfiledStatus
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
            slot="Slot"
            wishType="December Wishbox"
            otherwishes="Other Wishes"
            profileIcon={ profileIcon() }
            profileIcon2={ profileIcon2() }
            numOfWishes="+2000 wishes"
          />
        </div>
        <div className="fulfiled-wishbox-wrapper">
          <UserFulfiledStatus2
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
          />
          <UserFulfiledStatus2
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
          />
          <UserFulfiledStatus2
            status="Status:"
            complete="Completed"
            StarIcon={ StarIcon() }
            date="30th June, 2019"
            content=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            fulfiledBy="Fulfiled By"
            name="Damilola Animushaun"
          />
        </div>
      </div>
      <PrevNext />
      <Footer />
    </div>
  );
}

export default UserFulfiledWish;