import React from 'react';

import ContentData from '../../../components/MainContentData/SlotCententData'
import PrevNext from '../../../components/PrevNextButton/PrevNextButton'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import SideBar from '../../../components/AdminSideBar/AdminSideBar'
import { Container, MainContent } from '../../../Styles/Elements';
import { SlotButton } from '../../../components/Button/Button'
import AdminTitle from '../../../components/Title/AdminTitle'
import Footer from '../../../components/Footer/Footer'
import Icon from '../../../images/Icon.png'
import Icon2 from '../../../images/Icon2.png'
import Icon3 from '../../../images/Ellipse 1.png'
import Icon4 from '../../../images/AdminIcon.png'
import {
  Shape,
  HeaderActiveBar,
  SettingIcon,
  ActiveBar
} from '../../../svg';

const ProfileIcon = () => <img src={Icon} alt="Icon" />
const ProfileIcon2 = () => <img src={Icon2} alt="Icon" />
const ProfileIcon3 = () => <img src={Icon3} alt="Icon" />
const AdminIcon = () => <img src={Icon4} alt="Icon" />
const Button = () => <SlotButton text="Fulfiled Wish" />

const Wishes = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          admin="Admin"
          title="wishBox"
          blueWishes="Wishes"
          fulfilment="Fulfilments"
          normalDashboard="Dashboard"
          activeWish={ HeaderActiveBar() }
        />
        <SideBar
          num1="23"
          num3="3k"
          num2="12k"
          type1="Slot"
          type2="Wishes"
          wishes="WISHES"
          shape={ Shape() }
          type3="Fulfilments"
          Icon={ AdminIcon() }
          name="Veronica Madueke"
          allSlots="See All Slots"
          ActiveBar={ ActiveBar() }
          wishType3="January Gifting"
          wishType1="December Wishbox"
          wishType2="New Year Exchange"
          recent="Recently Added Slots"
          settingIcon={ SettingIcon() }
          wishType4="Valentine Secret Admirer"
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
            icon={ ProfileIcon2() }
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
            icon={ ProfileIcon3() }
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
            icon={ ProfileIcon() }
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

export default Wishes;