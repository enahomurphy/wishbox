import React from 'react';
import { Link } from 'react-router-dom';
import { MusicIcon } from '../../../svg';
import Ellipse3 from '../../../images/Ellipse 3.png';
import Eliipse2 from '../../../images/Ellipse 2.png';
import Button from '../../../components/Button';
import './signup.css';

const SignUp = () => {
  return (
    <div id="container">
      <div className="wishbox-container">
        <p className="wishbox-title-1">wishBox</p>
        <div className="image-box">
          <MusicIcon />
          <p className="p-tag1">
            I love using this, my
              <br /> wishes were met <br />
              seamelessly and on time
            </p>
          <p className="p-tag2">Funmilola Akingbade</p>
          <div className="profile-icon">
            <p>
              <img src={ Ellipse3 } alt="profile" />
            </p>
            <p>
              <img src={ Eliipse2 } alt="Bigprofile" />
            </p>
            <p>
              <img src={ Ellipse3 } alt="profile" />
            </p>
          </div>
        </div>
      </div>
      <div className="wishbox-content-wrapper">
        <div className="wishbox-content">
          <p className="wishbox-title-2">Welcome to wishBox</p>
          <p className="span-1">Fill out the form to make your wish</p>
          <form>
            <label className="label">Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your first name and last name"
              className="input-box"
            />
            <label className="label">Email Address</label>
            <br />
            <input
              type="email"
              placeholder="egjondoe@example.com"
              className="input-box"
            />
            <label className="label">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your preferred password"
              className="input-box"
            />
            <label className="label">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Repeat password"
              className="input-box"
            />
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <span>I agree to the terms and conditions</span>
            </div>
            <Button signUp="Sign Up" />
          </form>
          <p className="login-link">
            Already have an account?<Link to="users/Login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default SignUp;