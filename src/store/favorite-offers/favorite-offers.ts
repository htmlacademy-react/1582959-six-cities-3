// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { FavoriteOffers } from '../../types/state';
// import { NameSpace } from '../../const';
// import { fetchFavoriteOffers, updateFavoriteStatus } from '../api-actions';
// import { OfferList } from '../../types/types';

// const initialState: FavoriteOffers = {
//   favoriteOffers: [],
// };

// export const favoriteOffers = createSlice({
//   name: NameSpace.Favorite,
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchFavoriteOffers.fulfilled, (state, action: PayloadAction<OfferList>) => {
//       state.favoriteOffers = action.payload;
//     });
//     builder.addCase(updateFavoriteStatus.fulfilled, (state, action) => {
//       const offerId = action.meta.arg.id;
//       const index = state.favoriteOffers.findIndex((offer) => offer.id === offerId);
//       if (index !== -1) {
//         state.favoriteOffers[index].isFavorite = !state.favoriteOffers[index].isFavorite;
//       }
//     });
//   }
// });
