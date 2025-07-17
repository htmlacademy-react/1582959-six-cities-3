import { AppRoute, AuthorizationStatus, sorts } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import CardItem from './card-item';

describe('Component: CardItem', () => {
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
  const offer = MockOffer;
  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<CardItem offer={offer} page={'cities'} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText(offer.title);
    screen.getByAltText('Place image');
    screen.getByTestId('place-card__image');
  });

  it('should navigate to "`/offer`" user click on image', async () => {
    const expectedText = 'offer page';
    const mockOfferRouteComponent = <span>{expectedText}</span>;
    const imageTestId = 'place-card__image';

    const componentWithHistory = withHistory(
      <Routes>
        <Route path={AppRoute.Main} element={<CardItem offer={offer} page={'cities'} />} />
        <Route path={AppRoute.Offer} element={mockOfferRouteComponent} />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(componentWithHistory, initialState);

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId(imageTestId));

    screen.getByText(expectedText);
  });
});
