import { Rating } from './types/types';
import { POINTS } from './mocks/points';
import { offers } from './mocks/offers';

export const favoritesOffers = POINTS.filter((point) => point.isFavorite);
export const premiumOffers = offers.filter((offer) => offer.isPremium);
export const firstOffer = premiumOffers.slice(0, 1)[0];
export const threeFirstPoints = POINTS.slice(0, 3);

export const Setting = {
  RentalOffersCount: POINTS.length,
  FavoritesCount: favoritesOffers.length,
};

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amstardam', 'Hamburg', 'Dusseldorf'];

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
