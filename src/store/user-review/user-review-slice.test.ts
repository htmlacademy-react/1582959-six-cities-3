import { postReview } from '../api-actions';
import { setComment, setRating, userReviewSlice } from './user-review-slice';
import { faker } from '@faker-js/faker';

describe('UserReview Slice', () => {
  const initialState = {
    review: {
      id: '',
      comment: '',
      rating: 0,
    },
    isReviewFormLoading: false,
    hasError: false,
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
      hasError: faker.datatype.boolean(),
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

  describe('postReview extraReducer', () => {
    it('should add review, "isReviewFormLoading" to "false" with "postReview.fulfilled"', () => {

      const newReview = {
        id: faker.string.uuid(),
        comment: faker.lorem.paragraph(),
        rating: faker.number.int({ min: 1, max: 5 }),
      };
      const result = userReviewSlice.reducer(undefined, postReview.fulfilled(newReview, '', initialState.review));
      expect(result.review).toEqual(newReview);
      expect(result.isReviewFormLoading).toBe(false);
    });

    it('should set "isReviewFormLoading" to "true", "hasError" to "false" with "postReview.pending"', () => {

      const result = userReviewSlice.reducer(undefined, postReview.pending('', initialState.review));
      expect(result.isReviewFormLoading).toBe(true);
      expect(result.hasError).toBe(false);
    });

    it('should set "isReviewFormLoading" to "false", "hasError" to "true" with "postReview.rejected"', () => {

      const result = userReviewSlice.reducer(undefined, postReview.rejected);
      expect(result.isReviewFormLoading).toBe(false);
      expect(result.hasError).toBe(true);
    });
  });

});
