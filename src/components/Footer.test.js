import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Footer from './Header';

describe('validate Footer', () =>{
  const footer = render(<Footer />)
  test('renders content', () => {

    expect(footer.length)>0;

  });

})