import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getRating = (state: Pick<State, NameSpace.Review>): number => state[NameSpace.Review].review.rating;
export const getComment = (state: Pick<State, NameSpace.Review>): string => state[NameSpace.Review].review.comment;
export const getReviewFormLoadingStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isReviewFormLoading;
