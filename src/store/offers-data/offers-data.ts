import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { Offer, OfferList, Reviews } from '../../types/types';

const initialState: OffersData = {
  offers: [],
  offerNearPlaces: [],
  offerInformation: null,
  reviews: [],
  isLoading: false,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<OfferList>) {
      state.offers = action.payload;
    },
    loadReviews(state, action: PayloadAction<Reviews>) {
      state.reviews = action.payload;
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setOfferDetailedInformation(state, action: PayloadAction<Offer | null>) {
      state.offerInformation = action.payload;
    },
    setOfferNearPlaces(state, action: PayloadAction<OfferList>) {
      state.offerNearPlaces = action.payload;
    },
  },
});

export const {
  loadOffers,
  loadReviews,
  setOffersDataLoadingStatus,
  setOfferDetailedInformation,
  setOfferNearPlaces,
} = offersData.actions;
