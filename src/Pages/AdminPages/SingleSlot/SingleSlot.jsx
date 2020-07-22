import React from 'react';

import ContentData from '../../../components/MainContentData/SlotContentData';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import{ Header} from '../../../components/AdminHeader/AdminHeaders';
import SideBar from '../../../components/AdminSideBar/SlotSideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { SlotButton } from '../../../components/Button/Button';
import AdminTitle from '../../../components/Title/AdminTitle';
import { Shape, ProfileIcon } from '../../../svg';

import {
  Container,
  MainContent
} from '../../../Styles/Elements';

const Button = () => <SlotButton text="Fulfilled Wish" />
const view = () =>  <SlotButton text="View"/>

const SingleSlot = () => {
  return (
    <>
      <Container>
        <Header />
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
            ProfileIcon={ ProfileIcon() }
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            button={ view() }
            completed="Completed"
            date="30th June, 2019"
            ProfileIcon={ ProfileIcon() }
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
            ProfileIcon={ ProfileIcon() }
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

export default SingleSlot;