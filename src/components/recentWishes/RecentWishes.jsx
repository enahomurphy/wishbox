import React from 'react';
import styled from 'styled-components';

import { GreenStarIcon } from '../../svg';
import { colors, Fonts } from '../../Styles/Global';

const RecentBox = styled.div`
  width: 312px;
  height: 159px;
  background: ${colors.white};
  box-shadow:0px 1.81667px 6.8125px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  margin: 15px auto;
  padding: 10px;
`
const WishesDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray};
`

const WishesContent = styled.p`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color:${colors.lightBlack};
  margin-top: 20px;
`

const RecentWishes = () => {
  return (
    <RecentBox>
      <WishesDate >
        <p>Fulfilled: <span>31 June 2019</span> </p>
        <GreenStarIcon />
      </WishesDate>
      <WishesContent className="wish">
        I wish for a new pair of the Nike Air Max, thats all I really need right now, my old shoes are bad.
     </WishesContent>
    </RecentBox>
  );
}

export default RecentWishes;