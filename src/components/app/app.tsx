import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { City, Point, Points } from '../../types/types';

type Cities = string[];

type AppProps = {
  rentalOffersCount: number;
  cities: Cities;
  city: City;
  points: Points;
  selectedPoint?: Point | undefined;
}

function App({ rentalOffersCount, cities, city, points, selectedPoint }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} cities={cities} city={city} points={points} />}
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
            element={<OfferPage city={city} selectedPoint={selectedPoint} authorizationStatus={AuthorizationStatus.Auth} />}
          >
            <Route
              path={AppRoute.Offer}
              element={<OfferPage city={city} selectedPoint={selectedPoint} authorizationStatus={AuthorizationStatus.Auth} />}
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
