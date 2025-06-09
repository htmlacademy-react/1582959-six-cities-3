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
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
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
    id: 'b242bade-6e83-40f9-93b7-08efcadbd678',
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
    id: 'd52bf1af-2edd-47dc-89f0-38068abbb57c',
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
    id: 'b4891f8a-0083-4d28-945a-5a398f16f7c0',
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
    id: 'g4891f8a-7521-4d28-852a-5a412f16f7c0',
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
