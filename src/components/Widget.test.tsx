import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Widget from './Widget';

describe("Should test all the widget methods", () => {
    test('renders Widget', async () => {
        render(<Widget />);
        const linkElement = screen.getByText(/Password generator widget/i);
        expect(linkElement).toBeInTheDocument();
        await waitFor(() => {
            const passwordElement = screen.getByTestId('password') as HTMLInputElement;
            expect(passwordElement.value).toHaveLength(8);
        });
    });
    
    test('widget should contains a text box', () => {
        render(<Widget />);
        // Check if the text box for the password is rendered
        const element = screen.getByTestId('password');
        expect(element).toBeInTheDocument();
    });

    test('widget should contain a slider', () => {
        render(<Widget />);
        const element = screen.getByTestId('range') as HTMLInputElement;
        expect(element).toBeInTheDocument();
        expect(element.value).toBe('8'); //Default value
        fireEvent.change(element, { target: { value: '20' }});
        expect(element.value).toBe('20'); // On change
        const lengthElement = screen.getByText(/20/i);
        expect(lengthElement).toBeInTheDocument();
        const passwordElement = screen.getByTestId('password') as HTMLInputElement;
        expect(passwordElement.value).toHaveLength(20);
    });
    
    test('widget should contain a numbers option', () => {
        render(<Widget />);
        const element = screen.getByTestId('numbers') as HTMLInputElement;
        expect(element).toBeInTheDocument();
        expect(element.checked).toBe(false);
        const passwordElement = screen.getByTestId('password') as HTMLInputElement;
        fireEvent.change(element, { target: { checked: true }});
        expect(element.checked).toBe(true); // On change
        fireEvent.change(element, { target: { checked: false }});
        expect(element.checked).toBe(false); // On change
        fireEvent.click(element);
        expect(/\d/.test(passwordElement.value)).toBe(true);
    });

    test('widget should contain a characters option', async () => {
        render(<Widget />);
        const element = screen.getByTestId('characters') as HTMLInputElement;
        expect(element).toBeInTheDocument();
        expect(element.checked).toBe(false);
        fireEvent.change(element, { target: { checked: true }});
        expect(element.checked).toBe(true); // On change
        fireEvent.change(element, { target: { checked: false }});
        expect(element.checked).toBe(false); // On change
        fireEvent.click(element);
        await waitFor(() => {
            const passwordTextBox = screen.getByTestId('password') as HTMLInputElement;
            expect(/[!@#$%^&*()]/.test(passwordTextBox.value)).toBe(true);
        })
    });
});