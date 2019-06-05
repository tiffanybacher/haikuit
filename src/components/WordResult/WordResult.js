import React from 'react';

const WordResult = (props) => {
  let syllables;

  if (props.syllables) {
    syllables = props.syllables.count;
  } else {
    syllables = 1
  }

  return(
    <article className="WordResult">
      {!props.error && <h4>{props.word}:
         <span className="syllables"> {syllables} syllables</span>
      </h4>}
      {props.error && <p>{props.error}</p>}
    </article>
  );
}

export default WordResult;