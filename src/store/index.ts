import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

/*
{
  comments : { 1:{} , 2:{}, 3: {}, 4: {} ... },
  currentList: [5, 6, 7, 8]
}
*/
