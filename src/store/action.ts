import { createAction } from '@reduxjs/toolkit';
import { OfferList } from '../types/types';
import { AppRoute } from '../const';

// export const toggleFavorite = createAction<string>('favorites/toggleFavorite');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setFavoriteOffers = createAction<OfferList>('setFavoriteOffers');
