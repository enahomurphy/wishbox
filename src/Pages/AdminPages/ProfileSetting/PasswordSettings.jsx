import React from 'react';
import { Link } from 'react-router-dom';

import { ActiveBar, Arrow } from '../../../svg';
import { Container } from '../../../Styles/Elements';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { CreateButton } from '../../../components/Button/Button';
import { Header } from '../../../components/AdminHeader/AdminHeaders';
import {
  LinkBox,
  P,
  ProfileContainer,
  ActiveLink,
  FormContainer,
} from './Styled';

const PasswordSettings = () => {
  return (
    <>
      <Container>
        <Header />
        <ProfileContainer>
          <ActiveLink Arrow> <Arrow /></ActiveLink>
          <LinkBox>
            <h2>Settings</h2>
            <Link to="/wishbox/Setting/Profile_Settings">
              <P primary>Profile Settings</P>
            </Link>
            <Link to="/wishbox/Setting/Change_Password">
              <P >Change Password</P>
            </Link>
            <ActiveLink primary><ActiveBar /></ActiveLink>
          </LinkBox>
          <FormContainer>
            <p>Change Password</p>
            <form>
              <label>Current Password</label>
              <input type="password" placeholder="Enter your current password"/>
              <label>New Password</label>
              <input type="password" placeholder="Enter your new password"/>
              <label>Confirm New Password</label>
              <input type="password" placeholder="Repeat new password" />
              <div className="setting-btn"> <CreateButton text="Update" /></div>
            </form>
          </FormContainer>
        </ProfileContainer>
        <AdminFooter />
      </Container>
    </>
  );
}

export default PasswordSettings;