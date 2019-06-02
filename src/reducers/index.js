import { combineReducers } from 'redux';
import { haikusReducer } from './haikusReducer';

export const rootReducer = combineReducers({
  haikus: haikusReducer
});