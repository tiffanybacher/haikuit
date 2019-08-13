import * as actions from '../actions';

export const fetchWord = (searchQuery) => {
  const wordsApiKey = process.env.REACT_APP_WORDS_KEY;
  
  return async (dispatch) => {
    const url = `https://wordsapiv1.p.mashape.com/words/${searchQuery}`
    const options = {
      headers: { 'X-RapidAPI-Key': `${wordsApiKey}` }
    }

    try {
      dispatch(actions.setLoading(true));

      const response = await fetch(url, options);

      if(!response.ok) {
        throw Error(`"${searchQuery}" not found`);
      }
      
      const data = await response.json();

      dispatch(actions.setLoading(false));

      return data;
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}