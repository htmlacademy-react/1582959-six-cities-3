import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentData } from '../../types/types';
import { postReview } from '../api-actions';

type ReviewsState = {
  review: CommentData;
  isReviewFormLoading: boolean;
  hasError: boolean;
};

const initialState: ReviewsState = {
  review: {
    id: '',
    rating: 0,
    comment: '',
  },
  isReviewFormLoading: false,
  hasError: false,
};

export const userReviewSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    setRating(state, action: PayloadAction<number>) {
      state.review.rating = action.payload;
    },
    setComment(state, action: PayloadAction<string>) {
      state.review.comment = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postReview.pending, (state) => {
        state.isReviewFormLoading = true;
        state.hasError = false;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.review = action.payload;
        state.isReviewFormLoading = false;
      })
      .addCase(postReview.rejected, (state) => {
        state.isReviewFormLoading = false;
        state.hasError = true;
      });
  }
});

export const { setRating, setComment } = userReviewSlice.actions;
