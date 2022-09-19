import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Api from '../../api';

interface CommentState {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

const initalState: CommentState[] = [
  {
    id: 1,
    profile_url: 'https://picsum.photos/id/1/50/50',
    author: 'abc_1',
    content: 'UI 테스트는 어떻게 진행하나요',
    createdAt: '2022-03-01',
  },
];

export const fetchComments = createAsyncThunk(
  'comment/fetchCommentStatus',
  async () => {
    const response = await Api.GetComments();
    return response.data;
  }
);

export const CommentsSlice = createSlice({
  name: 'comments',
  initialState: initalState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentState[]>) => {
      const comments = action.payload;
      return [...comments];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const comments = action.payload;
      return [...comments];
    });
  },
});

export const { setComments } = CommentsSlice.actions;

export const Comments = (state: RootState) => state.comments;

export default CommentsSlice.reducer;
