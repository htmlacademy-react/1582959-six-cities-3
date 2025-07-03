import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, loadReviews, changeSort, toggleFavorite, requireAuthorization, setUserData, setOffersDataLoadingStatus, setOfferDetailedInformation, setOfferNearPlaces, addReview, setRating, setComment, setFavoriteOffers } from './action';
import { cities, sorts, AuthorizationStatus } from '../const';
import { CommentData, Offer, OfferList, Reviews, UserData } from '../types/types';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORT = sorts[0];

type InitalState = {
  city: string;
  offers: OfferList;
  offerNearPlaces: OfferList;
  offerInformation: Offer | null;
  review: CommentData;
  reviews: Reviews;
  sort: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  favoriteOffers: OfferList;
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  offerNearPlaces: [],
  offerInformation: null,
  reviews: [],
  review: {
    id: '',
    comment: '',
    rating: 0,
  },
  sort: DEFAULT_SORT,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  favoriteOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(toggleFavorite, (state, action) => {
      const offerId = action.payload;
      const updatedOfferIndex = state.offers.findIndex((offer) => offer.id === offerId);

      if (updatedOfferIndex !== -1) {
        state.offers[updatedOfferIndex].isFavorite = !state.offers[updatedOfferIndex].isFavorite;
      }
    })
    .addCase(setOfferDetailedInformation, (state, action) => {
      state.offerInformation = action.payload;
    })
    .addCase(setOfferNearPlaces, (state, action) => {
      state.offerNearPlaces = action.payload;
    })
    .addCase(setRating, (state, action) => {
      state.review.rating = action.payload;
    })
    .addCase(setComment, (state, action) => {
      state.review.comment = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.review = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
