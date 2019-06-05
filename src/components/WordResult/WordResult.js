import React from 'react';

const WordResult = (props) => {
  console.log(props)
  let syllables;

  if (props.syllables) {
    syllables = props.syllables.count;
  } else {
    syllables = 1
  }

  return(
    <article className="WordResult">
      <h4>{props.word}:
        <span className="syllables"> {syllables} syllables</span>
      </h4>
    </article>
  );
}

export default WordResult;