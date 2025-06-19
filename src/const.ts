import { Rating } from './types/types';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { sortByDate } from './utils';

export const favoritesOffers = offers.filter((offer) => offer.isFavorite);
export const premiumOffers = offers.filter((offer) => offer.isPremium);
export const firstOffer = premiumOffers.slice(0, 1)[0];
export const threeFirstOffers = offers.slice(0, 3);
export const offerReviews = sortByDate(reviews).slice(0, 10);

export const Setting = {
  FavoritesCount: favoritesOffers.length,
  ReviewsCount: offerReviews.length,
};

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const sorts: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export enum Page {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
  OfferMap = 'offer'
}

export const stars: Rating[] = [
  {
    id: 5,
    title: 'perfect'
  },
  {
    id: 4,
    title: 'good'
  },
  {
    id: 3,
    title: 'not bad'
  },
  {
    id: 2,
    title: 'badly'
  },
  {
    id: 1,
    title: 'terribly'
  },
];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PIN_MARKER_DEFAULT = 'img/pin.svg';

export const PIN_MARKER_CURRENT = 'img/pin-active.svg';
