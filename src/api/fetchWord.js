import { wordsApiKey } from './apiKeys'

export const fetchWord = async (searchQuery) => {
  const url = `https://wordsapiv1.p.mashape.com/words/${searchQuery}`
  const options = {
    headers: {"X-RapidAPI-Key": `${wordsApiKey}`}
  }

  try {
    const response = await fetch(url, options);

    if(!response.ok) {
      throw Error(response.statusText);
    }
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}