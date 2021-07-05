import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='teslatest.us.auth0.com'
      clientId='AgUEPfel0Xgnfje3LDwu1p5omISjRMu4'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
