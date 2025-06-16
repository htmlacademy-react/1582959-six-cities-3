import CardItem from '../card/card-item';
import { Page, favoritesOffers } from '../../const';

function FavoritesList(): JSX.Element {
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
