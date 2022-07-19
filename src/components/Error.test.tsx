import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error component', () => {
  test('should have message for errors', () => {
    render(<Error status={429} />);
    const textEl = screen.getByText(/Ocorreu um problema. Por favor tente novamente mais tarde./i);
    expect(textEl).toBeInTheDocument();
  });

  test('should have custom message for error 404', () => {
    render(<Error status={404} />);
    const textEl = screen.getByText(/Verifique o nome da cidade, por favor./i);
    expect(textEl).toBeInTheDocument();
  });
});