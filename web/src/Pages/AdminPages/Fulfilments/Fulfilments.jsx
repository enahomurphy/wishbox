import React from 'react';
import styled from 'styled-components';

import ContentData from '../../../components/MainContentData/SlotCententData';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import SideBar from '../../../components/AdminSideBar/AdminSideBar';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import { SlotButton } from '../../../components/Button/Button';
import AdminTitle from '../../../components/Title/AdminTitle';
import Footer from '../../../components/Footer/Footer';
import { Container } from '../../../Styles/Elements';
import { colors } from '../../../Styles/Global';

import Icon3 from '../../../images/Ellipse 3.png';
import Icon4 from '../../../images/AdminIcon.png';
import Icon from '../../../images/maleIcon2.png';
import Icon2 from '../../../images/Icon3.png';
import {
  HeaderActiveBar,
  SettingIcon,
  ActiveBar,
  Shape,
} from '../../../svg';

const MainContent = styled.div`
  width:885px;
  height:763px;
  position: absolute;
  left: 475px;
  top: 140px;
  background: ${colors.white};
  border-radius: 6px;
  padding: 34px 24px 24px 24px;
  margin-bottom: 20px;
`
const ProfileIcon = () => <img src={Icon} alt="Icon" />
const ProfileIcon2 = () => <img src={Icon2} alt="Icon" />
const ProfileIcon3 = () => <img src={Icon3} alt="Icon" />
const AdminIcon = () => <img src={Icon4} alt="Icon" />

const view = () =>  <SlotButton text="View"/>

const Fulfilments = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          title="wishBox"
          admin="Admin"
          normalDashboard="Dashboard"
          wishes="Wishes"
          blueWishes="Fulfilments"
          activeFulfilment={HeaderActiveBar()}
        />
        <SideBar
          num1="23"
          num3="3k"
          num2="12k"
          type1="Slot"
          type2="Wishes"
          shape={Shape()}
          type3="Fulfilments"
          wishes="FULFILMENTS"
          Icon={ AdminIcon() }
          name="Veronica Madueke"
          allSlots="See All Slots"
          ActiveBar={ ActiveBar() }
          wishType3="January Gifting"
          wishType1="December Wishbox"
          wishType2="New Year Exchange"
          settingIcon={ SettingIcon() }
          recent="Recently Added Slots"
          wishType4="Valentine Secret Admirer"
        />
        <MainContent>
          <AdminTitle
            filter="Filter"
            shape={ Shape() }
            text="Fulfilments"
            label="4056 wishes found in New Year Exchange"
          />
          <ContentData
            status="Status:"
            name="Jeff Ikem"
            button={ view() }
            completed="Completed"
            date="30th June, 2019"
            icon={ ProfileIcon() }
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
          <ContentData
            status="Status:"
            button={ view() }
            completed="Completed"
            name="Kenneth Okonkwo"
            date="30th June, 2019"
            icon={ ProfileIcon2() }
            newYear="New Year Exchange"
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
            newYear="New Year Exchange"
            text="I wish for a new pair of the Nike Air Max, 
            thats all I really need right now, my old shoes are bad"
          />
        </MainContent>
      </Container>
      <PrevNext />
      <Footer />
    </div>
  );
}

export default Fulfilments;