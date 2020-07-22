import React from 'react';

import Title from '../../../components/Title/Title';
import { Container } from '../../../Styles/Elements';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';

import {
  HomeGrayIcon,
  SlotIcon,
  FulfilledBlueIcon,
  WishesIcon,
  ActiveBar,
  StarIcon,
  ProfileIcon
} from '../../../svg';

import {
  FulfilledBoxStatus,
  SecondFulfilledBoxStatus
} from '../../../components/userwishstatus/WishBoxStatus';

import {
  FulfilledContainer,
  FulfilledWrapper
} from './Styled';

const UserFulfilledWish = () => {
  return (
    <>
      <Container primary>
        <Header />
        <Title type="Fulfilled" label="All your fulfilled wishes" />
        <SideBar
          wishBox="wishBox"
          homeIcon={ HomeGrayIcon() }
          homeGray="Home"
          slotIcon={ SlotIcon() }
          slot="Slots"
          wishesIcon={ WishesIcon() }
          wishes="Wishes"
          fulfilledIcon={ FulfilledBlueIcon() }
          fulfilledBlue="FulFilled"
          fulfilledActiveBar={ ActiveBar() }
        />
        <FulfilledContainer >
          <FulfilledWrapper>
            <FulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
              thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
              slot="Slot"
              wishType="December Wishbox"
              otherWishes="Other Wishes"
              ProfileIcon={ ProfileIcon() }
              numOfWishes="+2000 wishes"
            />
            <FulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
              thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
              slot="Slot"
              wishType="December Wishbox"
              otherWishes="Other Wishes"
              ProfileIcon={ ProfileIcon() }
              numOfWishes="+2000 wishes"
            />
            <FulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
              thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
              slot="Slot"
              wishType="December Wishbox"
              otherWishes="Other Wishes"
              ProfileIcon={ ProfileIcon() }
              numOfWishes="+2000 wishes"
            />
          </FulfilledWrapper>
          <FulfilledWrapper>
            <SecondFulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
               thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
            />
            <SecondFulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
               thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
            />
            <SecondFulfilledBoxStatus
              status="Status:"
              complete="Completed"
              StarIcon={ StarIcon() }
              date="30th June, 2019"
              wishContent=" I wish for a new pair of the Nike Air Max, 
               thats all I really need right now, my old shoes are bad."
              fulfilledBy="Fulfilled By"
              name="Damilola Animushaun"
            />
          </FulfilledWrapper>
        </FulfilledContainer>
        <PrevNext />
       <AdminFooter />
      </Container>
    </>
  );
}

export default UserFulfilledWish;