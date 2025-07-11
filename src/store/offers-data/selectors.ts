import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer, OfferList, Reviews } from '../../types/types';

export const getOffers = (state: State): OfferList => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: State): OfferList => state[NameSpace.Data].favoriteOffers;
export const getOfferNearPlaces = (state: State): OfferList => state[NameSpace.Data].offerNearPlaces;
export const getOfferInformation = (state: State): Offer | null => state[NameSpace.Data].offerInformation;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getActiveCity = (state: State): string => state[NameSpace.Data].city;
export const getActiveSortOption = (state: State): string => state[NameSpace.Data].sort;
