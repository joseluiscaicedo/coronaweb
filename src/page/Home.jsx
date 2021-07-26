import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import DataCovid from '../components/DataCovid';

import '../assets/styles/App.scss';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <main className='App'>
      {isAuthenticated ? (
        <>
          <Search />
          <Categories>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        </>
      ) : (
        <>
          <DataCovid />
        </>
      )}
    </main>
  );
};

export default Home;
