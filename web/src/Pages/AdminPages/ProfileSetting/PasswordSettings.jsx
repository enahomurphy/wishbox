import React from 'react';

import SettingContainer from '../../../components/WishboxSettings/WishboxSettings';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import { CreateButton } from '../../../components/Button/Button';
import { Container, Profile } from '../../../Styles/Elements';
import Footer from '../../../components/Footer/Footer';
import { Arrow, ActiveBar } from '../../../svg';

const ProfileForm = () => {
  return (
    <div>
      <div className="password-form-wrapper">
        <form>
          <Profile label>Current Password</Profile>
          <input type="password" placeholder="Enter your current password" />
          <Profile label>New Password</Profile>
          <input type="password" placeholder="Enter your new password" />
          <Profile label>Confirm New Password</Profile>
          <input type="password" placeholder="Repeat new password" />
          <div className="setting-btn"> <CreateButton text="Update" /></div>
        </form>
      </div>
    </div>
  );
}

const PasswordSetting = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          admin="Admin"
          wishes="Wishes"
          title="wishBox"
          fulfilment="Fulfilments"
          normalDashboard="Dashboard"
        />
        <SettingContainer
          arrow={ Arrow() }
          setting="Settings"
          link4="Change Password"
          link3="Profile Settings"
          profile="Change Password"
          ProfileForm={ ProfileForm() }
          activeSetting={ ActiveBar() }
        />
      </Container>
      <Footer />
    </div>
  );
}

export default PasswordSetting;