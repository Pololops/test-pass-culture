import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Article title={''} category={''} date={''} text={''} />);

    expect(
      screen.getByTestId("article")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3 })
    ).toBeInTheDocument();
  });
});