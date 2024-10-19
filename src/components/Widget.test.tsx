import { render, screen } from '@testing-library/react';
import Widget from './Widget';
test('renders learn react link', () => {
  render(<Widget />);
  const linkElement = screen.getByText(/Password generator widget/i);
  expect(linkElement).toBeInTheDocument();
});
