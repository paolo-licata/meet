import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('contains an input with role "textbox"', () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('32');
  });

  test('input value changes when user types', async () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing "10" after clearing the input
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.change(inputElement, { target: { value: '10' } });

    expect(inputElement.value).toBe('10');
  });
});
