import { useState } from 'react';
import { City, Points, Point } from '../../types/types';
import Map from '../../components/map/map';
import CardItem from '../../components/card/card-item';
import { Page } from '../../const';
import { POINTS } from '../../mocks/points';

type MainProps = {
  rentalOffersCount: number;
  city: City;
  points: Points;
}

function Main({ rentalOffersCount, city, points }: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Point | undefined>(undefined);

  function onCardHover(id: string | null) {
    const currentPoint = points.find((point) => point.id === id);
    setActiveOffer(currentPoint);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <div className="cities__places-list places__list tabs__content">
          {POINTS.map((point) => (
            <CardItem
              key={point.id}
              point={point}
              onCardHover={onCardHover}
              page={Page.Main}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={city} points={points} page={Page.Main} selectedPoint={activeOffer} />
      </div>
    </div>
  );
}

export default Main;
