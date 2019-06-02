import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
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

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addHaiku({ ...this.state, id: Date.now() });
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
      <form className="HaikuForm" onSubmit={this.handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          id="title-input"
          name="title"
          onChange={this.handleChange} />
        <label htmlFor="line-1">Line 1 - 5 syllables</label>
        <input 
          type="text" 
          id="line-1-input"
          name="line1"
          onChange={this.handleChange} />
        <label htmlFor="line-2">Line 2 - 7 syllables</label>
        <input 
          type="text" 
          id="line-2-input"
          name="line2"
          onChange={this.handleChange} />
        <label htmlFor="line-3">Line 3 - 5 syllables</label>
        <input 
          type="text" 
          id="line-3-input"
          name="line3"
          onChange={this.handleChange} />
        <button 
          className="HaikuForm-submit">
          Submit
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addHaiku: (haiku) => dispatch(actions.addHaiku(haiku)) 
});

export default connect(undefined, mapDispatchToProps)(HaikuForm);

HaikuForm.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string
}