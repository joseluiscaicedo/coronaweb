import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import MainSection from './MainSection';


describe('validate mainSection', () =>{
  test('renders content', () => {
    const mainSection = render(<MainSection />)

    expect(mainSection.length)>0;

  });
  test('Generates Snapshot for mainSection Component', () => {
    const { container } = render(
      <MainSection />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Validate by HeadingElement', () => {
     const component =render( <MainSection /> );
     const HeadingElement=component.getByText('COVID-19 Help Center')
    expect(HeadingElement).toBeInTheDocument();
  });
})