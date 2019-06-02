import React, { Component } from 'react';

class HaikuForm extends Component {
  render() {
    return (
      <form className="HaikuForm">
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          id="title-input" />
        <label htmlFor="line-1">Line 1 - 5 syllables</label>
        <input 
          type="text" 
          id="line-1-input" />
        <label htmlFor="line-2">Line 2 - 7 syllables</label>
        <input 
          type="text" 
          cid="line-2-input" />
        <label htmlFor="line-3">Line 3 - 5 syllables</label>
        <input 
          type="text" 
          id="line-3-input" />
        <button 
          className="HaikuForm-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default HaikuForm;