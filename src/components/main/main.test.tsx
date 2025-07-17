import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import Main from './main';
import { withHistory, withStore } from '../../utils/mock-component';
import { City } from '../../types/types';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import { AppRoute, sorts } from '../../const';
import { createMemoryHistory } from 'history';

describe('Component: Main', () => {
  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  const fakeCity: City = {
    name: faker.location.city(),
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int(),
    },
  };

  const initialState = {
    DATA: {
      city: fakeCity.name,
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
  };

  it('should render correct', () => {

    const expectedText = /places to stay/i;

    const { withStoreComponent } = withStore(<Main city={fakeCity} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText(expectedText);
  });

});
