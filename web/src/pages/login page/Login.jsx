import React from "react";
import { Link } from "react-router-dom";
import "../homepage.css";
import MusicIcon from "../svg/MusicIcon";
import Ellipse3 from "../images/Ellipse 3.png";
import Eliipse2 from "../images/Ellipse 2.png";

const Login = () => {
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
            <button className="signUp-btn">Log In</button>
          </form>
          <p className="login-link">
            Don't have account?<Link to="/"> Sign Up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;