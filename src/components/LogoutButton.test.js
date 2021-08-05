import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LogoutButton from './LogoutButton';


describe('validate LogoutButton Component', () =>{
  test('renders content', () => {
    const component = render(<LogoutButton />)

    expect(component.length)>0;

  });
  test('Generates Snapshot for LogoutButton Component', () => {
    const { container } = render(
      <LogoutButton />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

})