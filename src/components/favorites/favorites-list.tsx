import CardItem from '../card/card-item';
import { cards, Page } from '../../const';

function FavoritesList(): JSX.Element {
  const favoritesOffers = cards.filter((card) => card.isFavorite);
  return (
    <div className="favorites__places">
      {favoritesOffers.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          page={Page.Favorites}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
