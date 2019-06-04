import { combineReducers } from 'redux';
import { haikusReducer } from './haikusReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  haikus: haikusReducer,
  error: errorReducer
});