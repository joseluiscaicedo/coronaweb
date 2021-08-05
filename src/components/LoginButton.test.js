import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LoginButton from './LoginButton';


describe('validate LoginButton Component', () =>{
  test('renders content', () => {
    const component = render(<LoginButton />)

    expect(component.length)>0;

  });
  test('Generates Snapshot for LoginButton Component', () => {
    const { container } = render(
      <LoginButton />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

})