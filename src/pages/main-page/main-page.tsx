import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity} from '../../store/action';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { City } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main/main-empty';
import { Navigate } from 'react-router-dom';

type MainPageProps = {
  cities: string[];
  city: City;
  authorizationStatus: AuthorizationStatus;
}

function MainPage({ cities, city, authorizationStatus }: MainPageProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  function onCityChange(newCity: string) {
    dispatch(changeCity(newCity));

  }

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header authorizationStatus={AuthorizationStatus.Auth} />

      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} activeCity={activeCity} onChangeCity={onCityChange} />
        </div>
        <div className="cities">
          {offers.length !== 0 ?
            <Main city={city} activeCity={activeCity} /> :
            <MainEmpty activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
