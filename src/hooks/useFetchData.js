import { useState, useEffect } from 'react';

const useFetchData = (url) => {

  const [CovidCountries, setCovidCountries] = useState([]);
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setCovidCountries(data.Countries))
    .catch((error) => console.log('error', error));
  }, []);
  return CovidCountries;

};

export default useFetchData;
