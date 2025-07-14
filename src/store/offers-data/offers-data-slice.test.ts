import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReviews } from '../../utils/mocks';
import { changeCity, changeSort, loadReviews, offersDataSlice, setFavoriteOffers, setOfferDetailedInformation, setOfferNearPlaces } from './offers-data-slice';
import { DEFAULT_CITY, DEFAULT_SORT } from '../../const';
import { fetchOfferAction } from '../api-actions';

describe('OffersData Slice', () => {
  const initialState = {
    city: DEFAULT_CITY,
    sort: DEFAULT_SORT,
    offers: [],
    favoriteOffers: [],
    offerNearPlaces: [],
    offerInformation: null,
    reviews: [],
    isLoading: false,
    hasError: false,
  };

  const expectedState = {
    city: faker.location.city(),
    sort: 'Price: low to high',
    offers: [MockOffer],
    favoriteOffers: [MockOffer],
    offerNearPlaces: [MockOffer],
    offerInformation: MockOfferInformation,
    reviews: [MockReviews],
    isLoading: faker.datatype.boolean(),
    hasError: faker.datatype.boolean(),
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = offersDataSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const result = offersDataSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should change city with "changeCity" action', () => {
    const newCity = faker.location.city();

    const result = offersDataSlice.reducer(initialState, changeCity(newCity));
    expect(result.city).toBe(newCity);
  });

  it('should change sort type with "changeSort" action', () => {
    const newSortType = 'Price: low to high';

    const result = offersDataSlice.reducer(initialState, changeSort(newSortType));
    expect(result.sort).toBe(newSortType);
  });

  it('should set offer near places with "setOfferNearPlaces" action', () => {
    const mockOfferNearPlaces = [MockOffer];

    const result = offersDataSlice.reducer(initialState, setOfferNearPlaces(mockOfferNearPlaces));
    expect(result.offerNearPlaces).toBe(mockOfferNearPlaces);
  });

  it('should set offer detailed information with "setOfferDetailedInformation" action', () => {
    const mockOfferDetailedInformation = MockOfferInformation;

    const result = offersDataSlice.reducer(initialState, setOfferDetailedInformation(mockOfferDetailedInformation));
    expect(result.offerInformation).toBe(mockOfferDetailedInformation);
  });

  it('should set favorite offers with "setFavoriteOffers" action', () => {
    const mockFavoriteOffers = [MockOffer];

    const result = offersDataSlice.reducer(initialState, setFavoriteOffers(mockFavoriteOffers));
    expect(result.favoriteOffers).toBe(mockFavoriteOffers);
  });

  it('should set reviews with "loadReviews" action', () => {
    const mockReviews = [MockReviews];

    const result = offersDataSlice.reducer(initialState, loadReviews(mockReviews));
    expect(result.reviews).toBe(mockReviews);
  });

  it('should set "offers" to array with question, "isLoading" to "false" with "fetchOfferAction.fulfilled"', () => {

    const mockOffers = [MockOffer];
    const result = offersDataSlice.reducer(undefined, fetchOfferAction.fulfilled(mockOffers, '', undefined));
    expect(result.offers).toEqual(mockOffers);
    expect(result.isLoading).toBe(false);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchOfferAction.pending"', () => {

    const result = offersDataSlice.reducer(undefined, fetchOfferAction.pending('', undefined));
    expect(result.isLoading).toBe(true);
    expect(result.hasError).toBe(false);
  });

  it('should set "isLoading" to "false", "hasError" to "true" with "fetchOfferAction.rejected"', () => {

    const result = offersDataSlice.reducer(undefined, fetchOfferAction.rejected);
    expect(result.isLoading).toBe(false);
    expect(result.hasError).toBe(true);
  });
});
