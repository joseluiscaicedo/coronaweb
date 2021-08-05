import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import useFetchData from '../hooks/useFetchData';
import WorldMap from './WorldMap';
import countriesGeojson from '../data/countries.json';

const APIURL = process.env.APIURL;

const DrawingWorldMap = () => {
  const { isAuthenticated } = useAuth0();
  const countriesCovidCases = useFetchData(APIURL)
  if(!countriesCovidCases.length) {
    return < Loading />
  }
  return (
    <div>
      {(isAuthenticated) ?(
      (countriesGeojson.length === 0) ? <Loading /> : (
        <>
          <WorldMap countriesCovidCases={countriesCovidCases} countriesGeojson={countriesGeojson} />
        </>
      )
      ):
      (
      <a aria-describedby="GoToHome" href='/'>
        You should Login to see this section, Take me to Go To Home
      </a>)
      }
    </div>
  );
};

export default DrawingWorldMap;
