import React from 'react';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';
import '../assets/styles/Header.scss';

const Header = () => (
  <header aria-label='header title' className='header'>
    <img className='header__img' src={logo} alt='coronaweb logo' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='user Icon' />
        <p aria-labelledby='Profile'>Profile</p>
      </div>
      <ul>
        <li><a href='/'>Account</a></li>
        <li><a href='/'>Close Session</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
