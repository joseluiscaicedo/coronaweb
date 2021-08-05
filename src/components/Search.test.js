import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {  render } from '@testing-library/react'
import Search from './Search';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: ()=>{return {'isAuthenticated':true}},
}))

jest.mock('../hooks/useFetchData', () =>({
  __esModule: true,
  default: ()=>{return [{}]}
}))


describe('validate Search Component', () =>{

  test('Generates Snapshot for Search Component', () => {
    const { container } = render(
      <Search />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Validate by Text', () => {

    const component =render( <Search /> );
    const HeadingElement=component.getByText('Search by Country')
    expect(HeadingElement).toBeInTheDocument();
  });
})