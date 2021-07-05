import React from 'react';
import backtoHome from '../assets/images/backToTheHomepage.png';
import delorean from '../assets/images/Delorean.png';
import '../assets/styles/NotFound.scss';

const NotFound = () => (
  <body>
    <section className='notFound'>
      <div className='img'>
        <img src={backtoHome} alt='Back to the Homepage' />
        <img src={delorean} alt='El Delorean, El Doc y Marti McFly' />
      </div>
      <div className='text'>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <a href='/' className='yes'>YES</a>
        <a href='https://www.youtube.com/watch?v=G3AfIvJBcGo'>NO</a>
      </div>
    </section>
  </body>
);

export default NotFound;
