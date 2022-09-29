import { render, screen } from '@testing-library/react';
import PageCreateNews from './PageCreateNews';

describe('Header', () => {
  test('renders Header component', () => {
    render(<PageCreateNews />);

    expect(
      screen.getByRole("heading", { level: 2 })
    ).toBeInTheDocument();
  });
});