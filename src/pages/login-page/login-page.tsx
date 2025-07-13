import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus, cities } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useRef, FormEvent, useState, useEffect } from 'react';
import { loginAction } from '../../store/api-actions';
import { changeCity } from '../../store/offers-data/offers-data-slice';
import { getAuthorizationStatus } from '../../store/user-slice/selectors';
import { redirectToRoute } from '../../store/action';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [dispatch, authorizationStatus]);

  function handleCityClick(city: string) {
    dispatch(changeCity(city));
  }

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }))
        .then(() => {
          navigate(AppRoute.Main);
        });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,}$"
                  title="Пароль должен содержать хотя бы одну букву и цифру."
                  required
                />
              </div>
              <button className="login__submit form__submit button"
                type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => handleCityClick(randomCity)}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
