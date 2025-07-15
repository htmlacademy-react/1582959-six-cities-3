import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('Component: FavoritesEmpty', () => {
  it('should render correct', () => {
    const expectedText = /Nothing yet saved/i;
    const expectedTextDescription = /Save properties to narrow down search or plan your future trips/i;

    render(<FavoritesEmpty />);

    screen.getByText(expectedText);
    screen.getByText(expectedTextDescription);
  });
});
