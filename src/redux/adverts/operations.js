import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648999e55fa58521caafe69b.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      console.log('getAdverts');
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
      console.log('page', page);
      const path = `/adverts?completed=false&page=${page}&limit=8`;
      const response = await axios.get(path);
      console.log('responseByPage', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
