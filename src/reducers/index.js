import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { haikusReducer } from './haikusReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  haikus: haikusReducer,
  error: errorReducer
});