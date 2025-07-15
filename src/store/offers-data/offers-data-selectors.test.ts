import { getErrorStatus, getLoadingStatus, getOffers, getActiveCity, getActiveSortOption, getFavoriteOffers, getOfferNearPlaces, getOfferInformation, getReviews } from './selectors';
import { NameSpace } from '../../const';
import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReviews } from '../../utils/mocks';

describe('OffersData selectors', () => {
  const state = {
    [NameSpace.Data]: {
      city: faker.location.city(),
      sort: 'Price: low to high',
      offers: [MockOffer],
      favoriteOffers: [MockOffer],
      offerNearPlaces: [MockOffer],
      offerInformation: MockOfferInformation,
      reviews: [MockReviews],
      isLoading: faker.datatype.boolean(),
      isOfferInformationLoading: faker.datatype.boolean(),
      isOffersNearbyLoading: faker.datatype.boolean(),
      isReviewsLoading: faker.datatype.boolean(),
      isFavoriteOffersLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    }
  };

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Data];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return favoriteOffers from state', () => {
    const { favoriteOffers } = state[NameSpace.Data];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(favoriteOffers);
  });

  it('should return offerNearPlaces from state', () => {
    const { offerNearPlaces } = state[NameSpace.Data];
    const result = getOfferNearPlaces(state);
    expect(result).toEqual(offerNearPlaces);
  });

  it('should return offerInformation from state', () => {
    const { offerInformation } = state[NameSpace.Data];
    const result = getOfferInformation(state);
    expect(result).toEqual(offerInformation);
  });

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Data];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });

  it('should return data loading status', () => {
    const { isLoading } = state[NameSpace.Data];
    const result = getLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return error status from state', () => {
    const { hasError } = state[NameSpace.Data];
    const result = getErrorStatus(state);
    expect(result).toBe(hasError);
  });

  it('should return active city from state', () => {
    const { city } = state[NameSpace.Data];
    const result = getActiveCity(state);
    expect(result).toBe(city);
  });

  it('should return active sort type from state', () => {
    const { sort } = state[NameSpace.Data];
    const result = getActiveSortOption(state);
    expect(result).toBe(sort);
  });
});
