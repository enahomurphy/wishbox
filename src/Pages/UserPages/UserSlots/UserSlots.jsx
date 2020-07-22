import React from 'react';
import styled from 'styled-components'

import Title from '../../../components/Title/Title'
import { Container } from '../../../Styles/Elements';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import SlotsData from '../../../components/slotsData/SlotsData';
import AdminFooter from '../../../components/Footer/AdminFooter';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';

import {
  HomeGrayIcon,
  SlotSkyBlueIcon,
  SlotNum,
  WishesIcon,
  FulfilledIcon,
  ActiveBar

} from '../../../svg';

const SlotsDataWrapper = styled.div`
  position: absolute;
  top: 199px;
  left: 199px;
`

const Content = () => {
  return (
    <p>
      We all want something for ourselves this christmas, simply<br />
      put your wish out there and someone might just get it for<br />
      you and you can also return the favor if you like!
    </p>
  );
}

const UserSlot = () => {
  return (
    <>
      <Container primary>
        <Header />
        <Title type="Slots" label="6 Slots in Progress" />
        <SideBar
          wishes="Wishes"
          homeGray="Home"
          slotsBlue="Slots"
          wishBox="wishBox"
          fulfilled="FulFilled"
          slotNum={ SlotNum() }
          homeIcon={ HomeGrayIcon() }
          wishesIcon={ WishesIcon() }
          slotIcon={ SlotSkyBlueIcon() }
          slotsActiveBar={ ActiveBar() }
          fulfilledIcon={ FulfilledIcon() }
        />
        <SlotsDataWrapper>
          <SlotsData
            num={1}
            slots="Slots"
            wishes="2000 Wishes"
            content={ Content() }
            title="December WishBox"
            date="13/05/19 - 16/06/19"
          />
          <SlotsData
            num={2}
            slots="Slots"
            wishes="2000 Wishes"
            content={ Content() }
            title="December WishBox"
            date="13/05/19 - 16/06/19"
          />
          <SlotsData
            num={3}
            slots="Slots"
            wishes="2000 Wishes"
            content={ Content() }
            title="December WishBox"
            date="13/05/19 - 16/06/19"
          />
          <SlotsData
            num={5}
            slots="Slots"
            wishes="2000 Wishes"
            content={ Content() }
            title="December WishBox"
            date="13/05/19 - 16/06/19"
          />
          <SlotsData
            num={6}
            slots="Slots"
            wishes="2000 Wishes"
            content={ Content() }
            title="December WishBox"
            date="13/05/19 - 16/06/19"
          />
        </SlotsDataWrapper>
        <PrevNext />
        <AdminFooter />
      </Container>
    </>
  );
}

export default UserSlot;