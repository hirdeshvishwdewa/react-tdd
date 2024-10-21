import { fireEvent, render, screen } from '@testing-library/react';
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
        expect(passwordElement.textContent).toHaveLength(20);
    });
    
    test('widget should contain a numbers option', () => {
        render(<Widget />);
        const element = screen.getByTestId('numbers') as HTMLInputElement;
        expect(element).toBeInTheDocument();
        expect(element.checked).toBe(false);
        fireEvent.change(element, { target: { checked: false }});
        expect(element.checked).toBe(false); // On change
        fireEvent.change(element, { target: { checked: true }});
        expect(element.checked).toBe(true); // On change
        const passwordElement = screen.getByTestId('password') as HTMLInputElement;
        expect(/\d/.test(passwordElement.textContent ? passwordElement.textContent : '')).toBe(true);
    });

    test('widget should contain a characters option', () => {
        render(<Widget />);
        const element = screen.getByTestId('characters') as HTMLInputElement;
        expect(element).toBeInTheDocument();
        expect(element.checked).toBe(false);
        fireEvent.change(element, { target: { checked: false }});
        expect(element.checked).toBe(false); // On change
        fireEvent.change(element, { target: { checked: true }});
        expect(element.checked).toBe(true); // On change
        const passwordTextBox = screen.getByTestId('password');
        expect(/[@#$%^&*]/.test(passwordTextBox.textContent ? passwordTextBox.textContent : '')).toBe(true);
    });
});