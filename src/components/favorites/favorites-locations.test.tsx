import { AppRoute, AuthorizationStatus, sorts } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router';
import FavoritesLocations from './favorites-locations';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import { createMemoryHistory } from 'history';

describe('Component: FavoritesLocations', () => {
  const initialState = {
    DATA: {
      city: faker.location.city(),
      sort: sorts[0],
      offers: [MockOffer],
      favoriteOffers: [MockOffer],
      offerNearPlaces: [MockOffer],
      offerInformation: MockOfferInformation,
      reviews: [MockReview],
      isLoading: faker.datatype.boolean(),
      isOfferInformationLoading: faker.datatype.boolean(),
      isOffersNearbyLoading: faker.datatype.boolean(),
      isReviewsLoading: faker.datatype.boolean(),
      isFavoriteOffersLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    },
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
        isPro: faker.datatype.boolean(),
        token: faker.internet.jwt(),
      }
    }
  };

  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('should render correctly', () => {

    const { withStoreComponent } = withStore(<FavoritesLocations />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText(initialState.DATA.favoriteOffers[0].city.name);
    const items = screen.getAllByTestId('favorites__locations-items');
    expect(items.length).toEqual(initialState.DATA.favoriteOffers.length);
  });

  it('should navigate to "/" user click "locations__item-link"', async () => {
    const expectedText = 'main page';
    const mockMainRouteComponent = <span>{expectedText}</span>;
    const locationsTestId = 'locations__item-link';
    const componentWithHistory = withHistory(
      <Routes>
        <Route path={AppRoute.Favorites} element={<FavoritesLocations />} />
        <Route path={AppRoute.Main} element={mockMainRouteComponent} />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(componentWithHistory, initialState);

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId(locationsTestId));

    screen.getByText(expectedText);
  });

});
