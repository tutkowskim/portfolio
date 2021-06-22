import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = getByText(/Mark Tutkowski/i);
  expect(linkElement).toBeInTheDocument();
});
