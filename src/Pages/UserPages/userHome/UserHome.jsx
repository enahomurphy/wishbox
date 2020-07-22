import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../../Styles/Elements';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/sidebar/SideBar';
import AdminFooter from '../../../components/Footer/AdminFooter';
import RecentWishes from '../../../components/recentWishes/RecentWishes';

import {
  P,
  Div,
  TableContainer,
  RecentWishesContainer,
} from './Styled';

import {
  SlotsBoxSection,
  WishesBoxSection,
  FulfilledBoxSection
} from '../../../components/boxSection/BoxSection';

import {
  HomeIcon,
  ActiveBar,
  SlotIcon,
  SlotNum,
  WishesIcon,
  FulfilledIcon,
  SlotsBlueIcon,
  WishesYellowIcon,
  FulfilledGreenIcon,
  
} from '../../../svg';

const UserHome = () => {
  return (
    <>
      <Container primary>
        <Header />
        <SideBar
          home="Home"
          slot="Slots"
          wishes="Wishes"
          wishBox="wishBox"
          fulfilled="FulFilled"
          slotNum={ SlotNum() }
          homeIcon={ HomeIcon() }
          slotIcon={ SlotIcon() }
          wishesIcon={ WishesIcon() }
          homeActiveBar={ ActiveBar() }
          fulfilledIcon={ FulfilledIcon() }
        />
        <SlotsBoxSection num={203} icon={ SlotsBlueIcon() } label="All Open Slots" />
        <WishesBoxSection num={823} icon={ WishesYellowIcon() } label="All Your Pending wishes" />
        <FulfilledBoxSection num={16} icon={ FulfilledGreenIcon() } label="All Fulfilled Wishes" />
        <Div>
          <P>Recent Slots Created</P>
          <p><Link to="#" >See All Slots</Link></p>
        </Div>
        <TableContainer>
          <table>
            <tbody>
              <tr className="table-title">
                <td>Name of Slot</td>
                <td>Number of Wishes</td>
                <td>Closing Date</td>
              </tr>
              <tr className="table-content december">
                <td><span className="d">D</span>December WishBox</td>
                <td>2000 wishes</td>
                <td>6/06/19</td>
              </tr>
              <tr className="primary exchange">
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
        </TableContainer>
        <RecentWishesContainer>
          <h2>Recently Fulfilled Wishes</h2>
          <RecentWishes />
          <RecentWishes />
        </RecentWishesContainer>
        <AdminFooter />
      </Container>
    </>
  );
}

export default UserHome;