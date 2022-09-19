import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Api from "../../api";

interface CommentState {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

interface Comment {
  data: CommentState;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: Comment = {
  data: {
    id: 0,
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
  },
  loading: "idle",
};

export const fetchCommentById = createAsyncThunk(
  "comment/fetchCommentStatus",
  async (CommentId: number) => {
    const response = await Api.GetCommentById(CommentId);
    return response.data;
  }
);
export const deleteCommentById = createAsyncThunk(
  "comment/fetchCommentStatus",
  async (CommentId: number) => {
    const response = await Api.DeleteComment(CommentId);
    return response.data;
  }
);

export const CommentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    commentReset(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentById.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const Comment = action.payload;
      state.data = Comment;
    });
  },
});

export const { commentReset } = CommentSlice.actions;

export const CommentById = (state: RootState) => state.comment;

export default CommentSlice.reducer;
