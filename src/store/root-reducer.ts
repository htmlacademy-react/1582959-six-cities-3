import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userSlice } from './user-process/user-slice';
import { offersDataSlice } from './offers-data/offers-data-slice';
import { userReviewSlice } from './user-review/user-review-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Data]: offersDataSlice.reducer,
  [NameSpace.Review]: userReviewSlice.reducer,
});
