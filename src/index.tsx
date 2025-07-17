import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { cities } from './const';
import { store } from './store';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App
          cities={cities}
        />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
