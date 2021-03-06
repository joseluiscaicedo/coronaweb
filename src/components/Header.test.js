import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './Header'

describe('validate Header', () =>{
  test('renders content', () => {
    const header = render(<Header />)

    expect(header.length)>0;

  });

  test('Generates Snapshot for Header Component', () => {
    const { container } = render(
      <Header />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

})