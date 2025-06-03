import CardItem from './card-item';
import { cards } from '../../const';

function CardList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <CardItem
          key={card.id}
          isPremium={card.isPremium}
          previewImage={card.previewImage}
          price={card.price}
          isFavorite={card.isFavorite}
          rating={card.rating}
          title={card.title}
          type={card.type}
        />
      ))}
    </div>
  );
}

export default CardList;
