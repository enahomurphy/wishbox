import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SignUp from './pages/signUp/signUp'
import Login from './pages/login page/Login'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ SignUp } />
          <Route path="/pages/login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
