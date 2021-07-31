import React from 'react';
import '../assets/styles/CarouselItem.scss';

const CarouselItem = ({Country, TotalConfirmed, TotalDeaths, TotalRecovered }) =>{

  const formatToNumber = (num) =>{
    return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.')
  }
  let NumberFormatConfirmed = formatToNumber(TotalConfirmed);
  let NumberFormatTotalDeaths = formatToNumber(TotalDeaths);
  let NumberFormatTotalRecovered = formatToNumber(TotalRecovered);

  return(
  <div className='carousel-item'>
    <div id='details' className='carousel-item__details'>
      <p aria-label={Country} className='carousel-item__details--title'>{Country}</p>
      <p aria-label='Total Confirmed' className='carousel-item__details--subtitle'>Total Confirmed <br/>{NumberFormatConfirmed}</p>
      <p aria-label='Total Deaths' className='carousel-item__details--subtitle'>Total Deaths <br/>{NumberFormatTotalDeaths}</p>
      <p aria-label='Total Recovered' className='carousel-item__details--subtitle'>Total Recovered <br/>{NumberFormatTotalRecovered}</p>
    </div>
  </div>

);
}
export default CarouselItem;
