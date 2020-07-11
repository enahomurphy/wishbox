import React from 'react';

import ContentData from '../../../components/MainContentData/SlotCententData';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import SideBar from '../../../components/AdminSideBar/SlotSideBar';
import { SlotButton } from '../../../components/Button/Button';
import AdminTitle from '../../../components/Title/AdminTitle';
import Footer from '../../../components/Footer/Footer';
import Icon2 from '../../../images/maleIcon2.png';
import Icon3 from '../../../images/Ellipse 3.png';
import Icon from '../../../images/maleIcon.png';
import { Shape } from '../../../svg';
import {
  Container,
  MainContent
} from '../../../Styles/Elements';

const ProfileIcon = () => <img src={Icon} alt="Icon" />
const ProfileIcon2 = () => <img src={Icon2} alt="Icon" />
const ProfileIcon3 = () => <img src={Icon3} alt="Icon" />
const Button = () => <SlotButton text="Fulfiled Wish" />
const view = () =>  <SlotButton text="View"/>

const SingleSlot = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          admin="Admin"
          wishes="Wishes"
          title="wishBox"
          fulfilment="Fulfilments"
          normalDashboard="Dashboard"
        />
        <SideBar />
        <MainContent primary>
          <AdminTitle
            filter="Filter"
            shape={ Shape() }
            text="December Wishbox"
            label="4056 wishes found in New Year Exchange"
          />
          <ContentData
            status="Status:"
            pending="Pending"
            button={ Button() }
            name="Marcelle Umar"
            date="30th June, 2019"
            icon={ ProfileIcon() }
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
           <ContentData
            status="Status:"
            button={ view() }
            completed="Completed"
            date="30th June, 2019"
            icon={ ProfileIcon3() }
            name="Jennifer Ilobache"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
           <ContentData
            status="Status:"
            pending="Pending"
            button={ Button() }
            name="Marcelle Umar"
            date="30th June, 2019"
            icon={ ProfileIcon2() }
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
        </MainContent>
        <PrevNext />
      </Container>
      <Footer/>
    </div>
  );
}

export default SingleSlot;