import { Review } from '../../types/types';

type ReviewProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewProps): JSX.Element {
  const { date, user, comment, rating } = review;
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
        {user.isPro ? (
          <span className="offer__user-status">
            Pro
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
