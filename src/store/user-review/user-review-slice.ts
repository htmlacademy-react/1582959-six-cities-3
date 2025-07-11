import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentData } from '../../types/types';

type ReviewsState = {
  review: CommentData;
  isReviewFormLoading: boolean;
};

const initialState: ReviewsState = {
  review: {
    id: '',
    comment: '',
    rating: 0,
  },
  isReviewFormLoading: false,
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
    addReview(state, action: PayloadAction<CommentData>) {
      state.review = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isReviewFormLoading = action.payload;
    },
  },
});

export const { setRating, setComment, addReview, setLoading } = userReviewSlice.actions;
