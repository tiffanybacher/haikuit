import { isLoadingReducer } from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  let state;

  beforeEach(() => {
    state = false;
  });

  it('should return state by default', () => {
    const result = isLoadingReducer(state, {});

    expect(result).toEqual(state);
  });

  it('should return the boolean passed into action', () => {
    const action = actions.setLoading(true);
    const result = isLoadingReducer(state, action);

    expect(result).toEqual(true);
  });
});