import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { OfferList, AuthData, UserData, Offer, Reviews, CommentData } from '../types/types.js';
import { redirectToRoute, setFavoriteOffers } from './action';
import { saveToken, dropToken, getToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { loadReviews, setOfferDetailedInformation, setOfferNearPlaces } from './offers-data/offers-data.js';
import { addReview, setComment, setRating } from './user-review/user-review.js';

export const fetchOfferAction = createAsyncThunk<OfferList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferList>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferDetailedInformation = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersInformation',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(setOfferDetailedInformation(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    }
  },
);

export const fetchNearPlaces = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferList>(`${APIRoute.Offers}/${id}/nearby`);

    dispatch(setOfferNearPlaces(data));
  },
);

export const fetchReviewList = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('Отсутствует токен авторизации');
      }
      const { data } = await api.get<UserData>(APIRoute.Login);
      return data;
    } catch (error) {
      dropToken();
      throw error;
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      return data;
    } catch (error) {
      dropToken();
      throw error;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
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
        await api.post(`${APIRoute.Comments}/${id}`, { rating, comment });
        dispatch(addReview({ id, rating, comment }));
        dispatch(fetchReviewList(id));
      } finally {
        dispatch(setRating(0));
        dispatch(setComment(''));
      }
    },
  );

// export const addToFavorite = createAsyncThunk<void, FavoriteData, {
//   dispatch: AppDispatch;
//   extra: AxiosInstance;
// }>(
//   'offers/addToFavorite',
//   async (model, { dispatch, extra: api }) => {
//     const { data } = await api.post<OfferList>(`${APIRoute.Favorite}/${model.id}/${model.isFavorite}`);
//     console.log(data);
//     dispatch(addToFavorite(data));

//     dispatch(fetchFavoriteOffers());
//   },
// );

export const fetchFavoriteOffers = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferList>(APIRoute.Favorite);
    // console.log(data);
    dispatch(setFavoriteOffers(data));
  },
);
