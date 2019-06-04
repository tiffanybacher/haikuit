import { wordsApiKey } from './apiKeys';
import * as actions from '../actions';

export const fetchWord = (searchQuery) => {
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

      console.log(data);
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}