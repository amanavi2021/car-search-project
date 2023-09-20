import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648999e55fa58521caafe69b.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertsByPage = createAsyncThunk(
  'adverts/getAdvertsByPage',
  async ({ page }, thunkAPI) => {
    try {
      const path = `/adverts?completed=false&page=${page}&limit=8`;
      const response = await axios.get(path);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
