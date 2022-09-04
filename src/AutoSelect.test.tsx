import React from 'react';
import { render, screen } from '@testing-library/react';
import AutoSelect from './AutoSelect';

test('renders learn react link', () => {
  render(<AutoSelect />);
  const linkElement = screen.getByText(/Autoselect/);
  expect(linkElement).toBeInTheDocument();
});
