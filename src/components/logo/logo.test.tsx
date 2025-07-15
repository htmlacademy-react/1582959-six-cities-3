import Logo from './logo';
import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const preparedComponent = withHistory(<Logo />);
    render(preparedComponent);

    const logoImage: HTMLImageElement = screen.getByAltText('6 cities logo');

    expect(logoImage.src.includes('/img/logo.svg')).toBe(true);
    expect(logoImage.alt).toBe('6 cities logo');
  });
});
