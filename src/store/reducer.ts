import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort, setOffersDataLoadingStatus } from './action';
import { cities, sorts } from '../const';
import { Offers } from '../types/types';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORT = sorts[0];

type InitalState = {
  city: string;
  offers: Offers;
  sort: string;
  isOffersLoading: boolean;
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  sort: DEFAULT_SORT,
  isOffersLoading: false,
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
      state.isOffersLoading = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});
