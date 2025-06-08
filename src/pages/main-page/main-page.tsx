import {Helmet} from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import CardList from '../../components/card/card-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import { Page } from '../../const';
import {City, Points, Point} from '../../types/types';

type MainPageProps = {
  rentalOffersCount: number;
  cities: string[];
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
}

function MainPage({rentalOffersCount, cities, city, points, selectedPoint}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities}/>
        </div>
        <div className="cities">
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
              <CardList page={Page.Main} />
            </section>
            <div className="cities__right-section">
              <Map city={city} points={points} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
