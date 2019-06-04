import { fetchWord } from './fetchWord';
import { wordsApiKey } from './apiKeys';

describe('fetchWord', () => {
  let searchQuery;
  let url;
  let options;
  let mockData;
  let fetch;

  beforeEach(() => {
    searchQuery = 'tenacity';
    url = `https://wordsapiv1.p.mashape.com/words/${searchQuery}`;
    options = { headers: { 'X-RapidAPI-Key': `${wordsApiKey}` } };
    mockData = { word: 'tenacity', definition: 'persistent determination' }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it('should call fetch with the correct params', async () => {
    await fetchWord(searchQuery);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should throw error if response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
  });

  it('should return a parsed response if response is okay', async () => {
    const result = await fetchWord(searchQuery);
    const expected = mockData;

    expect(result).toEqual(mockData);
  });
});