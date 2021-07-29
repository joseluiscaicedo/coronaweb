import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

const DataCovid = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://api.covid19api.com/summary', requestOptions)
      .then((response) => response.json())
      .then((data) => setCountry(data.Countries))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <section className='Countrys'>
        <section className='{country.Country}'>

          {country.map((country) => (
            <div id={country.ID} key={country.ID}>
              <h2 id={country.Country} key={country.Country}>{country.Country}</h2>
              <h3 id={country.TotalConfirmed} key={country.TotalConfirmed}>
                {country.TotalConfirmed}
              </h3>
              <h3 id={country.TotalDeaths}>
                Deaths
                {country.TotalDeaths}
              </h3>
              <h3 key={country.TotalRecovered}>
                Recovered
                {country.TotalRecovered}
              </h3>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default DataCovid;
