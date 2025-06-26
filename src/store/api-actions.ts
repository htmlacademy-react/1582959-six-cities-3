import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { OfferList, AuthData, UserData } from '../types/types.js';
import { loadOffers, requireAuthorization, setOffersDataLoadingStatus, setUserData } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferList>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

// export const fetchReviewList = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'offers/fetchReviewList',
//   async (id, { dispatch, extra: api }) => {
//     const {data} = await api.get<Reviews>(`/six-cities/comments/${id}`);
//     console.log(data);
//     dispatch(loadReviews(data));
//   },
// );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });

    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
