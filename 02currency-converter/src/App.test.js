import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Currency Converter app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Currency Converter/i);
  expect(linkElement).toBeInTheDocument();
});
