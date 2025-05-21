import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: MainPageProps): JSX.Element {
  return (
    <MainPage rentalOffersCount = {rentalOffersCount} />
  );
}

export default App;
