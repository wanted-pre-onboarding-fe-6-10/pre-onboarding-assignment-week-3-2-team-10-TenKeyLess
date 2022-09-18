import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commnetsReducer from "./Reducer/CommentsReducer";
import pageReducer from "./Reducer/PageReducer";
import commentById from "./Reducer/CommentByIdReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

const rootReducer = combineReducers({
  comments: commnetsReducer,
  page: pageReducer,
  comment: commentById,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
