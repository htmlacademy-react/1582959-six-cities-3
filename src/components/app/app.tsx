import MainPage from '../../pages/main-page/main-page';

type Cities = string[];

type MainPageProps = {
  rentalOffersCount: number;
  cities: Cities;
}

function App({rentalOffersCount, cities}: MainPageProps): JSX.Element {
  return (
    <MainPage rentalOffersCount = {rentalOffersCount}
      cities={cities}
    />
  );
}

export default App;
