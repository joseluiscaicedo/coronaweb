import React from 'react';
import Loading from './Loading';
import WorldMap from './WorldMap';
import countriesGeojson from '../data/countries.json';

const Covid = () => {
  return (
    <div>
      {countriesGeojson.length === 0 ? <Loading /> : (
        <>
          <WorldMap countriesGeojson={countriesGeojson} />
        </>
      )}
    </div>
  );
};

export default Covid;
