import React from 'react';
import '../assets/styles/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>Search by Country</h2>
    <label id='Search' htmlFor='Search' rol='tab'>
      <input type='text' className='input' placeholder='Write a country...' />
    </label>
  </section>
);

export default Search;
