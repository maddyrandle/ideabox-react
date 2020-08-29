import React from 'react';
import { render } from '@testing-library/react';
import Ideas from './Ideas';

test('renders Ideas', () => {
  const { getByText } = render(<Ideas />);
  const ideas = getByText('Ideas');
  expect(ideas).toBeInTheDocument();
});
