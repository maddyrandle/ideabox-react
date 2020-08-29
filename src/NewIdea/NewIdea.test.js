import React from 'react';
import { render } from '@testing-library/react';
import NewIdea from './NewIdea';

test('renders NewIdeas', () => {
  const { getByText } = render(<NewIdea />);
  const newIdea = getByText('NewIdea');
  expect(newIdea).toBeInTheDocument();
});
