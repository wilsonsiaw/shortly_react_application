import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='wrapper'>
      <div className="logo">
        <img src={logo} alt="shortly logo" />
      </div>
      <div className="links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
      </div>
      <div className="btns">
          <button type='button'>Login</button>
          <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
