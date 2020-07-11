import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors, fonts } from '../../Styles/Global';

const Div = styled.a`
  width: 1440px;
  height: 80px;
  background: ${colors.navy};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  padding-right: 28px;
  text-decoration: none;
  .mylink a{
  text-decoration: none;
  }

  ${props => props.primary && css`
    width: 490px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  `}
`
const Menu = styled.a`
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  color: ${colors.white};
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
`

const Footer = () => {
  return (
    <>
      <Div>
        <Div>
          <p> &copy; wishApp. All rights reserved.</p>
          <div className="mylink">
            <Div primary>
              <Link to="/home"> <Menu>Home </Menu></Link>
              <Link to="/about"><Menu>About</Menu></Link>
              <Link to="/services"><Menu>Services</Menu></Link>
              <Link to="/work"> <Menu>Work</Menu></Link>
              <Link to="/news"> <Menu>News</Menu></Link>
              <Link to="/contant"><Menu>Contant</Menu></Link>
            </Div>
          </div>
        </Div>
      </Div>
    </>
  );
}

export default Footer;