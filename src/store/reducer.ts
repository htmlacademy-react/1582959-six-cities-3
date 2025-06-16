import { createReducer } from '@reduxjs/toolkit';
import { changeCity, renderOffers, changeSort } from './action';
import { cities, sorts } from '../const';
import { offers } from '../mocks/offers';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORT = sorts[0];

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  sort: DEFAULT_SORT,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(renderOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});
