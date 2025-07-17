import { sorts } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import ReviewList from './review-list';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReview } from '../../utils/mocks';

describe('Component: ReviewList', () => {
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

  it('should render correctly', () => {
    const expectedReviewsLength = initialState.DATA.reviews.length;

    const { withStoreComponent } = withStore(<ReviewList />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryAllByRole('listitem').length).toBe(expectedReviewsLength);
  });

});
