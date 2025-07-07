import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewsState } from '../../types/state';
import { NameSpace } from '../../const';
import { CommentData } from '../../types/types';

const initialState: ReviewsState = {
  review: {
    id: '',
    comment: '',
    rating: 0,
  },
};

export const userReview = createSlice({
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
  },
});

export const { setRating, setComment, addReview } = userReview.actions;
