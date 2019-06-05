import React from 'react';

const BackBtn = (props) => {
  return (
    <button 
      className="back-btn" 
      onClick={props.goBack}>
      Back
    </button>
  );
}

export default BackBtn;
