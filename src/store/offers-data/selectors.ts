import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer, OfferList, Reviews } from '../../types/types';

export const getOffers = (state: Pick<State, NameSpace.Data>): OfferList => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Data>): OfferList => state[NameSpace.Data].favoriteOffers;
export const getOfferNearPlaces = (state: Pick<State, NameSpace.Data>): OfferList => state[NameSpace.Data].offerNearPlaces;
export const getOfferInformation = (state: Pick<State, NameSpace.Data>): Offer | null => state[NameSpace.Data].offerInformation;
export const getReviews = (state: Pick<State, NameSpace.Data>): Reviews => state[NameSpace.Data].reviews;
export const getLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].hasError;
export const getActiveCity = (state: Pick<State, NameSpace.Data>): string => state[NameSpace.Data].city;
export const getActiveSortOption = (state: Pick<State, NameSpace.Data>): string => state[NameSpace.Data].sort;
