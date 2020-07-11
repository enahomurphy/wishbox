import React from 'react';

import { Arrow, ActiveBar } from '../../../svg';
import AdminIcon from '../../../images/AdminIcon.png';
import Footer from '../../../components/Footer/Footer';
import { Container, Profile } from '../../../Styles/Elements';
import { CreateButton } from '../../../components/Button/Button';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import SettingContainer from '../../../components/WishboxSettings/WishboxSettings';

const ProfileForm = () => {
  return (
    <div>
      <div className="form-wrapper">
        <form>
          <Profile label>Full Name</Profile>
          <input type="text" placeholder="Veronica Madueke" />
          <Profile label>Email</Profile>
          <input type="email" placeholder="Veronicamadueke@gmail.com" />
          <Profile label>Phone Number</Profile>
          <input type="number" placeholder="Veronicamadueke@gmail.com" />
          <div className="setting-btn"> <CreateButton text="Update" /></div>
        </form>
      </div>
    </div>
  );
}

const PlusIcon = () => <div className="icon-plus">+</div>
const Icon = () => <img src={ AdminIcon } alt="Profile Icon"/>

const ProfileSetting = () => {
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
          Icon={ Icon() }
          arrow={ Arrow() }
          profile="Profile"
          setting="Settings"
          PlusIcon={ PlusIcon() }
          link2="Change Password"
          link1="Profile Settings"
          activeBar={ ActiveBar() }
          ProfileForm={ ProfileForm() }
        />
      </Container>
      <Footer />
    </div>
  );
}

export default ProfileSetting;