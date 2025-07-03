import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewList } from '../../store/api-actions';

function ReviewList(): JSX.Element {

  const reviews = useAppSelector((state) => state.reviews);
  const offerReviews = reviews.slice(0, 10).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewList(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">
        {
          offerReviews.length === 0
            ? 'No Reviews'
            : `${offerReviews.length > 1 ? 'Reviews ' : 'Review '}`
        } &middot;
        <span className="reviews__amount"> {offerReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {offerReviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {review.user.name}
              </span>
              {review.user.isPro ? (
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
                  <span style={{ width: `${Math.round(review.rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={review.date}>{new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
