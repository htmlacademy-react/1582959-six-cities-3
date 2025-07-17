import Logo from './logo';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

describe('Component: Logo', () => {
  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(AppRoute.Offer);
  });

  it('should render correctly', () => {
    const preparedComponent = withHistory(<Logo />);
    render(preparedComponent);

    const logoImage: HTMLImageElement = screen.getByAltText('6 cities logo');

    expect(logoImage.src.includes('/img/logo.svg')).toBe(true);
    expect(logoImage.alt).toBe('6 cities logo');
  });


  it('should navigate to "/" user click logo', async () => {
    const expectedText = 'main page';
    const mockMainRouteComponent = <span>{expectedText}</span>;
    const headerTestId = 'header__logo-link';
    const componentWithHistory = withHistory(
      <Routes>
        <Route path={AppRoute.Offer} element={<Logo />} />
        <Route path={AppRoute.Main} element={mockMainRouteComponent} />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(componentWithHistory, {});

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId(headerTestId));

    screen.getByText(expectedText);
  });

});
