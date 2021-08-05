import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Layout from './Layout';


test('Generates Snapshot for Layout Component', () => {
  const { container } = render(
    <Layout />
  );
  expect(container.firstChild).toMatchSnapshot();
});