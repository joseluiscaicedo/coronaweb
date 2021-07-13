import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import NotFound from '../components/NotFound';
import '../assets/styles/App.scss';

// const { isAuthenticated } = useAuth0();
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <NotFound />

      <Footer />
    </div>
  );
};

export default App;
