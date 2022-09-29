import { render, screen } from '@testing-library/react';
import PageArticles from './PageArticles';

describe('Header', () => {
  test('renders Header component', () => {
    render(<PageArticles />);

    expect(
      screen.getByRole("heading", { level: 2 })
    ).toBeInTheDocument();
  });
});