/* eslint-disable react/display-name */
import React, { useState } from 'react';
import CarouselItem from './CarouselItem';

import '../assets/styles/Search.scss';

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


const Search = ({CovidCountries}) => {
  const [searchCountries, setSearchCountries] = useState('');

  return(
  <>
    <section className='search'>
      <h1 className='search__title'>Search by Country</h1>
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
        rol='tab'
        onChange={SearchTerm({ setSearchCountries })}
        />
      </label>
    </section>
    <section className='ShowCountries'>
      {CovidCountries.filter(filterTerm({ searchCountries })).map(mapCountries({ CarouselItem }))}
    </section>
  </>
  );
}
export default Search;
