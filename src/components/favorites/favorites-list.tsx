import CardItem from '../card/card-item';
import { Page } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-data/selectors';

type FavoritesList = {
  city?: string;
}

function FavoritesList({ city }: FavoritesList): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const sortedFavoriteOffers = favoriteOffers.filter((offer) => offer.city.name === city);

  return (
    <div className="favorites__places">
      {sortedFavoriteOffers.map((offer) => (
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
