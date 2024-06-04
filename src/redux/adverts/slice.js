import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, sendForm } from './operations.js';


const initialState = {
  campers: [],
  forms: [],
  page: 1,
  isDataEmpty: false,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.campers = [...state.campers, ...payload];
        state.isDataEmpty = !payload.length;
      })
      .addCase(fetchAllCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })      
      // FORM:
      .addCase(sendForm.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendForm.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.forms = payload;
      })
      .addCase(sendForm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }) 
  },
}); 


const campersReducer = campersSlice.reducer;

export const { clearCampersSelection, setPage } = campersSlice.actions
export default campersReducer;
