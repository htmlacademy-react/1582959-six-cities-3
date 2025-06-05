import {useState, FormEvent, ChangeEvent} from 'react';
import { stars } from '../../const';

function ReviewForm(): JSX.Element {
  const [userReview, setUserReview] = useState({ rating: 0, text: '' });

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => setUserReview({...userReview, rating: Number(evt.target.value)});
  const onTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setUserReview({...userReview, text: evt.target.value});
  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <div key={star.id} className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value={star.id} id={`${star.id}-star`} type="radio" onChange={onRatingChange}/>
            <label htmlFor={`${star.id}-star`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onTextChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
