import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { cities, sorts, AuthorizationStatus } from '../const';
import { Offers } from '../types/types';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORT = sorts[0];

type InitalState = {
  city: string;
  offers: Offers;
  sort: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  sort: DEFAULT_SORT,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
