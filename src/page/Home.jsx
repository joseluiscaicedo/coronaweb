import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import DataCovid from '../components/DataCovid';
import MainSection from '../components/MainSection';

import '../assets/styles/Home.scss';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <main className='Home'>

      {isAuthenticated ? (
        <>
        <DataCovid />
          <Search />
            <Carousel>
              <CarouselItem />
            </Carousel>
        </>
      ) : (
          <MainSection />
      )}
    </main>
  );
};

export default Home;
