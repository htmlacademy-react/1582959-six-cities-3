import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT, NameSpace } from '../../const';
import { ChangeState } from '../../types/state';

const initialState: ChangeState = {
  city: DEFAULT_CITY,
  sort: DEFAULT_SORT,
};

export const changeSlise = createSlice({
  name: NameSpace.Change,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { changeCity, changeSort } = changeSlise.actions;
