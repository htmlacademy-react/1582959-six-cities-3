import { getComment, getRating, getReviewFormLoadingStatus } from './selectors';
import { NameSpace } from '../../const';
import { faker } from '@faker-js/faker';

describe('UserReview selectors', () => {
  const state = {
    [NameSpace.Review]: {
      review: {
        id: faker.string.uuid(),
        comment: faker.lorem.paragraph(),
        rating: faker.number.int({ min: 1, max: 5 }),
      },
      isReviewFormLoading: faker.datatype.boolean(),
    }
  };

  it('should return rating from state', () => {
    const { review } = state[NameSpace.Review];
    const result = getRating(state);
    expect(result).toBe(review.rating);
  });

  it('should return comment from state', () => {
    const { review } = state[NameSpace.Review];
    const result = getComment(state);
    expect(result).toBe(review.comment);
  });

  it('should return loading status from state', () => {
    const { isReviewFormLoading } = state[NameSpace.Review];
    const result = getReviewFormLoadingStatus(state);
    expect(result).toBe(isReviewFormLoading);
  });
});
