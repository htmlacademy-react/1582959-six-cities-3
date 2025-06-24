import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/types';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const loadOffers = createAction<Offers>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const changeSort = createAction('sort/changeSort', (value: string) => ({
  payload: value,
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');
