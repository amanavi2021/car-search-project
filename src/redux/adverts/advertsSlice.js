import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getAdvertsByPage } from './operations';

const initialState = {
  items: [],
  currentItems: [],
  favoriteItems: [],
  total: 0,
  isLoading: false,
  error: null,
  filters: { make: '', price: '', mileageFrom: '', mileageTo: '' },
};

const toggleFavorite = (state, action) => {
  const favoritesId = [...state.favoriteItems].map(advert => advert.id);
  if (favoritesId.includes(action.payload.id)) {
    state.favoriteItems = state.favoriteItems.filter(
      advert => advert.id !== action.payload.id
    );
  } else {
    state.favoriteItems = [action.payload, ...state.favoriteItems];
  }
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFavorite: toggleFavorite,
    updateFilters: (state, action) => {
      state.filters.make = action.payload.make;
      state.filters.price = action.payload.price;
      state.filters.mileageFrom = action.payload.mileageFrom;
      state.filters.mileageTo = action.payload.mileageTo;
    },
  },
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
      .addCase(getAdvertsByPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertsByPage.fulfilled, (state, action) => {
        state.currentItems = [...state.currentItems, ...action.payload];
        state.isLoading = false;
      })
      .addCase(getAdvertsByPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.currentItems = [];
      }),
});

export const advertsReducer = advertsSlice.reducer;

export const { setFavorite, updateFilters } = advertsSlice.actions;
