import { render, screen } from '@testing-library/react';
import Widget from './Widget';
test('renders learn react link', () => {
  render(<Widget />);
  const linkElement = screen.getByText(/Password generator widget/i);
  expect(linkElement).toBeInTheDocument();
});

test('widget contains a text box', () => {
    render(<Widget />);
    // Check if the text box for the password is rendered
    const element = screen.getByTestId('password');
    expect(element).toBeInTheDocument();
    // await waitFor(() => );
});