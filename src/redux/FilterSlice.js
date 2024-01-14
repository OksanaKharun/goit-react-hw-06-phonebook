import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addFilter, filter } = FilterSlice.actions;