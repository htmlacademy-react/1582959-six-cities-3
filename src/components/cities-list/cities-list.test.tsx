import { AppRoute, cities, sorts } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import CitiesList from './cities-list';

describe('Component: CitiesList', () => {
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
  };

  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<CitiesList cities={cities} activeCity={initialState.DATA.city} onChangeCity={() => {}} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const listItem = screen.getAllByRole('listitem');
    expect(listItem.length).toEqual(cities.length);
  });

  it('changes active city when an item is clicked', async () => {
    const newActiveCity = cities[1];
    const { withStoreComponent } = withStore(<CitiesList cities={cities} activeCity={initialState.DATA.city} onChangeCity={() => {}} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const firstListItem = screen.getAllByRole('listitem')[0];
    await userEvent.click(firstListItem);
    expect(newActiveCity).toBe(cities[1]);
  });

});
