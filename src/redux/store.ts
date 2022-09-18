import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import commentReducer from './modules/comment';

export const rootReducer = combineReducers({ comment: commentReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
