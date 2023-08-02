import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetails from './Product-Details';

test('renders learn react link', () => {
  render(<ProductDetails />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
