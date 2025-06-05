import CardItem from '../card/card-item';
import { cards, Page } from '../../const';

function FavoritesList(): JSX.Element {
  const favoritesOffers = cards.filter((card) => card.isFavorite);
  return (
    <div className="favorites__places">
      {favoritesOffers.map((card) => (
        <CardItem
          key={card.id}
          id={card.id}
          isPremium={card.isPremium}
          previewImage={card.previewImage}
          price={card.price}
          isFavorite={card.isFavorite}
          rating={card.rating}
          title={card.title}
          type={card.type}
          page={Page.Favorites}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
