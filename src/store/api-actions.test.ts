import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, MockOffer, MockOfferInformation, MockReviews, extractActionsTypes } from '../utils/mocks';
import { State } from '../types/state';
import { checkAuthAction, fetchFavoriteOffers, fetchNearPlaces, fetchOfferAction, fetchOfferDetailedInformation, fetchReviewList, loginAction, logoutAction, postReview, toggleFavoriteStatus } from './api-actions';
import { APIRoute } from '../const';
import * as tokenStorage from '../services/token';
import { AuthData } from '../types/types';
import { faker } from '@faker-js/faker';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [] } });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      localStorage.setItem('token', 'fake_token');
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "loginAction.fulfilled" when server response 200', async () => {
      const fakeUser: AuthData = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      const fakeServerReplay = { token: faker.internet.jwt() };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      const fakeServerReplay = { token: faker.internet.jwt() };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled", when server response 200', async () => {
      const fakeOffers = [MockOffer];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, fakeOffers);

      await store.dispatch(fetchOfferAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload)
        .toEqual(fakeOffers);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOfferAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferDetailedInformation', () => {
    it('should dispatch "fetchOfferDetailedInformation.pending", "fetchOfferDetailedInformation.fulfilled", when server response 200', async () => {
      const fakeOffersInformation = MockOfferInformation;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/1`).reply(200, fakeOffersInformation);

      await store.dispatch(fetchOfferDetailedInformation('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferDetailedInformationFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferDetailedInformation.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferDetailedInformation.pending.type,
        fetchOfferDetailedInformation.fulfilled.type,
      ]);

      expect(fetchOfferDetailedInformationFulfilled.payload)
        .toEqual(fakeOffersInformation);
    });

    it('should dispatch "fetchOfferDetailedInformation.pending", "fetchOfferDetailedInformation.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOfferDetailedInformation());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferDetailedInformation.pending.type,
        fetchOfferDetailedInformation.rejected.type,
      ]);
    });
  });

  describe('fetchNearPlaces', () => {
    it('should dispatch "fetchNearPlaces.pending", "fetchNearPlaces.fulfilled", when server response 200', async () => {
      const fakeOffersNearby = [MockOffer];
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/1/nearby`).reply(200, fakeOffersNearby);

      await store.dispatch(fetchNearPlaces('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearPlacesFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearPlaces.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearPlaces.pending.type,
        fetchNearPlaces.fulfilled.type,
      ]);

      expect(fetchNearPlacesFulfilled.payload)
        .toEqual(fakeOffersNearby);
    });

    it('should dispatch "fetchNearPlaces.pending", "fetchNearPlaces.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchNearPlaces());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearPlaces.pending.type,
        fetchNearPlaces.rejected.type,
      ]);
    });
  });

  describe('fetchReviewList', () => {
    it('should dispatch "fetchReviewList.pending", "fetchReviewList.fulfilled", when server response 200', async () => {
      const fakeReviews = [MockReviews];
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/1`).reply(200, fakeReviews);

      await store.dispatch(fetchReviewList('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewListFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewList.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewList.pending.type,
        fetchReviewList.fulfilled.type,
      ]);

      expect(fetchReviewListFulfilled.payload)
        .toEqual(fakeReviews);
    });

    it('should dispatch "fetchReviewList.pending", "fetchReviewList.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchReviewList());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewList.pending.type,
        fetchReviewList.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should dispatch "fetchFavoriteOffers.pending", "fetchFavoriteOffers.fulfilled", when server response 200', async () => {
      const fakeFavoriteOffers = [MockOffer];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, fakeFavoriteOffers);

      await store.dispatch(fetchFavoriteOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteOffersFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersFulfilled.payload)
        .toEqual(fakeFavoriteOffers);
    });

    it('should dispatch "fetchFavoriteOffers.pending", "fetchFavoriteOffers.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteOffers());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.rejected.type,
      ]);
    });
  });

  describe('postReview', () => {
    it('should dispatch "postReview.pending", "postReview.fulfilled", when server response 200', async () => {
      const newReview = {
        id: faker.string.uuid(),
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.paragraph(),
      };
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${newReview.id}`, { rating: newReview.rating, comment: newReview.comment }).reply(200, newReview);

      await store.dispatch(postReview({
        id: newReview.id,
        rating: newReview.rating,
        comment: newReview.comment
      }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postReviewFulfilled = emittedActions.at(2) as ReturnType<typeof postReview.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postReview.pending.type,
        fetchReviewList.pending.type,
        postReview.fulfilled.type,
      ]);

      expect(postReviewFulfilled.payload)
        .toEqual(newReview);
    });

    it('should dispatch "fetchReviewList.pending", "fetchReviewList.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchReviewList());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewList.pending.type,
        fetchReviewList.rejected.type,
      ]);
    });
  });

  describe('toggleFavoriteStatus', () => {
    it('should dispatch "toggleFavoriteStatus.pending", "toggleFavoriteStatus.fulfilled", when server response 200', async () => {
      const fakeModel = {
        id: faker.string.uuid(),
        isFavorite: faker.datatype.boolean(),
      };

      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${fakeModel.id}/${Number(fakeModel.isFavorite)}`).reply(200, fakeModel);

      await store.dispatch(toggleFavoriteStatus(fakeModel));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const toggleFavoriteStatusFulfilled = emittedActions.at(2) as ReturnType<typeof toggleFavoriteStatus.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        toggleFavoriteStatus.pending.type,
        fetchOfferAction.pending.type,
        toggleFavoriteStatus.fulfilled.type,
      ]);

      expect(toggleFavoriteStatusFulfilled.payload).toEqual(fakeModel);
    });

    it('should dispatch "toggleFavoriteStatus.pending", "toggleFavoriteStatus.rejected" when server response 400', async () => {
      const fakeModel = {
        id: faker.string.uuid(),
        isFavorite: faker.datatype.boolean(),
      };
      mockAxiosAdapter.onPost(APIRoute.Offers).reply(400, []);

      await store.dispatch(toggleFavoriteStatus(fakeModel));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteStatus.pending.type,
        fetchOfferAction.pending.type,
        toggleFavoriteStatus.rejected.type,
      ]);
    });
  });

});
