import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CommentState {
  value: number;
}

const initalState: CommentState = {
  value: 1,
};

export const CommentState = createSlice({
  name: "comment",
  initialState: initalState.value,
  reducers: {
    getComment: (state, action) => {},
  },
});
