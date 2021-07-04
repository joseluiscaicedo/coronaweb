import React from 'react';
import '../assets/styles/Categories.scss';

const Categories = ({ children }) => {
  return (
    <div className='categories'>
      <h3 className='categories__title'>Favorites</h3>
      {children}
    </div>
  );
};

export default Categories;
