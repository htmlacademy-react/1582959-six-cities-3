import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import { faker } from '@faker-js/faker';
import { AuthorizationStatus, sorts } from '../../const';
import Header from './header';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';

describe('Component: Header', () => {
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
    const { withStoreComponent } = withStore(<Header />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByTestId('header__nav-list');
  });

  it('should render correctly when user login', async () => {
    const expectedUserName = initialState.USER.userData.email;
    const expectedFavoriteCount = initialState.DATA.favoriteOffers.length;
    const { withStoreComponent } = withStore(<Header />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId('user__name'),
      expectedUserName,
    );

    screen.getByText('Sign out');
    screen.getByText(expectedUserName);
    screen.getByText(expectedFavoriteCount);
  });

});
