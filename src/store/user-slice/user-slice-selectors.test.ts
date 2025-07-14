import { getAuthorizationStatus, getAuthCheckedStatus, getUserData } from './selectors';
import { AuthorizationStatus, NameSpace } from '../../const';
import { faker } from '@faker-js/faker';

describe('UserSlice selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
        isPro: faker.datatype.boolean(),
        token: faker.internet.jwt(),
      }
    }
  };

  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return "true" because auth status is "Auth"', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const isAuth = authorizationStatus === AuthorizationStatus.Auth;
    const result = getAuthCheckedStatus(state);
    expect(result).toBe(isAuth);
  });

  it('should return "false" because auth status is "Unknown"', () => {
    const unknownState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: null
      }
    };

    const result = getAuthCheckedStatus(unknownState);
    expect(result).toBe(false);
  });

  it('should return correct user data', () => {
    const { userData } = state[NameSpace.User];
    const result = getUserData(state);
    expect(result).toStrictEqual(userData);
  });

  it('should return null if no user data exists', () => {
    const userDataNullState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      },
    };

    const result = getUserData(userDataNullState);
    expect(result).toBeNull();
  });
});
