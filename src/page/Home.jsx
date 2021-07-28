import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import DataCovid from '../components/DataCovid';

import '../assets/styles/Home.scss';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <main className='main'>
      
      {isAuthenticated ? (
        <>
        <DataCovid />
          <Search />
            <Carousel>
              <CarouselItem />
            </Carousel>
        </>
      ) : (
        <>
        <section className='banner' id='banner' role='banner'>
          <div className='banner__container'>
            <h1>COVID-19 Help Center</h1>
            <p>As your healthcare partner, Coronaweb gives you all the information you need about COVID-19 in one place.</p>
            <p>Please, Login o Register to keep update</p>
          </div>
        </section>
        </>
      )}
    </main>
  );
};

export default Home;
