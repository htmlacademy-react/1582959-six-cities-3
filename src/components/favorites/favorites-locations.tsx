import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FavoritesList from './favorites-list';
import { AppRoute } from '../../const';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data-slice';

function FavoritesLocations(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  const dispatch = useAppDispatch();

  function handleCityClick(city: string) {
    dispatch(changeCity(city));
  }

  return (
    <ul className="favorites__list">
      {favoriteCities.map((city) => (
        <li className="favorites__locations-items" data-testid="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" data-testid="locations__item-link" to={AppRoute.Main} onClick={() => handleCityClick(city)}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavoritesList city={city} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesLocations;
