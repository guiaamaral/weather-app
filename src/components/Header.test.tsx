import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders Header component with title', () => {
  render(<Header title="Previsão do Tempo" />);
  const titleEl = screen.getByText(/Previsão do Tempo/i);
  expect(titleEl).toBeInTheDocument();
});
