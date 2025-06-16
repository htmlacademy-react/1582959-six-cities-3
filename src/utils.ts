import { Reviews } from './types/types';
import { Offers } from './types/types';

export const sortByDate = (reviews: Reviews) => reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const sortByLowToHighPrice = (offers: Offers) => offers.sort((a, b) => a.price - b.price);

export const sortByHighToLowPrice = (offers: Offers) => offers.sort((a, b) => b.price - a.price);

export const sortByRating = (offers: Offers) => offers.sort((a, b) => b.rating - a.rating);
