import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('Search component', () => {
  test('should be rendered', () => {
    render(<Search onSearchChange="handleChange" />);
    const inputEl = screen.getByPlaceholderText(/Insira a sua cidade/i);
    const iconEl = screen.getByTitle(/Busca/i);
    expect(inputEl).toBeInTheDocument();
    expect(iconEl).toBeInTheDocument();
  });

  test('should call handleChange when click on button', () => {
    const handleChange = jest.fn();
    render(<Search onSearchChange={handleChange} />);
    const buttonEl = screen.getByTitle(/Busca/i);
    fireEvent.click(buttonEl);
    expect(handleChange).toHaveBeenCalled();
  });

  test('should call handleChange when press enter', () => {
    const handleChange = jest.fn();
    render(<Search onSearchChange={handleChange} />);
    const inputEl = screen.getByPlaceholderText(/Insira a sua cidade/i);
    fireEvent.keyDown(inputEl, { key: "Enter" });
    expect(handleChange).toHaveBeenCalled();
  });

  test('should not call handleChange when press any key but enter', () => {
    const handleChange = jest.fn();
    render(<Search onSearchChange={handleChange} />);
    const inputEl = screen.getByPlaceholderText(/Insira a sua cidade/i);
    fireEvent.keyDown(inputEl, { key: "Esc" });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
