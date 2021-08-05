import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Profile from './Profile'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: ()=>{return {
    'isAuthenticated':true,
    'isLoading':true,
    'user':{}
  }},
}))

describe('validate Profile', () =>{

  test('Generates Snapshot for Profile Component', () => {
    const { container } = render(
      <Profile />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test('Validate by Text', () => {
    const component =render( <Profile /> );
    const SpanElement=component.getByText('Loading...')
   expect(SpanElement).toBeInTheDocument();
 });
})