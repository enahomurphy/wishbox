import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './User Pages/User-SignUp/SignUp';
import Login from './User Pages/User-Login/LoginPage';
import UserHome from './User Pages/User-Home/UserHome';
import UserSlots from './User Pages/User-Slots/UserSlots';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ SignUp } />
          <Route path="/users/Login" component={ Login } />
          <Route path="/users/Home" component={UserHome} />
          <Route path="/users/Slots" component={UserSlots} />
        </div>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
