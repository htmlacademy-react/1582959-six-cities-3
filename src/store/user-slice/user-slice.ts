import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/types';

export type UserType = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

const initialState: UserType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    email: '',
    password: '',
    avatarUrl: '',
    isPro: false,
    name: '',
    token: '',
  }
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        if (!action.payload.token) {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
          return;
        }
        state.userData = action.payload.data;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
