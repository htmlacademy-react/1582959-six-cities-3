import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { City, Points } from '../../types/types';
import { POINTS } from '../../mocks/points';
import { AuthorizationStatus } from '../../const';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main/main-empty';

type MainPageProps = {
  cities: string[];
  rentalOffersCount: number;
  city: City;
  points: Points;
}

function MainPage({ cities, rentalOffersCount, city, points }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header authorizationStatus={AuthorizationStatus.Auth} />

      <main className={`page__main page__main--index ${POINTS.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} isActive={false} />
        </div>
        <div className="cities">
          {POINTS.length !== 0 ?
            <Main rentalOffersCount={rentalOffersCount} city={city} points={points} /> :
            <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
