import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { changeSlise } from './change-slice/change-slice';
import { offersData } from './offers-data/offers-data';
import { userReview } from './user-review/user-review';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Change]: changeSlise.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Review]: userReview.reducer,
});
