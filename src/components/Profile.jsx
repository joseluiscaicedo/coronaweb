import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../assets/styles/Profile.scss';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className='ProfileContainer'>
        <img
          className='ProfileContainer__img'
          src={user.picture}
          alt={user.name}
        />
      </div>
    )
  );
};

export default Profile;
