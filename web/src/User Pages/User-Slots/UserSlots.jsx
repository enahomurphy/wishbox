import React from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import SlotsData from '../../components/SlotsData';
import SideBar from '../../components/sidebar/SideBar';
import PrevNext from '../../components/Prev-Next-Button/PrevNext';
import Footer from '../../components/Footer/Footer';
import './userslots.css';
import {
  Layer1,
  Vector4,
  ActiveBar,
  Group,
  Vector1,
  Fulfilled
} from '../../svg';

const Content = () => {
  return (
    <div>
      We all want something for ourselves this christmas, simply<br />
      put your wish out there and someone might just get it for<br />
      you and you can also return the favor if you like!
    </div>
  );
}

const UserSlots = () => {
  return (
    <div className="slots-container">
      <Title slots="Slots" label="6 Slots in Progress"/>
      <Header />
      <SideBar
        wishbox="wishBox"
        layer={ Layer1() }
        home="Home"
        Slots={ Vector4() }
        ActiveBar={ ActiveBar() }
        Group={ Group() }
        slots="Slots"
        Vector={ Vector1() }
        wish="Wishes"
        Fulfiled={ Fulfilled() }
        fulfiled="Fulfiled"
      />
      <div className="slots-container-wrapper">
        <SlotsData
          slots="Slots"
          num="1"
          title="December Wishbox"
          date="13/05/19 - 16/06/19"
          wishes="2000 Wishes"
          content={ Content() }
        />
        <SlotsData
          slots="Slots"
          num="2"
          title="December Wishbox"
          date="13/05/19 - 16/06/19"
          wishes="2000 Wishes"
          content={ Content() }
        />
        <SlotsData
          slots="Slots"
          num="3"
          title="December Wishbox"
          date="13/05/19 - 16/06/19"
          wishes="2000 Wishes"
          content={ Content() }
        />
        <SlotsData
          slots="Slots"
          num="5"
          title="December Wishbox"
          date="13/05/19 - 16/06/19"
          wishes="2000 Wishes"
          content={ Content() }
        />
        <SlotsData
          slots="Slots"
          num="6"
          title="December Wishbox"
          date="13/05/19 - 16/06/19"
          wishes="2000 Wishes"
          content={ Content() }
        />
      </div>
      <PrevNext />
      <Footer />
    </div>
  );
}

export default UserSlots;