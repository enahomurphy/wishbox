import React from 'react';

import ContentData from '../../../components/MainContentData/SlotContentData';
import { WishesHeader } from '../../../components/AdminHeader/AdminHeaders';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import SideBar from '../../../components/AdminSideBar/AdminSideBar';
import { Container, MainContent } from '../../../Styles/Elements';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { SlotButton } from '../../../components/Button/Button';
import AdminTitle from '../../../components/Title/AdminTitle';

import {
  Shape,
  SettingIcon,
  ActiveBar, 
  ProfileIcon,
} from '../../../svg';

const Button = () => <SlotButton text="Fulfilled Wish" />

const Wishes = () => {
  return (
    <>
      <Container>
        <WishesHeader />
        <SideBar
          slotNum="23"
          wishesNum="12k"
          fulfilledNum="3k"
          slot="Slots"
          wish="Wishes"
          wishes="WISHES"
          shape={ Shape() }
          name="Veronica Madueke"
          allSlots="See All Slots"
          activeBar={ ActiveBar() }
          january="January Gifting"
          december="December Wishbox"
          newYear="New Year Exchange"
          recent="Recently Added Slots"
          settingIcon={SettingIcon()}
          fulfillments="Fulfillments"
          valentine="Valentine Secret Admirer"
        />
        <MainContent primary>
          <AdminTitle
            text="Wishes"
            filter="Filter"
            shape={ Shape() }
            label="4056 wishes found in New Year Exchange"
          />
          <ContentData
            status="Status:"
            pending="Pending"
            button={ Button() }
            name="Williams Ogah"
            date="30th June, 2019"
            ProfileIcon={ ProfileIcon() }
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            pending="Pending"
            button={ Button() }
            name="Marcelle Umar"
            date="30th June, 2019"
            ProfileIcon={ ProfileIcon() }
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            pending="Pending"
            button={ Button() }
            name="Marcelle Umar"
            date="30th June, 2019"
            ProfileIcon={ ProfileIcon() }
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
        </MainContent>
        <PrevNext />
        <AdminFooter />
      </Container>
    </>
  );
}

export default Wishes;