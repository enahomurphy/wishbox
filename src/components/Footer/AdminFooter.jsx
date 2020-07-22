import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, Fonts } from '../../Styles/Global';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 80px;
  background: ${colors.navy}; 
  position: absolute;
  top: 1024px;
  left: 0px;

  p {
    font-family: "Poppins, sans-serif";
    font-style: normal;
    color: ${colors.white};
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    margin-left: 40px;
  }
  
  @media screen and (max-width: 700px) {
    display: none;
  }
`
const FooterLink = styled.div`
  width: 510px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 65px;

  a {
    font-family: ${Fonts.primary};
    font-style: normal;
    color: ${colors.white};
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    font-weight: 500;
  }
`

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <p> &copy; wishApp. All rights reserved.</p>
        <FooterLink >
          <Link to="/home"> Home </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </FooterLink>
      </FooterWrapper>
    </div>
  );
}

export default Footer;