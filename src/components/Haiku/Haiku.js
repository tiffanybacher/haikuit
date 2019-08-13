import React from 'react';

const Haiku = (props) => {
  let { title, line1, line2, line3 } = props;

  if (!props.id) {
    title = 'A Haiku about no haikus';
    line1 = 'You have no haikus!';
    line2 = 'Oh no! How sad. But don\'t fear!';
    line3 = 'Write one or a few!';
  }

  return (
    <article className={!props.id ? "no-hover Haiku" : "Haiku"}>
      <p className="title"><b>{title}</b></p>
      <p className="line-1">{line1}</p>
      <p className="line-2">{line2}</p>
      <p className="line-3">{line3}</p>
    </article>
  );
}

export default Haiku;