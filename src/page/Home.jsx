import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useFetchData from '../hooks/useFetchData';

import MainSection from '../components/MainSection';
import DrawingWorldMap from '../components/DrawingWorldMap';
import Loading from '../components/Loading';

import '../assets/styles/Home.scss';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const APIURL = process.env.APIURL;
  const CovidCountries = useFetchData(APIURL);

  if(!CovidCountries.length) {
    return < Loading />
  }
  return (
    <>
    {CovidCountries.length === 0 ? <Loading /> : (
    <main className='Home'>
      {isAuthenticated ? (
        <>
          <DrawingWorldMap countriesCovidCases={CovidCountries} />
        </>
      ) : (
          <MainSection />
      )}
    </main>
    )}
    </>
  );
};

export default Home;
