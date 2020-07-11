import React from 'react';
import Header from '../../../components/Header/Header'
import SideBar from '../../../components/sidebar/SideBar';
import Button from '../../../components/Button';
import PrevNext from '../../../components/PrevNextButton/PrevNextButton';
import Footer from '../../../components/Footer/Footer';
import './makewish.css';
import {
  Layer1,
  Vector,
  Vector1,
  Fulfilled,
  Arrow
} from '../../../svg';

class MakeWish extends React.Component {
  render() {
    return (
      <div className="makewish-container">
        <Header />
        <SideBar
          wishbox="wishBox"
          layer={ Layer1() }
          home="Home"
          Slots={ Vector() }
          slot="Slots"
          Vector={ Vector1() }
          wish="Wishes"
          Fulfiled={ Fulfilled() }
          fulfiled="Fulfiled"
        />
        <div className="form-container">
          <h2>Make a Wish</h2>
          <p>Fill the form below to add a wish to a slot</p>
          <form>
            <label>Name of Slot</label><br />
            <input type="text" placeholder="December Wishbox" />
            <label>Wish</label><br />
            <textarea placeholder="Write a short description of your wish" />
            <Button wish="Wish" />
          </form>
        </div>
        <div className="arrow">
          <Arrow />
        </div>
        <PrevNext />
        <Footer />
      </div>
    );
  }
}

export default MakeWish;