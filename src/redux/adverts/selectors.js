// import { createSelector } from '@reduxjs/toolkit';

export const selectorAdverts = state => state.adverts.items;

export const selectorCurrentAdverts = state => state.adverts.currentItems;

export const selectorFavoriteAdverts = state => state.adverts.favoriteItems;

export const selectorIsLoading = state => state.adverts.isLoading;

export const selectorFilter = state => state.adverts.error;

export const selectorTotal = state => state.adverts.total;
