import { fetchWord } from './fetchWord';
import { wordsApiKey } from './apiKeys';
import * as actions from '../actions';

jest.mock('../actions');

describe('fetchWord', () => {
  let searchQuery;
  let url;
  let options;
  let mockData;
  let thunk;
  let dispatch;

  beforeEach(() => {
    searchQuery = 'tenacity';
    url = `https://wordsapiv1.p.mashape.com/words/${searchQuery}`;
    options = { headers: { 'X-RapidAPI-Key': `${wordsApiKey}` } };
    mockData = { word: 'tenacity', definition: 'persistent determination' };
    thunk = fetchWord(searchQuery);
    dispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it('should dispatch setLoading with true', async () => {
    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should call fetch with the correct params', async () => {
    await thunk(dispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should throw error if response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actions.setError());
  });

  it('should dispatch setLoading with true', async () => {
    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should return a parsed response if response is okay', async () => {
    const result = await thunk(dispatch);
    const expected = mockData;

    expect(result).toEqual(mockData);
  });
});