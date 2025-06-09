import { Card, Rating } from './types/types';

export const Setting = {
  RentalOffersCount: 312
};

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amstardam', 'Hamburg', 'Dusseldorf'];

export enum Page {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
  OfferMap = 'offer'
}

export const cards: Card[] = [
  {
    id: 1,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    city: {
      name: 'Amstardam'
    },
    isFavorite: true,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    city: {
      name: 'Amstardam'
    },
    isFavorite: false,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room'
  },
  {
    id: 3,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    city: {
      name: 'Hamburg'
    },
    isFavorite: false,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    city: {
      name: 'Paris'
    },
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 5,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    city: {
      name: 'Paris'
    },
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room'
  }
];

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
