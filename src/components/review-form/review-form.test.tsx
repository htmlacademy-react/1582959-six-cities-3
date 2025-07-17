import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  const initialState = {
    REVIEW: {
      review: {
        id: faker.string.uuid(),
        comment: faker.lorem.paragraph(),
        rating: faker.number.int({ min: 1, max: 5 }),
      },
      isReviewFormLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    },
  };

  it('should render correctly', () => {
    const firstExpectedText = /To submit review please make sure to set/i;
    const secondExpectedText = /50 characters/i;

    const { withStoreComponent } = withStore(<ReviewForm />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getByText(firstExpectedText);
    screen.getByText(secondExpectedText);
    screen.getByRole('button');
  });

  it('should render correctly when user enter comment and rating', async () => {
    const commentTestId = 'reviews__textarea';
    const expectedCommentValue = initialState.REVIEW.review.comment;
    const expectedRatingValue = initialState.REVIEW.review.rating;

    const { withStoreComponent } = withStore(<ReviewForm />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(commentTestId),
      expectedCommentValue,
    );

    screen.getByDisplayValue(expectedCommentValue);
    screen.getByDisplayValue(expectedRatingValue);
  });

});
