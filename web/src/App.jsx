import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './User Pages/User-SignUp/SignUp';
import Login from './User Pages/User-Login/LoginPage';
import UserHome from './User Pages/User-Home/UserHome';
import UserSlots from './User Pages/User-Slots/UserSlots';
import MakeWish from './User Pages/User-Make Wish/UserMakeWish';
import UserWish from './User Pages/User-Wish/UserWish';
import UserFulfiledWish from './User Pages/User-Fulfiled Wish/UserFulfiledWish';

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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;