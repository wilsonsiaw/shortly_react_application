import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/images/logo2.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import twitter from '../../assets/images/icon-twitter.svg';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="footerLogo">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div className="footerLinks">
        <a href="#" id='features'>Features</a>
        <a href="#" id='resources'>Resources</a>
        <a href="#" id='company'>Company</a>
        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
      <div className="footerIcons">
        <div className="socialLinks">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={pinterest} alt="pinterest logo" />
            <img src={instagram} alt="instagram logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
