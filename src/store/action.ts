import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/types';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const renderOffers = createAction('offers/renderOffers', (value: Offers) => ({
  payload: value,
}));

export const changeSort = createAction('sort/changeSort', (value: string) => ({
  payload: value,
}));
