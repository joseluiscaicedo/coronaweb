import React, {useEffect,useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Search from '../components/Search';
import MainSection from '../components/MainSection';

import '../assets/styles/Home.scss';

const Home = () => {
  const [CovidCountries, setCovidCountries] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('https://api.covid19api.com/summary', requestOptions)
    .then((response) => response.json())
    .then((data) => setCovidCountries(data.Countries))
    .catch((error) => console.log('error', error));
  }, []);
  const { isAuthenticated } = useAuth0();
  return (
    <main className='Home'>
      {isAuthenticated ? (
        <>
          <Search CovidCountries={CovidCountries} />
        </>
      ) : (
          <MainSection />
      )}
    </main>
  );
};

export default Home;
