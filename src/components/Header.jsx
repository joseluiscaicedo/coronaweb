import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';

import '../assets/styles/Header.scss';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header aria-label='header title' className='header'>
      <img className='header__img' src={logo} alt='coronaweb logo' />
      <div className='header__menu'>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
            {' '}
          </>
        ) :
          (
            <>
              <div className='header__menu'>
                <img id='menu__img' src={userIcon} alt='user Icon' />
                <LoginButton />
              </div>
            </>
          )}
      </div>
    </header>
  );
};

export default Header;
