import CardItem from './card-item';
import { useState } from 'react';
import { CardLocation } from '../../types/types';
import { cards } from '../../const';

type CardListProps = {
  page: CardLocation;
}

function CardList({page}: CardListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | number | null>(null);

  function onCardHover(id: string | number | null) {
    setActiveOffer(id);
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
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
          onCardHover={onCardHover}
          page={page}
        />
      ))}
    </div>
  );
}

export default CardList;
