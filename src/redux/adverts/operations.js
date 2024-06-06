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

export const fetchFilteredCampers = createAsyncThunk(
  "adverts/getFiltered",
  async (filter, thunkAPI) => {
    const { location, type } = filter;
    // const { location, details, type } = filter;
    try {
      const { data } = await apiInstance.get(`/adverts?location=${location}&form=${type}`);
      // const { data } = await apiInstance.get(`/adverts?location=${location}&details=[${details}]&form=${type}`);
      console.log("filter from operations = ", filter);
      console.log("data from operations = ", data);
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
