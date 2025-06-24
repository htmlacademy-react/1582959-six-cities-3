import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../../components/logo/logo';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function Header(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ?
                <Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoritesOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      to='/'
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </Fragment> :
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
