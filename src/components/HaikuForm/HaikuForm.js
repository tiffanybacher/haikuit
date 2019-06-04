import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export class HaikuForm extends Component {
  state = {
    title: this.props.title || '',
    line1: this.props.line1 || '',
    line2: this.props.line2 || '',
    line3: this.props.line3 || ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const id = Date.now();

    this.props.addHaiku({ ...this.state, id });

    this.props.redirect(`/haiku/${id}`);
  }

  render() {
    return (
      <form className="HaikuForm" onSubmit={this.handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          id="title-input"
          name="title"
          value={this.state.title}
          onChange={this.handleChange} />
        <label htmlFor="line-1">Line 1 - 5 syllables</label>
        <input 
          type="text" 
          id="line-1-input"
          name="line1"
          value={this.state.line1}
          onChange={this.handleChange} />
        <label htmlFor="line-2">Line 2 - 7 syllables</label>
        <input 
          type="text" 
          id="line-2-input"
          name="line2"
          value={this.state.line2}
          onChange={this.handleChange} />
        <label htmlFor="line-3">Line 3 - 5 syllables</label>
        <input 
          type="text" 
          id="line-3-input"
          name="line3"
          value={this.state.line3}
          onChange={this.handleChange} />
         <button 
           className="HaikuForm-check">
           Check Syllables
        </button>
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