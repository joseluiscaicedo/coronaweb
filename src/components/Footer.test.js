import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Footer from './Footer';

describe('validate Footer', () =>{
  test('renders content', () => {
    const footer = render(<Footer />)

    expect(footer.length)>0;

  });
  test('Generates Snapshot for Footer Component', () => {
    const { container } = render(
      <Footer />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test('Validate by Text', () => {
    const component =render( <Footer /> );
    const SpanElement=component.getByText('Design by Jose caicedo')
   expect(SpanElement).toBeInTheDocument();
 });
})