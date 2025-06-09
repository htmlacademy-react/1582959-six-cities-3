import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offers, Reviews, City, Point, Points } from '../../types/types';

type Cities = string[];

type MainPageProps = {
  rentalOffersCount: number;
  cities: Cities;
  offers: Offers;
  reviews: Reviews;
  city: City;
  points: Points;
  selectedPoint?: Point | undefined;
}

function App({rentalOffersCount, cities, offers, reviews, city, points, selectedPoint}: MainPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount = {rentalOffersCount} cities={cities} city={city} points={points} />}
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
            element={<OfferPage offers={offers} reviews={reviews} city={city} points={points} selectedPoint={selectedPoint}/>}
          >
            <Route
              path={AppRoute.Offer}
              element={<OfferPage offers={offers} reviews={reviews} city={city} points={points} selectedPoint={selectedPoint}/>}
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
