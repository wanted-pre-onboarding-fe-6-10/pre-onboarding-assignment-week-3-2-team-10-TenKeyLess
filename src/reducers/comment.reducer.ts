import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'api/axios';
import { Comment } from 'src/types/comments';

interface CommentState {
  comments: Array<Comment>;
  status: string;
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await axiosInstance.get('/comments');
  return response.data;
});

/* Action Creators */
// const fetchComments = createAction<Array<Comment>>('GET_COMMENTS');
const modifyComment = createAction<any>('MODIFY_COMMENT');

/* Initial State */
const initialState = {
  comments: [],
  status: 'initial',
} as CommentState;

/* Reducer */
const commentReducer = createReducer(initialState, builder => {
  builder.addCase(fetchComments.fulfilled, (state, action) => {
    // Add user to the state array
    state.comments.push(...action.payload);
  });
});

export default commentReducer;
