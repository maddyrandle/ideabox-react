import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

test('renders Nav', () => {
  const { getByText } = render(<Nav />);
  const navText = getByText('IdeaBox');
  expect(navText).toBeInTheDocument();
});
