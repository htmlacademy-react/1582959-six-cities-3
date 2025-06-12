import CardItem from '../card/card-item';
import { Page, favoritesOffers } from '../../const';

function FavoritesList(): JSX.Element {
  return (
    <div className="favorites__places">
      {favoritesOffers.map((point) => (
        <CardItem
          key={point.id}
          point={point}
          page={Page.Favorites}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
