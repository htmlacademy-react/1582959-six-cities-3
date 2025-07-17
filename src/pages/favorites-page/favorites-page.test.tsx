import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { faker } from '@faker-js/faker';
import { AuthorizationStatus, sorts } from '../../const';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import FavoritesPage from './favorites-page';

describe('Component: FavoritesPage', () => {
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
    },
  };

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<FavoritesPage />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText('Saved listing');
  });

});
