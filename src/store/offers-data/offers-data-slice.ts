import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT, NameSpace } from '../../const';
import { Offer, OfferList, Reviews } from '../../types/types';
import { fetchOfferAction } from '../api-actions';

type OffersData = {
  city: string;
  sort: string;
  offers: OfferList;
  favoriteOffers: OfferList;
  offerNearPlaces: OfferList;
  offerInformation: Offer | null;
  reviews: Reviews;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: OffersData = {
  city: DEFAULT_CITY,
  sort: DEFAULT_SORT,
  offers: [],
  favoriteOffers: [],
  offerNearPlaces: [],
  offerInformation: null,
  reviews: [],
  isLoading: false,
  hasError: false,
};

export const offersDataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    loadReviews(state, action: PayloadAction<Reviews>) {
      state.reviews = action.payload;
    },
    setOfferNearPlaces(state, action: PayloadAction<OfferList>) {
      state.offerNearPlaces = action.payload;
    },
    setOfferDetailedInformation(state, action: PayloadAction<Offer | null>) {
      state.offerInformation = action.payload;
    },
    setFavoriteOffers(state, action: PayloadAction<OfferList>) {
      state.favoriteOffers = action.payload;
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
  changeCity,
  changeSort,
  loadReviews,
  setOfferNearPlaces,
  setFavoriteOffers,
  setOfferDetailedInformation
} = offersDataSlice.actions;
