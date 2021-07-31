import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const logo ='https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/logo_yn8r2a.png';
const userIcon = 'https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/user-icon_o089f9.png';

import '../assets/styles/Header.scss';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header aria-label='header title' className='header'>
      <a href='/worldmap' aria-labelledby='goToWorldMap'>
        <img className='header__img' src={logo} alt='coronaweb logo' />
      </a>
      <div className='header__menu'>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) :
          (
              <div className='header__menu'>
                <img id='menu__img' src={userIcon} alt='user Icon' />
                <LoginButton />
              </div>
          )}
      </div>
    </header>
  );
};

export default Header;
