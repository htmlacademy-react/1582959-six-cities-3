import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { Offer, OfferList, Reviews } from '../../types/types';
import { fetchOfferAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  offerNearPlaces: [],
  offerInformation: null,
  reviews: [],
  isLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadReviews(state, action: PayloadAction<Reviews>) {
      state.reviews = action.payload;
    },
    setOfferDetailedInformation(state, action: PayloadAction<Offer | null>) {
      state.offerInformation = action.payload;
    },
    setOfferNearPlaces(state, action: PayloadAction<OfferList>) {
      state.offerNearPlaces = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export const {
  loadReviews,
  setOfferDetailedInformation,
  setOfferNearPlaces,
} = offersData.actions;
