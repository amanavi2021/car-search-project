import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getAdvertsByPage } from './operations';

const initialState = {
  items: [],
  currentItems: [],
  total: 0,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.length;
        const min = Math.min(action.payload.length, 8);
        state.currentItems = action.payload.slice(0, min);
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.items = [];
        state.currentItems = [];
      })
      .addCase(getAdvertsByPage.fulfilled, (state, action) => {
        state.currentItems = [...state.currentItems, ...action.payload];
        state.isLoading = false;
      }),
});

export const advertsReducer = advertsSlice.reducer;
