import React from 'react';

import { FormContainer, Arrow } from './Styled';
import { Container } from '../../../Styles/Elements';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import { CreateButton } from '../../../components/Button/Button';
import AdminFooter from '../../../components/Footer/AdminFooter';

import {
  HomeGrayIcon,
  SlotIcon,
  FulfilledIcon,
  WishesIcon,
  ArrowIcon
} from '../../../svg';

const UserMakeWish = () => {
  return (
    <>
      <Container primary>
        <Header />
        <SideBar
          Slot="Slots"
          Wishes="Wishes"
          HomeGray="Home"
          wishBox="wishBox"
          Fulfilled="FulFilled"
          SlotIcon={ SlotIcon() }
          WishesIcon={ WishesIcon() }
          HomeIcon={ HomeGrayIcon() }
          FulfilledIcon={ FulfilledIcon() }
        />
        <FormContainer>
          <h2>Make a Wish</h2>
          <p>Fill the form below to add a wish to a slot</p>
          <form>
            <label>Name of Slot</label><br />
            <input type="text" placeholder="December Wishbox" />
            <label>Wish</label><br />
            <textarea placeholder="Write a short description of your wish" />
            <CreateButton text="Wish" />
          </form>
        </FormContainer>
        <Arrow>
          <ArrowIcon />
        </Arrow>
        <AdminFooter />
      </Container>
    </>
  );
}

export default UserMakeWish;