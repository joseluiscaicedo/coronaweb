/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CarouselItem from './CarouselItem';
import useFetchData from '../hooks/useFetchData';
import Loading from './Loading';

import '../assets/styles/Search.scss';

const APIURL = process.env.APIURL;

const SearchTerm = ({setSearchCountries})=>(event)=> {
  setSearchCountries(event.target.value)
}
const filterTerm = ({ searchCountries }) => (event) =>{
  if(searchCountries==='')return event;
  if (event.Country.toLowerCase().includes(searchCountries.toLowerCase())) {
    return event;
  }
};
const mapCountries =({ CarouselItem }) => ({ ...CovidCountries }) => <CarouselItem key={CovidCountries.ID} {...CovidCountries}/>


const Search = () => {
  const { isAuthenticated } = useAuth0();
  const CovidCountries = useFetchData(APIURL)
  const [searchCountries, setSearchCountries] = useState('');

  return(
    <section aria-label='Container Search' className='ContainerSearch'>
    {CovidCountries.length === 0 ? <Loading /> : (
      <>
        {isAuthenticated ? (
        <>
          <section className='ContainerSearch__search'>
            <h1 aria-label='search title' className='search__title'>Search by Country</h1>
            <label
            aria-labelledby='WriteaCountry'
            className='search__label'
            id='Search'
            htmlFor='WriteaCountry'
            rol='tab'
            > Write a Country
              <input
              id='WriteaCountry'
              name='input'
              type='text'
              className='label__input'
              autoComplete = 'Write a country'
              aria-label='WriteCountry'
              rol='tab'
              onChange={SearchTerm({ setSearchCountries })}
              />
            </label>
          </section>
          <section className='ShowCountries'>
            {CovidCountries.filter(filterTerm({ searchCountries })).map(mapCountries({ CarouselItem }))}
          </section>
        </>):
        (<a aria-label="GoToHome" href='/'>
        You should Login to see this section, Take me to Go To Home
      </a>)
        };
      </>
    )}
    </section>
    );
}

export default Search;
