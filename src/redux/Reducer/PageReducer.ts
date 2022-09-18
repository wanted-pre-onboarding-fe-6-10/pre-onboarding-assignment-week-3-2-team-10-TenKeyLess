import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PageState {
  page: number;
  limit: number;
  order: "desc" | "asc" | null;
  sort: "id" | "author" | null;
}

const initalState: PageState = {
  page: 1,
  limit: 4,
  order: null,
  sort: null,
};

export const PageSlice = createSlice({
  name: "Page",
  initialState: initalState,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      const page = action.payload;
      return { ...state, page: page };
    },
    updateLimit: (state, action: PayloadAction<number>) => {
      const limit = action.payload;
      return { ...state, limit: limit };
    },
    updateOrder: (state, action: PayloadAction<PageState>) => {
      const { order } = action.payload;
      return { ...state, order: order };
    },
    updateSort: (state, action: PayloadAction<PageState>) => {
      const { sort } = action.payload;
      return { ...state, sort: sort };
    },
  },
});

export const { updatePage, updateLimit, updateOrder, updateSort } =
  PageSlice.actions;

export const Pages = (state: RootState) => state.page;

export default PageSlice.reducer;
