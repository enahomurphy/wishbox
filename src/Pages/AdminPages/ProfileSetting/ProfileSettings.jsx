import React from 'react';
import { Link } from 'react-router-dom';

import { Container} from '../../../Styles/Elements';
import { ProfileIcon, ActiveBar, Arrow } from '../../../svg';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { CreateButton } from '../../../components/Button/Button';
import { Header } from '../../../components/AdminHeader/AdminHeaders';
import {
  LinkBox,
  P,
  ProfileContainer,
  ActiveLink,
  FormContainer,
  Icon
} from './Styled';

const ProfileSettings = () => {
  return (
    <>
      <Container>
        <Header />
        <ProfileContainer>
          <ActiveLink Arrow> <Arrow /></ActiveLink>
          <LinkBox>
            <h2>Settings</h2>
            <Link to="/wishbox/Setting/Profile_Settings">
              <P>Profile Settings</P>
            </Link>
            <Link to="/wishbox/Setting/Change_Password">
              <P primary>Change Password</P>
            </Link>
            <ActiveLink><ActiveBar /></ActiveLink>
          </LinkBox>
          <FormContainer>
            <p>Profile</p>
            <Icon><ProfileIcon /></Icon>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Veronica Madueke" />
              <label>Email</label>
              <input type="email" placeholder="Veronicamadueke@gmail.com" />
              <label>Phone Number</label>
              <input type="number" placeholder="Veronicamadueke@gmail.com" />
              <div className="setting-btn"> <CreateButton text="Update" /></div>
            </form>
          </FormContainer>
        </ProfileContainer>
        <AdminFooter />
      </Container>
    </>
  );
}

export default ProfileSettings;