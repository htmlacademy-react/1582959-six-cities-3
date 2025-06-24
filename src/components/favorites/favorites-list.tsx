import CardItem from '../card/card-item';
import { Page } from '../../const';
import { useAppSelector } from '../../hooks';

function FavoritesList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="favorites__places">
      {favoritesOffers.map((offer) => (
        <CardItem
          key={offer.id}
          offer={offer}
          page={Page.Favorites}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
