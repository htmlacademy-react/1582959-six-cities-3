import { Link } from 'react-router-dom';
import { CardLocation, OfferItem } from '../../types/types';
import { useAppSelector } from '../../hooks';
// import { toggleFavorite } from '../../store/action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type CardItemProps = {
  offer: OfferItem;
  onCardHover?: (id: string | null) => void;
  page: CardLocation;
};

function CardItem({ offer, onCardHover, page }: CardItemProps): JSX.Element {
  const { id, isPremium, previewImage, isFavorite, price, rating, title, type } = offer;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  // const dispatch = useAppDispatch();

  // const handleToggleFavorite = () => {
  //   dispatch(toggleFavorite(id));
  // };

  const addCardId = () => {
    onCardHover?.(id);
  };

  const removeCardID = () => {
    onCardHover?.(null);
  };

  return (
    <article className={`${page}__card place-card`}
      onMouseLeave={removeCardID}
      onMouseEnter={addCardId}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={`${page === 'favorites' ? '150' : '260'}`} height={`${page === 'favorites' ? '110' : '200'}`} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className={`${page === 'favorites' ? 'favorites__card-info ' : ''}place-card__price`}>
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
            </button> :
            <Link className="place-card__bookmark-button button" type="button" to={AppRoute.Login}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </Link>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title} </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardItem;
