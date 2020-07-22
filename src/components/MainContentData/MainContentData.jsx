import React from 'react';
import PropTypes from 'prop-types';

import {
  ContentData,
  NameContainer,
  WishContainer,
  WishContent
  
} from './MainContentStyles';

const MainContentData = (props) => {
  return (
    <div>
      <ContentData >
        <NameContainer >
          <p>{props.name}</p>
          <p>{props.date}</p>
        </NameContainer>
        <WishContainer>
          <h2>{props.wishType}</h2>
          <p>{props.totalWish}</p>
        </WishContainer>
        <WishContent>
          <p>{props.wishContent}</p>
          <div>
            <WishContent primary>{props.fulfilledWish}</WishContent>
            <WishContent primary>{props.pendingWish}</WishContent>
          </div>
        </WishContent>
      </ContentData>
    </div>
  );
}

MainContentData.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  wishType: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  totalWish: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  wishContent: PropTypes.string.isRequired,
  fulfilledWish: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pendingWish: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default MainContentData;