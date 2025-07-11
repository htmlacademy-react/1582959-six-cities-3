import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getRating = (state: State): number => state[NameSpace.Review].review.rating;
export const getComment = (state: State): string => state[NameSpace.Review].review.comment;
export const getReviewFormLoadingStatus = (state: State): boolean => state[NameSpace.Review].isReviewFormLoading;
