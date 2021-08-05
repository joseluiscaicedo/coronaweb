import React from 'react';
import '../assets/styles/NotFound.scss';

const backtoHome = 'https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/backToTheHomepage_txqgtu.png';
const delorean = 'https://res.cloudinary.com/josecaicedo/image/upload/v1627426970/coronaweb/Delorean_pfddqk.webp';

const NotFound = () => (
    <section className='notFound'>
      <div className='notFound__imgContainer'>
        <img className='imgContainer__img' src={backtoHome} alt='Back to the Homepage' />
        <img className='imgContainer__img' src={delorean} alt='El Delorean, El Doc y Marti McFly' />
      </div>
      <div className='notFound__container'>
        <h1 className='container__h1'>404</h1>
        <h2 className='container__h2'>PAGE NOT FOUND</h2>
        <h3 className='container__h3'>BACK TO HOME?</h3>
        <a aria-describedby='GoToHome' href='/' className='container__anchor'>YES</a>
        <a aria-describedby='GoOut' className='container__anchor' href='https://www.youtube.com/watch?v=G3AfIvJBcGo'>NO</a>
      </div>
    </section>
);

export default NotFound;
