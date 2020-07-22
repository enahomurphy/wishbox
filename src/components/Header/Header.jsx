import React from 'react';

import {
  BellIcon,
  RedDot,
  SearchIcon,
  ProfileIcon

} from '../../svg';

import {
  HeaderContainer,
  BellGroup,
  InputContainer,
  FilterOption

} from './Styled';

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <BellGroup>
          <BellGroup bell><BellIcon /></BellGroup>
          <BellGroup redDot><RedDot /></BellGroup>
          <ProfileIcon />
        </BellGroup>
        <InputContainer>
          <FilterOption>
            <option>Filter</option>
            <option>December Wishbox</option>
            <option>New Year Exchange</option>
            <option>January Gifting</option>
            <option>Valentine Secret Admirer</option>
            <option>New Year Exchange</option>
            <option>December Wishbox</option>
            <option>New Year Exchange</option>
            <option>January Gifting</option>
            <option>Valentine Secret Admirer</option>
            <option>New Year Exchange</option>
          </FilterOption>
          <InputContainer HeaderInput>
            <SearchIcon />
            <input type="search" placeholder="Find..." />
          </InputContainer>
        </InputContainer >
      </HeaderContainer>
    </div>
  );
}

export default Header;