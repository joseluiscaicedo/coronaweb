import React from 'react';
import '../assets/styles/NotFound.scss';

const backtoHome = 'https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/backToTheHomepage_txqgtu.png';
const delorean = 'https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/Delorean_pfddqk.webp';

const NotFound = () => (
  <body>
    <section className='notFound'>
      <div className='notFound__img'>
        <img src={backtoHome} alt='Back to the Homepage' />
        <img src={delorean} alt='El Delorean, El Doc y Marti McFly' />
      </div>
      <div className='notFound__container'>
        <h1 className='container__h1'>404</h1>
        <h2 className='container__h2'>PAGE NOT FOUND</h2>
        <h3 className='container__h3'>BACK TO HOME?</h3>
        <a href='/' className='container__anchor'>YES</a>
        <a className='container__anchor' href='https://www.youtube.com/watch?v=G3AfIvJBcGo'>NO</a>
      </div>
    </section>
  </body>
);

export default NotFound;
