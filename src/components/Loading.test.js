import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Loading from './Loading';


describe('validate Loading Component', () =>{
  test('renders content', () => {
    const component = render(<Loading />)

    expect(component.length)>0;

  });
  test('Generates Snapshot for Loading Component', () => {
    const { container } = render(
      <Loading />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

})