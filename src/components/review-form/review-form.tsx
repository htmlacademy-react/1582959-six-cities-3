import { FormEvent, ChangeEvent, useRef } from 'react';
import { stars } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { setComment, setRating } from '../../store/action';
import { useParams } from 'react-router-dom';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const rating = useAppSelector((state) => state.review.rating);
  const comment = useAppSelector((state) => state.review.comment);
  const isValid = () => rating > 0 && comment.length >= 50 && comment.length <= 300;
  const { id } = useParams();

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(evt.target.value);
    dispatch(setRating(newRating));
  };

  const onTextChange = () => {
    const newComment = commentInputRef.current!.value;
    dispatch(setComment(newComment));
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isValid()) {
      return;
    }
    dispatch(postReview({
      id: id ?? '',
      comment: commentInputRef.current!.value,
      rating: rating,
    }));
    commentInputRef.current!.value = '';
    const starsRating = document.querySelectorAll('.form__rating-input');
    starsRating.forEach((star) => {
      const element = star as HTMLInputElement;
      element.checked = false;
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <div key={star.id} className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating"
              value={star.id} id={`${star.id}-star`}
              type="radio"
              onChange={onRatingChange}
            />
            <label htmlFor={`${star.id}-star`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
        ref={commentInputRef}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={!isValid()}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
