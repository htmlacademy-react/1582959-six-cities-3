import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort, toggleFavorite, requireAuthorization, setUserData, setOffersDataLoadingStatus } from './action';
import { cities, sorts, AuthorizationStatus } from '../const';
import { OfferList, UserData } from '../types/types';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORT = sorts[0];

type InitalState = {
  city: string;
  offers: OfferList;
  // reviews: Reviews;
  sort: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  favoriteIds: string[];
  userData: UserData | null;
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  // reviews: [],
  sort: DEFAULT_SORT,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  favoriteIds: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    // .addCase(loadReviews, (state, action) => {
    //   state.reviews = action.payload;
    // })
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
      const index = state.favoriteIds.indexOf(offerId);
      if (index !== -1) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(offerId);
      }
    });
});
