import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';
import { userSlice } from './user-slice';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthData } from '../../types/types';

describe('User Slice', () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  };

  const stateAuth = {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
      token: faker.internet.jwt(),
    }
  };

  const stateNoAuth = {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = userSlice.reducer(stateAuth, emptyAction);
    expect(result).toEqual(stateAuth);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };
    const result = userSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const authActionFulFilled = checkAuthAction.fulfilled(stateAuth.userData, '', undefined);
    const result = userSlice.reducer(initialState, authActionFulFilled);
    expect(result).toMatchObject(stateAuth);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {

    const result = userSlice.reducer(stateAuth, checkAuthAction.rejected);

    expect(result).toEqual(stateNoAuth);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const fakeAuthData: AuthData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const loginActionFulFilled = loginAction.fulfilled(stateAuth.userData, '', fakeAuthData);
    const result = userSlice.reducer(initialState, loginActionFulFilled);
    expect(result).toMatchObject(stateAuth);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {

    const result = userSlice.reducer(stateAuth, loginAction.rejected);

    expect(result).toEqual(stateNoAuth);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {

    const result = userSlice.reducer(stateAuth, logoutAction.fulfilled);

    expect(result).toEqual(stateNoAuth);
  });

});
