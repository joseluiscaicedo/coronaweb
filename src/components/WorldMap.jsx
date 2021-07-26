import React, { useState, useEffect } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import Loading from '../components/Loading';

import 'leaflet/dist/leaflet.css';
import '../assets/styles/WorldMap.scss';

const WorldMap = ({ countriesGeojson }) => {

  const [countriesCovidCases, setCountriesCovidCases] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://api.covid19api.com/summary', requestOptions)
      .then((response) => response.json())
      .then((data) => setCountriesCovidCases(data.Countries))
      .catch((error) => console.log('error', error));
  }, []);


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
      `);
    }
  };

  return (
    <div>
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
