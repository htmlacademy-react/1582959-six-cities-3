import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import ReviewList from '../../components/review/review-list';
import { Page, AuthorizationStatus, centers, AppRoute } from '../../const';
import CardItem from '../../components/card/card-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchNearPlaces, fetchOfferDetailedInformation, toggleFavoriteStatus } from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import { OfferList } from '../../types/types';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOfferInformation, getOfferNearPlaces } from '../../store/offers-data/selectors';

function OfferPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offerData = useAppSelector(getOfferInformation);
  const offersNearby = useAppSelector(getOfferNearPlaces);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const cityMap = centers.find((city) => city.name === offerData?.city.name);
  const offerNearPlaces = offersNearby.slice(0, 3);
  const offersOnMap: OfferList = offerNearPlaces.concat(offerData ?? []);

  const handleToggleFavorite = () => {
    if (!offerData) {
      return;
    }
    dispatch(toggleFavoriteStatus({ id: offerData?.id, isFavorite: !offerData?.isFavorite }));
  };

  useEffect(() => {
    dispatch(fetchOfferDetailedInformation(id));
    dispatch(fetchNearPlaces(id));
  }, [dispatch, id]);

  if (!cityMap) {
    return <p>Город не найден</p>;
  }

  if (!offerData) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Специальные предложения</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerData?.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerData?.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerData?.title}
                </h1>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <button className={`offer__bookmark-button button ${offerData?.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                    type="button"
                    onClick={handleToggleFavorite}
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{offerData?.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                  </button> :
                  <Link className="offer__bookmark-button button" type="button" to={AppRoute.Login}>
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </Link>}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(offerData?.rating ?? 0) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerData?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerData?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerData?.bedrooms !== 1 ? `${offerData?.bedrooms} bedrooms` : `${offerData?.bedrooms} bedroom`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offerData?.maxAdults !== 1 ? `Max ${offerData?.maxAdults} adults` : `Max ${offerData?.maxAdults} adult`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerData?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerData?.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offerData?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offerData?.host.name}
                  </span>
                  {offerData?.host.isPro ?
                    <span className="offer__user-status">
                      Pro
                    </span> : ''}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerData?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList />
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <ReviewForm /> : ''}
              </section>
            </div>
          </div>
          <Map city={cityMap} page={Page.OfferMap} offers={offersOnMap} selectedOffer={offerData} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offerNearPlaces.map((offer) => (
                <CardItem
                  key={offer.id}
                  offer={offer}
                  page={Page.Offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
