import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderTittle,
  LinkContainer,
  LinkList,
  IconBox,
  ActiveLink

} from './Styled';

import {
  ProfileIcon,
  BellIcon,
  HeaderActiveBar

} from '../../svg';


export const DashBoardHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContainer primary>
          <HeaderTittle>
            <h2>wishBox</h2>
            <p>Admin</p>
          </HeaderTittle>
          <LinkContainer>
            <Link to="/wishbox/admin/Home">
              <LinkList primary> Dashboard </LinkList>
            </Link>
            <Link to="/wishbox/Wishes">
              <LinkList>Wishes </LinkList>
            </Link>
            <Link to="/wishbox/Fulfillments">
              <LinkList> Fulfillments </LinkList>
            </Link>
          </LinkContainer>
          <ActiveLink> <HeaderActiveBar /></ActiveLink>
          <IconBox>
            <BellIcon />
            <ProfileIcon />
          </IconBox>
        </HeaderContainer>
      </HeaderContainer>
    </div>
  );
}

export const WishesHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContainer primary>
          <HeaderTittle>
            <h2>wishBox</h2>
            <p>Admin</p>
          </HeaderTittle>
          <LinkContainer>
            <Link to="/wishbox/admin/Home">
              <LinkList > Dashboard </LinkList>
            </Link>
            <Link to="/wishbox/Wishes">
              <LinkList primary>Wishes </LinkList>
            </Link>
            <Link to="/wishbox/Fulfillments">
              <LinkList> Fulfillments </LinkList>
            </Link>
          </LinkContainer>
          <ActiveLink Wishes> <HeaderActiveBar /></ActiveLink>
          <IconBox>
            <BellIcon />
            <ProfileIcon />
          </IconBox>
        </HeaderContainer>
      </HeaderContainer>
    </div>
  );
}

export const FulfillmentsHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContainer primary>
          <HeaderTittle>
            <h2>wishBox</h2>
            <p>Admin</p>
          </HeaderTittle>
          <LinkContainer>
            <Link to="/wishbox/admin/Home">
              <LinkList > Dashboard </LinkList>
            </Link>
            <Link to="/wishbox/Wishes">
              <LinkList>Wishes </LinkList>
            </Link>
            <Link to="/wishbox/Fulfillments">
              <LinkList primary> Fulfillments </LinkList>
            </Link>
          </LinkContainer>
          <ActiveLink Fulfillment> <HeaderActiveBar /></ActiveLink>
          <IconBox>
            <BellIcon />
            <ProfileIcon />
          </IconBox>
        </HeaderContainer>
      </HeaderContainer>
    </div>
  );
}

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContainer primary>
          <HeaderTittle>
            <h2>wishBox</h2>
            <p>Admin</p>
          </HeaderTittle>
          <LinkContainer>
            <Link to="/wishbox/admin/Home">
              <LinkList > Dashboard </LinkList>
            </Link>
            <Link to="/wishbox/Wishes">
              <LinkList>Wishes </LinkList>
            </Link>
            <Link to="/wishbox/Fulfillments">
              <LinkList> Fulfillments </LinkList>
            </Link>
          </LinkContainer>
          <IconBox>
            <BellIcon />
            <ProfileIcon />
          </IconBox>
        </HeaderContainer>
      </HeaderContainer>
    </div>
  );
}