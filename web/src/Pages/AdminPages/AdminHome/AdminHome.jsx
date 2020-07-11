import React from 'react';

import ContentData from '../../../components/MainContentData/MainContentData';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import Sidebar from '../../../components/AdminSideBar/AdminSideBar';
import AdminTitle from '../../../components/Title/AdminTitle';
import Footer from '../../../components/Footer/Footer';
import AdminIcon from '../../../images/AdminIcon.png';
import {
  Container,
  MainContent
} from '../../../Styles/Elements';
import {
  HeaderActiveBar,
  ArrowBlue,
  SettingIcon,
  ActiveBar
} from '../../../svg';

const Icon = () => <img src={ AdminIcon } alt="Icon" />

const AdminHome = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          admin="Admin"
          title="wishBox"
          wishes="Wishes"
          dashboard="Dashboard"
          fulfilment="Fulfilments"
          HeaderActiveBar={ HeaderActiveBar() }
        />
        <Sidebar
          settingIcon={ SettingIcon() }
          activeBar={ ActiveBar() }
          Icon={ Icon() }
          name="Veronica Madueke"
          progress="In Progress"
          completed="Completed"
          type3="Fulfilments"
          type2="Wishes"
          type1="Slot"
          num1="23"
          num2="12k"
          num3="3k"
          slot="Slots"
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
            fulfiledWish="190 Fulfiled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 1"
          />
          <ContentData
            wishContent="We all want something for ourselves this christmas, simply put your.."
            date="13 Friday, May 2019 - 16 Monday, May 2019"
            fulfiledWish="190 Fulfiled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 2"
          />
          <ContentData
            wishContent="We all want something for ourselves this christmas, simply put your.."
            date="13 Friday, May 2019 - 16 Monday, May 2019"
            fulfiledWish="190 Fulfiled"
            wishType="December Wishbox"
            pendingWish="1810 Pending"
            totalWish="2000 Wishes"
            name="Slots 3"
          />
        </MainContent>
        <PrevNext />
      </Container>
      <Footer />
    </div>
  );
}

export default AdminHome;