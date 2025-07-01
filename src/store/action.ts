import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferList, Review, Reviews, UserData } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const loadOffers = createAction<OfferList>('offers/loadOffers');

export const loadReviews = createAction<Reviews>('offers/loadReviews');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const changeSort = createAction('sort/changeSort', (value: string) => ({
  payload: value,
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserData');

export const toggleFavorite = createAction<string>('favorites/toggleFavorite');

export const setOfferDetailedInformation = createAction<Offer>('data/setOfferDetailedInformation');

export const setOfferNearPlaces = createAction<OfferList>('data/setOfferNearPlaces');

export const addReview = createAction<Review>('data/addReview');

export const setRating = createAction<number>('setRating');

export const setComment = createAction<string>('setComment');
