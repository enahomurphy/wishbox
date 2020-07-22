import React from 'react';
import styled from 'styled-components';

import { FulfillmentsHeader } from '../../../components/AdminHeader/AdminHeaders';
import ContentData from '../../../components/MainContentData/SlotContentData';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import SideBar from '../../../components/AdminSideBar/AdminSideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { SlotButton } from '../../../components/Button/Button';
import AdminTitle from '../../../components/Title/AdminTitle';
import { Container } from '../../../Styles/Elements';
import { colors } from '../../../Styles/Global';

import {
  SettingIcon,
  ActiveBar,
  Shape,
  ProfileIcon,
} from '../../../svg';

const MainContent = styled.div`
  width:885px;
  height:763px;
  position: absolute;
  left: 475px;
  top: 140px;
  background: ${colors.white};
  border-radius: 6px;
  margin-bottom: 20px;
`

const view = () =>  <SlotButton text="View"/>

const Fulfillments = () => {
  return (
    <>
      <Container>
        <FulfillmentsHeader />
        <SideBar
          slotNum="23"
          wishesNum="12k"
          fulfilledNum="3k"
          slot="Slots"
          wish="Wishes"
          shape={Shape()}
          fulfillments="Fulfillments"
          wishes="FULFILLMENTS"
          name="Veronica Madueke"
          allSlots="See All Slots"
          activeBar={ActiveBar()}
          january="January Gifting"
          december="December Wishbox"
          newYear="New Year Exchange"
          settingIcon={SettingIcon()}
          recent="Recently Added Slots"
          valentine="Valentine Secret Admirer"
        />
        <MainContent>
          <AdminTitle
            filter="Filter"
            shape={Shape()}
            text="Fulfillments"
            label="4056 wishes found in New Year Exchange"
          />
          <ContentData
            status="Status:"
            name="Jeff Ikem"
            button={view()}
            completed="Completed"
            date="30th June, 2019"
            ProfileIcon={ProfileIcon()}
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            button={view()}
            completed="Completed"
            name="Kenneth Okonkwo"
            date="30th June, 2019"
            ProfileIcon={ProfileIcon()}
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            button={view()}
            completed="Completed"
            date="30th June, 2019"
            ProfileIcon={ProfileIcon()}
            name="Jennifer Ilobache"
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

export default Fulfillments;