# Haikuit
## By [Tiffany Bacher](https://github.com/tiffanybacher)
## Deployed at https://haikuit.herokuapp.com

## Description
The goal of this project was to create a simple app that could help users write Haikus. Users can either keep track of syllables of syllables in each line of their haiku or they can search a word to find the number of syllables in any word!

## Learning Goals
My personal learning goals of this project was to build and fully test an app utilzing React, Redux, and Router.

## Screenshots
<img width="367" alt="Screen Shot 2019-06-05 at 2 34 00 AM" src="https://user-images.githubusercontent.com/46252038/58943842-d9e61480-873d-11e9-9ad6-25bb9392c41a.png">
<img width="372" alt="Screen Shot 2019-06-05 at 3 04 51 AM" src="https://user-images.githubusercontent.com/46252038/58944279-bb344d80-873e-11e9-93f5-272777930463.png">
<img width="367" alt="Screen Shot 2019-06-05 at 2 29 51 AM" src="https://user-images.githubusercontent.com/46252038/58943834-d3579d00-873d-11e9-84c6-d5fb9cbbbfb9.png">
<img width="367" alt="Screen Shot 2019-06-05 at 2 33 25 AM" src="https://user-images.githubusercontent.com/46252038/58943840-d5b9f700-873d-11e9-92d2-a9cd4447da85.png">
<img width="367" alt="Screen Shot 2019-06-05 at 2 34 07 AM" src="https://user-images.githubusercontent.com/46252038/58943863-e5394000-873d-11e9-9cdb-a85bc3c71ca7.png">

## Technologies Used
 - HTML
 - SCSS
 - JavaScript
 - React
 - Redux
 - Router
 - Thunk
 - Jest & Enzyme
 - Webpack
 - ESLint
 
## Getting started

### `git clone https://github.com/tiffanybacher/haikuit.git`
run git clone to clone this repo onto your machine.

### `npm install`
run npm install to install dependencies.

### `npm start`
run npm start to view it in your browser.

## API
[WordsAPI](https://rapidapi.com/wordsapi/api/wordsapi)

## Setting up an API key
Obtain a key from [WordsAPI](https://rapidapi.com/wordsapi/api/wordsapi).\
Create a file named `.env` outside of `src`.\
Create a variable named `REACT_APP_WORDS_KEY` within `.env` and assign it your key.

`REACT_APP_WORDS_KEY=<your key here>`\

`wordsApiKey` is assigned to the environment variable where needed.\
`.env` is already within `.gitignore` so your key will not get pushed to GitHub.

## Issue tracking and future enhancements
https://github.com/tiffanybacher/haikuit/issues
