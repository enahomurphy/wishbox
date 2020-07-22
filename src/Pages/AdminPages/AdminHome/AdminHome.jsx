import React from 'react';

import { DashBoardHeader } from '../../../components/AdminHeader/AdminHeaders';
import ContentData from '../../../components/MainContentData/MainContentData';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import Sidebar from '../../../components/AdminSideBar/AdminSideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import AdminTitle from '../../../components/Title/AdminTitle';

import {
  Container,
  MainContent
} from '../../../Styles/Elements';

import {
  ArrowBlue,
  SettingIcon,
  ActiveBar,
} from '../../../svg';
 
const AdminHome = () => {
  return (
    <>
      <Container>
        <DashBoardHeader />
        <Sidebar
          settingIcon={ SettingIcon() }
          activeBar={ ActiveBar() }
          fulfillments="Fulfillments"
          name="Veronica Madueke"
          progress="In Progress"
          completed="Completed"
          fulfilledNum={3 +"K"}
          wishesNum={12 +"K"}
          wish="Wishes"
          slots="Slots"
          slot="Slot"
          slotNum={23}
          all="All"
        />
        <MainContent>
          <AdminTitle
            text="Slots"
            arrow={ ArrowBlue() }
            choice="Recently Added"
            label="6 slots in progress"
          />
          <ContentData
            wishContent="We all want something for ourselves this christmas, simply put your.."
            date="13 Friday, May 2019 - 16 Monday, May 2019"
            fulfilledWish="190 Fulfilled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 1"
          />
          <ContentData
            wishContent="We all want something for ourselves this christmas, simply put your.."
            date="13 Friday, May 2019 - 16 Monday, May 2019"
            fulfilledWish="190 Fulfilled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 2"
          />
          <ContentData
            wishContent="We all want something for ourselves this christmas, simply put your.."
            date="13 Friday, May 2019 - 16 Monday, May 2019"
            fulfilledWish="190 Fulfilled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 3"
          />
        </MainContent>
        <PrevNext />
        <AdminFooter />
      </Container>
    </>
  );
}

export default AdminHome;