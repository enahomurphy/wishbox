import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Wishes from './Pages/AdminPages/Wishes/Wishes';
import SignUp from './Pages/UserPages/UserSignUp/SignUp';
import Login from './Pages/UserPages/UserLogin/LoginPage';
import UserHome from './Pages/UserPages/UserHome/UserHome';
import UserWish from './Pages/UserPages/UserWish/UserWish';
import UserSlots from './Pages/UserPages/UserSlots/UserSlots';
import AdminHome from './Pages/AdminPages/AdminHome/AdminHome';
import SingleSlot from './Pages/AdminPages/SingleSlot/SingleSlot';
import CreateSlot from './Pages/AdminPages/CreateSlot/CreateSlot';
import MakeWish from './Pages/UserPages/UserMakeWish/UserMakeWish';
import Fulfilments from './Pages/AdminPages/Fulfilments/Fulfilments';
import ProfileSetting from './Pages/AdminPages/ProfileSetting/ProfileSettings';
import PasswordSetting from './Pages/AdminPages/ProfileSetting/PasswordSettings';
import UserFulfiledWish from './Pages/UserPages/UserFulfiledWish/UserFulfiledWish';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ SignUp } />
          <Route path="/users/Login" component={ Login } />
          <Route path="/users/Home" component={UserHome} />
          <Route path="/users/Slots" component={UserSlots} />
          <Route path="/users/Make Wish" component={MakeWish} />
          <Route path="/users/Wish" component={UserWish} />
          <Route path="/users/Fulfiled Wish" component={UserFulfiledWish} />
          <Route path="/wishbox/admin/Home" component={AdminHome} />
          <Route path="/wishbox/Single_Slot" component={SingleSlot} />
          <Route path="/wishbox/Create_Slot" component={CreateSlot} />
          <Route path="/wishbox/Wishes" component={Wishes} />
          <Route path="/wishbox/Fulfilments" component={Fulfilments} />
          <Route path="/wishbox/Setting/Profile_Settings" component={ProfileSetting} />
          <Route path="/wishbox/Setting/Change_Password" component={PasswordSetting} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;