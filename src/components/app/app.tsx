import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Spinner from '../spinner/spinner';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/types';

type Cities = string[];

type AppProps = {
  cities: Cities;
  selectedOffer?: Offer | undefined;
}

function App({ cities,selectedOffer }: AppProps): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  // authorizationStatus === AuthorizationStatus.Unknown ||
  if (isOffersLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage cities={cities} authorizationStatus={AuthorizationStatus.Auth}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path='offer'
            element={<OfferPage selectedOffer={selectedOffer} authorizationStatus={AuthorizationStatus.Auth} />}
          >
            <Route
              path={AppRoute.Offer}
              element={<OfferPage selectedOffer={selectedOffer} authorizationStatus={AuthorizationStatus.Auth} />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
