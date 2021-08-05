import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import Loading from '../components/Loading';

import 'leaflet/dist/leaflet.css';
import '../assets/styles/WorldMap.scss';

const WorldMap = ({ countriesCovidCases,countriesGeojson }) => {

  if(!countriesCovidCases.length) {
    return < Loading />
  }

  const byEachCountry = (feature, layer) => {
    const selectedCountry = feature.properties.ADMIN;
    const selectedCountryCovidCases = countriesCovidCases.find(item => item.Country === selectedCountry)

    if(selectedCountryCovidCases) {
      layer.bindPopup(`${selectedCountryCovidCases.Country} <br/>
        Total Confirmed <br/>
        ${new Intl.NumberFormat().format(selectedCountryCovidCases.TotalConfirmed)}
        <br/>  <a aria-label='Other Statistics' href='/search/'>Other Statistics...</a>
      `);
    }
  };

  return (
    <div id='WorldMapContainer' className='WorldMapContainer'>
      <h1 arialabel='WorldMap' id='title' className='WorldMapContainer__title'>World Map With Confirmed Cases Of Covid </h1>
      <MapContainer
        className='container'
        zoom={1.4}
        center={[51.505, 0]}
        scrollWheelZoom={false}
      >
        <GeoJSON
          className='container-children'
          data={countriesGeojson.features}
          onEachFeature={byEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
