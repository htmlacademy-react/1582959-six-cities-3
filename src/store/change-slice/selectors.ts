import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveCity = (state: State): string => state[NameSpace.Change].city;
export const getActiveSortOption = (state: State): string => state[NameSpace.Change].sort;
