import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {},
  reducers: {
    add: (state: any, actions) => {
      state[actions.payload.id] = actions.payload;
    },
    deleteData: (state, actions) => {
      return state;
    },
  },
});

export const { add } = movieSlice.actions;

export const store = configureStore({
  reducer: { movies: movieSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
