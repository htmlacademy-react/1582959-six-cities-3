import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { centers } from '../../const';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main/main-empty';
import { getActiveCity, getOffers } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data-slice';

type MainPageProps = {
  cities: string[];
}

function MainPage({ cities }: MainPageProps): JSX.Element {

  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const selectedOffers = offers.filter((offer) => offer.city.name === activeCity);

  const dispatch = useAppDispatch();
  const cityMap = centers.find((city) => city.name === activeCity);

  if (!cityMap) {
    throw new Error(`Город ${activeCity} не найден`);
  }

  function onCityChange(newCity: string) {
    dispatch(changeCity(newCity));
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${selectedOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} activeCity={activeCity} onChangeCity={onCityChange} />
        </div>
        <div className="cities">
          {selectedOffers.length !== 0 ?
            <Main city={cityMap} /> :
            <MainEmpty activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
