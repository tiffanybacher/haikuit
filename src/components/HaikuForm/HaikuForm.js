import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class HaikuForm extends Component {
  state = {
    title: '',
    line1: '',
    line2: '',
    line3: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  // capture changes in local state
  // on submit:
    // give haiku an id and pass state to action 
      // use action to update haiku reducer
    // go to /haiku/:id and display haiku details with matching id
    // if press edit, then go to /haiku/:id/edit
      // update local state 
      // pass state to action to update haiku with matching id
    // if press save then go /haiku/:id/confirmation
  

  render() {
    return (
      <form className="HaikuForm">
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          id="title-input"
          name="title" />
        <label htmlFor="line-1">Line 1 - 5 syllables</label>
        <input 
          type="text" 
          id="line-1-input"
          name="line1" />
        <label htmlFor="line-2">Line 2 - 7 syllables</label>
        <input 
          type="text" 
          id="line-2-input"
          name="line2" />
        <label htmlFor="line-3">Line 3 - 5 syllables</label>
        <input 
          type="text" 
          id="line-3-input"
          name="line3" />
        <button 
          className="HaikuForm-submit">
          Submit
        </button>
      </form>
    );
  }
}



export default HaikuForm;

HaikuForm.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string
}