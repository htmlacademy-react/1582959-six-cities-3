import { addReview, setComment, setLoading, setRating, userReviewSlice } from './user-review-slice';
import { faker } from '@faker-js/faker';

describe('UserReview Slice', () => {
  const initialState = {
    review: {
      id: '',
      comment: '',
      rating: 0,
    },
    isReviewFormLoading: false,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      review: {
        id: faker.string.uuid(),
        comment: faker.lorem.paragraph(),
        rating: faker.number.int({ min: 1, max: 5 }),
      },
      isReviewFormLoading: faker.datatype.boolean(),
    };

    const result = userReviewSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const result = userReviewSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set rating with "setRating" action', () => {
    const expectedRating = faker.number.int({ min: 1, max: 5 });

    const result = userReviewSlice.reducer(initialState, setRating(expectedRating));
    expect(result.review.rating).toBe(expectedRating);
  });

  it('should set comment with "setComment" action', () => {
    const expectedComment = faker.lorem.paragraph();

    const result = userReviewSlice.reducer(initialState, setComment(expectedComment));
    expect(result.review.comment).toBe(expectedComment);
  });

  it('should add review with "addReview" action', () => {
    const newReview = {
      id: faker.string.uuid(),
      comment: faker.lorem.paragraph(),
      rating: faker.number.int({ min: 1, max: 5 }),
    };

    const result = userReviewSlice.reducer(initialState, addReview(newReview));
    expect(result.review.id).toBe(newReview.id);
    expect(result.review.comment).toBe(newReview.comment);
    expect(result.review.rating).toBe(newReview.rating);
  });

  it('should set "isReviewFormLoading" to "true" with "setLoading" action', () => {
    const loadingStatus = true;

    const result = userReviewSlice.reducer(initialState, setLoading(loadingStatus));
    expect(result.isReviewFormLoading).toBe(loadingStatus);
  });

});
