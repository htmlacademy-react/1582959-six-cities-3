import { Link } from 'react-router-dom';
import { CardLocation } from '../../types/types';

type CardItemProps = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: string;
  onCardHover?: (id: string | number | null) => void;
  page: CardLocation;
};

function CardItem({id, isPremium, previewImage, price, isFavorite, rating, title, type, onCardHover, page}: CardItemProps): JSX.Element {
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
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
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
