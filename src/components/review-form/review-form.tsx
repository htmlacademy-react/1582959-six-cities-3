import { FormEvent, ChangeEvent, useRef, useState } from 'react';
import { stars } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { setComment, setRating } from '../../store/user-review/user-review-slice';
import { getComment, getRating } from '../../store/user-review/selectors';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const starsRefs = useRef<HTMLInputElement[]>([]);
  const rating = useAppSelector(getRating);
  const comment = useAppSelector(getComment);
  const isValid = () => rating > 0 && comment.length >= 50 && comment.length <= 300;
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(evt.target.value);
    dispatch(setRating(newRating));
  };

  const handleTextChange = () => {
    const newComment = commentInputRef.current!.value;
    dispatch(setComment(newComment));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isValid()) {
      return;
    }
    setLoading(true);
    dispatch(
      postReview({
        id: id || '',
        comment: commentInputRef.current!.value,
        rating: rating
      })
    );
    commentInputRef.current!.value = '';
    starsRefs.current?.forEach((star) => {
      if (star !== null) {
        star.checked = false;
      }
    });
    dispatch(setRating(0));
    dispatch(setComment(''));
    setLoading(false);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <div key={star.id} className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating"
              value={star.id} id={`${star.id}-star`}
              type="radio"
              onChange={handleRatingChange}
              ref={(el) => {
                if (starsRefs.current === null) {
                  starsRefs.current = [];
                }
                starsRefs.current.push(el!);
              }}
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
        onChange={handleTextChange}
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
          disabled={loading || !isValid()}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
