import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchWord } from '../../apiCalls/fetchWord';

export class HaikuForm extends Component {
  state = {
    title: this.props.title || '',
    line1: this.props.line1 || '',
    line2: this.props.line2 || '',
    line3: this.props.line3 || '',
    line1Syllables: 0,
    line2Syllables: 0,
    line3Syllables: 0,
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  checkAllSyllables = (e) => {
    e.preventDefault();

    this.checkLineSyllables(1);
    this.checkLineSyllables(2);
    this.checkLineSyllables(3);
  }

  checkLineSyllables = (num) => {
    const line = this.findLine(num);
    const lineArray = line.split(' ');
    let lineCount = 0;

    lineArray.forEach(word => {
      this.props.fetchWord(word)
        .then(data => {
          if (data.syllables) {
            lineCount += data.syllables.count;
          } else {
            lineCount += 1;
          }

          const key = `line${num}Syllables`;

          this.setState({
            [key]: lineCount
          });
        });
    });
  }

  findLine = (num) => {
    let line;

    if (num === 1) {
      line = this.state.line1;
    } else if (num === 2) {
      line = this.state.line2;
    } else if (num === 3) {
      line = this.state.line3;
    }

    return line;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const id = Date.now();

    this.props.addHaiku({ ...this.state, id });

    this.props.redirect(`/haiku/${id}`);
  }

  render() {
    return (
      <form className="HaikuForm">
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
          onClick={this.checkAllSyllables}
          className="HaikuForm-check">
          Check Syllables
        </button>
        <button 
          onClick={this.handleSubmit}
          className="HaikuForm-submit">
          Submit
       </button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addHaiku: (haiku) => dispatch(actions.addHaiku(haiku)),
  fetchWord: (word) => dispatch(fetchWord(word))
});

export default connect(undefined, mapDispatchToProps)(HaikuForm);

HaikuForm.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line1Syllables: PropTypes.number,
  line2Syllables: PropTypes.number,
  line3Syllables: PropTypes.number,
}