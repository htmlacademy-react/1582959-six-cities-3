import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT, NameSpace } from '../../const';
import { Offer, OfferList, Reviews } from '../../types/types';
import { fetchFavoriteOffers, fetchNearPlaces, fetchOfferAction, fetchOfferDetailedInformation, fetchReviewList } from '../api-actions';

type OffersData = {
  city: string;
  sort: string;
  offers: OfferList;
  favoriteOffers: OfferList;
  offerNearPlaces: OfferList;
  offerInformation: Offer | null;
  reviews: Reviews;
  isLoading: boolean;
  isOfferInformationLoading: boolean;
  isOffersNearbyLoading: boolean;
  isReviewsLoading: boolean;
  isFavoriteOffersLoading: boolean;
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
  isOfferInformationLoading: false,
  isOffersNearbyLoading: false,
  isReviewsLoading: false,
  isFavoriteOffersLoading: false,
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

    builder
      .addCase(fetchOfferDetailedInformation.pending, (state) => {
        state.isOfferInformationLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferDetailedInformation.fulfilled, (state, action) => {
        state.offerInformation = action.payload;
        state.isOfferInformationLoading = false;
      })
      .addCase(fetchOfferDetailedInformation.rejected, (state) => {
        state.isOfferInformationLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.isOffersNearbyLoading = true;
        state.hasError = false;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.offerNearPlaces = action.payload;
        state.isOffersNearbyLoading = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.isOffersNearbyLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(fetchReviewList.pending, (state) => {
        state.isReviewsLoading = true;
        state.hasError = false;
      })
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewList.rejected, (state) => {
        state.isReviewsLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
        state.hasError = true;
      });
  }
});

export const { changeCity, changeSort } = offersDataSlice.actions;
