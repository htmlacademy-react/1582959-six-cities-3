import { Rating, City } from './types/types';
import { reviews } from './mocks/reviews';
import { sortByDate } from './utils';


export const offerReviews = sortByDate(reviews).slice(0, 10);

export const Setting = {
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

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export const centers: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export const PIN_MARKER_DEFAULT = 'img/pin.svg';

export const PIN_MARKER_CURRENT = 'img/pin-active.svg';
