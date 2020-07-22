import React from 'react';

import Title from '../../../components/Title/Title'
import { Container } from '../../../Styles/Elements';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import {WishBoxStatus} from '../../../components/userwishstatus/WishBoxStatus';

import {
  HomeGrayIcon,
  SlotIcon,
  FulfilledIcon,
  WishesBlueIcon,
  ActiveBar,
  SearchIcon,
  Shape,
  YellowBox,
  StarIcon,

} from '../../../svg';

import {
  FilterContainer,
  FilterInput,
  FilterOption,
  StatusContainer,
  StatusWrapper,
  Plus

} from './Styled';

const UserWish = () => {
  return (
    <>
      <Container primary>
        <Header />
        <Title type="Wishes" smallWishes="Make a Wish" />
        <SideBar
          slot="Slots"
          homeGray="Home"
          wishBox="wishBox"
          wishesBlue="Wishes"
          fulfilled="FulFilled"
          slotIcon={ SlotIcon() }
          homeIcon={ HomeGrayIcon() }
          wishesActiveBar={ ActiveBar() }
          wishesIcon={ WishesBlueIcon() }
          fulfilledIcon={ FulfilledIcon() }
        />
        <FilterContainer>
          <h3>Slots</h3>
          <FilterInput>
            <SearchIcon />
            <input type="search" placeholder="Search all slots" />
          </FilterInput>
          <FilterOption>
            <p className="option">Filter <Shape /></p>
            <p>December WishBox</p>
            <p className="blue-text">New Year Exchange</p>
            <p>January Gifting</p>
            <p>Valentine Secret Admirer</p>
            <p>New Year Exchange</p>
            <p>December WishBox</p>
            <p>New Year Exchange</p>
            <p>January Gifting</p>
            <p>Valentine Secret Admirer</p>
            <p>New Year Exchange</p>
          </FilterOption>
        </FilterContainer>
        <StatusWrapper>
          <h3>New Year Exchange</h3>
          <p>All your wishes in this slots</p>
          <StatusContainer>
            <WishBoxStatus
              status="Status:"
              pending="Pending"
              yellowBox={ YellowBox() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            />
            <WishBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            />
          </StatusContainer>
          <StatusContainer>
            <WishBoxStatus
              status="Status:"
              pending="Pending"
              yellowBox={ YellowBox() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            />
            <WishBoxStatus
              status="Status:"
              pending="Pending"
              yellowBox={ YellowBox() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
             thats all I really need right now, my old shoes are bad."
            />
          </StatusContainer>
          <Plus> + </Plus>
        </StatusWrapper>
        <AdminFooter />
      </Container>
    </>
  );
}

export default UserWish;