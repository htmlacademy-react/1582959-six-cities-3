import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City, OfferItem } from '../../types/types';
import Map from '../../components/map/map';
import CardItem from '../../components/card/card-item';
import { sorts } from '../../const';
import Sort from '../sort/sort';
import { Page } from '../../const';
import { sortByLowToHighPrice, sortByHighToLowPrice, sortByRating } from './utils';
import { getActiveCity, getActiveSortOption, getOffers } from '../../store/offers-data/selectors';
import { changeSort } from '../../store/offers-data/offers-data-slice';

type MainProps = {
  city: City;
}

function Main({ city }: MainProps): JSX.Element {

  const activeCity = useAppSelector(getActiveCity);
  const activeSortOption = useAppSelector(getActiveSortOption);
  const offers = useAppSelector(getOffers);
  const selectedOffers = offers.filter((offer) => offer.city.name === activeCity);

  const dispatch = useAppDispatch();

  const [activeOffer, setActiveOffer] = useState<OfferItem | undefined>(undefined);

  switch (activeSortOption) {
    case 'Price: low to high':
      sortByLowToHighPrice(selectedOffers);
      break;
    case 'Price: high to low':
      sortByHighToLowPrice(selectedOffers);
      break;
    case 'Top rated first':
      sortByRating(selectedOffers);
      break;
    default:
      break;
  }

  function handleSortOptionChange(sort: string) {
    dispatch(changeSort(sort));
  }

  function handleCardHover(id: string | null) {
    const currentPoint = selectedOffers.find((point) => point.id === id);
    setActiveOffer(currentPoint);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{selectedOffers.length} places to stay in {activeCity}</b>
        <Sort sorts={sorts} onSortChange={handleSortOptionChange} activeSortOption={activeSortOption} />
        <div className="cities__places-list places__list tabs__content" data-testid="card-item" >
          {selectedOffers.map((offer) => (
            <CardItem
              key={offer.id}
              offer={offer}
              onCardHover={handleCardHover}
              page={Page.Main}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={city} page={Page.Main} selectedOffer={activeOffer} offers={selectedOffers} />
      </div>
    </div>
  );
}

export default Main;
