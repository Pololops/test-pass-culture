import { render, screen } from '@testing-library/react';
import App from './App';

describe('Header', () => {
  test('renders Header component', () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });
});