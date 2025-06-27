import CardItem from '../card/card-item';
import { Page } from '../../const';
import { useAppSelector } from '../../hooks';

type FavoritesList = {
  city?: string;
}

function FavoritesList({ city }: FavoritesList): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite && offer.city.name === city);

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
