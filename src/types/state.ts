import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { CommentData, Offer, OfferList, Reviews, UserData } from './types.js';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
};

export type OffersData = {
    offers: OfferList;
    offerNearPlaces: OfferList;
    offerInformation: Offer | null;
    reviews: Reviews;
    isLoading: boolean;
};

export type ReviewsState = {
    review: CommentData;
};

export type ChangeState = {
    city: string;
    sort: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
