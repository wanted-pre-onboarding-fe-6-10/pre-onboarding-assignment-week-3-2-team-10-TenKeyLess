import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'api/axios';
import { Comment } from 'src/types/comments';
import { ReducerUtilsType } from 'src/types/reducers';
import { reducerUtils } from 'utils/async.util';
import { PER_PAGE } from 'utils/constants';

interface CommentState {
  comments: Array<Comment>;
  focusPage: number;
  loading: boolean;
  error: any;
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async (page: number) => {
  const response = await axiosInstance.get(
    `/comments?_page=${page}&_limit=${PER_PAGE}&_order=desc&_sort=id`
  );
  return response.data;
});

/* Action Creators */
// const fetchComments = createAction<Array<Comment>>('GET_COMMENTS');
export const changePage = createAction<number>('CHANGE_PAGE');
export const modifyComment = createAction<any>('MODIFY_COMMENT');

/* Initial State */
const initialState = {
  comments: [],
  focusPage: 1,
  loading: false,
  error: null,
} as CommentState;

/* Reducer */
const commentReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchComments.fulfilled, (state, action) => {
      // Add user to the state array
      // state = { ...state, ...reducerUtils.success(action.payload) };
      state.comments = [...action.payload];
    })
    .addCase(changePage, (state, action) => {
      state.focusPage = action.payload;
      fetchComments(state.focusPage);
    });
});

export default commentReducer;
