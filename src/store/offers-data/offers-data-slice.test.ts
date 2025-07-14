import { faker } from '@faker-js/faker';
import { MockOffer, MockOfferInformation, MockReviews } from '../../utils/mocks';
import { changeCity, changeSort, offersDataSlice } from './offers-data-slice';
import { DEFAULT_CITY, DEFAULT_SORT } from '../../const';
import { fetchFavoriteOffers, fetchNearPlaces, fetchOfferAction, fetchOfferDetailedInformation, fetchReviewList } from '../api-actions';

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
    isOfferInformationLoading: false,
    isOffersNearbyLoading: false,
    isReviewsLoading: false,
    isFavoriteOffersLoading: false,
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
    isOfferInformationLoading: faker.datatype.boolean(),
    isOffersNearbyLoading: faker.datatype.boolean(),
    isReviewsLoading: faker.datatype.boolean(),
    isFavoriteOffersLoading: faker.datatype.boolean(),
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

  describe('fetchOfferAction extraReducer', () => {
    it('should set "offers" to array, "isLoading" to "false" with "fetchOfferAction.fulfilled"', () => {

      const fakeOffers = [MockOffer];
      const result = offersDataSlice.reducer(undefined, fetchOfferAction.fulfilled(fakeOffers, '', undefined));
      expect(result.offers).toEqual(fakeOffers);
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

  describe('fetchOfferDetailedInformation extraReducer', () => {
    it('should set "offerInformation", "isOfferInformationLoading" to "false" with "fetchOfferDetailedInformation.fulfilled"', () => {

      const fakeOffersInformation = MockOfferInformation;
      const result = offersDataSlice.reducer(undefined, fetchOfferDetailedInformation.fulfilled(fakeOffersInformation, '', undefined));
      expect(result.offerInformation).toEqual(fakeOffersInformation);
      expect(result.isOfferInformationLoading).toBe(false);
    });

    it('should set "isOfferInformationLoading" to "true", "hasError" to "false" with "fetchOfferDetailedInformation.pending"', () => {

      const result = offersDataSlice.reducer(undefined, fetchOfferDetailedInformation.pending('', undefined));
      expect(result.isOfferInformationLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should set "isOfferInformationLoading" to "false", "hasError" to "true" with "fetchOfferDetailedInformation.rejected"', () => {

      const result = offersDataSlice.reducer(undefined, fetchOfferDetailedInformation.rejected);
      expect(result.isOfferInformationLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });

  describe('fetchNearPlaces extraReducer', () => {
    it('should set "offerNearPlaces" to array, "isOffersNearbyLoading" to "false" with "fetchNearPlaces.fulfilled"', () => {

      const fakeOffersNearby = [MockOffer];
      const result = offersDataSlice.reducer(undefined, fetchNearPlaces.fulfilled(fakeOffersNearby, '', undefined));
      expect(result.offerNearPlaces).toEqual(fakeOffersNearby);
      expect(result.isOffersNearbyLoading).toBe(false);
    });

    it('should set "isOffersNearbyLoading" to "true", "hasError" to "false" with "fetchNearPlaces.pending"', () => {

      const result = offersDataSlice.reducer(undefined, fetchNearPlaces.pending('', undefined));
      expect(result.isOffersNearbyLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should set "isOffersNearbyLoading" to "false", "hasError" to "true" with "fetchNearPlaces.rejected"', () => {

      const result = offersDataSlice.reducer(undefined, fetchNearPlaces.rejected);
      expect(result.isOffersNearbyLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });

  describe('fetchReviewList extraReducer', () => {
    it('should set "reviews" to array, "isReviewsLoading" to "false" with "fetchReviewList.fulfilled"', () => {

      const fakeReviews = [MockReviews];
      const result = offersDataSlice.reducer(undefined, fetchReviewList.fulfilled(fakeReviews, '', undefined));
      expect(result.reviews).toEqual(fakeReviews);
      expect(result.isReviewsLoading).toBe(false);
    });

    it('should set "isReviewsLoading" to "true", "hasError" to "false" with "fetchReviewList.pending"', () => {

      const result = offersDataSlice.reducer(undefined, fetchReviewList.pending('', undefined));
      expect(result.isReviewsLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should set "isReviewsLoading" to "false", "hasError" to "true" with "fetchReviewList.rejected"', () => {

      const result = offersDataSlice.reducer(undefined, fetchReviewList.rejected);
      expect(result.isReviewsLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });

  describe('fetchFavoriteOffers extraReducer', () => {
    it('should set "favoriteOffers" to array, "isFavoriteOffersLoading" to "false" with "fetchFavoriteOffers.fulfilled"', () => {

      const fakeFavoriteOffers = [MockOffer];
      const result = offersDataSlice.reducer(undefined, fetchFavoriteOffers.fulfilled(fakeFavoriteOffers, '', undefined));
      expect(result.favoriteOffers).toEqual(fakeFavoriteOffers);
      expect(result.isFavoriteOffersLoading).toBe(false);
    });

    it('should set "isFavoriteOffersLoading" to "true", "hasError" to "false" with "fetchFavoriteOffers.pending"', () => {

      const result = offersDataSlice.reducer(undefined, fetchFavoriteOffers.pending('', undefined));

      expect(result.isFavoriteOffersLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should set "isFavoriteOffersLoading" to "false", "hasError" to "true" with "fetchFavoriteOffers.rejected"', () => {

      const result = offersDataSlice.reducer(undefined, fetchFavoriteOffers.rejected);
      expect(result.isFavoriteOffersLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });
});
