import { createReducer } from '@reduxjs/toolkit';
import { setFavoriteOffers } from './action';
import { OfferList} from '../types/types';

type InitalState = {
  favoriteOffers: OfferList;
}

const initialState: InitalState = {
  favoriteOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
  // .addCase(toggleFavorite, (state, action) => {
  //   const offerId = action.payload;
  //   const updatedOfferIndex = state.offers.findIndex((offer) => offer.id === offerId);

    //   if (updatedOfferIndex !== -1) {
    //     state.offers[updatedOfferIndex].isFavorite = !state.offers[updatedOfferIndex].isFavorite;
    //   }
    // })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
