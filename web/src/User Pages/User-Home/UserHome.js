import React from 'react';
import { Link } from 'react-router-dom';
import { BoxSection } from '../../components/BoxSection';
import { BoxSection1 } from '../../components/BoxSection';
import { BoxSection2 } from '../../components/BoxSection';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/Header/Header';
import RecentWishes from '../../components/RecentWishes';
import Footer from '../../components/Footer/Footer';
import { Slots } from '../../svg';
import { Vector2 } from '../../svg/';
import { Fulfiled2 } from '../../svg';
import './userhome.css';

class UserHome extends React.Component {
  render () {
    return (
      <div id="userpage-container">
        <SideBar />
        <Header />
        <div className="boxsection-container">
          <BoxSection num={203} img={Slots()} label="All Open Slots" />
          <BoxSection1 num={823} img1={Vector2()} label="All Your Pending wishes" />
          <BoxSection2 num={16} img2={Fulfiled2()} label="All Fulfiled Wishes" />
        </div>
        <div className="p-tag">
          <p className="recent">Recent Slots Created</p>
          <p><Link to="#" >See All Slots</Link></p>
        </div>
        <div className="table-container">
          <table>
            <tbody>
              <tr className="table-title">
                <td>Name of Slot</td>
                <td>Number of Wishes</td>
                <td>Closing Date</td>
              </tr>
              <tr className="table-content december">
                <td><span className="d">D</span>December Wishbox</td>
                <td>2000 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="table-content-1 exchange">
                <td><span className="n">N</span>New Year Exchange</td>
                <td>5663 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="table-content">
                <td><span className="j">J</span>January Gifting</td>
                <td>125 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="table-content">
                <td><span className="d">D</span>December Wishbox</td>
                <td>2000 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="table-content">
                <td><span className="n">N</span>New Year Exchange</td>
                <td>5663 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="table-content">
                <td><span className="j">J</span>January Gifting</td>
                <td>125 wishes</td>
                <td>6/06/19</td>
              </tr>
            </tbody>
          </table>
          <div className="recent-wishes-container">
            <h2>Recently Fulfiled Wishes</h2>
            <RecentWishes />
            <RecentWishes />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserHome;