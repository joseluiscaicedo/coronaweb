import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './Header'

describe('validate Header', () =>{
  const header = render(<Header />)
  test('renders content', () => {

    expect(header.length)>0;

  });

  test('Generates Snapshot for COMPONENT Component', () => {
    const { container } = render(
      <Header />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

})