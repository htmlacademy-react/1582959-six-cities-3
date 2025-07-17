import { AppRoute, sorts } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import Sort from './sort';

describe('Component: Sort', () => {
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
    const { withStoreComponent } = withStore(<Sort sorts={sorts} activeSortOption={initialState.DATA.sort} onSortChange={() => {}} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText(/Sort by/i);
    screen.getByTestId('places__sorting-type');

  });

  it('opens sorting options when clicked', async () => {
    const { withStoreComponent } = withStore(<Sort sorts={sorts} activeSortOption={initialState.DATA.sort} onSortChange={() => {}} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const button = screen.getByTestId('places__sorting-type');
    await userEvent.click(button);

    const listItem = screen.getAllByRole('listitem');
    expect(listItem.length).toEqual(sorts.length);
  });

  it('changes the selected option when an item is clicked', async () => {
    const newSortOption = sorts[1];
    const { withStoreComponent } = withStore(<Sort sorts={sorts} activeSortOption={initialState.DATA.sort} onSortChange={() => {}} />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const button = screen.getByTestId('places__sorting-type');
    await userEvent.click(button);

    const firstListItem = screen.getAllByRole('listitem')[0];
    await userEvent.click(firstListItem);
    expect(newSortOption).toBe(sorts[1]);
  });

});
