import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '../../api/api.js';


export const fetchAllCampers = createAsyncThunk(
  'adverts/getAll',
  async(page, thunkAPI) => {
    try {
      const { data } = await apiInstance.get(`/adverts?page=${page}&limit=4`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendForm = createAsyncThunk(
  'adverts/sendForm',
  async(form, thunkAPI) => {
    try {
      const { data } = await apiInstance.post('/connect', form);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
