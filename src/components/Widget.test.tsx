import { render, screen } from '@testing-library/react';
import Widget from './Widget';

describe("Should test all the widget methods", () => {
    test('renders learn react link', () => {
        render(<Widget />);
        const linkElement = screen.getByText(/Password generator widget/i);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('widget should contains a text box', () => {
        render(<Widget />);
        // Check if the text box for the password is rendered
        const element = screen.getByTestId('password');
        expect(element).toBeInTheDocument();
        // await waitFor(() => );
    });

    test('widget should contain a slider', () => {
        render(<Widget />);
        const element = screen.getByTestId('slider');
        expect(element).toBeInTheDocument();
    });
    
    test('widget should contain a numbers option', () => {
        render(<Widget />);
        const element = screen.getByTestId('numbers');
        expect(element).toBeInTheDocument();
    });

    test('widget should contain a characters option', () => {
        render(<Widget />);
        const element = screen.getByTestId('characters');
        expect(element).toBeInTheDocument();
    });
});