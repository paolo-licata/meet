import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  // Simple mock functions for the props
  const mockSetCurrentNOE = jest.fn();
  const mockSetErrorAlert = jest.fn();

  test('contains an input with role "textbox"', () => {
    render(<NumberOfEvents setCurrentNOE={mockSetCurrentNOE} setErrorAlert={mockSetErrorAlert} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    render(<NumberOfEvents setCurrentNOE={mockSetCurrentNOE} setErrorAlert={mockSetErrorAlert} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('32');
  });

  test('input value changes when user types', () => {
    render(<NumberOfEvents setCurrentNOE={mockSetCurrentNOE} setErrorAlert={mockSetErrorAlert} />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing "10"
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(inputElement.value).toBe('10');
  });
});


