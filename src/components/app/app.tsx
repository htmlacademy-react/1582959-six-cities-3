import MainPage from '../../pages/main-page/main-page';

type Cities = string[];

type MainPageProps = {
  rentalOffersCount: number;
  cities: Cities;
  isActive: boolean;
}

function App({rentalOffersCount, cities, isActive}: MainPageProps): JSX.Element {
  return (
    <MainPage rentalOffersCount = {rentalOffersCount}
      cities={cities}
      isActive = {isActive}
    />
  );
}

export default App;
