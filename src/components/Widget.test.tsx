import { render, screen, waitFor } from '@testing-library/react';
import Widget from './Widget';
test('renders learn react link', () => {
  render(<Widget />);
  const linkElement = screen.getByText(/Password generator widget/i);
  expect(linkElement).toBeInTheDocument();
});

test('widget contains a text box', async () => {
    // Check if the text box for the password is rendered
    screen.findByTestId('password')
    expect().toBeInTheDocument();
    // await waitFor(() => );
});