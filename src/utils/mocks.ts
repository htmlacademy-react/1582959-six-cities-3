import { faker } from '@faker-js/faker';
import { Offer, OfferItem, Review } from '../types/types';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { AuthorizationStatus, sorts } from '../const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const Location = {
  latitude: 0,
  longitude: 0,
  zoom: 10
};

const City = {
  location: Location,
  name: 'City',
};

const User = {
  isPro: faker.datatype.boolean(),
  name: faker.person.firstName(),
  avatarUrl: faker.image.avatar(),
};

export const MockOffer: OfferItem = {
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  type: faker.lorem.word(),
  price: faker.number.int(),
  rating: faker.number.int({ min: 1, max: 5 }),
  city: City,
  location: Location,
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  previewImage: faker.image.url(),
};

export const MockOfferInformation: Offer = {
  ...MockOffer,
  description: faker.lorem.paragraph(),
  bedrooms: 1,
  goods: [faker.lorem.words()],
  host: User,
  images: [faker.image.url()],
  maxAdults: 1,
};

export const MockReview: Review = {
  id: faker.string.uuid(),
  comment: faker.lorem.paragraph(),
  rating: faker.number.int({ min: 1, max: 5 }),
  date: faker.date.month(),
  user: User,
};

export const makeFakeStore = (initialState?: Partial<State>): State => ({

  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
      token: faker.internet.jwt(),
    }
  },
  DATA: {
    city: faker.location.city(),
    sort: sorts[0],
    offers: [MockOffer],
    favoriteOffers: [MockOffer],
    offerNearPlaces: [MockOffer],
    offerInformation: MockOfferInformation,
    reviews: [MockReview],
    isLoading: faker.datatype.boolean(),
    isOfferInformationLoading: faker.datatype.boolean(),
    isOffersNearbyLoading: faker.datatype.boolean(),
    isReviewsLoading: faker.datatype.boolean(),
    isFavoriteOffersLoading: faker.datatype.boolean(),
    hasError: faker.datatype.boolean(),
  },
  REVIEW: {
    review: {
      id: faker.string.uuid(),
      comment: faker.lorem.paragraph(),
      rating: faker.number.int({ min: 1, max: 5 }),
    },
    isReviewFormLoading: faker.datatype.boolean(),
    hasError: faker.datatype.boolean(),
  },
  ...initialState ?? {},
});
