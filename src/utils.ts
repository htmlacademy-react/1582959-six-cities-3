import { Reviews } from './types/types';

export const sortByDate = (reviews: Reviews) => reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
