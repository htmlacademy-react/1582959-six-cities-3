import CardItem from '../card/card-item';
import { Page } from '../../const';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';

type FavoritesList = {
  city?: string;
}

function FavoritesList({ city }: FavoritesList): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite && offer.city.name === city);

  return (
    <div className="favorites__places">
      {favoriteOffers.map((offer) => (
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
