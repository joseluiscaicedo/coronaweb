import React from 'react'
import '../assets/styles/MainSection.scss';

const MainSection = () => {
  return (
      <section className='banner' id='banner' role='banner'>
        <div className='banner__container'>
          <h1>COVID-19 Help Center</h1>
          <p className='container__firstparagraph'>As your healthcare partner, Coronaweb gives you all the information you need about COVID-19 in one place.</p>
          <p>Please login or register to stay updated</p>
        </div>
      </section>
  )
}

export default MainSection;

