import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Wishes from './Pages/AdminPages/Wishes/Wishes';
import Login from './Pages/UserPages/UserLogin/Login';
import SignUp from './Pages/UserPages/UserSignUp/SignUp';
import UserWish from './Pages/UserPages/userWish/UserWish';
import UserHome from './Pages/UserPages/userHome/UserHome';
import UserSlots from './Pages/UserPages/UserSlots/UserSlots';
import AdminHome from './Pages/AdminPages/AdminHome/AdminHome';
import SingleSlot from './Pages/AdminPages/SingleSlot/SingleSlot';
import CreateSlot from './Pages/AdminPages/CreateSlot/CreateSlot';
import UserMakeWish from './Pages/UserPages/UserMakeWish/UserMakeWish';
import Fulfillments from './Pages/AdminPages/Fulfillments/Fulfillments';
import ProfileSettings from './Pages/AdminPages/ProfileSetting/ProfileSettings';
import PasswordSetting from './Pages/AdminPages/ProfileSetting/PasswordSettings';
import UserFulfilledWish from './Pages/UserPages/UserFulfiledWish/UserFulfilledWish';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={SignUp} />
          <Route path="/users/Login" component={ Login } />
          <Route path="/users/Home" component={UserHome} />
          <Route path="/users/Wish" component={UserWish} />
          <Route path="/users/Slots" component={UserSlots} />
          <Route path="/wishbox/Wishes" component={Wishes} />
          <Route path="/users/Make Wish" component={UserMakeWish} />
          <Route path="/wishbox/admin/Home" component={AdminHome} />
          <Route path="/wishbox/Single_Slot" component={SingleSlot} />
          <Route path="/wishbox/Create_Slot" component={CreateSlot} />
          <Route path="/wishbox/Fulfillments" component={Fulfillments} />
          <Route path="/users/Fulfilled Wish" component={UserFulfilledWish} />
          <Route path="/wishbox/Setting/Change_Password" component={PasswordSetting} />
          <Route path="/wishbox/Setting/Profile_Settings" component={ProfileSettings} />
         
        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;