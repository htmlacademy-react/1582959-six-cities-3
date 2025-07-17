import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ErrorScreen from '../../pages/error-screen/error-screen';
import Spinner from '../spinner/spinner';
import PrivateRoute from '../private-route/private-route';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-slice/selectors';
import { getLoadingStatus, getErrorStatus } from '../../store/offers-data/selectors';

type Cities = string[];

type AppProps = {
  cities: Cities;
}

function App({ cities }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isLoading = useAppSelector(getLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isLoading) {
    return (
      <Spinner />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path='offer'
          element={<OfferPage />}
        >
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
