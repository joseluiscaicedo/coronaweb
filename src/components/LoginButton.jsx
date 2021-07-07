/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../assets/styles/LoginButton.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='ButtonLogin' id='ButtonLogin' type='button' onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;
