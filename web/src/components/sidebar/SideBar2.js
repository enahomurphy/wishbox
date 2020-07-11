// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import { colors, fonts } from '../../Styles/Global';
// import './sidebar.css';


// const SideBarContainer = styled.div`
//    width: 120px;
//   height: 1021px;
//   background: #fff;
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   ${props => {
//   switch (props.activeBar) {
//     case "home":
//       return {
//         position: absolute,
//         left: 0,
//         top: 302px,
//       }
//     }
//   }}
// `


// const SideBar = (props) => {
//   return (
//     <SideBarContainer>
//       <div className="wishbox">{ props.wishbox }</div>
//       <Link to="/users/Home">
//       <div className="home-slots">
//         <div >
//           { props.layer }
//         </div>
//         <p>{ props.home }</p>
//         <div className="wish-blue-text">
//           { props.homeBlueText }
//         </div>
//         <div className="home-active-bar">
//           { props.homeActiveBar }
//         </div>
//         </div>
//       </Link>
//       <Link to="/users/Slots">
//       <div className="slots-slots">
//         <div className="slot-activebar">
//           { props.ActiveBar }
//         </div>
//         <div className="group">
//           { props.Group }
//         </div>
//           { props.Slots }
//         <p>{ props.slots }</p>
//         <div className="slots">{ props.slot }</div>
//         </div>
//       </Link>
//       <Link to="/users/Wish">
//       <div className="wishes">
//         { props.Vector }
//         <p>{ props.wish }</p>
//         <div className="wish-blue-text">
//           { props.wishes }
//         </div>
//         <div className="wish-active-bar">
//           { props.WishActiveBar }
//         </div>
//         </div>
//       </Link>
//       <Link to="/users/Fulfiled Wish">
//       <div className="fulfiled">
//         { props.Fulfiled }
//         <p>{ props.fulfiled }</p>
//         <div className="wish-blue-text">
//           { props.fulfiledBlueText }
//         </div>
//         <div className="fulfiled-active-bar">
//           { props.fulfiledActiveBar }
//         </div>
//         </div>
//       </Link>
//     </SideBarContainer>
//   );
// }

// export default SideBar;

