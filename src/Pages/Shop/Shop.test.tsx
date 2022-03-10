import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import Shop from './Shop';

describe("shop is testing here", () => {
  test('renders Shop', () => {
    render(<Shop />);
    const banner = screen.getByText("Snack");
    expect(banner).toBeInTheDocument();
  });

})
