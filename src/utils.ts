import { OfferList } from './types/types';

export const sortByLowToHighPrice = (offers: OfferList) => offers.sort((a, b) => a.price - b.price);

export const sortByHighToLowPrice = (offers: OfferList) => offers.sort((a, b) => b.price - a.price);

export const sortByRating = (offers: OfferList) => offers.sort((a, b) => b.rating - a.rating);
