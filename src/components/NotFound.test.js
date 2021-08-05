import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import  NotFound from './NotFound';


  test('Validate by HeadingElement', () => {
     const component =render( <NotFound /> );
     const HeadingElement=component.getByText('PAGE NOT FOUND')
    expect(HeadingElement).toBeInTheDocument();
  });

  test('Generates Snapshot for NotFound Component', () => {
    const { container } = render(
      <NotFound />
    );
    expect(container.firstChild).toMatchSnapshot();
  });