import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

type TestElement = Document | Element | Window | Node

describe('App component', () => {
  test('should be rendered', () => {
    render(<App />);
    const headerEl = screen.getByText(/Previsão do Tempo/i);
    const searchEl = screen.getByPlaceholderText(/Insira a sua cidade/i);
    const loadingEl = screen.getByTitle(/Carregando/i);
    expect(headerEl).toBeInTheDocument();
    expect(searchEl).toBeInTheDocument();
    expect(loadingEl).toBeInTheDocument();
  });

  test('should call handleChange when change search value', () => {
    render(<App />);
    const searchEl = screen.getByPlaceholderText(/Insira a sua cidade/i);
    const btnEl = screen.getByTitle(/Busca/i);
    fireEvent.change(searchEl, { target: { value: 'Test' } });
    fireEvent.click(btnEl);
    expect(hasInputValue(searchEl, 'Test')).toBe(true);
  });
});

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e
}

