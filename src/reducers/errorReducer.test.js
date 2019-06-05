import { errorReducer } from './errorReducer';
import * as actions from '../actions'

describe('errorReducer', () => {
  let state;

  beforeEach(() => {
    state = '';
  });

  it('should return state by default', () => {
    const result = errorReducer(state, {});
    
    expect(result).toEqual(state);
  });

  it('should return the message passed into action', () => {
    const message = 'Something went wrong';
    const action = actions.setError(message);
    const result = errorReducer(state, action);

    expect(result).toEqual(message);
  });

  it('should return an empty string', () => {
    const action = actions.clearError();
    const result = errorReducer(state, action);

    expect(result).toEqual('');
  });
});