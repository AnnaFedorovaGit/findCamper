import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './adverts/slice';


export const store = configureStore({
    reducer: {
      campers: campersReducer,
  },
})
