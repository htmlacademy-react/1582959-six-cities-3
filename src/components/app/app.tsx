import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offers, Reviews } from '../../types/types';

type Cities = string[];

type MainPageProps = {
  rentalOffersCount: number;
  cities: Cities;
  offers: Offers[];
  reviews: Reviews[];
}

function App({rentalOffersCount, cities, offers, reviews}: MainPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount = {rentalOffersCount} cities={cities}/>}
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
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path='offer'
            element={<OfferPage offers={offers[0]} reviews={reviews} />}
          >
            <Route
              path={AppRoute.Offer}
              element={<OfferPage offers={offers[0]} reviews={reviews} />}
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
