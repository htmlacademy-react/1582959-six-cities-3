import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { OfferList, AuthData, UserData, Offer, Reviews, CommentData, FavoriteData } from '../types/types.js';
import { saveToken, dropToken, getToken } from '../services/token';
import { APIRoute } from '../const';
import { addReview, setLoading } from './user-review/user-review-slice.js';
import { toast } from 'react-toastify';

export const fetchOfferAction = createAsyncThunk<OfferList, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferList>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferDetailedInformation = createAsyncThunk<Offer, string | undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersInformation',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<OfferList, string | undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferList>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchReviewList = createAsyncThunk<Reviews, string | undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<{ token: string; data: UserData }, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const token = getToken();
    const { data } = await api.get<UserData>(APIRoute.Login);
    return { token, data };
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const postReview = createAsyncThunk<void,
  CommentData,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }>(
    'data/postReview',
    async ({ id, rating, comment }, { dispatch, extra: api }) => {
      try {
        dispatch(setLoading(true));
        await api.post(`${APIRoute.Comments}/${id}`, { rating, comment });
        dispatch(addReview({ id, rating, comment }));
        dispatch(fetchReviewList(id));
      } catch (err) {
        toast.warn('Ошибка при отправке отзыва');
      } finally {
        dispatch(setLoading(false));
      }
    },
  );

export const toggleFavoriteStatus = createAsyncThunk<OfferList, FavoriteData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offers/toggleFavoriteStatus',
  async (model, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<OfferList>(`${APIRoute.Favorite}/${model.id}/${Number(model.isFavorite)}`);
      return data;
    } finally {
      dispatch(fetchOfferAction());
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk<OfferList, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferList>(APIRoute.Favorite);
    return data;
  },
);
