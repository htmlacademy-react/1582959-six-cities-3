import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting, cities } from './const';
import { CITY } from './mocks/city';
import { POINTS } from './mocks/points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      cities={cities}
      city={CITY}
      points={POINTS}
    />
  </React.StrictMode>
);
