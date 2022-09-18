import { combineReducers } from 'redux';
import commentReducer from './comment.reducer';

const rootReducer = combineReducers({ commentReducer });

export default rootReducer;
