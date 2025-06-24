import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import FavoritesLocations from '../../components/favorites/favorites-locations';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import { useAppSelector } from '../../hooks';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffers.length !== 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesLocations />
              </ul>
            </section>
            : <FavoritesEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
