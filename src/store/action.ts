import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/types';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const loadOffers = createAction<Offers>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const changeSort = createAction('sort/changeSort', (value: string) => ({
  payload: value,
}));
