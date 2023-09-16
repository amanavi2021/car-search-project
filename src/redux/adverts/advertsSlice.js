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
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAdvertsByPage.fulfilled, (state, action) => {
        state.currentItems = [...state.currentItems, ...action.payload];
      }),
});

export const advertsReducer = advertsSlice.reducer;
